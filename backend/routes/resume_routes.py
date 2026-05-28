from flask import Blueprint, request
import os

from utils.pdf_extractor import extract_text_resume
from utils.ats import analyze_resume

from models.resume_models import ResumeAnalysis
from extensions import db
from utils.ai_suggestions import generate_suggestions   

resume_bp = Blueprint('resume', __name__)

UPLOAD_FOLDER = 'uploads'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@resume_bp.route('/')
def home():
    return {"message": "Backend Running Successfully"}

@resume_bp.route('/upload', methods=['POST'])
def upload_resume():

    if 'resume' not in request.files:
        return {"error": "No file uploaded"}, 400

    file = request.files['resume']

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(filepath)

    extracted_text = extract_text_resume(filepath)

    job_description = request.form.get('jobDescription')

    analysis = analyze_resume(
        extracted_text,
        job_description
    )

    suggestions=generate_suggestions(extracted_text, job_description, analysis['missing_skills'], analysis['ats_score'], analysis['keyword_score'], analysis['quality_score'], analysis['formatting_score'])

    analysis_data= ResumeAnalysis(
        filename=file.filename,
        extracted_text=extracted_text,
        skills_found=", ".join(analysis["resume_skills"]),
        missing_skills=", ".join(analysis["missing_skills"]),
        ats_score=analysis['ats_score'],
        job_description=job_description
    )

    db.session.add(analysis_data)
    db.session.commit()

    return {
        "message": "Resume uploaded successfully",
        "resume_text": extracted_text,
        "feedback": suggestions,
        **analysis
    }

@resume_bp.route('/history', methods=['GET'])
def get_history():

    analyses=ResumeAnalysis.query.order_by(ResumeAnalysis.id.desc()).limit(4).all()
    history=[]
     
    for analysis in analyses:
        history.append({
            "id": analysis.id,
            "filename": analysis.filename,
            "ats_score": analysis.ats_score,
            "skills_found": analysis.skills_found,
            "missing_skills": analysis.missing_skills,
        })
    return {"history": history}
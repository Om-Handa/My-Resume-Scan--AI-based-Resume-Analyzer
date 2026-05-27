from extensions import db

class ResumeAnalysis(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    filename = db.Column(db.String(200))

    extracted_text = db.Column(db.Text)

    skills_found = db.Column(db.Text)

    missing_skills = db.Column(db.Text)

    ats_score = db.Column(db.Integer)

    job_description = db.Column(db.Text)
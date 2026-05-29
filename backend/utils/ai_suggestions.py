from google import genai
import os
import re

client= genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def extract_resume(resume_text, missing_skills):
    keywords = set(missing_skills + ["experience", "project", "skill", "education"])
    lines = resume_text.split('\n')
    relevant = [l for l in lines if any(k.lower() in l.lower() for k in keywords)]
    return '\n'.join(relevant)[:800] 

def extract_jd(jd):
    lines = jd.split('\n')
    relevant = [l for l in lines if any(k in l.lower() for k in 
                ["require", "skill", "experience", "must", "prefer", "qualif"])]
    return '\n'.join(relevant)[:500]

def generate_suggestions(resume_text, job_description, missing_skills, ats_score, quality_score, keyword_score, formatting_score):
    suggestions=[]

    for skill in missing_skills[:4]:
        suggestions.append(f"Add {skill} skills to your resume")

    if ats_score < 60:
        suggestions.append("Improve project descriptions with measurable achievements")

    if quality_score<60:   
        suggestions.append("Use stronger action words in project descriptions") 
        suggestions.append("Add action words like 'Deployed, Optimized, Developed, Managed etc.'") 
        
    if formatting_score<60:   
        suggestions.append("Include clear Skills, Projects and Education sections") 

    if keyword_score < 60:
        suggestions.append("Add more job-relevant technical keywords")
        

    prompt = f"""ATS Score: {ats_score}
    Missing: {", ".join(missing_skills[:5])}
    JD: {extract_jd(job_description)}
    Resume: {extract_resume(resume_text, missing_skills)}

    Write 4 resume improvement suggestions. Plain text, one per line, max 15 words each."""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config={ "max_output_tokens": 200, "temperature":0.4, "thinking_config":{"thinking_budget":0}}
        )
        text = response.text.strip()
        if text and len(text)>10:
            lines= text.split("\n")
            for line in lines:
                cleaned = re.sub(r"^[-•*\d.\)\s]+", "", line).strip()
                if len(cleaned)>5:
                    suggestions.append(cleaned)
    
    except Exception as e:
        print(f"[generate_suggestions] API error: {e}")

    unique_suggestions=[]
    for item in suggestions:
        if item not in unique_suggestions:
            unique_suggestions.append(item)

    return unique_suggestions[:6]
    

def calculate_semantic_score(resume_text, job_description):

    prompt = f"""
    Compare this resume with the job description.
    Return ONLY a number between 30 to 100.

    Resume: {resume_text[:1000]}
    Job Description: {job_description[:500]}
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config={"max_output_tokens":10, "temperature":0.1,"thinking_config": {"thinking_budget": 0}}
        )
        match = re.search(r'\b(\d{2,3})\b', response.text.strip())
        score = int(match.group()) if match else 50
        return min(max(score, 0), 100)

    except Exception as e:
        print(f"[calculate_semantic_score] error: {e}") 
        return 50
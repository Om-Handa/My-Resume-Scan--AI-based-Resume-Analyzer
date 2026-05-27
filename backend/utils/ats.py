from utils.skills import skills_list
from utils.ai_suggestions import calculate_semantic_score

def extract_skills(text):

    found_skills = []
    text = text.lower()
    
    for skill in skills_list:
        if skill.lower() in text:
            found_skills.append(skill)

    return found_skills

def calculate_formatting_score(resume_text):
    score=100
    if(len(resume_text)<100):
        score-=40
    
    if "education" not in resume_text.lower():
        score-=15

    if "project" not in resume_text.lower():
        score-=15

    if "skill" not in resume_text.lower():
        score-=15
    
    return max(score, 0)

def calculate_quality_score(resume_text):
    score=100

    action_words = ["developed", "led", "managed", "created", "designed", "implemented", "improved", "optimized", "collaborated", "achieved"]

    found=0

    for word in action_words:
        if word in resume_text.lower():
            found+=1
    
    score=int((found/len(action_words))*100)
    return score


def analyze_resume(resume_text, job_description):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(job_description)

    matched_skills = []
    missing_skills = []

    for skill in jd_skills:
        if skill in resume_skills:
            matched_skills.append(skill)
        else:
            missing_skills.append(skill)

    keyword_score = int((len(matched_skills) / len(jd_skills)) * 100) if jd_skills else 0
    semantic_score=calculate_semantic_score(resume_text, job_description)
    formatting_score = calculate_formatting_score(resume_text)
    quality_score = calculate_quality_score(resume_text)

    final_score= int((0.30*keyword_score)+(0.40*semantic_score)+(0.15*formatting_score)+(0.15*quality_score))


    return {
        "resume_skills": resume_skills,
        "jd_skills": jd_skills,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "ats_score": final_score,
        "keyword_score": keyword_score,
        "semantic_score": semantic_score,
        "formatting_score": formatting_score,
        "quality_score": quality_score
    }
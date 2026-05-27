from google import genai
    
client= genai.Client(api_key="AIzaSyD-lnZ2iyxtfgrKT7htNvc-y1EQ_Kpeiec")

def generate_suggestions(resume_text, job_description, missing_skills, ats_score):
    prompt = f"""

    You are an ATS resume reviewer.
    ATS Score: {ats_score}
    Missing Skills:{missing_skills}
    Resume:{resume_text}
    Job Description:{job_description}

   Give:
    - 4 concise improvement points

    Rules:
    - Maximum 80 words
    - Short bullet points only
    - No headings
    - No paragraphs
    - No introduction
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config={ "max_output_tokens": 120}
        )
        return response.text
    except Exception as e:
        print(f"Error generating suggestions: {e}")
        return "Error generating suggestions."
    

def calculate_semantic_score(resume_text, job_description):

    prompt = f"""
    Compare this resume with the job description.
    Return ONLY a number between 0 to 100.

    Resume:
    {resume_text}

    Job Description:
    {job_description}
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        score = int(response.text.strip())
        return score

    except:
        return 70
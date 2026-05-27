import pdfplumber

def extract_text_resume(filepath):
    extracted_text=" "

    with pdfplumber.open(filepath) as pdf:
        for page in pdf.pages:
            text=page.extract_text()

            if text:
                extracted_text+=text+"\n"
    return extracted_text
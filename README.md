<div align="center">

# 🚀 ResumeScan AI

### AI-Powered Resume Analyzer & ATS Score Checker

Analyze resumes, calculate ATS scores, identify missing skills, receive AI-powered suggestions, and generate downloadable reports.

<img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react">
<img src="https://img.shields.io/badge/Flask-Backend-black?style=for-the-badge&logo=flask">
<img src="https://img.shields.io/badge/MySQL-Database-orange?style=for-the-badge&logo=mysql">
<img src="https://img.shields.io/badge/Gemini-AI-green?style=for-the-badge&logo=google">

</div>

---

## 📌 Overview

ResumeScan AI is a full-stack web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS).

The application compares a resume with a job description, calculates an ATS score, identifies missing skills, evaluates resume quality, and provides AI-powered improvement suggestions.

---

## ✨ Features

✅ Resume Upload (PDF)

✅ ATS Score Calculation

✅ Keyword Matching

✅ Semantic Similarity Analysis

✅ Resume Quality Evaluation

✅ Formatting Analysis

✅ AI-Powered Resume Suggestions

✅ Downloadable PDF Report

✅ Upload History Tracking

✅ Responsive Dashboard UI

✅ Drag & Drop Resume Upload

---

## 🖥️ Dashboard Preview

### Resume Upload

* Upload resume in PDF format
* Paste Job Description
* Analyze instantly

### ATS Analysis

* ATS Score Visualization
* Keyword Match Score
* Semantic Match Score
* Formatting Score
* Resume Quality Score

### AI Suggestions

* Missing skills recommendations
* ATS optimization tips
* Resume improvement suggestions

### History

* Stores recent resume analyses
* Quick access to previous results

---

## ⚙️ Tech Stack

### Frontend

<ul>
<li>React.js</li>
<li>Vite</li>
<li>Tailwind CSS</li>
<li>Recharts</li>
<li>React Icons</li>
<li>jsPDF</li>
</ul>

### Backend

<ul>
<li>Python</li>
<li>Flask</li>
<li>Flask-CORS</li>
<li>Flask-SQLAlchemy</li>
<li>PyMySQL</li>
<li>pdfplumber</li>
</ul>

### Database

<ul>
<li>MySQL</li>
</ul>

### AI

<ul>
<li>Google Gemini 2.5 Flash</li>
</ul>

---

## 🧠 ATS Scoring Formula

<pre>
ATS Score =
30% Keyword Match
+ 40% Semantic Match
+ 15% Formatting Score
+ 15% Resume Quality
</pre>

---

## 📊 Score Components

### Keyword Match

Measures exact skill matches between the resume and job description.

### Semantic Match

Uses AI to evaluate overall relevance and contextual similarity.

### Formatting Score

Checks resume structure and essential sections.

### Resume Quality

Analyzes action verbs and content effectiveness.

---

## 📁 Project Structure

<pre>
ResumeScan-AI
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── routes
│   ├── models
│   ├── utils
│   ├── uploads
│   ├── app.py
│   └── requirements.txt
│
└── README.md
</pre>

---

## 🔧 Installation

### Clone Repository

<pre>
git clone https://github.com/your-username/resumescan-ai.git

cd resumescan-ai
</pre>

---

### Backend Setup

<pre>
cd backend

pip install -r requirements.txt
</pre>

Create a `.env` file:

<pre>
GEMINI_API_KEY=your_api_key

DATABASE_URL=mysql+pymysql://username:password@host/database
</pre>

Run Backend:

<pre>
python app.py
</pre>

---

### Frontend Setup

<pre>
cd frontend

npm install

npm run dev
</pre>

---

## 🌐 Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* MySQL (Railway)

---

## 📄 PDF Report

Generated reports include:

* ATS Score
* Score Breakdown
* Missing Skills
* AI Suggestions
* Resume Evaluation Summary

---

## 🔒 Future Enhancements

* User Authentication
* Personalized Analysis History
* Resume Templates
* Multi-Page PDF Reports
* Skill Gap Analytics
* Resume Version Tracking
* Cover Letter Generator

---

## 👨‍💻 Author

### Om Handa

Full Stack Developer | Python Developer | React Enthusiast

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

</div>

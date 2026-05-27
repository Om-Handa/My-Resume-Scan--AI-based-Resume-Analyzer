import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

function App() {

  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const [history, sethistory] = useState([])
  const [suggestions, setSuggestions] = useState("")
  const [analysis, setAnalysis] = useState(null)

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const response = await fetch("http://127.0.0.1:5000/history");
    const data = await response.json();
    sethistory(data.history);
  };

  const handleUpload = async () => {

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDescription);

    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    alert(data.message);
    setSuggestions(data.feedback)
    setAnalysis(data)
    fetchHistory()
  };
  const downloadReport = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text("AI Resume Analysis Report", 20, 20);

    doc.setFontSize(14);

    doc.text(
      `ATS Score: ${analysis?.ats_score}%`,
      20,
      40
    );

    doc.text(
      `Keyword Match: ${analysis?.keyword_score}%`,
      20,
      55
    );

    doc.text(
      `Semantic Match: ${analysis?.semantic_score}%`,
      20,
      70
    );

    doc.text(
      `Formatting Score: ${analysis?.formatting_score}%`,
      20,
      85
    );

    doc.text(
      `Resume Quality: ${analysis?.quality_score}%`,
      20,
      100
    );

    doc.text(
      `Missing Skills: ${analysis?.missing_skills}`,
      20,
      120
    );

    doc.text(
      "AI Suggestions:",
      20,
      145
    );

    doc.text(
      suggestions || "",
      20,
      160,
      { maxWidth: 170 }
    );

    doc.save("ATS_Report.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">

      <h1 className="text-4xl font-bold">
        AI Resume Analyzer
      </h1>

      <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className="border p-2" />

      <textarea placeholder="Paste Job Description" onChange={(e) => setJobDescription(e.target.value)}></textarea>

      <button onClick={handleUpload} className="bg-black text-white px-6 py-2 rounded">
        Upload Resume
      </button>

      {/* {analysis.missingSkills && analysis.missingSkills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))} */}

      <div className="border p-5 rounded mt-10 max-w-3xl">

        <p className="whitespace-pre-wrap">
          {suggestions}
        </p>

      </div>

      {analysis && (

        <div className="flex flex-col gap-2">

          <h1>
            ATS Score:
            {analysis.ats_score}%
          </h1>

          <h2>
            Keyword Match:
            {analysis.keyword_score}%
          </h2>

          <h2>
            Semantic Match:
            {analysis.semantic_score}%
          </h2>

          <h2>
            Formatting:
            {analysis.formatting_score}%
          </h2>

          <h2>
            Resume Quality:
            {analysis.quality_score}%
          </h2>

        </div>

      )}
      <button
        onClick={downloadReport}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Download Report
      </button>
      {/* <div className="mt-10 w-full max-w-4xl">

        <h1 className="text-3xl font-bold mb-5">
          Analysis History
        </h1>

        <div className="flex flex-col gap-4">

          {history.map((item) => (

            <div
              key={item.id}
              className="border p-5 rounded shadow"
            >

              <h2 className="text-xl font-bold">
                {item.filename}
              </h2>

              <p>
                ATS Score:
                <span className="font-bold">
                  {" "} {item.ats_score}%
                </span>
              </p>

              <p>
                Skills:
                {" "} {item.skills_found}
              </p>

              <p>
                Missing Skills:
                {" "} {item.missing_skills}
              </p>

            </div>

          ))}

        </div>

      </div> */}
    </div>
  );
}

export default App;
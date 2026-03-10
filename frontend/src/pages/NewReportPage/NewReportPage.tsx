import { Link } from "react-router";
import "./NewReportPage.css";
import { useState, useEffect } from "react";
import usePost from "../../hooks/usePost";
import ImageUpload from "../../components/ImageUpload/ImageUpload";

const URL = "http://localhost:3000/reports";

function NewReportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");
  const [message, setMessage] = useState("");

  const { sendData, error, success, loading } = usePost();

  function submitForm(e: any) {
    e.preventDefault();

    const formData = new FormData();

    if (file) {
      formData.append("image", file);
    }

    formData.append("report", JSON.stringify({category, urgency, message}));
    
    sendData(URL, "POST", formData);
  }

  return (
    <main className="new-report-page">
      <form onSubmit={submitForm}>
        <div>
          <h1>Create Report</h1>
          <h2>Create and add a report</h2>
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            className="input"
            type="text"
            placeholder="Enter category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Urgency</label>
          <input
            className="input"
            type="text"
            placeholder="Enter urgency..."
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows={5} placeholder="Enter message..." value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <ImageUpload file={file} setFile={setFile} />
        <div className="btn-section">
          <button className="button button-blue" type="submit">
            Send
          </button>
          <Link to="/dashboard" className="button button-grey">
            Back
          </Link>
        </div>
      </form>
    </main>
  );
}

export default NewReportPage;

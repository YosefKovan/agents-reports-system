import "./CsvUploadPage.css";
import { useState, type HtmlHTMLAttributes } from "react";
import usePost from "../../hooks/usePost";
import AlertComponent from "../../components/AlertComponent/AlertComponent";


const URL: string = "http://localhost:3000/reports/csv";

const CsvUploadPage = () => {

  const {sendData, success, loading, error} = usePost()  
  const [file, setFile] = useState<File | null>(null);
  

  function handleClick(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleSend(e) {
    e.preventDefault();
    
    if(!file){
        return;
    }

    const formData : FormData = new FormData();
    
    formData.append("reports", file);

    const data = await sendData(URL, "POST", formData);

    console.log(data);
    
  }
  
  return (
    <main className="csv-page">
      {success && <div className="alert">
        <AlertComponent message={success} className="success"/>
      </div>}
      
      <form>
        <label htmlFor="fileInput" className="custom-file-upload">
          <div className="button">Upload CSV</div>
          <div className="file-name">{file && file.name}</div>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none;" }}
          onChange={handleClick}
        />
        <button className="send-csv-button" onClick={handleSend}>
          Send
        </button>
      </form>
    </main>
  );
};

export default CsvUploadPage;

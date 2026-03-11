import { useEffect, useState, type FC, type HtmlHTMLAttributes } from "react";
import useFetch from "../../hooks/useFetch";
import { type Report } from "../../interfaces/report.interfaces";
import "./AdminReportsPage.css";
import "../../css/link.buttons.css";
import "../../index.css"
import Select from "../../components/Select/Select";
import ReportsTable from "../../components/ReportsTable/ReportsTable";

const URL = "http://localhost:3000/reports";

const AdminReportsPage: FC = () => {
  
  const { loading, apiData, error } = useFetch<{ reports: Report[] }>(URL);
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [urgencies, setUrgencies] = useState<Set<string>>(new Set());
  const [category, setCategory] = useState<string>("all");
  const [urgency, setUrgency] = useState<string>("all");
  const [userId, setUserId] = useState("");
  const [display, setDisplay] = useState<Report[]>([]);
  
  useEffect(() => {
    
    if (!apiData) {
      return;
    }

    setDisplay(apiData.reports);
    
    const categories = apiData.reports.map((report: Report) => {
          return report.category;
    })

    const urgencies = apiData.reports.map((report : Report)=>{
        return report.urgency;
    })    

    setCategories( new Set<string>(categories));
    setUrgencies(new Set<string>(urgencies));

  }, [apiData]);
  
  function clearForm(e : React.MouseEvent<HTMLButtonElement>) : void{
    e.preventDefault();
    setCategory("all");
    setUrgency("all");
    setUserId("");
    setDisplay(apiData?.reports || []);
  }
  
  function filter(report : Report) : boolean{
         
        if(category !== "all" && report.category !== category) return false;
        
        if(urgency !== "all" && report.urgency !== urgency) return false;

        if(userId !== "" && String(userId) !== String(report.userId)) return false;

        return true;
  }

  function handleFilter(e : React.MouseEvent<HTMLButtonElement>) : void{
    e.preventDefault();
    
    const filtered = apiData?.reports.filter((report)=>{
        return filter(report);
    })

    
    setDisplay(filtered || []);
  }


  return (
    <main className="admin-reports-page container">
      <section className="filter-section">
        <form>
          <div className="form-group">
            <input placeholder="Search By User Id.." value={userId} onChange={(e)=>setUserId(e.target.value)}/>
          </div>
          <div className="form-group">
            <Select value={category} setValue={setCategory} options={Array.from(categories)}/>
          </div>
           <div className="form-group">
            <Select value={urgency} setValue={setUrgency} options={Array.from(urgencies)}/>
          </div>
          <div className="btn-section">
            <button onClick={handleFilter} className="btn-secondary">Filter</button>
            <button onClick={clearForm} className="btn-yellow">Clear</button>
          </div>
        </form>
        </section>
      <section className="table-section">  
        <ReportsTable reports={display}/>
      </section>
    </main>
  );
};

export default AdminReportsPage;

import Card from "../../components/Card/Card";
import "./MyReportsPage.css";
import useFetch from "../../hooks/useFetch";
import {type Report} from "../../interfaces/report.interfaces";
import "../../index.css";
import { Link } from "react-router";
import { ClipLoader } from "react-spinners";

const URL : string = "http://localhost:3000/reports"

function MyReportsPage(){
    
    const {loading, apiData, error} = useFetch<{reports : Report[]}>(URL)
     
    if(loading){
        return(
            <main className="loading-section">{loading && <ClipLoader loading={loading} size={60}/>}</main>
        )
    }

    return(
        <main className="my-reports-page">
            
            <header>
                <h1>My Reports Page</h1>
                <Link className="button" to="/agent/dashboard">Back</Link>
            </header>
            {error && <section className="error-section"></section>}
            {apiData && !error &&(
                <section className="reports-section">
                    {apiData?.reports.map((report : Report)=><Card key={report.id} {...report}/>)}
                </section>
            )}
        </main>
    )

}

export default MyReportsPage;


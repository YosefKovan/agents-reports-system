import "./AgentDashboard.css";
import { Link } from "react-router";

function AgentDashboard(){
    
    return(
        <main className="agent-dashboard-page">
            <section className="agent-dashboard-btns">
                <Link className="btn blue-btn" to={"/new-report-page"}>Send Report</Link>
                <Link className="btn blue-outline-btn" to={"/my-reports-page"}>View Reports</Link>
            </section>
        </main>
    )
}

export default AgentDashboard;
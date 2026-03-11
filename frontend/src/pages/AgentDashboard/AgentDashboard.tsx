import "./AgentDashboard.css";
import "../../css/dashboard.css";

import { Link } from "react-router";

function AgentDashboard(){
    
    return(
        <main className="dashboard-page">
            <section className="dashboard-btns">
                <Link className="btn blue-btn" to={"/agent/new-report"}>Send Report</Link>
                <Link className="btn blue-outline-btn" to={"/agent/my-reports"}>View Reports</Link>
            </section>
        </main>
    )
}

export default AgentDashboard;
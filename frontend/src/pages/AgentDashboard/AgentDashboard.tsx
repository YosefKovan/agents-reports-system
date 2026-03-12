import "./AgentDashboard.css";
import "../../css/dashboard.css";
import useStore, {type StoreInterface} from "../../store/useStore";
import {type User} from "../../interfaces/user.interfaces"; 
import { Link } from "react-router";

function AgentDashboard(){
    
    const user = useStore<User | null>((state : StoreInterface)=>state.user)

    return(
        <main className="dashboard-page">
             <h1>Welcome {user && `${user.role} ${user.fullName}`}</h1>
            <section className="dashboard-btns">
                <Link className="btn blue-btn" to={"/agent/new-report"}>Send Report</Link>
                <Link className="btn blue-outline-btn" to={"/agent/my-reports"}>View Reports</Link>
            </section>
        </main>
    )
}

export default AgentDashboard;
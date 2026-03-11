import "./AdminDashboard.css"
import {type FC} from "react"
import "../../css/dashboard.css";
import { Link } from "react-router"


const AdminDashboard : FC = ()=>{

    return (
        <main className="dashboard-page">
            <h1>Welcome Admin</h1>
            <section className="dashboard-btns">
                <Link className="btn blue-btn" to={"/admin/view-users"}>Show All Users</Link>
                <Link className="btn blue-outline-btn" to={"/admin/reports"}>Manage Reports</Link>
            </section>
        </main>
    )
    
}

export default AdminDashboard;


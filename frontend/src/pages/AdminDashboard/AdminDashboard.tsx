import "./AdminDashboard.css"
import {type FC} from "react"
import "../../css/dashboard.css";
import { Link } from "react-router"
import useStore, {type StoreInterface} from "../../store/useStore";
import {type User} from "../../interfaces/user.interfaces"; 

const AdminDashboard : FC = ()=>{
    
    const user = useStore<User | null>((state : StoreInterface)=>state.user)

    return (
        <main className="dashboard-page">
            <h1>Welcome {user && `${user.role} ${user.fullName}`}</h1>
            <section className="dashboard-btns">
                <Link className="btn blue-btn" to={"/admin/view-users"}>Show All Users</Link>
                <Link className="btn blue-outline-btn" to={"/admin/reports"}>Manage Reports</Link>
            </section>
        </main>
    )
    
}

export default AdminDashboard;


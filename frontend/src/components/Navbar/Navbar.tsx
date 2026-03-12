import { Link } from "react-router";
import { type FC } from "react";
import { type LinkInterface } from "../../interfaces/link.interfaces";
import { useNavigate, type NavigateFunction} from "react-router";
import "./Navbar.css";
import useStore, {type StoreInterface} from "../../store/useStore";

interface Props{
    namesAndLinks : LinkInterface[]
}


const Navbar : FC<Props>= ({namesAndLinks})=>{
    
    const navigate : NavigateFunction = useNavigate();

    const deleteUser = useStore<() => void>((state : StoreInterface)=>state.deleteUser);

    function logout(){
        localStorage.removeItem("token");
        deleteUser();
        return navigate("/login");
    }
    
  
    return(
        <nav className="navbar">
            <h1>Agent App</h1>
            <ul>
                {namesAndLinks.map((obj : LinkInterface, index : number)=>{
                    return(
                        <li className="only-large" key={index}><Link to={obj.to}>{obj.name}</Link></li>
                    )
                })}
                <li><button className="logout" onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;
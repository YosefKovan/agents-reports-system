import {type FC} from "react"
import {type User} from "../../interfaces/user.interfaces";
import "./UserCard.css"


const UserCard : FC<User> = ({agentCode, fullName, role})=>{

    return(
        <div className="user-card">
            <ul>
                <li><span className="bold">Agent Code :</span> {agentCode}</li>
                <li><span className="bold">Role :</span> {role}</li>
                <li><span className="bold">Full Name :</span> {fullName}</li>
            </ul>
        </div>
    )
}

export default UserCard;
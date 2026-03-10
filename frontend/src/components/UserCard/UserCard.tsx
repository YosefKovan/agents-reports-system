import {type FC} from "react"
import {type User} from "../../interfaces/user.interfaces";

const UserCard : FC<User> = ({agentCode, fullName, role})=>{

    return(
        <div className="user-card">
            <ul>
                <li>Agent Code : {agentCode}</li>
                <li>Role : {role}</li>
                <li>Full Name : {fullName}</li>
            </ul>
        </div>
    )
}

export default UserCard;
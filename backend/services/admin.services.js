import {atbash} from "../utils/password.utils.js";
import * as usersDal from "../dal/users.dal.js";

export async function addUser(agentCode, fullName, role){
     
    const hashedPassword = atbash(fullName);
    
    const user = await usersDal.addUser(agentCode, fullName, role.toUpperCase(), hashedPassword);

    return user;
}


export async function getUsers(){
     
    return await usersDal.getAllUsers()
}
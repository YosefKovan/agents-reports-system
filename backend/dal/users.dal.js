import {readJsonFile} from "../utils/json.utils.js";


export async function getUserByAgentCode(agentCode){

    const data = await readJsonFile("./data/users.json");

    const agent = data.find((agent)=>agent.agentCode === agentCode);
    
    if(!agent){
        return { error : true, message : "user not found"}
    }
    
    return agent;
}
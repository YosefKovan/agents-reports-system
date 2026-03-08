import * as usersDal from "../dal/users.dal.js";
import { passwordsMatch } from "../utils/password.utils.js";
import { signToken } from "../utils/jwt.utils.js";
import HttpError from "../errors/HttpError.js";

export async function getUserByAgentCode(agentCode){
  
  const agent = await usersDal.getUserByAgentCode(agentCode);
  
  if(agent.error){    
     throw new HttpError(401, "password or username is not correct");
  }

  return agent;
}

export async function login(agentCode, password) {
    
  const agent = await getUserByAgentCode(agentCode);
 
  const result = passwordsMatch(password, agent.passwordHash);

  if (!result) {
    throw new HttpError(401, "password or username is not correct")
  }

  const payload = {
    id: agent.id,
    agentCode: agent.agentCode,
    fullName: agent.fullName,
    role: agent.role,
  };
   
  const token = signToken(payload);

  return {token, user : payload};
}

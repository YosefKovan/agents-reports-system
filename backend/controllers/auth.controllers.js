import * as authService from "../services/auth.services.js";
import HttpError from "../errors/HttpError.js";
import { log } from "console";

export async function login(req, res, next) {
  try {
    const { agentCode, password } = req.body;
   
    if(!agentCode || !password){
        throw new  HttpError(400, "must include agent code and password");
    }
     
    const result = await authService.login(agentCode, password);
    return res.status(200).json(result);

  } catch (error) {
    next(error);
  }
}

export async function getLoggedInUser(req, res, next) {
  try {
    const {id, agentCode, fullName, role} = req.payload;
    return res.status(200).json({user : {id, agentCode, fullName, role}});
  } catch (error) {
    next(error);
  }
}

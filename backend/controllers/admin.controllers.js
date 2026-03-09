import HttpError from "../errors/HttpError.js";
import * as adminService from "../services/admin.services.js";

export async function addUser(req, res, next){

    try{
        const {agentCode, fullName, role} = req.body;

        if(!agentCode || !fullName || !role){
            throw new HttpError(400, "must include agent code full name and role");
        }

        const user = await adminService.addUser(agentCode, fullName, role);

        return res.status(201).json({user});

    }catch(error){
        next(error);
    }
}
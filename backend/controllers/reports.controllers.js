import * as reportService from "../services/report.service.js";
import HttpError from "../errors/HttpError.js";

export async function addReport(req, res, next){

    try{
        const {category, urgency, message} = req.body.report;
        const {file} = req;
        const {id} = req.payload;

        if(!category || !urgency || !message){
            throw new HttpError(401, "must include a category, urgency and message");
        }

        const result = await reportService.addReport(category, urgency, message, id, file);
        return res.status(200).json({report : result})

    }catch(error){
        next(error);
    }
}
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

export async function addReportsFromCsv(req, res, next){

    try{
        const {file} = req;
        const {id} = req.payload;
        const reports = await reportService.addReportsFromCsv(file, id);
        return res.status(201).json({reports})
    }catch(error){
        next(error);
    }
}

export async function getReports(req, res, next){

    try{
        const {category, urgency} = req.query;
        const {id, role} = req.payload;
        const reports = await reportService.getReports(category, urgency, id, role);
        return res.status(200).json({reports});
    }catch(error){
        next(error);
    }
}

export async function getReportById(req, res, next){
    
    try{
        const reportId = req.params.id;
        const userId = req.payload.id;
        const {role} = req.payload;

        const report = await reportService.getReportById(reportId, userId, role);
        return res.status(200).json({report});
    }catch(error){
        next(error);
    }
}
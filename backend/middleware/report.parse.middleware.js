import HttpError from "../errors/HttpError.js";

export function parseReport(req, res, next){

    const {report} = req.body;

    if(!report){
        new HttpError(401, "must send a report");
    }

    const jsonReport = JSON.parse(report);
    req.body.report = jsonReport;

    next();
}
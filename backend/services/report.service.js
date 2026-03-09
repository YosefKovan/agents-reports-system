import * as reportsDal from "../dal/reports.dal.js";
import fs from "fs/promises";
import {storeImage} from "../storage/image.storage.js";
import {readCsvBuffer} from "../utils/csv.utils.js";
import HttpError from "../errors/HttpError.js";

const ADMIN = "ADMIN";
const AGENT = "AGENT";

export async function addReport(category, urgency, message, userId, file){
    
    let filePath = null;
    
    //save the image to onto the disk if the image exists.
    if(file){
       filePath = await storeImage(file.buffer, file.originalname);
    }
    
    const report = {userId , category, urgency, message, filePath};

    const result = await reportsDal.addReport(report);

    return result;
}

export async function addReportsFromCsv(file, userId){
    
    const csvData = await readCsvBuffer(file.buffer);
    
    const csvWithUserId = csvData.map((data)=>{
        return {...data, userId, filePath : null}
    });     
    
    const result = await reportsDal.addReports(csvWithUserId);

    return result;
} 

export async function getReports(category, urgency, agentId, role){
    
    let reports;
    
    role = role.toUpperCase();

    if(role === ADMIN){
        reports = await reportsDal.getAllReports();
    }else{
        reports = await reportsDal.getReportsByAgentId(agentId);
    }


    return reports.filter((report)=>{

        if(category && report.category !== category){
            return false;
        }

        if(urgency && report.urgency !== urgency){
            return false;
        }

        return true;
    })

}

export async function getReportById(reportId, userId, role){

    const report = await reportsDal.getReportByReportId(reportId);

    if(!report){
        throw new HttpError(404, "report not found."); 
    }

    if(role.toUpperCase() !== ADMIN && String(report.userId) !== String(userId)){
        throw new HttpError(403, "unauthorized to view this report.")
    }

    return report;
}
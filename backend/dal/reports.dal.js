import {writeJsonFile, readJsonFile} from "../utils/json.utils.js";
import { v4 as uuidv4 } from 'uuid';

const REPORTS_FILE = "./data/reports.json";

export async function addReport(data){
    
    const report = {...data, id : uuidv4(), createdAt : new Date()};

    const allReports = await readJsonFile(REPORTS_FILE);

    allReports.push(report);

    await writeJsonFile(REPORTS_FILE, allReports);

    return report;
}

export async function addReports(data){

    const allReports = await readJsonFile(REPORTS_FILE);
     
    const curReports = data.map(element => {
        return {...element, id : uuidv4(), createdAt : new Date()}
    });

    
    await writeJsonFile(REPORTS_FILE, [...allReports, ...curReports]);

    return curReports;

}

export async function getReportsByAgentId(agentId){

    const allReports = await readJsonFile(REPORTS_FILE);

    return allReports.filter((report)=>String(report.userId) === String(agentId))
}

export async function getAllReports(){

    const allReports = await readJsonFile(REPORTS_FILE);

    return allReports;
}

export async function getReportByReportId(reportId){

    const allReports = await readJsonFile(REPORTS_FILE);

    const report = allReports.find((report)=>String(report.id) === String(reportId));

    return report;
}
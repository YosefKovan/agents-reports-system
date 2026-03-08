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
import * as reportsDal from "../dal/reports.dal.js";
import fs from "fs/promises";
import {storeImage} from "../storage/image.storage.js";

// const IMAGE_PATH = path.join(process.cwd(), 'data', 'uploads');

export async function addReport(category, urgency, message, userId, file){
    
    let filePath = null;
    
    //save the image to onto the disk if the image exists.
    if(file){
       filePath = await storeImage(file.buffer, file.originalname);
    }
    
    const report = {userId , category, urgency, message, filePath};

    const result = reportsDal.addReport(report);

    return result;
}




import multer from "multer";
import path from "path";
import fs from "fs/promises";

const uploadPath = path.join(process.cwd(), 'data', 'uploads');


export async function storeImage(buffer, originalName){
    
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + originalName;

    const fullFilePath = path.join(uploadPath, uniqueName);

    await fs.writeFile(fullFilePath, buffer);

    return fullFilePath;
}

const storage = multer.memoryStorage();

const uploadImage = multer({ storage: storage });

export default uploadImage;
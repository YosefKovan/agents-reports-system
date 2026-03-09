import multer from "multer";
import path from "path";
import fs from "fs/promises";

const uploadPath = path.join(process.cwd(), 'data', 'uploads');

const MAX_FILE_SIZE = 1024 * 1024 * 2;

/*
this function will store the image onto the disk,
*/
export async function storeImage(buffer, originalName){
    
    const ext = path.extname(originalName);

    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + ext;

    const fullFilePath = path.join(uploadPath, uniqueName);

    await fs.writeFile(fullFilePath, buffer);

    return fullFilePath;
}

const storage = multer.memoryStorage();
const uploadImage = multer({ storage: storage, 
    limits : {
        fileSize : MAX_FILE_SIZE
    },
});

export default uploadImage;
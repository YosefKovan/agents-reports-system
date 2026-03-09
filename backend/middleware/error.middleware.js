import HttpError from "../errors/HttpError.js"
import multer from "multer";

const errorMessages = {
  LIMIT_PART_COUNT: 'Too many parts',
  LIMIT_FILE_SIZE: 'File too large',
  LIMIT_FILE_COUNT: 'Too many files',
  LIMIT_FIELD_KEY: 'Field name too long',
  LIMIT_FIELD_VALUE: 'Field value too long',
  LIMIT_FIELD_COUNT: 'Too many fields',
  LIMIT_UNEXPECTED_FILE: 'Unexpected field',
  MISSING_FIELD_NAME: 'Field name missing'
}

function getMulterCode(code){

    switch(code){
        case errorMessages["LIMIT_FILE_SIZE"] :
            return 413;
        case errorMessages["LIMIT_FILE_COUNT"] :
            return 413; 
    }
}

function errorMiddleware(err, req, res, next){
    
    console.error("Error:", err.message);
    
    if(err instanceof multer.MulterError){
        const code = getMulterCode(err.code);
        return res.status(413).json({message : err.message})
    }

    if(err instanceof HttpError){
              
        return res.status(err.code).json({error : err.message});
    }
    
    return res.status(500).json({error : "internal server error."})
}

export default errorMiddleware;
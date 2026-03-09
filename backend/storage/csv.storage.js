import multer from "multer";
import HttpError from "../errors/HttpError.js";
import path from "path"

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits:{
      files: 1 
  },
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== ".csv") {
      return callback(new HttpError(401, "Only csv file is allowed"));
    }
    callback(null, true);
  },
});

export default upload;
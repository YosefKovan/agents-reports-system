import express from "express";
import * as reportsController from "../controllers/reports.controllers.js"
import uploadImage from "../storage/image.storage.js";
import{parseReport} from "../middleware/report.parse.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", uploadImage.single("image"), parseReport, reportsController.addReport);

export default router;
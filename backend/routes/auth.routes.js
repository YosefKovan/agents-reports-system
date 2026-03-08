import express from "express";
import * as authController from "../controllers/auth.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", authController.login);

router.get("/me", authMiddleware, authController.getLoggedInUser);

export default router;
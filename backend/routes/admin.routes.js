import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';
import * as adminController from "../controllers/admin.controllers.js";

const router = express.Router();

const ADMIN = "ADMIN";

router.use(authMiddleware, roleMiddleware(ADMIN));

router.post("/users", adminController.addUser);

export default router;
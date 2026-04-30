import express from "express";
import { createEmail } from "../controllers/emailController.js";

const router = express.Router();

router.get("/generate", createEmail);

export default router;
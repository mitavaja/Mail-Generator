import express from "express";
import { sendEmail, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", sendEmail);
router.get("/:email", getMessages);

export default router;
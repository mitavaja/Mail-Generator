import nodemailer from "nodemailer";
import logger from "../utils/logger.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Verify connection (important)
transporter.verify((error, success) => {
  if (error) {
    logger("error", "Mail server error: " + error.message);
  } else {
    logger("success", "Mail server is ready");
  }
});

export default transporter;
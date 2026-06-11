import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

let transporter;

if (process.env.SMTP_HOST) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
} else {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export const sendMail = async ({ from, to, subject, text }) => {
  const mailOptions = {
    to,
    subject,
    text
  };

  if (process.env.SMTP_HOST) {
    mailOptions.from = from ? `"${from}" <${from}>` : `"${process.env.SMTP_USER}" <${process.env.SMTP_USER}>`;
  } else {
    mailOptions.from = from ? `"${from}" <${process.env.EMAIL_USER}>` : process.env.EMAIL_USER;
  }

  if (from) {
    mailOptions.replyTo = from;
  }

  await transporter.sendMail(mailOptions);
};
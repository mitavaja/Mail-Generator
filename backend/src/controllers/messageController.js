import Message from "../models/Message.js";
import { sendMail } from "../services/mailSender.js";

// send email
export const sendEmail = async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    await sendMail(to, subject, body);

    const message = await Message.create({
      to,
      from: "system@tempmail.com",
      subject,
      body
    });

    res.json({ success: true, message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get inbox
export const getMessages = async (req, res) => {
  try {
    const { email } = req.params;

    const messages = await Message.find({ to: email }).sort({ createdAt: -1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
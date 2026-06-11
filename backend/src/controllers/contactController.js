import { sendMail } from "../services/mailSender.js";

export const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email, and message are required." });
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || "mitavaja3@gmail.com";

    const emailBody = `You have received a new message from the contact form on your TempMail website.

Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}
Message:
${message}
`;

    await sendMail({
      from: email,
      to: recipient,
      subject: `[Contact Form] ${subject || "New Message"}`,
      text: emailBody
    });

    res.json({ success: true, message: "Contact message sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

import Message from "../models/Message.js";

// 📩 Receive email from webhook
export const receiveMail = async (req, res) => {
  try {
    // Mailgun / SendGrid format (approx)
    const { from, to, subject, text } = req.body;

    const message = await Message.create({
      from,
      to,
      subject,
      body: text
    });

    res.status(200).send("Email received");

  } catch (error) {
    console.error("Mail receive error:", error.message);
    res.status(500).send("Error receiving mail");
  }
};
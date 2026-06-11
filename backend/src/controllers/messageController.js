import Message from "../models/Message.js";
import { sendMail } from "../services/mailSender.js";

// send email
export const sendEmail = async (req, res) => {
  try {
    const { from, to, subject, body } = req.body;

    await sendMail({ from, to, subject, text: body });

    const message = await Message.create({
      to,
      from: from || "system@tempmail.com",
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

    if (email && (email.includes("@1secmail.com") || email.includes("@1secmail.org") || email.includes("@1secmail.net"))) {
      const [login, domain] = email.split("@");
      try {
        const listUrl = `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`;
        const listRes = await fetch(listUrl);
        if (listRes.ok) {
          const remoteMessages = await listRes.json();
          for (const msg of remoteMessages) {
            const exists = await Message.findOne({ to: email, externalId: String(msg.id) });
            if (!exists) {
              const detailUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${msg.id}`;
              const detailRes = await fetch(detailUrl);
              if (detailRes.ok) {
                const detail = await detailRes.json();
                await Message.create({
                  to: email,
                  from: detail.from,
                  subject: detail.subject,
                  body: detail.textBody || detail.body || detail.htmlBody || "",
                  externalId: String(msg.id),
                  createdAt: new Date(detail.date)
                });
              }
            }
          }
        }
      } catch (err) {
        console.error("Error syncing with 1secmail:", err.message);
      }
    }

    const messages = await Message.find({ to: email }).sort({ createdAt: -1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
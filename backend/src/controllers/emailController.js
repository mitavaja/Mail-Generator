import Email from "../models/Email.js";
import { generateEmail } from "../utils/generateEmail.js";

export const createEmail = async (req, res) => {
  try {
    const newEmail = generateEmail();

    const email = await Email.create({
      address: newEmail
    });

    res.json(email);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
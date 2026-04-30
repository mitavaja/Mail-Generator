import Email from "../models/Email.js";
import { generateEmail } from "../utils/generateEmail.js";

// 🎯 Generate & store email
export const createTempEmail = async () => {
  const address = generateEmail();

  const email = await Email.create({ address });

  return email;
};

// 🧹 Delete old emails (optional cleanup)
export const deleteOldEmails = async (minutes = 10) => {
  const time = new Date(Date.now() - minutes * 60 * 1000);

  await Email.deleteMany({ createdAt: { $lt: time } });
};
import { v4 as uuidv4 } from "uuid";

export const generateEmail = () => {
  const random = uuidv4().slice(0, 6);
  const domains = ["1secmail.com", "1secmail.org", "1secmail.net"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${random}@${randomDomain}`;
};
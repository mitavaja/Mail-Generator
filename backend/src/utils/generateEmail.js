import { v4 as uuidv4 } from "uuid";

export const generateEmail = () => {
  const random = uuidv4().slice(0, 6);
  return `${random}@tempmail.com`;
};
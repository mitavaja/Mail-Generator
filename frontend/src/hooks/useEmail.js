import { useState } from "react";
import API from "../services/api";

export default function useEmail() {
  const [email, setEmail] = useState("");

  const generateEmail = async () => {
    const res = await API.get("/email/generate");
    setEmail(res.data.address);
  };

  return { email, generateEmail };
}
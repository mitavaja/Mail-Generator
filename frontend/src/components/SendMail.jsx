import React, { useState } from "react";
import API from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Send, User, Type, MessageSquare } from "lucide-react";

export default function SendMail() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: ""
  });

  const handleSend = async () => {
    try {
      await API.post("/messages/send", form);

      toast("Mail sent successfully ✅", {
        position: "top-right",
        autoClose: 3000,
        style: {
          background: "#ffffff",
          color: "#0f172a",
          border: "1px solid #0f172a",
          boxShadow: "0 4px 12px rgba(10, 31, 68, 0.2)",
          borderRadius: "8px"
        }
      });

    } catch (err) {
      toast.error("Failed to send mail ❌", {
        position: "top-right"
      });
    }
  };

  return (
    <div className="card-container">
      <h2>
        <Send size={24} /> Send Mail
      </h2>

      <div className="input-group">
        <div className="input-icon-wrapper">
          <User className="input-icon" size={20} />
          <input
            placeholder="To"
            onChange={(e) => setForm({ ...form, to: e.target.value })}
          />
        </div>
      </div>

      <div className="input-group">
        <div className="input-icon-wrapper">
          <Type className="input-icon" size={20} />
          <input
            placeholder="Subject"
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>
      </div>

      <div className="input-group">
        <div className="input-icon-wrapper" style={{ alignItems: "flex-start" }}>
          <MessageSquare className="input-icon" size={20} style={{ top: 14 }} />
          <textarea
            placeholder="Message"
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
        </div>
      </div>

      <button className="btn-primary" onClick={handleSend}>
        <Send size={20} /> Send Message
      </button>

      <ToastContainer />
    </div>
  );
}
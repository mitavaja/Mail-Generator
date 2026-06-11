import React, { useState } from "react";
import API from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Send, User, Type, MessageSquare, AlertCircle, AtSign } from "lucide-react";

export default function SendMail({ fromEmail }) {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!form.to) {
      toast.warn("Recipient email is required ⚠️", {
        position: "top-right",
        style: {
          background: "#0b132b",
          color: "#ffffff",
          borderLeft: "5px solid #f59e0b",
          boxShadow: "0 10px 25px -5px rgba(10, 25, 47, 0.2)",
          borderRadius: "8px",
          fontFamily: "Inter, sans-serif"
        }
      });
      return;
    }

    setIsSending(true);
    try {
      await API.post("/messages/send", { ...form, from: fromEmail });

      toast("Mail sent successfully ✅", {
        position: "top-right",
        autoClose: 3000,
        style: {
          background: "#0b132b",
          color: "#ffffff",
          borderLeft: "5px solid #10b981",
          boxShadow: "0 10px 25px -5px rgba(10, 25, 47, 0.2)",
          borderRadius: "8px",
          fontFamily: "Inter, sans-serif"
        }
      });

      // Reset form
      setForm({ to: "", subject: "", body: "" });

    } catch (err) {
      toast.error("Failed to send mail ❌", {
        position: "top-right",
        style: {
          background: "#0b132b",
          color: "#ffffff",
          borderLeft: "5px solid #ef4444",
          boxShadow: "0 10px 25px -5px rgba(10, 25, 47, 0.2)",
          borderRadius: "8px",
          fontFamily: "Inter, sans-serif"
        }
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="card-container premium-composer-card">
      <div className="card-header-flex mb-4">
        <div className="header-title-wrapper">
          <div className="title-icon-pill">
            <Send size={18} className="text-highlight-icon" />
          </div>
          <div>
            <h3 className="card-title-inline">Compose & Send</h3>
            <p className="card-subtitle">Send an email anonymously from this server</p>
          </div>
        </div>
      </div>

      <div className="composer-fields">
        <div className="input-group-premium">
          <label className="input-label-premium">Sender Address (Your Temp Email)</label>
          <div className="input-icon-wrapper-premium">
            <AtSign className="input-icon-premium" size={18} />
            <input
              type="email"
              value={fromEmail || "Generating email..."}
              readOnly
              className="form-input-premium"
              style={{ opacity: 0.8, cursor: "not-allowed" }}
            />
          </div>
        </div>

        <div className="input-group-premium">
          <label className="input-label-premium">Recipient Address</label>
          <div className="input-icon-wrapper-premium">
            <User className="input-icon-premium" size={18} />
            <input
              type="email"
              placeholder="e.g. user@example.com"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              className="form-input-premium"
            />
          </div>
        </div>

        <div className="input-group-premium">
          <label className="input-label-premium">Subject Line</label>
          <div className="input-icon-wrapper-premium">
            <Type className="input-icon-premium" size={18} />
            <input
              type="text"
              placeholder="Enter subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="form-input-premium"
            />
          </div>
        </div>

        <div className="input-group-premium">
          <label className="input-label-premium">Message Body</label>
          <div className="input-icon-wrapper-premium align-start">
            <MessageSquare className="input-icon-premium mt-3" size={18} />
            <textarea
              placeholder="Type your secure message here..."
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              className="form-textarea-premium"
            />
          </div>
        </div>
      </div>

      <button 
        className="btn-composer-send" 
        onClick={handleSend}
        disabled={isSending}
      >
        <Send size={18} className={isSending ? "fly-animation" : ""} />
        <span>{isSending ? "Sending Message..." : "Send Message"}</span>
      </button>

      <ToastContainer toastStyle={{ borderRadius: "10px" }} />
    </div>
  );
}
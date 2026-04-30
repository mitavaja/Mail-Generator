import React, { useState } from "react";
import { Copy, CheckCircle, RefreshCw, AtSign } from "lucide-react";

export default function EmailBox({ email, generateEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!email) return;

    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-container">
      <h2>
        <AtSign size={24} /> Your Email
      </h2>

      <div className="email-display-container">
        <input className="email-display-input flex-grow" value={email} readOnly />
        <button className={`btn-icon ${copied ? 'btn-success' : ''}`} onClick={handleCopy}>
          {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <button className="btn-primary" onClick={generateEmail}>
        <RefreshCw size={20} /> Generate New Email
      </button>
    </div>
  );
}
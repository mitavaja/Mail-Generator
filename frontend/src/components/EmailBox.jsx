import React, { useState, useEffect } from "react";
import { Copy, CheckCircle, RefreshCw, AtSign, ShieldAlert } from "lucide-react";

export default function EmailBox({ email, generateEmail }) {
  const [copied, setCopied] = useState(false);
  const [refreshCountdown, setRefreshCountdown] = useState(5);
  const [isRotating, setIsRotating] = useState(false);

  const handleCopy = () => {
    if (!email) return;

    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  // Visual countdown timer for auto-refreshing simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setRefreshCountdown((prev) => {
        if (prev <= 1) {
          return 5; // Reset countdown
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGenerateClick = () => {
    setIsRotating(true);
    generateEmail();
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <div className="card-container premium-email-card">
      <div className="card-header-flex">
        <div className="header-title-wrapper">
          <div className="title-icon-pill">
            <AtSign size={20} className="text-highlight-icon" />
          </div>
          <div>
            <h2 className="card-title-inline">Your Temporary Email Address</h2>
            <p className="card-subtitle">Copy this secure, anonymous address for verifications</p>
          </div>
        </div>
        <div className="live-status-pill">
          <span className="live-pulse"></span>
          <span className="live-pill-text">Checking inbox in {refreshCountdown}s</span>
        </div>
      </div>

      <div className="email-display-row">
        <div className="email-input-wrapper">
          <input 
            className="email-display-input-premium" 
            value={email || "Generating email..."} 
            readOnly 
            onClick={handleCopy}
            title="Click to copy email address"
          />
          <span className="email-input-hint">Click inside to copy</span>
        </div>

        <button 
          className={`btn-action-copy ${copied ? 'btn-copy-success' : 'btn-copy-default'}`} 
          onClick={handleCopy}
          disabled={!email}
        >
          {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
          <span className="btn-text">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="card-actions-row">
        <button 
          className="btn-action-generate" 
          onClick={handleGenerateClick}
        >
          <RefreshCw size={18} className={isRotating ? "spin-animation" : ""} /> 
          Generate New Address
        </button>
        
        <div className="security-notice-inline">
          <ShieldAlert size={14} />
          <span>Expires after 24 hrs of inactivity</span>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { User, Tag, ChevronDown, ChevronUp, Clock, MailOpen, Mail } from "lucide-react";

export default function MailItem({ msg }) {
  const [isOpen, setIsOpen] = useState(false);

  const formatTime = (dateStr) => {
    try {
      const d = new Date(dateStr || Date.now());
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return "Now";
    }
  };

  return (
    <div 
      className={`mail-item-premium ${isOpen ? 'mail-item-expanded' : 'mail-item-collapsed'}`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="mail-item-header">
        <div className="mail-meta-left">
          <div className={`mail-icon-badge ${isOpen ? 'badge-open' : 'badge-closed'}`}>
            {isOpen ? <MailOpen size={16} /> : <Mail size={16} />}
          </div>
          <div className="mail-details-summary">
            <div className="mail-sender-line">
              <span className="sender-avatar">{msg.from ? msg.from.substring(0, 2).toUpperCase() : "U"}</span>
              <span className="sender-name">{msg.from || "Anonymous"}</span>
            </div>
            <div className="mail-subject-line">
              <span className="subject-title">{msg.subject || "(No Subject)"}</span>
            </div>
          </div>
        </div>
        
        <div className="mail-meta-right">
          <span className="mail-time">
            <Clock size={12} />
            {formatTime(msg.createdAt)}
          </span>
          <div className="toggle-chevron">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="mail-item-body-wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="mail-body-divider"></div>
          <div className="mail-body-content">
            {msg.body || <span className="no-content-italic">This email contains no text body.</span>}
          </div>
        </div>
      )}
    </div>
  );
}
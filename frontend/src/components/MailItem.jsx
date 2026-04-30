import React from "react";
import { User, Tag } from "lucide-react";

export default function MailItem({ msg }) {
  return (
    <div className="mail-item">
      <div className="mail-header">
        <div>
          <div className="mail-sender">
            <User size={16} /> {msg.from}
          </div>
          <div className="mail-subject">
            <Tag size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} /> 
            {msg.subject}
          </div>
        </div>
      </div>
      <div className="mail-body">
        {msg.body}
      </div>
    </div>
  );
}
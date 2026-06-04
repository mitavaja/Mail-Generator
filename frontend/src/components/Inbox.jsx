import React, { useEffect, useState } from "react";
import API from "../services/api";
import MailItem from "./MailItem";
import { Inbox as InboxIcon, Inbox as InboxEmpty, Radio } from "lucide-react";

export default function Inbox({ email }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchInbox = async () => {
    if (!email) return;
    try {
      const res = await API.get(`/messages/${email}`);
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchInbox().finally(() => setIsLoading(false));

    const interval = setInterval(fetchInbox, 5000); // auto refresh
    return () => clearInterval(interval);
  }, [email]);

  return (
    <div className="card-container premium-inbox-card">
      <div className="card-header-flex mb-4">
        <div className="header-title-wrapper">
          <div className="title-icon-pill">
            <InboxIcon size={18} className="text-highlight-icon" />
          </div>
          <div>
            <h3 className="card-title-inline">
              Incoming Messages
              {messages.length > 0 && (
                <span className="count-badge">{messages.length}</span>
              )}
            </h3>
            <p className="card-subtitle">Received mails will appear here instantly</p>
          </div>
        </div>
        <div className="live-listener-pill">
          <Radio size={14} className="pulse-network" />
          <span>Live Feed</span>
        </div>
      </div>

      <div className="inbox-messages-list">
        {messages.length === 0 ? (
          <div className="empty-state-premium">
            <div className="empty-state-icon-decor">
              <InboxEmpty className="empty-icon-animated" size={32} />
            </div>
            <h4>Your inbox is empty</h4>
            <p>Waiting for incoming emails. Send a test email from the left form to see it live!</p>
            <div className="loading-bar-simulation">
              <div className="loading-bar-fill"></div>
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <MailItem key={msg._id} msg={msg} />
          ))
        )}
      </div>
    </div>
  );
}
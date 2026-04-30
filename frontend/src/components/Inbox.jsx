import React, { useEffect, useState } from "react";
import API from "../services/api";
import MailItem from "./MailItem";
import { Inbox as InboxIcon, Inbox as InboxEmpty } from "lucide-react";

export default function Inbox({ email }) {
  const [messages, setMessages] = useState([]);

  const fetchInbox = async () => {
    if (!email) return;

    const res = await API.get(`/messages/${email}`);
    setMessages(res.data);
  };

  useEffect(() => {
    fetchInbox();

    const interval = setInterval(fetchInbox, 5000); // auto refresh
    return () => clearInterval(interval);
  }, [email]);

  return (
    <div className="card-container">
      <h2>
        <InboxIcon size={24} /> Inbox
      </h2>
      {messages.length === 0 ? (
        <div className="empty-state">
          <InboxEmpty className="empty-icon" size={48} />
          <p>Your inbox is empty. Waiting for incoming emails...</p>
        </div>
      ) : (
        messages.map((msg) => (
          <MailItem key={msg._id} msg={msg} />
        ))
      )}
    </div>
  );
}
import React, { useEffect } from "react";
import useEmail from "../hooks/useEmail";
import EmailBox from "../components/EmailBox";
import Inbox from "../components/Inbox";
import SendMail from "../components/SendMail";
import { Mail } from "lucide-react";

export default function Home() {
  const { email, generateEmail } = useEmail();

  useEffect(() => {
    generateEmail();
  }, []);

  return (
    <div>
      <div className="header-container">
        <h1>
          <Mail className="header-icon" size={40} />
          Temporary Email
        </h1>
      </div>

      <EmailBox email={email} generateEmail={generateEmail} />

      <hr />

      <SendMail />

      <hr />

      <Inbox email={email} />
    </div>
  );
}
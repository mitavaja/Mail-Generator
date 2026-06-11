import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Mail, Key, Clock, AlertTriangle } from "lucide-react";
import AdSenseContainer from "../components/AdSenseContainer";

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is a temporary email (Temp Mail)?",
      icon: <Mail size={18} className="text-highlight-icon" />,
      a: "A temporary email is a disposable, short-lived email address that is created instantly and does not require any registrations, passwords, or personal details. It acts as an anonymous mailbox. When you need to verify an online account, access a download link, or test a software flow, you can generate a temp address. Any emails sent to this address will appear in your live inbox immediately. When you are finished, the mailbox is discarded, shielding your personal email from database harvesting and spam."
    },
    {
      q: "How long does a temporary email address remain valid?",
      icon: <Clock size={18} className="text-highlight-icon" />,
      a: "Your generated temporary email address remains fully active and open as long as your web browser tab is open. For security and optimization reasons, our servers automatically expire and permanently purge inactive mailboxes after 24 hours of inactivity. Once a mailbox expires, all incoming messages, files, logs, and email history are securely deleted from our server storage and cannot be recovered by anyone."
    },
    {
      q: "Is temporary email safe to use?",
      icon: <ShieldCheck size={18} className="text-highlight-icon" />,
      a: "Yes, temporary email is highly safe for its intended purpose. It protects your digital footprint by preventing websites from compiling your search preferences or selling your email address to advertisers. However, because these addresses do not require password authentication, they are public in nature. Therefore, you should never use temporary emails for highly sensitive accounts like bank portfolios, credit cards, government portals, or primary social media accounts. For registering on forums, bypassing paywalls, or testing code, they are incredibly safe."
    },
    {
      q: "Can I receive OTP codes and verification links?",
      icon: <Key size={18} className="text-highlight-icon" />,
      a: "Absolutely! Our temporary email system is fully compatible with standard verification procedures. You can receive OTP (One-Time Password) numeric codes, activation links, verification codes, and email attachments. Simply keep the dashboard tab open after entering your temporary address on the target website. The message containing your code will appear in your live feed in under 10 seconds. You can easily read the content, copy the code, and complete your registration."
    },
    {
      q: "Do I need to pay or register to use TempMail?",
      icon: <HelpCircle size={18} className="text-highlight-icon" />,
      a: "No registration, payment, or credit card details are required. Our service is 100% free and open to all users. We monetize the site through premium advertising (like Google AdSense) to keep the servers active and maintained. You can generate unlimited temporary email addresses daily without constraints."
    },
    {
      q: "Can I write and send emails from my temporary address?",
      icon: <Mail size={18} className="text-highlight-icon" />,
      a: "Yes! TempMail is one of the few platforms that supports outbound communications. You can use our 'Compose & Send' form to write messages, reply to verification prompts, and test external mail routing. Please note that sending spam or illegal materials is strictly prohibited and monitored to prevent system abuse."
    }
  ];

  return (
    <main className="dashboard-layout">
      {/* FAQ Banner Header */}
      <section className="blog-hero-section card-container premium-email-card" style={{ marginBottom: "24px" }}>
        <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Support Center</span>
        <h1 style={{ fontSize: "2.2rem", color: "var(--navy-950)", marginBottom: "12px" }}>
          Frequently Asked <span className="text-highlight">Questions</span>
        </h1>
        <p style={{ color: "var(--navy-700)", maxWidth: "700px", fontSize: "1.05rem" }}>
          Have questions about how disposable emails protect your privacy? Find answers to technical security queries, validation speeds, and usage guidelines in English.
        </p>
      </section>

      {/* Grid: FAQ & Sidebar Ads */}
      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Top Ad */}
          <AdSenseContainer type="infeed" slot="6666666661" />

          {/* Accordion FAQ Component */}
          <div className="card-container">
            <div className="accordion-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className={`accordion-item ${isOpen ? 'accordion-item-open' : ''}`}
                    onClick={() => toggleFaq(index)}
                    style={{ marginBottom: "16px", border: "1px solid var(--navy-200)", borderRadius: "12px", padding: "16px", cursor: "pointer", transition: "all var(--transition-smooth)" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div className="title-icon-pill" style={{ padding: "6px" }}>
                          {faq.icon}
                        </div>
                        <span style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--navy-950)" }}>
                          {faq.q}
                        </span>
                      </div>
                      <div>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                    
                    {isOpen && (
                      <div style={{ marginTop: "12px", paddingLeft: "42px", color: "var(--navy-700)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Ad */}
          <AdSenseContainer type="leaderboard" slot="6666666662" />
        </div>

        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <AdSenseContainer type="sidebar" slot="3333333335" />

          {/* Quick Warning Notice */}
          <div className="info-card info-card-compact" style={{ borderLeft: "4px solid var(--warning)" }}>
            <h4 style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--navy-950)" }}>
              <AlertTriangle size={16} className="text-warning-icon" style={{ color: "var(--warning)" }} /> Safety Alert
            </h4>
            <p className="privacy-note" style={{ fontSize: "0.85rem", color: "var(--navy-700)", marginTop: "6px" }}>
              Remember, temporary mailboxes expire. Never register accounts where you might need access to recover passwords in the future.
            </p>
          </div>

          <AdSenseContainer type="skyscraper" slot="4444444446" />
        </aside>
      </div>
    </main>
  );
}

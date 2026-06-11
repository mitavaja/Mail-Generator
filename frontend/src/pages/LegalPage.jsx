import React, { useState } from "react";
import { Scale, ShieldCheck, Mail, ShieldAlert, Send, CheckCircle } from "lucide-react";
import AdSenseContainer from "../components/AdSenseContainer";
import API from "../services/api";

export default function LegalPage({ type }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (contactData.name && contactData.email && contactData.message) {
      setIsSending(true);
      try {
        await API.post("/contact", contactData);
        setFormSubmitted(true);
        setContactData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        console.error("Failed to send contact message:", err);
        alert("Failed to send message. Please check your backend connection and try again.");
      } finally {
        setIsSending(false);
      }
    }
  };

  // Content renderer mapping based on page type
  const renderContent = () => {
    switch (type) {
      case "about":
        return (
          <div className="legal-article-box">
            <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Our Story</span>
            <h1 className="article-title">About Us</h1>
            <p className="article-p-paragraph">
              Welcome to <strong>TempMail</strong>, a leading provider of premium, high-speed, and secure disposable email address generation. Our platform was founded in 2026 by a team of dedicated security engineers and privacy advocates who noticed a growing gap in digital boundaries.
            </p>
            <h2 className="article-h2-heading">Our Mission</h2>
            <p className="article-p-paragraph">
              Our core mission is to empower users to reclaim control over their online identity. In today's hyper-connected environment, signing up for minor tools or accessing online documents requires revealing your personal email address. This results in inbox pollution, persistent tracking cookies, and the risk of identity leaks in database breaches. We provide a robust buffer: high-performance temporary inboxes that expire securely, keeping your personal communication channels private.
            </p>
            <h2 className="article-h2-heading">Why Choose TempMail?</h2>
            <p className="article-p-paragraph">
              Unlike default temporary email services, we build tools focused on usability and efficiency. Our background servers listen to SMTP connections in real time, delivering incoming validation codes in under 10 seconds. We also support outbound email composition, allowing you to reply to verification flows directly. We believe privacy shouldn't come with compromises.
            </p>
            <h2 className="article-h2-heading">Technical Reliability</h2>
            <p className="article-p-paragraph">
              We leverage cloud-based mail servers configured with strict SSL/TLS encryption. All incoming messages are stored only in memory or ephemeral databases, and are deleted securely after 24 hours of inactivity. We do not maintain historical archives, and we never log IPs or sell user records.
            </p>
          </div>
        );

      case "contact":
        return (
          <div className="legal-article-box">
            <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Get In Touch</span>
            <h1 className="article-title">Contact Us</h1>
            <p className="article-p-paragraph" style={{ marginBottom: "24px" }}>
              Have questions, inquiries, or feedback? Fill out the secure form below to contact our support department. We aim to respond to all developer and user requests within 24 to 48 hours.
            </p>

            {formSubmitted ? (
              <div className="card-container empty-state-premium" style={{ border: "2px solid var(--success)", padding: "40px 20px" }}>
                <div className="empty-state-icon-decor" style={{ backgroundColor: "var(--success-glow)" }}>
                  <CheckCircle className="empty-icon-animated" size={36} style={{ color: "var(--success)" }} />
                </div>
                <h4 style={{ color: "var(--success)" }}>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. A support representative will review your message and respond shortly.</p>
                <button className="btn-action-generate" style={{ marginTop: "12px" }} onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="card-container premium-composer-card">
                <div className="composer-fields">
                  <div className="input-group-premium">
                    <label className="input-label-premium">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={contactData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      className="form-input-premium"
                      style={{ paddingLeft: "16px" }}
                    />
                  </div>
                  <div className="input-group-premium">
                    <label className="input-label-premium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. name@domain.com"
                      className="form-input-premium"
                      style={{ paddingLeft: "16px" }}
                    />
                  </div>
                  <div className="input-group-premium">
                    <label className="input-label-premium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={contactData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. API Integration support"
                      className="form-input-premium"
                      style={{ paddingLeft: "16px" }}
                    />
                  </div>
                  <div className="input-group-premium">
                    <label className="input-label-premium">Message Body</label>
                    <textarea
                      name="message"
                      value={contactData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe your question or issue in detail..."
                      className="form-textarea-premium"
                      style={{ paddingLeft: "16px", minHeight: "150px" }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-composer-send" disabled={isSending}>
                  <Send size={18} /> {isSending ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        );

      case "privacy":
        return (
          <div className="legal-article-box">
            <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Privacy First</span>
            <h1 className="article-title">Privacy Policy</h1>
            <p className="article-p-paragraph">
              This Privacy Policy describes how <strong>TempMail</strong> collects, uses, and safeguards information when you visit and utilize our disposable email services. We operate on a strict privacy-by-design framework.
            </p>
            <h2 className="article-h2-heading">1. Zero Log Guarantee</h2>
            <p className="article-p-paragraph">
              We do not collect or request any personal identification details (such as names, phone numbers, or addresses) to use our platform. The temporary email addresses and the contents of all incoming mailboxes are stored temporarily in volatile memory or transient cache buffers, and are permanently erased after 24 hours of inactivity.
            </p>
            <h2 className="article-h2-heading">2. Information We Monitor</h2>
            <p className="article-p-paragraph">
              To defend against DDoS attacks and spam abuse on our outgoing mail API, our servers temporarily track standard system logs, which contain server statuses and request routing codes. These technical logs do not link back to individual identity files and are regularly rotated out.
            </p>
            <h2 className="article-h2-heading">3. Cookies & Advertising</h2>
            <p className="article-p-paragraph">
              We display advertisements using third-party networks (such as Google AdSense) to keep the platform free. Ad systems may use cookies or web beacons to customize and display ads based on your visit patterns. You can choose to reject cookies in your browser settings.
            </p>
            <h2 className="article-h2-heading">4. GDPR and CCPA Compliance</h2>
            <p className="article-p-paragraph">
              Because we do not store persistent databases of user logs, we do not compile profiles. If you need details regarding the deletion of any transient email cache data, you can rest assured that our 24-hour purge mechanism handles deletions automatically.
            </p>
          </div>
        );

      case "terms":
        return (
          <div className="legal-article-box">
            <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Usage Agreement</span>
            <h1 className="article-title">Terms & Conditions</h1>
            <p className="article-p-paragraph">
              By accessing and using <strong>TempMail</strong>, you agree to comply with and be bound by the following Terms and Conditions of Service. If you disagree, please discontinue your access immediately.
            </p>
            <h2 className="article-h2-heading">1. Permitted Use</h2>
            <p className="article-p-paragraph">
              TempMail provides disposable mailboxes for testing, account verification, privacy shielding, and application development. You agree not to use the service for illegal activities, including sending unauthorized marketing spam, phish campaigns, harassments, or distributing spyware/malware.
            </p>
            <h2 className="article-h2-heading">2. Outgoing Message Policy</h2>
            <p className="article-p-paragraph">
              Our platform permits sending outgoing emails solely for testing and verification validation. Any attempt to abuse the outgoing SMTP connection will trigger an automatic system firewall block and access ban.
            </p>
            <h2 className="article-h2-heading">3. Lifespan and Data Loss</h2>
            <p className="article-p-paragraph">
              You acknowledge that all email addresses generated by this tool are short-lived. We hold zero liability for data loss resulting from the deletion of expired mailboxes.
            </p>
            <h2 className="article-h2-heading">4. Modification of Services</h2>
            <p className="article-p-paragraph">
              We reserve the right to modify, suspend, or terminate mail services, domains, or access permissions at any time without prior notice.
            </p>
          </div>
        );

      case "disclaimer":
        return (
          <div className="legal-article-box">
            <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Liability Notice</span>
            <h1 className="article-title">Disclaimer</h1>
            <p className="article-p-paragraph">
              The services provided by <strong>TempMail</strong> are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.
            </p>
            <h2 className="article-h2-heading">1. Public Nature of Inboxes</h2>
            <p className="article-p-paragraph">
              Because temporary email addresses are generated programmatically without password protections, you should assume that any content received in a temporary inbox is potentially public. Do not use these mailboxes for confidential files or high-security authentication codes.
            </p>
            <h2 className="article-h2-heading">2. No Recovery Support</h2>
            <p className="article-p-paragraph">
              Once an email box is deleted (either manually by clicking refresh, or automatically after 24 hours of inactivity), its records are wiped from our storage devices. Our support desk cannot recover deleted messages, links, or attachments.
            </p>
            <h2 className="article-h2-heading">3. Limitation of Liability</h2>
            <p className="article-p-paragraph">
              In no event shall TempMail or its developers be held liable for any damages (including, without limitation, damages for loss of data, security access, or business interruption) arising out of the use or inability to use the temporary email service.
            </p>
          </div>
        );

      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <main className="dashboard-layout">
      <div className="dashboard-grid">
        {/* Main Content Pane */}
        <div className="dashboard-main">
          {/* Top Ad */}
          <AdSenseContainer type="infeed" slot="7777777771" />

          <article className="card-container">
            {renderContent()}
          </article>

          {/* Bottom Ad */}
          <AdSenseContainer type="leaderboard" slot="7777777772" />
        </div>

        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          {/* Sidebar Ads */}
          <AdSenseContainer type="sidebar" slot="3333333336" />

          {/* Guarantee Panel */}
          <div className="info-card">
            <h3 className="sidebar-title">
              <ShieldCheck size={18} className="text-highlight-icon" style={{ marginRight: "8px" }} />
              Security Check
            </h3>
            <ul className="feature-list">
              <li>
                <span className="feature-marker" style={{ color: "var(--success)" }}>✓</span>
                <div>
                  <strong>SSL/TLS Encrypted</strong>
                  <p>All data transfers are protected via HTTPS protocol layers.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker" style={{ color: "var(--success)" }}>✓</span>
                <div>
                  <strong>No Credentials Stored</strong>
                  <p>Your name, location, and IP are completely anonymous.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker" style={{ color: "var(--success)" }}>✓</span>
                <div>
                  <strong>Automatic Purging</strong>
                  <p>Wiped clean from cache drives daily.</p>
                </div>
              </li>
            </ul>
          </div>

          <AdSenseContainer type="skyscraper" slot="4444444447" />
        </aside>
      </div>
    </main>
  );
}

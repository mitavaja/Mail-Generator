import React, { useEffect } from "react";
import useEmail from "../hooks/useEmail";
import EmailBox from "../components/EmailBox";
import Inbox from "../components/Inbox";
import SendMail from "../components/SendMail";
import AdSenseContainer from "../components/AdSenseContainer";
import FaqSection from "../components/FaqSection";
import { Shield, Zap, RotateCw, ShieldCheck, Mail, ArrowRight, Lock, EyeOff } from "lucide-react";

export default function Home() {
  const { email, generateEmail } = useEmail();

  useEffect(() => {
    generateEmail();
  }, []);

  return (
    <main className="dashboard-layout">
      {/* Top Leaderboard Ad Slot */}
      <AdSenseContainer type="leaderboard" slot="1111111111" />

      {/* Main Grid: Tool Workspace on Left, Sidebar on Right */}
      <div className="dashboard-grid">
        
        {/* Left Column: Email Workspace */}
        <div className="dashboard-main">
          {/* Email generator container */}
          <EmailBox email={email} generateEmail={generateEmail} />
          
          {/* In-Feed Native Ad Slot */}
          <AdSenseContainer type="infeed" slot="2222222222" />

          {/* Side-by-side workspace: Composer & Inbox */}
          <div className="workspace-grid">
            <div className="workspace-column">
              <SendMail fromEmail={email} />
            </div>
            <div className="workspace-column">
              <Inbox email={email} />
            </div>
          </div>

          {/* ==========================================================================
             ENHANCED HOMEPAGE CONTENT SECTION FOR ADSENSE COMPLIANCE
             ========================================================================== */}
          
          {/* Section 1: Intro Section */}
          <section className="card-container homepage-section-card">
            <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Overview</span>
            <h2 className="homepage-section-title">Why Use a Temporary Email Generator?</h2>
            <p className="article-p-paragraph">
              Every day, online websites require you to provide your personal email address just to read an article, download a software build, or try a demo. When you share your real email address, you open your mailbox to persistent trackers, adware campaigns, newsletter spam, and risk your details being leaked in corporate database hacks.
            </p>
            <p className="article-p-paragraph">
              <strong>TempMail</strong> is your privacy shield. It instantly generates a clean, disposable email address that requires no registrations or passwords. It allows you to receive verification codes and OTP links safely. Once your signup transaction is complete, the mailbox simply expires and purges its contents. This ensures your primary inbox remains clean, organized, and spam-free.
            </p>
          </section>

          {/* Section 2: Core Features List */}
          <section className="card-container homepage-section-card">
            <h2 className="homepage-section-title" style={{ textAlign: "center", marginBottom: "30px" }}>Core Platform Features</h2>
            <div className="features-columns-grid">
              <div className="feature-column-item">
                <div className="feature-column-icon-wrapper" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent-blue)" }}>
                  <Zap size={22} />
                </div>
                <h3>Instant Provisioning</h3>
                <p>Get a randomized, functional email address the millisecond you open the site. No configuration, forms, or waiting required.</p>
              </div>
              <div className="feature-column-item">
                <div className="feature-column-icon-wrapper" style={{ backgroundColor: "#ECFDF5", color: "var(--success)" }}>
                  <RotateCw size={22} />
                </div>
                <h3>Auto-Refreshing Inbox</h3>
                <p>Our background listeners automatically poll the email servers every 5 seconds. Verification codes show up in real-time without reloading.</p>
              </div>
              <div className="feature-column-item">
                <div className="feature-column-icon-wrapper" style={{ backgroundColor: "#FFFBEB", color: "var(--warning)" }}>
                  <Mail size={22} />
                </div>
                <h3>Outbound Mail Composer</h3>
                <p>Unlike standard generators, we support outbound email composition. You can respond to validation messages or test API routing instantly.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Benefits Checklist */}
          <section className="card-container homepage-section-card">
            <h2 className="homepage-section-title">Strategic Benefits of Disposable Mail</h2>
            <div className="benefits-list-box">
              <div className="benefit-list-item">
                <div className="benefit-bullet-point">✓</div>
                <div>
                  <strong>Banish Marketing Clutter:</strong> Stop wasting time deleting newsletters, coupons, and weekly promotions from your personal mailbox.
                </div>
              </div>
              <div className="benefit-list-item">
                <div className="benefit-bullet-point">✓</div>
                <div>
                  <strong>Defend Against Phishing:</strong> Keep your main address hidden from public scraping tools and data broker databases that spammers query.
                </div>
              </div>
              <div className="benefit-list-item">
                <div className="benefit-bullet-point">✓</div>
                <div>
                  <strong>No Account Overhead:</strong> Free yourself from storing, updating, and remembering credentials for accounts you only plan to use once.
                </div>
              </div>
              <div className="benefit-list-item">
                <div className="benefit-bullet-point">✓</div>
                <div>
                  <strong>Enhance Software Development:</strong> Developers can generate mock user verification profiles dynamically during local testing cycles.
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Accordions & Step Visualizer (Original component upgraded) */}
          <FaqSection />
        </div>

        {/* Right Column: Sidebar */}
        <aside className="dashboard-sidebar">
          
          {/* Sidebar Ad Slot 1 */}
          <AdSenseContainer type="sidebar" slot="3333333333" />

          {/* Feature Info Card */}
          <div className="info-card">
            <h3 className="sidebar-title">
              <ShieldCheck size={20} className="text-highlight-icon" /> 
              Why TempMail?
            </h3>
            <ul className="feature-list">
              <li>
                <span className="feature-marker">✓</span>
                <div>
                  <strong>100% Free & Fast</strong>
                  <p>Instantly generate temp email addresses without registration.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker">✓</span>
                <div>
                  <strong>Protect Your Privacy</strong>
                  <p>Avoid spam, adware, and trackers on your personal inbox.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker">✓</span>
                <div>
                  <strong>Send & Receive</strong>
                  <p>Full capability to read incoming mail and compose messages.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker">✓</span>
                <div>
                  <strong>Auto-Refreshing</strong>
                  <p>Emails show up immediately without manual page refreshes.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Sidebar Ad Slot 2 */}
          <AdSenseContainer type="skyscraper" slot="4444444444" />

          {/* Security details card */}
          <div className="info-card info-card-compact">
            <h4>
              <Lock size={16} /> Privacy Guaranteed
            </h4>
            <p className="privacy-note">
              Your generated inbox is temporary and all records are deleted after 24 hours. We do not log or sell your email contents.
            </p>
          </div>
        </aside>

      </div>

      {/* Bottom Banner Ad Slot */}
      <AdSenseContainer type="leaderboard" slot="5555555555" />
    </main>
  );
}
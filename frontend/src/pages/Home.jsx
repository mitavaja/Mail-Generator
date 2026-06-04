import React, { useEffect } from "react";
import useEmail from "../hooks/useEmail";
import EmailBox from "../components/EmailBox";
import Inbox from "../components/Inbox";
import SendMail from "../components/SendMail";
import AdSenseContainer from "../components/AdSenseContainer";
import FaqSection from "../components/FaqSection";
import { Mail, ShieldCheck, Activity, HelpCircle, LifeBuoy, Scale, Lock } from "lucide-react";

export default function Home() {
  const { email, generateEmail } = useEmail();

  useEffect(() => {
    generateEmail();
  }, []);

  return (
    <div className="app-container">
      {/* Premium Navbar */}
      <header className="main-navbar">
        <div className="navbar-logo">
          <div className="logo-icon-wrapper">
            <Mail className="logo-icon" size={24} />
          </div>
          <span className="logo-text">
            Temp<span className="text-highlight">Mail</span>
          </span>
          <span className="logo-badge">PRO</span>
        </div>
        
        <nav className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="navbar-status">
          <span className="status-dot"></span>
          <span className="status-text">Server Active</span>
        </div>
      </header>

      {/* Main Page Layout */}
      <main className="dashboard-layout">
        
        {/* Top Leaderboard Ad Slot */}
        <AdSenseContainer type="leaderboard" slot="1111111111" />

        <div className="dashboard-grid">
          
          {/* Left Column: Primary Interface */}
          <div className="dashboard-main">
            {/* Generate & Copy Section */}
            <EmailBox email={email} generateEmail={generateEmail} />
            
            {/* In-Feed Native Ad Slot */}
            <AdSenseContainer type="infeed" slot="2222222222" />

            {/* Split layout for Send Mail & Inbox */}
            <div className="workspace-grid">
              <div className="workspace-column">
                <SendMail />
              </div>
              <div className="workspace-column">
                <Inbox email={email} />
              </div>
            </div>

            {/* FAQs and How It Works Section to fill the blank area */}
            <FaqSection />
          </div>

          {/* Right Column: Sidebar */}
          <aside className="dashboard-sidebar">
            
            {/* Sidebar Ad Slot 1 (Medium Rectangle) */}
            <AdSenseContainer type="sidebar" slot="3333333333" />

            {/* Features & Why TempMail Info Box */}
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

            {/* Sidebar Ad Slot 2 (Skyscraper) */}
            <AdSenseContainer type="skyscraper" slot="4444444444" />

            {/* Legal compliance notice (AdSense friendly) */}
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

      {/* Premium Dark Navy Footer (Crucial for AdSense Approval) */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo-icon-wrapper-footer">
              <Mail size={20} />
            </div>
            <h3>TempMail</h3>
            <p>Providing premium security, speed, and privacy. Generate disposable email addresses to keep your main inbox clean and protected.</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#">Generate Email</a></li>
                <li><a href="#">Compose Mail</a></li>
                <li><a href="#">Active Inbox</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4><Scale size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> Legal & Compliance</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#gdpr">GDPR / CCPA Info</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4><LifeBuoy size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> Support</h4>
              <ul>
                <li><a href="#faq">Frequently Asked Questions</a></li>
                <li><a href="#contact">Contact Support</a></li>
                <li><a href="#abuse">Report Abuse</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TempMail. All rights reserved. Made for professional privacy security.</p>
          <div className="footer-badges">
            <span className="badge-item">SSL Secure</span>
            <span className="badge-item">AdSense Partner</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
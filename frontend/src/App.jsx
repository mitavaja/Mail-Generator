import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Mail, Scale, LifeBuoy, Lock } from "lucide-react";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import FaqPage from "./pages/FaqPage";
import LegalPage from "./pages/LegalPage";
import ApiDocs from "./pages/ApiDocs";

// Helper component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        
        {/* Premium Shared Navbar */}
        <header className="main-navbar">
          <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
            <div className="logo-icon-wrapper">
              <Mail className="logo-icon" size={24} />
            </div>
            <span className="logo-text">
              Temp<span className="text-highlight">Mail</span>
            </span>
            <span className="logo-badge">PRO</span>
          </Link>
          
          <nav className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/api-docs" className="nav-link">API Docs</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="navbar-status">
            <span className="status-dot"></span>
            <span className="status-text">Server Active</span>
          </div>
        </header>

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<LegalPage type="about" />} />
          <Route path="/contact" element={<LegalPage type="contact" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/disclaimer" element={<LegalPage type="disclaimer" />} />
          <Route path="/api-docs" element={<ApiDocs />} />
        </Routes>

        {/* Premium Dark Navy Shared Footer */}
        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-icon-wrapper-footer">
                <Mail size={20} />
              </div>
              <h3>TempMail</h3>
              <p>Providing premium security, speed, and privacy. Generate disposable email addresses to keep your main inbox clean and protected from spam and trackers.</p>
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>Navigation</h4>
                <ul>
                  <li><Link to="/">Generate Email</Link></li>
                  <li><Link to="/blog">Blog Platform</Link></li>
                  <li><Link to="/api-docs">Developer API</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>
                  <Scale size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> 
                  Legal & Compliance
                </h4>
                <ul>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                  <li><Link to="/disclaimer">Disclaimer</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>
                  <LifeBuoy size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> 
                  Support
                </h4>
                <ul>
                  <li><Link to="/faq">FAQ Page</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Support</Link></li>
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
    </Router>
  );
}
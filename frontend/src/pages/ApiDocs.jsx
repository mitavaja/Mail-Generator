import React, { useState } from "react";
import { Code, Terminal, Server, Globe, Cpu, Copy, Check } from "lucide-react";
import AdSenseContainer from "../components/AdSenseContainer";

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState("curl");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeSnippets = {
    curl: `# 1. Generate a new temporary email address
curl -X GET "http://localhost:5000/api/email/generate"

# Output response:
# { "address": "rand-user782@tempmail.pro" }

# 2. Poll the inbox for incoming messages
curl -X GET "http://localhost:5000/api/email/messages?email=rand-user782@tempmail.pro"`,

    js: `// 1. Generate new mailbox address
fetch('http://localhost:5000/api/email/generate')
  .then(response => response.json())
  .then(data => {
    console.log('Your Temp Email:', data.address);
    const emailAddress = data.address;

    // 2. Poll incoming inbox message details
    setInterval(() => {
      fetch(\`http://localhost:5000/api/email/messages?email=\${emailAddress}\`)
        .then(res => res.json())
        .then(messages => {
          if (messages.length > 0) {
            console.log('Received messages:', messages);
          }
        });
    }, 5000); // Check every 5s
  });`,

    node: `const axios = require('axios');

async function testTempMail() {
  try {
    // Generate Address
    const resAddress = await axios.get('http://localhost:5000/api/email/generate');
    const myEmail = resAddress.data.address;
    console.log(\`Generated Temp Mailbox: \${myEmail}\`);

    // Fetch Messages
    const resMessages = await axios.get('http://localhost:5000/api/email/messages', {
      params: { email: myEmail }
    });
    console.log(\`Active messages count: \${resMessages.data.length}\`);
  } catch (error) {
    console.error('API connection failed:', error.message);
  }
}

testTempMail();`,

    python: `import requests
import time

# Host URL details
base_url = "http://localhost:5000/api"

# 1. Generate address
response = requests.get(f"{base_url}/email/generate")
email_data = response.json()
email_address = email_data.get("address")
print(f"Generated mailbox: {email_address}")

# 2. Check messages in a loop
for i in range(5):
    time.sleep(5)
    inbox_res = requests.get(f"{base_url}/email/messages", params={"email": email_address})
    messages = inbox_res.json()
    print(f"Inbox has {len(messages)} message(s).")
`
  };

  return (
    <main className="dashboard-layout">
      {/* Page Hero Header */}
      <section className="blog-hero-section card-container premium-email-card" style={{ marginBottom: "24px" }}>
        <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Developer Center</span>
        <h1 style={{ fontSize: "2.2rem", color: "var(--navy-950)", marginBottom: "12px" }}>
          TempMail Developer <span className="text-highlight">API Docs</span>
        </h1>
        <p style={{ color: "var(--navy-700)", maxWidth: "700px", fontSize: "1.05rem" }}>
          Integrate high-speed, disposable mailboxes directly into your applications, QA automation scripts, and validation workflows. Completely free REST API.
        </p>
      </section>

      {/* Grid */}
      <div className="dashboard-grid">
        <div className="dashboard-main">
          
          {/* Section: Overview */}
          <div className="card-container mb-4">
            <h3 className="card-title-inline" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <Server size={20} className="text-highlight-icon" /> Endpoint Reference
            </h3>
            <p className="article-p-paragraph" style={{ marginBottom: "16px" }}>
              Our API operates as a standard RESTful service. Responses are returned as JSON format payloads. No API authorization headers are required for public testing volumes.
            </p>

            {/* Generate endpoint details */}
            <div style={{ backgroundColor: "var(--navy-100)", border: "1px solid var(--navy-200)", padding: "16px", borderRadius: "10px", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ backgroundColor: "var(--accent-blue)", color: "white", padding: "4px 8px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "700" }}>GET</span>
                <code style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--navy-950)" }}>/api/email/generate</code>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--navy-700)" }}>
                Generates a clean, randomized temporary email address.
              </p>
            </div>

            {/* Check inbox details */}
            <div style={{ backgroundColor: "var(--navy-100)", border: "1px solid var(--navy-200)", padding: "16px", borderRadius: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ backgroundColor: "var(--accent-blue)", color: "white", padding: "4px 8px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "700" }}>GET</span>
                <code style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--navy-950)" }}>/api/email/messages?email={"{address}"}</code>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--navy-700)" }}>
                Retrieves messages matching the query temporary email address.
              </p>
            </div>
          </div>

          {/* Section: Code Snippets Switcher */}
          <div className="card-container mb-4">
            <h3 className="card-title-inline" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <Code size={20} className="text-highlight-icon" /> Integration Code Examples
            </h3>
            
            {/* Language switcher tabs */}
            <div className="code-tabs-list" style={{ display: "flex", gap: "10px", borderBottom: "1px solid var(--navy-200)", paddingBottom: "12px", marginBottom: "16px" }}>
              <button onClick={() => setActiveTab("curl")} className={`code-tab-btn ${activeTab === "curl" ? "code-tab-btn-active" : ""}`}>cURL</button>
              <button onClick={() => setActiveTab("js")} className={`code-tab-btn ${activeTab === "js" ? "code-tab-btn-active" : ""}`}>JavaScript</button>
              <button onClick={() => setActiveTab("node")} className={`code-tab-btn ${activeTab === "node" ? "code-tab-btn-active" : ""}`}>Node.js</button>
              <button onClick={() => setActiveTab("python")} className={`code-tab-btn ${activeTab === "python" ? "code-tab-btn-active" : ""}`}>Python</button>
            </div>

            {/* Code Box */}
            <div style={{ position: "relative" }}>
              <button 
                onClick={() => handleCopyCode(codeSnippets[activeTab])} 
                style={{ position: "absolute", top: "12px", right: "12px", background: "none", border: "none", cursor: "pointer", color: "var(--navy-700)", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", fontWeight: "600" }}
              >
                {copiedCode ? <Check size={14} style={{ color: "var(--success)" }} /> : <Copy size={14} />}
                {copiedCode ? "Copied" : "Copy"}
              </button>
              <pre style={{ backgroundColor: "var(--navy-950)", color: "#94A3B8", padding: "18px", borderRadius: "12px", overflowX: "auto", fontFamily: "Courier New, Courier, monospace", fontSize: "0.9rem", lineHeight: "1.5", border: "1px solid var(--navy-800)" }}>
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </div>

          <AdSenseContainer type="infeed" slot="8888888881" />

        </div>

        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <AdSenseContainer type="sidebar" slot="3333333337" />

          {/* Dev Use Cases Card */}
          <div className="info-card">
            <h3 className="sidebar-title">
              <Cpu size={18} className="text-highlight-icon" style={{ marginRight: "8px" }} />
              Developer Use Cases
            </h3>
            <ul className="feature-list">
              <li>
                <span className="feature-marker" style={{ color: "var(--accent-blue)" }}>▶</span>
                <div>
                  <strong>CI/CD Pipelines</strong>
                  <p>Validate email registrations and onboarding flows during builds.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker" style={{ color: "var(--accent-blue)" }}>▶</span>
                <div>
                  <strong>Bypassing Signup Gating</strong>
                  <p>Avoid marketing lists while running third-party tool validations.</p>
                </div>
              </li>
              <li>
                <span className="feature-marker" style={{ color: "var(--accent-blue)" }}>▶</span>
                <div>
                  <strong>API & Webhook Testing</strong>
                  <p>Configure automated tools to receive and parse webhooks safely.</p>
                </div>
              </li>
            </ul>
          </div>

          <AdSenseContainer type="skyscraper" slot="4444444448" />
        </aside>
      </div>
    </main>
  );
}

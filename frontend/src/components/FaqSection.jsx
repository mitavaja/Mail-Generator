import React, { useState } from "react";
import { HelpCircle, Compass, ShieldCheck, ChevronDown, ChevronUp, AlertOctagon } from "lucide-react";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is a temporary email and how does it protect my privacy?",
      a: "A temporary email is a disposable, anonymous email address that requires no registration. It allows you to sign up for newsletters, download files, or register on websites without revealing your personal email address, keeping you safe from spam, trackings, and potential data breaches."
    },
    {
      q: "How long does my temporary email address last?",
      a: "Your temporary email remains active as long as you keep your browser tab open. We automatically expire and purge inactive mailboxes after 24 hours of inactivity. All stored email messages are permanently erased from our servers."
    },
    {
      q: "Can I send emails using my temporary email address?",
      a: "Yes! Unlike most temporary email services, our platform allows you to compose and send outgoing messages using the 'Compose & Send' panel on the left dashboard column. This is useful for replying to verification requests."
    },
    {
      q: "Do I need to manually refresh the inbox to see new mail?",
      a: "No manual refreshing is needed. Our inbox comes with a live background listener that checks for incoming messages every 5 seconds. As soon as a message is sent to your temporary address, it will slide right into your feed."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="faq-container-layout">
      {/* 3 Step Visual Guide */}
      <section className="steps-section-card card-container">
        <div className="card-header-flex">
          <div className="header-title-wrapper">
            <div className="title-icon-pill">
              <Compass size={18} className="text-highlight-icon" />
            </div>
            <div>
              <h3 className="card-title-inline">How it Works</h3>
              <p className="card-subtitle">Protect your inbox in three simple steps</p>
            </div>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-item">
            <div className="step-number">01</div>
            <h4>Generate</h4>
            <p>Click 'Generate New Address' or use the default mail loaded on your screen.</p>
          </div>
          <div className="step-item">
            <div className="step-number">02</div>
            <h4>Verify</h4>
            <p>Copy the address and paste it into any form, application, or download page.</p>
          </div>
          <div className="step-item">
            <div className="step-number">03</div>
            <h4>Receive</h4>
            <p>Watch incoming messages display instantly. Open, read, or compose responses.</p>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="faq-accordion-card card-container" id="faq">
        <div className="card-header-flex">
          <div className="header-title-wrapper">
            <div className="title-icon-pill">
              <HelpCircle size={18} className="text-highlight-icon" />
            </div>
            <div>
              <h3 className="card-title-inline">Frequently Asked Questions</h3>
              <p className="card-subtitle">Find quick answers to common inquiries</p>
            </div>
          </div>
        </div>

        <div className="accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className={`accordion-item ${isOpen ? 'accordion-item-open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="accordion-q-row">
                  <span className="accordion-question">{faq.q}</span>
                  <div className="accordion-chevron">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
                {isOpen && (
                  <div className="accordion-a-row">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Secondary Quick Tips Banner */}
      <div className="abuse-banner-inline">
        <AlertOctagon size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
        <p>
          <strong>Security Tip:</strong> Do not use temporary emails for important bank, government, or critical recovery accounts. Temporary mailboxes are public and short-lived.
        </p>
      </div>
    </div>
  );
}

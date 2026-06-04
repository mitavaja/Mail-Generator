import React, { useEffect, useState } from "react";
import { Info, HelpCircle } from "lucide-react";

/**
 * AdSenseContainer - A component that manages Google AdSense ads and provides
 * a premium placeholder layout for local preview and development.
 * 
 * Props:
 * @param {string} slot - Google AdSense Ad Slot ID
 * @param {string} client - Google AdSense Publisher Client ID (starts with ca-pub-)
 * @param {string} format - Ad layout format: 'auto', 'rectangle', 'horizontal', 'vertical'
 * @param {boolean} responsive - Enable full-width responsiveness (default: true)
 * @param {string} type - Preset layout types: 'leaderboard' (728x90), 'sidebar' (300x250), 'skyscraper' (300x600), 'infeed' (fluid)
 * @param {boolean} demo - Forces the mock placeholder to render (default: true in development)
 */
export default function AdSenseContainer({
  slot = "0000000000",
  client = "ca-pub-0000000000000000",
  format = "auto",
  responsive = true,
  type = "rectangle",
  demo = true // Set to false when ready to show live Google AdSense ads
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Run Google AdSense push trigger when not in demo mode
    if (!demo) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("AdSense script load deferred or blocked by ad-blocker.", err);
      }
    }
  }, [demo]);

  // Dimension presets for placeholders
  const presets = {
    leaderboard: {
      width: "100%",
      maxWidth: "728px",
      height: "90px",
      label: "Leaderboard Banner (728x90)",
      description: "Appears below navigation for maximum viewability"
    },
    sidebar: {
      width: "100%",
      maxWidth: "300px",
      height: "250px",
      label: "Medium Rectangle (300x250)",
      description: "High-performing sidebar content ad"
    },
    skyscraper: {
      width: "100%",
      maxWidth: "300px",
      height: "600px",
      label: "Half-Page Ad (300x600)",
      description: "Large sidebar skyscraper for premium visibility"
    },
    infeed: {
      width: "100%",
      maxWidth: "100%",
      height: "120px",
      label: "In-Feed Native Banner (Fluid)",
      description: "Flows organically between content blocks"
    }
  };

  const currentPreset = presets[type] || presets.rectangle;

  if (demo) {
    return (
      <div 
        className={`ad-wrapper ad-type-${type}`}
        style={{
          maxWidth: currentPreset.maxWidth,
          margin: "15px auto",
          width: "100%"
        }}
      >
        <div className="ad-placeholder">
          <div className="ad-header-row">
            <span className="ad-badge">ADVERTISEMENT</span>
            <div className="ad-info-icon" 
                 onMouseEnter={() => setShowTooltip(true)}
                 onMouseLeave={() => setShowTooltip(false)}
                 onClick={() => setShowTooltip(!showTooltip)}
            >
              <Info size={14} />
              {showTooltip && (
                <div className="ad-tooltip">
                  <p><strong>Google AdSense Slot</strong></p>
                  <p>Client ID: <code>{client}</code></p>
                  <p>Slot ID: <code>{slot}</code></p>
                  <p>To go live, change <code>demo</code> prop to <code>false</code> in the code and include the AdSense header script in your index.html.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="ad-placeholder-body" style={{ height: `calc(${currentPreset.height} - 32px)` }}>
            <div className="ad-slot-decor"></div>
            <div className="ad-placeholder-text">
              <span className="ad-label">{currentPreset.label}</span>
              <span className="ad-description">{currentPreset.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Real Google AdSense tags
  return (
    <div 
      className={`adsense-live ad-type-${type}`} 
      style={{ 
        margin: "20px auto", 
        maxWidth: currentPreset.maxWidth,
        width: "100%",
        textAlign: "center",
        overflow: "hidden" 
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center"
        }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      ></ins>
    </div>
  );
}

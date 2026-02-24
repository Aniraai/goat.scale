"use client";

import { useState } from "react";

const CREATOR_FORM = "https://forms.gle/aGWAxcfo3DeQbyo79";
const BRAND_LINK = "#"; // brand form link yahan daalna

export default function GoatScalePage() {
  const [activeTab, setActiveTab] = useState<"creators" | "brands">("creators");

  return (
    <main
      style={{
        background: "#0d0d0d",
        color: "#fff",
        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #0d0d0d; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,210,0,0.12);
          border: 1px solid rgba(255,210,0,0.35);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 13px;
          color: #ffd200;
          letter-spacing: 0.04em;
          font-weight: 600;
          margin-bottom: 28px;
        }

        .yellow { color: #ffd200; }
        .yellow-bg { background: #ffd200; }

        .btn-primary {
          display: inline-block;
          background: #ffd200;
          color: #0d0d0d;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          letter-spacing: 0.01em;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(255,210,0,0.35);
        }

        .btn-outline {
          display: inline-block;
          background: transparent;
          color: #ffd200;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          padding: 13px 32px;
          border-radius: 8px;
          text-decoration: none;
          border: 2px solid #ffd200;
          cursor: pointer;
          transition: transform 0.15s, background 0.15s;
          letter-spacing: 0.01em;
        }
        .btn-outline:hover {
          background: rgba(255,210,0,0.1);
          transform: translateY(-2px);
        }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffd200;
          color: #0d0d0d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          flex-shrink: 0;
        }

        .card {
          background: #161616;
          border: 1px solid #222;
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .card:hover {
          border-color: rgba(255,210,0,0.3);
          transform: translateY(-4px);
        }

        .tab-btn {
          padding: 12px 32px;
          border-radius: 8px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }
        .tab-active {
          background: #ffd200;
          color: #0d0d0d;
        }
        .tab-inactive {
          background: #1a1a1a;
          color: #888;
          border: 1px solid #333;
        }
        .tab-inactive:hover { color: #fff; border-color: #555; }

        section { padding: 80px 24px; }

        .container {
          max-width: 960px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffd200;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 5vw, 44px);
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: #1e1e1e;
          margin: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          border-bottom: 1px solid #1a1a1a;
          position: sticky;
          top: 0;
          background: rgba(13,13,13,0.92);
          backdrop-filter: blur(12px);
          z-index: 100;
        }

        .logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -0.02em;
        }

        .checkmark {
          width: 22px;
          height: 22px;
          background: rgba(255,210,0,0.15);
          border: 1px solid rgba(255,210,0,0.4);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 640px) {
          .grid-2 { grid-template-columns: 1fr; }
          nav { padding: 16px 20px; }
          section { padding: 60px 20px; }
        }

        .cta-box {
          background: linear-gradient(135deg, #1a1700 0%, #0d0d0d 60%);
          border: 1px solid rgba(255,210,0,0.2);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 400px; height: 200px;
          background: radial-gradient(ellipse, rgba(255,210,0,0.08) 0%, transparent 70%);
        }

        .stats-row {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid #1e1e1e;
        }
        .stat-item { text-align: left; }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 36px;
          color: #ffd200;
          line-height: 1;
        }
        .stat-label { font-size: 14px; color: #666; margin-top: 4px; }
      `}</style>

      {/* NAV */}
      <nav className="fade-up">
        <div className="logo">
          GOAT<span className="yellow">SCALE</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={BRAND_LINK} className="btn-outline" style={{ padding: "10px 22px", fontSize: 14 }}>
            Creators
          </a>
          <a href={CREATOR_FORM} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
            Brands
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 96, paddingBottom: 96, textAlign: "center" }}>
        <div className="container">
          <div className="hero-badge fade-up">
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffd200", display: "inline-block" }} />
            The Creator-Brand Collab Platform
          </div>
          <h1
            className="fade-up delay-1"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px, 8vw, 72px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Scale Your Brand.<br />
            <span className="yellow">Empower Creators.</span>
          </h1>
          <p
            className="fade-up delay-2"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "#888", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.65 }}
          >
            GOATSCALE connects ambitious brands with authentic creators to drive real growth — fast, measurable, and built to scale.
          </p>
          <div className="fade-up delay-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={CREATOR_FORM} target="_blank" rel="noreferrer" className="btn-primary">
              I&apos;m a Creator →
            </a>
            <a href={BRAND_LINK} className="btn-outline">
              I&apos;m a Brand →
            </a>
          </div>

          <div className="stats-row fade-up delay-4" style={{ justifyContent: "center" }}>
            {[
              { num: "500+", label: "Verified Creators" },
              { num: "3x", label: "Avg. ROI for Brands" },
              { num: "48h", label: "Match Turnaround" },
            ].map((s) => (
              <div className="stat-item" key={s.num} style={{ textAlign: "center" }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section>
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">How GOATSCALE Works</h2>
          <p style={{ color: "#666", marginBottom: 48, fontFamily: "'DM Sans', sans-serif", fontSize: 16, maxWidth: 480 }}>
            A simple, powerful process to connect the right creators with the right brands.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { n: "1", title: "Sign Up", desc: "Create your profile as a creator or brand in under 5 minutes. Tell us your niche, goals, and what you're looking for." },
              { n: "2", title: "Get Matched", desc: "Our algorithm surfaces the best-fit partnerships. No cold DMs, no guesswork — just quality matches." },
              { n: "3", title: "Collaborate", desc: "Connect, negotiate, and launch campaigns directly on the platform with full support from our team." },
              { n: "4", title: "Scale", desc: "Track performance, iterate, and build long-term partnerships that compound your growth over time." },
            ].map((step) => (
              <div key={step.n} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div className="step-circle">{step.n}</div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
                    {step.title}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#888", fontSize: 15, lineHeight: 1.6 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHY GOATSCALE — Tabs */}
      <section>
        <div className="container">
          <div className="section-label">Why Us</div>
          <h2 className="section-title">Why GOATSCALE?</h2>
          <p style={{ color: "#666", marginBottom: 40, fontFamily: "'DM Sans', sans-serif", fontSize: 16 }}>
            Built differently — for creators who mean business and brands that want results.
          </p>

          {/* Tab Switch */}
          <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
            <button className={`tab-btn ${activeTab === "creators" ? "tab-active" : "tab-inactive"}`} onClick={() => setActiveTab("creators")}>
              For Creators
            </button>
            <button className={`tab-btn ${activeTab === "brands" ? "tab-active" : "tab-inactive"}`} onClick={() => setActiveTab("brands")}>
              For Brands
            </button>
          </div>

          {activeTab === "creators" && (
            <div>
              <div className="grid-2">
                {[
                  { title: "One Platform Free", desc: "Get discovered by top brands without paying a single rupee upfront." },
                  { title: "Fair Value Matching", desc: "We ensure you're paid what your audience is worth — no underselling." },
                  { title: "Business Evolution", desc: "Go from creator to media company with the tools and partnerships to back it." },
                  { title: "Creative Freedom", desc: "Brands on GOATSCALE trust your voice. No over-scripted, soul-draining briefs." },
                ].map((f) => (
                  <div className="card" key={f.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div className="checkmark">
                      <span className="yellow" style={{ fontSize: 12, fontWeight: 800 }}>✓</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{f.title}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#777", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <a href={CREATOR_FORM} target="_blank" rel="noreferrer" className="btn-primary">
                  Join as Creator →
                </a>
              </div>
            </div>
          )}

          {activeTab === "brands" && (
            <div>
              <div className="grid-2">
                {[
                  { title: "Vetted Creator Network", desc: "Every creator is manually verified. No bots, no fake metrics — only real audiences." },
                  { title: "Two Zeros Web Doing", desc: "We handle outreach, negotiation, and execution so your team stays focused." },
                  { title: "Business Execution", desc: "From brief to live content in days, not weeks. Speed is built into the model." },
                  { title: "ROI-Focused Approach", desc: "Track conversions, reach, and engagement in one unified dashboard." },
                ].map((f) => (
                  <div className="card" key={f.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div className="checkmark">
                      <span className="yellow" style={{ fontSize: 12, fontWeight: 800 }}>✓</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{f.title}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#777", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <a href={BRAND_LINK} className="btn-primary">
                  Partner as Brand →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section>
        <div className="container">
          <div className="cta-box">
            <div className="section-label" style={{ textAlign: "center" }}>Get Started</div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 5vw, 48px)",
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              Ready to Scale Your<br />
              <span className="yellow">Impact?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#888", fontSize: 16, marginBottom: 36, maxWidth: 420, margin: "0 auto 36px" }}>
              Whether you&apos;re a creator or a brand, your next big collab starts here. Join free today.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={CREATOR_FORM} target="_blank" rel="noreferrer" className="btn-primary">
                Join as Creator
              </a>
              <a href={BRAND_LINK} className="btn-outline">
                Partner as Brand
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "32px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div className="logo" style={{ fontSize: 18 }}>
          GOAT<span className="yellow">SCALE</span>
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#444", fontSize: 13 }}>
          © {new Date().getFullYear()} GOATSCALE. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <a href={CREATOR_FORM} target="_blank" rel="noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>Creators</a>
          <a href={BRAND_LINK} style={{ color: "#666", textDecoration: "none", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>Brands</a>
        </div>
      </footer>
    </main>
  );
}

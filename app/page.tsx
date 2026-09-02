"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("sainica-splash-seen")) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("sainica-splash-seen", "true");
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow-lines">
              <div>WHEN PROMPT AND</div>
              <div>LONG RELIEF IS DESIRED&hellip;</div>
              <div>IN HEART BURN AND ACIDITY.</div>
            </div>
            <div className="brand-line">
              <span className="accent">ESOLARK</span>
              <span className="tag">DSR</span>
            </div>
            <p className="hero-sub">
              (Esomeprazole (40mg) EC+ Domperidone 10mg (IR) +<br />
              Domperidone 20mg (SR))
            </p>
            <p className="hero-tagline">The Ultimate PPI</p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">Learn More</Link>
              <a href="#" className="btn btn-outline">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                Download Brochure
              </a>
            </div>
          </div>
          <div className="hero-art frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Premium Esolark DSR Capsules" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── Feature Strip ── */}
      <div className="container">
        <div className="feature-strip">
          <div className="f-item">
            <div className="f-icon">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3c0 3-3 3-3 7a6 6 0 0 0 12 0c0-2-1-3-1-5" /><circle cx="14" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg>
            </div>
            <h4>Fast &amp; Effective Relief</h4>
            <p>Quick control in acidity and heartburn</p>
          </div>
          <div className="f-item">
            <div className="f-icon">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h4>Dual Action Formula</h4>
            <p>Combines PPI + Prokinetic for better results</p>
          </div>
          <div className="f-item">
            <div className="f-icon">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
            </div>
            <h4>24 Hour Protection</h4>
            <p>Sustained relief with SR technology</p>
          </div>
          <div className="f-item">
            <div className="f-icon">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14c2.5 0 5 1.7 5 4.6"/></svg>
            </div>
            <h4>Better Tolerance</h4>
            <p>Well tolerated with proven safety</p>
          </div>
        </div>
      </div>

      {/* ── About Esolark DSR ── */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Flagship Product</div>
            <h2 className="h-lg">About ESOLARK DSR</h2>
            <p className="lede mt-16">
              ESOLARK DSR is a combination of Esomeprazole and Domperidone, designed to provide fast relief from acidity, heartburn and associated symptoms. The dual action formula works by reducing acid secretion and improving gastric motility.
            </p>
            <Link href="/products/esolark-dsr" className="btn btn-outline-navy mt-32">Explore Product</Link>
          </div>
          <div className="split-media">
            <div className="frame" style={{ background: "#fff", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/products/08_ESOLARK-DSR.png" alt="ESOLARK DSR Product Packaging" style={{ width: "100%", maxHeight: 320, objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Banner ── */}
      <section className="section container">
        <div className="banner-line">
          <div>
            <h3>Trusted Care. Better Lives.</h3>
            <p>Committed to delivering quality healthcare solutions for a healthier tomorrow.</p>
          </div>
          <div className="banner-icons">
            <div className="bi">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.4 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.4-4-8.5s1.4-6.1 4-8.5z"/></svg>
              <div>WHO-GMP Certified</div>
            </div>
            <div className="bi">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
              <div>Quality Assured</div>
            </div>
            <div className="bi">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M9.5 15l1.8 1.8 3.2-3.6"/></svg>
              <div>Patient Focused</div>
            </div>
            <div className="bi">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.2 11.1c.6.4 1.2 1.3 1.2 2.4h4c0-1.1.6-2 1.2-2.4A6 6 0 0 0 12 3z"/><path d="M12 6.5v3M9.7 8.8l1.7 1.7"/></svg>
              <div>Innovation Driven</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

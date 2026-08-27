"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const monographs = [
  { name: "ESOLARK DSR — Product Monograph", type: "PDF Document" },
  { name: "MAXIRISE GOLD — Product Monograph", type: "PDF Document" },
  { name: "HEMTOR — Product Monograph", type: "PDF Document" },
  { name: "DETOX D3 — Product Monograph", type: "PDF Document" },
];

const tabs = ["Product Monographs", "Health Articles", "Company News"];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Resources</div>
            <h1 className="h-xl">Knowledge. Updates.<br />Better Practice.</h1>
            <p className="lede mt-16">Stay informed with the latest updates, product information, healthcare insights and company news.</p>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sainica Healthcare medical resources" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tabs">
            {tabs.map((t, i) => (
              <div key={t} className={`tab${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)}>{t}</div>
            ))}
          </div>
          <div style={{ paddingTop: 28 }}>
            {activeTab === 0 && monographs.map((m, i) => (
              <div key={i} className="resource-row">
                <div className="rl">
                  <div className="rico">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#D6470F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4"/></svg>
                  </div>
                  <div>
                    <div className="rname">{m.name}</div>
                    <div className="rtype">{m.type}</div>
                  </div>
                </div>
                <a href="#" className="dl-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                  Download
                </a>
              </div>
            ))}
            {activeTab === 1 && <p className="lede">Health articles and medical insights coming soon. Stay tuned for expert content on gastroenterology, cardiology and general medicine.</p>}
            {activeTab === 2 && <p className="lede">Company announcements and news updates will be shared here. Check back for the latest from Sainica Healthcare.</p>}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { 
  title: "About Us | Sainica Healthcare", 
  description: "SAINICA Healthcare is a pharmaceutical healthcare company committed to providing quality and reliable healthcare solutions across India." 
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── 1. Primary Introduction (From Official SAINICA Document) ── */}
      <section className="section-tight" style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>About SAINICA Healthcare</div>
          <h1 className="h-xl" style={{ marginTop: 8, marginBottom: 20 }}>
            Quality. Trust. Healthcare.
          </h1>
          <p className="lede" style={{ margin: "0 auto", fontSize: 18, lineHeight: 1.8, color: "var(--navy-900)", fontWeight: 500 }}>
            SAINICA Healthcare is a pharmaceutical healthcare company committed to providing quality and reliable healthcare solutions. We aim to build a trusted pharmaceutical brand through a combination of quality products, professional service, ethical business practices and long-term relationships with healthcare professionals and business partners.
          </p>
          <p style={{ margin: "20px auto 0", maxWidth: 840, fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
            Our focus is to develop and promote a growing portfolio of pharmaceutical products that address diverse healthcare requirements while maintaining consistent standards of quality and reliability.
          </p>
        </div>
      </section>

      {/* ── 2. Dedicated to Care Split ── */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Our Philosophy</div>
            <h2 className="h-lg">Committed to Health.<br />Dedicated to Care.</h2>
            <p className="lede mt-16">
              Sainica Healthcare is a professionally managed pharmaceutical company dedicated to improving lives through quality healthcare solutions. We focus on innovation, quality and patient well-being.
            </p>
            <p className="mt-16" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>
              At SAINICA Healthcare, we believe that pharmaceutical business is not only about products — it is about trust, responsibility and long-term relationships.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/products" className="btn btn-primary">Explore Products</Link>
              <Link href="/contact" className="btn btn-outline-navy">Contact Team</Link>
            </div>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sainica laboratory and pharmaceutical research" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>
      </section>

      {/* ── 3. Core Values ── */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="sec-head center" style={{ marginBottom: 36 }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Guiding Principles</div>
          <h2 className="h-lg">Our Core Values</h2>
        </div>
        <div className="grid-4">
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h4>Quality</h4>
            <p>We believe quality is the solid foundation of a successful, enduring healthcare organization.</p>
          </div>
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
            </div>
            <h4>Trust &amp; Integrity</h4>
            <p>We build lasting relationships through transparency, reliability, and ethical responsibility.</p>
          </div>
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.2 11.1c.6.4 1.2 1.3 1.2 2.4h4c0-1.1.6-2 1.2-2.4A6 6 0 0 0 12 3z"/><path d="M12 6.5v3M9.7 8.8l1.7 1.7"/></svg>
            </div>
            <h4>Innovation</h4>
            <p>Continuously seeking better pharmaceutical solutions and formulations for clinical efficacy.</p>
          </div>
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg>
            </div>
            <h4>Commitment</h4>
            <p>Dedicated to our customers, healthcare professionals, distributors and patient well-being.</p>
          </div>
        </div>
      </section>

      {/* ── 4. Mission & Vision ── */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container grid-2">
          <div className="card" style={{ padding: 36, border: "none", background: "var(--bg)" }}>
            <div className="eyebrow">Our Mission</div>
            <ul className="checklist mt-16">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>To provide quality and reliable pharmaceutical products.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>To continuously expand our healthcare product portfolio.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>To maintain strong relationships with doctors, pharmacists, distributors and partners.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>To promote responsible and ethical pharmaceutical practices.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>To deliver dependable service, professional support and better healthcare outcomes.</span>
              </li>
            </ul>
          </div>
          <div className="card" style={{ padding: 36, border: "none", background: "var(--bg)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow">Our Vision</div>
            <h3 className="h-md" style={{ marginTop: 8, marginBottom: 16 }}>A Trusted Healthcare Leader</h3>
            <p className="lede" style={{ fontSize: 16, lineHeight: 1.8 }}>
              To become a trusted and respected pharmaceutical healthcare company, recognized for quality, innovation, integrity and commitment to better healthcare across India.
            </p>
            <div style={{ marginTop: 24, padding: "18px 22px", background: "#fff", borderRadius: "var(--cap-sm)", borderLeft: "4px solid var(--orange-500)" }}>
              <p style={{ fontSize: 14.5, fontStyle: "italic", color: "var(--navy-900)" }}>
                &ldquo;At SAINICA Healthcare, our journey is driven by a simple belief: quality creates trust, and trust creates lasting relationships.&rdquo;
              </p>
              <div style={{ marginTop: 8, fontSize: 12.5, fontWeight: 700, color: "var(--orange-600)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                — Management, SAINICA Healthcare
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Sustainability Section (Sun Pharma Inspired) ── */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Sustainability &amp; Responsibility</div>
            <h2 className="h-lg">Translating Sustainability Commitment into Actions</h2>
            <p className="lede mt-16">
              At Sainica Healthcare, sustainability is more than a pledge — it is a continuous journey of purposeful action. We are committed to transforming our environmental and social responsibilities into tangible, measurable outcomes that create enduring value for our stakeholders and the planet.
            </p>
            <div style={{ marginTop: 24 }}>
              <ul className="checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Environmental Stewardship:</strong> Promoting resource conservation and ecological safety in packaging and distribution.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Responsible Practices:</strong> Ethical supply chain standards ensuring minimal ecological footprint.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Enduring Community Value:</strong> Delivering sustainable health improvements that touch thousands of families daily.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sainica Healthcare Sustainability and Green Environment" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>
      </section>

      {/* ── 6. Environment, Health and Safety (EHS) - Zero Harm ── */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container split rev">
          <div>
            <div className="eyebrow">Environment, Health &amp; Safety (EHS)</div>
            <h2 className="h-lg">Targeting &ldquo;Zero Harm&rdquo; by Providing a Clean Environment and a Safe, Healthy Workplace</h2>
            <p className="lede mt-16">
              At Sainica Healthcare, we are fully committed to achieving excellence in Environment, Health &amp; Safety (EHS) and conduct our activities in the most responsible manner. The importance of EHS is continually stressed and extensively promoted as a part of our corporate culture.
            </p>
            <p className="mt-16" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}>
              Our EHS Policy provides for the creation of a safe and healthy workplace and a clean environment for employees and the community at large. It aims for the highest international standards in plant design, equipment selection, maintenance and operations. The policy is a commitment that we will manufacture and market our products safely and in an environmentally responsible manner.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--teal-100)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-500)", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--navy-900)" }}>WHO-GMP Compliant Facilities</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--teal-100)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-500)", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--navy-900)" }}>Zero Discharge Safety Protocols</span>
              </div>
            </div>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="High standards clean environment laboratory and manufacturing" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>
      </section>

      {/* ── 7. Pan-India Marketing Cycle ── */}
      <section className="section container">
        <div className="sec-head center" style={{ marginBottom: 40 }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Pan-India Presence</div>
          <h2 className="h-lg">How SAINICA Healthcare Works Across India</h2>
          <p className="lede" style={{ margin: "14px auto 0" }}>
            Connecting Quality Healthcare Products with Healthcare Professionals through a structured and professional pharmaceutical marketing approach.
          </p>
        </div>

        <div style={{ background: "#fff", borderRadius: "var(--cap-sm)", padding: "36px 28px", boxShadow: "var(--shadow-sm)", border: "1px solid var(--line)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16, textAlign: "center" }}>
            {[
              { step: "01", title: "Market Identification", desc: "Regional demand analysis" },
              { step: "02", title: "Product Planning", desc: "Therapeutic portfolio alignment" },
              { step: "03", title: "Professional Promotion", desc: "Scientific doctor engagement" },
              { step: "04", title: "Distribution Network", desc: "Reliable stockist & retail reach" },
              { step: "05", title: "Market Feedback", desc: "HCP & partner insights" },
              { step: "06", title: "Performance Analysis", desc: "Clinical safety review" },
              { step: "07", title: "Continuous Improvement", desc: "Portfolio evolution" },
            ].map((s) => (
              <div key={s.step} style={{ padding: "16px 12px", background: "var(--bg)", borderRadius: "var(--cap-sm-r)", border: "1px solid var(--line)" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "var(--orange-600)", fontFamily: "var(--font-mono)" }}>{s.step}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--navy-900)", marginTop: 6, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Updated Stats (5,000+ Lives, 20,000+ Partners) ── */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="stat-bar">
          <div className="stat-grid">
            <div className="stat">
              <div className="num">10+</div>
              <div className="lbl">Years of Excellence</div>
            </div>
            <div className="stat">
              <div className="num">100+</div>
              <div className="lbl">Quality Products</div>
            </div>
            <div className="stat">
              <div className="num">20,000+</div>
              <div className="lbl">Satisfied Partners</div>
            </div>
            <div className="stat">
              <div className="num">5,000+</div>
              <div className="lbl">Lives Touched Every Day</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

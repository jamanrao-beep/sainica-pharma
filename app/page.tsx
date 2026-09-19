import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const featuredProducts = [
  {
    slug: "esolark-dsr",
    name: "ESOLARK DSR",
    category: "Gastroenterology",
    badge: "Flagship",
    img: "/products/08_ESOLARK-DSR.png",
  },
  {
    slug: "maxirise-gold",
    name: "MAXIRISE GOLD",
    category: "Neuro-Care & Vitality",
    badge: "Antioxidant",
    img: "/products/07_MAXIRISE-GOLD.png",
  },
  {
    slug: "hemtor",
    name: "HEMOTOR",
    category: "Hematology & Iron Care",
    badge: "Hematinic",
    img: "/products/03_HEMOTOR.png",
  },
  {
    slug: "detox-d3",
    name: "DETOX D3",
    category: "Vitamins & Supplements",
    badge: "Bone & Immunity",
    img: "/products/09_DETOX-D3.png",
  },
];

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── 1. Brand & About Hero (Starts with About SAINICA Healthcare) ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow-lines">
              <div>SAINICA HEALTHCARE</div>
              <div>PRESERVING WELLNESS ACROSS INDIA</div>
            </div>
            <div className="brand-line">
              <span className="accent">Quality.</span> Trust. Healthcare.
            </div>
            <p className="lede mt-16" style={{ color: "#DCE3FF", fontSize: 17, lineHeight: 1.8 }}>
              SAINICA Healthcare is a pharmaceutical healthcare company committed to providing quality and reliable healthcare solutions. We aim to build a trusted pharmaceutical brand through a combination of quality products, professional service, ethical business practices and long-term relationships with healthcare professionals and business partners.
            </p>
            <p className="hero-sub" style={{ marginTop: 14, color: "#B9C3EE" }}>
              Our focus is to develop and promote a growing portfolio of pharmaceutical products that address diverse healthcare requirements while maintaining consistent standards of quality and reliability.
            </p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link href="/about" className="btn btn-primary">About Our Company</Link>
              <Link href="/products" className="btn btn-outline">Explore Product Portfolio</Link>
            </div>
          </div>
          <div className="hero-art frame" style={{ background: "rgba(255,255,255,0.06)", padding: "12px", border: "1px solid rgba(255,255,255,0.15)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sainica Healthcare advanced pharmaceutical research" 
              style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: "var(--cap-sm)" }} 
            />
          </div>
        </div>
      </section>

      {/* ── 2. Stat Bar ── */}
      <div className="container" style={{ marginTop: -36, position: "relative", zIndex: 10 }}>
        <div className="stat-bar" style={{ boxShadow: "var(--shadow-lg)" }}>
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
      </div>

      {/* ── 3. Corporate Strengths & Values Strip ── */}
      <section className="section container">
        <div className="sec-head center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Why Choose Sainica</div>
          <h2 className="h-lg">Dedicated to Quality &amp; Patient Well-being</h2>
          <p className="lede" style={{ margin: "14px auto 0" }}>
            Delivering trusted formulations across gastroenterology, neurology, hematology, and wellness.
          </p>
        </div>
        <div className="grid-4">
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h4>Quality Assured</h4>
            <p>Manufactured in WHO-GMP compliant facilities with rigorous quality checks.</p>
          </div>
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
            </div>
            <h4>Doctor-Centric Trust</h4>
            <p>Developed in close alignment with clinical feedback from healthcare practitioners.</p>
          </div>
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.2 11.1c.6.4 1.2 1.3 1.2 2.4h4c0-1.1.6-2 1.2-2.4A6 6 0 0 0 12 3z"/><path d="M12 6.5v3M9.7 8.8l1.7 1.7"/></svg>
            </div>
            <h4>Targeted Formulations</h4>
            <p>Sustained release and advanced bio-availability for optimal therapeutic results.</p>
          </div>
          <div className="card icon-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0F1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg>
            </div>
            <h4>Pan-India Distribution</h4>
            <p>Reliable supply chain ensuring timely product availability across healthcare networks.</p>
          </div>
        </div>
      </section>

      {/* ── 4. Featured Formulations (Products preview: full descriptions on View More) ── */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
            <div>
              <div className="eyebrow">Our Portfolio</div>
              <h2 className="h-lg">Leading Formulations</h2>
              <p className="lede mt-8">Explore key therapeutic products trusted by doctors and medical specialists.</p>
            </div>
            <Link href="/products" className="btn btn-outline-navy">
              View Full Catalog
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid-4">
            {featuredProducts.map((p) => (
              <div key={p.slug} className="product-card">
                <div className="pimg" style={{ background: "#f8fafc" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="pbody" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--orange-600)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                    {p.category}
                  </div>
                  <h4>{p.name}</h4>
                  <p style={{ fontSize: 13, color: "var(--muted)", margin: "4px 0 16px" }}>{p.badge}</p>
                  <Link href={`/products/${p.slug}`} className="btn btn-primary btn-sm" style={{ marginTop: "auto", width: "100%" }}>
                    View More
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Corporate Approach (From Docx) ── */}
      <section className="section container">
        <div className="split">
          <div>
            <div className="eyebrow">Professional Promotion</div>
            <h2 className="h-lg">How SAINICA Healthcare Connects Across India</h2>
            <p className="lede mt-16">
              Our growth is driven by a combination of field-level marketing, scientific product promotion, distribution support, relationship management and digital communication.
            </p>
            <div style={{ marginTop: 24, padding: "20px 24px", background: "#fff", borderRadius: "var(--cap-sm)", border: "1px solid var(--line)" }}>
              <div style={{ fontWeight: 700, color: "var(--navy-900)", marginBottom: 6 }}>Our Relationship-Driven Marketing Cycle:</div>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7 }}>
                Quality Products &rarr; Professional Promotion &rarr; Reliable Distribution &rarr; Better Service &rarr; Long-Term Trust.
              </p>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/about" className="btn btn-outline-navy">Read Our Full Story</Link>
            </div>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sainica Healthcare team collaboration across India" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>
      </section>

      {/* ── 6. Trust Banner ── */}
      <section className="section container" style={{ paddingTop: 0 }}>
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

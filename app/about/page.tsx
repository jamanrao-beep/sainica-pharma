import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "About Us | Sainica Healthcare", description: "Sainica Healthcare is a professionally managed pharmaceutical company dedicated to improving lives." };

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">About Us</div>
            <h1 className="h-xl">Committed to Health.<br />Dedicated to Care.</h1>
            <p className="lede mt-16">Sainica Healthcare is a professionally managed pharmaceutical company dedicated to improving lives through quality healthcare solutions. We focus on innovation, quality and patient well-being.</p>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1532187863486-abf9db61b7f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sainica About laboratory research" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section container">
        <div className="grid-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="card icon-card">
            <div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg></div>
            <h4>Quality Assurance</h4>
            <p>Rigorous checks at every stage of production</p>
          </div>
          <div className="card icon-card">
            <div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M8 21h8"/><path d="M5 7h5M14 7h5"/><path d="M5 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/><path d="M19 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/></svg></div>
            <h4>Ethical Practices</h4>
            <p>Responsible, transparent pharmaceutical practice</p>
          </div>
          <div className="card icon-card">
            <div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.2 11.1c.6.4 1.2 1.3 1.2 2.4h4c0-1.1.6-2 1.2-2.4A6 6 0 0 0 12 3z"/><path d="M12 6.5v3M9.7 8.8l1.7 1.7"/></svg></div>
            <h4>Innovative Solutions</h4>
            <p>Research-driven formulations for better outcomes</p>
          </div>
          <div className="card icon-card">
            <div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg></div>
            <h4>Patient Well-being</h4>
            <p>Every decision centred on patient health</p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section">
        <div className="container grid-2">
          <div className="card" style={{ padding: 36 }}>
            <div className="eyebrow">Our Mission</div>
            <ul className="list-check">
              <li>To provide quality and reliable pharmaceutical products.</li>
              <li>To continuously expand our healthcare product portfolio.</li>
              <li>To maintain strong relationships with doctors, pharmacists, distributors and business partners.</li>
              <li>To promote responsible and ethical pharmaceutical practices.</li>
              <li>To deliver dependable service and professional support.</li>
              <li>To contribute towards better healthcare outcomes.</li>
            </ul>
          </div>
          <div className="card" style={{ padding: 36 }}>
            <div className="eyebrow">Our Vision</div>
            <p className="lede">To become a trusted and respected pharmaceutical healthcare company, recognized for quality, innovation, integrity and commitment to better healthcare.</p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section container">
        <div className="stat-bar">
          <div className="stat-grid">
            <div className="stat"><div className="num">10+</div><div className="lbl">Years of Excellence</div></div>
            <div className="stat"><div className="num">100+</div><div className="lbl">Quality Products</div></div>
            <div className="stat"><div className="num">200+</div><div className="lbl">Satisfied Partners</div></div>
            <div className="stat"><div className="num">500+</div><div className="lbl">Lives Touched Every Day</div></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

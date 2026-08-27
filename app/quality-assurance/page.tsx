import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Quality Assurance | Sainica Healthcare", description: "Sainica Healthcare's commitment to quality — WHO-GMP certified, ISO 9001 standards." };

export default function QualityAssurancePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Quality Assurance</div>
            <h1 className="h-xl">Quality You Can Trust</h1>
            <p className="lede mt-16">We follow stringent quality standards at every step, from raw material selection to final product delivery.</p>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sainica Healthcare quality control lab" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section container">
        <div className="sec-head center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Our Process</div>
          <h2 className="h-lg">From Raw Material to Final Product</h2>
        </div>
        <div className="process-steps">
          {[
            { num: 1, title: "Raw Material Testing", desc: "Rigorous incoming quality checks" },
            { num: 2, title: "In-Process Control", desc: "Real-time monitoring during production" },
            { num: 3, title: "Analytical Testing", desc: "Advanced laboratory analysis" },
            { num: 4, title: "Stability Studies", desc: "Long-term product stability" },
            { num: 5, title: "Final QC & Packaging", desc: "Complete inspection before release" },
          ].map((s) => (
            <div key={s.num} className="process-step">
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="sec-head center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Certifications</div>
            <h2 className="h-lg">Internationally Recognized Standards</h2>
          </div>
          <div className="badge-row">
            <div className="badge-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/who-gmp.svg" alt="WHO-GMP Certified" />
              <span>WHO-GMP<br />Certified</span>
            </div>
            <div className="badge-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/iso-9001.svg" alt="ISO 9001:2015" />
              <span>ISO 9001:2015<br />Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment banner */}
      <section className="section container">
        <div className="banner-line">
          <div>
            <h3>Commitment to Quality. Dedication to Health.</h3>
            <p>Every product we deliver is a promise of quality, safety and efficacy.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

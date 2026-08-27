import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Therapeutic Areas | Sainica Healthcare", description: "Sainica Healthcare's focus areas: gastroenterology, cardiology, general medicine, vitamins and supplements." };

export default function TherapeuticAreasPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Therapeutic Areas</div>
            <h1 className="h-xl">Focused Solutions for<br />Better Health</h1>
            <p className="lede mt-16">We focus on key therapeutic areas to provide targeted solutions that address critical health needs and improve patient outcomes.</p>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/therapeutic-hero.svg" alt="Therapeutic areas capsule illustration" />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section container">
        <div className="grid-5">
          <div className="card icon-card"><div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3c0 3-3 3-3 7a6 6 0 0 0 12 0c0-2-1-3-1-5" /><circle cx="14" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg></div><h4>Gastroenterology</h4><p>Advanced care for digestive health and gastric disorders.</p></div>
          <div className="card icon-card"><div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg></div><h4>Cardiology</h4><p>Trusted care for heart health and cardiovascular well-being.</p></div>
          <div className="card icon-card"><div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M12 11v3"/></svg></div><h4>General Medicine</h4><p>Effective products for common illnesses and infectious conditions.</p></div>
          <div className="card icon-card"><div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="4"/><circle cx="16" cy="9" r="4"/><circle cx="12" cy="16" r="4"/></svg></div><h4>Vitamins &amp; Supplements</h4><p>Nutritional supplements for overall health and well-being.</p></div>
          <div className="card icon-card"><div className="ic"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19C5 10 12 4 20 4c0 8-6 15-15 15z"/><path d="M5 19c3-3 6-6 12-11"/></svg></div><h4>Others</h4><p>Solutions for a wide range of healthcare needs.</p></div>
        </div>
      </section>

      {/* Banner */}
      <section className="section container">
        <div className="banner-line">
          <div>
            <h3>Better Science. Better Health.</h3>
            <p>Empowering life with trusted medicines.</p>
          </div>
          <div className="banner-icons">
            <div className="bi"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 15h9"/></svg><div>Research Driven</div></div>
            <div className="bi"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg><div>Clinically Trusted</div></div>
            <div className="bi"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="1"/></svg><div>Targeted Relief</div></div>
            <div className="bi"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg><div>Patient First</div></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

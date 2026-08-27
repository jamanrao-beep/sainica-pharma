import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Careers | Sainica Healthcare", description: "Join our growing team. Build a career in pharmaceutical healthcare." };

export default function CareersPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Careers</div>
            <h1 className="h-xl">Grow with Us.<br />Make a Difference.</h1>
            <p className="lede mt-16">Join a dynamic team that is committed to growth and dedicated to making quality healthcare accessible to all.</p>
            <Link href="/contact" className="btn btn-primary mt-32">View Openings</Link>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sainica Healthcare team collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section container">
        <div className="sec-head center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Why Sainica?</div>
          <h2 className="h-lg">Why Join Our Team</h2>
        </div>
        <div className="grid-3">
          <div className="card icon-card" style={{ textAlign: "center" }}>
            <div className="ic" style={{ margin: "0 auto 16px" }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V8l8-5 8 5v12"/><path d="M9.5 20v-6h5v6"/><circle cx="12" cy="10.5" r="1.5"/></svg>
            </div>
            <h4>Learning &amp; Growth</h4>
            <p>Continuous professional development and skill enhancement opportunities.</p>
          </div>
          <div className="card icon-card" style={{ textAlign: "center" }}>
            <div className="ic" style={{ margin: "0 auto 16px" }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19C5 10 12 4 20 4c0 8-6 15-15 15z"/><path d="M5 19c3-3 6-6 12-11"/></svg>
            </div>
            <h4>Positive Environment</h4>
            <p>A supportive, inclusive workplace that values every team member.</p>
          </div>
          <div className="card icon-card" style={{ textAlign: "center" }}>
            <div className="ic" style={{ margin: "0 auto 16px" }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M8 21h8"/><path d="M5 7h5M14 7h5"/><path d="M5 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/><path d="M19 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/></svg>
            </div>
            <h4>Work-Life Balance</h4>
            <p>Flexible policies designed to help you thrive both at work and at home.</p>
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="section">
        <div className="container">
          <div className="sec-head center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Openings</div>
            <h2 className="h-lg">Current Opportunities</h2>
          </div>
          {[
            { title: "Medical Representative — Gastro Division", location: "Multiple Locations, India" },
            { title: "Area Sales Manager", location: "North India" },
            { title: "Quality Control Analyst", location: "Pharma City, India" },
          ].map((j, i) => (
            <div key={i} className="job-pill">
              <div>
                <h4>{j.title}</h4>
                <span>{j.location}</span>
              </div>
              <Link href="/contact" className="btn btn-ghost-orange btn-sm">Apply</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

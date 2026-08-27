"use client";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnquiryPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section">
        <div className="container split split-form">
          <div>
            <div className="eyebrow">Enquire Now</div>
            <h1 className="h-xl">We are here to<br />help you.</h1>
            <p className="lede mt-16">For product enquiries or any other information, feel free to reach us.</p>

            <div className="grid-2 mt-48" style={{ gap: 24 }}>
              <div className="contact-card" style={{ padding: "24px 20px" }}>
                <div className="cc-icon" style={{ width: 48, height: 48, marginBottom: 12 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3.5h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 20 4 13.2 4 5.7A2 2 0 0 1 6 3.5z"/></svg>
                </div>
                <h4>Phone</h4>
                <p><a href="tel:+917906605626" style={{ wordBreak: "break-word" }}>+91 79066 05626</a></p>
              </div>
              <div className="contact-card" style={{ padding: "24px 20px" }}>
                <div className="cc-icon" style={{ width: 48, height: 48, marginBottom: 12 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/></svg>
                </div>
                <h4>Email</h4>
                <p><a href="mailto:sainicahealthcare@gmail.com" style={{ wordBreak: "break-word" }}>sainicahealthcare@gmail.com</a></p>
              </div>
              <div className="contact-card" style={{ gridColumn: "1 / -1", padding: "24px 20px" }}>
                <div className="cc-icon" style={{ width: 48, height: 48, marginBottom: 12, marginLeft: "auto", marginRight: "auto" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.4 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.4-4-8.5s1.4-6.1 4-8.5z"/></svg>
                </div>
                <h4>Website</h4>
                <p><a href="#" style={{ wordBreak: "break-word" }}>www.sainicahealthcare.com</a></p>
              </div>
            </div>
          </div>
          <div>
            <div className="enquiry-panel">
              <h3 style={{ marginBottom: 24 }}>Send Us a Message</h3>
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea placeholder="How can we help you?" />
              </div>
              <button className="btn btn-primary btn-block">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

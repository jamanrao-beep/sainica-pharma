import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact Us | Sainica Healthcare", description: "Get in touch with Sainica Healthcare." };

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Contact Us</div>
            <h1 className="h-xl">Let&apos;s Connect</h1>
            <p className="lede mt-16">We look forward to connecting with you and exploring new opportunities together.</p>

            <div className="mt-32">
              <h4 style={{ marginBottom: 16 }}>Corporate Office</h4>
              <ul className="footer-contact" style={{ color: "var(--ink)" }}>
                <li>
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/></svg>
                  125, Healthcare Avenue,<br />Pharma City, India - 000000
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3.5h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 20 4 13.2 4 5.7A2 2 0 0 1 6 3.5z"/></svg>
                  <a href="tel:+917906605626">+91 79066 05626</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/></svg>
                  <a href="mailto:sainicahealthcare@gmail.com">sainicahealthcare@gmail.com</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.4 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.4-4-8.5s1.4-6.1 4-8.5z"/></svg>
                  www.sainicahealthcare.com
                </li>
              </ul>
            </div>
          </div>
          <div className="split-media">
            <div className="map-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/contact-map.svg" alt="Office location map" style={{ width: "100%", minHeight: 320, objectFit: "cover", background: "var(--bg)" }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

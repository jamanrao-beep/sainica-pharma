import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Therapeutic Areas Row */}
        <div className="footer-tas">
          <span>Therapeutic Areas</span>
          <Link href="/therapeutic-areas">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3c0 3-3 3-3 7a6 6 0 0 0 12 0c0-2-1-3-1-5" /><circle cx="14" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg>
            Gastroenterology
          </Link>
          <Link href="/therapeutic-areas">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg>
            Cardiology
          </Link>
          <Link href="/therapeutic-areas">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M12 11v3"/></svg>
            General Medicine
          </Link>
          <Link href="/therapeutic-areas">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="4"/><circle cx="16" cy="9" r="4"/><circle cx="12" cy="16" r="4"/></svg>
            Vitamins &amp; Supplements
          </Link>
          <Link href="/therapeutic-areas">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19C5 10 12 4 20 4c0 8-6 15-15 15z"/><path d="M5 19c3-3 6-6 12-11"/></svg>
            Others
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" style={{ display: "inline-block", background: "#ffffff", padding: "6px 14px", borderRadius: "8px", marginBottom: "18px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Logo.png" alt="Sainica Healthcare" style={{ height: "36px", width: "auto", objectFit: "contain", display: "block" }} />
            </Link>
            <p>Preserving Wellness Across India. Sainica Healthcare is a professionally managed pharmaceutical company dedicated to improving lives through quality healthcare solutions.</p>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9h2.5V6h-2.7C11.5 6 10 7.4 10 9.9V12H8v3h2v6h3v-6h2.4l.6-3H13v-1.7c0-.8.2-1.3 1-1.3z" fill="currentColor" stroke="none"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="8" cy="9" r="0.8" fill="currentColor" stroke="none"/><path d="M8 11v6M12 11v6M12 13.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5V17"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none"/></svg></a>
            </div>
          </div>
          <div>
            <h5>Quick Links</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/therapeutic-areas">Therapeutic Areas</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link href="/resources">Resources</Link>
            <Link href="/quality-assurance">Quality Assurance</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/enquiry">Enquiry Now</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <h5>Contact Us</h5>
            <ul className="footer-contact">
              <li><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/></svg> <a href="mailto:sainicahealthcare@gmail.com">sainicahealthcare@gmail.com</a></li>
              <li><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3.5h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 20 4 13.2 4 5.7A2 2 0 0 1 6 3.5z"/></svg> <a href="tel:+917906605626">+91 79066 05626</a></li>
              <li>
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#F15A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/></svg>
                <a
                  href="https://maps.google.com/?q=Radhe+Housing,+Rohit+Circle,+Anupam+Cinema+Road,+Khokhara,+Maninagar+East,+Ahmedabad+380008"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  B/F 14 Radhe Housing, Rohit Circle, Anupam Cinema Road, Khokhara, Mani Nagar East, Ahmedabad - 380008
                </a>
              </li>
            </ul>
            {/* Embedded Mini Google Map */}
            <div style={{ marginTop: "14px", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.18)", height: "135px", width: "100%" }}>
              <iframe
                title="Sainica Healthcare Location Google Map"
                src="https://maps.google.com/maps?q=Radhe+Housing,+Rohit+Circle,+Anupam+Cinema+Road,+Khokhara,+Maninagar+East,+Ahmedabad+380008&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>&copy; 2026 Sainica Healthcare. All rights reserved.</span>
          <span><Link href="/privacy-policy">Privacy Policy</Link></span>
        </div>
      </div>
    </footer>
  );
}

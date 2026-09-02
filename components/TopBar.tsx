export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="tb-item">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/></svg>
          <a href="mailto:sainicahealthcare@gmail.com">sainicahealthcare@gmail.com</a>
        </div>
        <div className="tb-item">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3.5h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 20 4 13.2 4 5.7A2 2 0 0 1 6 3.5z"/></svg>
          <a href="tel:+917906605626">+91 79066 05626</a>
        </div>
        <div className="tb-item">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/></svg>
          <a
            href="https://maps.google.com/?q=Radhe+Housing,+Rohit+Circle,+Anupam+Cinema+Road,+Khokhara,+Maninagar+East,+Ahmedabad+380008"
            target="_blank"
            rel="noopener noreferrer"
            title="B/F 14 Radhe Housing, Rohit Circle, Anupam Cinema Road, Khokhara, Mani Nagar East, Ahmedabad 380008"
          >
            Khokhara, Ahmedabad
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Therapeutic Areas", href: "/therapeutic-areas" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-container${scrolled ? " scrolled" : ""}`}>
      <div className="navwrap">
        <div className="container nav">
        <Link className="logo" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo.png" alt="Sainica Healthcare" style={{ height: "auto", width: "200px", maxHeight: "60px", objectFit: "contain" }} />
        </Link>
        <div className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="btn btn-primary btn-sm nav-cta-mobile"
            href="/enquiry"
            onClick={() => setMenuOpen(false)}
          >
            Enquiry Now
          </Link>
        </div>
        {/* Backdrop overlay for mobile menu */}
        <div 
          className={`nav-backdrop${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div className="nav-right">
          <Link className="btn btn-primary btn-sm nav-cta-desktop" href="/enquiry">
            Enquiry Now
          </Link>
          <button
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            id="navToggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

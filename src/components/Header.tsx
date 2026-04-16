"use client";

import ThemeToggle from "@/components/ThemeToggle";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Hotels", href: "/#featured-hotels" },
  { label: "Destinations", href: "/#gallery" },
  { label: "Why BharatStay", href: "/#features" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && navPanelRef.current) {
      const firstLink = navPanelRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid var(--border)" : "none" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-cta))" }}
          >
            B
          </div>
          <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
            Bharat<span style={{ color: "var(--color-brand)" }}>Stay</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/for-hotels"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            List Your Hotel
          </Link>
          <ThemeToggle />
          <Link
            href="/#search"
            className="btn-cta rounded-lg px-5 py-2 text-sm font-semibold"
          >
            Find Rooms →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          style={{ border: "1px solid var(--border)" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-5 w-5" style={{ color: "var(--text-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        ref={navPanelRef}
        className={`overflow-hidden transition-all duration-200 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav
          className="glass flex flex-col gap-1 px-6 py-4"
          style={{ borderTop: "1px solid var(--border)" }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2" style={{ borderTop: "1px solid var(--border)", paddingTop: "12px" }}>
            <Link href="/for-hotels" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-center text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
              List Your Hotel
            </Link>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <Link href="/#search" onClick={() => setMenuOpen(false)} className="btn-cta rounded-lg px-4 py-2.5 text-center text-sm font-semibold">
              Find Rooms →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

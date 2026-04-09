"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen && navPanelRef.current) {
      const firstLink = navPanelRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-light bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold text-white italic">
          {siteData.brand}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {siteData.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-dark"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        ref={navPanelRef}
        className={`overflow-hidden border-t border-navy-light bg-navy transition-all duration-200 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-6 py-4" aria-label="Mobile navigation">
          {siteData.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-navy-light hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-gold px-4 py-2 text-center text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-dark"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

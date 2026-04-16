import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-cta))" }}
              >
                B
              </div>
              <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                Bharat<span style={{ color: "var(--color-brand)" }}>Stay</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {footer.brandDescription}
            </p>
            <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>{footer.address}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--color-brand)" }}>Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              {footer.quickLinks1.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-[var(--color-brand)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--color-brand)" }}>Support</h4>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              {footer.quickLinks2.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-[var(--color-brand)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--color-brand)" }}>Contact</h4>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>📞 {footer.phone}</li>
              <li>✉️ {footer.email}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg transition-opacity duration-200 hover:opacity-80"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} {siteData.brand}. All rights reserved. &nbsp;|&nbsp; Zero Commission. Zero Platform Fee. Always.
        </div>
      </div>
    </footer>
  );
}

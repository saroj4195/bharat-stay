import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white italic">{siteData.brand}</h3>
            <p className="mt-2 text-sm text-white/60">
              {footer.brandDescription}
            </p>
            <p className="mt-3 text-xs text-white/40">{footer.address}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {footer.quickLinks1.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {footer.quickLinks2.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-gold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
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

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {siteData.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

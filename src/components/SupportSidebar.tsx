"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { label: "Help & Support", href: "/support" },
  { label: "Partner With Us", href: "/support/partner" },
  { label: "Partner Onboarding", href: "/support/partner-onboarding" },
  { label: "Legal", href: "/support/legal" },
  { label: "FAQs", href: "/support/faq" },
];

export default function SupportSidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {/* Desktop sidebar */}
      <nav
        className="hidden md:block w-[220px] shrink-0 bg-off-white border-r border-border min-h-[calc(100vh-73px)]"
        aria-label="Support navigation"
      >
        <ul className="py-6">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-6 py-3 text-sm transition-colors duration-200 ${
                    isActive
                      ? "border-l-4 border-gold bg-white font-bold text-navy"
                      : "border-l-4 border-transparent text-navy/70 hover:text-navy hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile horizontal tabs */}
      <nav
        className="md:hidden overflow-x-auto border-b border-border bg-off-white"
        aria-label="Support navigation"
      >
        <ul className="flex min-w-max px-4 py-2 gap-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block whitespace-nowrap rounded-lg px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-navy text-white font-bold"
                      : "text-navy/70 hover:bg-white hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

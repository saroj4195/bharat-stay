import type { Metadata } from "next";
import { siteData } from "@/data/siteData";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const contactSeo = siteData.seo.contact;

export const metadata: Metadata = {
  title: contactSeo.title,
  description: contactSeo.description,
};

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    detail: siteData.contactEmail,
    href: `mailto:${siteData.contactEmail}`,
    description: "We reply within 24 hours",
  },
  {
    icon: "📞",
    title: "Call Us",
    detail: siteData.footer.phone,
    href: `tel:${siteData.footer.phone}`,
    description: "Mon-Sat, 9 AM - 7 PM IST",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    detail: "Chat with us",
    href: "https://wa.me/912212345678",
    description: "Quick responses, anytime",
  },
  {
    icon: "📍",
    title: "Visit Us",
    detail: siteData.contactAddress,
    href: "#",
    description: "Walk-ins welcome",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-navy">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Resort with palm trees"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white italic sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Whether you&apos;re a traveler looking for deals or a hotel wanting to partner — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {contactMethods.map((m) => (
            <a
              key={m.title}
              href={m.href}
              className="group rounded-xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{m.icon}</span>
              <h3 className="mt-3 text-sm font-bold text-navy">{m.title}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{m.detail}</p>
              <p className="mt-1 text-xs text-text-body/50">{m.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + Map/Info */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left: Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy italic sm:text-3xl">
                Let&apos;s Talk
              </h2>
              <p className="mt-4 leading-relaxed text-text-body">
                Have a question about booking? Want to list your hotel on BharatStay? 
                Looking for a partnership? Fill out the form and our team will get back 
                to you within 24 hours.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  <p className="text-sm text-text-body">
                    <strong className="text-navy">For Travelers:</strong> Get help with bookings, refunds, or finding the perfect hotel.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  <p className="text-sm text-text-body">
                    <strong className="text-navy">For Hotels:</strong> Learn how to list your property with zero commission and free tools.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  <p className="text-sm text-text-body">
                    <strong className="text-navy">For Partners:</strong> Explore collaboration opportunities with BharatStay.
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-navy">9,800+</p>
                  <p className="text-xs text-text-body/50">Happy Customers</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-navy">1,400+</p>
                  <p className="text-xs text-text-body/50">Partner Hotels</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-navy">&lt;24h</p>
                  <p className="text-xs text-text-body/50">Response Time</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-bold text-navy">Send Us a Message</h3>
              <p className="mt-1 text-sm text-text-body/50">We&apos;ll get back to you within 24 hours.</p>
              <div className="mt-6">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

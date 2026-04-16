import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Hotels — BharatStay | Zero Commission, Free Tools",
  description:
    "List your hotel on BharatStay for free. Zero commission, zero platform fee. Get free Channel Manager, Booking Engine, and PMS. Join 1,400+ partner hotels.",
};

const benefits = [
  { icon: "💰", title: "Zero Commission", desc: "Keep 100% of every booking. No cuts, no surprises — ever." },
  { icon: "🛠️", title: "Free Tools Worth ₹15K/mo", desc: "Free Channel Manager, Booking Engine & basic PMS included." },
  { icon: "👥", title: "You Own the Customer", desc: "Get direct guest data — email, phone, booking history. OTAs hide this from you." },
  { icon: "✅", title: "Verified Partner Badge", desc: "Priority placement in search + government tourism co-branding." },
  { icon: "📊", title: "Real Analytics", desc: "Occupancy, revenue, and demand trends — all in one dashboard." },
  { icon: "🤝", title: "Direct Bookings", desc: "We drive guests to book directly with you, not through OTAs." },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "Forever",
    desc: "Everything you need to get started. No credit card.",
    recommended: false,
    cta: "Get Started Free",
    ctaHref: "/support/partner-onboarding",
    features: [
      { text: "Booking Engine (basic)", included: true },
      { text: "Channel Manager — 3 OTAs", included: true },
      { text: "Basic PMS", included: true },
      { text: "Direct customer data", included: true },
      { text: "BharatStay listing", included: true },
      { text: "Zero commission", included: true },
      { text: "Promoted listing", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Dedicated support", included: false },
    ],
  },
  {
    name: "Growth",
    price: "₹2,999",
    priceNote: "/month",
    desc: "For hotels ready to scale. More OTAs, more visibility.",
    recommended: true,
    cta: "Start 14-Day Free Trial",
    ctaHref: "/contact",
    features: [
      { text: "Booking Engine (advanced + custom domain)", included: true },
      { text: "Channel Manager — 7 OTAs", included: true },
      { text: "Full PMS", included: true },
      { text: "Direct customer data", included: true },
      { text: "BharatStay listing", included: true },
      { text: "Zero commission", included: true },
      { text: "Promoted listing (homepage featured)", included: true },
      { text: "Advanced analytics & reports", included: true },
      { text: "WhatsApp + Phone support", included: true },
    ],
  },
  {
    name: "Pro",
    price: "₹6,999",
    priceNote: "/month",
    desc: "Full suite for serious hoteliers. Maximum reach.",
    recommended: false,
    cta: "Contact Sales",
    ctaHref: "/contact",
    features: [
      { text: "Booking Engine (advanced + payments)", included: true },
      { text: "Channel Manager — Unlimited OTAs", included: true },
      { text: "Full PMS + multi-property", included: true },
      { text: "Direct customer data", included: true },
      { text: "BharatStay listing", included: true },
      { text: "Zero commission", included: true },
      { text: "Priority promoted listing", included: true },
      { text: "Revenue management tools", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
];

const addons = [
  { name: "Extra OTA Connection", price: "₹499/OTA/mo", desc: "Add more OTAs beyond your plan limit." },
  { name: "Promoted Listing", price: "₹1,499/mo", desc: "Featured on homepage and top of search results." },
  { name: "WhatsApp Marketing", price: "₹999/mo", desc: "Automated campaigns to your past guests." },
  { name: "Google Hotel Ads", price: "₹1,999/mo", desc: "We manage your Google Hotel Ads for direct bookings." },
  { name: "Photography Package", price: "₹4,999 one-time", desc: "Professional hotel photography for your listing." },
  { name: "Revenue Management", price: "₹2,499/mo", desc: "AI-powered dynamic pricing to maximize revenue." },
];

const steps = [
  { n: "01", title: "Register in 10 minutes", desc: "Fill your hotel details — name, location, room types, pricing." },
  { n: "02", title: "Get verified in 24–48 hrs", desc: "Upload GST, photos, ID. Our team verifies and approves." },
  { n: "03", title: "Connect your OTAs", desc: "Free Channel Manager syncs availability across up to 3 OTAs instantly." },
  { n: "04", title: "Go live & earn", desc: "Start receiving direct bookings with zero commission from day one." },
];

export default function ForHotelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 text-center" style={{ background: "var(--bg-surface)" }}>
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
          style={{ background: "var(--tint-brand)", border: "1px solid var(--border-brand)", color: "var(--color-brand)" }}
        >
          🏨 For Hotel Partners
        </div>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl" style={{ color: "var(--text-primary)" }}>
          List Your Hotel Free.<br />Keep 100% of Revenue.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
          Join 1,400+ hotels on BharatStay. Zero commission, zero platform fee — always. Get free tools that OTAs charge ₹10K–15K/month for.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/support/partner-onboarding" className="btn-brand inline-flex min-h-[44px] items-center rounded-lg px-8 py-3 text-sm font-bold">
            Start for Free →
          </Link>
          <Link href="/contact" className="inline-flex min-h-[44px] items-center rounded-lg px-8 py-3 text-sm font-bold transition-colors" style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
            Talk to Sales
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Why 1,400+ Hotels Chose BharatStay</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <span className="text-3xl">{b.icon}</span>
                <h3 className="mt-3 font-bold" style={{ color: "var(--text-primary)" }}>{b.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Simple, Transparent Pricing</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Start free. Upgrade only when your business needs it. Zero commission on all plans — always.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-7"
                style={{
                  background: "var(--bg-card)",
                  border: plan.recommended ? "2px solid var(--color-brand)" : "1px solid var(--border)",
                  boxShadow: plan.recommended ? "0 0 32px rgba(255,109,0,0.15)" : "none",
                  transform: plan.recommended ? "scale(1.02)" : "none",
                }}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white" style={{ background: "var(--color-brand)" }}>
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold" style={{ color: plan.recommended ? "var(--color-brand)" : "var(--text-primary)" }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.priceNote}</span>
                </div>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{plan.desc}</p>

                <Link
                  href={plan.ctaHref}
                  className={`mt-5 block min-h-[44px] rounded-lg px-4 py-3 text-center text-sm font-bold transition-colors ${plan.recommended ? "btn-brand" : ""}`}
                  style={!plan.recommended ? { border: "1px solid var(--border)", color: "var(--text-secondary)" } : {}}
                >
                  {plan.cta}
                </Link>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm">
                      <span style={{ color: f.included ? "var(--color-success)" : "var(--text-muted)" }}>{f.included ? "✓" : "✗"}</span>
                      <span style={{ color: f.included ? "var(--text-secondary)" : "var(--text-muted)" }}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs" style={{ color: "var(--text-muted)" }}>
            All plans include zero commission and zero platform fee. You keep 100% of booking revenue — always.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-6 py-16" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Pay-As-You-Grow Add-ons</h2>
          <p className="mb-8 text-center text-sm" style={{ color: "var(--text-secondary)" }}>Add premium features individually — no need to upgrade your entire plan.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((a) => (
              <div key={a.name} className="rounded-xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>{a.name}</h3>
                <p className="mt-1 font-bold" style={{ color: "var(--color-brand)" }}>{a.price}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding steps */}
      <section className="px-6 py-16" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Go Live in 4 Simple Steps</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4 rounded-xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <span className="text-2xl font-bold" style={{ color: "var(--color-brand)" }}>{s.n}</span>
                <div>
                  <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 text-center" style={{ background: "var(--color-brand)" }}>
        <h2 className="text-3xl font-bold text-white">Start Free. Grow When Ready.</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">No credit card. No lock-in. No commission — ever.</p>
        <Link href="/support/partner-onboarding" className="mt-8 inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-sm font-bold transition-colors hover:bg-white/90" style={{ color: "var(--color-brand)" }}>
          Register Your Hotel →
        </Link>
      </section>
    </>
  );
}

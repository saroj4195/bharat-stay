import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing for Hotels — BharatStay",
  description:
    "BharatStay pricing for hotels: free booking engine, channel manager, and PMS. Zero commission, zero platform fee. Pay only for premium add-ons.",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "Forever",
    description: "Everything you need to get started. No credit card required.",
    recommended: false,
    cta: "Get Started Free",
    ctaHref: "/support/partner-onboarding",
    features: [
      { text: "Booking Engine", included: true, note: "Basic" },
      { text: "Channel Manager", included: true, note: "Up to 3 OTAs" },
      { text: "Property Management (PMS)", included: true, note: "Basic" },
      { text: "Direct customer data access", included: true },
      { text: "BharatStay listing", included: true },
      { text: "Email support", included: true },
      { text: "Zero commission", included: true },
      { text: "Zero platform fee", included: true },
      { text: "Promoted listing", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Revenue management tools", included: false },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Growth",
    price: "₹2,999",
    priceNote: "/month",
    description: "For hotels ready to scale. More OTAs, more visibility, more bookings.",
    recommended: true,
    cta: "Start 14-Day Free Trial",
    ctaHref: "/contact",
    features: [
      { text: "Booking Engine", included: true, note: "Advanced + custom domain" },
      { text: "Channel Manager", included: true, note: "Up to 7 OTAs" },
      { text: "Property Management (PMS)", included: true, note: "Full features" },
      { text: "Direct customer data access", included: true },
      { text: "BharatStay listing", included: true },
      { text: "Priority support (WhatsApp + Phone)", included: true },
      { text: "Zero commission", included: true },
      { text: "Zero platform fee", included: true },
      { text: "Promoted listing", included: true, note: "Homepage featured" },
      { text: "Advanced analytics & reports", included: true },
      { text: "Revenue management tools", included: false },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Pro",
    price: "₹6,999",
    priceNote: "/month",
    description: "Full suite for serious hoteliers. Maximum reach, maximum control.",
    recommended: false,
    cta: "Contact Sales",
    ctaHref: "/contact",
    features: [
      { text: "Booking Engine", included: true, note: "Advanced + custom domain + payments" },
      { text: "Channel Manager", included: true, note: "Unlimited OTAs" },
      { text: "Property Management (PMS)", included: true, note: "Full + multi-property" },
      { text: "Direct customer data access", included: true },
      { text: "BharatStay listing", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Zero commission", included: true },
      { text: "Zero platform fee", included: true },
      { text: "Promoted listing", included: true, note: "Priority placement" },
      { text: "Advanced analytics & reports", included: true },
      { text: "Revenue management tools", included: true },
      { text: "Custom integrations & API access", included: true },
    ],
  },
];

const addons = [
  {
    name: "Extra OTA Connection",
    price: "₹499/OTA/month",
    description: "Add more OTA connections beyond your plan limit.",
  },
  {
    name: "Promoted Listing",
    price: "₹1,499/month",
    description: "Get featured on BharatStay homepage and search results.",
  },
  {
    name: "WhatsApp Marketing",
    price: "₹999/month",
    description: "Automated WhatsApp campaigns to your past guests.",
  },
  {
    name: "Google Hotel Ads",
    price: "₹1,999/month",
    description: "We manage your Google Hotel Ads for direct bookings.",
  },
  {
    name: "Photography Package",
    price: "₹4,999 one-time",
    description: "Professional hotel photography for your listing.",
  },
  {
    name: "Revenue Management",
    price: "₹2,499/month",
    description: "AI-powered dynamic pricing to maximize your revenue.",
  },
];

const comparison = [
  { feature: "Booking Engine", starter: "Basic", growth: "Advanced", pro: "Advanced + Payments" },
  { feature: "Channel Manager (OTAs)", starter: "3 OTAs", growth: "7 OTAs", pro: "Unlimited" },
  { feature: "PMS", starter: "Basic", growth: "Full", pro: "Full + Multi-property" },
  { feature: "Commission", starter: "0%", growth: "0%", pro: "0%" },
  { feature: "Platform Fee", starter: "₹0", growth: "₹0", pro: "₹0" },
  { feature: "Customer Data Access", starter: "✓", growth: "✓", pro: "✓" },
  { feature: "Support", starter: "Email", growth: "WhatsApp + Phone", pro: "Dedicated Manager" },
  { feature: "Promoted Listing", starter: "—", growth: "✓", pro: "Priority" },
  { feature: "Analytics", starter: "Basic", growth: "Advanced", pro: "Advanced + Revenue" },
  { feature: "Custom Domain Booking", starter: "—", growth: "✓", pro: "✓" },
  { feature: "API Access", starter: "—", growth: "—", pro: "✓" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-white italic sm:text-5xl">
          Simple Pricing for Hotels
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Start free. Zero commission, zero platform fee — always. Pay only when you need premium features to grow.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="bg-off-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg ${
                plan.recommended
                  ? "border-2 border-gold ring-2 ring-gold/20 md:scale-105"
                  : "border border-border"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-navy">{plan.price}</span>
                <span className="text-sm text-text-body/50">{plan.priceNote}</span>
              </div>
              <p className="mt-2 text-sm text-text-body">{plan.description}</p>

              <Link
                href={plan.ctaHref}
                className={`mt-6 block min-h-[44px] rounded-lg px-4 py-3 text-center text-sm font-bold transition-colors duration-200 ${
                  plan.recommended
                    ? "bg-gold text-navy hover:bg-gold-dark"
                    : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${f.included ? "text-gold" : "text-text-body/30"}`}>
                      {f.included ? "✓" : "✗"}
                    </span>
                    <span className={f.included ? "text-navy" : "text-text-body/40"}>
                      {f.text}
                      {f.note && f.included && (
                        <span className="ml-1 text-xs text-gold">({f.note})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-text-body/50">
          All plans include zero commission and zero platform fee. You keep 100% of your booking revenue — always.
        </p>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-2xl font-bold text-navy italic sm:text-3xl">
            Feature Comparison
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="py-3 pr-4 text-left font-bold text-navy">Feature</th>
                  <th className="px-4 py-3 text-center font-bold text-navy">Starter</th>
                  <th className="px-4 py-3 text-center font-bold text-gold">Growth</th>
                  <th className="px-4 py-3 text-center font-bold text-navy">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-3 pr-4 text-navy">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-text-body">{row.starter}</td>
                    <td className="px-4 py-3 text-center font-medium text-navy">{row.growth}</td>
                    <td className="px-4 py-3 text-center text-text-body">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-off-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-2xl font-bold text-navy italic sm:text-3xl">
            Pay-As-You-Grow Add-ons
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-text-body">
            Need more? Add premium features individually — no need to upgrade your entire plan.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <h3 className="font-bold text-navy">{addon.name}</h3>
                <p className="mt-1 text-lg font-bold text-gold">{addon.price}</p>
                <p className="mt-2 text-sm text-text-body">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy px-6 py-16 text-center">
        <h2 className="font-heading text-3xl font-bold text-white italic">
          Start Free. Grow When Ready.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          No credit card needed. No lock-in contracts. Start with our free plan and upgrade only when your business needs it.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/support/partner-onboarding"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-gold px-8 py-3 text-sm font-bold text-navy transition-colors duration-200 hover:bg-gold-dark"
          >
            Get Started Free →
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-bold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </>
  );
}

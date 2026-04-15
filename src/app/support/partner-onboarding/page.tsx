import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Onboarding — BharatStay",
  description:
    "Step-by-step guide to onboard your hotel on BharatStay. Register, verify, set up your Channel Manager, and go live.",
};

const steps = [
  {
    number: 1,
    icon: "📝",
    title: "Register Your Property",
    description:
      "Fill out the registration form with your hotel details — name, location, room types, and pricing. It takes less than 10 minutes.",
  },
  {
    number: 2,
    icon: "✅",
    title: "Complete Verification",
    description:
      "Upload required documents (GST certificate, property photos, ID proof). Our team verifies your property within 24-48 hours.",
  },
  {
    number: 3,
    icon: "🔗",
    title: "Set Up Channel Manager",
    description:
      "Connect your property to up to 4 OTAs using our free Channel Manager. Sync availability, rates, and bookings in real time.",
  },
  {
    number: 4,
    icon: "🚀",
    title: "Go Live & Start Earning",
    description:
      "Once verified, your property goes live on BharatStay. Start receiving direct bookings with zero commission from day one.",
  },
];

const requirements = [
  { icon: "📄", text: "GST registration number" },
  { icon: "📸", text: "High-quality property photos (minimum 5)" },
  { icon: "🏦", text: "Bank account details for payouts" },
  { icon: "🪪", text: "Government-issued ID proof" },
  { icon: "📋", text: "Room inventory and rate details" },
];

export default function PartnerOnboardingPage() {
  return (
    <div className="px-6 py-10 md:px-12">
      {/* Header */}
      <h1 className="font-heading text-3xl font-bold text-navy italic sm:text-4xl">
        Partner Onboarding
      </h1>
      <p className="mt-3 max-w-2xl text-text-body">
        Getting your hotel on BharatStay is simple. Follow these four steps and
        start receiving direct bookings with zero commission.
      </p>

      {/* Steps */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-xl border border-border bg-off-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {step.number}
              </span>
              <span className="text-2xl">{step.icon}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
            <p className="mt-2 text-sm text-text-body leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Requirements */}
      <div className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-navy italic">
          What You Need to Get Started
        </h2>
        <div className="mt-4 space-y-3">
          {requirements.map((req) => (
            <div
              key={req.text}
              className="flex items-center gap-3 rounded-lg border border-border bg-white p-4"
            >
              <span className="text-xl">{req.icon}</span>
              <p className="text-sm text-navy">{req.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-dark"
        >
          Start Onboarding
        </Link>
      </div>
    </div>
  );
}

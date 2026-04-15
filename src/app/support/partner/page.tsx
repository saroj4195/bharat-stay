import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Us — BharatStay",
  description:
    "Partner with BharatStay — zero commission for hotels, free tools, and affiliate opportunities for agents.",
};

const hotelBenefits = [
  { icon: "💰", text: "Zero commission — keep 100% of your revenue" },
  { icon: "🛠️", text: "Free Channel Manager (connect up to 4 OTAs)" },
  { icon: "🌐", text: "Free Booking Engine for your website" },
  { icon: "📊", text: "Free Property Management System (PMS)" },
  { icon: "👥", text: "Direct access to customer data and insights" },
  { icon: "✅", text: "BharatStay Verified badge for trust and visibility" },
];

const agentBenefits = [
  { icon: "💸", text: "Earn commission on every successful referral" },
  { icon: "🤝", text: "Become an official BharatStay agent" },
  { icon: "📈", text: "Track your referrals and earnings in real time" },
  { icon: "🎯", text: "Dedicated support and marketing materials" },
];

export default function PartnerPage() {
  return (
    <div className="px-6 py-10 md:px-12">
      {/* Header */}
      <h1 className="font-heading text-3xl font-bold text-navy italic sm:text-4xl">
        Partner With Us
      </h1>
      <p className="mt-3 max-w-2xl text-text-body">
        BharatStay is built on direct partnerships. Whether you own a hotel or
        want to earn as an affiliate, we have a program for you. No middlemen,
        no hidden fees — just honest business.
      </p>

      {/* For Hotels */}
      <div className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-navy italic">
          For Hotels
        </h2>
        <p className="mt-2 text-text-body">
          List your property on BharatStay with zero commission. Get free tools
          to manage your bookings, connect with OTAs, and grow your direct
          revenue.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {hotelBenefits.map((b) => (
            <div
              key={b.text}
              className="flex items-start gap-3 rounded-lg border border-border bg-off-white p-4"
            >
              <span className="text-xl">{b.icon}</span>
              <p className="text-sm text-navy">{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* For Agents / Affiliates */}
      <div className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-navy italic">
          For Agents &amp; Affiliates
        </h2>
        <p className="mt-2 text-text-body">
          Earn commission by referring hotels and travelers to BharatStay.
          Become a trusted BharatStay agent and grow your income with every
          successful booking.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {agentBenefits.map((b) => (
            <div
              key={b.text}
              className="flex items-start gap-3 rounded-lg border border-border bg-off-white p-4"
            >
              <span className="text-xl">{b.icon}</span>
              <p className="text-sm text-navy">{b.text}</p>
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
          Register Your Hotel
        </Link>
      </div>
    </div>
  );
}

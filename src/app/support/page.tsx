import type { Metadata } from "next";
import { siteData } from "@/data/siteData";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Help & Support — BharatStay",
  description:
    "Get help with bookings, cancellations, refunds, and more. Contact BharatStay via email, phone, or WhatsApp.",
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
];

const commonIssues = [
  {
    title: "How do I book a hotel?",
    content:
      "Search for your destination on BharatStay, select your dates, choose a verified hotel, and complete your booking in under 60 seconds. You can pay via UPI, credit/debit card, or net banking.",
  },
  {
    title: "How do I cancel my booking?",
    content:
      "Go to your booking confirmation email and click the cancellation link, or contact our support team via email or WhatsApp. Cancellation policies vary by hotel — most allow free cancellation up to 24 hours before check-in.",
  },
  {
    title: "How do I get a refund?",
    content:
      "Refunds are processed within 5-7 business days after a successful cancellation. The amount is credited back to your original payment method. For urgent refund requests, contact us via WhatsApp.",
  },
  {
    title: "How do I contact the hotel directly?",
    content:
      "Hotel contact details are included in your booking confirmation email. You can also find them on the hotel listing page on BharatStay. For any issues, our support team can connect you directly.",
  },
  {
    title: "Is my payment secure?",
    content:
      "Absolutely. BharatStay uses industry-standard SSL encryption and partners with trusted payment gateways. We never store your card details. All transactions are PCI-DSS compliant.",
  },
];

export default function HelpSupportPage() {
  return (
    <div className="px-6 py-10 md:px-12">
      {/* Header */}
      <h1 className="font-heading text-3xl font-bold text-navy italic sm:text-4xl">
        Help &amp; Support
      </h1>
      <p className="mt-3 max-w-2xl text-text-body">
        Need assistance? We&apos;re here to help. Reach out through any of the
        channels below or browse common questions.
      </p>

      {/* Contact Methods */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {contactMethods.map((m) => (
          <a
            key={m.title}
            href={m.href}
            className="group rounded-xl border border-border bg-off-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-3xl">{m.icon}</span>
            <h3 className="mt-3 text-sm font-bold text-navy">{m.title}</h3>
            <p className="mt-1 text-sm font-medium text-gold">{m.detail}</p>
            <p className="mt-1 text-xs text-text-body/50">{m.description}</p>
          </a>
        ))}
      </div>

      {/* Common Issues */}
      <div className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-navy italic">
          Common Issues
        </h2>
        <div className="mt-4">
          <Accordion items={commonIssues} />
        </div>
      </div>
    </div>
  );
}

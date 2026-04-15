import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Legal — BharatStay",
  description:
    "Review BharatStay legal documents including Terms of Use, Privacy Policy, Cancellation and Refund policies, and more.",
};

const legalSections = [
  {
    title: "Terms of Use",
    content:
      "By accessing and using the BharatStay platform, you agree to be bound by these Terms of Use. BharatStay provides an online marketplace connecting travelers with verified hotel partners. Users must be at least 18 years of age to make bookings. All information provided during registration and booking must be accurate and complete.\n\nBharatStay reserves the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms. Users are responsible for maintaining the confidentiality of their account credentials.\n\nAny misuse of the platform, including fraudulent bookings or abusive behavior toward hotel partners, may result in account suspension or termination without prior notice.",
  },
  {
    title: "Privacy Policy",
    content:
      "BharatStay collects personal information including name, email, phone number, and payment details to facilitate hotel bookings. We use this data to process reservations, send booking confirmations, and improve our services. Your data is never sold to third parties.\n\nWe employ industry-standard security measures including SSL encryption and PCI-DSS compliant payment processing to protect your information. Cookies are used to enhance your browsing experience and remember your preferences.\n\nYou have the right to access, modify, or delete your personal data at any time by contacting our support team. We retain booking records for a period of 5 years for legal and accounting purposes.",
  },
  {
    title: "Cancellations and Refunds",
    content:
      "Cancellation policies vary by hotel and are clearly displayed at the time of booking. Most BharatStay partner hotels offer free cancellation up to 24 hours before check-in. Late cancellations or no-shows may incur charges as specified in the booking terms.\n\nRefunds for eligible cancellations are processed within 5-7 business days and credited to the original payment method. In case of disputes, BharatStay acts as a mediator between the guest and the hotel to reach a fair resolution.\n\nFor bookings made during promotional periods or with special discount codes, modified cancellation terms may apply. These will be clearly communicated before you confirm your booking.",
  },
  {
    title: "Data Protection Policy",
    content:
      "BharatStay is committed to protecting your personal data in compliance with applicable Indian data protection laws. We implement technical and organizational measures to safeguard your information against unauthorized access, alteration, or destruction.\n\nData is stored on secure servers within India. Access to personal data is restricted to authorized personnel who need it to perform their duties. Regular security audits are conducted to ensure compliance with our data protection standards.\n\nIn the event of a data breach, affected users will be notified within 72 hours along with details of the breach and steps taken to mitigate its impact.",
  },
  {
    title: "Disclaimer",
    content:
      "BharatStay acts as an intermediary platform connecting travelers with hotel partners. While we verify all listed properties, we do not own or operate any hotels. The accuracy of hotel descriptions, photos, and amenities is the responsibility of the respective hotel partners.\n\nBharatStay is not liable for any loss, damage, or inconvenience arising from your stay at a partner hotel. We recommend reviewing hotel policies and guest reviews before making a booking.\n\nPrices displayed on BharatStay are subject to availability and may change without prior notice. While we strive to ensure pricing accuracy, errors may occasionally occur. In such cases, BharatStay reserves the right to cancel affected bookings and issue a full refund.",
  },
];

export default function LegalPage() {
  return (
    <div className="px-6 py-10 md:px-12">
      {/* Header */}
      <h1 className="font-heading text-3xl font-bold text-navy italic sm:text-4xl">
        Legal
      </h1>
      <p className="mt-3 max-w-2xl text-text-body">
        Review our legal documents below. If you have questions about any of
        these policies, please contact our support team.
      </p>

      {/* Legal Accordion */}
      <div className="mt-8">
        <Accordion items={legalSections} />
      </div>
    </div>
  );
}

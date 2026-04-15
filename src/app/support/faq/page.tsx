import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQs — BharatStay",
  description:
    "Find answers to frequently asked questions about booking, cancellations, refunds, hotels, and your BharatStay account.",
};

const faqGroups = [
  {
    heading: "Booking",
    items: [
      {
        title: "How do I book a hotel on BharatStay?",
        content:
          "Search for your destination, select your check-in and check-out dates, browse verified hotels, and complete your booking in under 60 seconds. You can pay via UPI, credit/debit card, or net banking.",
      },
      {
        title: "What payment methods are accepted?",
        content:
          "BharatStay accepts UPI (Google Pay, PhonePe, Paytm), credit and debit cards (Visa, Mastercard, RuPay), net banking from all major Indian banks, and select wallet options.",
      },
      {
        title: "How do I receive my booking confirmation?",
        content:
          "A confirmation email and SMS are sent immediately after a successful booking. The email includes your booking ID, hotel details, check-in instructions, and a link to manage your reservation.",
      },
    ],
  },
  {
    heading: "Cancellation & Refunds",
    items: [
      {
        title: "What is the cancellation policy?",
        content:
          "Cancellation policies vary by hotel and are displayed before you confirm your booking. Most hotels offer free cancellation up to 24 hours before check-in. Late cancellations may incur a charge.",
      },
      {
        title: "How long does a refund take?",
        content:
          "Refunds are processed within 5-7 business days after a successful cancellation. The amount is credited back to your original payment method. UPI refunds are typically faster (1-3 days).",
      },
      {
        title: "Can I partially cancel a booking?",
        content:
          "Partial cancellations (reducing the number of rooms or nights) depend on the hotel's policy. Contact our support team via WhatsApp or email, and we will coordinate with the hotel on your behalf.",
      },
    ],
  },
  {
    heading: "Hotels & Stays",
    items: [
      {
        title: "What are the standard check-in and check-out times?",
        content:
          "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Some hotels offer early check-in or late check-out on request — check the hotel listing or contact the property directly.",
      },
      {
        title: "What amenities are included?",
        content:
          "Amenities vary by hotel and are listed on each property page. Common inclusions are Wi-Fi, breakfast, parking, and air conditioning. Look for the amenities section on the hotel listing for full details.",
      },
      {
        title: "What does BharatStay Verified mean?",
        content:
          "BharatStay Verified means our team has personally inspected the property for cleanliness, safety, accurate photos, and fair pricing. Verified hotels meet our quality standards and are backed by real guest data — no fake reviews.",
      },
    ],
  },
  {
    heading: "Account & App",
    items: [
      {
        title: "How do I download the BharatStay app?",
        content:
          "The BharatStay app is available on both the App Store (iOS) and Google Play Store (Android). Search for 'BharatStay' or visit our website and click the download links in the footer.",
      },
      {
        title: "How do I create an account?",
        content:
          "Download the app or visit our website, tap 'Sign Up', and register with your email or phone number. You can also sign up using your Google account for faster access.",
      },
      {
        title: "How do I reset my password?",
        content:
          "Tap 'Forgot Password' on the login screen, enter your registered email, and follow the reset link sent to your inbox. For phone-based accounts, an OTP will be sent to your registered number.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="px-6 py-10 md:px-12">
      {/* Header */}
      <h1 className="font-heading text-3xl font-bold text-navy italic sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 max-w-2xl text-text-body">
        Find answers to the most common questions about BharatStay. Can&apos;t
        find what you&apos;re looking for? Contact our support team.
      </p>

      {/* FAQ Groups */}
      <div className="mt-8 space-y-10">
        {faqGroups.map((group) => (
          <div key={group.heading}>
            <h2 className="font-heading text-xl font-bold text-navy italic">
              {group.heading}
            </h2>
            <div className="mt-3">
              <Accordion items={group.items} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

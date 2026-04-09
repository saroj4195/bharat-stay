import type { Metadata } from "next";
import { siteData } from "@/data/siteData";

const privacySeo = siteData.seo.privacy;

export const metadata: Metadata = {
  title: privacySeo.title,
  description: privacySeo.description,
};

export default function PrivacyPage() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          Last Updated: April 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-foreground/70 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              1. Data Collection
            </h2>
            <p className="mt-2">
              We collect personal information that you voluntarily provide when
              using {siteData.brand}, including your name, email address, and
              payment details when making a booking. We also automatically
              collect device information, IP addresses, and browsing behavior
              through cookies and similar technologies to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              2. Data Usage
            </h2>
            <p className="mt-2">
              Your personal data is used to process bookings, provide customer
              support, personalize your experience, and send relevant
              communications about our services. We may also use aggregated,
              anonymized data for analytics and service improvement purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Cookies
            </h2>
            <p className="mt-2">
              {siteData.brand} uses essential cookies to ensure the website
              functions correctly, as well as analytics cookies to understand how
              visitors interact with our site. You can manage your cookie
              preferences through your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              4. Third-Party Sharing
            </h2>
            <p className="mt-2">
              We do not sell your personal information. We may share data with
              trusted third-party service providers who assist us in operating
              our platform, processing payments, and delivering services. All
              third parties are contractually obligated to protect your data in
              accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              5. Contact Information
            </h2>
            <p className="mt-2">
              If you have questions or concerns about this privacy policy or
              your personal data, please contact us at{" "}
              <a
                href={`mailto:${siteData.contactEmail}`}
                className="text-primary hover:text-primary-dark transition-colors duration-200"
              >
                {siteData.contactEmail}
              </a>{" "}
              or write to us at {siteData.contactAddress}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

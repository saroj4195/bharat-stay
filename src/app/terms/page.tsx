import type { Metadata } from "next";
import { siteData } from "@/data/siteData";

const termsSeo = siteData.seo.terms;

export const metadata: Metadata = {
  title: termsSeo.title,
  description: termsSeo.description,
};

export default function TermsPage() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          Last Updated: April 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-foreground/70 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using {siteData.brand}, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If
              you do not agree with any part of these terms, you must not use our
              platform. We reserve the right to update these terms at any time,
              and continued use of the service constitutes acceptance of any
              changes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              2. Usage Rights
            </h2>
            <p className="mt-2">
              {siteData.brand} grants you a limited, non-exclusive,
              non-transferable license to access and use our platform for
              personal or business purposes related to hotel booking and
              management. You may not reproduce, distribute, modify, or create
              derivative works from any content on our platform without prior
              written consent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Limitations of Liability
            </h2>
            <p className="mt-2">
              {siteData.brand} and its affiliates shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of the platform. Our total liability for any
              claim related to the service shall not exceed the amount you paid
              to us in the twelve months preceding the claim. We do not guarantee
              uninterrupted or error-free operation of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              4. Governing Law
            </h2>
            <p className="mt-2">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of California, United States,
              without regard to its conflict of law provisions. Any disputes
              arising from these terms or your use of {siteData.brand} shall be
              resolved exclusively in the courts located in San Francisco
              County, California.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

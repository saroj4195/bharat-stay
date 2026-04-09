import type { Metadata } from "next";
import { siteData } from "@/data/siteData";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const contactSeo = siteData.seo.contact;

export const metadata: Metadata = {
  title: contactSeo.title,
  description: contactSeo.description,
};

export default function ContactPage() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-3 text-lg text-foreground/60">
          Have a question, want a demo, or interested in a partnership? We&apos;d
          love to hear from you.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Contact Information
            </h2>
            <dl className="mt-6 space-y-6 text-sm text-foreground/70">
              <div>
                <dt className="font-medium text-foreground">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteData.contactEmail}`}
                    className="text-primary hover:text-primary-dark transition-colors duration-200"
                  >
                    {siteData.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Address</dt>
                <dd className="mt-1">{siteData.contactAddress}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Send Us a Message
            </h2>
            <div className="mt-6">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

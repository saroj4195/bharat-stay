import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-off-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {siteData.pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${
                plan.recommended
                  ? "border-2 border-gold ring-2 ring-gold/20 md:scale-105"
                  : "border border-border"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-xs font-semibold text-navy">
                  Recommended
                </span>
              )}

              <h3 className="text-lg font-semibold text-text-heading">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-text-heading">
                {plan.price === 0 ? "Free" : `${plan.price}/mo`}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-2 text-sm text-text-body"
                  >
                    <span
                      className={`mt-0.5 ${feature.included ? "text-gold" : "text-text-body/30"}`}
                      aria-hidden="true"
                    >
                      {feature.included ? "✓" : "✗"}
                    </span>
                    <span className={feature.included ? "" : "text-text-body/40"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`mt-6 block min-h-[44px] rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors duration-200 ${
                  plan.recommended
                    ? "bg-gold text-navy hover:bg-gold-dark"
                    : "border border-gold text-gold hover:bg-gold hover:text-navy"
                }`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

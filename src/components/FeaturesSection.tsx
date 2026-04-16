import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Why BharatStay Wins"
          subtitle="Built for India. Designed for speed. Powered by AI."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteData.features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl p-6 transition-all duration-200 hover:border-[var(--border-brand)]"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
              <h3 className="mt-4 text-base font-bold" style={{ color: "var(--text-primary)" }}>
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

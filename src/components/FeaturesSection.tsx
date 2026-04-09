import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Why Choose Bharatstay?"
          subtitle="Everything you need to manage bookings, delight guests, and grow your hospitality business."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-off-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-text-heading">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

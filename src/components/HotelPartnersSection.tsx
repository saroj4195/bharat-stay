import SectionHeading from "@/components/SectionHeading";

const benefits = [
  {
    icon: "💰",
    title: "Zero Commission, Zero Platform Fee",
    description:
      "Keep 100% of your booking revenue. No commission cuts, no hidden platform charges — every rupee your guest pays goes directly to you.",
  },
  {
    icon: "🛠️",
    title: "Free Tools Worth ₹15K/Month",
    description:
      "Get a free Channel Manager (up to 4 OTA connections), free Booking Engine, and free basic PMS — tools you currently pay ₹10K–15K/month for.",
  },
];

export default function HotelPartnersSection() {
  return (
    <section id="hotel-partners" className="bg-navy px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="For Hotel Partners"
          subtitle="Join 1,400+ hotels already growing with BharatStay. Zero cost to you — we make money only when your guests are happy."
          dark
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-200 hover:bg-white/10"
            >
              <span className="text-4xl">{b.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-gold px-8 py-3 text-sm font-bold text-navy transition-colors duration-200 hover:bg-gold-dark"
          >
            Partner With Us →
          </a>
        </div>
      </div>
    </section>
  );
}

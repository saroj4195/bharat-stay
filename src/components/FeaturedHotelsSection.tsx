import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  return (
    <span className="text-sm" aria-label={`${rating} out of 5 stars`} style={{ color: "var(--color-rating)" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">{i < fullStars ? "★" : "☆"}</span>
      ))}
      <span className="ml-1 text-xs" style={{ color: "var(--text-muted)" }}>{rating}</span>
    </span>
  );
}

export default function FeaturedHotelsSection() {
  return (
    <section id="featured-hotels" className="px-6 py-20" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Hotels & Stays"
          subtitle="Handpicked, verified, and genuinely cheaper than OTAs."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteData.featuredHotels.map((hotel) => (
            <div
              key={hotel.name}
              className="overflow-hidden rounded-xl transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-brand)]"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="relative">
                <img
                  src={hotel.imageSrc}
                  alt={`Photo of ${hotel.name}`}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                  width={600}
                  height={192}
                />
                <div
                  className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-xs font-bold"
                  style={{ background: "var(--tint-cta)", color: "var(--color-cta)", border: "1px solid rgba(0,191,165,0.3)" }}
                >
                  Verified ✓
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>{hotel.name}</h3>
                <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>{hotel.location}</p>
                <StarRating rating={hotel.rating} />
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{hotel.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-bold" style={{ color: "var(--color-brand)" }}>{hotel.pricePerNight}</p>
                  <span className="text-xs" style={{ color: "var(--color-success)" }}>15% cheaper than OTAs</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

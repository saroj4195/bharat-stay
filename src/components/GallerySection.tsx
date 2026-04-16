import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-sm" aria-label={`${rating} out of 5 stars`} style={{ color: "var(--color-rating)" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">{i < rating ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-20" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Explore Destinations Across India"
          subtitle="Verified hotels in top travel destinations — all cheaper than OTAs."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteData.gallery.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-brand)]"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <img
                src={item.imageSrc}
                alt={`Photo of ${item.name}`}
                loading="lazy"
                className="h-44 w-full object-cover"
                width={600}
                height={176}
              />
              <div className="p-4">
                <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <StarRating rating={item.rating} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.location}</span>
                </div>
                <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

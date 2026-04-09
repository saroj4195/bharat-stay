import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-sm text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-off-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Hotels & Destinations"
          subtitle="Explore a curated selection of stunning properties available through Bharatstay."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.gallery.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.imageSrc}
                alt={`Photo of ${item.name}`}
                loading="lazy"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold text-text-heading">
                  {item.name}
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <StarRating rating={item.rating} />
                  <span className="text-xs text-text-body/50">
                    {item.location}
                  </span>
                </div>
                <p className="mt-2 text-sm text-text-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

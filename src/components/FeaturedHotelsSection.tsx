import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  return (
    <span className="text-sm text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          {i < fullStars ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-xs text-text-body/50">{rating}</span>
    </span>
  );
}

export default function FeaturedHotelsSection() {
  return (
    <section id="featured-hotels" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Hotels & Stays"
          subtitle="Handpicked luxury properties for your next unforgettable getaway."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteData.featuredHotels.map((hotel) => (
            <div
              key={hotel.name}
              className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={hotel.imageSrc}
                alt={`Photo of ${hotel.name}`}
                loading="lazy"
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-text-heading">
                  {hotel.name}
                </h3>
                <p className="mt-1 text-xs text-text-body/50">{hotel.location}</p>
                <StarRating rating={hotel.rating} />
                <p className="mt-2 text-sm text-text-body">
                  {hotel.description}
                </p>
                <p className="mt-3 text-lg font-bold text-gold">
                  {hotel.pricePerNight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

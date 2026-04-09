import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

const avatarColors = [
  "bg-gold",
  "bg-navy",
  "bg-gold-dark",
  "bg-navy-light",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Trusted by hotel owners and travelers around the world."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-border bg-off-white p-6 shadow-sm"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-3 text-sm italic text-text-body">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${avatarColors[index % avatarColors.length]}`}
                  aria-hidden="true"
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-body/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

const avatarColors = ["#FF6D00", "#00BFA5", "#FF8A30", "#00967D", "#E05500"];

function getInitials(name: string): string {
  return name.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2);
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-20" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="9,800+ repeat customers can't be wrong."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteData.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-xl p-6"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5" style={{ color: "var(--color-rating)" }} aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} aria-hidden="true">{i < testimonial.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <p className="mt-3 text-sm italic leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: avatarColors[index % avatarColors.length] }}
                  aria-hidden="true"
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{testimonial.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

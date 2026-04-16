import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function DiscoverSection() {
  const { heading, description, images } = siteData.discover;

  return (
    <section id="discover" className="px-6 py-20" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={heading} subtitle={description} />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.alt}
              className="overflow-hidden rounded-xl transition-all duration-200 hover:shadow-lg"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src={img.imageSrc}
                alt={img.alt}
                loading="lazy"
                className="h-56 w-full object-cover md:h-64"
                width={400}
                height={256}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

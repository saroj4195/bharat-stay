import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function DiscoverSection() {
  const { heading, description, images } = siteData.discover;

  return (
    <section id="discover" className="bg-off-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={heading} subtitle={description} />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.alt}
              className="overflow-hidden rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg"
            >
              <img
                src={img.imageSrc}
                alt={img.alt}
                loading="lazy"
                className="h-56 w-full object-cover md:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

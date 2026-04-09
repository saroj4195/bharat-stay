import { siteData } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function DiscoverSection() {
  const { heading, description, images } = siteData.discover;

  return (
    <section id="discover" className="bg-off-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={heading} subtitle={description} />

        {/* Desktop: first image tall on left, 3 images stacked right in 2x2 minus one */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2" style={{ gridAutoRows: "minmax(180px, 1fr)" }}>
          {/* First image: spans 1 col, 2 rows */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg md:row-span-2">
            <img
              src={images[0].imageSrc}
              alt={images[0].alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Remaining 3 images: each takes 1 cell */}
          {images.slice(1).map((img) => (
            <div
              key={img.alt}
              className="overflow-hidden rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg"
            >
              <img
                src={img.imageSrc}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

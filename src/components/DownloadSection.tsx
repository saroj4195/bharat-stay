import { siteData } from "@/data/siteData";

export default function DownloadSection() {
  const { heading, description, appStoreUrl, playStoreUrl, highlights } = siteData.download;

  return (
    <section id="download" className="relative overflow-hidden bg-navy px-6 py-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text + badges */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white italic sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {description}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-dark"
              >
                <span className="text-xl" aria-hidden="true">▶️</span>
                <span>
                  <span className="block text-xs font-normal text-navy/60">Get it on</span>
                  Google Play
                </span>
              </a>
            </div>
          </div>

          {/* Highlight images */}
          <div className="grid grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div key={h.caption} className="overflow-hidden rounded-xl">
                <img
                  src={h.imageSrc}
                  alt={h.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-2 text-center text-xs font-medium text-white/70">{h.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

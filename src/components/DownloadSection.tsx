import { siteData } from "@/data/siteData";

export default function DownloadSection() {
  const { heading, description, playStoreUrl, highlights } = siteData.download;

  return (
    <section id="download" className="px-6 py-20" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text + badge */}
          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: "var(--tint-cta)", color: "var(--color-cta)", border: "1px solid rgba(0,191,165,0.3)" }}
            >
              📱 Available on Android
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              {heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {description}
            </p>

            <div className="mt-8">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex min-h-[44px] items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold glow-cta"
              >
                <span aria-hidden="true">▶️</span>
                <span>
                  <span className="block text-xs font-normal opacity-70">Get it on</span>
                  Google Play
                </span>
              </a>
            </div>
          </div>

          {/* Highlight images */}
          <div className="grid grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div key={h.caption} className="overflow-hidden rounded-xl" style={{ border: "1px solid var(--border)" }}>
                <img
                  src={h.imageSrc}
                  alt={h.alt}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={200}
                  height={160}
                />
                <p className="p-2 text-center text-xs font-medium" style={{ color: "var(--text-muted)" }}>{h.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteData } from "@/data/siteData";

export default function HeroSection() {
  const { headline, subheadline, imageSrc, appStoreUrl, playStoreUrl } = siteData.hero;

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[85vh]">
      {/* Background image */}
      <img
        src={imageSrc}
        alt="Luxury resort aerial view"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white italic sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          {subheadline}
        </p>

        {/* Store badge */}
        <div className="mt-10 flex items-center justify-center">
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
    </section>
  );
}

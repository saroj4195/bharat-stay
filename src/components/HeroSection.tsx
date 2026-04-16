import { siteData } from "@/data/siteData";

export default function HeroSection() {
  const { headline, subheadline, imageSrc, playStoreUrl } = siteData.hero;

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[85vh]">
      {/* Background image */}
      <img
        src={imageSrc}
        alt="Luxury resort aerial view"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,6,4,0.65) 0%, rgba(8,6,4,0.5) 50%, rgba(8,6,4,0.8) 100%)" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold" style={{ background: "rgba(255,109,0,0.2)", border: "1px solid rgba(255,109,0,0.5)", color: "#FF8A30" }}>
          <span className="pulse-dot h-1.5 w-1.5 rounded-full" style={{ background: "#FF6D00" }} />
          AI-Powered Hotel Booking · Zero Commission
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "#ffffff", textWrap: "balance" }}>
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl" style={{ color: "rgba(255,255,255,0.85)" }}>
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex min-h-[44px] items-center gap-2 rounded-lg px-7 py-3 text-sm font-bold glow-cta"
          >
            <span aria-hidden="true">▶️</span>
            <span>
              <span className="block text-xs font-normal opacity-70">Get it on</span>
              Google Play
            </span>
          </a>
          <a
            href="/support/partner-onboarding"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-7 py-3 text-sm font-bold transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff", background: "rgba(255,255,255,0.1)" }}
          >
            List Your Hotel Free →
          </a>
        </div>

        {/* Trust stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
          <span>✓ 9,800+ repeat customers</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
          <span>✓ 1,400+ verified hotels</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
          <span>✓ 0% commission</span>
        </div>
      </div>
    </section>
  );
}

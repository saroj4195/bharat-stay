import Link from "next/link";

export default function HotelPartnersSection() {
  return (
    <section id="hoteliers" className="px-6 py-20" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
            Are You a Hotel Owner?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
            Join 1,400+ hotels earning more with zero commission and free tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl p-6 text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span className="text-4xl">💰</span>
            <h3 className="mt-3 font-bold" style={{ color: "var(--text-primary)" }}>Zero Commission</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Keep 100% of every booking. No cuts, no platform fees — ever.</p>
          </div>
          <div className="rounded-xl p-6 text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span className="text-4xl">🛠️</span>
            <h3 className="mt-3 font-bold" style={{ color: "var(--text-primary)" }}>Free Tools</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Free Channel Manager, Booking Engine & PMS — worth ₹15K/month.</p>
          </div>
          <div className="rounded-xl p-6 text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span className="text-4xl">👥</span>
            <h3 className="mt-3 font-bold" style={{ color: "var(--text-primary)" }}>Own Your Guests</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Get direct guest data — email, phone, history. OTAs hide this from you.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/for-hotels"
            className="btn-brand inline-flex min-h-[44px] items-center rounded-lg px-8 py-3 text-sm font-bold"
          >
            See Plans & Pricing for Hotels →
          </Link>
          <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
            Free forever plan available. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

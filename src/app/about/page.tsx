import type { Metadata } from "next";
import { siteData } from "@/data/siteData";
import TeamMemberCard from "@/components/TeamMemberCard";

const aboutSeo = siteData.seo.about;

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
};

const stats = [
  { value: "9,800+", label: "Repeat Customers" },
  { value: "1,400+", label: "Partner Hotels" },
  { value: "50,000+", label: "Hotels Listed" },
  { value: "15%", label: "Avg. Savings" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-navy">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
          alt="Luxury hotel lobby"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white italic sm:text-5xl">
            About BharatStay
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Making hotel booking honest and affordable for every Indian traveler.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-navy md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-navy/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Story */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                Our Mission
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy italic sm:text-3xl">
                Honest Pricing, Real Savings
              </h2>
              <p className="mt-4 leading-relaxed text-text-body">
                {siteData.companyMission}
              </p>
            </div>
            <div>
              <div className="mb-4 inline-block rounded-lg bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                Our Story
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy italic sm:text-3xl">
                Born From Frustration
              </h2>
              <p className="mt-4 leading-relaxed text-text-body">
                {siteData.companyStory}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-navy italic sm:text-3xl">
            What Makes Us Different
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="text-3xl">🤝</span>
              <h3 className="mt-3 font-bold text-navy">Direct Hotel Partnerships</h3>
              <p className="mt-2 text-sm text-text-body">
                We work directly with hotels — no middlemen inflating prices. What you see is what you pay.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="text-3xl">✅</span>
              <h3 className="mt-3 font-bold text-navy">Verified Properties</h3>
              <p className="mt-2 text-sm text-text-body">
                Every hotel is quality-checked by our team. Real guest data, not fake reviews.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="text-3xl">🎁</span>
              <h3 className="mt-3 font-bold text-navy">Loyalty Rewards</h3>
              <p className="mt-2 text-sm text-text-body">
                Every booking earns you ₹300-500 off your next stay. The more you book, the more you save.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-2xl font-bold text-navy italic sm:text-3xl">
            Meet the Team
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-text-body">
            A small, passionate team of travel and tech enthusiasts building the future of hotel booking in India.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteData.team.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                avatarUrl={member.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { siteData } from "@/data/siteData";
import TeamMemberCard from "@/components/TeamMemberCard";

const aboutSeo = siteData.seo.about;

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
};

export default function AboutPage() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About {siteData.brand}
        </h1>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            {siteData.companyMission}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">Our Story</h2>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            {siteData.companyStory}
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold text-foreground">
            Meet the Team
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}

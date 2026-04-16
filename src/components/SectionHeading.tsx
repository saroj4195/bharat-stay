interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: "var(--text-primary)", textWrap: "balance" } as React.CSSProperties}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>{subtitle}</p>
      )}
    </div>
  );
}

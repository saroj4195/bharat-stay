interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeading({ title, subtitle, dark }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`font-heading text-3xl font-bold tracking-tight italic sm:text-4xl ${dark ? "text-white" : "text-text-heading"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${dark ? "text-white/70" : "text-text-body"}`}>{subtitle}</p>
      )}
    </div>
  );
}

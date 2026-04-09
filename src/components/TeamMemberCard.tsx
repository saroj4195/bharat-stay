import Image from "next/image";

const avatarColors = [
  "bg-indigo-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export default function TeamMemberCard({
  name,
  role,
  avatarUrl,
}: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-muted p-6 shadow-sm text-center">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={`${name}, ${role}`}
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold text-white ${getColor(name)}`}
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>
      )}
      <h3 className="mt-4 text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-foreground/60">{role}</p>
    </div>
  );
}

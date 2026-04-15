import SupportSidebar from "@/components/SupportSidebar";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-73px)]">
      <SupportSidebar />
      <div className="flex-1 bg-white">{children}</div>
    </div>
  );
}

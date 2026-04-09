import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bharatstay — Luxury Hotel Booking Made Effortless",
  description:
    "Discover and book handpicked luxury hotels worldwide with Bharatstay. Real-time availability, secure payments, and unbeatable prices.",
  openGraph: {
    title: "Bharatstay — Luxury Hotel Booking Made Effortless",
    description:
      "Discover and book handpicked luxury hotels worldwide with Bharatstay. Real-time availability, secure payments, and unbeatable prices.",
    url: "https://bharatstay.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharatstay — Luxury Hotel Booking Made Effortless",
    description:
      "Discover and book handpicked luxury hotels worldwide with Bharatstay. Real-time availability, secure payments, and unbeatable prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

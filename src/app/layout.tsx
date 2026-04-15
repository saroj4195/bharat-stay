import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfferPopup from "@/components/OfferPopup";
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
  title: "BharatStay — Verified Hotels, Genuinely Cheaper Prices",
  description:
    "Book verified hotels across India at 10-15% lower prices. BharatStay partners directly with hotels — no middlemen, no hidden charges.",
  openGraph: {
    title: "BharatStay — Verified Hotels, Genuinely Cheaper Prices",
    description:
      "Book verified hotels across India at 10-15% lower prices. BharatStay partners directly with hotels — no middlemen, no hidden charges.",
    url: "https://bharatstay.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "BharatStay — Verified Hotels, Genuinely Cheaper Prices",
    description:
      "Book verified hotels across India at 10-15% lower prices. BharatStay partners directly with hotels — no middlemen, no hidden charges.",
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
        <OfferPopup />
      </body>
    </html>
  );
}

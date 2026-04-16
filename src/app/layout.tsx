import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfferPopup from "@/components/OfferPopup";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BharatStay — AI-Powered Hotel Booking. Zero Commission.",
  description:
    "Book verified hotels near railway stations across India. AI-powered search, zero commission, zero platform fee. Save 10-15% vs OTAs.",
  openGraph: {
    title: "BharatStay — AI-Powered Hotel Booking. Zero Commission.",
    description:
      "Book verified hotels near railway stations across India. AI-powered search, zero commission, zero platform fee.",
    url: "https://bharatstay.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "BharatStay — AI-Powered Hotel Booking. Zero Commission.",
    description:
      "Book verified hotels near railway stations across India. AI-powered search, zero commission, zero platform fee.",
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
      data-theme="cyber-saffron-light"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased" style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <OfferPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}

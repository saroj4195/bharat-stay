import type { Metadata } from "next";
import { siteData } from "@/data/siteData";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import FeaturedHotelsSection from "@/components/FeaturedHotelsSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HotelPartnersSection from "@/components/HotelPartnersSection";
import DownloadSection from "@/components/DownloadSection";

const homeSeo = siteData.seo.home;

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    images: homeSeo.ogImage ? [homeSeo.ogImage] : undefined,
    url: homeSeo.ogUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <DiscoverSection />
      <FeaturedHotelsSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <HotelPartnersSection />
      <DownloadSection />
    </>
  );
}

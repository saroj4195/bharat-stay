// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Hero Section
export interface HeroContent {
  headline: string;
  subheadline: string;
  imageSrc: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

// Discover Section
export interface DiscoverContent {
  heading: string;
  description: string;
  images: DiscoverImage[];
}

export interface DiscoverImage {
  imageSrc: string;
  alt: string;
  tall?: boolean;
}

// Features Section
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Featured Hotels Section
export interface FeaturedHotel {
  imageSrc: string;
  name: string;
  rating: number;
  description: string;
  pricePerNight: string;
  location: string;
}

// Gallery Section
export interface GalleryItem {
  imageSrc: string;
  name: string;
  location: string;
  rating: number;
  description: string;
}

// Download Section
export interface DownloadContent {
  heading: string;
  description: string;
  appStoreUrl: string;
  playStoreUrl: string;
  highlights: DownloadHighlight[];
}

export interface DownloadHighlight {
  imageSrc: string;
  caption: string;
  alt: string;
}

// Testimonials Section
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

// Team (About Page)
export interface TeamMember {
  name: string;
  role: string;
  avatarUrl?: string;
}

// Pricing Section
export interface PricingPlan {
  name: string;
  price: number | string;
  recommended: boolean;
  features: { text: string; included: boolean }[];
  ctaLabel: string;
  ctaHref: string;
}

// SEO Metadata per page
export interface PageSeo {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

// Footer data
export interface FooterData {
  brandDescription: string;
  address: string;
  phone: string;
  email: string;
  quickLinks1: NavLink[];
  quickLinks2: NavLink[];
  socialLinks: { platform: string; url: string; icon: string }[];
}

// Site-wide data export shape
export interface SiteData {
  brand: string;
  tagline: string;
  navLinks: NavLink[];
  hero: HeroContent;
  discover: DiscoverContent;
  features: Feature[];
  featuredHotels: FeaturedHotel[];
  gallery: GalleryItem[];
  download: DownloadContent;
  testimonials: Testimonial[];
  pricing: PricingPlan[];
  footer: FooterData;
  team: TeamMember[];
  companyMission: string;
  companyStory: string;
  contactEmail: string;
  contactAddress: string;
  seo: Record<string, PageSeo>;
}

export const siteData: SiteData = {
  brand: "Bharatstay",
  tagline: "Escape to Your Dream Hotel Experience",

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/#featured-hotels" },
    { label: "Features", href: "/#features" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact Us", href: "/contact" },
  ],

  hero: {
    headline: "Escape to Your Dream Hotel Experience",
    subheadline: "Discover handpicked luxury hotels and resorts across the world. Book your perfect getaway with Bharatstay.",
    imageSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
  },

  discover: {
    heading: "Discover Hotels Crafted for Every Journey",
    description: "From serene beachfront retreats to vibrant city escapes, find the perfect stay tailored to your travel style. Every property is handpicked for quality and comfort.",
    images: [
      { imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Tropical beach resort with turquoise waters", tall: true },
      { imageSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", alt: "Luxury hotel lobby with elegant decor" },
      { imageSrc: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Hotel infinity pool overlooking the ocean" },
      { imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Resort with palm trees and tropical gardens" },
    ],
  },

  features: [
    { icon: "🔍", title: "Easy Search", description: "Search and book hotels in seconds with our intuitive interface." },
    { icon: "⚡", title: "Real-Time Availability", description: "See live room availability and pricing updated every minute." },
    { icon: "🔒", title: "Secure Payments", description: "PCI-compliant payment processing for safe transactions." },
    { icon: "🌍", title: "Multi-Language", description: "Support for 20+ languages and automatic currency conversion." },
    { icon: "💬", title: "24/7 Support", description: "Get help anytime with our dedicated support team." },
    { icon: "📊", title: "Dashboard", description: "Track bookings, revenue, and occupancy from one place." },
  ],

  featuredHotels: [
    {
      imageSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
      name: "The Grand Palace Resort",
      rating: 5,
      description: "Luxury beachfront resort with private villas and infinity pools overlooking the Indian Ocean.",
      pricePerNight: "$650/Night",
      location: "Bali, Indonesia",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
      name: "Azure Coast Hotel",
      rating: 4.5,
      description: "Cliffside boutique hotel with stunning caldera views and world-class rooftop dining.",
      pricePerNight: "$420/Night",
      location: "Santorini, Greece",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
      name: "Alpine Lodge & Spa",
      rating: 4.8,
      description: "Cozy mountain retreat with a world-class spa and breathtaking Matterhorn panoramas.",
      pricePerNight: "$380/Night",
      location: "Zermatt, Switzerland",
    },
  ],

  gallery: [
    {
      imageSrc: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
      name: "Oceanview Infinity Pool",
      location: "Maldives",
      rating: 5,
      description: "Relax by the stunning infinity pool with panoramic ocean views.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      name: "Pristine White Beach",
      location: "Boracay, Philippines",
      rating: 4.8,
      description: "Powdery white sand and crystal-clear waters perfect for a tropical escape.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
      name: "Cliffside Ocean Suite",
      location: "Amalfi Coast, Italy",
      rating: 4.9,
      description: "Wake up to breathtaking ocean views from your private cliffside suite.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
      name: "Tropical Sunset Retreat",
      location: "Phuket, Thailand",
      rating: 4.7,
      description: "Experience magical sunsets from your beachfront bungalow.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
      name: "Maldives Water Villa",
      location: "Maldives",
      rating: 5,
      description: "Overwater villas with glass floors and direct lagoon access.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80",
      name: "Tropical Island Paradise",
      location: "Seychelles",
      rating: 4.9,
      description: "A secluded island paradise surrounded by turquoise waters.",
    },
  ],

  download: {
    heading: "Ready to Get Started?",
    description: "Download Bharatstay today and experience effortless hotel booking on your mobile device. Available on iOS and Android.",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
    highlights: [
      {
        imageSrc: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        caption: "Snorkeling Adventures",
        alt: "Snorkeling in crystal clear tropical waters",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=600&q=80",
        caption: "Kayaking Excursions",
        alt: "Kayaking through scenic waterways",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
        caption: "Sunset Cruises",
        alt: "Sunset boat cruise on calm waters",
      },
    ],
  },

  testimonials: [
    {
      name: "Priya Sharma",
      role: "Travel Blogger",
      quote: "Bharatstay made booking our anniversary trip effortless. The hotel recommendations were spot-on and the prices were unbeatable.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Business Traveler",
      quote: "I travel for work every week and Bharatstay has become my go-to app. Real-time availability saves me so much time.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Family Vacationer",
      quote: "We found the perfect family resort through Bharatstay. The kids loved the pool and we loved the seamless booking experience.",
      rating: 4,
    },
  ],

  pricing: [
    {
      name: "Free",
      price: 0,
      recommended: false,
      features: [
        { text: "Browse all hotels", included: true },
        { text: "Basic search filters", included: true },
        { text: "Email support", included: true },
        { text: "Price alerts", included: false },
        { text: "Priority booking", included: false },
      ],
      ctaLabel: "Get Started",
      ctaHref: "https://play.google.com",
    },
    {
      name: "Premium",
      price: "$9.99",
      recommended: true,
      features: [
        { text: "Browse all hotels", included: true },
        { text: "Advanced search filters", included: true },
        { text: "Priority support", included: true },
        { text: "Price alerts", included: true },
        { text: "Priority booking", included: true },
      ],
      ctaLabel: "Start Free Trial",
      ctaHref: "https://play.google.com",
    },
    {
      name: "Business",
      price: "$29.99",
      recommended: false,
      features: [
        { text: "Everything in Premium", included: true },
        { text: "Team management", included: true },
        { text: "Expense reports", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom invoicing", included: true },
      ],
      ctaLabel: "Contact Sales",
      ctaHref: "/contact",
    },
  ],

  footer: {
    brandDescription: "Bharatstay helps you discover and book the finest hotels and resorts worldwide. Your dream vacation starts here.",
    address: "123 Hospitality Lane, Mumbai, Maharashtra 400001, India",
    phone: "+91 22 1234 5678",
    email: "hello@bharatstay.io",
    quickLinks1: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Featured Hotels", href: "/#featured-hotels" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
    quickLinks2: [
      { label: "Contact Us", href: "/contact" },
      { label: "Features", href: "/#features" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Download App", href: "/#download" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/bharatstay", icon: "📘" },
      { platform: "Twitter", url: "https://twitter.com/bharatstay", icon: "🐦" },
      { platform: "Instagram", url: "https://instagram.com/bharatstay", icon: "📷" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/bharatstay", icon: "💼" },
    ],
  },

  team: [
    { name: "Vikram Desai", role: "CEO & Founder" },
    { name: "Meera Krishnan", role: "Head of Product" },
    { name: "Arjun Nair", role: "CTO" },
  ],

  companyMission: "At Bharatstay, our mission is to make luxury travel accessible to everyone. We believe that every traveler deserves a world-class hotel experience, and we work tirelessly to connect you with the finest properties at the best prices.",
  companyStory: "Founded in 2023, Bharatstay started with a simple idea: hotel booking should be effortless and transparent. What began as a small team of travel enthusiasts has grown into a platform trusted by thousands of travelers across India and beyond. We partner directly with hotels to bring you exclusive deals, honest reviews, and a seamless booking experience from search to checkout.",

  contactEmail: "hello@bharatstay.io",
  contactAddress: "123 Hospitality Lane, Mumbai, Maharashtra 400001, India",

  seo: {
    home: {
      title: "Bharatstay — Luxury Hotel Booking Made Effortless",
      description: "Discover and book handpicked luxury hotels worldwide with Bharatstay. Real-time availability, secure payments, and unbeatable prices.",
      ogUrl: "https://bharatstay.io",
    },
    about: {
      title: "About Bharatstay — Our Story and Mission",
      description: "Learn about Bharatstay's mission to make luxury travel accessible. Meet the team behind your favorite hotel booking platform.",
      ogUrl: "https://bharatstay.io/about",
    },
    contact: {
      title: "Contact Bharatstay — Get in Touch With Our Team",
      description: "Have questions or need help booking? Reach out to the Bharatstay team via email, phone, or our contact form. We are here to help.",
      ogUrl: "https://bharatstay.io/contact",
    },
    privacy: {
      title: "Privacy Policy — Bharatstay Data Protection Practices",
      description: "Read how Bharatstay collects, uses, and protects your personal data. Your privacy and security are our top priorities.",
      ogUrl: "https://bharatstay.io/privacy",
    },
    terms: {
      title: "Terms of Service — Bharatstay Usage Agreement",
      description: "Review the terms and conditions for using Bharatstay services. Understand your rights and responsibilities as a platform user.",
      ogUrl: "https://bharatstay.io/terms",
    },
  },
};

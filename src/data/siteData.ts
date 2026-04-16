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
  tagline: "Book Verified Hotels. Save Up to 15%.",

  navLinks: [
    { label: "Hotels", href: "/#featured-hotels" },
    { label: "Destinations", href: "/#gallery" },
    { label: "Why BharatStay", href: "/#features" },
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
  ],

  hero: {
    headline: "Book Verified Hotels. Pay Less Than Anywhere Else.",
    subheadline: "BharatStay partners directly with hotels — no middlemen, no inflated prices. Save 10-15% on every booking with our verified properties across India.",
    imageSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
  },

  discover: {
    heading: "Why 9,800+ Customers Keep Coming Back",
    description: "We don't just list hotels — we verify them. Every BharatStay property is quality-checked, fairly priced, and backed by real guest data. No fake reviews, no hidden charges.",
    images: [
      { imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Tropical beach resort with turquoise waters" },
      { imageSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", alt: "Luxury hotel lobby with elegant decor" },
      { imageSrc: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Hotel infinity pool overlooking the ocean" },
      { imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Resort with palm trees and tropical gardens" },
    ],
  },

  features: [
    { icon: "💰", title: "Genuinely Cheaper", description: "Hotels save 15-20% on commission with us and pass 10-15% savings directly to you. Real savings, not fake discounts." },
    { icon: "✅", title: "BharatStay Verified", description: "Every listed hotel is verified by our team. We know the real guest experience — no fake reviews, no surprises." },
    { icon: "🎯", title: "Curated Top Picks", description: "We show you 5-7 best options, not 200 confusing listings. Less noise, faster decisions, better stays." },
    { icon: "🎁", title: "Rewards on Every Booking", description: "Every booking earns you ₹300-500 off your next stay within 90 days. The more you book, the more you save." },
    { icon: "🔒", title: "No Hidden Charges", description: "The price you see is the price you pay. Zero platform fees, zero surprise charges at checkout." },
    { icon: "📱", title: "Book in 60 Seconds", description: "Search, compare, and book — all in under a minute. Simple interface designed for quick decisions." },
  ],

  featuredHotels: [
    {
      imageSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
      name: "Hotel Sunrise Puri",
      rating: 4.5,
      description: "Clean, comfortable rooms just 5 minutes from Puri Beach. BharatStay Verified with real guest ratings.",
      pricePerNight: "₹1,899/Night",
      location: "Puri, Odisha",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
      name: "The Heritage Inn",
      rating: 4.8,
      description: "Heritage property near Jaipur station with rooftop restaurant and stunning Hawa Mahal views.",
      pricePerNight: "₹2,499/Night",
      location: "Jaipur, Rajasthan",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
      name: "Goa Beach Resort",
      rating: 4.6,
      description: "Beachside resort in South Goa with pool, spa, and complimentary breakfast. 15% cheaper than OTAs.",
      pricePerNight: "₹3,299/Night",
      location: "South Goa",
    },
  ],

  gallery: [
    {
      imageSrc: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
      name: "Varanasi Ghats Stay",
      location: "Varanasi, UP",
      rating: 4.7,
      description: "Riverside hotel with stunning views of the Ganges and evening aarti.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      name: "Kovalam Beach Hotel",
      location: "Kerala",
      rating: 4.8,
      description: "Beachfront property with Ayurvedic spa and fresh seafood restaurant.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
      name: "Shimla Hill Resort",
      location: "Shimla, HP",
      rating: 4.6,
      description: "Mountain retreat with valley views, bonfire nights, and trekking trails.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
      name: "Udaipur Lake Palace",
      location: "Udaipur, Rajasthan",
      rating: 4.9,
      description: "Lakeside heritage hotel with royal Rajasthani hospitality and cuisine.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
      name: "Andaman Beach Villa",
      location: "Port Blair",
      rating: 4.8,
      description: "Private beach villa with snorkeling, scuba diving, and island tours.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80",
      name: "Munnar Tea Estate Stay",
      location: "Munnar, Kerala",
      rating: 4.7,
      description: "Stay amidst tea plantations with misty mountain views and nature walks.",
    },
  ],

  download: {
    heading: "Download BharatStay & Save on Every Trip",
    description: "Join 9,800+ repeat customers who save 10-15% on every hotel booking. Get exclusive app-only deals and reward coupons.",
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
      role: "Frequent Traveler, Delhi",
      quote: "I saved ₹1,200 on my Goa trip compared to MakeMyTrip. BharatStay shows you the real price — no hidden charges at checkout. I've booked 4 times already.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Business Traveler, Mumbai",
      quote: "I travel to Pune every week for work. BharatStay's verified hotels near the station are always clean and reliable. The reward coupons keep me coming back.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "Family Trip, Hyderabad",
      quote: "Booked a family trip to Ooty through BharatStay. The hotel was exactly as shown — no fake photos, no surprises. Got ₹500 off on our next booking too!",
      rating: 5,
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
      { label: "FAQ", href: "/support/faq" },
      { label: "Legal", href: "/support/legal" },
      { label: "Partner With Us", href: "/support/partner" },
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

  companyMission: "BharatStay's mission is simple — make hotel booking honest and affordable for every Indian traveler. We partner directly with hotels, cut out the middlemen, and pass the savings to you. No fake discounts, no hidden charges, no inflated prices.",
  companyStory: "BharatStay was born from a frustration every Indian traveler knows — you search for a hotel, find a great price, and by checkout it's 20% more expensive. We decided to fix that. By partnering directly with hotels and giving them free tools to manage their business, we created a platform where hotels keep 100% of their revenue and customers get genuinely lower prices. Today, with 9,800+ repeat customers and growing, we're proving that honest pricing builds real loyalty.",

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

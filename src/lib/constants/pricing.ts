export const PRICING_TABS = {
  web: "Web Development",
  mobile: "Mobile Development",
  hostingSeo: "Hosting & SEO",
} as const;

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export const WEB_PLANS: PricingPlan[] = [
  {
    id: "web-basic",
    name: "Startup Web",
    tagline: "Custom Quote",
    description: "Ideal for small businesses needing a clean, professional online presence.",
    features: [
      "5-Page Responsive Web Design",
      "Modern UI/UX Frontend",
      "Essential Contact & Lead Forms",
      "Standard Animations (Framer Motion)",
      "Basic On-Page SEO Setup",
      "1 Month Free Support & Edits",
    ],
    ctaText: "Request a Quote",
  },
  {
    id: "web-standard",
    name: "Business Suite",
    tagline: "Custom Quote",
    description: "Great for growing companies wanting interactive features or e-commerce.",
    features: [
      "Up to 10 Custom Web Pages",
      "Full MERN Stack or Next.js Architecture",
      "Admin Panel & Product Management",
      "Payment Gateway Integration",
      "CRM & WhatsApp API Integration",
      "3 Months Premium Support",
    ],
    ctaText: "Request a Quote",
    isPopular: true,
  },
  {
    id: "web-premium",
    name: "Enterprise Web",
    tagline: "Custom Quote",
    description: "Designed for high-performance SaaS, complex databases, or custom AI integrations.",
    features: [
      "Unlimited Pages / Tailored Architecture",
      "Custom Database & High-Security APIs",
      "AI Tools & OpenCV Computer Vision Integration",
      "Advanced Real-Time Interactive Dashboards",
      "Local & Global SEO Rank Strategy",
      "6 Months Dedicated Priority Support",
    ],
    ctaText: "Request a Quote",
  },
];

export const MOBILE_PLANS: PricingPlan[] = [
  {
    id: "mobile-basic",
    name: "MVP Mobile",
    tagline: "Custom Quote",
    description: "A fast, cost-effective prototype app for test markets or startups.",
    features: [
      "Single-Platform App (Android or iOS)",
      "Cross-Platform Flutter Core",
      "Up to 5 Responsive App Screens",
      "Clean UI/UX and Asset Integration",
      "Essential Backend/API Syncing",
      "1 Month Launch Support",
    ],
    ctaText: "Request a Quote",
  },
  {
    id: "mobile-standard",
    name: "Growth Mobile",
    tagline: "Custom Quote",
    description: "Full companion mobile app optimized for growth and user retention.",
    features: [
      "Dual-Platform (Android & iOS)",
      "Up to 10 High-Fidelity Screens",
      "Secure Payment Gateway Integration",
      "Social Login & Profile Management",
      "Push Notifications System",
      "3 Months Dedicated Maintenance",
    ],
    ctaText: "Request a Quote",
    isPopular: true,
  },
  {
    id: "mobile-premium",
    name: "Enterprise Mobile",
    tagline: "Custom Quote",
    description: "Complex, offline-first applications with real-time operations.",
    features: [
      "Custom Multiplatform Flutter App",
      "Unlimited Screens / Complex UI",
      "Real-Time Chat & Location Tracking",
      "Offline Storage & Local DB Cache",
      "Advanced Animated Transitions",
      "6 Months Priority Maintenance & Updates",
    ],
    ctaText: "Request a Quote",
  },
];

export const HOSTING_SEO_PLANS: PricingPlan[] = [
  {
    id: "host-basic",
    name: "Standard Hosting",
    tagline: "Custom Quote",
    description: "Essential hosting infrastructure and basic visibility audits.",
    features: [
      "Managed Cloud Hosting (Vercel/VPS)",
      "Custom Domain Link & Free SSL Certificate",
      "Automated Monthly Backups",
      "Initial SEO Site Audit & Reports",
      "Security Monitoring & DDoS Protection",
      "Email Ticket Support",
    ],
    ctaText: "Request a Quote",
  },
  {
    id: "host-standard",
    name: "Advanced Cloud & SEO",
    tagline: "Custom Quote",
    description: "Premium performance setup with actively optimized SEO strategies.",
    features: [
      "High-Performance Scalable VPS Hosting",
      "Daily Automatic Backups & Snapshots",
      "Global CDN Setup (Cloudflare/Cloudfront)",
      "Comprehensive On-Page SEO Optimization",
      "10 Target Keywords Tracking",
      "Monthly Analytics & Audits Report",
    ],
    ctaText: "Request a Quote",
    isPopular: true,
  },
  {
    id: "host-premium",
    name: "Ultimate Premium Plan",
    tagline: "Custom Quote",
    description: "Maximum bandwidth speed infrastructure and dedicated rank campaigns.",
    features: [
      "Auto-Scaling Server Cluster Setup",
      "Speed Optimization (90+ PageSpeed Scores)",
      "Advanced Link Building & Backlinks Audit",
      "Full Local/Global Local Business Schema",
      "Competitor SEO Analysis & Content Advisory",
      "24/7 Priority Phone & WhatsApp Support",
    ],
    ctaText: "Request a Quote",
  },
];
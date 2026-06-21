export const PRICING_TABS = {
  web: "Web Development",
  mobile: "Mobile Development",
  hostingSeo: "Hosting & SEO",
} as const;

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export const WEB_PLANS: PricingPlan[] = [
  {
    id: "web-basic",
    name: "Startup Web",
    price: "₹15,000",
    period: "one-time",
    description: "Ideal for small businesses needing a clean, professional online presence.",
    features: [
      "5-Page Responsive Web Design",
      "Modern UI/UX Frontend",
      "Essential Contact & Lead Forms",
      "Standard Animations (Framer Motion)",
      "Basic On-Page SEO Setup",
      "1 Month Free Support & Edits",
    ],
    ctaText: "Get Started",
  },
  {
    id: "web-standard",
    name: "Business Suite",
    price: "₹45,000",
    period: "one-time",
    description: "Great for growing companies wanting interactive features or e-commerce.",
    features: [
      "Up to 10 Custom Web Pages",
      "Full MERN Stack or Next.js Architecture",
      "Admin Panel & Product Management",
      "Payment Gateway Integration",
      "CRM & WhatsApp API Integration",
      "3 Months Premium Support",
    ],
    ctaText: "Build Business Suite",
    isPopular: true,
  },
  {
    id: "web-premium",
    name: "Enterprise Web",
    price: "₹95,000",
    period: "one-time",
    description: "Designed for high-performance SaaS, complex databases, or custom AI integrations.",
    features: [
      "Unlimited Pages / Tailored Architecture",
      "Custom Database & High-Security APIs",
      "AI Tools & OpenCV Computer Vision Integration",
      "Advanced Real-Time Interactive Dashboards",
      "Local & Global SEO Rank Strategy",
      "6 Months Dedicated Priority Support",
    ],
    ctaText: "Go Enterprise",
  },
];

export const MOBILE_PLANS: PricingPlan[] = [
  {
    id: "mobile-basic",
    name: "MVP Mobile",
    price: "₹25,000",
    period: "one-time",
    description: "A fast, cost-effective prototype app for test markets or startups.",
    features: [
      "Single-Platform App (Android or iOS)",
      "Cross-Platform Flutter Core",
      "Up to 5 Responsive App Screens",
      "Clean UI/UX and Asset Integration",
      "Essential Backend/API Syncing",
      "1 Month Launch Support",
    ],
    ctaText: "Build MVP",
  },
  {
    id: "mobile-standard",
    name: "Growth Mobile",
    price: "₹65,000",
    period: "one-time",
    description: "Full companion mobile app optimized for growth and user retention.",
    features: [
      "Dual-Platform (Android & iOS)",
      "Up to 10 High-Fidelity Screens",
      "Secure Payment Gateway Integration",
      "Social Login & Profile Management",
      "Push Notifications System",
      "3 Months Dedicated Maintenance",
    ],
    ctaText: "Build Growth Mobile",
    isPopular: true,
  },
  {
    id: "mobile-premium",
    name: "Enterprise Mobile",
    price: "₹1,25,000",
    period: "one-time",
    description: "Complex, offline-first applications with real-time operations.",
    features: [
      "Custom Multiplatform Flutter App",
      "Unlimited Screens / Complex UI",
      "Real-Time Chat & Location Tracking",
      "Offline Storage & Local DB Cache",
      "Advanced Animated Transitions",
      "6 Months Priority Maintenance & Updates",
    ],
    ctaText: "Go Enterprise Mobile",
  },
];

export const HOSTING_SEO_PLANS: PricingPlan[] = [
  {
    id: "host-basic",
    name: "Standard Hosting",
    price: "₹2,500",
    period: "month",
    description: "Essential hosting infrastructure and basic visibility audits.",
    features: [
      "Managed Cloud Hosting (Vercel/VPS)",
      "Custom Domain Link & Free SSL Certificate",
      "Automated Monthly Backups",
      "Initial SEO Site Audit & Reports",
      "Security Monitoring & DDoS Protection",
      "Email Ticket Support",
    ],
    ctaText: "Select Basic Plan",
  },
  {
    id: "host-standard",
    name: "Advanced Cloud & SEO",
    price: "₹7,500",
    period: "month",
    description: "Premium performance setup with actively optimized SEO strategies.",
    features: [
      "High-Performance Scalable VPS Hosting",
      "Daily Automatic Backups & Snapshots",
      "Global CDN Setup (Cloudflare/Cloudfront)",
      "Comprehensive On-Page SEO Optimization",
      "10 Target Keywords Tracking",
      "Monthly Analytics & Audits Report",
    ],
    ctaText: "Select Advanced Plan",
    isPopular: true,
  },
  {
    id: "host-premium",
    name: "Ultimate Premium Plan",
    price: "₹15,000",
    period: "month",
    description: "Maximum bandwidth speed infrastructure and dedicated rank campaigns.",
    features: [
      "Auto-Scaling Server Cluster Setup",
      "Speed Optimization (90+ PageSpeed Scores)",
      "Advanced Link Building & Backlinks Audit",
      "Full Local/Global Local Business Schema",
      "Competitor SEO Analysis & Content Advisory",
      "24/7 Priority Phone & WhatsApp Support",
    ],
    ctaText: "Select Ultimate Plan",
  },
];

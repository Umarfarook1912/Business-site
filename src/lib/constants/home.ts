import { ANCHOR_IDS } from "./routes";

export const HOME_HERO = {
  headline: "Premium Digital Solutions for Growing Businesses",
  subheadline:
    "We build high-performance websites, web applications, and business automation systems that help companies scale faster.",
  primaryCta: "Get Free Consultation",
  secondaryCta: "View Our Work",
} as const;

export const HOME_SECTIONS = {
  services: {
    id: ANCHOR_IDS.services,
    title: "Our Services",
    subtitle:
      "Enterprise-grade digital solutions crafted to accelerate your business growth.",
  },
  portfolio: {
    id: ANCHOR_IDS.portfolio,
    title: "Our Work",
    subtitle:
      "Premium projects delivered for ambitious businesses across industries.",
  },
  whyChoose: {
    id: ANCHOR_IDS.whyChoose,
    title: "Why Choose Growza",
    subtitle:
      "Trusted by growing businesses who demand excellence and measurable results.",
  },
  industries: {
    id: ANCHOR_IDS.industries,
    title: "Industries We Serve",
    subtitle:
      "Specialized expertise across diverse sectors, tailored to your market.",
  },
} as const;

export const HOME_SERVICES = [
  {
    id: "websites",
    title: "Premium Websites",
    description:
      "High-converting, lightning-fast websites designed to establish authority and drive leads.",
    icon: "Globe",
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description:
      "Scalable, secure web applications built with modern architecture and best practices.",
    icon: "Layers",
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Intelligent automation systems that eliminate manual work and optimize operations.",
    icon: "Zap",
  },
] as const;

export const HOME_STATS = [
  { id: "projects", label: "Projects Delivered", value: 150, suffix: "+" },
  { id: "clients", label: "Happy Clients", value: 80, suffix: "+" },
  { id: "industries", label: "Industries Served", value: 12, suffix: "" },
  { id: "support", label: "Support Availability", value: 24, suffix: "/7" },
] as const;

export const HOME_INDUSTRIES = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Construction",
  "Manufacturing",
  "Restaurants",
  "Travel",
  "Startups",
] as const;

export const HOME_PORTFOLIO = [
  {
    id: "luxury-estates",
    title: "Luxury Estates Platform",
    category: "Real Estate",
    description:
      "Premium property showcase with virtual tours and lead capture automation.",
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    description:
      "HIPAA-compliant patient management system with appointment scheduling.",
  },
  {
    id: "restaurant-chain",
    title: "Restaurant Chain Dashboard",
    category: "Restaurants",
    description:
      "Multi-location analytics and inventory management for a growing franchise.",
  },
  {
    id: "startup-saas",
    title: "Startup SaaS Platform",
    category: "Startups",
    description:
      "Full-stack SaaS application with subscription billing and team collaboration.",
  },
] as const;

import { ANCHOR_IDS } from "./routes";
import type { PortfolioItem } from "@/types";

export const HOME_HERO = {
  headline: "Expert Software Solutions. Custom-Built for Your Growth.",
  subheadline:
    "Get a roadmap to scale your business. We provide expert technical consultation and end-to-end software development to turn your vision into reality.",
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
    id: "web-apps",
    title: "Web Applications",
    description:
      "Scalable, secure web applications built with modern architectures like Next.js, React, Node.js, and Express.",
    icon: "Layers",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Cross-platform, high-performance mobile applications for iOS and Android built with Flutter.",
    icon: "Globe",
  },
  {
    id: "automation",
    title: "Business Automation & AI",
    description:
      "Intelligent automation systems, WhatsApp API integrations, and custom workflow solutions.",
    icon: "Zap",
  },
] as const;

export const HOME_STATS = [
  { id: "projects", label: "Projects Delivered", value: 8, suffix: "+" },
  { id: "experience", label: "Years Experience", value: 2, suffix: "+" },
  { id: "skills", label: "Technical Skills", value: 15, suffix: "+" },
  { id: "certifications", label: "Certifications & Awards", value: 3, suffix: "" },
] as const;

export const HOME_INDUSTRIES = [
  "E-commerce",
  "Education",
  "Travel & Blogs",
  "Software Tools",
  "Real Estate",
] as const;

export const HOME_PORTFOLIO: readonly PortfolioItem[] = [
  {
    id: "softzcart",
    title: "SoftZCart Platform",
    category: "E-commerce",
    description:
      "MERN stack software and e-commerce website hosted on VPS, featuring complete product management and checkout flows.",
    projectUrl: "https://softzcart.com/",
  },
] as const;

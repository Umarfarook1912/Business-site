import { ANCHOR_IDS } from "./routes";
import type { PortfolioItem } from "@/types";

export const HOME_HERO = {
  headline: "Premium Digital Solutions",
  subheadline:
    "Full Stack Developer specializing in building high-performance websites, custom web applications, and business automation systems.",
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
      "Intelligent automation systems, WhatsApp API integrations, and OpenCV computer vision systems.",
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
  "AI & Computer Vision",
  "Software Tools",
  "Real Estate",
] as const;

export const HOME_PORTFOLIO: readonly PortfolioItem[] = [
  {
    id: "stublab",
    title: "StubLab (API Mock Server)",
    category: "Web Application",
    description:
      "A mock server allowing users to create and test APIs without a backend. Implemented JWT-based authentication and MFA security.",
    projectUrl: "https://stublab.in",
  },
  {
    id: "softzcart",
    title: "SoftZCart Platform",
    category: "E-commerce",
    description:
      "MERN stack software and e-commerce website hosted on VPS, featuring complete product management and checkout flows.",
    projectUrl: "https://softzcart.com/",
  },
  {
    id: "document-scanner",
    title: "Document Scanner",
    category: "AI & Automation",
    description:
      "Computer vision application to convert images to PDF using OpenCV, corner detection, and perspective transformations.",
    githubUrl: "https://github.com/Umarfarook1912/Document-Scanner",
  },
  {
    id: "vinculo",
    title: "Vinculo E-commerce",
    category: "E-commerce",
    description:
      "Garment e-commerce platform built with the MERN stack (MongoDB, Express, React, Node).",
    projectUrl: "https://vinculo-mgdn.vercel.app/",
  },
  {
    id: "giftiebags",
    title: "GiftieBags E-commerce",
    category: "Websites",
    description:
      "Dynamic e-commerce website for bag purchases featuring customized product listings and responsive layouts.",
    projectUrl: "https://giftiebags.vercel.app/",
  },
  {
    id: "college-website",
    title: "SSMIET College Website",
    category: "Websites",
    description:
      "Official website portal built for SSM Institute of Engineering and Technology using modern responsive layouts.",
    projectUrl: "https://ssmiet.ac.in/",
  },
  {
    id: "travel-blog",
    title: "Personal Travel Blog",
    category: "Websites",
    description:
      "A travel blog showcasing travel tips, photos, and posts, built as a responsive static web application hosted on IBM Cloud.",
    githubUrl: "https://github.com/Umarfarook1912/Personal-Blog-on-IBM-Cloud-Static-Web-Apps",
    projectUrl: "https://umarfarook1912.github.io/Personal-Blog-on-IBM-Cloud-Static-Web-Apps/",
  },
] as const;

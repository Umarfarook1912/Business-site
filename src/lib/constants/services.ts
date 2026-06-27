import { SERVICE_METHODOLOGY } from "./service-methodology";

export const SERVICES_HERO = {
  eyebrow: "What We Offer",
  headline: "Services Built Around Your Business Needs",
  subheadline:
    "From IT consulting and web development to hosting, SEO, DevOps, and integrations — we handle the full delivery cycle with agile practices.",
} as const;

export const SERVICES_LIST = [
  {
    id: "it-consulting",
    tag: "01",
    icon: "Briefcase",
    title: "IT & Consulting",
    headline: "Clear technical direction for your next move.",
    description:
      "We help you choose the right stack, plan architecture, and align technology with business goals before a single line of code is written.",
    image: "/services/it_consulting_1.png",
    methodology: SERVICE_METHODOLOGY["it-consulting"],
    capabilities: ["Technology assessment", "Solution architecture", "Project planning", "Stack recommendations", "Vendor evaluation"],
  },
  {
    id: "website-development",
    tag: "02",
    icon: "Globe",
    title: "Website Development",
    headline: "Fast, responsive websites that represent your brand.",
    description:
      "Marketing sites, dashboards, and web apps built with React, Next.js, Vite, Astro, and TypeScript — optimized for speed and SEO from day one.",
    image: "/services/website_development_2.png",
    methodology: SERVICE_METHODOLOGY["website-development"],
    capabilities: ["React & Next.js apps", "Vite & Astro sites", "Responsive UI", "API integration", "CMS setup"],
  },
  {
    id: "mobile-app-development",
    tag: "03",
    icon: "Smartphone",
    title: "Mobile App Development",
    headline: "Cross-platform apps built for real users.",
    description:
      "Flutter and React Native apps with polished UX, push notifications, and secure backend integration for both iOS and Android stores.",
    image: "/services/mobile_app_3.png",
    methodology: SERVICE_METHODOLOGY["mobile-app-development"],
    capabilities: ["Flutter apps", "React Native apps", "Push notifications", "App store readiness", "Backend connectivity"],
  },
  {
    id: "hosting",
    tag: "04",
    icon: "Server",
    title: "Hosting",
    headline: "Reliable hosting setup and deployment.",
    description:
      "We configure, deploy, and maintain hosting on Hostinger, GoDaddy, and AWS — including domains, SSL, backups, and uptime monitoring.",
    image: "/services/hosting_4.png",
    methodology: SERVICE_METHODOLOGY.hosting,
    capabilities: ["Hostinger setup", "GoDaddy deployment", "AWS cloud hosting", "Domain & SSL", "Backup routines"],
  },
  {
    id: "seo-optimization",
    tag: "05",
    icon: "Search",
    title: "SEO Optimization",
    headline: "Help customers find you online.",
    description:
      "Technical SEO audits, on-page improvements, and performance tuning so your site ranks better and loads faster for every visitor.",
    image: "/services/seo_5.png",
    methodology: SERVICE_METHODOLOGY["seo-optimization"],
    capabilities: ["Technical SEO audit", "Meta & sitemap setup", "Core Web Vitals", "Schema markup", "Analytics setup"],
  },
  {
    id: "devops",
    tag: "06",
    icon: "GitBranch",
    title: "DevOps",
    headline: "Automated pipelines and reliable releases.",
    description:
      "CI/CD pipelines, code quality gates, and staging environments so your team ships confidently without production surprises.",
    image: "/services/devops_5.png",
    methodology: SERVICE_METHODOLOGY.devops,
    capabilities: ["GitHub Actions pipelines", "Jenkins automation", "SonarQube quality gates", "PostHog analytics", "Staging deploys"],
  },
  {
    id: "whatsapp-api",
    tag: "07",
    icon: "MessageCircle",
    title: "WhatsApp API Integration",
    headline: "Reach customers on WhatsApp at scale.",
    description:
      "WhatsApp Business API integration for order updates, support chats, and automated notifications through a channel customers already use daily.",
    image: "/services/whatsapp_7.png",
    methodology: SERVICE_METHODOLOGY["whatsapp-api"],
    capabilities: ["WhatsApp Business API", "Template messaging", "Webhook handling", "Two-way support", "Delivery tracking"],
  },
  {
    id: "email-notification",
    tag: "08",
    icon: "Mail",
    title: "Email Notification",
    headline: "Timely email alerts your users can trust.",
    description:
      "Transactional emails for sign-ups, orders, password resets, and system alerts — designed, wired, and monitored for reliable inbox delivery.",
    image: "/services/email_8.png",
    methodology: SERVICE_METHODOLOGY["email-notification"],
    capabilities: ["Nodemailer / SMTP setup", "HTML email templates", "Queued delivery", "Bounce handling", "Event triggers"],
  },
  {
    id: "mobile-otp",
    tag: "09",
    icon: "ShieldCheck",
    title: "Mobile OTP Integration",
    headline: "Secure phone-based verification.",
    description:
      "SMS OTP login and verification for mobile apps and web platforms — with rate limiting, secure token handling, and a smooth user experience.",
    image: "/services/otp_integration_9.png",
    methodology: SERVICE_METHODOLOGY["mobile-otp"],
    capabilities: ["SMS OTP delivery", "Login verification", "Rate limiting", "Secure token storage", "Multi-provider support"],
  },
] as const;

export const HOME_SERVICES = SERVICES_LIST.map((s) => ({
  icon: s.icon,
  title: s.title,
  description: s.description,
  image: s.image,
  href: `/services#${s.id}`,
}));

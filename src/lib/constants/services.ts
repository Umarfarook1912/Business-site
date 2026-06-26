const AGILE_STEPS = [
  { step: "Discover & Plan", detail: "Understand requirements, scope, and timelines in short planning sessions." },
  { step: "Build in Sprints", detail: "Deliver working increments every sprint with clear demos and feedback." },
  { step: "Review & Refine", detail: "Peer reviews, SonarQube checks, and reusable components keep quality high." },
  { step: "Deploy & Support", detail: "Ship to Hostinger, GoDaddy, or AWS with monitoring and post-launch support." },
] as const;

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
      "We help you choose the right stack, plan architecture, and align technology with business goals before development begins.",
    methodology: AGILE_STEPS,
    capabilities: ["Technology assessment", "Solution architecture", "Project planning", "Stack recommendations"],
  },
  {
    id: "website-development",
    tag: "02",
    icon: "Globe",
    title: "Website Development",
    headline: "Fast, responsive websites that represent your brand.",
    description:
      "We build marketing sites, dashboards, and web apps using React, Next.js, Vite, Astro, and TypeScript with clean, maintainable code.",
    methodology: AGILE_STEPS,
    capabilities: ["React & Next.js apps", "Vite & Astro sites", "Responsive UI", "API integration"],
  },
  {
    id: "mobile-app-development",
    tag: "03",
    icon: "Smartphone",
    title: "Mobile App Development",
    headline: "Cross-platform apps built for real users.",
    description:
      "Flutter and React Native apps with polished UX, reliable performance, and backend integration for iOS and Android.",
    methodology: AGILE_STEPS,
    capabilities: ["Flutter apps", "React Native apps", "App store readiness", "Backend connectivity"],
  },
  {
    id: "hosting",
    tag: "04",
    icon: "Server",
    title: "Hosting",
    headline: "Reliable hosting setup and deployment.",
    description:
      "We configure and manage hosting on Hostinger, GoDaddy, and AWS so your applications stay online and performant.",
    methodology: AGILE_STEPS,
    capabilities: ["Hostinger setup", "GoDaddy deployment", "AWS cloud hosting", "Domain & SSL configuration"],
  },
  {
    id: "seo-optimization",
    tag: "05",
    icon: "Search",
    title: "SEO Optimization",
    headline: "Help customers find you online.",
    description:
      "On-page SEO, performance tuning, and structured content improvements to improve search visibility and page speed.",
    methodology: AGILE_STEPS,
    capabilities: ["On-page SEO", "Meta & sitemap setup", "Performance optimization", "Analytics setup"],
  },
  {
    id: "devops",
    tag: "06",
    icon: "GitBranch",
    title: "DevOps",
    headline: "Automated pipelines and reliable releases.",
    description:
      "CI/CD with GitHub Actions and Jenkins, code quality with SonarQube, and analytics with PostHog for smoother delivery.",
    methodology: AGILE_STEPS,
    capabilities: ["GitHub Actions pipelines", "Jenkins automation", "SonarQube code quality", "PostHog analytics"],
  },
  {
    id: "whatsapp-api",
    tag: "07",
    icon: "MessageCircle",
    title: "WhatsApp API Integration",
    headline: "Reach customers on WhatsApp at scale.",
    description:
      "Integrate WhatsApp Business API for notifications, support messages, and automated customer communication flows.",
    methodology: AGILE_STEPS,
    capabilities: ["WhatsApp Business API", "Automated messaging", "Webhook handling", "Template management"],
  },
  {
    id: "email-notification",
    tag: "08",
    icon: "Mail",
    title: "Email Notification",
    headline: "Timely email alerts your users can trust.",
    description:
      "Transactional and notification emails for sign-ups, orders, password resets, and system alerts with reliable delivery.",
    methodology: AGILE_STEPS,
    capabilities: ["SMTP integration", "Transactional emails", "Template design", "Delivery monitoring"],
  },
  {
    id: "mobile-otp",
    tag: "09",
    icon: "ShieldCheck",
    title: "Mobile OTP Integration",
    headline: "Secure phone-based verification.",
    description:
      "OTP-based login and verification flows for mobile apps and web platforms with secure token handling.",
    methodology: AGILE_STEPS,
    capabilities: ["SMS OTP delivery", "Login verification", "Rate limiting", "Secure token storage"],
  },
] as const;

export const HOME_SERVICES = SERVICES_LIST.map((s) => ({
  icon: s.icon,
  title: s.title,
  description: s.description,
  href: `/services#${s.id}`,
}));

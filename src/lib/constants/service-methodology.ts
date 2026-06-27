type MethodStep = { step: string; detail: string };

export const SERVICE_METHODOLOGY: Record<string, readonly MethodStep[]> = {
  "it-consulting": [
    { step: "Assess & Audit", detail: "Review current systems, workflows, and pain points with stakeholders." },
    { step: "Define Roadmap", detail: "Prioritize initiatives with timelines, budgets, and measurable outcomes." },
    { step: "Architecture Design", detail: "Document stack choices, integrations, and security requirements." },
    { step: "Delivery Handoff", detail: "Provide specs and guidance for development or your internal team." },
  ],
  "website-development": [
    { step: "UX & Wireframes", detail: "Structure pages, navigation, and user flows before development starts." },
    { step: "Component Build", detail: "Reusable React/Next.js components with TypeScript and Tailwind CSS." },
    { step: "Integration & QA", detail: "Connect APIs, forms, and analytics with cross-browser testing." },
    { step: "Launch & Tune", detail: "Deploy with SSL, sitemap, and Core Web Vitals optimization." },
  ],
  "mobile-app-development": [
    { step: "Scope & Prototype", detail: "Define screens, flows, and backend requirements for iOS and Android." },
    { step: "Cross-Platform Build", detail: "Flutter or React Native with shared logic and polished native UX." },
    { step: "Device Testing", detail: "Validate permissions, offline cases, and performance on real devices." },
    { step: "Store Release", detail: "Prepare assets, privacy policies, and submission-ready builds." },
  ],
  hosting: [
    { step: "Environment Setup", detail: "Configure servers on Hostinger, GoDaddy, or AWS for your stack." },
    { step: "Domain & SSL", detail: "DNS records, certificates, and redirect rules configured correctly." },
    { step: "Deploy Pipeline", detail: "Scripted deployments with staging and rollback support." },
    { step: "Monitor & Backup", detail: "Uptime checks, log access, and scheduled backup routines." },
  ],
  "seo-optimization": [
    { step: "Site Audit", detail: "Analyze structure, meta tags, page speed, and search indexability." },
    { step: "On-Page Fixes", detail: "Titles, headings, schema markup, and internal linking improvements." },
    { step: "Performance Tuning", detail: "Image compression, caching, and lazy loading for faster loads." },
    { step: "Track & Improve", detail: "Analytics, Search Console, and ongoing ranking reviews." },
  ],
  devops: [
    { step: "Pipeline Design", detail: "GitHub Actions or Jenkins workflows for build, test, and deploy." },
    { step: "Quality Gates", detail: "SonarQube scans, linting, and automated test runs on every PR." },
    { step: "Staging Environments", detail: "Preview and staging URLs before anything hits production." },
    { step: "Observability", detail: "PostHog analytics, error alerts, and deployment notifications." },
  ],
  "whatsapp-api": [
    { step: "Account Setup", detail: "Register and verify WhatsApp Business API access with Meta." },
    { step: "Template Approval", detail: "Create and submit message templates for customer notifications." },
    { step: "Webhook Integration", detail: "Handle inbound messages and delivery status from your backend." },
    { step: "Automation Flows", detail: "Order updates, support replies, and triggered alerts at scale." },
  ],
  "email-notification": [
    { step: "Provider Setup", detail: "Configure SMTP or transactional email with secure credentials." },
    { step: "Template Design", detail: "Branded HTML emails for sign-ups, orders, and system alerts." },
    { step: "Trigger Wiring", detail: "Connect app events to reliable, queued email delivery." },
    { step: "Deliverability", detail: "SPF/DKIM records, bounce handling, and send monitoring." },
  ],
  "mobile-otp": [
    { step: "SMS Gateway Setup", detail: "Connect your preferred SMS provider with secure API keys." },
    { step: "OTP Flow Design", detail: "Generate, send, expire, and verify codes with clear UX." },
    { step: "Rate Limiting", detail: "Cooldowns and attempt caps to prevent abuse and spam." },
    { step: "Secure Storage", detail: "Server-side hashing — secrets never exposed on the client." },
  ],
};

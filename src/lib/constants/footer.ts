import { ROUTES } from "./routes";

export const FOOTER = {
  copyright: "Growza. All rights reserved.",
  sections: {
    contact: "Contact",
    follow: "Follow Us",
  },
} as const;

export const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/umar-farook-j-56b371280/" },
  { id: "github", label: "GitHub", href: "https://github.com/Umarfarook1912" },
  { id: "whatsapp", label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=7871694931&text&type=phone_number&app_absent=0" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/umar.f.376?mibextid=2JQ9oc" },
] as const;

export const FOOTER_SERVICES = [
  { label: "IT & Consulting", href: "/services#it-consulting" },
  { label: "Website Development", href: "/services#website-development" },
  { label: "Mobile App Development", href: "/services#mobile-app-development" },
  { label: "Hosting", href: "/services#hosting" },
  { label: "SEO Optimization", href: "/services#seo-optimization" },
  { label: "DevOps", href: "/services#devops" },
  { label: "WhatsApp API", href: "/services#whatsapp-api" },
  { label: "Email Notification", href: "/services#email-notification" },
  { label: "Mobile OTP", href: "/services#mobile-otp" },
] as const;

export const FOOTER_EXPLORE = [
  { label: "Home", href: ROUTES.home },
  { label: "Our Work", href: ROUTES.projects },
  { label: "Client Reviews", href: ROUTES.reviews },
  { label: "How We Code", href: ROUTES.principles },
  { label: "Tech Stack", href: ROUTES.techStack },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Blog", href: ROUTES.blog },
  { label: "Book Consultation", href: ROUTES.consultation },
] as const;

export const FOOTER_COMPANY = [
  { label: "About Us", href: ROUTES.about },
  { label: "SoftzCart Project", href: ROUTES.projects },
  { label: "All Services", href: ROUTES.services },
  { label: "Contact", href: ROUTES.consultation },
] as const;

/** Compact links shown on mobile — no long scroll list */
export const FOOTER_MOBILE_QUICK = [
  { label: "Services", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  { label: "Blog", href: ROUTES.blog },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Our Work", href: ROUTES.projects },
  { label: "Contact", href: ROUTES.consultation },
] as const;

export const ROUTES = {
  home: "/",
  services: "/services",
  techStack: "/tech-stack",
  about: "/about",
  caseStudies: "/case-studies",
  consultation: "/#consultation",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: ROUTES.services },
  { label: "Case Studies", href: ROUTES.caseStudies },
  { label: "Tech Stack", href: ROUTES.techStack },
  { label: "About Us", href: ROUTES.about },
] as const;

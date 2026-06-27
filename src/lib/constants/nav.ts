import { ROUTES } from "./routes";
import { SERVICES_LIST } from "./services";

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChild[];
  showViewAll?: boolean;
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  {
    label: "Services",
    href: ROUTES.services,
    children: SERVICES_LIST.map((s) => ({
      label: s.title,
      href: `/services#${s.id}`,
    })),
  },
  { label: "Our Work", href: ROUTES.projects },
  {
    label: "Discover",
    href: ROUTES.techStack,
    showViewAll: false,
    children: [
      { label: "Tech Stack", href: ROUTES.techStack },
      { label: "How We Code", href: ROUTES.principles },
      { label: "Client Reviews", href: ROUTES.reviews },
      { label: "Blog", href: ROUTES.blog },
    ],
  },
  { label: "About Us", href: ROUTES.about },
];

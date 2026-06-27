export const DEVELOPMENT_PRINCIPLES = [
  {
    id: "dry",
    acronym: "DRY",
    title: "Don't Repeat Yourself",
    description: "Shared logic lives in one place — constants, utilities, and reusable components.",
    trustPoint: "You get faster updates, fewer bugs, and a codebase that's easier to scale.",
    mapsTo: "Maintainability",
  },
  {
    id: "undoat",
    acronym: "UNDOAT",
    title: "Keep It Simple",
    description: "We avoid over-engineering. Every feature solves a real business need.",
    trustPoint: "Clear scope, predictable timelines, and solutions that stay easy to understand.",
    mapsTo: "Clarity",
  },
  {
    id: "lines",
    acronym: "< 250",
    title: "Focused Files",
    description: "Files stay under 250 lines so code stays readable and reviewable.",
    trustPoint: "Easier onboarding for your team and quicker fixes when requirements change.",
    mapsTo: "Quality",
  },
  {
    id: "global",
    acronym: "Global",
    title: "Centralized Config",
    description: "Content, routes, and design tokens live in shared global files.",
    trustPoint: "Consistent branding and content updates without hunting through dozens of files.",
    mapsTo: "Consistency",
  },
  {
    id: "reusable",
    acronym: "Reuse",
    title: "Reusable Components",
    description: "UI and logic are built once and composed across pages and features.",
    trustPoint: "Lower development cost and a polished, consistent user experience.",
    mapsTo: "Efficiency",
  },
  {
    id: "agile",
    acronym: "Agile",
    title: "Iterative Delivery",
    description: "We ship in sprints with demos, feedback loops, and continuous improvement.",
    trustPoint: "You see real progress early and can steer the project before it's too late.",
    mapsTo: "Transparency",
  },
] as const;

export type DevelopmentPrinciple = (typeof DEVELOPMENT_PRINCIPLES)[number];

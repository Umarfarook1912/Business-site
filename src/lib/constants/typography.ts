export const FONT_FAMILY = {
  sans: "font-sans",
  heading: "font-heading",
} as const;

export const TYPO = {
  heroHeadline:
    "font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl",
  heroSubheadline:
    "font-sans text-lg leading-relaxed text-brand-text-secondary sm:text-xl",
  sectionTitle:
    "font-heading text-3xl font-bold tracking-tight text-brand-text-primary sm:text-4xl",
  sectionSubtitle:
    "font-sans text-base leading-relaxed text-brand-text-secondary sm:text-lg",
  cardTitle: "font-heading text-xl font-semibold text-brand-text-primary",
  cardBody: "font-sans text-sm leading-relaxed text-brand-text-secondary",
  statValue: "font-heading text-4xl font-bold text-white sm:text-5xl",
  statLabel: "font-sans text-sm font-medium text-brand-text-secondary",
  footerBrand: "font-heading text-2xl font-bold text-white",
  footerTagline: "font-sans text-sm text-brand-text-secondary",
  chipLabel: "font-sans text-sm font-medium text-brand-text-primary",
} as const;

export const HOME_TYPO = {
  hero: {
    headline: TYPO.heroHeadline,
    subheadline: TYPO.heroSubheadline,
  },
  section: {
    title: TYPO.sectionTitle,
    subtitle: TYPO.sectionSubtitle,
  },
} as const;

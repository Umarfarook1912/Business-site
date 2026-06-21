import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/common/SocialIcons";
import { Separator } from "@/components/ui/separator";
import { CONTACT, FOOTER, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { TYPO } from "@/lib/constants/typography";

const socialIconMap = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
} as const;

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg-primary px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className={TYPO.footerBrand}>{SITE.name}</span>
            <span className={TYPO.footerTagline}>{SITE.tagline}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-semibold text-brand-gold">
              {FOOTER.sections.contact}
            </span>
            <span className={TYPO.footerTagline}>{CONTACT.email}</span>
            <span className={TYPO.footerTagline}>{CONTACT.phone}</span>
            <span className={TYPO.footerTagline}>{CONTACT.address}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-semibold text-brand-gold">
              {FOOTER.sections.follow}
            </span>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIconMap[link.id as keyof typeof socialIconMap];
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    aria-label={link.label}
                    className="text-brand-text-secondary transition-colors hover:text-brand-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-brand-gold/20" />

        <p className="text-center font-sans text-xs text-brand-text-secondary">
          &copy; {year} {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}

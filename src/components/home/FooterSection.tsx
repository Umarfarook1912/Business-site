import Link from "next/link";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/components/common/SocialIcons";
import { Separator } from "@/components/ui/separator";
import { CONTACT, FOOTER, SITE, SOCIAL_LINKS } from "@/lib/constants";

const socialIconMap = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
} as const;

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white px-6 py-16 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="font-heading text-2xl font-bold text-white">{SITE.name}</span>
            <span className="font-sans text-sm text-neutral-400">{SITE.tagline}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-semibold text-neutral-200 uppercase tracking-wider">
              {FOOTER.sections.contact}
            </span>
            <span className="font-sans text-sm text-neutral-400">{CONTACT.email}</span>
            <span className="font-sans text-sm text-neutral-400">{CONTACT.phone}</span>
            <span className="font-sans text-sm text-neutral-400">{CONTACT.address}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-semibold text-neutral-200 uppercase tracking-wider">
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
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-neutral-800" />

        <p className="text-center font-sans text-xs text-neutral-500">
          &copy; {year} {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}

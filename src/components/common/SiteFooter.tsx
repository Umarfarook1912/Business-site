import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { SITE, CONTACT, ROUTES } from "@/lib/constants";
import { SocialIcons } from "@/components/common/SocialIcons";

const FOOTER_SERVICES = [
  { label: "IT & Consulting", href: "/services#it-consulting" },
  { label: "Website Development", href: "/services#website-development" },
  { label: "Mobile App Development", href: "/services#mobile-app-development" },
  { label: "Hosting", href: "/services#hosting" },
  { label: "SEO Optimization", href: "/services#seo-optimization" },
  { label: "DevOps", href: "/services#devops" },
  { label: "WhatsApp API", href: "/services#whatsapp-api" },
  { label: "Email Notification", href: "/services#email-notification" },
  { label: "Mobile OTP", href: "/services#mobile-otp" },
];

const FOOTER_EXPLORE = [
  { label: "Home", href: ROUTES.home },
  { label: "Our Work", href: ROUTES.projects },
  { label: "Client Reviews", href: ROUTES.reviews },
  { label: "How We Code", href: ROUTES.principles },
  { label: "Tech Stack", href: ROUTES.techStack },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Blog", href: ROUTES.blog },
  { label: "Book Consultation", href: ROUTES.consultation },
];

const FOOTER_COMPANY = [
  { label: "About Us", href: ROUTES.about },
  { label: "SoftzCart Project", href: ROUTES.projects },
  { label: "All Services", href: ROUTES.services },
  { label: "Contact", href: ROUTES.consultation },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-xs text-slate-300 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <span className="text-lg font-bold tracking-tight">{SITE.name.toUpperCase()}</span>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed max-w-xs">{SITE.description}</p>
            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Follow Us</p>
              <SocialIcons />
            </div>
            <div className="mt-5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-sky flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-sky flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-sky flex-shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </div>

          <FooterColumn title="Services" links={FOOTER_SERVICES} />
          <FooterColumn title="Explore" links={FOOTER_EXPLORE} />
          <FooterColumn title="Company" links={FOOTER_COMPANY} />
        </div>

        <div className="mt-10 pt-5 border-t border-slate-800 text-center text-[10px] text-slate-500">
          <p suppressHydrationWarning>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

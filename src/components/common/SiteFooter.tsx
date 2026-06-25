import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { SITE, CONTACT, ROUTES } from "@/lib/constants";

const FOOTER_SERVICES = [
  { label: "Custom Software Development", href: "/services#custom-software" },
  { label: "Cloud Infrastructure", href: "/services#cloud-infra" },
  { label: "IT Strategy & Consulting", href: "/services#it-strategy" },
  { label: "Dedicated DevOps Teams", href: "/services#devops" },
  { label: "Application Modernization", href: "/services" },
  { label: "Systems Integration", href: "/services" },
];

const FOOTER_COMPANY = [
  { label: "About Us", href: ROUTES.about },
  { label: "Case Studies", href: ROUTES.caseStudies },
  { label: "Tech Stack", href: ROUTES.techStack },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: ROUTES.consultation },
];

const FOOTER_RESOURCES = [
  { label: "Insights", href: "#" },
  { label: "Whitepapers", href: "#" },
  { label: "Guides", href: "#" },
  { label: "FAQ", href: "#" },
];

const OFFICES = [
  {
    region: "India",
    line1: "Prestige Tech Park, Whitefield",
    line2: "Bengaluru, Karnataka 560066",
    phone: "+91 78716 94931",
  },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <span className="text-lg font-bold tracking-tight">{SITE.name.toUpperCase()}</span>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              We partner with enterprises to design, build, and operate technology that powers sustainable growth.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {["LI", "TW", "GH"].map((label) => (
                <Link key={label} href="#" className="w-7 h-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-colors text-[8px] font-bold">
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-5 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={11} className="text-sky flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={11} className="text-sky flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </div>
            </div>
          </div>

          <FooterColumn title="Services" links={FOOTER_SERVICES} />
          <FooterColumn title="Company" links={FOOTER_COMPANY} />
          <FooterColumn title="Resources" links={FOOTER_RESOURCES} />

          {/* Global Offices */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Global Offices</h3>
            <div className="grid sm:grid-cols-1 gap-5">
              {OFFICES.map((o) => (
                <div key={o.region}>
                  <p className="text-xs font-semibold text-white mb-1">{o.region}</p>
                  <div className="flex items-start gap-1.5 text-xs text-slate-400">
                    <MapPin size={11} className="text-sky flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{o.line1}</p>
                      <p>{o.line2}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                    <Phone size={11} className="text-sky flex-shrink-0" />
                    <span>{o.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.name} Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

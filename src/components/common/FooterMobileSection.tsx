import Link from "next/link";
import { ChevronDown } from "lucide-react";

type LinkItem = { label: string; href: string };

export function FooterMobileSection({
  title,
  links,
  defaultOpen = false,
}: {
  title: string;
  links: readonly LinkItem[];
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border-b border-slate-800" open={defaultOpen}>
      <summary className="flex items-center justify-between py-3 cursor-pointer list-none text-[10px] font-bold uppercase tracking-widest text-slate-400">
        {title}
        <ChevronDown size={14} className="text-slate-500 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="pb-3 grid grid-cols-2 gap-x-4 gap-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-xs text-slate-300 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

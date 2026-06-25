import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/constants";

const TECH_GROUPS = [
  {
    category: "FRONTEND",
    items: [
      { name: "React", color: "#61DAFB", bg: "#E6F9FD", short: "Re" },
      { name: "Angular", color: "#DD0031", bg: "#FDE8EC", short: "Ng" },
      { name: "Vue", color: "#42B883", bg: "#E8F8F2", short: "Vu" },
      { name: "Next.js", color: "#000000", bg: "#F1F5F9", short: "N" },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: ".NET", color: "#512BD4", bg: "#EDE8FB", short: ".N" },
      { name: "Node", color: "#339933", bg: "#E8F5E8", short: "No" },
      { name: "Django", color: "#092E20", bg: "#E6F0EC", short: "Dj" },
      { name: "Spring", color: "#6DB33F", bg: "#EEF5E8", short: "Sp" },
    ],
  },
  {
    category: "CLOUD",
    items: [
      { name: "AWS", color: "#FF9900", bg: "#FFF4E0", short: "AW" },
      { name: "Azure", color: "#0078D4", bg: "#E0F0FF", short: "Az" },
      { name: "GCP", color: "#4285F4", bg: "#E8F0FE", short: "GC" },
    ],
  },
  {
    category: "MOBILE",
    items: [
      { name: "Flutter", color: "#54C5F8", bg: "#E8F7FE", short: "Fl" },
      { name: "React Native", color: "#61DAFB", bg: "#E6F9FD", short: "RN" },
      { name: "Kotlin", color: "#7F52FF", bg: "#EEE8FF", short: "Ko" },
    ],
  },
];

export function HomeTechStrip() {
  return (
    <section className="bg-off-white border-y border-[#E2E8F0] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-7">
          Technology We Trust
        </p>

        {/* Desktop: horizontal strip */}
        <div className="hidden md:flex items-start justify-center gap-10 lg:gap-14 flex-wrap">
          {TECH_GROUPS.map((group) => (
            <div key={group.category} className="flex flex-col items-start gap-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                {group.category}
              </span>
              <div className="flex items-center gap-2.5">
                {group.items.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-1.5 w-10">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold border border-[#E2E8F0]"
                      style={{ backgroundColor: tech.bg, color: tech.color }}
                    >
                      {tech.short}
                    </div>
                    <span className="text-[9px] font-medium text-slate-500 text-center leading-tight whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2 column grid */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {TECH_GROUPS.map((group) => (
            <div key={group.category}>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1.5">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-[9px] font-bold border border-[#E2E8F0]"
                      style={{ backgroundColor: tech.bg, color: tech.color }}
                    >
                      {tech.short}
                    </div>
                    <span className="text-[10px] text-slate-600">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            href={ROUTES.techStack}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky hover:gap-2 transition-all"
          >
            Explore our complete tech stack <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TechLogo } from "@/components/common/TechLogo";
import { MotionSection } from "@/components/common/MotionSection";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";
import { ROUTES, TECH_GROUPS, TECH_STACK } from "@/lib/constants";

function findTech(name: string) {
  return TECH_STACK.find((t) => t.name === name);
}

export function HomeTechStrip() {
  return (
    <section className="bg-off-white border-y border-[#E2E8F0] py-8 sm:py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-5 sm:mb-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Technology We Work With
          </p>
          <p className="mt-2 text-[11px] text-slate-400 md:hidden">Swipe through stacks →</p>
        </MotionSection>

        <MotionSection delay={0.1} className="w-full">
          <div className="hidden md:flex items-start justify-center gap-10 lg:gap-14 flex-wrap w-full">
            {TECH_GROUPS.map((group) => (
              <div key={group.category} className="flex flex-col items-start gap-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  {group.category}
                </span>
                <div className="flex items-center gap-3">
                  {group.slugs.map((slug) => {
                    const tech = findTech(slug);
                    if (!tech) return null;
                    return (
                      <div key={tech.name} className="flex flex-col items-center gap-1.5 w-12">
                        <div className="w-9 h-9 flex items-center justify-center">
                          <TechLogo name={tech.name} logo={tech.logo} size={28} />
                        </div>
                        <span className="text-[9px] font-medium text-slate-500 text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <ScrollRow className="gap-3">
              {TECH_GROUPS.map((group) => (
                <ScrollRowItem key={group.category} width="w-[min(72vw,260px)]">
                  <div className="h-full bg-white border border-[#E2E8F0] rounded-xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                      {group.category}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {group.slugs.map((slug) => {
                        const tech = findTech(slug);
                        if (!tech) return null;
                        return (
                          <div key={tech.name} className="flex items-center gap-1.5 min-w-0">
                            <TechLogo name={tech.name} logo={tech.logo} size={18} />
                            <span className="text-[10px] text-slate-600 truncate">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollRowItem>
              ))}
            </ScrollRow>
          </div>
        </MotionSection>

        <MotionSection delay={0.2} className="mt-6 sm:mt-7 text-center">
          <Link
            href={ROUTES.techStack}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky hover:gap-2 transition-all"
          >
            View full tech stack <ArrowRight size={12} />
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}

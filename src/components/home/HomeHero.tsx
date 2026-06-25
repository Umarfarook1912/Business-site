import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_HERO } from "@/lib/constants";

export function HomeHero() {
  return (
    <section className="bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(226,232,240,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(226,232,240,0.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-4">{HOME_HERO.eyebrow}</p>
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F172A] leading-[1.12] tracking-tight">
              Engineering Digital
              <br />
              Transformation That
              <br />
              <span className="text-[#0284C7]">Drives Real Results</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-[#334155] leading-relaxed max-w-md">
              {HOME_HERO.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={HOME_HERO.primaryCta.href} className="btn-sky inline-flex items-center gap-2 text-sm">
                {HOME_HERO.primaryCta.label}
                <ArrowRight size={14} />
              </Link>
              <Link href={HOME_HERO.secondaryCta.href} className="btn-outline inline-flex items-center gap-2 text-sm">
                {HOME_HERO.secondaryCta.label}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Image placeholder — styled like reference */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-white">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center">
              {/* Simulated workspace photo */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3 p-10">
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
                      ))}
                    </div>
                    <div className="w-32 h-1.5 rounded-full bg-slate-200 mx-auto" />
                    <div className="w-20 h-1.5 rounded-full bg-slate-200 mx-auto" />
                    <p className="text-xs text-slate-400 font-medium pt-2">Team · Workspace</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute bottom-4 left-4 bg-white border border-[#E2E8F0] rounded-xl shadow-lg px-4 py-3">
              <p className="text-xl font-extrabold text-[#0F172A]">250+</p>
              <p className="text-[10px] text-[#64748B] mt-0.5">Projects Delivered</p>
            </div>
            <div className="absolute top-4 right-4 bg-white border border-[#E2E8F0] rounded-xl shadow-lg px-4 py-3">
              <p className="text-xl font-extrabold text-[#0284C7]">98%</p>
              <p className="text-[10px] text-[#64748B] mt-0.5">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

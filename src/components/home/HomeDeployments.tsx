import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_DEPLOYMENTS, ROUTES } from "@/lib/constants";

const CARD_IMAGES = [
  "/assets/recent_project/erp.png",
  "/assets/recent_project/ecom.png",
  "/assets/recent_project/data.png",
];

const CARD_LABEL_COLORS = [
  "bg-blue-500/20 text-blue-100",
  "bg-emerald-500/20 text-emerald-100",
  "bg-amber-500/20 text-amber-100",
];

export function HomeDeployments() {
  return (
    <section className="bg-white py-16" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-2">Recent Deployments</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight">
              Solutions That Deliver Measurable Impact
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center text-charcoal hover:border-navy hover:text-navy transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center text-charcoal hover:border-navy hover:text-navy transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
            <Link
              href={ROUTES.caseStudies}
              className="text-xs font-semibold text-sky inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all case studies <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HOME_DEPLOYMENTS.map((item, i) => {
            const image = CARD_IMAGES[i % CARD_IMAGES.length];
            const labelColor = CARD_LABEL_COLORS[i % CARD_LABEL_COLORS.length];
            return (
              <article
                key={item.title}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual area — actual project image */}
                <div className="relative aspect-[16/9] bg-slate-900 flex items-end p-4 overflow-hidden">
                  <Image
                    src={image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {/* subtle overlay so the tag stays readable on any image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <span
                    className={`relative z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${labelColor} backdrop-blur-sm`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-navy mb-1.5">{item.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">{item.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#F1F5F9]">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-base font-bold text-navy">{m.value}</p>
                        <p className="text-[10px] text-[#94A3B8] leading-tight mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
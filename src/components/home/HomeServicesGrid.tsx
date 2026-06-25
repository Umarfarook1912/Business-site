import Link from "next/link";
import { Code2, Cloud, LineChart, Layers, ArrowRight } from "lucide-react";
import { HOME_SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Cloud, LineChart, Layers,
};

export function HomeServicesGrid() {
  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                className="group bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col hover:border-sky hover:shadow-[0_8px_30px_rgba(2,132,199,0.10)] transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg border border-[#E2E8F0] flex items-center justify-center mb-4 group-hover:border-sky/40 group-hover:bg-sky/5 transition-colors">
                  {Icon && <Icon size={20} className="text-charcoal group-hover:text-sky transition-colors" />}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-navy mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#64748B] leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={11} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

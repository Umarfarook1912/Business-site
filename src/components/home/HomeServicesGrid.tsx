import Link from "next/link";
import {
  Briefcase, Globe, Smartphone, Server, Search, GitBranch,
  MessageCircle, Mail, ShieldCheck, ArrowRight,
} from "lucide-react";
import { HOME_SERVICES } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionStagger, MotionStaggerItem } from "@/components/common/MotionStagger";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Briefcase, Globe, Smartphone, Server, Search, GitBranch, MessageCircle, Mail, ShieldCheck,
};

export function HomeServicesGrid() {
  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="max-w-xl mb-10">
          <p className="section-label mb-2">Our Services</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight">
            Everything You Need to Build & Grow
          </h2>
        </MotionSection>

        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HOME_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <MotionStaggerItem key={service.title}>
                <div className="group h-full bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col hover:border-sky hover:shadow-[0_8px_30px_rgba(2,132,199,0.10)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg border border-[#E2E8F0] flex items-center justify-center mb-4 group-hover:border-sky/40 group-hover:bg-sky/5 transition-colors">
                    {Icon && <Icon size={20} className="text-charcoal group-hover:text-sky transition-colors" />}
                  </div>
                  <h3 className="text-sm font-bold text-navy mb-2 leading-snug">{service.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed flex-1 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={11} />
                  </Link>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}

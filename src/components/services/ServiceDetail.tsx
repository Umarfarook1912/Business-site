import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { SERVICES_LIST } from "@/lib/constants";

type Service = (typeof SERVICES_LIST)[number];

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section id={service.id} className="py-14 scroll-mt-28 border-b border-[#F1F5F9] last:border-0">
      <div>
        {/* Tag + title */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 rounded-full bg-sky text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
            {service.tag}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {service.title}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2 leading-tight">
          {service.headline}
        </h2>
        <p className="text-sm text-[#64748B] leading-relaxed mb-7 max-w-lg">{service.description}</p>

        {/* Service image */}
        <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-gradient-to-br from-slate-50 to-slate-100 mb-8 aspect-[16/7] relative">
          <Image
            src={service.image}
            alt={`${service.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Our Approach */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Our Approach</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.methodology.map((m, i) => (
              <div key={m.step} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-sky text-white text-[10px] font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <p className="text-xs font-semibold text-navy mb-1">{m.step}</p>
                <p className="text-[11px] text-[#64748B] leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2 text-xs text-[#334155]">
                <CheckCircle2 size={13} className="text-sky flex-shrink-0" />
                {cap}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
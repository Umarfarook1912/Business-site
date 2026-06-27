import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_HERO, SERVICES_LIST, ROUTES } from "@/lib/constants";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServicesSidebar } from "@/components/services/ServicesSidebar";

export const metadata = {
  title: "Services | Growza",
  description: "End-to-end IT consulting and software development services for enterprise clients.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky text-[10px] font-bold uppercase tracking-widest mb-4">
            {SERVICES_HERO.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">
            {SERVICES_HERO.headline}
          </h1>
          <p className="mt-3 text-slate-300 text-sm leading-relaxed max-w-lg">
            {SERVICES_HERO.subheadline}
          </p>
        </div>
      </section>

      {/* Mobile quick nav */}
      <nav className="lg:hidden bg-white border-b border-[#E2E8F0] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-1 py-2">
          {SERVICES_LIST.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-medium text-charcoal hover:text-sky whitespace-nowrap px-3 py-2 rounded-lg hover:bg-sky/5 transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content with sidebar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-12">
            {/* Sidebar */}
            <ServicesSidebar />

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {SERVICES_LIST.map((service) => (
                <ServiceDetail key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-off-white border-t border-[#E2E8F0] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">
            Ready to accelerate your next project?
          </h2>
          <p className="text-sm text-[#64748B] mb-6">
            Let&apos;s build something great together.
          </p>
          <Link href={ROUTES.consultation} className="btn-sky inline-flex items-center gap-2 text-sm">
            Book a Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

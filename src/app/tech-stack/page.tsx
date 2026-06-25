import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { TechStackFilter } from "@/components/tech-stack/TechStackFilter";

export const metadata = {
  title: "Tech Stack | Growza",
  description: "Explore the full directory of technologies, frameworks, and tools our teams are certified in.",
};

export default function TechStackPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky text-xs font-bold uppercase tracking-widest mb-4">
            Our Technology Stack
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            A curated stack built for modern enterprise.
          </h1>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-xl">
            We stay current with the tools that build modern, secure, and high-performing solutions.
            Filter by category to find the right technology for your project.
          </p>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStackFilter />
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-white border-t border-border-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-navy mb-2">
            Have a specific tech in mind?
          </h2>
          <p className="text-charcoal/70 text-sm mb-6">
            Our architects can help you find the right technology for your project.
          </p>
          <Link href={ROUTES.consultation} className="btn-sky inline-flex items-center gap-2">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

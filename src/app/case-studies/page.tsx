import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES, ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Case Studies | Growza",
  description: "Real-world deployments and measurable results from Growza engineering teams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-sky text-xs font-bold uppercase tracking-widest mb-4">
                Case Studies
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-xl">
                Engineering Outcomes That Move the Needle.
              </h1>
            </div>
            <Link href={ROUTES.consultation} className="btn-sky inline-flex items-center gap-2 self-start sm:self-auto whitespace-nowrap">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case study list */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.slug}
              className="bg-white border border-border-light rounded-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Image / tag area */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-12 min-h-[200px]">
                  <div className="text-center">
                    <span className="inline-block bg-white border border-border-light text-xs font-bold uppercase tracking-widest text-charcoal px-4 py-2 rounded-full mb-3">
                      {cs.tag}
                    </span>
                    <p className="text-sm text-charcoal/60">{cs.client}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-xl font-bold text-navy mb-3">{cs.title}</h2>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{cs.summary}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {cs.outcomes.map((o) => (
                      <div key={o.label}>
                        <p className="text-2xl font-bold text-navy">{o.metric}</p>
                        <p className="text-xs text-charcoal/60 mt-0.5">{o.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-off-white border border-border-light text-charcoal px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-border-light py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
            Ready to become our next success story?
          </h2>
          <p className="text-charcoal/70 mb-7">
            Tell us about your challenge and we&apos;ll show you how we&apos;d approach it.
          </p>
          <Link href={ROUTES.consultation} className="btn-sky inline-flex items-center gap-2">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

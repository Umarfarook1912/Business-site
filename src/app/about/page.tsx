import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ABOUT_HERO, ABOUT_STATS, ABOUT_VALUES, ABOUT_EXPERTISE, ROUTES } from "@/lib/constants";

export const metadata = {
  title: "About Us | Growza",
  description: "Learn about Growza — an enterprise IT consulting and software development firm.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky text-xs font-bold uppercase tracking-widest mb-4">
              {ABOUT_HERO.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {ABOUT_HERO.headline}
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              {ABOUT_HERO.subheadline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold text-navy mb-5 leading-tight">
                Built by engineers who&apos;ve worked on the inside.
              </h2>
              <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
                <p>
                  Growza was founded by engineers who spent years inside large enterprise technology teams —
                  building, breaking, and rebuilding the systems that power real businesses.
                </p>
                <p>
                  That experience gave us a deep respect for operational reality: the complexity of legacy systems,
                  the pressure of delivery timelines, the organizational dynamics that make or break technology programs.
                </p>
                <p>
                  Today, we bring that practitioner perspective to every engagement — helping enterprises navigate
                  their most critical technology challenges with clarity, speed, and accountability.
                </p>
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Areas of Expertise</p>
              <div className="space-y-3">
                {ABOUT_EXPERTISE.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-off-white border border-border-light rounded-lg px-4 py-3">
                    <CheckCircle2 size={16} className="text-sky flex-shrink-0" />
                    <span className="text-sm font-medium text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="section-label mb-3">How We Work</p>
            <h2 className="text-3xl font-bold text-navy leading-tight">Our Operating Principles</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {ABOUT_VALUES.map((val) => (
              <div key={val.title} className="bg-white border border-border-light rounded-xl p-7 card-hover">
                <h3 className="text-base font-semibold text-navy mb-3">{val.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Let&apos;s build something that lasts.
          </h2>
          <p className="text-slate-300 mb-7">
            Book a free consultation and talk to one of our senior engineers.
          </p>
          <Link href={ROUTES.consultation} className="btn-sky inline-flex items-center gap-2">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

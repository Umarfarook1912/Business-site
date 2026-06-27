import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { FEATURED_PROJECT, ROUTES } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";

export function HomeProjectSection() {
  const project = FEATURED_PROJECT;

  return (
    <section className="bg-white py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="max-w-xl mb-10">
          <p className="section-label mb-2">Our Work</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight">
            Projects We&apos;ve Built
          </h2>
        </MotionSection>

        <MotionSection delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-off-white border border-[#E2E8F0] rounded-xl overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] bg-slate-100">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky">
                  {project.category}
                </span>
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} live site`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-sky hover:text-[#0369A1] transition-colors shrink-0"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Visit site</span>
                </Link>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{project.name}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-5">{project.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-charcoal">
                    <CheckCircle2 size={14} className="text-sky flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={ROUTES.services}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky hover:gap-2.5 transition-all w-fit"
              >
                View all services <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

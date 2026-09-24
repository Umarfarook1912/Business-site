"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Globe, Sparkles } from "lucide-react";
import { PROJECTS, ROUTES, ProjectItem } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";

export function HomeProjectSection() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  const activeProject: ProjectItem =
    PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky/10 border border-sky/20 text-sky text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Our Work & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Projects We&apos;ve Delivered
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Explore live e-commerce stores, specialized marketplaces, and web applications built with performance, security, and exceptional user experience.
          </p>
        </MotionSection>

        {/* Project Selector Tabs */}
        <MotionSection delay={0.1} className="mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
            {PROJECTS.map((project) => {
              const isActive = project.id === activeId;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? "bg-navy text-white border-navy shadow-md scale-[1.02]"
                      : "bg-white text-[#475569] border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-sky" : "bg-slate-300"
                    }`}
                  />
                  {project.name}
                </button>
              );
            })}
          </div>
        </MotionSection>

        {/* Spotlight Main Showcase */}
        <MotionSection delay={0.2} className="mb-14">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0 transition-all duration-300">
            {/* Left: Browser Window Screenshot Showcase */}
            <div className="lg:col-span-7 bg-slate-900 flex flex-col justify-between overflow-hidden group">
              {/* Browser Header Bar */}
              <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/60 flex items-center justify-between shrink-0 gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-slate-950/70 text-slate-400 text-[11px] font-mono px-3 py-1 rounded-md flex items-center gap-1.5 max-w-[280px] sm:max-w-xs truncate border border-slate-800">
                  <Globe size={11} className="text-sky shrink-0" />
                  <span className="truncate">{activeProject.projectUrl}</span>
                </div>
                <Link
                  href={activeProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={`Open ${activeProject.name} in new tab`}
                >
                  <ExternalLink size={15} />
                </Link>
              </div>

              {/* Screenshot Image Container */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[420px] w-full overflow-hidden bg-slate-950">
                <Image
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link
                    href={activeProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky text-white text-xs font-bold shadow-lg hover:bg-sky-dark transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Project Information Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-sky/10 text-sky border border-sky/20">
                    {activeProject.category}
                  </span>
                  <Link
                    href={activeProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky hover:text-navy transition-colors shrink-0"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3 tracking-tight">
                  {activeProject.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Features & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {activeProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={15} className="text-sky shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <Link
                  href={activeProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-sky hover:bg-sky-dark text-white text-xs font-bold inline-flex items-center gap-2 shadow-md shadow-sky/20 transition-all hover:gap-3"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </Link>
                <Link
                  href={ROUTES.consultation}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Get Similar Site</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* All Projects Cards Grid */}
        <MotionSection delay={0.3}>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-navy">All Featured Projects</h3>
            <span className="text-xs text-slate-500 font-medium">Click card to highlight</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project) => {
              const isSelected = project.id === activeId;
              return (
                <div
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`cursor-pointer group bg-white rounded-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "border-sky ring-2 ring-sky/30 shadow-lg -translate-y-1 bg-sky/[0.02]"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-navy/80 backdrop-blur-md text-white border border-white/10">
                          {project.category.split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      <h4 className="text-base font-bold text-navy group-hover:text-sky transition-colors mb-1">
                        {project.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-sky group-hover:underline">
                      {isSelected ? "Currently Viewing" : "View Details"}
                    </span>
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-sky hover:bg-sky/10 transition-colors"
                      title={`Visit ${project.name} live site`}
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

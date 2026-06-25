"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TECH_CATEGORIES, TECH_STACK, type TechCategory } from "@/lib/constants";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-700 border-blue-200",
  Backend: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Cloud: "bg-orange-50 text-orange-700 border-orange-200",
  Mobile: "bg-purple-50 text-purple-700 border-purple-200",
  Database: "bg-rose-50 text-rose-700 border-rose-200",
  DevOps: "bg-amber-50 text-amber-700 border-amber-200",
};

export function TechStackFilter() {
  const [active, setActive] = useState<TechCategory>("All");

  const filtered = active === "All"
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {TECH_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              active === cat
                ? "bg-navy text-white border-navy"
                : "bg-white text-charcoal border-border-light hover:border-navy/50 hover:text-navy"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filtered.map((tech) => (
          <div
            key={`${tech.name}-${tech.category}`}
            className="bg-white border border-border-light rounded-xl p-4 flex flex-col items-center gap-3 card-hover text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-border-light flex items-center justify-center text-lg">
              {tech.icon}
            </div>
            <p className="text-sm font-medium text-navy">{tech.name}</p>
            <span
              className={cn(
                "text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                CATEGORY_COLORS[tech.category] ?? "bg-slate-50 text-slate-600 border-slate-200"
              )}
            >
              {tech.category}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-charcoal/60 text-center">
        Showing {filtered.length} of {TECH_STACK.length} technologies
      </p>
    </div>
  );
}

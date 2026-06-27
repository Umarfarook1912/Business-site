"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechLogo } from "@/components/common/TechLogo";
import { TECH_CATEGORIES, TECH_STACK, type TechCategory } from "@/lib/constants";
import { FRAMER_VIEWPORT, STAGGER_CHILDREN } from "@/lib/constants/animations";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-700 border-blue-200",
  Backend: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Styling: "bg-violet-50 text-violet-700 border-violet-200",
  Mobile: "bg-purple-50 text-purple-700 border-purple-200",
  Database: "bg-rose-50 text-rose-700 border-rose-200",
  Hosting: "bg-orange-50 text-orange-700 border-orange-200",
  Tools: "bg-amber-50 text-amber-700 border-amber-200",
};

export function TechStackFilter() {
  const [active, setActive] = useState<TechCategory>("All");

  const filtered =
    active === "All" ? TECH_STACK : TECH_STACK.filter((t) => t.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {TECH_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors",
              active === cat
                ? "bg-navy text-white border-navy"
                : "bg-white text-charcoal border-border-light hover:border-navy/50 hover:text-navy"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        // Re-key the whole grid by the active filter so React tears down
        // and rebuilds the grid (and every TechLogo inside it) from scratch
        // on every category change, instead of reusing/recycling old item
        // instances at the same position. This is what was causing logos
        // to vanish (and stay vanished, even going back to "All").
        key={active}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        initial="hidden"
        whileInView="show"
        viewport={FRAMER_VIEWPORT}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: STAGGER_CHILDREN } },
        }}
      >
        {filtered.map((tech) => (
          <motion.div
            // Name alone is a stable, unique identifier across the whole
            // TECH_STACK array — no need to compose it with category.
            key={tech.name}
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
            }}
            className="bg-white border border-border-light rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3 card-hover text-center min-w-0"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <TechLogo name={tech.name} logo={tech.logo} size={36} />
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
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-6 text-sm text-charcoal/60 text-center">
        Showing {filtered.length} of {TECH_STACK.length} technologies
      </p>
    </div>
  );
}
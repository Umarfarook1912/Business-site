"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/common/GlowCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  FRAMER_VIEWPORT,
  STAGGER_CHILDREN,
} from "@/lib/constants/animations";
import { HOME_PORTFOLIO, HOME_SECTIONS } from "@/lib/constants/home";
import { TYPO } from "@/lib/constants/typography";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: STAGGER_CHILDREN } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION_DURATION.normal, ease: ANIMATION_EASE.smooth },
  },
};

export function PortfolioSection() {
  return (
    <section
      id={HOME_SECTIONS.portfolio.id}
      className="bg-brand-bg-primary px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={HOME_SECTIONS.portfolio.title}
          subtitle={HOME_SECTIONS.portfolio.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={FRAMER_VIEWPORT}
          className="grid gap-8 sm:grid-cols-2"
        >
          {HOME_PORTFOLIO.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <GlowCard className="group flex h-full flex-col gap-4">
                <div className="gold-line-accent w-10 transition-all duration-300 group-hover:w-16" />
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-brand-gold">
                  {project.category}
                </span>
                <h3 className={TYPO.cardTitle}>{project.title}</h3>
                <p className={TYPO.cardBody}>{project.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

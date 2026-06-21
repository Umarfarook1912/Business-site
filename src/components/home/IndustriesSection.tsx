"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  FRAMER_VIEWPORT,
} from "@/lib/constants/animations";
import { HOME_INDUSTRIES, HOME_SECTIONS } from "@/lib/constants/home";
import { TYPO } from "@/lib/constants/typography";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION_DURATION.fast, ease: ANIMATION_EASE.smooth },
  },
};

export function IndustriesSection() {
  return (
    <section
      id={HOME_SECTIONS.industries.id}
      className="bg-transparent px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={HOME_SECTIONS.industries.title}
          subtitle={HOME_SECTIONS.industries.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={FRAMER_VIEWPORT}
          className="flex flex-wrap justify-center gap-4"
        >
          {HOME_INDUSTRIES.map((industry) => (
            <motion.div
              key={industry}
              variants={chipVariants}
              className={cn(
                "glass-card mono-glow-hover rounded-full px-6 py-3",
                TYPO.chipLabel
              )}
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

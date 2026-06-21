"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  FRAMER_VIEWPORT,
  STAGGER_CHILDREN,
} from "@/lib/constants/animations";
import { HOME_SECTIONS, HOME_STATS } from "@/lib/constants/home";
import { TYPO } from "@/lib/constants/typography";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: STAGGER_CHILDREN } },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal, ease: ANIMATION_EASE.smooth },
  },
};

export function WhyChooseSection() {
  return (
    <section
      id={HOME_SECTIONS.whyChoose.id}
      className="bg-transparent px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={HOME_SECTIONS.whyChoose.title}
          subtitle={HOME_SECTIONS.whyChoose.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={FRAMER_VIEWPORT}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {HOME_STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={statVariants}
              className="glass-card flex flex-col items-center gap-2 rounded-xl p-8 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className={TYPO.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

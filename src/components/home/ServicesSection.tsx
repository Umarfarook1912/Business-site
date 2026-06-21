"use client";

import { Globe, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/common/GlowCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  FRAMER_VIEWPORT,
  STAGGER_CHILDREN,
} from "@/lib/constants/animations";
import { HOME_SECTIONS, HOME_SERVICES } from "@/lib/constants/home";
import { TYPO } from "@/lib/constants/typography";

const iconMap = { Globe, Layers, Zap } as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_CHILDREN },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal, ease: ANIMATION_EASE.smooth },
  },
};

export function ServicesSection() {
  return (
    <section
      id={HOME_SECTIONS.services.id}
      className="bg-brand-bg-secondary px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={HOME_SECTIONS.services.title}
          subtitle={HOME_SECTIONS.services.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={FRAMER_VIEWPORT}
          className="grid gap-8 md:grid-cols-3"
        >
          {HOME_SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <GlowCard className="flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10">
                    <Icon className="h-6 w-6 text-brand-gold" />
                  </div>
                  <h3 className={TYPO.cardTitle}>{service.title}</h3>
                  <p className={TYPO.cardBody}>{service.description}</p>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

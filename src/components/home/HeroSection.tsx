"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GoldButton } from "@/components/common/GoldButton";
import { useConsultation } from "@/components/common/ConsultationProvider";
import {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  STAGGER_CHILDREN,
} from "@/lib/constants/animations";
import {
  DASHBOARD_MOCKUP,
  HOME_HERO,
  PUBLIC_ASSETS,
  ROUTES,
} from "@/lib/constants";
import { HOME_TYPO } from "@/lib/constants/typography";
import { SITE } from "@/lib/constants/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_CHILDREN, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.slow, ease: ANIMATION_EASE.smooth },
  },
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { openModal } = useConsultation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          <motion.p
            variants={itemVariants}
            className="font-heading text-sm font-medium uppercase tracking-widest text-white"
          >
            {SITE.tagline}
          </motion.p>

          <motion.h1 variants={itemVariants} className={HOME_TYPO.hero.headline}>
            {HOME_HERO.headline}
          </motion.h1>

          <motion.p variants={itemVariants} className={HOME_TYPO.hero.subheadline}>
            {HOME_HERO.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <GoldButton onClick={openModal} variant="primary">
              {HOME_HERO.primaryCta}
            </GoldButton>
            <GoldButton href={ROUTES.work} variant="ghost">
              {HOME_HERO.secondaryCta}
            </GoldButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_DURATION.slow,
            delay: 0.5,
            ease: ANIMATION_EASE.smooth,
          }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: ANIMATION_DURATION.float,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="glass-card mono-glow rounded-2xl p-2"
          >
            <Image
              src={PUBLIC_ASSETS.dashboardMockup}
              alt={DASHBOARD_MOCKUP.alt}
              width={DASHBOARD_MOCKUP.width}
              height={DASHBOARD_MOCKUP.height}
              className="w-full rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

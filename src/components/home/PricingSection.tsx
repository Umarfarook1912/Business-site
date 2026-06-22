"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GoldButton } from "@/components/common/GoldButton";
import { cn } from "@/lib/utils";
import {
  PRICING_TABS,
  WEB_PLANS,
  MOBILE_PLANS,
  HOSTING_SEO_PLANS,
  PricingPlan,
} from "@/lib/constants/pricing";
import { ANCHOR_IDS } from "@/lib/constants/routes";
import { FRAMER_VIEWPORT } from "@/lib/constants/animations";

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof PRICING_TABS>("web");

  const getActivePlans = (): PricingPlan[] => {
    switch (activeTab) {
      case "web":
        return WEB_PLANS;
      case "mobile":
        return MOBILE_PLANS;
      case "hostingSeo":
        return HOSTING_SEO_PLANS;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id={ANCHOR_IDS.pricing} className="bg-transparent px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader
          title="Pricing Built Around You"
          subtitle="We don't believe in one-size-fits-all pricing. Every project gets a tailored quote built around your scope, your goals, and your budget — without compromising on the top-tier quality we deliver every time."
        />

        {/* Tabs Control */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800">
            {(Object.keys(PRICING_TABS) as Array<keyof typeof PRICING_TABS>).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative",
                  activeTab === tabKey ? "text-black" : "text-neutral-400 hover:text-white"
                )}
              >
                {activeTab === tabKey && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-white rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{PRICING_TABS[tabKey]}</span>
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-neutral-500 max-w-lg leading-relaxed">
            * Every quote is customized after understanding your exact requirements — so you only pay for what your project truly needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={FRAMER_VIEWPORT}
            className="grid gap-8 md:grid-cols-3 items-stretch"
          >
            {getActivePlans().map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={cn(
                  "glass-card mono-border-gradient flex flex-col justify-between rounded-xl p-8 transition-all duration-300 relative overflow-hidden h-full",
                  plan.isPopular ? "mono-glow bg-neutral-900/35 border-white/20" : "bg-neutral-950/20"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-white text-black text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <p className="font-sans text-xs text-neutral-400 mb-6 min-h-[32px]">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-heading text-2xl font-extrabold text-white">{plan.tagline}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 shrink-0 text-white mt-0.5" />
                        <span className="font-sans text-sm text-neutral-300 leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <GoldButton
                    href={`https://api.whatsapp.com/send/?phone=7871694931&text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(PRICING_TABS[activeTab])}%20-${encodeURIComponent(plan.name)}%20plan.%20Please%20share%20a%20custom%20quote.`}
                    variant={plan.isPopular ? "primary" : "ghost"}
                    className="w-full text-center"
                  >
                    {plan.ctaText}
                  </GoldButton>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Quality assurance strip */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            We match every project to the quality benchmark of top-tier studios — clean architecture, modern UI/UX, and reliable delivery — at a price negotiated to fit your business, not a fixed template.
          </p>
          <div className="mt-6">
            <GoldButton
              href="https://api.whatsapp.com/send/?phone=7871694931&text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20custom%20quote%20for%20my%20project."
              variant="primary"
            >
              Talk to Us About Your Project
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
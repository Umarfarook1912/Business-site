"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { TYPO } from "@/lib/constants/typography";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import type { AnimatedCounterProps } from "@/types";

export function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const count = useAnimatedCounter(value, isInView && !prefersReducedMotion);
  const display = prefersReducedMotion && isInView ? value : count;

  return (
    <span ref={ref} className={cn(TYPO.statValue, className)}>
      {display}
      {suffix}
    </span>
  );
}

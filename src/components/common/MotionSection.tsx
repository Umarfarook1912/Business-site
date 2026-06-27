"use client";

import { motion } from "framer-motion";
import { FRAMER_VIEWPORT } from "@/lib/constants/animations";
import { cn } from "@/lib/utils";
import type { MotionSectionProps } from "@/types/ui/motion";

export function MotionSection({
  children,
  className,
  delay = 0,
  as = "div",
}: MotionSectionProps) {
  const props = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: FRAMER_VIEWPORT,
    transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
    className: cn(className),
  };

  if (as === "section") return <motion.section {...props}>{children}</motion.section>;
  if (as === "article") return <motion.article {...props}>{children}</motion.article>;
  return <motion.div {...props}>{children}</motion.div>;
}

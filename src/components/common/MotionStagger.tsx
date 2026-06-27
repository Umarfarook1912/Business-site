"use client";

import { motion } from "framer-motion";
import { FRAMER_VIEWPORT, STAGGER_CHILDREN } from "@/lib/constants/animations";
import { cn } from "@/lib/utils";
import type { MotionStaggerProps } from "@/types/ui/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER_CHILDREN } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function MotionStagger({ children, className }: MotionStaggerProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={FRAMER_VIEWPORT}
      className={cn("w-full max-w-full min-w-0", className)}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={cn("w-full min-w-0", className)}>
      {children}
    </motion.div>
  );
}

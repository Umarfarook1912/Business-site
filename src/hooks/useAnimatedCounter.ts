"use client";

import { useEffect, useState } from "react";
import { COUNTER } from "@/lib/constants/animations";

export function useAnimatedCounter(
  target: number,
  isActive: boolean,
  durationMs: number = COUNTER.durationMs
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, isActive, durationMs]);

  return count;
}

"use client";

import { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import type { SpotlightProps } from "@/types";

export function Spotlight({ className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spotlight-x", `${x}px`);
    el.style.setProperty("--spotlight-y", `${y}px`);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", className)}
      onMouseMove={handleMove}
      aria-hidden="true"
    >
      <div className="spotlight-layer pointer-events-none absolute inset-0" />
    </div>
  );
}

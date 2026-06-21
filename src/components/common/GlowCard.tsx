import { cn } from "@/lib/utils";
import type { GlowCardProps } from "@/types";

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "glass-card mono-border-gradient mono-glow-hover rounded-xl p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

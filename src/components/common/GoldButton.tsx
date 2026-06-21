import Link from "next/link";
import { cn } from "@/lib/utils";
import type { GoldButtonProps } from "@/types";

const variantClasses = {
  primary:
    "bg-white text-black hover:mono-glow hover:bg-neutral-200",
  ghost:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
} as const;

export function GoldButton({
  children,
  href,
  variant = "primary",
  className,
}: GoldButtonProps) {
  const resolvedVariant = variant ?? "primary";
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
    variantClasses[resolvedVariant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { GoldButtonProps } from "@/types";

const variantClasses = {
  primary:
    "bg-brand-gold text-brand-bg-primary hover:gold-glow hover:brightness-110",
  ghost:
    "border border-brand-gold/40 bg-transparent text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10",
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

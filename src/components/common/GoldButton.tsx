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
  onClick,
  type = "button",
  disabled,
}: GoldButtonProps) {
  const resolvedVariant = variant ?? "primary";
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer",
    variantClasses[resolvedVariant],
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} suppressHydrationWarning>
      {children}
    </button>
  );
}

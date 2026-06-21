import { cn } from "@/lib/utils";
import { HOME_TYPO } from "@/lib/constants/typography";
import type { SectionHeaderProps } from "@/types";

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      <div className={cn("gold-line-accent", align === "center" && "mx-auto")} />
      <h2 className={HOME_TYPO.section.title}>{title}</h2>
      {subtitle && <p className={cn(HOME_TYPO.section.subtitle, "max-w-2xl")}>{subtitle}</p>}
    </div>
  );
}

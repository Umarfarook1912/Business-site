import type { ReactNode } from "react";

export type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export type GoldButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export type SpotlightProps = {
  className?: string;
};

export type ParticleFieldProps = {
  className?: string;
};

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  float: 3,
} as const;

export const ANIMATION_EASE = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
} as const;

export const FRAMER_VIEWPORT = {
  once: true,
  amount: 0.3,
} as const;

export const STAGGER_CHILDREN = 0.1;

export const GLOW_EFFECT = {
  blur: "var(--glow-blur)",
  opacity: "var(--glow-opacity)",
} as const;

export const SPOTLIGHT = {
  size: "var(--spotlight-size)",
  opacity: "var(--spotlight-opacity)",
} as const;

export const PARTICLE_FIELD = {
  count: 40,
  minSize: 1,
  maxSize: 3,
  speed: 0.3,
} as const;

export const COUNTER = {
  durationMs: 2000,
} as const;

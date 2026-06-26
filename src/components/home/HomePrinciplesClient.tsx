"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { HomePrinciples } from "@/components/home/HomePrinciples";
import { HomePrinciplesSkeleton } from "@/components/home/HomePrinciplesSkeleton";

export function HomePrinciplesClient() {
  const hydrated = useHydrated();
  if (!hydrated) return <HomePrinciplesSkeleton />;
  return <HomePrinciples />;
}

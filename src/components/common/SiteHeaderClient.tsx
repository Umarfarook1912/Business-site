"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { SiteHeader } from "@/components/common/SiteHeader";
import { SiteHeaderShell } from "@/components/common/SiteHeaderShell";

export function SiteHeaderClient() {
  const hydrated = useHydrated();
  if (!hydrated) return <SiteHeaderShell />;
  return <SiteHeader />;
}

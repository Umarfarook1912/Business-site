"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { HomeConsultationForm } from "@/components/home/HomeConsultationForm";
import { HomeConsultationSkeleton } from "@/components/home/HomeConsultationSkeleton";

export function HomeConsultationClient() {
  const hydrated = useHydrated();
  if (!hydrated) return <HomeConsultationSkeleton />;
  return <HomeConsultationForm />;
}

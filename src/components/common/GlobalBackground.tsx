"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () =>
    import("@/components/common/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

const Spotlight = dynamic(
  () => import("@/components/common/Spotlight").then((m) => m.Spotlight),
  { ssr: false }
);

export function GlobalBackground() {
  return (
    <>
      <ParticleField className="fixed inset-0 pointer-events-none z-0" />
      <Spotlight className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}

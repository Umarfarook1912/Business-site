"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { TechLogoProps } from "@/types/ui/tech-logo";

export function TechLogo({ name, logo, size = 32 }: TechLogoProps) {
  const [hasError, setHasError] = useState(false);

  // If the logo URL changes (e.g. this slot now renders a different
  // technology after a category filter change), clear any previous
  // error state so the new image gets a fresh chance to load.
  useEffect(() => {
    setHasError(false);
  }, [logo]);

  if (hasError) {
    return (
      <div
        className="flex items-center justify-center rounded-md bg-slate-100 text-slate-500 font-semibold select-none"
        style={{ width: size, height: size, fontSize: size * 0.4 }}
        aria-label={name}
        title={name}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      // Keying on the src forces Next.js to fully unmount and remount the
      // <Image> instance whenever the underlying technology at this grid
      // position changes (e.g. switching category filters), instead of
      // reusing the same internal <img>/loader instance. Without this,
      // next/image can get stuck in a stale loading/error state when the
      // surrounding list is filtered and React recycles the component at
      // the same position rather than creating a new one.
      key={logo}
      src={logo}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      unoptimized
      onError={() => setHasError(true)}
    />
  );
}
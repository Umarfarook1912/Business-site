"use client";

import { useEffect, useState } from "react";

/** True only after the client has mounted — avoids SSR / extension hydration mismatches. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

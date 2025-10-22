"use client";

import { useEffect, useState } from "react";

/**
 * Simple heuristic hook to detect lower-performance devices so we can
 * disable expensive visuals (shaders, 3D scenes, heavy animations).
 * This is intentionally conservative — better to serve a lightweight
 * experience than a laggy one.
 */
export function useIsLowEndDevice() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    try {
      const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

  const nav = navigator as unknown as { hardwareConcurrency?: number; deviceMemory?: number; userAgent?: string };
  const hardwareConcurrency = nav.hardwareConcurrency ?? 4;
  const deviceMemory = nav.deviceMemory ?? 4;
  const ua = nav.userAgent ?? "";

      // rough check for older Android versions which sometimes have weaker GPUs/CPUs
      const androidMatch = ua.match(/Android\s([0-9\.]+)/);
      const androidMajor = androidMatch ? parseInt(androidMatch[1].split(".")[0], 10) : undefined;
      const isOlderAndroid = typeof androidMajor === "number" ? androidMajor < 10 : false;

      // heuristics: small memory, few cores, prefers reduced motion, or older Android
      const low = prefersReducedMotion || hardwareConcurrency <= 2 || deviceMemory <= 2 || isOlderAndroid;
      setIsLowEnd(!!low);
    } catch {
      setIsLowEnd(false);
    }
  }, []);

  return isLowEnd;
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroCanvas = dynamic(
  () => import("@/components/three/vireonix-digital-core").then((module) => module.VireonixDigitalCore),
  { ssr: false },
);

export function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("mobile");
  const [webGLAvailable, setWebGLAvailable] = useState(false);

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 1023px)");

    const syncPreferences = () => {
      setReducedMotion(reducedQuery.matches);
      setViewport(mobileQuery.matches ? "mobile" : tabletQuery.matches ? "tablet" : "desktop");
    };

    const frame = window.requestAnimationFrame(() => {
      const testCanvas = document.createElement("canvas");
      setWebGLAvailable(Boolean(testCanvas.getContext("webgl2") || testCanvas.getContext("webgl")));
      syncPreferences();
    });

    reducedQuery.addEventListener("change", syncPreferences);
    mobileQuery.addEventListener("change", syncPreferences);
    tabletQuery.addEventListener("change", syncPreferences);
    return () => {
      window.cancelAnimationFrame(frame);
      reducedQuery.removeEventListener("change", syncPreferences);
      mobileQuery.removeEventListener("change", syncPreferences);
      tabletQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0.04 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const showCanvas = webGLAvailable && viewport !== "mobile" && !reducedMotion;
  const animate = showCanvas && isVisible && !reducedMotion;

  return (
    <div ref={containerRef} data-animation-state={animate ? "running" : "paused"} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_46%,rgba(24,119,242,.16),transparent_27%),radial-gradient(circle_at_56%_72%,rgba(34,211,238,.055),transparent_32%),linear-gradient(135deg,#07101d_0%,#081321_55%,#050b14_100%)]" />
      <div className="tech-grid absolute inset-0 opacity-55 [mask-image:linear-gradient(to_right,transparent,black_42%,black)]" />
      {showCanvas && <HeroCanvas active={animate} compact={viewport === "tablet"} />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,29,.98)_0%,rgba(7,16,29,.9)_31%,rgba(7,16,29,.56)_52%,rgba(7,16,29,.12)_76%,rgba(7,16,29,.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07101d] to-transparent" />
    </div>
  );
}

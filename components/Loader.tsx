"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animate the loader
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    // Progress bar animation
    tl.to(".loader-progress", {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Text fade out
    tl.to(".loader-text", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.in",
    }, "-=0.3");

    // Loader slide up
    tl.to(".loader", {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="loader-inner relative flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="loader-text text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 md:text-4xl">
            C&L
          </span>
          <span className="loader-text text-xs font-semibold tracking-[0.3em] text-cyan-400/80 uppercase">
            Strategy
          </span>
        </div>
        <div className="w-48 h-[2px] bg-slate-800/50 rounded-full overflow-hidden">
          <div className="loader-progress h-full w-0 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>
        <span className="loader-text text-[10px] tracking-[0.2em] text-slate-500 uppercase">
          Loading systems...
        </span>
      </div>
    </div>
  );
}

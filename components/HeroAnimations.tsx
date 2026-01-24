"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AnimatedHero({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the kicker
      gsap.from("[data-hero-kicker]", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate headline lines
      gsap.from("[data-hero-line]", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        delay: 0.4,
        ease: "power3.out",
      });

      // Animate subtext
      gsap.from("[data-hero-sub]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });

      // Animate pills
      gsap.from("[data-hero-pill]", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        delay: 1.1,
        ease: "back.out(1.7)",
      });

      // Animate CTAs
      gsap.from("[data-hero-cta]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.3,
        ease: "power3.out",
      });

      // Animate footer text
      gsap.from("[data-hero-footer]", {
        opacity: 0,
        duration: 0.8,
        delay: 1.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

export function RevealText({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: "100%",
      opacity: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
    });
  }, [delay]);

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <span ref={ref} className="inline-block">
        {children}
      </span>
    </span>
  );
}

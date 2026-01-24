"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Initialize animations after DOM is ready and on route change
  useEffect(() => {
    // Small delay to ensure DOM is painted
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Kill all ScrollTriggers on cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}

function initAnimations() {
  // Clear existing ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // Fade up animations for elements with data-animate="fade-up"
  const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
  fadeUpElements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Stagger animations for elements with data-animate-group="stagger"
  const staggerGroups = document.querySelectorAll('[data-animate-group="stagger"]');
  staggerGroups.forEach((group) => {
    const items = group.querySelectorAll('[data-animate="stagger-item"]');
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
}

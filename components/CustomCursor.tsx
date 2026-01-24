"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    // Check if touch device
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    if (!cursor || !dot || !ring) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation loop
    const animate = () => {
      // Dot follows immediately
      dotX += (mouseX - dotX) * 0.5;
      dotY += (mouseY - dotY) * 0.5;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

      // Ring follows with delay
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    };

    // Magnetic effect for buttons and links
    const magneticElements = document.querySelectorAll('a, button, [data-magnetic]');

    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(ring, { scale: 1.5, opacity: 0.5, duration: 0.3 });
        gsap.to(dot, { scale: 0.5, duration: 0.3 });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      });

      // Magnetic pull effect
      el.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (el as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (mouseEvent.clientX - centerX) * 0.2;
        const deltaY = (mouseEvent.clientY - centerY) * 0.2;

        gsap.to(el, {
          x: deltaX,
          y: deltaY,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hide cursor when leaving window
    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, []);

  // Hide on mobile/touch devices
  if (isTouch) return null;

  return (
    <div ref={cursorRef} className="pointer-events-none fixed inset-0 z-[9998] hidden md:block">
      <div
        ref={cursorDotRef}
        className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={cursorRingRef}
        className="absolute -top-5 -left-5 h-10 w-10 rounded-full border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

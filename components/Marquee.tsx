"use client";

import { cn } from "@/components/ui/design-system";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export default function Marquee({
  items,
  className,
  speed = "normal",
  direction = "left",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed];

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400 hover:text-cyan-300 transition-colors">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
        </span>
      ))}
    </>
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden py-6 bg-[#0a0a0f] border-y border-cyan-500/10",
        className
      )}
    >
      <div
        className={cn(
          "flex gap-8 whitespace-nowrap",
          speedClass,
          direction === "right" && "animate-marquee-reverse"
        )}
      >
        <div className="flex gap-8 items-center">{content}</div>
        <div className="flex gap-8 items-center">{content}</div>
        <div className="flex gap-8 items-center">{content}</div>
      </div>
    </div>
  );
}

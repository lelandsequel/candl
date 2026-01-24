import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-[0.72rem] text-cyan-200 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-cyan-900/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
        {children}
    </span>
);

export const SectionKicker = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-400 glow-text">
        {children}
    </p>
);

export const Card = ({
    title,
    body,
    bullets
}: {
    title: string;
    body: string;
    bullets?: string[];
}) => (
    <div className="group relative rounded-2xl border border-white/[0.08] bg-[#12121a]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <h3 className="relative text-base font-semibold text-slate-50">{title}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
        {bullets?.length ? (
            <ul className="relative mt-4 space-y-2 text-sm text-slate-300">
                {bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                        <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
        ) : null}
    </div>
);

export const MiniStat = ({ label, value }: { label: string; value: string }) => (
    <div className="group relative rounded-2xl border border-white/[0.08] bg-[#12121a]/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <p className="relative text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
            {label}
        </p>
        <p className="relative mt-2 text-sm font-semibold text-slate-100">{value}</p>
    </div>
);

export const Divider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
);

export const GlowingBackground = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -bottom-56 left-[10%] h-[520px] w-[520px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute -bottom-56 right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>
);

export const GridBackground = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 grid-bg" />
        {/* Base Glows */}
        <GlowingBackground />
        {/* Noise texture */}
        <div className="absolute inset-0 noise" />
    </div>
);

export const BlueprintBackground = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Base Glows */}
        <GlowingBackground />

        {/* Blueprint Overlay - Increased opacity */}
        <div
            className="absolute inset-0 bg-[url('/oilfield-blueprint.png')] bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-screen"
        />

        {/* Gradient Fade - Reduced opacity to let more background through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]/80" />
    </div>
);

interface ImmersiveSectionProps {
    children: React.ReactNode;
    backgroundImage?: string;
    backgroundVideo?: string;
    overlayOpacity?: number; // 0 to 1
    className?: string;
}

export function ImmersiveSection({
    children,
    backgroundImage,
    backgroundVideo,
    overlayOpacity = 0.85,
    className
}: ImmersiveSectionProps) {
    const hasBackground = backgroundImage || backgroundVideo;

    return (
        <section className={cn("relative w-full min-h-screen flex flex-col overflow-hidden", className)}>
            {/* Video Background Layer - with crop to hide watermark */}
            {backgroundVideo && (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                        src={backgroundVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-1/2 left-1/2 min-w-[110%] min-h-[110%] w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                </div>
            )}

            {/* Background Image Layer - Full coverage */}
            {backgroundImage && !backgroundVideo && (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            )}

            {/* Overlay Layer */}
            {hasBackground && (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: '#0a0a0f', opacity: overlayOpacity }}
                />
            )}

            {/* Grid overlay */}
            {hasBackground && (
                <div className="absolute inset-0 w-full h-full grid-bg opacity-50" />
            )}

            {/* Gradient overlay */}
            {hasBackground && (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f] opacity-90" />
            )}

            {/* Noise texture */}
            {hasBackground && (
                <div className="absolute inset-0 w-full h-full noise" />
            )}

            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 pt-28 md:pt-32 pb-24 flex flex-col justify-center flex-1">
                {children}
            </div>
        </section>
    );
}

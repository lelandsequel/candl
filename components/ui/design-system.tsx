import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-[0.72rem] text-slate-200">
        {children}
    </span>
);

export const SectionKicker = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sky-300/90">
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
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-sm shadow-black/40">
        <h3 className="text-base font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
        {bullets?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                        <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
        ) : null}
    </div>
);

export const MiniStat = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {label}
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-100">{value}</p>
    </div>
);

export const Divider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800/70 to-transparent" />
);

export const GlowingBackground = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute -bottom-56 left-[10%] h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="absolute -bottom-56 right-[10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[120px]" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/60 via-[#0B1121]/40 to-[#0B1121]/80" />
    </div>
);

interface ImmersiveSectionProps {
    children: React.ReactNode;
    backgroundImage?: string;
    overlayOpacity?: number; // 0 to 1
    className?: string;
}

export function ImmersiveSection({
    children,
    backgroundImage,
    overlayOpacity = 0.85,
    className
}: ImmersiveSectionProps) {
    return (
        <section className={cn("relative w-full overflow-hidden min-h-[600px] flex flex-col justify-center py-24", className)}>
            {/* Background Image Layer */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            )}

            {/* Overlay Layer */}
            <div
                className="absolute inset-0 bg-[#070A12] pointer-events-none"
                style={{ opacity: overlayOpacity }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-[#070A12] pointer-events-none opacity-90" />


            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}

import Link from "next/link";
import { MiniStat, SectionKicker, Pill, Divider, BlueprintBackground } from "@/components/ui/design-system";

export default function Page() {
    return (
        <main className="relative overflow-hidden min-h-[calc(100vh-140px)]">
            <BlueprintBackground />

            {/* Container */}
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-8 md:px-6 lg:px-8">
                {/* Hero */}
                <section className="grid gap-10 md:grid-cols-12 md:items-start min-h-[60vh] md:place-content-center">
                    <div className="md:col-span-7">
                        <SectionKicker>Built in the field · Shipped in production</SectionKicker>

                        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                            Operator-led consulting that turns messy operations into working systems.
                        </h1>

                        <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 md:text-[0.98rem]">
                            C&L Strategy helps companies untangle{" "}
                            <span className="font-semibold text-slate-200">operations</span>,{" "}
                            <span className="font-semibold text-slate-200">process</span>, and{" "}
                            <span className="font-semibold text-slate-200">finance</span> by building the
                            systems that actually run the business — not strategy theater, not decks
                            you can’t implement.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <Pill>Process improvement</Pill>
                            <Pill>Software architecture</Pill>
                            <Pill>Supply chain & logistics</Pill>
                            <Pill>Finance & controls</Pill>
                            <Pill>Construction</Pill>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/what-we-build"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900/70"
                            >
                                <span>What we build</span>
                                <span aria-hidden>↓</span>
                            </Link>
                            <Link
                                href="/case-work"
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20"
                            >
                                <span>See case work</span>
                                <span aria-hidden>↗</span>
                            </Link>
                        </div>

                        <p className="mt-4 text-xs text-slate-400">
                            No buzzwords. No dependency. We embed, build, ship, and leave you with a system that runs.
                        </p>
                    </div>

                    <div className="md:col-span-5">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-sm shadow-black/40">
                            <SectionKicker>What makes us different</SectionKicker>
                            <h2 className="mt-3 text-lg font-semibold text-slate-50">
                                We’re not career consultants.
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                We’ve cut our teeth in real operations: oil fields, terminals, logistics, construction,
                                and the financial controls that keep companies alive. We build solutions that survive
                                contact with reality.
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <MiniStat label="Approach" value="Operator-first, system-driven" />
                                <MiniStat label="Output" value="Working tools + workflows" />
                                <MiniStat label="Bias" value="Execution over theory" />
                                <MiniStat label="Result" value="Clarity, speed, control" />
                            </div>

                            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                                    Fit check
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Our deliverables aren't just slides.
                                    <br />
                                    They are the blueprints for operational changes that drive real shareholder value.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

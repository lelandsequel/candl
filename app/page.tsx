import Link from "next/link";
import { MiniStat, SectionKicker, Pill, ImmersiveSection } from "@/components/ui/design-system";

export default function Page() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/oilfield-magic-hour.png" overlayOpacity={0.7} className="min-h-[85vh]">
                {/* Hero */}
                <div className="grid gap-10 md:grid-cols-12 md:items-start md:place-content-center">
                    <div className="md:col-span-12 lg:col-span-7">
                        <SectionKicker>Built in the field · Shipped in production</SectionKicker>

                        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl">
                            Operator-led consulting that turns messy operations into working systems.
                        </h1>

                        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-200 md:text-lg">
                            C&L Strategy helps companies untangle{" "}
                            <span className="font-semibold text-white">operations</span>,{" "}
                            <span className="font-semibold text-white">process</span>, and{" "}
                            <span className="font-semibold text-white">finance</span> by building the
                            systems that actually run the business — not strategy theater, not decks
                            you can’t implement.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <Pill>Process improvement</Pill>
                            <Pill>Software architecture</Pill>
                            <Pill>Supply chain & logistics</Pill>
                            <Pill>Finance & controls</Pill>
                            <Pill>Construction</Pill>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/what-we-build"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900/90 backdrop-blur-sm"
                            >
                                <span>What we build</span>
                                <span aria-hidden>↓</span>
                            </Link>
                            <Link
                                href="/case-work"
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20 backdrop-blur-md shadow-lg shadow-emerald-900/20"
                            >
                                <span>See case work</span>
                                <span aria-hidden>↗</span>
                            </Link>
                        </div>

                        <p className="mt-6 text-xs text-slate-400/80">
                            No buzzwords. No dependency. We embed, build, ship, and leave you with a system that runs.
                        </p>
                    </div>
                </div>
            </ImmersiveSection>

            {/* Value Props Section - Darker background */}
            <section className="bg-[#070A12] py-24 border-t border-slate-900">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionKicker>What makes us different</SectionKicker>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-50">
                                We’re not career consultants.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-300">
                                We’ve cut our teeth in real operations: oil fields, terminals, logistics, construction,
                                and the financial controls that keep companies alive. We build solutions that survive
                                contact with reality.
                            </p>

                            <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                                    Fit check
                                </p>
                                <p className="mt-2 text-base text-amber-50/90 font-medium">
                                    Our deliverables aren't just slides.
                                    <br />
                                    They are the blueprints for operational changes that drive real shareholder value.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <MiniStat label="Approach" value="Operator-first, system-driven" />
                            <MiniStat label="Output" value="Working tools + workflows" />
                            <MiniStat label="Bias" value="Execution over theory" />
                            <MiniStat label="Result" value="Clarity, speed, control" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

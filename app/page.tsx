import Link from "next/link";
import { MiniStat, SectionKicker, Pill, ImmersiveSection } from "@/components/ui/design-system";
import { CTA_LINK, CONTACT_EMAIL } from "@/components/Navigation";

export default function Page() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/oilfield-painting.jpg" overlayOpacity={0.7} className="min-h-[85vh]">
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
                            <Link href="/construction" className="hover:opacity-80 transition-opacity">
                                <Pill>Construction</Pill>
                            </Link>
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
                                href="/construction"
                                className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-6 py-3 text-sm font-medium text-amber-100 hover:bg-amber-400/20 backdrop-blur-md shadow-lg shadow-amber-900/20"
                            >
                                <span>Construction</span>
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

            {/* Digital Systems Section */}
            <section className="bg-[#0B1121] py-24 border-t border-slate-900">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <SectionKicker>Digital Infrastructure</SectionKicker>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-50">
                                Digital Systems & Search Infrastructure
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-300">
                                Some problems don’t live on job sites or balance sheets — but they still need to run in production.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-slate-300">
                                In addition to our work across operations, construction, and complex systems, C&L Strategy designs and builds <strong>digital infrastructure</strong> for companies that need clarity, durability, and leverage — not marketing noise.
                            </p>
                            <ul className="mt-6 space-y-3 text-sm text-slate-400">
                                <li className="flex gap-3">
                                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-sky-400/80 shrink-0" />
                                    <span>Websites built as operational foundations</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-sky-400/80 shrink-0" />
                                    <span>Search systems engineered to compound over time</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-sky-400/80 shrink-0" />
                                    <span>Digital tooling that supports real decision-making</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-sm italic text-slate-500 border-l-2 border-slate-800 pl-4">
                                We apply the same operator discipline here as we do everywhere else: rules first, structure before scale, and systems that teams can actually run.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-sky-900/30 bg-sky-950/10 p-8">
                            <h3 className="text-xl font-semibold text-sky-100">
                                SEO OS™ — Search Built Like Infrastructure
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-sky-200/80">
                                SEO OS is our proprietary framework for building long-term search visibility without shortcuts, churn, or dependency on ongoing digital busywork.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-sky-200/80">
                                Instead of treating search as campaigns or content, we design it as infrastructure:
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-sky-200/70">
                                <li className="flex gap-2">
                                    <span className="text-sky-400">•</span> Deliberate in structure
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-sky-400">•</span> Controlled in expansion
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-sky-400">•</span> Resilient as the business grows
                                </li>
                            </ul>
                            <p className="mt-6 text-xs uppercase tracking-wider font-semibold text-sky-500">
                                This work is not promotional in nature — it is architectural.
                            </p>

                            <div className="mt-8 pt-8 border-t border-sky-900/30">
                                <Link href="/digital" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors group">
                                    <span>Learn more about our digital systems</span>
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-[#0B1121] py-24 border-t border-slate-800/50">
                <div className="mx-auto w-full max-w-4xl px-4 text-center">
                    <SectionKicker>Ready when you are</SectionKicker>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-5xl">
                        Let’s build something real.
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        Stop admiring the problem. We’ll help you define the system, build the tools, and take control of your operations.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href={CTA_LINK}
                            className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-8 py-4 text-sm font-medium text-sky-100 hover:bg-sky-500/20 transition-colors shadow-lg shadow-sky-900/20"
                        >
                            <span>Start a project</span>
                            <span aria-hidden>↗</span>
                        </a>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors"
                        >
                            <span>Email us</span>
                            <span aria-hidden>✉</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

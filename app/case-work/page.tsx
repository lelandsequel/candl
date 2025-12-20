import Link from "next/link";
import { Card, SectionKicker, GlowingBackground } from "@/components/ui/design-system";
import { CTA_LINK } from "@/components/Navigation";

export default function CaseWorkPage() {
    return (
        <main className="relative min-h-[calc(100vh-140px)] overflow-hidden">
            <GlowingBackground />
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-8 md:px-6 lg:px-8">
                <section className="scroll-mt-24">
                    <SectionKicker>Case work</SectionKicker>
                    <h1 className="mt-3 text-2xl font-semibold text-slate-50">
                        The kind of problems we like.
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
                        We’re at our best where operations are complex, decisions are time-sensitive, and
                        the business needs a single source of truth.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card
                            title="ChevronLift"
                            body="Automated crude & product scheduling platform. Optimizes movements across pipelines, terminals, and marine logistics."
                            bullets={["AI-assisted scheduling", "Conflict detection", "Feasibility analysis"]}
                        />
                        <Card
                            title="UnitedOps"
                            body="Network irregular operations optimizer. A single cockpit for managing hub disruptions and recovery planning."
                            bullets={["Real-time disruption mgmt", "Recovery scenarios", "Hub coordination"]}
                        />
                        <Card
                            title="TeslaReli"
                            body="Supercharger reliability cockpit. Intelligence for fleet operations to maximize uptime and maintenance efficiency."
                            bullets={["Reliability intelligence", "Fleet ops", "Predictive maintenance"]}
                        />
                        <Card
                            title="MortgageOps"
                            body="Home lending portfolio control tower for JPMorgan. End-to-end visibility from application to funding."
                            bullets={["Portfolio visibility", "Execution control", "Bottleneck identification"]}
                        />
                        <Card
                            title="Amazon FFRO"
                            body="Fulfillment Forecast & Routing Optimizer. Advanced modeling for last-mile logistics and capacity planning."
                            bullets={["Forecasting", "Routing optimization", "Capacity planning"]}
                        />
                        <Card
                            title="Netflix GCDF"
                            body="Global Content Demand Forecaster. Predictive analytics for content greenlighting and licensing decisions."
                            bullets={["Demand forecasting", "Content strategy", "Predictive modeling"]}
                        />
                    </div>

                    <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-8">
                        <SectionKicker>Digital Portfolio</SectionKicker>
                        <h2 className="mt-3 text-xl font-semibold text-slate-50">
                            See the prototypes in action.
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                            We maintain an active lab of prototypes and case studies demonstrating our approach to complex systems.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://jourdanlabs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-400/10 px-5 py-2.5 text-sm font-medium text-indigo-100 hover:bg-indigo-400/20 transition-colors"
                            >
                                <span>Visit JourdanLabs</span>
                                <span aria-hidden>↗</span>
                            </a>
                            <a
                                href={CTA_LINK}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900/70 transition-colors"
                            >
                                <span>Discuss a project</span>
                                <span aria-hidden>✉</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

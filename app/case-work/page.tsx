import Link from "next/link";
import { Card, SectionKicker, ImmersiveSection } from "@/components/ui/design-system";
import { CTA_LINK } from "@/components/Navigation";

export default function CaseWorkPage() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/blueprint-bg.png" overlayOpacity={0.85} className="min-h-[70vh]">
                <SectionKicker>Case work</SectionKicker>
                <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
                    The kind of problems we like.
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
                    We’re at our best where operations are complex, decisions are time-sensitive, and
                    the business needs a single source of truth.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/case-work/chevron-lift" className="block group transition-transform hover:scale-[1.01]">
                        <Card
                            title="ChevronLift"
                            body="Automated crude & product scheduling platform. Optimizes movements across pipelines, terminals, and marine logistics."
                            bullets={["AI-assisted scheduling", "Conflict detection", "Feasibility analysis"]}
                        />
                    </Link>
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

                <div className="mt-16 rounded-2xl border border-slate-800 bg-[#0B1121]/80 backdrop-blur-md p-8 shadow-xl">
                    <SectionKicker>Digital Portfolio</SectionKicker>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                        See the prototypes in action.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                        We maintain an active lab of prototypes and case studies demonstrating our approach to complex systems.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://jourdanlabs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-400/10 px-6 py-3 text-sm font-medium text-indigo-100 hover:bg-indigo-400/20 transition-colors shadow-lg shadow-indigo-900/20"
                        >
                            <span>Visit JourdanLabs</span>
                            <span aria-hidden>↗</span>
                        </a>
                        <a
                            href={CTA_LINK}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900/70 transition-colors"
                        >
                            <span>Discuss a project</span>
                            <span aria-hidden>✉</span>
                        </a>
                    </div>
                </div>
            </ImmersiveSection>
        </main>
    );
}

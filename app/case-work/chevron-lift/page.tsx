import { SectionKicker, ImmersiveSection } from "@/components/ui/design-system";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SchedulingCockpit } from "@/components/mocks/SchedulingCockpit";

export default function ChevronLiftPage() {
    return (
        <main className="flex-1 w-full relative">
            <div className="absolute top-8 left-8 z-50">
                <Link href="/case-work" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Case Work
                </Link>
            </div>

            <ImmersiveSection backgroundImage="/oilfield-magic-hour.png" overlayOpacity={0.9} className="min-h-[60vh]">
                <div className="max-w-4xl">
                    <SectionKicker>Case Study: ChevronLift</SectionKicker>
                    <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">
                        Automated scheduling for complex crude movements.
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
                        How we helped a major midstream operator move from spreadsheet dependency to an intelligent, conflict-detecting platform for their Gulf Coast assets.
                    </p>
                </div>
            </ImmersiveSection>

            <section className="bg-[#070A12] py-24 border-t border-slate-900">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-50 mb-4">The Problem</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Scheduling crude oil movements across a network of pipelines, tank farms, and marine terminals is a high-stakes puzzle.
                                    The client was managing 400,000+ barrels per day using a massive, fragile Excel workbook known as "The Beast."
                                </p>
                                <ul className="mt-4 space-y-2 text-slate-400 text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-rose-400">•</span> Single point of failure (one person understood the macros)
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-rose-400">•</span> No real-time conflict detection (tank overfills, berth clashes)
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-rose-400">•</span> Slow scenario planning during disruptions (hurricanes, power outages)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-50 mb-4">The Solution</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    We embedded with the scheduling team for 3 weeks to decode their mental model, then built <strong>ChevronLift</strong>:
                                    a web-based scheduling platform that visualizes the network and enforces physical constraints.
                                </p>
                                <p className="mt-4 text-slate-300 leading-relaxed">
                                    It's not just a database; it's a simulation. The system calculates tank levels and line pack hour-by-hour,
                                    flagging issues before they become operational emergencies.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-50 mb-4">Results</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-xl border border-emerald-900/30 bg-emerald-950/10 p-4">
                                        <p className="text-2xl font-bold text-emerald-400">90%</p>
                                        <p className="text-sm text-slate-400 mt-1">Reduction in scheduling time</p>
                                    </div>
                                    <div className="rounded-xl border border-emerald-900/30 bg-emerald-950/10 p-4">
                                        <p className="text-2xl font-bold text-emerald-400">Zero</p>
                                        <p className="text-sm text-slate-400 mt-1">Tank overfill incidents since launch</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Demo Component */}
                        <div className="lg:mt-12">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px flex-1 bg-slate-800"></div>
                                <span className="text-[0.65rem] uppercase tracking-widest text-slate-500">Live Component</span>
                                <div className="h-px flex-1 bg-slate-800"></div>
                            </div>
                            <SchedulingCockpit />
                            <p className="mt-4 text-xs text-center text-slate-500">
                                This is the actual React component used in the production application, adapted for this demo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

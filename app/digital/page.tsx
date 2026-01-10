import { SectionKicker, ImmersiveSection, Card, Pill } from "@/components/ui/design-system";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { CTA_LINK, CONTACT_EMAIL } from "@/components/Navigation";

export default function DigitalPage() {
    return (
        <main className="flex-1 w-full relative">
            {/* Hero Section */}
            <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
                <div className="max-w-4xl">
                    <SectionKicker>Infrastructure, Not Marketing</SectionKicker>
                    <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">
                        Digital Systems & Search Infrastructure
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
                        Digital work fails when it’s treated as marketing. We build it as infrastructure—deliberate, durable, and able to run without constant intervention.
                    </p>
                </div>
            </ImmersiveSection>

            {/* Philosophy Section */}
            <section className="bg-[#070A12] py-24 border-t border-slate-900">
                <div className="mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 items-start">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-50">
                                What We Mean by “Digital Consulting”
                            </h2>
                            <p className="mt-4 text-slate-300 leading-relaxed">
                                We don’t sell ads. We don’t chase trends. We don’t run monthly content calendars for the sake of activity.
                            </p>
                            <p className="mt-4 text-slate-300 leading-relaxed">
                                Digital consulting at C&L Strategy means designing the <strong>structure</strong> behind your online presence and building systems that compound over time.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">The Output Is Leverage</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500/80 shrink-0" />
                                    <span className="text-slate-300 text-sm">Designing the structure, not just the content</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500/80 shrink-0" />
                                    <span className="text-slate-300 text-sm">Building systems that compound over time</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500/80 shrink-0" />
                                    <span className="text-slate-300 text-sm">Removing dependency on gimmicks or churn</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="bg-[#0B1121] py-24 border-t border-slate-800">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <SectionKicker>Our Frameworks</SectionKicker>
                    <div className="mt-12 grid gap-12 lg:grid-cols-2">
                        {/* Website Infrastructure */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-50 mb-4">Website Creation as Infrastructure</h3>
                            <p className="text-slate-300 mb-4">Most business websites are treated like brochures. We treat them like operating systems.</p>
                            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Clearly communicate what the business does</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Establish trust immediately</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Support real buyer behavior (especially mobile)</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Scale without being rebuilt every year</li>
                                </ul>
                            </div>
                        </div>

                        {/* SEO OS */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-50 mb-4">SEO OS™ — Search As A System</h3>
                            <p className="text-slate-300 mb-4">SEO OS is our proprietary framework for building search visibility as infrastructure instead of campaigns.</p>
                            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Earn trust from search engines</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Align with how people actually search</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Scale safely across services and locations</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Remain resilient as algorithms change</li>
                                </ul>
                            </div>
                        </div>

                        {/* pSEO */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-50 mb-4">Programmatic SEO (pSEO)</h3>
                            <p className="text-slate-300 mb-4">Meeting specific searches (service + location + intent) without spam or shortcuts.</p>
                            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Building strong, reusable page templates</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Defining strict rules for expansion</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Controlling indexing and rollout</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Coverage without dilution</li>
                                </ul>
                            </div>
                        </div>

                        {/* AEO */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-50 mb-4">Answer Engine Optimization (AEO)</h3>
                            <p className="text-slate-300 mb-4">Search is no longer just ten blue links. We ensure your business is understood by AI systems.</p>
                            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Answer real questions directly</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Avoid sales-heavy language</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Build credibility before conversion</li>
                                    <li className="flex gap-2"><span className="text-sky-400">•</span> Future-proof visibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Don't Do */}
            <section className="bg-[#070A12] py-24 border-t border-slate-900">
                <div className="mx-auto w-full max-w-4xl px-4 text-center">
                    <h2 className="text-2xl font-semibold text-slate-50">What We Don’t Do</h2>
                    <p className="mt-4 text-slate-400">We intentionally avoid tactics that create short-term movement and long-term damage.</p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {["Backlink schemes", "Citation spam", "Content mills", "Ranking guarantees", "Dependency-based retainers"].map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-full border border-rose-900/30 bg-rose-950/10 px-4 py-2 text-sm text-rose-200/80">
                                <XCircle className="h-4 w-4" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="bg-[#0B1121] py-24 border-t border-slate-800">
                <div className="mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-8">
                    <SectionKicker>Engagement Models</SectionKicker>
                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {/* Website Setup */}
                        <div className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8 flex flex-col">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-50">Website Setup</h3>
                                <p className="text-sm text-slate-400 mt-1">One-time foundational build</p>
                            </div>
                            <div className="mt-6">
                                <span className="text-sm text-slate-400">Starts at</span>
                                <span className="text-4xl font-bold text-white block">$2,000</span>
                            </div>
                            <p className="mt-6 text-sm text-slate-300 leading-relaxed flex-1">
                                Includes full site structure, core pages, and technical foundations.
                            </p>
                        </div>

                        {/* AEO Audit */}
                        <div className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8 flex flex-col">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-50">AEO Audit</h3>
                                <p className="text-sm text-slate-400 mt-1">One-time assessment</p>
                            </div>
                            <div className="mt-6">
                                <span className="text-4xl font-bold text-white">$199</span>
                            </div>
                            <p className="mt-6 text-sm text-slate-300 leading-relaxed flex-1">
                                Wondering how your business is set for AI Search? We'll do a full SEO/AEO audit and show you where you stand.
                            </p>
                        </div>

                        {/* SEO OS */}
                        <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-1 text-xs font-medium text-sky-300 ring-1 ring-inset ring-sky-500/20">Recommended</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-50">SEO OS™</h3>
                                <p className="text-sm text-slate-400 mt-1">Ongoing system expansion</p>
                            </div>
                            <div className="mt-6">
                                <span className="text-sm text-slate-400">Starts at</span>
                                <div>
                                    <span className="text-4xl font-bold text-white">$1,200</span>
                                    <span className="text-slate-400 ml-2">/ month</span>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                                Designed to compound over time. Minimum commitment required to protect system integrity.
                            </p>
                            <p className="mt-4 text-xs text-sky-300/80 font-medium">
                                *Website setup included at no cost with a 6-month commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For CTA */}
            <section className="bg-[#070A12] py-24 border-t border-slate-900">
                <div className="mx-auto w-full max-w-4xl px-4 text-center">
                    <SectionKicker>Fit Check</SectionKicker>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-50">Who This Is For</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {["Operators", "Service businesses", "Local & regional companies", "Teams tired of 'marketing noise'"].map(item => (
                            <Pill key={item}>{item}</Pill>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
                        <h3 className="text-xl font-semibold text-slate-50">Next Steps</h3>
                        <p className="mt-4 text-slate-300">
                            If this approach aligns with how you think about your business, the next step is a straightforward conversation. No pitch. No pressure. Just clarity.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <a
                                href={CTA_LINK}
                                className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-8 py-4 text-sm font-medium text-sky-100 hover:bg-sky-500/20 transition-colors shadow-lg shadow-sky-900/20"
                            >
                                <span>Discuss a project</span>
                                <span aria-hidden>↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

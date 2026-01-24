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
            <section className="relative bg-[#0a0a0f] py-24 border-t border-cyan-500/10 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

                <div className="relative mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 items-start">
                        <div data-animate="fade-up">
                            <h2 className="text-2xl font-bold text-slate-50">
                                What We Mean by "Digital Consulting"
                            </h2>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                We don't sell ads. We don't chase trends. We don't run monthly content calendars for the sake of activity.
                            </p>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                Digital consulting at C&L Strategy means designing the <span className="text-cyan-300 font-medium">structure</span> behind your online presence and building systems that compound over time.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-cyan-500/20 bg-[#12121a]/80 p-8 backdrop-blur-md" data-animate="fade-up">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-6">The Output Is Leverage</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                                    <span className="text-slate-300 text-sm">Designing the structure, not just the content</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                                    <span className="text-slate-300 text-sm">Building systems that compound over time</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                                    <span className="text-slate-300 text-sm">Removing dependency on gimmicks or churn</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="relative bg-[#0a0a0f] py-24 border-t border-cyan-500/10 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px]" />

                <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <SectionKicker>Our Frameworks</SectionKicker>
                    <div className="mt-12 grid gap-12 lg:grid-cols-2" data-animate-group="stagger">
                        {/* Website Infrastructure */}
                        <div data-animate="stagger-item">
                            <h3 className="text-xl font-bold text-slate-50 mb-4">Website Creation as Infrastructure</h3>
                            <p className="text-slate-400 mb-4">Most business websites are treated like brochures. We treat them like operating systems.</p>
                            <div className="rounded-xl border border-cyan-500/20 bg-[#12121a]/80 p-6 backdrop-blur-md">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Clearly communicate what the business does</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Establish trust immediately</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Support real buyer behavior (especially mobile)</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Scale without being rebuilt every year</li>
                                </ul>
                            </div>
                        </div>

                        {/* SEO OS */}
                        <div data-animate="stagger-item">
                            <h3 className="text-xl font-bold text-slate-50 mb-4">SEO OS™ — Search As A System</h3>
                            <p className="text-slate-400 mb-4">SEO OS is our proprietary framework for building search visibility as infrastructure instead of campaigns.</p>
                            <div className="rounded-xl border border-cyan-500/20 bg-[#12121a]/80 p-6 backdrop-blur-md">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Earn trust from search engines</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Align with how people actually search</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Scale safely across services and locations</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Remain resilient as algorithms change</li>
                                </ul>
                            </div>
                        </div>

                        {/* pSEO */}
                        <div data-animate="stagger-item">
                            <h3 className="text-xl font-bold text-slate-50 mb-4">Programmatic SEO (pSEO)</h3>
                            <p className="text-slate-400 mb-4">Meeting specific searches (service + location + intent) without spam or shortcuts.</p>
                            <div className="rounded-xl border border-cyan-500/20 bg-[#12121a]/80 p-6 backdrop-blur-md">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Building strong, reusable page templates</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Defining strict rules for expansion</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Controlling indexing and rollout</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Coverage without dilution</li>
                                </ul>
                            </div>
                        </div>

                        {/* AEO */}
                        <div data-animate="stagger-item">
                            <h3 className="text-xl font-bold text-slate-50 mb-4">Answer Engine Optimization (AEO)</h3>
                            <p className="text-slate-400 mb-4">Search is no longer just ten blue links. We ensure your business is understood by AI systems.</p>
                            <div className="rounded-xl border border-cyan-500/20 bg-[#12121a]/80 p-6 backdrop-blur-md">
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Answer real questions directly</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Avoid sales-heavy language</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Build credibility before conversion</li>
                                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Future-proof visibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Don't Do */}
            <section className="relative bg-[#0a0a0f] py-24 border-t border-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-10" />

                <div className="relative mx-auto w-full max-w-4xl px-4 text-center" data-animate="fade-up">
                    <h2 className="text-2xl font-bold text-slate-50">What We Don't Do</h2>
                    <p className="mt-4 text-slate-400">We intentionally avoid tactics that create short-term movement and long-term damage.</p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {["Backlink schemes", "Citation spam", "Content mills", "Ranking guarantees", "Dependency-based retainers"].map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-950/20 px-4 py-2 text-sm text-rose-300/80 transition-all hover:border-rose-500/40">
                                <XCircle className="h-4 w-4" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="relative bg-[#0a0a0f] py-24 border-t border-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

                <div className="relative mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-8">
                    <SectionKicker>Engagement Models</SectionKicker>
                    <div className="mt-8 grid gap-8 md:grid-cols-3" data-animate-group="stagger">
                        {/* Website Setup */}
                        <div className="rounded-2xl border border-white/[0.08] bg-[#12121a]/80 p-8 flex flex-col backdrop-blur-md transition-all hover:border-cyan-500/20" data-animate="stagger-item">
                            <div>
                                <h3 className="text-lg font-bold text-slate-50">Website Setup</h3>
                                <p className="text-sm text-slate-500 mt-1">One-time foundational build</p>
                            </div>
                            <div className="mt-6">
                                <span className="text-sm text-slate-500">Starts at</span>
                                <span className="text-4xl font-bold text-white block">$15,000</span>
                            </div>
                            <p className="mt-6 text-sm text-slate-400 leading-relaxed flex-1">
                                Includes full site structure, core pages, and technical foundations.
                            </p>
                        </div>

                        {/* AEO Audit */}
                        <div className="rounded-2xl border border-white/[0.08] bg-[#12121a]/80 p-8 flex flex-col backdrop-blur-md transition-all hover:border-cyan-500/20" data-animate="stagger-item">
                            <div>
                                <h3 className="text-lg font-bold text-slate-50">AEO Audit</h3>
                                <p className="text-sm text-slate-500 mt-1">One-time assessment</p>
                            </div>
                            <div className="mt-6">
                                <span className="text-4xl font-bold text-white">$199</span>
                            </div>
                            <p className="mt-6 text-sm text-slate-400 leading-relaxed flex-1">
                                Wondering how your business is set for AI Search? We'll do a full SEO/AEO audit and show you where you stand.
                            </p>
                        </div>

                        {/* SEO OS */}
                        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-8 flex flex-col relative overflow-hidden backdrop-blur-md transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]" data-animate="stagger-item">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50" />
                            <div className="absolute top-0 right-0 p-4">
                                <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-2 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/30">Recommended</span>
                            </div>
                            <div className="relative">
                                <h3 className="text-lg font-bold text-slate-50">SEO OS™</h3>
                                <p className="text-sm text-slate-500 mt-1">Ongoing system expansion</p>
                            </div>
                            <div className="relative mt-6">
                                <span className="text-sm text-slate-500">Starts at</span>
                                <div>
                                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">$5,000</span>
                                    <span className="text-slate-500 ml-2">/ month</span>
                                </div>
                            </div>
                            <p className="relative mt-6 text-sm text-slate-300 leading-relaxed">
                                Designed to compound over time. Minimum commitment required to protect system integrity.
                            </p>
                            <p className="relative mt-4 text-xs text-cyan-400/80 font-medium">
                                *Website setup included at no cost with a 6-month commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For CTA */}
            <section className="relative bg-[#0a0a0f] py-24 border-t border-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

                <div className="relative mx-auto w-full max-w-4xl px-4 text-center" data-animate="fade-up">
                    <SectionKicker>Fit Check</SectionKicker>
                    <h2 className="mt-4 text-3xl font-bold text-slate-50">Who This Is For</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {["Operators", "Service businesses", "Local & regional companies", "Teams tired of 'marketing noise'"].map(item => (
                            <Pill key={item}>{item}</Pill>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-2xl border border-cyan-500/20 bg-[#12121a]/80 backdrop-blur-md">
                        <h3 className="text-xl font-bold text-slate-50">Next Steps</h3>
                        <p className="mt-4 text-slate-400">
                            If this approach aligns with how you think about your business, the next step is a straightforward conversation. No pitch. No pressure. Just clarity.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <a
                                href={CTA_LINK}
                                className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-8 py-4 text-sm font-medium text-cyan-100 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-900/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105"
                            >
                                <span>Discuss a project</span>
                                <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

import { Pill, SectionKicker, GlowingBackground } from "@/components/ui/design-system";
import { CTA_LINK, CONTACT_EMAIL } from "@/components/Navigation";

export default function AboutPage() {
    return (
        <main className="relative min-h-[calc(100vh-140px)] overflow-hidden">
            <GlowingBackground />
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-8 md:px-6 lg:px-8">
                <section className="scroll-mt-24">
                    <SectionKicker>About</SectionKicker>
                    <h1 className="mt-3 text-2xl font-semibold text-slate-50">
                        Built by operators, not career consultants.
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
                        C&L Strategy is founded by practitioners who’ve worked in the field and in the numbers:
                        oil & gas operations, terminals, logistics, construction, and finance. We build systems
                        that are practical, auditable, and resilient.
                    </p>

                    <div className="mt-8 grid gap-8 lg:grid-cols-2">
                        {/* Leland Bio */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8">
                            <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 opacity-80" />
                            <h3 className="text-xl font-semibold text-slate-50">Leland "TJ" Jourdan II</h3>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-sky-400">
                                Founding Partner · Systems & Digital
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300">
                                Process improvement, software architecture, and operational systems design. Leland specializes in turning messy workflows into tools and operating models that teams can actually run.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300">
                                He also leads our digital arm, <a href="https://sequelsolutions.io" className="text-sky-300 hover:underline">Sequel Solutions</a>, focusing on high-performance web presence and digital strategy.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Pill>Systems design</Pill>
                                <Pill>Ops + product</Pill>
                                <Pill>Software delivery</Pill>
                            </div>
                        </div>

                        {/* Colton Bio */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8">
                            <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 opacity-80" />
                            <h3 className="text-xl font-semibold text-slate-50">Colton Williams</h3>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
                                Founding Partner · Finance & Construction
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300">
                                Finance, accounting, and construction execution. Colton brings rigorous controls, real-world project delivery experience, and the financial clarity leaders need to make big capital decisions.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Pill>Finance</Pill>
                                <Pill>Accounting</Pill>
                                <Pill>Construction</Pill>
                            </div>
                        </div>
                    </div>

                    {/* Cross-Link Section */}
                    <div className="mt-8 border-t border-slate-800/50 pt-8">
                        <h3 className="text-sm font-semibold text-slate-200">Our Network</h3>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <a href="https://sequelsolutions.io" target="_blank" rel="noopener noreferrer" className="group block rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:bg-slate-900/60 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">Sequel Solutions</span>
                                    <span className="text-slate-500">↗</span>
                                </div>
                                <p className="mt-2 text-xs text-slate-400">Our digital consultancy. Web design, AEO/SEO, and digital strategy.</p>
                            </a>
                            <a href="https://jourdanlabs.com" target="_blank" rel="noopener noreferrer" className="group block rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:bg-slate-900/60 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">JourdanLabs</span>
                                    <span className="text-slate-500">↗</span>
                                </div>
                                <p className="mt-2 text-xs text-slate-400">Our prototype lab. Experimental dashboards, internal tools, and open source.</p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8">
                    <SectionKicker>Ready when you are</SectionKicker>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                        If it’s real ops, we can help.
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
                        Send a brief description of the problem, the current system (or lack of one), and what “success”
                        looks like. We’ll respond with a practical plan — and we’ll build it with your team.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href={CTA_LINK}
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20"
                        >
                            <span>Email us</span>
                            <span aria-hidden>↗</span>
                        </a>
                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=C%26L%20Strategy%20-%20Scope%20Request&body=Problem%3A%0A%0AContext%3A%0A%0ASuccess%20criteria%3A%0A`}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900/70"
                        >
                            <span>Send scope template</span>
                            <span aria-hidden>✉</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

import { Pill, SectionKicker, ImmersiveSection } from "@/components/ui/design-system";
import { CTA_LINK, CONTACT_EMAIL } from "@/components/Navigation";

export default function AboutPage() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/oilfield-magic-hour.png" overlayOpacity={0.8} className="min-h-[70vh]">
                <div className="max-w-4xl">
                    <SectionKicker>About</SectionKicker>
                    <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
                        Built by operators, not career consultants.
                    </h1>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                        C&L Strategy is founded by practitioners who've worked in the field and in the numbers:
                        oil & gas operations, terminals, logistics, construction, and finance. We build systems
                        that are practical, auditable, and resilient.
                    </p>
                </div>
            </ImmersiveSection>

            <section className="relative bg-[#0a0a0f] py-16 border-t border-cyan-500/10 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />

                <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2" data-animate-group="stagger">
                        {/* Leland Bio */}
                        <div className="group rounded-2xl border border-white/[0.08] bg-[#12121a]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30" data-animate="stagger-item">
                            <div className="mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 opacity-80 transition-all group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
                            <h3 className="text-2xl font-bold text-slate-50">Leland "TJ" Jourdan II</h3>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-400">
                                Founding Partner · Systems & Digital
                            </p>
                            <p className="mt-6 text-sm leading-relaxed text-slate-400">
                                Process improvement, software architecture, and operational systems design. Leland specializes in turning messy workflows into tools and operating models that teams can actually run.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-400">
                                He also leads our digital arm, <a href="https://sequelsolutions.io" className="text-cyan-300 hover:text-cyan-200 transition-colors">Sequel Solutions</a>, focusing on high-performance web presence and digital strategy.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-2">
                                <Pill>Systems design</Pill>
                                <Pill>Ops + product</Pill>
                                <Pill>Software delivery</Pill>
                            </div>
                        </div>

                        {/* Colton Bio */}
                        <div className="group rounded-2xl border border-white/[0.08] bg-[#12121a]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30" data-animate="stagger-item">
                            <div className="mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-80 transition-all group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]" />
                            <h3 className="text-2xl font-bold text-slate-50">Colton Williams</h3>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
                                Founding Partner · Finance & Construction
                            </p>
                            <p className="mt-6 text-sm leading-relaxed text-slate-400">
                                Finance, accounting, and construction execution. Colton brings rigorous controls, real-world project delivery experience, and the financial clarity leaders need to make big capital decisions.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-2">
                                <Pill>Finance</Pill>
                                <Pill>Accounting</Pill>
                                <Pill>Construction</Pill>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-Link Section */}
            <section className="relative bg-[#0a0a0f] py-16 border-t border-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-10" />

                <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8" data-animate="fade-up">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Network</h3>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <a href="https://sequelsolutions.io" target="_blank" rel="noopener noreferrer" className="group block rounded-xl border border-white/[0.08] bg-[#12121a]/80 p-6 backdrop-blur-md transition-all hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">Sequel Solutions</span>
                                <span className="text-slate-500 transition-transform group-hover:translate-x-1">↗</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">Our digital consultancy. Web design, AEO/SEO, and digital strategy.</p>
                        </a>
                        <a href="https://jourdanlabs.com" target="_blank" rel="noopener noreferrer" className="group block rounded-xl border border-white/[0.08] bg-[#12121a]/80 p-6 backdrop-blur-md transition-all hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-slate-100 group-hover:text-violet-300 transition-colors">JourdanLabs</span>
                                <span className="text-slate-500 transition-transform group-hover:translate-x-1">↗</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">Our prototype lab. Experimental dashboards, internal tools, and open source.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-[#0a0a0f] py-16 border-t border-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

                <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8" data-animate="fade-up">
                    <div className="rounded-2xl border border-cyan-500/20 bg-[#12121a]/80 p-10 backdrop-blur-md">
                        <SectionKicker>Ready when you are</SectionKicker>
                        <h2 className="mt-3 text-3xl font-bold text-slate-50">
                            If it's real ops, we can help.
                        </h2>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-[0.95rem]">
                            Send a brief description of the problem, the current system (or lack of one), and what "success"
                            looks like. We'll respond with a practical plan — and we'll build it with your team.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href={CTA_LINK}
                                className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-100 hover:bg-cyan-500/20 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                            >
                                <span>Book a call</span>
                                <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                            </a>
                            <a
                                href={`mailto:${CONTACT_EMAIL}?subject=C%26L%20Strategy%20-%20Scope%20Request&body=Problem%3A%0A%0AContext%3A%0A%0ASuccess%20criteria%3A%0A`}
                                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-white/10 transition-all"
                            >
                                <span>Send scope template</span>
                                <span aria-hidden className="transition-transform group-hover:scale-110">✉</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

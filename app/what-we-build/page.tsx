import { Card, SectionKicker, Divider, GlowingBackground } from "@/components/ui/design-system";

export default function WhatWeBuildPage() {
    return (
        <main className="relative min-h-[calc(100vh-140px)] overflow-hidden">
            <GlowingBackground />
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-8 md:px-6 lg:px-8">
                <section className="scroll-mt-24">
                    <SectionKicker>What we build</SectionKicker>
                    <h1 className="mt-3 text-2xl font-semibold text-slate-50">
                        Systems that make operations predictable.
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
                        We design and implement end-to-end systems — process, tooling, and financial clarity —
                        so leaders can see what’s happening, teams can execute, and the business can scale.
                    </p>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <div className="space-y-6">
                            <Card
                                title="Operational systems"
                                body="Scheduling, workflows, and operating models that replace tribal knowledge and spreadsheet chaos."
                                bullets={[
                                    "Scheduling & capacity planning",
                                    "Control towers & decision cockpits",
                                    "Process standardization"
                                ]}
                            />
                            <Card
                                title="Software & automation"
                                body="Internal tools designed around how teams really work — fast, reliable, and maintainable."
                                bullets={[
                                    "Custom internal apps (Next.js)",
                                    "Data pipelines & analytics",
                                    "AI-assisted decision support"
                                ]}
                            />
                            <Card
                                title="Finance & controls"
                                body="Operational reality tied to the P&L — with finance leadership that understands the field."
                                bullets={[
                                    "Cost structure & margin clarity",
                                    "Capital planning & project controls",
                                    "Construction finance"
                                ]}
                            />
                        </div>

                        {/* Digital Consulting Section */}
                        <div className="rounded-2xl border border-slate-800 bg-[#0B1121] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-[url('/digital-consulting-abstract.png')] bg-cover bg-center opacity-30 transition-opacity group-hover:opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/90 to-transparent" />

                            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                <SectionKicker>Digital Consulting & Growth</SectionKicker>
                                <h3 className="mt-2 text-2xl font-semibold text-white">
                                    Sequel Solutions
                                </h3>
                                <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-2xl">
                                    Our digital arm isn't a marketing agency. It is a growth engineering firm.
                                    We don't just "do SEO" — we build <strong>Programmatic SEO (pSEO)</strong> and <strong>AEO</strong> architectures that no one else is building.
                                </p>

                                <div className="mt-6 grid gap-6 md:grid-cols-2">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">AEO (AI-Enhanced Optimization)</h4>
                                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                                            We optimize for the AI future (Perplexity, ChatGPT), not just 2015 Google. We structure data so machines <em>understand</em> it, putting you inside the answer.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Programmatic Scale</h4>
                                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                                            We build infrastructure that generates thousands of compliant, high-value landing pages programmatically. This is how we dominate niche markets at scale.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <a
                                        href="https://sequelsolutions.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-6 py-3 text-sm font-medium text-sky-100 hover:bg-sky-500/20 transition-colors shadow-lg shadow-sky-900/20"
                                    >
                                        <span>Explore Sequel Solutions</span>
                                        <span aria-hidden>↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

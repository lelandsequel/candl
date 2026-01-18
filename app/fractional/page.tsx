import { Pill, SectionKicker, ImmersiveSection } from "@/components/ui/design-system";
import { CTA_LINK, CONTACT_EMAIL } from "@/components/Navigation";

export default function FractionalPage() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/data-center.png" overlayOpacity={0.85}>
                <div className="max-w-4xl">
                    <SectionKicker>Fractional Strategy & Execution</SectionKicker>
                    <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
                        A long-term partnership for founders who want to move faster — and smarter.
                    </h1>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                        At C&L Strategy, we work with founders, operators, and principals who are building multiple
                        initiatives at once and need experienced strategic support without hiring a full internal team.
                    </p>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                        This service is not traditional consulting. It is an ongoing partnership designed to bring
                        structure, clarity, and execution velocity to complex ideas and businesses.
                    </p>
                </div>
            </ImmersiveSection>

            <section className="bg-[#070A12] py-16 border-t border-slate-900">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    {/* What This Is */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            What This Is
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-300">
                            Our Fractional Strategy & Execution engagement provides ongoing access to senior strategic
                            thinking and hands-on support from C&L Strategy.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-emerald-400">We help clients:</h3>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Turn ideas into structured, executable systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Rapidly validate or kill concepts before they consume time and capital</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Bring clarity to overlapping ventures, products, or initiatives</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Move from "this could be something" to "this is built and working"</span>
                                </li>
                            </ul>
                        </div>
                        <p className="mt-6 text-lg font-semibold text-emerald-300 italic">
                            You are not buying hours. You are buying momentum, judgment, and speed.
                        </p>
                    </div>

                    {/* What This Is Not */}
                    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            What This Is Not
                        </h2>
                        <ul className="mt-6 space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">×</span>
                                <span>A one-off project</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">×</span>
                                <span>A marketing retainer</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">×</span>
                                <span>A traditional agency relationship</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">×</span>
                                <span>Staff augmentation or task-based outsourcing</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-base leading-relaxed text-slate-300">
                            We do not replace your team. We operate alongside you as a fractional strategy and execution partner.
                        </p>
                    </div>

                    {/* How It Works */}
                    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            How the Engagement Works
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-300">
                            We typically work with clients on a monthly retainer basis.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-emerald-400">The engagement includes:</h3>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Ongoing strategic sessions (weekly or biweekly)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Structuring and prioritization of new ideas and ventures</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Rapid prototyping and concept development</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Execution support where it meaningfully accelerates progress</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Real-time input on decisions, tradeoffs, and direction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Direct access to both partners at C&L Strategy</span>
                                </li>
                            </ul>
                        </div>
                        <p className="mt-6 text-sm text-slate-400 italic">
                            In practice, this usually equates to approximately 10–15 hours per week of focused involvement,
                            though the value is not measured by time — it is measured by outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="bg-[#0B1121] py-16 border-t border-slate-800">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl text-center mb-8">
                            Pricing
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* One-Time Project */}
                            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
                                <h3 className="text-xl font-semibold text-slate-50">
                                    One-Time Project Work
                                </h3>
                                <div className="text-4xl font-bold text-emerald-400 my-4">$2,000</div>
                                <p className="text-slate-300 text-sm">
                                    For discrete builds or initiatives (e.g., concept sites, structured frameworks, initial systems).
                                </p>
                            </div>

                            {/* Retainer */}
                            <div className="rounded-xl border-2 border-emerald-500/50 bg-emerald-950/20 p-6 relative">
                                <div className="absolute -top-3 left-6 bg-emerald-500 text-slate-900 px-3 py-1 text-xs font-bold rounded">
                                    RECOMMENDED
                                </div>
                                <h3 className="text-xl font-semibold text-slate-50">
                                    Fractional Retainer
                                </h3>
                                <div className="text-4xl font-bold text-emerald-400 mt-4">$6,000</div>
                                <div className="text-slate-400 text-sm mb-4">per month</div>
                                <div className="space-y-2 text-slate-300 text-sm">
                                    <p className="flex items-start gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        <span>Priority access to C&L Strategy</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        <span>Ongoing strategic and execution support</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        <span>Faster iteration, clearer direction, reduced risk</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 90-Day Pilot */}
                        <div className="rounded-xl border border-slate-700 bg-slate-900/30 p-6">
                            <h3 className="text-xl font-semibold text-slate-50 mb-3">
                                90-Day Pilot Option
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">
                                For new engagements, we recommend starting with a 90-day pilot.
                            </p>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>$6,000 per month</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>No long-term commitment upfront</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>Clear review at the end of 90 days</span>
                                </li>
                            </ul>
                            <p className="text-slate-400 text-sm italic mt-4">
                                This allows both sides to confirm fit, momentum, and impact before extending the relationship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope, Alignment, Who This Is For */}
            <section className="bg-[#070A12] py-16 border-t border-slate-900">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 space-y-8">
                    {/* Scope & Boundaries */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            Scope & Boundaries
                        </h2>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">The retainer covers:</h3>
                            <div className="grid grid-cols-2 gap-3 text-slate-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>Strategy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>Structuring</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>Advisory</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400">•</span>
                                    <span>Light execution support</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-slate-400 italic">
                            Large standalone builds, heavy engineering, or major launches are scoped separately or addressed
                            through success-based compensation.
                        </p>
                    </div>

                    {/* Alignment & Upside */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            Alignment & Upside
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-300">
                            Where our involvement directly contributes to revenue creation, deal flow, product launches,
                            or new ventures, we prefer to discuss success-based compensation or advisory equity on a
                            case-by-case basis.
                        </p>
                        <p className="mt-4 text-lg font-semibold text-emerald-300">
                            Our goal is alignment — not billing more hours.
                        </p>
                    </div>

                    {/* Who This Is For */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            Who This Is For
                        </h2>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">This service is best suited for:</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Founders with multiple ideas or ventures in motion</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Operators who need experienced strategic support without hiring</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Principals who value speed, clarity, and judgment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">•</span>
                                    <span>Clients who want a long-term thinking partner, not just deliverables</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The Outcome */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            The Outcome
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-300">
                            Clients engage C&L Strategy not to be told what to do — but to:
                        </p>
                        <ul className="mt-6 space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">•</span>
                                <span>See clearly</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">•</span>
                                <span>Move faster</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">•</span>
                                <span>Avoid dead ends</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">•</span>
                                <span>Build things that actually work</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-lg font-semibold text-emerald-300 text-center">
                            If you're looking for a strategic partner who can help you structure, build, and execute
                            with confidence, we should talk.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0B1121] py-16 border-t border-slate-800">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-10 text-center">
                        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                            Let's Discuss Your Needs
                        </h2>
                        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
                            Ready to move faster and build with clarity? Reach out to discuss how a fractional
                            partnership could accelerate what you're building.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <a
                                href={CTA_LINK}
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20"
                            >
                                <span>Email us</span>
                                <span aria-hidden>↗</span>
                            </a>
                            <a
                                href={`mailto:${CONTACT_EMAIL}?subject=Fractional%20Strategy%20%26%20Execution%20-%20Inquiry`}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900/70"
                            >
                                <span>Send inquiry</span>
                                <span aria-hidden>✉</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

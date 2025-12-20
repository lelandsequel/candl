import { Card, SectionKicker, GlowingBackground } from "@/components/ui/design-system";
import { SchedulingCockpit } from "@/components/mocks/SchedulingCockpit";

export default function HowWeWorkPage() {
    return (
        <main className="relative min-h-[calc(100vh-140px)] overflow-hidden">
            <GlowingBackground />
            <div className="mx-auto flex max-w-[90rem] flex-col gap-12 px-4 pb-16 pt-8 md:px-6 lg:px-8">
                <section className="scroll-mt-24">
                    <SectionKicker>How we work</SectionKicker>
                    <h1 className="mt-3 text-2xl font-semibold text-slate-50">
                        We don’t “advise.” We build.
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
                        Our method is simple: embed in the operation, design the system, ship something real, and
                        leave you with a playbook and tooling your team can run without us.
                    </p>

                    <div className="mt-12 flex flex-col lg:flex-row gap-12">
                        {/* Left Column: The Process */}
                        <div className="flex-1 flex flex-col gap-4 max-w-lg">
                            <Card
                                title="1) Embed in the operation"
                                body="We learn how work actually gets done: constraints, bottlenecks, incentives, handoffs, and failure modes."
                            />
                            <Card
                                title="2) Design the system"
                                body="We map workflows, data, ownership, and the decision loop — then define what “good” looks like in production."
                            />
                            <Card
                                title="3) Ship something real"
                                body="Tools, dashboards, workflows, financial models — implemented and tested with operators, not just stakeholders."
                            />
                            <Card
                                title="4) Make it run without us"
                                body="Documentation, enablement, and a clean handoff. No dependency theater. Your team owns it."
                            />
                        </div>

                        {/* Right Column: The "Something Real" */}
                        <div className="flex-[2] min-w-0">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px flex-1 bg-slate-800"></div>
                                <span className="text-[0.65rem] uppercase tracking-widest text-slate-500">Live Prototype</span>
                                <div className="h-px flex-1 bg-slate-800"></div>
                            </div>
                            <SchedulingCockpit />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

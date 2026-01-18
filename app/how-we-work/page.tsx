import { Card, SectionKicker, ImmersiveSection } from "@/components/ui/design-system";
import { SchedulingCockpit } from "@/components/mocks/SchedulingCockpit";

export default function HowWeWorkPage() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/oilfield-blueprint.png" overlayOpacity={0.85} className="min-h-[70vh]">
                <SectionKicker>How we work</SectionKicker>
                <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
                    We don't "advise." We build.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                    Our method is simple: embed in the operation, design the system, ship something real, and
                    leave you with a playbook and tooling your team can run without us.
                </p>
            </ImmersiveSection>

            <section className="bg-[#070A12] py-16 border-t border-slate-900">
                <div className="mx-auto w-full max-w-[90rem] px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column: The Process */}
                        <div className="flex-1 flex flex-col gap-4 max-w-lg">
                            <Card
                                title="1) Embed in the operation"
                                body="We learn how work actually gets done: constraints, bottlenecks, incentives, handoffs, and failure modes."
                            />
                            <Card
                                title="2) Design the system"
                                body="We map workflows, data, ownership, and the decision loop — then define what 'good' looks like in production."
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
                </div>
            </section>
        </main>
    );
}

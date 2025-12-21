import { Card, SectionKicker, ImmersiveSection } from "@/components/ui/design-system";
import { CTA_LINK } from "@/components/Navigation";

export default function ConstructionPage() {
    return (
        <main className="flex-1 w-full">
            <ImmersiveSection backgroundImage="/construction.png" overlayOpacity={0.8} className="min-h-[85vh]">
                <SectionKicker>Construction Services</SectionKicker>
                <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
                    From site cleanup to turnkey delivery.
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
                    We manage the entire lifecycle of physical asset development. Whether it's industrial site preparation, residential construction, or government contracting, we bring operator discipline to the job site.
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    <Card
                        title="Site Prep & Cleanup"
                        body="Heavy-duty industrial cleaning and site preparation. We handle the dirty work to get your project ready for vertical construction."
                        bullets={[
                            "Industrial site cleaning",
                            "Debris removal & hauling",
                            "Land clearing & grading"
                        ]}
                    />
                    <Card
                        title="Turnkey Residential"
                        body="Full-service home building and renovation. We manage everything from permitting to the final walkthrough."
                        bullets={[
                            "General Contracting (GC)",
                            "New construction framing",
                            "Renovation & remodeling"
                        ]}
                    />
                    <Card
                        title="Government Contracts"
                        body="Compliant, reliable execution for public sector projects. We understand the rigor of municipal and federal requirements."
                        bullets={[
                            "RFP/RFQ response execution",
                            "Regulatory compliance",
                            "Public infrastructure support"
                        ]}
                    />
                </div>

                <div className="mt-16 rounded-2xl border border-amber-500/20 bg-amber-950/20 backdrop-blur-md p-8 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-50">
                                Need a bid on a project?
                            </h2>
                            <p className="mt-2 text-sm text-slate-300 max-w-xl">
                                We are actively bidding on residential, commercial, and government cleanup projects in the West Texas and New Mexico region.
                            </p>
                        </div>
                        <a
                            href={CTA_LINK}
                            className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-8 py-4 text-sm font-medium text-amber-100 hover:bg-amber-500/20 transition-colors shadow-lg shadow-amber-900/20 whitespace-nowrap"
                        >
                            <span>Request a Quote</span>
                            <span aria-hidden>↗</span>
                        </a>
                    </div>
                </div>
            </ImmersiveSection>
        </main>
    );
}

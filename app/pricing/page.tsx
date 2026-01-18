import { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionKicker } from "@/components/ui/design-system";
import { CtaBlock } from "@/components/site/CtaBlock";

export const metadata: Metadata = {
  title: "Pricing | C&L Strategy",
  description: "Transparent pricing for digital growth services. Custom quotes based on your needs and goals.",
};

export default function PricingPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Pricing</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Transparent Pricing
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          We offer transparent pricing based on scope and engagement model. Contact us for a custom quote tailored to your needs.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8">
            <h3 className="text-lg font-semibold text-slate-50">Website Setup</h3>
            <p className="text-sm text-slate-400 mt-1">One-time foundational build</p>
            <div className="mt-6">
              <span className="text-sm text-slate-400">Starts at</span>
              <span className="text-4xl font-bold text-white block">$15,000</span>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Includes full site structure, core pages, and technical foundations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8">
            <h3 className="text-lg font-semibold text-slate-50">AEO Audit</h3>
            <p className="text-sm text-slate-400 mt-1">One-time assessment</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">$199</span>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Full SEO/AEO audit and recommendations.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-1 text-xs font-medium text-sky-300 ring-1 ring-inset ring-sky-500/20">
                Recommended
              </span>
            </div>
            <h3 className="text-lg font-semibold text-slate-50">SEO OS™</h3>
            <p className="text-sm text-slate-400 mt-1">Ongoing system expansion</p>
            <div className="mt-6">
              <span className="text-sm text-slate-400">Starts at</span>
              <div>
                <span className="text-4xl font-bold text-white">$5,000</span>
                <span className="text-slate-400 ml-2">/ month</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Designed to compound over time. Minimum commitment required.
            </p>
          </div>
        </div>
      </Section>

      <CtaBlock
        title="Get a Custom Quote"
        description="Contact us for pricing tailored to your specific needs and goals."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}

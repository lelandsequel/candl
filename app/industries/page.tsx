import { Metadata } from "next";
import { industries } from "@/content/industries";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Industries | C&L Strategy",
  description: "Digital marketing and growth solutions for specific industries. Industry-specific strategies that drive results.",
};

export default function IndustriesPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Industries</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Industry-Specific Solutions
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Digital growth solutions tailored to your industry. We understand the unique challenges and opportunities in your market.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card
              key={industry.slug}
              title={industry.h1}
              description={industry.description}
              href={`/industries/${industry.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

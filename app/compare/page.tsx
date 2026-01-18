import { Metadata } from "next";
import { comparisons } from "@/content/compare";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Compare Solutions | C&L Strategy",
  description: "Compare marketing solutions, platforms, and approaches. Make informed decisions with our comparison guides.",
};

export default function ComparePage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Compare</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Compare Solutions
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Compare marketing solutions, platforms, and approaches. Make informed decisions with our comprehensive comparison guides.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <Card
              key={comparison.slug}
              title={comparison.h1}
              description={comparison.description}
              href={`/compare/${comparison.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

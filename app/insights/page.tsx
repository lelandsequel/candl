import { Metadata } from "next";
import { insights } from "@/content/insights";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Insights | C&L Strategy",
  description: "Answer Engine Optimization insights and guides. Learn about AEO, pSEO, and modern SEO strategies.",
};

export default function InsightsPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Insights</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          SEO & AEO Insights
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Answer Engine Optimization insights and guides. Learn about modern SEO, AEO, pSEO, and strategies that drive results.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Card
              key={insight.slug}
              title={insight.h1}
              description={insight.description}
              href={`/insights/${insight.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

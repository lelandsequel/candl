import { Metadata } from "next";
import { glossary } from "@/content/glossary";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Glossary | C&L Strategy",
  description: "Definitions of SEO, AEO, pSEO, and digital marketing terms. Entity definitions for Answer Engine Optimization.",
};

export default function GlossaryPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Glossary</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Glossary
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Definitions of SEO, AEO, pSEO, and digital marketing terms. Entity definitions for Answer Engine Optimization.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {glossary.map((term) => (
            <Card
              key={term.slug}
              title={term.term}
              description={term.definition.substring(0, 150) + "..."}
              href={`/glossary/${term.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

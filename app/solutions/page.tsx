import { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/content/solutions";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Solutions | C&L Strategy",
  description: "Digital growth solutions for businesses. SEO, conversion optimization, lead generation, and scalable marketing systems.",
};

export default function SolutionsPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Solutions</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Digital Growth Solutions
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Systematic solutions for digital growth. SEO, conversion optimization, lead generation, and scalable marketing systems built to compound over time.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.slug}
              title={solution.h1}
              description={solution.description}
              href={`/solutions/${solution.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

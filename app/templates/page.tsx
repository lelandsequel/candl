import { Metadata } from "next";
import { templates } from "@/content/templates";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Templates & Resources | C&L Strategy",
  description: "Downloadable templates, checklists, and resources for digital growth. SEO checklists, pSEO blueprints, and conversion frameworks.",
};

export default function TemplatesPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Templates & Resources</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Templates & Resources
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Downloadable templates, checklists, and frameworks to help you build better digital systems. Free resources for operators and marketers.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card
              key={template.slug}
              title={template.h1}
              description={template.description}
              href={`/templates/${template.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

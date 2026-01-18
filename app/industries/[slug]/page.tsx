import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/content/industries";
import { Section } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { CtaBlock } from "@/components/site/CtaBlock";
import { SectionKicker } from "@/components/ui/design-system";
import { ImmersiveSection } from "@/components/ui/design-system";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) {
    return {
      title: "Industry Not Found | C&L Strategy",
    };
  }

  return {
    title: industry.title,
    description: industry.description,
    alternates: {
      canonical: `https://cl-strategy.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.title,
      description: industry.description,
      type: "website",
      url: `https://cl-strategy.com/industries/${industry.slug}`,
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const relatedLinks = industry.relatedSlugs
    .map((slug) => {
      const related = industries.find((i) => i.slug === slug);
      if (related) {
        return {
          slug: related.slug,
          title: related.h1,
          category: "industries",
        };
      }
      return null;
    })
    .filter(Boolean) as { slug: string; title: string; category: string }[];

  relatedLinks.push({
    slug: "chevron-lift",
    title: "ChevronLift Case Study",
    category: "case-work",
  });

  return (
    <main className="flex-1 w-full">
      <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
        <SectionKicker>Industry</SectionKicker>
        <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">{industry.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
          {industry.heroSubtitle}
        </p>
      </ImmersiveSection>

      <Section className="bg-[#070A12] border-t border-slate-900">
        <h2 className="text-2xl font-semibold text-slate-50">The Problem</h2>
        <ul className="mt-6 space-y-3">
          {industry.problemBullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-rose-400/80 shrink-0" />
              <span className="text-slate-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <h2 className="text-2xl font-semibold text-slate-50">Our Solution</h2>
        <ul className="mt-6 space-y-3">
          {industry.solutionBullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-emerald-400/80 shrink-0" />
              <span className="text-slate-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-[#070A12] border-t border-slate-900">
        <h2 className="text-2xl font-semibold text-slate-50">What You Get</h2>
        <ul className="mt-6 space-y-3">
          {industry.deliverables.map((deliverable, i) => (
            <li key={i} className="flex gap-3">
              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-sky-400/80 shrink-0" />
              <span className="text-slate-300">{deliverable}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <h2 className="text-2xl font-semibold text-slate-50">Our Process</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industry.processSteps.map((step, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                Step {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {industry.faqs.length > 0 && (
        <Section className="bg-[#070A12] border-t border-slate-900">
          <h2 className="text-2xl font-semibold text-slate-50">Frequently Asked Questions</h2>
          <div className="mt-8">
            {industry.faqs.map((faq, i) => (
              <FAQ key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>
      )}

      {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}

      <CtaBlock
        title="Ready to get started?"
        description="Let's discuss how we can help your industry-specific needs."
        ctaText={industry.primaryCtaText}
        ctaHref={industry.primaryCtaHref}
      />
    </main>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/content/solutions";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { CtaBlock } from "@/components/site/CtaBlock";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionKicker } from "@/components/ui/design-system";
import { ImmersiveSection } from "@/components/ui/design-system";

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) {
    return {
      title: "Solution Not Found | C&L Strategy",
    };
  }

  return {
    title: solution.title,
    description: solution.description,
    alternates: {
      canonical: `https://cl-strategy.com/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.title,
      description: solution.description,
      type: "website",
      url: `https://cl-strategy.com/solutions/${solution.slug}`,
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  // Build related links
  const relatedLinks = solution.relatedSlugs
    .map((slug) => {
      const related = solutions.find((s) => s.slug === slug);
      if (related) {
        return {
          slug: related.slug,
          title: related.h1,
          category: "solutions",
        };
      }
      return null;
    })
    .filter(Boolean) as { slug: string; title: string; category: string }[];

  // Add case work link
  relatedLinks.push({
    slug: "chevron-lift",
    title: "ChevronLift Case Study",
    category: "case-work",
  });

  // Build FAQ schema if FAQs exist
  const faqSchema = solution.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.h1,
    description: solution.description,
    provider: {
      "@type": "Organization",
      name: "C&L Strategy",
      url: "https://cl-strategy.com",
    },
    areaServed: "Worldwide",
  };

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd data={serviceSchema} />
      <main className="flex-1 w-full">
      {/* Hero */}
      <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
        <SectionKicker>Solution</SectionKicker>
        <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">{solution.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
          {solution.heroSubtitle}
        </p>
      </ImmersiveSection>

      {/* Problem */}
      <Section className="bg-[#070A12] border-t border-slate-900">
        <h2 className="text-2xl font-semibold text-slate-50">The Problem</h2>
        <ul className="mt-6 space-y-3">
          {solution.problemBullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-rose-400/80 shrink-0" />
              <span className="text-slate-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Solution */}
      <Section className="bg-[#0B1121] border-t border-slate-800">
        <h2 className="text-2xl font-semibold text-slate-50">Our Solution</h2>
        <ul className="mt-6 space-y-3">
          {solution.solutionBullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-emerald-400/80 shrink-0" />
              <span className="text-slate-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Deliverables */}
      <Section className="bg-[#070A12] border-t border-slate-900">
        <h2 className="text-2xl font-semibold text-slate-50">What You Get</h2>
        <ul className="mt-6 space-y-3">
          {solution.deliverables.map((deliverable, i) => (
            <li key={i} className="flex gap-3">
              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-sky-400/80 shrink-0" />
              <span className="text-slate-300">{deliverable}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section className="bg-[#0B1121] border-t border-slate-800">
        <h2 className="text-2xl font-semibold text-slate-50">Our Process</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solution.processSteps.map((step, i) => (
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

      {/* FAQs */}
      {solution.faqs.length > 0 && (
        <Section className="bg-[#070A12] border-t border-slate-900">
          <h2 className="text-2xl font-semibold text-slate-50">Frequently Asked Questions</h2>
          <div className="mt-8">
            {solution.faqs.map((faq, i) => (
              <FAQ key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>
      )}

      {/* Related Links */}
      {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}

      {/* CTA */}
      <CtaBlock
        title="Ready to get started?"
        description="Let's discuss how we can help you achieve your goals."
        ctaText={solution.primaryCtaText}
        ctaHref={solution.primaryCtaHref}
      />
    </main>
    </>
  );
}

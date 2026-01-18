import { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons } from "@/content/compare";
import { Section } from "@/components/site/Section";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { CtaBlock } from "@/components/site/CtaBlock";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionKicker } from "@/components/ui/design-system";
import { ImmersiveSection } from "@/components/ui/design-system";

export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  if (!comparison) {
    return {
      title: "Comparison Not Found | C&L Strategy",
    };
  }

  return {
    title: comparison.title,
    description: comparison.description,
    alternates: {
      canonical: `https://cl-strategy.com/compare/${comparison.slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: "article",
      url: `https://cl-strategy.com/compare/${comparison.slug}`,
    },
  };
}

export default function CompareDetailPage({ params }: { params: { slug: string } }) {
  const comparison = comparisons.find((c) => c.slug === params.slug);

  if (!comparison) {
    notFound();
  }

  const relatedLinks = comparison.relatedSlugs.map((slug) => {
    const [category] = slug.split("/");
    return {
      slug: slug.replace(`${category}/`, ""),
      title: slug.replace(`${category}/`, "").replace(/-/g, " "),
      category,
    };
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.h1,
    description: comparison.description,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <main className="flex-1 w-full">
        <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
          <SectionKicker>Comparison</SectionKicker>
          <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">{comparison.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
            {comparison.heroSubtitle}
          </p>
        </ImmersiveSection>

        <Section className="bg-[#070A12] border-t border-slate-900">
          <div className="grid gap-8 md:grid-cols-2">
            {comparison.comparisonItems.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
                <h2 className="text-xl font-semibold text-slate-50">{item.name}</h2>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {item.pros.map((pro, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-emerald-400">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-rose-400 mb-2">
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {item.cons.map((con, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-rose-400">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-[#0B1121] border-t border-slate-800">
          <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-6">
            <h2 className="text-xl font-semibold text-slate-50">Our Recommendation</h2>
            <p className="mt-2 text-slate-300">{comparison.recommendation}</p>
          </div>
        </Section>

        {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}

        <CtaBlock
          title="Ready to decide?"
          description="Let's discuss which approach is right for your business."
          ctaText={comparison.primaryCtaText}
          ctaHref={comparison.primaryCtaHref}
        />
      </main>
    </>
  );
}

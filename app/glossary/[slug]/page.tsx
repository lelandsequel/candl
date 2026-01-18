import { Metadata } from "next";
import { notFound } from "next/navigation";
import { glossary } from "@/content/glossary";
import { Section } from "@/components/site/Section";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionKicker } from "@/components/ui/design-system";
import { ImmersiveSection } from "@/components/ui/design-system";

export async function generateStaticParams() {
  return glossary.map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const term = glossary.find((t) => t.slug === params.slug);
  if (!term) {
    return {
      title: "Term Not Found | C&L Strategy",
    };
  }

  return {
    title: `${term.term} | C&L Strategy`,
    description: term.definition.substring(0, 160),
    alternates: {
      canonical: `https://cl-strategy.com/glossary/${term.slug}`,
    },
    openGraph: {
      title: term.term,
      description: term.definition.substring(0, 160),
      type: "article",
      url: `https://cl-strategy.com/glossary/${term.slug}`,
    },
  };
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const term = glossary.find((t) => t.slug === params.slug);

  if (!term) {
    notFound();
  }

  const relatedLinks = term.relatedSlugs.map((slug) => {
    const [category] = slug.split("/");
    return {
      slug: slug.replace(`${category}/`, ""),
      title: slug.replace(`${category}/`, "").replace(/-/g, " "),
      category,
    };
  });

  const definitionSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "C&L Strategy Glossary",
    },
  };

  return (
    <>
      <JsonLd data={definitionSchema} />
      <main className="flex-1 w-full">
        <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
          <SectionKicker>Definition</SectionKicker>
          <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">{term.term}</h1>
        </ImmersiveSection>

        <Section className="bg-[#070A12] border-t border-slate-900">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-slate-300">{term.definition}</p>
          </div>

          {term.relatedTerms.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-50 mb-4">Related Terms</h2>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((relatedTerm) => {
                  const related = glossary.find((t) => t.term.toLowerCase().includes(relatedTerm.toLowerCase()));
                  if (related) {
                    return (
                      <a
                        key={relatedTerm}
                        href={`/glossary/${related.slug}`}
                        className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900/90"
                      >
                        {relatedTerm}
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </Section>

        {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}
      </main>
    </>
  );
}

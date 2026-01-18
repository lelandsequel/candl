import { Metadata } from "next";
import { notFound } from "next/navigation";
import { templates } from "@/content/templates";
import { Section } from "@/components/site/Section";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { CtaBlock } from "@/components/site/CtaBlock";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionKicker } from "@/components/ui/design-system";
import { ImmersiveSection } from "@/components/ui/design-system";

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const template = templates.find((t) => t.slug === params.slug);
  if (!template) {
    return {
      title: "Template Not Found | C&L Strategy",
    };
  }

  return {
    title: template.title,
    description: template.description,
    alternates: {
      canonical: `https://cl-strategy.com/templates/${template.slug}`,
    },
    openGraph: {
      title: template.title,
      description: template.description,
      type: "article",
      url: `https://cl-strategy.com/templates/${template.slug}`,
    },
  };
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const template = templates.find((t) => t.slug === params.slug);

  if (!template) {
    notFound();
  }

  const relatedLinks = template.relatedSlugs.map((slug) => {
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
    headline: template.h1,
    description: template.description,
    author: {
      "@type": "Organization",
      name: "C&L Strategy",
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <main className="flex-1 w-full">
        <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
          <SectionKicker>Template</SectionKicker>
          <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">{template.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
            {template.heroSubtitle}
          </p>
        </ImmersiveSection>

        <Section className="bg-[#070A12] border-t border-slate-900">
          <h2 className="text-2xl font-semibold text-slate-50">What's Included</h2>
          <ul className="mt-6 space-y-3">
            {template.previewContent.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-sky-400/80 shrink-0" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}

        <CtaBlock
          title="Ready to download?"
          description="Get access to this template and start building better systems."
          ctaText={template.primaryCtaText}
          ctaHref={template.primaryCtaHref}
        />
      </main>
    </>
  );
}

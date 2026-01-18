import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { serviceLocationPages } from "@/content/generated/service_location";
import { Section } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { CtaBlock } from "@/components/site/CtaBlock";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionKicker } from "@/components/ui/design-system";
import { ImmersiveSection } from "@/components/ui/design-system";

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];

  for (const service of services) {
    for (const locationSlug of service.locations) {
      params.push({
        service: service.slug,
        location: locationSlug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; location: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.service);
  const location = locations.find((l) => l.slug === params.location);

  if (!service || !location) {
    return {
      title: "Service Not Found | C&L Strategy",
    };
  }

  const page = serviceLocationPages.find(
    (p) => p.slug === `${params.service}/${params.location}`
  );

  if (page) {
    return {
      title: page.title,
      description: page.description,
      alternates: {
        canonical: `https://cl-strategy.com/services/${params.service}/${params.location}`,
      },
      openGraph: {
        title: page.title,
        description: page.description,
        type: "website",
        url: `https://cl-strategy.com/services/${params.service}/${params.location}`,
      },
    };
  }

  const h1 = `${service.name} in ${location.h1.replace("Digital Marketing ", "")}`;
  const description = `${service.name} services in ${location.h1.replace("Digital Marketing ", "")}. ${service.shortDescription}`;

  return {
    title: `${h1} | C&L Strategy`,
    description,
    alternates: {
      canonical: `https://cl-strategy.com/services/${params.service}/${params.location}`,
    },
    openGraph: {
      title: h1,
      description,
      type: "website",
      url: `https://cl-strategy.com/services/${params.service}/${params.location}`,
    },
  };
}

export default function ServiceLocationPage({
  params,
}: {
  params: { service: string; location: string };
}) {
  const service = services.find((s) => s.slug === params.service);
  const location = locations.find((l) => l.slug === params.location);

  if (!service || !location) {
    notFound();
  }

  const page = serviceLocationPages.find(
    (p) => p.slug === `${params.service}/${params.location}`
  );

  // Fallback if generated page doesn't exist
  const h1 = page?.h1 || `${service.name} in ${location.h1.replace("Digital Marketing ", "")}`;
  const intro = page?.intro || `${service.shortDescription} Our approach is tailored to the ${location.h1.replace("Digital Marketing ", "")} market.`;
  const deliverables = page?.deliverables || [
    `${service.name} strategy for ${location.h1.replace("Digital Marketing ", "")}`,
    "Local market analysis and optimization",
    "Conversion-optimized implementation",
    "Ongoing support and optimization",
  ];
  const processSteps = page?.processSteps || [
    {
      title: "Discovery & Strategy",
      description: `We analyze your ${service.name.toLowerCase()} needs in ${location.h1.replace("Digital Marketing ", "")} and create a tailored strategy.`,
    },
    {
      title: "Implementation",
      description: `We implement ${service.name.toLowerCase()} solutions optimized for the ${location.h1.replace("Digital Marketing ", "")} market.`,
    },
    {
      title: "Optimization",
      description: "We continuously optimize based on performance data and market changes.",
    },
    {
      title: "Scale & Grow",
      description: "We scale successful strategies and expand reach over time.",
    },
  ];
  const faqs = page?.faqs || [];
  const relatedSlugs = page?.relatedSlugs || [
    `solutions/${service.slug === "digital" ? "seo-foundation-rebuild" : "ops-dashboard-and-reporting"}`,
    `industries/${service.industries[0] || "private-equity"}`,
    `locations/${params.location}`,
  ];

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    description: intro,
    provider: {
      "@type": "Organization",
      name: "C&L Strategy",
      url: "https://cl-strategy.com",
    },
    areaServed: {
      "@type": "City",
      name: location.h1.replace("Digital Marketing ", ""),
    },
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const relatedLinks = relatedSlugs.map((slug: string) => {
    const [category, ...rest] = slug.split("/");
    return {
      slug: rest.join("/"),
      title: `${category} - ${rest.join(" ")}`,
      category,
    };
  });

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd data={serviceSchema} />
      <main className="flex-1 w-full">
        <ImmersiveSection backgroundImage="/digital-bg.png" overlayOpacity={0.9} className="min-h-[50vh]">
          <SectionKicker>Service</SectionKicker>
          <h1 className="mt-4 text-4xl font-semibold text-slate-50 md:text-6xl">{h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">{intro}</p>
        </ImmersiveSection>

        <Section className="bg-[#070A12] border-t border-slate-900">
          <h2 className="text-2xl font-semibold text-slate-50">What You Get</h2>
          <ul className="mt-6 space-y-3">
            {deliverables.map((deliverable: string, i: number) => (
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
            {processSteps.map((step: any, i: number) => (
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

        {faqs.length > 0 && (
          <Section className="bg-[#070A12] border-t border-slate-900">
            <h2 className="text-2xl font-semibold text-slate-50">Frequently Asked Questions</h2>
            <div className="mt-8">
              {faqs.map((faq: any, i: number) => (
                <FAQ key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Section>
        )}

        {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}

        <CtaBlock
          title="Ready to get started?"
          description="Let's discuss how we can help you in your location."
          ctaText="Book a Call"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}

import { Metadata } from "next";
import { locations } from "@/content/locations";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { SectionKicker } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Locations | C&L Strategy",
  description: "Digital marketing and SEO services by location. Local SEO, conversion optimization, and lead generation for businesses in your area.",
};

export default function LocationsPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Locations</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Location-Specific Services
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Digital marketing and SEO services tailored to your location. We understand local markets and help you dominate local search.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Card
              key={location.slug}
              title={location.h1}
              description={location.description}
              href={`/locations/${location.slug}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

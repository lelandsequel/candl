import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { services } from "../content/services";
import { industries } from "../content/industries";
import { locations } from "../content/locations";
import { getFAQsForCombo } from "../content/faqs";

interface GeneratedPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

function generateServiceLocationPages(): GeneratedPage[] {
  const pages: GeneratedPage[] = [];

  for (const service of services) {
    for (const locationSlug of service.locations) {
      const location = locations.find((l) => l.slug === locationSlug);
      if (!location) continue;

      const slug = `${service.slug}/${locationSlug}`;
      const h1 = `${service.name} in ${location.h1.replace("Digital Marketing ", "")}`;
      const intro = `We provide ${service.name.toLowerCase()} services in ${location.h1.replace("Digital Marketing ", "")}. ${service.shortDescription} Our approach is tailored to the ${location.h1.replace("Digital Marketing ", "")} market, combining ${service.valueProps[0].toLowerCase()} with local expertise.`;

      pages.push({
        slug,
        title: `${service.name} in ${location.h1.replace("Digital Marketing ", "")} | C&L Strategy`,
        description: `${service.name} services in ${location.h1.replace("Digital Marketing ", "")}. ${service.shortDescription}`,
        h1,
        intro,
        deliverables: [
          `${service.name} strategy for ${location.h1.replace("Digital Marketing ", "")}`,
          "Local market analysis and optimization",
          "Conversion-optimized implementation",
          "Ongoing support and optimization",
          "Performance tracking and reporting",
        ],
        processSteps: [
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
        ],
        faqs: getFAQsForCombo(service.slug, undefined, locationSlug, 3),
        relatedSlugs: [
          `solutions/${service.slug === "digital" ? "seo-foundation-rebuild" : service.slug === "fractional" ? "ops-dashboard-and-reporting" : "construction-services"}`,
          `industries/${service.industries[0] || "private-equity"}`,
          `locations/${locationSlug}`,
        ],
      });
    }
  }

  return pages;
}

function generateServiceIndustryPages(): GeneratedPage[] {
  const pages: GeneratedPage[] = [];

  for (const service of services) {
    for (const industrySlug of service.industries) {
      const industry = industries.find((i) => i.slug === industrySlug);
      if (!industry) continue;

      const slug = `${service.slug}/${industrySlug}`;
      const h1 = `${service.name} for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")}`;
      const intro = `We provide ${service.name.toLowerCase()} services for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} businesses. ${service.shortDescription} Our industry-specific approach addresses the unique challenges and opportunities in ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")}.`;

      pages.push({
        slug,
        title: `${service.name} for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} | C&L Strategy`,
        description: `${service.name} services for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} businesses. ${service.shortDescription}`,
        h1,
        intro,
        deliverables: [
          `${service.name} strategy for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")}`,
          "Industry-specific optimization",
          "Conversion-optimized implementation",
          "Ongoing support and optimization",
          "Performance tracking and reporting",
        ],
        processSteps: [
          {
            title: "Industry Analysis",
            description: `We analyze ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} market dynamics and your specific needs.`,
          },
          {
            title: "Strategy & Planning",
            description: `We create a ${service.name.toLowerCase()} strategy tailored to ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} businesses.`,
          },
          {
            title: "Implementation",
            description: `We implement ${service.name.toLowerCase()} solutions optimized for your industry.`,
          },
          {
            title: "Optimize & Scale",
            description: "We continuously optimize and scale successful strategies.",
          },
        ],
        faqs: getFAQsForCombo(service.slug, industrySlug, undefined, 3),
        relatedSlugs: [
          `solutions/${service.slug === "digital" ? "seo-foundation-rebuild" : service.slug === "fractional" ? "ops-dashboard-and-reporting" : "construction-services"}`,
          `industries/${industrySlug}`,
          `locations/${service.locations[0] || "houston-tx"}`,
        ],
      });
    }
  }

  return pages;
}

function generateServiceIndustryLocationPages(): GeneratedPage[] {
  const pages: GeneratedPage[] = [];

  // Curated subset: top 5 industries * top 20 locations * 3 services
  const topIndustries = ["private-equity", "oil-and-gas-services", "construction-services", "medspa", "law-firm"];
  const topLocations = [
    "houston-tx", "dallas-tx", "austin-tx", "san-antonio-tx", "phoenix-az",
    "scottsdale-az", "mesa-az", "tempe-az", "katy-tx", "sugar-land-tx",
    "the-woodlands-tx", "pearland-tx", "pasadena-tx", "baytown-tx", "spring-tx",
    "cypress-tx", "memorial-tx", "river-oaks-tx", "montrose-tx", "midtown-houston-tx",
  ];

  for (const service of services) {
    for (const industrySlug of topIndustries) {
      const industry = industries.find((i) => i.slug === industrySlug);
      if (!industry) continue;
      if (!service.industries.includes(industrySlug)) continue;

      for (const locationSlug of topLocations) {
        const location = locations.find((l) => l.slug === locationSlug);
        if (!location) continue;
        if (!service.locations.includes(locationSlug)) continue;

        const slug = `${service.slug}/${industrySlug}/${locationSlug}`;
        const h1 = `${service.name} for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} in ${location.h1.replace("Digital Marketing ", "")}`;
        const intro = `We provide ${service.name.toLowerCase()} services for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} businesses in ${location.h1.replace("Digital Marketing ", "")}. ${service.shortDescription} Our approach combines industry expertise with local market knowledge to deliver results.`;

        pages.push({
          slug,
          title: `${service.name} for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} in ${location.h1.replace("Digital Marketing ", "")} | C&L Strategy`,
          description: `${service.name} services for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} businesses in ${location.h1.replace("Digital Marketing ", "")}. ${service.shortDescription}`,
          h1,
          intro,
          deliverables: [
            `${service.name} strategy for ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} in ${location.h1.replace("Digital Marketing ", "")}`,
            "Industry and location-specific optimization",
            "Conversion-optimized implementation",
            "Ongoing support and optimization",
            "Performance tracking and reporting",
          ],
          processSteps: [
            {
              title: "Market Analysis",
              description: `We analyze ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} market dynamics in ${location.h1.replace("Digital Marketing ", "")} and your specific needs.`,
            },
            {
              title: "Strategy & Planning",
              description: `We create a ${service.name.toLowerCase()} strategy tailored to ${industry.h1.replace("Digital Marketing", "").replace("Digital Growth", "")} businesses in ${location.h1.replace("Digital Marketing ", "")}.`,
            },
            {
              title: "Implementation",
              description: `We implement ${service.name.toLowerCase()} solutions optimized for your industry and location.`,
            },
            {
              title: "Optimize & Scale",
              description: "We continuously optimize and scale successful strategies.",
            },
          ],
          faqs: getFAQsForCombo(service.slug, industrySlug, locationSlug, 3),
          relatedSlugs: [
            `solutions/${service.slug === "digital" ? "seo-foundation-rebuild" : service.slug === "fractional" ? "ops-dashboard-and-reporting" : "construction-services"}`,
            `industries/${industrySlug}`,
            `locations/${locationSlug}`,
          ],
        });
      }
    }
  }

  return pages;
}

function main() {
  console.log("Generating cluster pages...");

  const serviceLocationPages = generateServiceLocationPages();
  const serviceIndustryPages = generateServiceIndustryPages();
  const serviceIndustryLocationPages = generateServiceIndustryLocationPages();

  // Ensure directory exists
  const generatedDir = join(process.cwd(), "content", "generated");
  mkdirSync(generatedDir, { recursive: true });

  // Write service/location pages
  writeFileSync(
    join(generatedDir, "service_location.ts"),
    `// Auto-generated file. Do not edit manually.
export interface GeneratedPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const serviceLocationPages: GeneratedPage[] = ${JSON.stringify(serviceLocationPages, null, 2)};
`
  );

  // Write service/industry pages
  writeFileSync(
    join(generatedDir, "service_industry.ts"),
    `// Auto-generated file. Do not edit manually.
export interface GeneratedPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const serviceIndustryPages: GeneratedPage[] = ${JSON.stringify(serviceIndustryPages, null, 2)};
`
  );

  // Write service/industry/location pages
  writeFileSync(
    join(generatedDir, "service_industry_location.ts"),
    `// Auto-generated file. Do not edit manually.
export interface GeneratedPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const serviceIndustryLocationPages: GeneratedPage[] = ${JSON.stringify(serviceIndustryLocationPages, null, 2)};
`
  );

  console.log(`Generated ${serviceLocationPages.length} service/location pages`);
  console.log(`Generated ${serviceIndustryPages.length} service/industry pages`);
  console.log(`Generated ${serviceIndustryLocationPages.length} service/industry/location pages`);
  console.log(`Total: ${serviceLocationPages.length + serviceIndustryPages.length + serviceIndustryLocationPages.length} cluster pages`);
}

main();

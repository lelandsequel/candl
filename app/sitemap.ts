import { MetadataRoute } from "next";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { insights } from "@/content/insights";
import { templates } from "@/content/templates";
import { comparisons } from "@/content/compare";
import { glossary } from "@/content/glossary";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cl-strategy.com";

  // Core routes
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/digital`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fractional`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/construction`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-we-build`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-work/chevron-lift`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Solutions pages
  const solutionsRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Industries pages
  const industriesRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Locations pages
  const locationsRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Insights pages
  const insightsRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Templates pages
  const templatesRoutes: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Compare pages
  const compareRoutes: MetadataRoute.Sitemap = comparisons.map((comparison) => ({
    url: `${baseUrl}/compare/${comparison.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Glossary pages
  const glossaryRoutes: MetadataRoute.Sitemap = glossary.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Cluster pages - service/location
  const serviceLocationRoutes: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const locationSlug of service.locations) {
      serviceLocationRoutes.push({
        url: `${baseUrl}/services/${service.slug}/${locationSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  // Cluster pages - service/industry
  const serviceIndustryRoutes: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const industrySlug of service.industries) {
      serviceIndustryRoutes.push({
        url: `${baseUrl}/services/${service.slug}/${industrySlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  // Cluster pages - service/industry/location (curated subset)
  const serviceIndustryLocationRoutes: MetadataRoute.Sitemap = [];
  const topIndustries = ["private-equity", "oil-and-gas-services", "construction-services", "medspa", "law-firm"];
  const topLocations = [
    "houston-tx", "dallas-tx", "austin-tx", "san-antonio-tx", "phoenix-az",
    "scottsdale-az", "mesa-az", "tempe-az", "katy-tx", "sugar-land-tx",
    "the-woodlands-tx", "pearland-tx", "pasadena-tx", "baytown-tx", "spring-tx",
    "cypress-tx", "memorial-tx", "river-oaks-tx", "montrose-tx", "midtown-houston-tx",
  ];
  for (const service of services) {
    for (const industrySlug of topIndustries) {
      if (!service.industries.includes(industrySlug)) continue;
      for (const locationSlug of topLocations) {
        if (!service.locations.includes(locationSlug)) continue;
        serviceIndustryLocationRoutes.push({
          url: `${baseUrl}/services/${service.slug}/${industrySlug}/${locationSlug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    }
  }

  return [
    ...coreRoutes,
    ...solutionsRoutes,
    ...industriesRoutes,
    ...locationsRoutes,
    ...insightsRoutes,
    ...templatesRoutes,
    ...compareRoutes,
    ...glossaryRoutes,
    ...serviceLocationRoutes,
    ...serviceIndustryRoutes,
    ...serviceIndustryLocationRoutes,
  ];
}

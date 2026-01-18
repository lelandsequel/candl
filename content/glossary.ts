export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  relatedTerms: string[];
  relatedSlugs: string[];
}

export const glossary: GlossaryTerm[] = [
  {
    slug: "aeo",
    term: "Answer Engine Optimization (AEO)",
    definition: "Answer Engine Optimization is the practice of optimizing content so AI-powered search engines (like ChatGPT, Perplexity, Google's AI Overview) can understand and recommend your business when users ask questions. AEO focuses on providing clear, direct answers that AI systems can extract and recommend.",
    relatedTerms: ["SEO", "pSEO", "FAQ"],
    relatedSlugs: ["what-is-aeo", "aeo-answer-engine-optimization", "how-to-write-faqs-for-ai-results"],
  },
  {
    slug: "pseo",
    term: "Programmatic SEO (pSEO)",
    definition: "Programmatic SEO is creating many SEO-optimized pages at scale using templates and data, rather than manually writing each page. When done correctly, pSEO creates substantial, valuable pages systematically without thin content penalties.",
    relatedTerms: ["SEO", "AEO", "Content"],
    relatedSlugs: ["what-is-pseo", "pseo-programmatic-pages", "how-to-build-city-pages"],
  },
  {
    slug: "seo",
    term: "Search Engine Optimization (SEO)",
    definition: "SEO is the practice of optimizing websites to improve their visibility in search engine results. This includes technical optimization, content creation, link building, and user experience improvements.",
    relatedTerms: ["AEO", "pSEO", "Local SEO"],
    relatedSlugs: ["seo-foundation-rebuild", "does-seo-still-work", "local-search-domination"],
  },
  {
    slug: "local-seo",
    term: "Local SEO",
    definition: "Local SEO is optimizing your online presence to attract customers from local searches. This includes Google Business Profile optimization, local citations, location pages, and review management.",
    relatedTerms: ["SEO", "Google Business Profile", "Citations"],
    relatedSlugs: ["local-search-domination", "near-me-query-capture", "city-page-cluster-build"],
  },
  {
    slug: "schema-markup",
    term: "Schema Markup",
    definition: "Schema markup is structured data that helps search engines understand your content better. It enables rich results, improves understanding, and can help with AI search visibility.",
    relatedTerms: ["SEO", "AEO", "Structured Data"],
    relatedSlugs: ["schema-and-entity-layer", "best-schema-for-local-business", "aeo-answer-engine-optimization"],
  },
  {
    slug: "conversion-rate-optimization",
    term: "Conversion Rate Optimization (CRO)",
    definition: "CRO is the practice of systematically improving your website's conversion rate through testing, user experience optimization, and data-driven improvements.",
    relatedTerms: ["Conversion", "UX", "Testing"],
    relatedSlugs: ["conversion-rate-optimization", "proposal-site-that-closes", "landing-page-factory"],
  },
  {
    slug: "internal-linking",
    term: "Internal Linking",
    definition: "Internal linking is linking between pages on your own website. Strategic internal linking distributes page authority, helps users discover content, and helps search engines understand your site structure.",
    relatedTerms: ["SEO", "Site Architecture", "Authority"],
    relatedSlugs: ["internal-linking-architecture", "how-to-build-internal-links", "seo-foundation-rebuild"],
  },
  {
    slug: "thin-content",
    term: "Thin Content",
    definition: "Thin content is content that provides little value, is duplicate or low-quality, and doesn't help users. Search engines penalize thin content, so it's important to create substantial, valuable content.",
    relatedTerms: ["Content", "Quality", "pSEO"],
    relatedSlugs: ["how-to-avoid-thin-content", "pseo-programmatic-pages", "content-engine-90-days"],
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    definition: "Core Web Vitals are Google's metrics for page experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). These metrics are ranking factors.",
    relatedTerms: ["Performance", "SEO", "UX"],
    relatedSlugs: ["site-speed-and-core-web-vitals", "seo-foundation-rebuild", "proposal-site-that-closes"],
  },
  {
    slug: "google-business-profile",
    term: "Google Business Profile",
    definition: "Google Business Profile (formerly Google My Business) is your business listing on Google. Optimizing your profile is essential for local SEO and appearing in local search results.",
    relatedTerms: ["Local SEO", "Citations", "Reviews"],
    relatedSlugs: ["local-search-domination", "near-me-query-capture", "reputation-and-review-engine"],
  },
];

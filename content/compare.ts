export interface Compare {
  slug: string;
  title: string;
  description: string;
  h1: string;
  heroSubtitle: string;
  comparisonItems: { name: string; pros: string[]; cons: string[] }[];
  recommendation: string;
  relatedSlugs: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
}

export const comparisons: Compare[] = [
  {
    slug: "seo-vs-ppc",
    title: "SEO vs PPC: Which is Better? | C&L Strategy",
    description: "Compare SEO and PPC marketing. Understand the differences, pros and cons, and which is right for your business.",
    h1: "SEO vs PPC: Which is Better?",
    heroSubtitle: "Compare SEO and PPC to find the right marketing approach for your business.",
    comparisonItems: [
      {
        name: "SEO",
        pros: [
          "Long-term organic traffic",
          "Lower cost per lead over time",
          "Builds authority and trust",
          "Compounds over time",
        ],
        cons: [
          "Takes time to see results",
          "Requires ongoing optimization",
          "Less immediate control",
        ],
      },
      {
        name: "PPC",
        pros: [
          "Immediate results",
          "Full control over targeting",
          "Predictable costs",
          "Easy to test and optimize",
        ],
        cons: [
          "Ongoing costs",
          "Stops working when you stop paying",
          "Can be expensive",
        ],
      },
    ],
    recommendation: "The best approach combines both: SEO for long-term growth and PPC for immediate results and testing.",
    relatedSlugs: ["seo-foundation-rebuild", "inbound-lead-system", "analytics-and-attribution"],
    primaryCtaText: "Discuss Your Strategy",
    primaryCtaHref: "/contact",
  },
  {
    slug: "in-house-vs-agency",
    title: "In-House vs Agency: Which is Right? | C&L Strategy",
    description: "Compare in-house marketing teams vs agencies. Understand the trade-offs and make the right decision.",
    h1: "In-House vs Agency: Which is Right?",
    heroSubtitle: "Compare in-house teams and agencies to find the right marketing model.",
    comparisonItems: [
      {
        name: "In-House",
        pros: [
          "Full control and alignment",
          "Deep company knowledge",
          "Faster communication",
          "Long-term team building",
        ],
        cons: [
          "Higher fixed costs",
          "Limited expertise breadth",
          "Recruitment challenges",
        ],
      },
      {
        name: "Agency",
        pros: [
          "Access to specialized expertise",
          "Flexible engagement models",
          "Proven processes",
          "No recruitment overhead",
        ],
        cons: [
          "Less company-specific knowledge",
          "Potential communication delays",
          "Ongoing costs",
        ],
      },
    ],
    recommendation: "Many successful companies use a hybrid approach: in-house for strategy and execution, agencies for specialized expertise.",
    relatedSlugs: ["fractional", "how-we-work", "about"],
    primaryCtaText: "Discuss Your Needs",
    primaryCtaHref: "/contact",
  },
  {
    slug: "wordpress-vs-nextjs",
    title: "WordPress vs Next.js: Which Platform? | C&L Strategy",
    description: "Compare WordPress and Next.js for your website. Understand technical differences and business implications.",
    h1: "WordPress vs Next.js: Which Platform?",
    heroSubtitle: "Compare WordPress and Next.js to choose the right platform for your website.",
    comparisonItems: [
      {
        name: "WordPress",
        pros: [
          "Easy to use and manage",
          "Large plugin ecosystem",
          "Lower initial cost",
          "Familiar to many users",
        ],
        cons: [
          "Performance limitations",
          "Security concerns",
          "Less flexible for custom needs",
        ],
      },
      {
        name: "Next.js",
        pros: [
          "Superior performance",
          "Modern development practices",
          "Better SEO capabilities",
          "More flexible and scalable",
        ],
        cons: [
          "Requires technical expertise",
          "Higher initial cost",
          "Smaller plugin ecosystem",
        ],
      },
    ],
    recommendation: "Choose WordPress for simple sites with limited customization needs. Choose Next.js for performance-critical sites and custom requirements.",
    relatedSlugs: ["proposal-site-that-closes", "site-speed-and-core-web-vitals", "seo-foundation-rebuild"],
    primaryCtaText: "Discuss Your Platform",
    primaryCtaHref: "/contact",
  },
  {
    slug: "seo-vs-content-marketing",
    title: "SEO vs Content Marketing: What's the Difference? | C&L Strategy",
    description: "Compare SEO and content marketing. Understand how they work together and which to prioritize.",
    h1: "SEO vs Content Marketing: What's the Difference?",
    heroSubtitle: "Compare SEO and content marketing to understand their relationship.",
    comparisonItems: [
      {
        name: "SEO",
        pros: [
          "Technical optimization",
          "Immediate visibility improvements",
          "Foundation for all content",
          "Long-term traffic growth",
        ],
        cons: [
          "Requires technical knowledge",
          "Ongoing maintenance",
          "Algorithm dependency",
        ],
      },
      {
        name: "Content Marketing",
        pros: [
          "Builds authority and trust",
          "Engages and educates audience",
          "Supports SEO efforts",
          "Creates shareable assets",
        ],
        cons: [
          "Takes time to see results",
          "Requires consistent creation",
          "Quality over quantity",
        ],
      },
    ],
    recommendation: "SEO and content marketing work best together. SEO provides the foundation, content marketing provides the fuel.",
    relatedSlugs: ["content-engine-90-days", "seo-foundation-rebuild", "authority-building-plan"],
    primaryCtaText: "Discuss Your Strategy",
    primaryCtaHref: "/contact",
  },
  {
    slug: "local-seo-vs-national-seo",
    title: "Local SEO vs National SEO | C&L Strategy",
    description: "Compare local SEO and national SEO strategies. Understand when to use each approach.",
    h1: "Local SEO vs National SEO",
    heroSubtitle: "Compare local and national SEO to choose the right strategy.",
    comparisonItems: [
      {
        name: "Local SEO",
        pros: [
          "Targets local customers",
          "Faster results",
          "Lower competition",
          "Higher conversion rates",
        ],
        cons: [
          "Limited geographic reach",
          "Requires local presence",
          "Location-dependent",
        ],
      },
      {
        name: "National SEO",
        pros: [
          "Broader reach",
          "Scalable growth",
          "Brand building",
          "More traffic potential",
        ],
        cons: [
          "Higher competition",
          "Takes longer to rank",
          "More resources needed",
        ],
      },
    ],
    recommendation: "Local businesses should prioritize local SEO. National businesses need both local and national SEO strategies.",
    relatedSlugs: ["local-search-domination", "city-page-cluster-build", "authority-building-plan"],
    primaryCtaText: "Discuss Your Strategy",
    primaryCtaHref: "/contact",
  },
];

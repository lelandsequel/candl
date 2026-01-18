export interface Insight {
  slug: string;
  title: string;
  description: string;
  h1: string;
  heroSubtitle: string;
  problemBullets: string[];
  solutionBullets: string[];
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
}

export const insights: Insight[] = [
  {
    slug: "what-is-aeo",
    title: "What is Answer Engine Optimization (AEO)? | C&L Strategy",
    description: "Answer Engine Optimization (AEO) is optimizing content for AI-powered search engines. Learn how AEO helps your business appear in AI answers.",
    h1: "What is Answer Engine Optimization (AEO)?",
    heroSubtitle: "Optimize for the future of search—AI-powered answer engines.",
    problemBullets: [
      "Search is changing—AI systems are answering questions directly",
      "Traditional SEO doesn't account for AI search",
      "Your content isn't structured for AI understanding",
      "You're missing opportunities in AI search results",
      "No strategy for voice search and AI assistants"
    ],
    solutionBullets: [
      "Understand what AEO is and why it matters",
      "Learn how to structure content for AI",
      "Implement FAQ schema and structured data",
      "Optimize for AI knowledge graphs",
      "Future-proof your search visibility"
    ],
    deliverables: [
      "Complete AEO guide",
      "Content optimization strategies",
      "FAQ schema implementation guide",
      "AI search optimization tips",
      "AEO best practices"
    ],
    processSteps: [
      {
        title: "Understand AEO",
        description: "Learn what Answer Engine Optimization is and how it differs from traditional SEO."
      },
      {
        title: "Structure Content",
        description: "Structure your content to provide clear, direct answers that AI systems can extract."
      },
      {
        title: "Implement Schema",
        description: "Implement FAQ schema and structured data to help AI understand your content."
      },
      {
        title: "Optimize & Monitor",
        description: "Optimize content for AI search and monitor how AI systems understand your business."
      }
    ],
    faqs: [
      {
        question: "What is Answer Engine Optimization?",
        answer: "Answer Engine Optimization (AEO) is optimizing your content so AI-powered search engines (like ChatGPT, Perplexity, Google's AI Overview) can understand and recommend your business when users ask questions."
      },
      {
        question: "How is AEO different from SEO?",
        answer: "Traditional SEO focuses on ranking in search results. AEO focuses on being selected as the answer by AI systems, which requires clear, structured, answer-focused content."
      },
      {
        question: "Do I need AEO if I already do SEO?",
        answer: "Yes. AEO complements SEO by ensuring you're visible in AI search results, which are becoming increasingly important as more people use AI assistants."
      },
      {
        question: "How do I optimize for AEO?",
        answer: "Optimize for AEO by providing clear, direct answers to questions, using FAQ schema markup, structuring content for AI understanding, and focusing on helpful, non-salesy content."
      },
      {
        question: "How long until AEO shows results?",
        answer: "AEO improvements can show results in 2-4 weeks as AI systems re-crawl and re-process your content. Full optimization typically takes 2-3 months."
      }
    ],
    relatedSlugs: ["aeo-answer-engine-optimization", "how-to-write-faqs-for-ai-results", "what-is-pseo"],
    primaryCtaText: "Optimize for AI Search",
    primaryCtaHref: "/about"
  },
  {
    slug: "what-is-pseo",
    title: "What is Programmatic SEO (pSEO)? | C&L Strategy",
    description: "Programmatic SEO (pSEO) is creating many SEO-optimized pages at scale using templates and data. Learn how pSEO can scale your search visibility.",
    h1: "What is Programmatic SEO (pSEO)?",
    heroSubtitle: "Scale your search visibility with systematic, high-quality page creation.",
    problemBullets: [
      "You can't manually create enough pages to cover all search queries",
      "Competitors are ranking for combinations you're missing",
      "Manual content creation doesn't scale",
      "You need coverage but don't want thin content",
      "No systematic approach to expanding search visibility"
    ],
    solutionBullets: [
      "Understand what pSEO is and how it works",
      "Learn how to build quality page templates",
      "Create systematic coverage without thin content",
      "Scale search visibility efficiently",
      "Maintain quality while scaling"
    ],
    deliverables: [
      "Complete pSEO guide",
      "Template design strategies",
      "Quality control frameworks",
      "Scaling best practices",
      "pSEO implementation roadmap"
    ],
    processSteps: [
      {
        title: "Understand pSEO",
        description: "Learn what programmatic SEO is and how it can scale your search visibility."
      },
      {
        title: "Design Templates",
        description: "Design page templates that ensure quality while enabling scale."
      },
      {
        title: "Build System",
        description: "Build the system to generate pages following strict quality guidelines."
      },
      {
        title: "Scale & Monitor",
        description: "Scale page creation and monitor performance to maintain quality."
      }
    ],
    faqs: [
      {
        question: "What is programmatic SEO?",
        answer: "Programmatic SEO is creating many SEO-optimized pages at scale using templates and data, rather than manually writing each page. It's systematic, not spam."
      },
      {
        question: "Won't this create thin, low-quality content?",
        answer: "Not if done right. Quality pSEO uses strict quality rules, substantial unique content per page, and ensures each page provides real value. Quality over quantity."
      },
      {
        question: "How many pages can you create?",
        answer: "We typically start with 50-200 pages and expand based on performance. The system can scale to thousands of pages while maintaining quality."
      },
      {
        question: "What types of pages work for pSEO?",
        answer: "Service + location pages, city pages, industry pages, and other combinations where you can create substantial unique content work well for pSEO."
      },
      {
        question: "How long until pages start ranking?",
        answer: "New pages typically start appearing in search results within 2-4 weeks. Ranking improvements take 3-6 months as pages gain authority."
      }
    ],
    relatedSlugs: ["pseo-programmatic-pages", "how-to-build-city-pages", "service-page-cluster-build"],
    primaryCtaText: "Build My pSEO System",
    primaryCtaHref: "/about"
  },
  {
    slug: "does-seo-still-work",
    title: "Does SEO Still Work in 2024? | C&L Strategy",
    description: "SEO still works, but it's changing. Learn how SEO has evolved and how to adapt your strategy for modern search.",
    h1: "Does SEO Still Work?",
    heroSubtitle: "SEO works, but it's evolving. Here's how to adapt.",
    problemBullets: [
      "Uncertainty about SEO's effectiveness",
      "Search is changing with AI",
      "Old SEO tactics don't work",
      "No clear modern SEO strategy",
      "Wondering if SEO is worth the investment"
    ],
    solutionBullets: [
      "Understand how SEO has evolved",
      "Learn what still works and what doesn't",
      "Adapt strategy for modern search",
      "Focus on quality and user experience",
      "Build SEO that compounds over time"
    ],
    deliverables: [
      "SEO effectiveness analysis",
      "Modern SEO strategies",
      "What works and what doesn't",
      "Adaptation roadmap",
      "Future-proof SEO approach"
    ],
    processSteps: [
      {
        title: "Understand Evolution",
        description: "Understand how SEO has evolved and what still works."
      },
      {
        title: "Adapt Strategy",
        description: "Adapt your SEO strategy for modern search and AI."
      },
      {
        title: "Focus Quality",
        description: "Focus on quality content and user experience over tactics."
      },
      {
        title: "Build System",
        description: "Build SEO systems that compound over time."
      }
    ],
    faqs: [
      {
        question: "Does SEO still work?",
        answer: "Yes. SEO still works, but it's evolving. Focus on quality content, user experience, and building authority rather than tactics."
      },
      {
        question: "How has SEO changed?",
        answer: "SEO has shifted from keyword stuffing and link building to quality content, user experience, and building trust. AI search is also changing how SEO works."
      },
      {
        question: "What SEO tactics still work?",
        answer: "Quality content, technical SEO, user experience, and building authority still work. Tactics like keyword stuffing and spam links don't."
      },
      {
        question: "How do I adapt my SEO strategy?",
        answer: "Focus on creating helpful content, optimizing for user experience, building authority, and optimizing for AI search (AEO) in addition to traditional SEO."
      },
      {
        question: "Is SEO worth the investment?",
        answer: "Yes. SEO drives organic traffic and leads, reduces customer acquisition cost, and compounds over time when done right."
      }
    ],
    relatedSlugs: ["what-is-aeo", "seo-foundation-rebuild", "authority-building-plan"],
    primaryCtaText: "Audit My SEO",
    primaryCtaHref: "/about"
  },
  {
    slug: "how-to-build-city-pages",
    title: "How to Build City Pages That Rank | C&L Strategy",
    description: "Learn how to build city pages that rank in local search. Best practices for location pages that drive local traffic and leads.",
    h1: "How to Build City Pages That Rank",
    heroSubtitle: "City pages that rank, not thin content that gets penalized.",
    problemBullets: [
      "City pages don't rank well",
      "Thin content gets penalized",
      "No clear strategy for city pages",
      "Competitors rank higher",
      "City pages don't convert"
    ],
    solutionBullets: [
      "Learn city page best practices",
      "Create substantial unique content",
      "Optimize for local search",
      "Build pages that convert",
      "Scale city pages systematically"
    ],
    deliverables: [
      "City page best practices guide",
      "Content templates",
      "Local SEO optimization",
      "Conversion optimization",
      "Scaling strategies"
    ],
    processSteps: [
      {
        title: "Plan & Research",
        description: "Research cities, identify opportunities, and plan your city page strategy."
      },
      {
        title: "Create Content",
        description: "Create substantial unique content for each city page."
      },
      {
        title: "Optimize & Link",
        description: "Optimize for local SEO and implement internal linking."
      },
      {
        title: "Scale & Monitor",
        description: "Scale city pages and monitor performance."
      }
    ],
    faqs: [
      {
        question: "How do city pages rank?",
        answer: "City pages rank for '[service] in [city]' queries when optimized with local content, schema, and signals."
      },
      {
        question: "What content should city pages have?",
        answer: "City pages should have substantial unique content including local information, service details, and location-specific value propositions."
      },
      {
        question: "How many city pages should I create?",
        answer: "Create city pages for all cities you serve. Use programmatic SEO to scale while maintaining quality."
      },
      {
        question: "Won't city pages create thin content?",
        answer: "Not if done right. Each city page should have substantial unique content, local information, and real value."
      },
      {
        question: "How long until city pages rank?",
        answer: "City pages typically start appearing in search results within 2-4 weeks. Ranking improvements take 3-6 months."
      }
    ],
    relatedSlugs: ["city-page-cluster-build", "pseo-programmatic-pages", "local-search-domination"],
    primaryCtaText: "Build My City Pages",
    primaryCtaHref: "/about"
  },
  {
    slug: "how-to-structure-service-pages",
    title: "How to Structure Service Pages for SEO | C&L Strategy",
    description: "Learn how to structure service pages for SEO and conversion. Best practices for service pages that rank and convert.",
    h1: "How to Structure Service Pages for SEO",
    heroSubtitle: "Service pages that rank and convert, not generic pages that don't.",
    problemBullets: [
      "Service pages don't rank well",
      "No clear structure or strategy",
      "Service pages don't convert",
      "Missing service + location combinations",
      "Competitors rank higher"
    ],
    solutionBullets: [
      "Learn service page best practices",
      "Structure pages for SEO and conversion",
      "Create service + location combinations",
      "Optimize for search and users",
      "Scale service pages systematically"
    ],
    deliverables: [
      "Service page best practices guide",
      "Page structure templates",
      "SEO optimization strategies",
      "Conversion optimization",
      "Scaling strategies"
    ],
    processSteps: [
      {
        title: "Plan & Structure",
        description: "Plan service page structure and create templates."
      },
      {
        title: "Create & Optimize",
        description: "Create service pages optimized for SEO and conversion."
      },
      {
        title: "Expand & Link",
        description: "Expand to service + location combinations and implement internal linking."
      },
      {
        title: "Scale & Monitor",
        description: "Scale service pages and monitor performance."
      }
    ],
    faqs: [
      {
        question: "How do service pages rank?",
        answer: "Service pages rank for service-specific keywords, especially when combined with location and optimized for search intent."
      },
      {
        question: "What structure should service pages have?",
        answer: "Service pages should have clear headings, service description, benefits, process, FAQs, and CTAs."
      },
      {
        question: "Should I create service + location pages?",
        answer: "Yes. Service + location pages help you rank for local service searches and capture more traffic."
      },
      {
        question: "How many service pages do I need?",
        answer: "Create a page for each distinct service you offer, plus service + location combinations if you serve multiple areas."
      },
      {
        question: "How do service pages convert?",
        answer: "Service pages convert when they include clear CTAs, contact forms, and conversion elements that turn visitors into leads."
      }
    ],
    relatedSlugs: ["service-page-cluster-build", "pseo-programmatic-pages", "conversion-rate-optimization"],
    primaryCtaText: "Build My Service Pages",
    primaryCtaHref: "/about"
  },
  {
    slug: "best-schema-for-local-business",
    title: "Best Schema for Local Business | C&L Strategy",
    description: "Learn the best schema markup for local businesses. LocalBusiness schema, reviews, and structured data that improve local search visibility.",
    h1: "Best Schema for Local Business",
    heroSubtitle: "Schema markup that helps search engines understand your local business.",
    problemBullets: [
      "Search engines don't understand your business",
      "No schema markup implemented",
      "Missing rich results in search",
      "Not appearing in local pack",
      "Competitors have better schema"
    ],
    solutionBullets: [
      "Learn local business schema best practices",
      "Implement LocalBusiness schema",
      "Add review and rating schema",
      "Optimize for local search",
      "Improve rich results visibility"
    ],
    deliverables: [
      "Local business schema guide",
      "Schema implementation checklist",
      "Code examples",
      "Validation tools",
      "Best practices"
    ],
    processSteps: [
      {
        title: "Understand Schema",
        description: "Understand what schema markup is and why it matters for local businesses."
      },
      {
        title: "Implement Schema",
        description: "Implement LocalBusiness schema and other relevant schema types."
      },
      {
        title: "Validate & Test",
        description: "Validate schema markup and test for errors."
      },
      {
        title: "Monitor & Optimize",
        description: "Monitor rich results and optimize schema over time."
      }
    ],
    faqs: [
      {
        question: "What is schema markup?",
        answer: "Schema markup is code that helps search engines understand your content better, enabling rich results and better rankings."
      },
      {
        question: "What schema should local businesses use?",
        answer: "Local businesses should use LocalBusiness schema, Review schema, and other relevant schema types based on their business."
      },
      {
        question: "How does schema help local SEO?",
        answer: "Schema helps search engines understand your business location, services, and reviews, which can improve local search visibility."
      },
      {
        question: "Do I need to be technical to implement schema?",
        answer: "Schema implementation requires some technical knowledge, but we can help implement it or provide code examples."
      },
      {
        question: "How long until schema shows results?",
        answer: "Schema improvements can show results in 2-4 weeks as search engines re-crawl your site. Rich results may appear immediately."
      }
    ],
    relatedSlugs: ["schema-and-entity-layer", "local-search-domination", "reputation-and-review-engine"],
    primaryCtaText: "Implement Schema",
    primaryCtaHref: "/about"
  },
  {
    slug: "how-to-write-faqs-for-ai-results",
    title: "How to Write FAQs for AI Results | C&L Strategy",
    description: "Learn how to write FAQs that appear in AI search results. FAQ schema, answer optimization, and AEO best practices.",
    h1: "How to Write FAQs for AI Results",
    heroSubtitle: "FAQs that AI systems select as answers, not generic Q&A that gets ignored.",
    problemBullets: [
      "FAQs don't appear in AI results",
      "No FAQ schema implemented",
      "FAQs aren't optimized for AI",
      "Missing voice search opportunities",
      "Competitors appear in AI answers"
    ],
    solutionBullets: [
      "Learn FAQ best practices for AI",
      "Write clear, direct answers",
      "Implement FAQ schema markup",
      "Optimize for voice search",
      "Improve AI search visibility"
    ],
    deliverables: [
      "FAQ writing guide",
      "FAQ schema implementation",
      "Answer optimization strategies",
      "Voice search optimization",
      "AEO best practices"
    ],
    processSteps: [
      {
        title: "Research Questions",
        description: "Research common questions your audience asks."
      },
      {
        title: "Write Answers",
        description: "Write clear, direct answers optimized for AI understanding."
      },
      {
        title: "Implement Schema",
        description: "Implement FAQ schema markup to help AI systems understand your FAQs."
      },
      {
        title: "Optimize & Monitor",
        description: "Optimize FAQs for AI search and monitor AI result appearances."
      }
    ],
    faqs: [
      {
        question: "How do FAQs help with AI search?",
        answer: "FAQs help you appear in AI search results when AI systems select your answers. FAQ schema markup helps AI understand your FAQs."
      },
      {
        question: "What makes a good FAQ for AI?",
        answer: "Good FAQs for AI have clear, direct answers, use natural language, and provide helpful information without sales language."
      },
      {
        question: "Do I need FAQ schema?",
        answer: "Yes. FAQ schema markup helps AI systems understand your FAQs and increases the chance of appearing in AI results."
      },
      {
        question: "How many FAQs should I have?",
        answer: "Start with 20-50 FAQs covering your most common questions. Expand based on search demand and customer questions."
      },
      {
        question: "How long until FAQs appear in AI results?",
        answer: "FAQs can appear in AI results within 2-4 weeks after implementation. Full optimization takes 2-3 months."
      }
    ],
    relatedSlugs: ["what-is-aeo", "faq-hub-build", "aeo-answer-engine-optimization"],
    primaryCtaText: "Build My FAQ System",
    primaryCtaHref: "/about"
  },
  {
    slug: "how-to-avoid-thin-content",
    title: "How to Avoid Thin Content Penalties | C&L Strategy",
    description: "Learn how to avoid thin content penalties. Best practices for creating substantial, valuable content that ranks and avoids penalties.",
    h1: "How to Avoid Thin Content Penalties",
    heroSubtitle: "Create substantial content that ranks, not thin content that gets penalized.",
    problemBullets: [
      "Worried about thin content penalties",
      "Not sure what counts as thin content",
      "Need to scale but maintain quality",
      "Competitors have more content",
      "No clear content quality standards"
    ],
    solutionBullets: [
      "Understand what thin content is",
      "Learn content quality standards",
      "Create substantial unique content",
      "Scale content while maintaining quality",
      "Avoid penalties and rank better"
    ],
    deliverables: [
      "Thin content guide",
      "Content quality standards",
      "Scaling strategies",
      "Quality control frameworks",
      "Best practices"
    ],
    processSteps: [
      {
        title: "Understand Standards",
        description: "Understand what thin content is and what quality standards to follow."
      },
      {
        title: "Create Quality Content",
        description: "Create substantial unique content that provides real value."
      },
      {
        title: "Scale Systematically",
        description: "Scale content creation while maintaining quality standards."
      },
      {
        title: "Monitor & Optimize",
        description: "Monitor content performance and optimize based on data."
      }
    ],
    faqs: [
      {
        question: "What is thin content?",
        answer: "Thin content is content that provides little value, is duplicate or low-quality, and doesn't help users. Search engines penalize thin content."
      },
      {
        question: "How do I avoid thin content?",
        answer: "Avoid thin content by creating substantial unique content, providing real value, and ensuring each page has enough content to be helpful."
      },
      {
        question: "How much content do I need per page?",
        answer: "There's no magic number, but aim for at least 300-500 words of substantial unique content per page. Quality matters more than quantity."
      },
      {
        question: "Can I scale content without creating thin content?",
        answer: "Yes. Use programmatic SEO with strict quality rules, substantial unique content per page, and ensure each page provides real value."
      },
      {
        question: "What happens if I have thin content?",
        answer: "Thin content can result in lower rankings, penalties, or pages not being indexed. Focus on creating substantial valuable content."
      }
    ],
    relatedSlugs: ["pseo-programmatic-pages", "content-engine-90-days", "how-to-build-city-pages"],
    primaryCtaText: "Audit My Content",
    primaryCtaHref: "/about"
  },
  {
    slug: "how-to-build-internal-links",
    title: "How to Build Internal Links | C&L Strategy",
    description: "Learn how to build strategic internal links. Link architecture that distributes authority and helps users and search engines navigate your site.",
    h1: "How to Build Internal Links",
    heroSubtitle: "Link your pages strategically, not randomly.",
    problemBullets: [
      "No clear internal linking strategy",
      "Important pages aren't getting authority",
      "Users can't find related content",
      "Site structure is confusing",
      "Search engines don't understand page relationships"
    ],
    solutionBullets: [
      "Learn internal linking best practices",
      "Build strategic link architecture",
      "Distribute authority to important pages",
      "Improve user navigation",
      "Help search engines understand your site"
    ],
    deliverables: [
      "Internal linking guide",
      "Link architecture strategies",
      "Implementation best practices",
      "Link monitoring tools",
      "Optimization strategies"
    ],
    processSteps: [
      {
        title: "Plan Architecture",
        description: "Plan your internal linking structure and identify important pages."
      },
      {
        title: "Build Links",
        description: "Build strategic internal links throughout your site."
      },
      {
        title: "Monitor & Analyze",
        description: "Monitor link performance and analyze authority distribution."
      },
      {
        title: "Optimize & Expand",
        description: "Optimize links and expand internal linking over time."
      }
    ],
    faqs: [
      {
        question: "Why is internal linking important?",
        answer: "Internal linking distributes page authority, helps users discover content, and helps search engines understand your site structure."
      },
      {
        question: "How many internal links per page?",
        answer: "There's no magic number, but we typically aim for 3-10 strategic internal links per page, focusing on relevance and authority flow."
      },
      {
        question: "What pages should I link to?",
        answer: "Link to related pages, important pages, and pages that need more authority. Focus on relevance and user value."
      },
      {
        question: "How do I build internal links?",
        answer: "Build internal links by adding links in content, navigation, related content sections, and throughout your site strategically."
      },
      {
        question: "How long until internal links show results?",
        answer: "Internal links can show results in 2-4 weeks as search engines re-crawl your site. Full impact takes 2-3 months."
      }
    ],
    relatedSlugs: ["internal-linking-architecture", "pseo-programmatic-pages", "seo-foundation-rebuild"],
    primaryCtaText: "Build My Link Architecture",
    primaryCtaHref: "/about"
  },
  {
    slug: "what-makes-a-proposal-site-convert",
    title: "What Makes a Proposal Site Convert? | C&L Strategy",
    description: "Learn what makes proposal sites convert. Conversion optimization, user experience, and design that turns visitors into clients.",
    h1: "What Makes a Proposal Site Convert?",
    heroSubtitle: "Proposal sites that convert, not sites that look good but don't close deals.",
    problemBullets: [
      "Proposal sites don't convert well",
      "Visitors leave without taking action",
      "No clear conversion path",
      "Site looks good but doesn't convert",
      "Missing conversion optimization"
    ],
    solutionBullets: [
      "Learn conversion best practices",
      "Understand what makes sites convert",
      "Optimize user experience",
      "Improve conversion elements",
      "Build sites that close deals"
    ],
    deliverables: [
      "Conversion optimization guide",
      "Proposal site best practices",
      "UX optimization strategies",
      "Conversion element optimization",
      "A/B testing frameworks"
    ],
    processSteps: [
      {
        title: "Understand Conversion",
        description: "Understand what makes proposal sites convert and identify barriers."
      },
      {
        title: "Optimize Experience",
        description: "Optimize user experience and conversion elements."
      },
      {
        title: "Test & Measure",
        description: "Test improvements and measure conversion impact."
      },
      {
        title: "Iterate & Improve",
        description: "Iterate based on data and continuously improve conversion."
      }
    ],
    faqs: [
      {
        question: "What makes a proposal site convert?",
        answer: "Proposal sites convert when they clearly communicate value, have clear CTAs, optimize user experience, and guide visitors toward taking action."
      },
      {
        question: "What conversion elements matter most?",
        answer: "Clear value propositions, strategic CTAs, mobile optimization, fast load times, and trust signals matter most for conversion."
      },
      {
        question: "How do I improve conversion?",
        answer: "Improve conversion by optimizing user experience, testing CTAs, improving mobile experience, and removing conversion barriers."
      },
      {
        question: "What's a good conversion rate?",
        answer: "Conversion rates vary by industry, but 2-5% is typical. We optimize to improve conversion rates over time."
      },
      {
        question: "How long does conversion optimization take?",
        answer: "Initial improvements can show results in 2-4 weeks. Full optimization is an ongoing process that compounds over time."
      }
    ],
    relatedSlugs: ["proposal-site-that-closes", "conversion-rate-optimization", "landing-page-factory"],
    primaryCtaText: "Optimize My Site",
    primaryCtaHref: "/about"
  }
];

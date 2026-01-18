export interface FAQ {
  question: string;
  answer: string;
  tags: string[]; // For filtering by service, industry, location, etc.
}

export const faqPool: FAQ[] = [
  {
    question: "How long does it take to see results?",
    answer: "Initial improvements can show in 2-4 weeks. Full results typically take 3-6 months as systems mature and authority builds.",
    tags: ["general", "timeline"],
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes. We work with businesses across multiple industries. Our approach adapts to your specific industry needs and challenges.",
    tags: ["general", "industry"],
  },
  {
    question: "What's your approach to pricing?",
    answer: "We offer transparent pricing based on scope and engagement model. Contact us for a custom quote tailored to your needs.",
    tags: ["general", "pricing"],
  },
  {
    question: "How do you ensure quality at scale?",
    answer: "We use strict quality rules, substantial unique content per page, and systematic processes that maintain quality while enabling scale.",
    tags: ["general", "quality", "scale"],
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We offer ongoing support packages to maintain and optimize systems over time.",
    tags: ["general", "support"],
  },
  {
    question: "What makes your approach different?",
    answer: "We're operator-first, not consultants. We build systems that survive contact with reality, not strategy theater.",
    tags: ["general", "approach"],
  },
  {
    question: "How important is local SEO?",
    answer: "Very. Most customers search locally, so local SEO is essential for visibility and lead generation.",
    tags: ["digital", "local-seo", "location"],
  },
  {
    question: "What is Answer Engine Optimization?",
    answer: "AEO is optimizing your content so AI-powered search engines can understand and recommend your business when users ask questions.",
    tags: ["digital", "aeo", "insights"],
  },
  {
    question: "What is programmatic SEO?",
    answer: "Programmatic SEO is creating many SEO-optimized pages at scale using templates and data, rather than manually writing each page.",
    tags: ["digital", "pseo", "insights"],
  },
  {
    question: "How do you avoid thin content?",
    answer: "We use strict quality rules, substantial unique content per page, and ensure each page provides real value to users.",
    tags: ["digital", "pseo", "quality"],
  },
  {
    question: "What industries do you serve?",
    answer: "We serve multiple industries including private equity, oil & gas, construction, medspa, law firms, dental, home services, B2B SaaS, and more.",
    tags: ["general", "industry"],
  },
  {
    question: "What locations do you serve?",
    answer: "We serve businesses across Texas and Arizona, with focus areas in Houston, Dallas, Austin, Phoenix, and surrounding areas.",
    tags: ["general", "location"],
  },
];

export function getFAQsForCombo(
  service?: string,
  industry?: string,
  location?: string,
  count: number = 3
): FAQ[] {
  const filtered = faqPool.filter((faq) => {
    if (service && faq.tags.includes(service)) return true;
    if (industry && faq.tags.includes(industry)) return true;
    if (location && faq.tags.includes(location)) return true;
    if (faq.tags.includes("general")) return true;
    return false;
  });

  // Return up to count FAQs, prioritizing more specific matches
  return filtered.slice(0, count);
}

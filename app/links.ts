// FILE: app/links.ts
// Single source of truth for site navigation + legacy redirects.
// Keep this boring and explicit.

export const LINKS = {
  home: "/",
  about: "/about",
  howWeWork: "/how-we-work",
  whatWeBuild: "/what-we-build",
  caseWork: "/case-work",
  pricing: "/pricing",
  contact: "/contact",

  // Inbound engine hubs
  services: "/services",
  locations: "/locations",
  industries: "/industries",
  solutions: "/solutions",
  templates: "/templates",
  insights: "/insights",
  glossary: "/glossary",
  compare: "/compare",

  // JourdanLabs (current + future)
  jourdanlabs: "/jourdanlabs",
  labs: "/jourdanlabs/labs",
  caseStudies: "/jourdanlabs/case-studies",
  apps: "/jourdanlabs/apps",
} as const;

// Legacy / broken paths -> new paths
export const REDIRECTS: Record<string, string> = {
  "/jourdan-labs": "/jourdanlabs",
  "/labs": "/jourdanlabs/labs",
  "/projects": "/jourdanlabs/labs",
  "/case-studies": "/jourdanlabs/case-studies",
  "/portfolio": "/jourdanlabs",
  "/work": "/case-work",
};

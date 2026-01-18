export interface Industry {
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

export const industries: Industry[] = [
  {
    slug: "private-equity",
    title: "Private Equity Digital Growth | C&L Strategy",
    description: "Digital growth strategies for private equity portfolio companies. SEO, conversion optimization, and scalable marketing systems.",
    h1: "Private Equity Digital Growth",
    heroSubtitle: "Scalable digital systems for portfolio companies that drive value.",
    problemBullets: [
      "Portfolio companies lack digital infrastructure",
      "No systematic approach to digital growth",
      "Marketing spend doesn't scale efficiently",
      "Digital capabilities vary across portfolio",
      "Need to drive value through digital"
    ],
    solutionBullets: [
      "Scalable digital growth systems",
      "SEO and conversion optimization",
      "Marketing automation and infrastructure",
      "Portfolio-wide digital strategy",
      "Value-driven digital initiatives"
    ],
    deliverables: [
      "Digital growth audit and strategy",
      "SEO foundation and optimization",
      "Conversion rate optimization",
      "Marketing automation setup",
      "Analytics and attribution",
      "Content and lead generation systems",
      "Portfolio company training",
      "Ongoing digital support",
      "Value creation reporting",
      "Exit readiness preparation"
    ],
    processSteps: [
      {
        title: "Audit & Strategy",
        description: "We audit digital capabilities across portfolio companies and create growth strategies."
      },
      {
        title: "Build & Optimize",
        description: "We build digital infrastructure and optimize for growth and conversion."
      },
      {
        title: "Scale & Automate",
        description: "We scale systems and automate marketing processes for efficiency."
      },
      {
        title: "Measure & Optimize",
        description: "We measure impact, optimize performance, and drive value creation."
      }
    ],
    faqs: [
      {
        question: "How do you work with portfolio companies?",
        answer: "We work directly with portfolio companies to build digital systems, providing both strategy and execution."
      },
      {
        question: "Can you scale across multiple companies?",
        answer: "Yes. We build scalable systems and processes that can be applied across portfolio companies efficiently."
      },
      {
        question: "How do you measure value creation?",
        answer: "We track digital metrics that drive business value: leads, revenue, customer acquisition cost, and lifetime value."
      },
      {
        question: "What's the typical engagement?",
        answer: "Engagements vary, but typically 6-12 months to build systems, with ongoing support as needed."
      }
    ],
    relatedSlugs: ["oil-and-gas-services", "b2b-saas", "wealth-management"],
    primaryCtaText: "Discuss PE Digital Growth",
    primaryCtaHref: "/about"
  },
  {
    slug: "oil-and-gas-services",
    title: "Oil & Gas Services Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for oil and gas service companies. Industrial B2B marketing that drives qualified leads.",
    h1: "Oil & Gas Services Digital Marketing",
    heroSubtitle: "Digital systems built for industrial B2B, not consumer marketing.",
    problemBullets: [
      "Traditional marketing doesn't work for industrial B2B",
      "No digital presence or weak online visibility",
      "Competitors rank higher in search",
      "Lead generation is inconsistent",
      "Digital marketing feels like a mismatch"
    ],
    solutionBullets: [
      "Industrial B2B digital strategy",
      "Technical SEO for industrial keywords",
      "Content that speaks to operators",
      "Lead generation systems",
      "Marketing that matches your industry"
    ],
    deliverables: [
      "Industrial digital strategy",
      "SEO optimization for industrial keywords",
      "Technical content creation",
      "Lead generation system",
      "Case study and project showcases",
      "Industry-specific landing pages",
      "Analytics and lead tracking",
      "Ongoing digital support"
    ],
    processSteps: [
      {
        title: "Understand & Strategy",
        description: "We understand your services, customers, and create a digital strategy that fits."
      },
      {
        title: "Build & Optimize",
        description: "We build digital presence, optimize for industrial search, and create content."
      },
      {
        title: "Generate & Convert",
        description: "We generate leads through SEO, content, and conversion optimization."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "Does digital marketing work for oil and gas?",
        answer: "Yes. Operators research services online, and digital marketing can drive qualified leads when done right."
      },
      {
        question: "What types of content work?",
        answer: "Technical content, case studies, project showcases, and content that demonstrates expertise work well."
      },
      {
        question: "How long until I see results?",
        answer: "Initial improvements can show in 2-3 months. Full results typically take 6-12 months as content ranks."
      },
      {
        question: "Do you understand our industry?",
        answer: "Yes. We work with industrial B2B companies and understand the unique challenges of oil and gas services."
      }
    ],
    relatedSlugs: ["energy-logistics", "construction-services", "logistics-and-transport"],
    primaryCtaText: "Discuss O&G Digital Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "energy-logistics",
    title: "Energy Logistics Digital Growth | C&L Strategy",
    description: "Digital marketing and operations systems for energy logistics companies. B2B marketing and operational efficiency.",
    h1: "Energy Logistics Digital Growth",
    heroSubtitle: "Digital systems for energy logistics that drive growth and efficiency.",
    problemBullets: [
      "Complex operations need better systems",
      "Digital marketing doesn't fit logistics",
      "No visibility into operations",
      "Lead generation is ad-hoc",
      "Operations and marketing are disconnected"
    ],
    solutionBullets: [
      "Operations dashboards and systems",
      "B2B digital marketing strategy",
      "Lead generation for logistics",
      "Operational visibility and control",
      "Integrated operations and marketing"
    ],
    deliverables: [
      "Operations dashboard and reporting",
      "Digital marketing strategy",
      "SEO and content for logistics",
      "Lead generation system",
      "CRM and intake automation",
      "Analytics and tracking",
      "Ongoing support"
    ],
    processSteps: [
      {
        title: "Audit & Strategy",
        description: "We audit operations and marketing, identify opportunities, and create strategies."
      },
      {
        title: "Build & Integrate",
        description: "We build systems, integrate operations and marketing, and optimize processes."
      },
      {
        title: "Generate & Optimize",
        description: "We generate leads and optimize operations based on data."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain operations over time."
      }
    ],
    faqs: [
      {
        question: "Do you work with logistics operations?",
        answer: "Yes. We build operational systems, dashboards, and processes for logistics companies."
      },
      {
        question: "How does digital marketing work for logistics?",
        answer: "B2B digital marketing for logistics focuses on SEO, content, and lead generation that speaks to logistics buyers."
      },
      {
        question: "What operations systems do you build?",
        answer: "We build dashboards, reporting, CRM automation, and systems that improve operational visibility and efficiency."
      }
    ],
    relatedSlugs: ["oil-and-gas-services", "logistics-and-transport", "construction-services"],
    primaryCtaText: "Discuss Energy Logistics",
    primaryCtaHref: "/about"
  },
  {
    slug: "construction-services",
    title: "Construction Services Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for construction companies. Local search, lead generation, and conversion optimization.",
    h1: "Construction Services Digital Marketing",
    heroSubtitle: "Digital systems built for construction, not generic marketing.",
    problemBullets: [
      "No digital presence or weak online visibility",
      "Competitors rank higher for local searches",
      "Lead generation is inconsistent",
      "No system for capturing local demand",
      "Digital marketing doesn't fit construction"
    ],
    solutionBullets: [
      "Local SEO and search domination",
      "Construction-specific content",
      "Lead generation systems",
      "Conversion-optimized site",
      "Marketing that matches construction"
    ],
    deliverables: [
      "Local SEO strategy and optimization",
      "Construction content creation",
      "Lead generation system",
      "Project showcase pages",
      "Service and location pages",
      "Google Business Profile optimization",
      "Review generation system",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build the foundation for local search visibility."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for local search and create construction-specific content."
      },
      {
        title: "Generate & Convert",
        description: "We generate leads through local SEO and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "Does digital marketing work for construction?",
        answer: "Yes. Homeowners and businesses research contractors online, and local SEO can drive qualified leads."
      },
      {
        question: "How important is local SEO?",
        answer: "Very. Most construction searches are local ('contractor near me'), so local SEO is essential."
      },
      {
        question: "What types of content work?",
        answer: "Project showcases, service pages, location pages, and content that demonstrates expertise work well."
      }
    ],
    relatedSlugs: ["real-estate-development", "home-services", "commercial-services"],
    primaryCtaText: "Discuss Construction Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "medspa",
    title: "MedSpa Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for medical spas. Local search, conversion optimization, and patient acquisition.",
    h1: "MedSpa Digital Marketing",
    heroSubtitle: "Digital systems that attract and convert aesthetic patients.",
    problemBullets: [
      "Competition for patients is intense",
      "No clear digital strategy",
      "Not ranking for local searches",
      "Website doesn't convert visitors",
      "Patient acquisition is expensive"
    ],
    solutionBullets: [
      "Local SEO for aesthetic services",
      "Conversion-optimized website",
      "Review generation and reputation",
      "Patient acquisition systems",
      "Marketing that builds trust"
    ],
    deliverables: [
      "Local SEO strategy",
      "Conversion-optimized site",
      "Service and location pages",
      "Review generation system",
      "Before/after galleries",
      "Patient education content",
      "Google Business Profile optimization",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build the foundation for patient acquisition."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for local search and create patient-focused content."
      },
      {
        title: "Generate & Convert",
        description: "We generate patient leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How important is local SEO for medspas?",
        answer: "Very. Most patients search locally for aesthetic services, so local SEO is essential."
      },
      {
        question: "What types of content work?",
        answer: "Before/after galleries, service pages, patient education, and content that builds trust work well."
      },
      {
        question: "How do reviews help?",
        answer: "Reviews are critical for medspas. We help generate reviews and manage reputation."
      }
    ],
    relatedSlugs: ["dental", "home-services", "law-firm"],
    primaryCtaText: "Discuss MedSpa Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "law-firm",
    title: "Law Firm Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for law firms. Local search, conversion optimization, and client acquisition.",
    h1: "Law Firm Digital Marketing",
    heroSubtitle: "Digital systems that attract and convert legal clients.",
    problemBullets: [
      "Intense competition for clients",
      "No clear digital strategy",
      "Not ranking for local searches",
      "Website doesn't convert visitors",
      "Client acquisition is expensive"
    ],
    solutionBullets: [
      "Local SEO for legal services",
      "Conversion-optimized website",
      "Review generation and reputation",
      "Client acquisition systems",
      "Marketing that builds trust"
    ],
    deliverables: [
      "Local SEO strategy",
      "Conversion-optimized site",
      "Practice area pages",
      "Location pages",
      "Review generation system",
      "Attorney bio pages",
      "Case result showcases",
      "Google Business Profile optimization"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build the foundation for client acquisition."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for local search and create client-focused content."
      },
      {
        title: "Generate & Convert",
        description: "We generate client leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How important is local SEO for law firms?",
        answer: "Very. Most clients search locally for legal services, so local SEO is essential."
      },
      {
        question: "What practice areas should I focus on?",
        answer: "Focus on your core practice areas and create dedicated pages for each."
      },
      {
        question: "How do reviews help?",
        answer: "Reviews are critical for law firms. We help generate reviews and manage reputation."
      }
    ],
    relatedSlugs: ["dental", "medspa", "wealth-management"],
    primaryCtaText: "Discuss Law Firm Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "dental",
    title: "Dental Practice Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for dental practices. Local search, patient acquisition, and conversion optimization.",
    h1: "Dental Practice Digital Marketing",
    heroSubtitle: "Digital systems that attract and convert dental patients.",
    problemBullets: [
      "Competition for patients is intense",
      "No clear digital strategy",
      "Not ranking for local searches",
      "Website doesn't convert visitors",
      "Patient acquisition is expensive"
    ],
    solutionBullets: [
      "Local SEO for dental services",
      "Conversion-optimized website",
      "Review generation and reputation",
      "Patient acquisition systems",
      "Marketing that builds trust"
    ],
    deliverables: [
      "Local SEO strategy",
      "Conversion-optimized site",
      "Service pages",
      "Location pages",
      "Review generation system",
      "Patient education content",
      "Google Business Profile optimization",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build the foundation for patient acquisition."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for local search and create patient-focused content."
      },
      {
        title: "Generate & Convert",
        description: "We generate patient leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How important is local SEO for dental practices?",
        answer: "Very. Most patients search locally for dental services, so local SEO is essential."
      },
      {
        question: "What types of content work?",
        answer: "Service pages, patient education, before/after galleries, and content that builds trust work well."
      },
      {
        question: "How do reviews help?",
        answer: "Reviews are critical for dental practices. We help generate reviews and manage reputation."
      }
    ],
    relatedSlugs: ["medspa", "home-services", "law-firm"],
    primaryCtaText: "Discuss Dental Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "home-services",
    title: "Home Services Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for home service companies. Local search, lead generation, and conversion optimization.",
    h1: "Home Services Digital Marketing",
    heroSubtitle: "Digital systems that attract and convert home service customers.",
    problemBullets: [
      "Intense competition for customers",
      "No clear digital strategy",
      "Not ranking for local searches",
      "Website doesn't convert visitors",
      "Customer acquisition is expensive"
    ],
    solutionBullets: [
      "Local SEO for home services",
      "Conversion-optimized website",
      "Review generation and reputation",
      "Customer acquisition systems",
      "Marketing that builds trust"
    ],
    deliverables: [
      "Local SEO strategy",
      "Conversion-optimized site",
      "Service pages",
      "Location pages",
      "Review generation system",
      "Google Business Profile optimization",
      "Emergency service pages",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build the foundation for customer acquisition."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for local search and create customer-focused content."
      },
      {
        title: "Generate & Convert",
        description: "We generate customer leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How important is local SEO for home services?",
        answer: "Very. Most customers search locally for home services, so local SEO is essential."
      },
      {
        question: "What types of content work?",
        answer: "Service pages, location pages, emergency service pages, and content that builds trust work well."
      },
      {
        question: "How do reviews help?",
        answer: "Reviews are critical for home services. We help generate reviews and manage reputation."
      }
    ],
    relatedSlugs: ["construction-services", "commercial-services", "dental"],
    primaryCtaText: "Discuss Home Services Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "commercial-services",
    title: "Commercial Services Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for commercial service companies. B2B marketing, lead generation, and conversion optimization.",
    h1: "Commercial Services Digital Marketing",
    heroSubtitle: "Digital systems built for commercial B2B, not consumer marketing.",
    problemBullets: [
      "B2B marketing is different from B2C",
      "No clear digital strategy",
      "Not ranking for commercial searches",
      "Website doesn't convert visitors",
      "Lead generation is inconsistent"
    ],
    solutionBullets: [
      "B2B digital marketing strategy",
      "Commercial SEO optimization",
      "Lead generation systems",
      "Conversion-optimized site",
      "Marketing that matches commercial B2B"
    ],
    deliverables: [
      "B2B digital strategy",
      "Commercial SEO optimization",
      "Service and industry pages",
      "Case study pages",
      "Lead generation system",
      "Analytics and tracking",
      "Ongoing support"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a B2B digital strategy and build the foundation for lead generation."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for commercial search and create B2B-focused content."
      },
      {
        title: "Generate & Convert",
        description: "We generate commercial leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How is B2B marketing different?",
        answer: "B2B marketing focuses on decision-makers, longer sales cycles, and content that demonstrates expertise."
      },
      {
        question: "What types of content work?",
        answer: "Case studies, service pages, industry pages, and content that demonstrates expertise work well."
      },
      {
        question: "How long are B2B sales cycles?",
        answer: "B2B sales cycles vary, but digital marketing supports the entire journey from awareness to decision."
      }
    ],
    relatedSlugs: ["construction-services", "b2b-saas", "logistics-and-transport"],
    primaryCtaText: "Discuss Commercial Services",
    primaryCtaHref: "/about"
  },
  {
    slug: "b2b-saas",
    title: "B2B SaaS Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for B2B SaaS companies. Product-led growth, content marketing, and conversion optimization.",
    h1: "B2B SaaS Digital Marketing",
    heroSubtitle: "Digital systems that drive B2B SaaS growth systematically.",
    problemBullets: [
      "Growth is inconsistent",
      "No clear digital strategy",
      "Content marketing isn't working",
      "Website doesn't convert visitors",
      "Customer acquisition cost is high"
    ],
    solutionBullets: [
      "B2B SaaS growth strategy",
      "Content marketing that works",
      "Product-led growth systems",
      "Conversion optimization",
      "Marketing that scales"
    ],
    deliverables: [
      "B2B SaaS growth strategy",
      "Content marketing system",
      "SEO optimization",
      "Conversion-optimized site",
      "Landing page system",
      "Analytics and attribution",
      "Ongoing support"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a B2B SaaS growth strategy and build the foundation."
      },
      {
        title: "Content & SEO",
        description: "We create content and optimize for B2B SaaS search."
      },
      {
        title: "Convert & Scale",
        description: "We optimize conversion and scale marketing systems."
      },
      {
        title: "Measure & Optimize",
        description: "We measure performance and continuously optimize."
      }
    ],
    faqs: [
      {
        question: "What makes B2B SaaS marketing different?",
        answer: "B2B SaaS focuses on product-led growth, content marketing, and conversion optimization for longer sales cycles."
      },
      {
        question: "What types of content work?",
        answer: "Product guides, comparison pages, alternatives pages, and content that helps buyers evaluate work well."
      },
      {
        question: "How important is SEO for SaaS?",
        answer: "Very. SEO drives organic growth and reduces customer acquisition cost for B2B SaaS companies."
      }
    ],
    relatedSlugs: ["commercial-services", "private-equity", "wealth-management"],
    primaryCtaText: "Discuss B2B SaaS Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "automotive-dealers",
    title: "Automotive Dealers Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for automotive dealers. Local search, inventory optimization, and customer acquisition.",
    h1: "Automotive Dealers Digital Marketing",
    heroSubtitle: "Digital systems that drive automotive dealer growth.",
    problemBullets: [
      "Intense competition for customers",
      "No clear digital strategy",
      "Not ranking for local searches",
      "Website doesn't convert visitors",
      "Customer acquisition is expensive"
    ],
    solutionBullets: [
      "Local SEO for automotive",
      "Inventory optimization",
      "Conversion-optimized site",
      "Review generation and reputation",
      "Customer acquisition systems"
    ],
    deliverables: [
      "Local SEO strategy",
      "Conversion-optimized site",
      "Inventory page optimization",
      "Service and parts pages",
      "Review generation system",
      "Google Business Profile optimization",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build the foundation for customer acquisition."
      },
      {
        title: "Optimize & Create",
        description: "We optimize for local search and create automotive-focused content."
      },
      {
        title: "Generate & Convert",
        description: "We generate customer leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How important is local SEO for dealers?",
        answer: "Very. Most customers search locally for automotive dealers, so local SEO is essential."
      },
      {
        question: "What about inventory pages?",
        answer: "We optimize inventory pages for SEO and conversion, helping customers find vehicles."
      },
      {
        question: "How do reviews help?",
        answer: "Reviews are critical for automotive dealers. We help generate reviews and manage reputation."
      }
    ],
    relatedSlugs: ["home-services", "commercial-services", "real-estate-development"],
    primaryCtaText: "Discuss Automotive Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "real-estate-development",
    title: "Real Estate Development Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for real estate developers. Project marketing, lead generation, and conversion optimization.",
    h1: "Real Estate Development Digital Marketing",
    heroSubtitle: "Digital systems that showcase projects and generate leads.",
    problemBullets: [
      "Projects need better visibility",
      "No clear digital strategy",
      "Website doesn't showcase projects well",
      "Lead generation is inconsistent",
      "Marketing doesn't match development"
    ],
    solutionBullets: [
      "Project showcase websites",
      "SEO for real estate",
      "Lead generation systems",
      "Conversion optimization",
      "Marketing that showcases projects"
    ],
    deliverables: [
      "Project showcase site",
      "SEO optimization",
      "Project pages",
      "Location pages",
      "Lead generation system",
      "Virtual tour integration",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a digital strategy and build project showcase sites."
      },
      {
        title: "Showcase & Optimize",
        description: "We showcase projects and optimize for search and conversion."
      },
      {
        title: "Generate & Convert",
        description: "We generate leads and convert them through optimized pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "What makes real estate marketing different?",
        answer: "Real estate marketing focuses on showcasing projects, location, and generating qualified leads."
      },
      {
        question: "What types of content work?",
        answer: "Project pages, location pages, virtual tours, and content that showcases projects work well."
      },
      {
        question: "How important is local SEO?",
        answer: "Very. Most buyers search locally for real estate, so local SEO is essential."
      }
    ],
    relatedSlugs: ["construction-services", "home-services", "commercial-services"],
    primaryCtaText: "Discuss Real Estate Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "logistics-and-transport",
    title: "Logistics & Transport Digital Marketing | C&L Strategy",
    description: "Digital marketing and operations for logistics companies. B2B marketing, operational systems, and lead generation.",
    h1: "Logistics & Transport Digital Marketing",
    heroSubtitle: "Digital systems for logistics that drive growth and efficiency.",
    problemBullets: [
      "B2B marketing doesn't fit logistics",
      "No clear digital strategy",
      "Operations need better systems",
      "Lead generation is ad-hoc",
      "Operations and marketing are disconnected"
    ],
    solutionBullets: [
      "B2B logistics marketing strategy",
      "Operations dashboards and systems",
      "Lead generation for logistics",
      "Operational visibility",
      "Integrated systems"
    ],
    deliverables: [
      "B2B marketing strategy",
      "Operations dashboard",
      "SEO and content",
      "Lead generation system",
      "CRM automation",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Audit & Strategy",
        description: "We audit operations and marketing, identify opportunities, and create strategies."
      },
      {
        title: "Build & Integrate",
        description: "We build systems, integrate operations and marketing, and optimize processes."
      },
      {
        title: "Generate & Optimize",
        description: "We generate leads and optimize operations based on data."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain operations over time."
      }
    ],
    faqs: [
      {
        question: "Do you work with logistics operations?",
        answer: "Yes. We build operational systems, dashboards, and processes for logistics companies."
      },
      {
        question: "How does digital marketing work for logistics?",
        answer: "B2B digital marketing for logistics focuses on SEO, content, and lead generation that speaks to logistics buyers."
      }
    ],
    relatedSlugs: ["energy-logistics", "commercial-services", "oil-and-gas-services"],
    primaryCtaText: "Discuss Logistics Marketing",
    primaryCtaHref: "/about"
  },
  {
    slug: "wealth-management",
    title: "Wealth Management Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for wealth management firms. Trust-building, lead generation, and conversion optimization.",
    h1: "Wealth Management Digital Marketing",
    heroSubtitle: "Digital systems that build trust and attract high-net-worth clients.",
    problemBullets: [
      "Trust is critical but hard to build online",
      "No clear digital strategy",
      "Website doesn't build credibility",
      "Lead generation is inconsistent",
      "Marketing doesn't match wealth management"
    ],
    solutionBullets: [
      "Trust-building digital strategy",
      "Credibility-focused website",
      "Lead generation systems",
      "Conversion optimization",
      "Marketing that builds trust"
    ],
    deliverables: [
      "Trust-building strategy",
      "Credibility-focused site",
      "Advisor bio pages",
      "Service pages",
      "Thought leadership content",
      "Lead generation system",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a trust-building strategy and build credibility-focused sites."
      },
      {
        title: "Build & Optimize",
        description: "We build sites and optimize for trust and conversion."
      },
      {
        title: "Generate & Convert",
        description: "We generate leads and convert them through trust-building pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How do you build trust online?",
        answer: "We build trust through credibility-focused design, advisor bios, thought leadership, and transparent communication."
      },
      {
        question: "What types of content work?",
        answer: "Thought leadership, service pages, advisor bios, and content that demonstrates expertise work well."
      },
      {
        question: "How important is local SEO?",
        answer: "Very. Most clients search locally for wealth management, so local SEO is essential."
      }
    ],
    relatedSlugs: ["law-firm", "private-equity", "b2b-saas"],
    primaryCtaText: "Discuss Wealth Management",
    primaryCtaHref: "/about"
  },
  {
    slug: "concierge-and-personal-brand",
    title: "Concierge & Personal Brand Digital Marketing | C&L Strategy",
    description: "Digital marketing and SEO for concierge services and personal brands. High-touch service marketing and brand building.",
    h1: "Concierge & Personal Brand Digital Marketing",
    heroSubtitle: "Digital systems for high-touch services and personal brands.",
    problemBullets: [
      "High-touch services need personal marketing",
      "No clear digital strategy",
      "Personal brand isn't visible online",
      "Website doesn't reflect service quality",
      "Marketing doesn't match concierge service"
    ],
    solutionBullets: [
      "Personal brand strategy",
      "High-touch service marketing",
      "Credibility-focused website",
      "Lead generation systems",
      "Marketing that matches service"
    ],
    deliverables: [
      "Personal brand strategy",
      "Credibility-focused site",
      "Service pages",
      "Testimonial pages",
      "Lead generation system",
      "Analytics and tracking"
    ],
    processSteps: [
      {
        title: "Strategy & Foundation",
        description: "We create a personal brand strategy and build credibility-focused sites."
      },
      {
        title: "Build & Optimize",
        description: "We build sites and optimize for personal brand and conversion."
      },
      {
        title: "Generate & Convert",
        description: "We generate leads and convert them through personal brand pages."
      },
      {
        title: "Scale & Maintain",
        description: "We scale systems and maintain digital presence over time."
      }
    ],
    faqs: [
      {
        question: "How do you market personal brands?",
        answer: "We market personal brands through credibility-focused design, personal stories, testimonials, and authentic communication."
      },
      {
        question: "What types of content work?",
        answer: "Personal stories, service pages, testimonials, and content that demonstrates personal expertise work well."
      },
      {
        question: "How important is local SEO?",
        answer: "Very. Most concierge clients search locally, so local SEO is essential."
      }
    ],
    relatedSlugs: ["wealth-management", "law-firm", "home-services"],
    primaryCtaText: "Discuss Concierge Marketing",
    primaryCtaHref: "/about"
  }
];

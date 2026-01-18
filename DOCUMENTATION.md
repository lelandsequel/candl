# C&L Strategy Website — Technical Documentation

## Overview

This is a conversion-first, inbound-focused website with a scalable pSEO (Programmatic SEO) engine built on:

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

The site is designed for operator-led consulting and systems design, featuring both human-facing pages and a programmatic SEO engine generating hundreds of indexable pages.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Directory Structure](#directory-structure)
3. [Route Map](#route-map)
4. [Content System](#content-system)
5. [Components](#components)
6. [SEO Implementation](#seo-implementation)
7. [Build Process](#build-process)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Core Principles

1. **Static Generation First**: All pSEO pages are statically generated at build time
2. **Content-Driven**: Pages are generated from TypeScript data modules
3. **SEO-Optimized**: Every page has metadata, canonicals, and JSON-LD schema
4. **Conversion-Focused**: Universal CTA blocks and clear conversion paths

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## Directory Structure

```
CandL 2.0/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── links.ts                  # Navigation links & redirects
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt configuration
│   │
│   ├── about/                    # Core pages
│   ├── digital/
│   ├── fractional/
│   ├── construction/
│   ├── how-we-work/
│   ├── what-we-build/
│   ├── case-work/
│   │   └── chevron-lift/
│   ├── contact/
│   ├── pricing/
│   ├── jourdanlabs/
│   │
│   ├── solutions/                # pSEO hubs
│   │   ├── page.tsx              # Index page
│   │   └── [slug]/               # Dynamic routes
│   │       ├── page.tsx
│   │       └── not-found.tsx
│   ├── industries/
│   ├── locations/
│   ├── insights/
│   ├── templates/
│   ├── compare/
│   ├── glossary/
│   │
│   └── services/                 # Cluster pages
│       └── [service]/
│           └── [location]/
│               └── page.tsx
│
├── components/
│   ├── Navigation.tsx            # Main navigation (client component)
│   ├── Footer.tsx                # Site footer
│   ├── site/                     # Reusable site components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── CtaBlock.tsx
│   │   ├── FAQ.tsx
│   │   ├── JsonLd.tsx
│   │   ├── RelatedLinks.tsx
│   │   └── Section.tsx
│   ├── ui/
│   │   └── design-system.tsx     # Core UI primitives
│   └── mocks/
│       └── SchedulingCockpit.tsx
│
├── content/                      # Content data modules
│   ├── solutions.ts              # 31 solution pages
│   ├── industries.ts             # 15 industry pages
│   ├── locations.ts              # 20 location pages
│   ├── insights.ts               # 11 insight pages
│   ├── templates.ts              # 10 template pages
│   ├── compare.ts                # 5 comparison pages
│   ├── glossary.ts               # 10 glossary terms
│   ├── services.ts               # Service definitions
│   ├── faqs.ts                   # Shared FAQ pool
│   └── generated/                # Auto-generated cluster content
│       ├── service_location.ts
│       ├── service_industry.ts
│       └── service_industry_location.ts
│
├── scripts/
│   ├── generate-clusters.ts      # Cluster page generator
│   └── validate-content.ts       # Content validation
│
├── public/                       # Static assets
│   ├── logo-new.png
│   ├── oilfield-painting.jpg
│   ├── oilfield-magic-hour.png
│   ├── oilfield-blueprint.png
│   ├── digital-bg.png
│   ├── data-center.png
│   ├── construction.png
│   ├── blueprint-bg.png
│   └── digital-consulting-abstract.png
│
├── middleware.ts                 # Legacy redirect handling
├── package.json
├── vercel.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Route Map

### Core Pages (Human-Facing)

| Route | Description | Hero Image |
|-------|-------------|------------|
| `/` | Homepage | oilfield-painting.jpg |
| `/about` | About page with team bios | oilfield-magic-hour.png |
| `/digital` | Digital Systems service | digital-bg.png |
| `/fractional` | Fractional Ops service | data-center.png |
| `/construction` | Construction Ops service | construction.png |
| `/how-we-work` | Process explanation | oilfield-blueprint.png |
| `/what-we-build` | Capabilities overview | data-center.png |
| `/case-work` | Case studies index | blueprint-bg.png |
| `/case-work/chevron-lift` | Featured case study | — |
| `/contact` | Contact form | — |
| `/pricing` | Pricing page | — |
| `/jourdanlabs` | Labs hub | — |

### pSEO Hub Pages

| Route | Content Source | Count |
|-------|---------------|-------|
| `/solutions` | content/solutions.ts | 31 pages |
| `/industries` | content/industries.ts | 15 pages |
| `/locations` | content/locations.ts | 20 pages |
| `/insights` | content/insights.ts | 11 pages |
| `/templates` | content/templates.ts | 10 pages |
| `/compare` | content/compare.ts | 5 pages |
| `/glossary` | content/glossary.ts | 10 pages |

### Cluster Pages (Generated)

| Route Pattern | Example | Count |
|---------------|---------|-------|
| `/services/[service]/[location]` | /services/digital/houston-tx | 41 |
| `/services/[service]/[industry]` | /services/fractional/private-equity | 24 |
| `/services/[service]/[industry]/[location]` | /services/digital/medspa/scottsdale-az | 139 |

**Total Generated Cluster Pages: 204**

### Legacy Redirects (middleware.ts)

| Old Path | New Path |
|----------|----------|
| `/jourdan-labs` | `/jourdanlabs` |
| `/labs` | `/jourdanlabs/labs` |
| `/projects` | `/jourdanlabs/labs` |
| `/case-studies` | `/jourdanlabs/case-studies` |
| `/portfolio` | `/jourdanlabs` |
| `/work` | `/case-work` |

---

## Content System

### Data Module Structure

Each content type follows a consistent interface:

```typescript
export interface Solution {
  slug: string;                    // URL slug
  title: string;                   // Page title (SEO)
  description: string;             // Meta description
  h1: string;                      // Page heading
  heroSubtitle: string;            // Hero section subtitle
  problemBullets: string[];        // Problem section
  solutionBullets: string[];       // Solution section
  deliverables: string[];          // What you get
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];          // Internal linking
  primaryCtaText: string;
  primaryCtaHref: string;
}
```

### Content Files

| File | Interface | Export |
|------|-----------|--------|
| solutions.ts | Solution | `solutions` |
| industries.ts | Industry | `industries` |
| locations.ts | Location | `locations` |
| insights.ts | Insight | `insights` |
| templates.ts | Template | `templates` |
| compare.ts | Comparison | `comparisons` |
| glossary.ts | GlossaryTerm | `glossary` |
| services.ts | Service | `services` |
| faqs.ts | FAQ | `faqs`, `getFAQsForCombo()` |

### Generated Content

The `scripts/generate-clusters.ts` script generates cluster pages by combining:

- **Services** (digital, fractional, construction)
- **Industries** (15 industry verticals)
- **Locations** (20 geographic areas)

Output files:
- `content/generated/service_location.ts`
- `content/generated/service_industry.ts`
- `content/generated/service_industry_location.ts`

---

## Components

### Design System (`components/ui/design-system.tsx`)

| Component | Purpose |
|-----------|---------|
| `cn()` | Tailwind class merging utility |
| `Pill` | Tag/badge component |
| `SectionKicker` | Section label text |
| `Card` | Content card with bullets |
| `MiniStat` | Stat display card |
| `Divider` | Horizontal divider |
| `ImmersiveSection` | Full-height hero with background image |
| `GlowingBackground` | Decorative gradient background |
| `BlueprintBackground` | Blueprint-style background |

### Site Components (`components/site/`)

| Component | Purpose |
|-----------|---------|
| `Container` | Max-width content wrapper |
| `Section` | Consistent section padding |
| `Card` | Linked content card |
| `Button` | CTA button |
| `FAQ` | FAQ item display |
| `RelatedLinks` | Related content links |
| `CtaBlock` | Universal CTA section |
| `JsonLd` | JSON-LD schema injection |

### Navigation (`components/Navigation.tsx`)

- Client component (`"use client"`)
- Theme-aware (dark on homepage, light elsewhere)
- Two dropdowns: Services, Resources
- Mobile responsive with hamburger menu
- CSS visibility transitions for smooth dropdown hover

---

## SEO Implementation

### Metadata

Every page implements:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: "Page Title | C&L Strategy",
    description: "Meta description...",
    alternates: {
      canonical: `https://cl-strategy.com/path`,
    },
    openGraph: {
      title: "...",
      description: "...",
      type: "website",
      url: "...",
    },
  };
}
```

### JSON-LD Schema

| Schema Type | Pages |
|-------------|-------|
| Organization | Homepage |
| WebSite | Homepage |
| Service | Solutions, Industries, Locations, Cluster pages |
| FAQPage | Pages with FAQs |

### Sitemap (`app/sitemap.ts`)

Dynamically generates sitemap including:
- Core routes (priority 0.8-1.0)
- pSEO pages (priority 0.7-0.8)
- Cluster pages (priority 0.7-0.8)

### Robots (`app/robots.ts`)

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cl-strategy.com/sitemap.xml",
  };
}
```

---

## Build Process

### Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Development server |
| `gen` | `tsx scripts/generate-clusters.ts` | Generate cluster content |
| `validate` | `tsx scripts/validate-content.ts` | Validate content files |
| `prebuild` | `pnpm run gen && pnpm run validate` | Pre-build hooks |
| `build` | `next build` | Production build |
| `start` | `next start` | Production server |
| `lint` | `next lint` | Linting |

### Build Order

1. **prebuild**: Runs automatically before build
   - Generates cluster pages from content
   - Validates all content files
2. **build**: Next.js production build
   - Compiles TypeScript
   - Generates static pages
   - Creates optimized bundles

### Build Output

```
Route (app)
├ ○ /                           (Static)
├ ● /solutions/[slug]           (SSG - 31 paths)
├ ● /industries/[slug]          (SSG - 15 paths)
├ ● /locations/[slug]           (SSG - 20 paths)
├ ● /insights/[slug]            (SSG - 11 paths)
├ ● /templates/[slug]           (SSG - 10 paths)
├ ● /compare/[slug]             (SSG - 5 paths)
├ ● /glossary/[slug]            (SSG - 10 paths)
├ ● /services/[service]/[location] (SSG - 41 paths)
└ ... (165 total pages)
```

---

## Deployment

### Vercel Configuration (`vercel.json`)

```json
{
  "installCommand": "pnpm i",
  "buildCommand": "pnpm build",
  "framework": "nextjs"
}
```

### Environment

- **Package Manager**: pnpm (enforced via `packageManager` field)
- **Node Version**: Compatible with Next.js 16

### Deployment Checklist

1. ✅ All content files validated
2. ✅ Cluster pages generated
3. ✅ Build passes without errors
4. ✅ Sitemap includes all routes
5. ✅ No broken internal links

---

## Troubleshooting

### Common Issues

#### "Module not found" for generated files

**Cause**: Generated files don't exist before first build.

**Solution**: Placeholder files exist in `content/generated/` that export empty arrays. Run `pnpm run gen` to populate.

#### Navigation dropdown disappears on hover

**Cause**: Conditional rendering removes dropdown from DOM.

**Solution**: Use CSS visibility/opacity transitions instead of conditional rendering. Current implementation uses:

```typescript
className={cn(
  "...",
  isOpen ? "visible opacity-100" : "invisible opacity-0"
)}
```

#### Hero images not displaying

**Cause**: Incorrect background image path or missing file.

**Solution**:
1. Verify image exists in `/public/`
2. Use correct path in `ImmersiveSection` component
3. Check `overlayOpacity` isn't set too high (0.85-0.9 recommended)

#### Build fails with TypeScript error

**Cause**: Type mismatch in content files.

**Solution**: Run `pnpm run validate` to check content integrity. Common issues:
- Missing required fields
- Empty FAQs array
- Duplicate slugs

#### Middleware deprecation warning

**Note**: Next.js 16 shows warning about middleware convention. This is informational only and doesn't affect functionality.

---

## Page Counts Summary

| Category | Count |
|----------|-------|
| Core Pages | 12 |
| Solutions | 31 |
| Industries | 15 |
| Locations | 20 |
| Insights | 11 |
| Templates | 10 |
| Compare | 5 |
| Glossary | 10 |
| Service/Location Clusters | 41 |
| Service/Industry Clusters | 24 |
| Service/Industry/Location Clusters | 139 |
| **Total Indexable Pages** | **~318** |

---

## Smoke Test Routes

After deployment, verify these routes load correctly:

```
/
/about
/digital
/fractional
/construction
/how-we-work
/what-we-build
/case-work
/case-work/chevron-lift
/contact
/pricing
/jourdanlabs
/solutions
/solutions/seo-foundation-rebuild
/industries
/industries/private-equity
/locations
/locations/houston-tx
/insights
/insights/what-is-aeo
/templates
/templates/seo-fix-list-30-minutes
/compare
/compare/seo-vs-ppc
/glossary
/glossary/aeo
/services/digital/houston-tx
/sitemap.xml
/robots.txt
```

---

## Maintenance

### Adding New Content

1. Add entry to appropriate content file (e.g., `content/solutions.ts`)
2. Ensure all required fields are populated
3. Run `pnpm run validate` to verify
4. Build will automatically include new page

### Adding New Cluster Combinations

1. Update `content/services.ts` with new industry/location mappings
2. Run `pnpm run gen` to regenerate cluster pages
3. Verify sitemap includes new routes

### Updating Navigation

1. Edit `components/Navigation.tsx`
2. Update `app/links.ts` for new routes
3. Add redirects to `middleware.ts` if needed

---

*Last Updated: January 2026*

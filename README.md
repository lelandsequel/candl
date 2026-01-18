# C&L Strategy 2.0

Conversion-first website with an industrial-strength inbound engine.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Build Process

The build process automatically:
1. Generates cluster pages (`pnpm gen`)
2. Validates content (`pnpm validate`)
3. Builds Next.js app (`pnpm build`)

This happens automatically via the `prebuild` hook, so every deploy is deterministic.

## Smoke Test Routes

After deployment, verify these routes are accessible:

- `/sitemap.xml`
- `/robots.txt`
- `/services`
- `/locations`
- `/industries`
- `/solutions`
- `/templates`
- `/insights`
- `/glossary`
- `/compare`
- `/pricing`
- `/contact`
- `/services/[service]/[location]` (e.g., `/services/digital/houston-tx`)

## Scripts

- `pnpm dev` - Start development server
- `pnpm gen` - Generate cluster pages
- `pnpm validate` - Validate content files
- `pnpm build` - Build for production (runs gen + validate automatically)
- `pnpm start` - Start production server
- `pnpm lint` - Run linter

## Content Structure

- `content/services.ts` - Service definitions
- `content/industries.ts` - Industry pages
- `content/locations.ts` - Location pages
- `content/solutions.ts` - Solution pages
- `content/insights.ts` - Insight/blog pages
- `content/templates.ts` - Template/lead magnet pages
- `content/compare.ts` - Comparison pages
- `content/faqs.ts` - Shared FAQ pool
- `content/glossary.ts` - Glossary terms
- `content/generated/` - Auto-generated cluster pages (created by generator)

## Deployment

Deploys automatically run the generator and validator before building, ensuring all pSEO pages are created.

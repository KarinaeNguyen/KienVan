# Website Template Quick Scan

Date: 2026-01-26

## Quick Scan Summary
- Framework: Next.js 14 (App Router) with React 18 and Tailwind CSS.
- Structure: Home page plus auth and documentation pages; MDX/markdown content exists under markdown/blog but no visible route wiring.
- Styling: Tailwind + global CSS; component-driven layout in src/components.
- Auth: UI for sign-in/up and password flows; next-auth dependency present.

## Notable Observations
- Route set is small and clear; the home page composes reusable sections.
- Mixed branding strings in metadata (e.g., “eLearning”, “Property”, “Crypgo”), which may need alignment.
- Blog content exists but no app route currently discovered for it.
- API folder contains data.tsx but no route handlers detected under app/api (no route.ts).

## Sitemap (App Routes)
- /
- /documentation
- /signin
- /signup
- /404 (not-found page)

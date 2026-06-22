## Project Context

This repository is a Next.js official-site codebase. The current baseline uses:

- Next.js App Router from `src/app`
- Next.js `16.2.7`, React `19.2.7`, TypeScript `5`, strict mode
- Tailwind CSS v4 through `@tailwindcss/postcss`
- shadcn/ui configured for RSC, TSX, CSS variables, and lucide icons
- `npm` with `package-lock.json`; do not introduce another package manager lockfile

The active product work may replace the current homepage content with the Shanghai Zhuofan official website, but keep the existing framework conventions unless the user explicitly asks for a broader migration.

## Required Workflow

- Before changing any Next.js behavior, read the version-matched docs under `node_modules/next/dist/docs/`. Do not rely on older App Router, Pages Router, metadata, caching, or image behavior from memory.
- Pick the smallest relevant doc set for the task. Useful starting points:
  - Routing and structure: `01-app/01-getting-started/02-project-structure.md`
  - Layouts/pages: `01-app/01-getting-started/03-layouts-and-pages.md`
  - Server and Client Components: `01-app/01-getting-started/05-server-and-client-components.md`
  - Data fetching, caching, revalidation: `01-app/01-getting-started/06-fetching-data.md`, `08-caching.md`, `09-revalidating.md`
  - CSS and Tailwind: `01-app/01-getting-started/11-css.md`
  - Images: `01-app/01-getting-started/12-images.md`
  - Metadata, sitemap, robots, OG images: `01-app/01-getting-started/14-metadata-and-og-images.md`
  - Production checks: `01-app/02-guides/production-checklist.md`
- Inspect the current files before editing. Preserve user changes and avoid unrelated rewrites.
- Prefer focused edits that match the existing structure over broad refactors.

## Repository Structure

- `src/app/layout.tsx` is the root layout and owns global metadata, `<html lang="zh-CN">`, and the import of `globals.css`.
- `src/app/page.tsx` should stay thin and delegate page composition to feature/site components.
- `src/components/site/` contains website sections and page composition.
- `src/components/ui/` contains reusable UI primitives, including shadcn-style components.
- `src/content/` contains structured copy/content data for the site.
- `src/lib/` contains shared utilities such as `cn`.
- `public/` contains static assets served from `/`.
- `tests/` contains Node test-runner tests.

Use the `@/*` TypeScript path alias for imports from `src` when it improves clarity.

## Next.js App Router Rules

- Use App Router conventions in `src/app`. Do not add a `pages/` directory unless the user explicitly requests a Pages Router migration.
- A route is public only when a segment contains `page.tsx` or `route.ts`; colocated files under `app` are not routable by themselves.
- Prefer Server Components by default. Add `"use client"` only to components that need state, event handlers, lifecycle hooks, browser APIs, custom client hooks, animations that require the browser, or third-party client-only components.
- Keep `"use client"` boundaries narrow. A client file pulls its imports and directly rendered components into the client bundle.
- Props passed from Server Components to Client Components must be serializable.
- Do not read secrets in Client Components. Use `NEXT_PUBLIC_` only for values that are intentionally exposed to browsers.
- Use `next/link` for internal navigation and `next/image` for optimized images when practical.
- For remote images, add precise `images.remotePatterns` in `next.config.ts`; do not allow broad host/path patterns.
- For SEO, prefer the Metadata API (`metadata` or `generateMetadata`) and file conventions such as `opengraph-image`, `robots`, and `sitemap` over manual `<head>` handling.

## Styling and UI

- Tailwind v4 is imported from `src/app/globals.css`; keep truly global styles there.
- Prefer Tailwind utilities and existing CSS custom properties for section styling.
- Use CSS Modules only for component-scoped styles that cannot be expressed cleanly with utilities or shared globals.
- Respect the shadcn/ui setup in `components.json`: TSX, RSC, CSS variables, `@/components/ui`, `@/lib/utils`, and lucide icons.
- For website pages, maintain responsive layouts, accessible focus states, readable Chinese typography, stable image dimensions, and reduced-motion support where animation is used.
- Avoid introducing new design systems, CSS-in-JS libraries, or icon sets without a clear need.

## Content and Asset Guidelines

- Keep official-site copy concise, factual, and appropriate for a public company website.
- For Chinese pages, use `zh-CN` language assumptions and polished Simplified Chinese copy.
- Store reusable structured copy in `src/content/` instead of scattering large text arrays across components.
- Put static images under `public/images/<project-or-brand>/` and reference them as `/images/...`.
- Every meaningful image needs useful `alt` text. Decorative images should be marked appropriately by the component.
- Avoid committing generated screenshots or temporary QA artifacts unless they are intentionally part of the deliverable.

## Quality Gates

Run the smallest relevant verification while working, and run the full gate before claiming a production-ready change:

```bash
npm test
npm run lint
npm run build
```

Use `npm run dev` for local manual checks. If a visual or responsive change is made, verify desktop and mobile behavior in a browser or with Playwright before finalizing.

## Git and Change Hygiene

- Work on the current branch unless the user asks for a different branch.
- Do not revert, reset, or overwrite unrelated user changes.
- Keep generated files such as `.next/`, QA screenshots, and local environment files out of commits unless explicitly requested.
- Update docs or tests when behavior, public content, or validation expectations change.

<!-- CODEGRAPH_START -->
## CodeGraph

This project can use a CodeGraph MCP server (`codegraph_*` tools) when `.codegraph/` has been initialized. CodeGraph is a tree-sitter-parsed knowledge graph of symbols, edges, and files.

Use codegraph for structural questions such as where a symbol is defined, what calls it, what it calls, flow tracing, impact analysis, or focused area context. Use native text search for literal strings, comments, log messages, or after a specific file is already open.

If `.codegraph/` does not exist and structural analysis is needed, ask whether to run `codegraph init -i` to build the index.
<!-- CODEGRAPH_END -->

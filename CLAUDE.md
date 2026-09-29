# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"The Forward Virtual Assistant" (TFVA) is a single-page B2B business site for a technical virtual assistant / data services business, founded by Linda Aluso. Copy should read as a business ("we", services, results), not a personal portfolio or CV. It was generated with Lovable (lovable.dev) and uses Vite, React 18, TypeScript, shadcn-ui (Radix) and Tailwind CSS. It is deployed to GitHub Pages under the `/The-Forward-Virtual-Assistant/` sub-path.

## Commands

```sh
npm install          # install deps (bun.lockb also exists, but CI uses npm)
npm run dev          # dev server on http://localhost:8080/The-Forward-Virtual-Assistant/
npm run build        # production build into docs/
npm run build:dev    # development-mode build (enables lovable-tagger)
npm run lint         # ESLint over the repo
npm run preview      # serve the built output
```

There is no test framework configured. TypeScript runs in non-strict mode (`strict`, `noImplicitAny` and the unused-variable checks are off in `tsconfig.app.json`).

## Architecture

- **Entry:** `index.html` → `src/main.tsx` → `src/App.tsx`. `App.tsx` wraps everything in React Query, the Tooltip provider and two toasters (shadcn `Toaster` and `Sonner`), then defines every route under `BrowserRouter basename="/The-Forward-Virtual-Assistant/"`.
- **Landing page:** `src/pages/Index.tsx` renders `Navigation` (fixed header with a mobile menu toggle), then the sections in `src/components/` in this order: Hero, Services, Projects ("Featured Projects"), About, Contact, then `Footer`. In-page navigation uses `#home` / `#services` / `#projects` / `#about` / `#contact` anchors. `scroll-padding-top` in `src/index.css` offsets them for the fixed header.
- **Hidden content convention:** content that isn't ready for the live site is commented out rather than deleted (`//` in data arrays, `{/* */}` in JSX), with a note explaining why. This includes project cards, the "Proven Results" benefit, service prices and the About skill bars. Un-comment to restore.
- **Project case studies:** each one is a standalone page in `src/pages/projects/`. To add one, you must make changes in three places:
  1. Create the page component in `src/pages/projects/`.
  2. Add a `<Route>` in `src/App.tsx` **above** the catch-all `*` route.
  3. Add an entry (title, description, tags, `url`) to the `projects` array in `src/components/Projects.tsx`. That array drives the cards on the landing page. A page stays reachable by URL even when its card is commented out.
- **Assets:** local files such as PDFs and images go in `src/assets/` and are imported as modules (for example, `import reportPdf from "@/assets/..."`) so Vite fingerprints them and applies the base path. Files in `public/` are copied as-is.
- **UI kit:** `src/components/ui/` holds generated shadcn components (config in `components.json`, base color slate, CSS variables in `src/index.css`). Prefer composing these components over editing them. Use `cn()` from `@/lib/utils` for class merging.
- **Path alias:** `@/` maps to `src/` (set in both `vite.config.ts` and `tsconfig`).

## Deployment

- `vite.config.ts` sets `base: "/The-Forward-Virtual-Assistant/"` and `build.outDir: "docs"`. The built `docs/` directory is **committed**, so rebuild before committing if the committed build is meant to match the source. If you change the base path, also change the router `basename` in `App.tsx`.
- `.github/workflows/deploy.yml` builds on every push to `main` and publishes `docs/` to the `gh-pages` branch.
- spa-github-pages redirect hack: `public/404.html` rewrites deep links to `/The-Forward-Virtual-Assistant/?/...`, and a script in the `index.html` head decodes them back with `history.replaceState` before React loads. Keep the two in sync (`pathSegmentsToKeep = 1` matches the single base-path segment).
- The site uses the standard `linda8-lang.github.io` URL with no custom domain (no `CNAME`). The `og:`/`twitter:` tags in `index.html` use absolute URLs on that domain.
- `index.html` loads the Umami analytics script. Keep it when editing the head.
- Some images live in `public/lovable-uploads/` and are imported with absolute paths (for example, `HeroSection.tsx`). New assets should go in `src/assets/` instead.

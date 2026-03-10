# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — TypeScript type-check + Vite production build
- `npm run lint` — ESLint with zero-warning tolerance
- `npm run preview` — Preview production build locally
- `npm run convert-images` — Convert PNGs in `src/assets/art/png/` to WebP at 3 sizes (small/medium/large) using Sharp
- Pre-commit hook runs Prettier on staged files via lint-staged

## Design Ethos

This is a portfolio website for an artist. The website itself should feel like a piece of art — visiting it should be an experience, like walking through a contemporary gallery installation. Every interaction should feel intentional and crafted.

**Principles:**

- Artistic and stylistic, but never childish or gimmicky
- Interactive and engaging — subtle animations, mouse-responsive elements, elegant motion
- The art is the focal point; the website enhances it without competing with it
- Generous negative space — artwork should float and breathe, never feel cramped or edge-to-edge
- Transitions and micro-interactions should feel smooth and considered

**Keep:** The warm colour palette (cream/gold/brown), Cormorant Garamond + Karla fonts, the grain overlay texture. These define the visual identity.

**Current interactive features:** Custom cursor (dot + trailing ring), mouse parallax on hero images, 3D tilt effect on gallery hover, character-by-character title reveals, glass-blur fixed header, staggered entrance animations, cinematic modal reveals, full-screen mobile drawer with staggered links.

## Architecture

React 18 + TypeScript + Vite SPA deployed to GitHub Pages at `/art-portfolio/`.

**Routing:** React Router v7 with `BrowserRouter` (basename `/art-portfolio`). Routes defined in `App.tsx`: Home (`/`), Gallery (`/gallery`), About (`/about`), Contact (`/contact`). Unknown routes fall back to Home. `Layout` component wraps all routes with a fixed glass-blur header (content flows beneath it; non-hero pages add top padding to compensate).

**Styling:** CSS Modules for component-scoped styles, global CSS variables in `index.css`. No CSS framework — pure CSS. Fonts: Cormorant Garamond (display) and Karla (body) via Google Fonts. Responsive breakpoints at 992px and 576px.

**Image pipeline:** Source PNGs live in `src/assets/art/png/`. The `convert-images` script produces WebP at 400px, 800px, and 1200px widths into `src/assets/art/webp/{small,medium,large}/`. Components use responsive `srcSet` for these sizes. Images are resolved dynamically via `import.meta.glob` in `src/data/artPieces.ts`.

**State:** No state management library — React hooks and local component state only.

**Key components:** `HeroSlideshow` (auto-advancing carousel with mouse parallax and animated titles), `ArtGrid` (masonry gallery with 3D tilt hover and Intersection Observer entrance animations), `ImageModal` (portal-based fullscreen viewer with cinematic reveal), `Drawer` (full-screen mobile nav overlay with staggered link animations), `CustomCursor` (dot + ring cursor, hidden on touch devices).

## Build & Deploy

- Vite base path is `/art-portfolio/` (GitHub Pages subpath)
- GitHub Actions workflow (`.github/workflows/static.yml`) builds and deploys `dist/` to Pages on push to main
- TypeScript strict mode enabled; `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` all on
- Path alias: `baseUrl: "src"` in tsconfig allows imports like `import X from 'components/X'`

## Dependencies

- `@tabler/icons-react` for icons
- `sharp` (dev) for image conversion
- No CSS framework, no state management library

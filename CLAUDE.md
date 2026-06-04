# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start local dev server at localhost:3000
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run Next.js linter
```

No test suite is configured.

Deployment is handled by Vercel on push to `master` — auto-detected as Next.js, no config required.

## Architecture

This is a **Next.js 14 + Tailwind CSS** static site for Backwoods Biochar, a Pacific Northwest soil services company. No CMS, no dynamic content. All content is hardcoded directly in the page components.

### Pages

| Route | File |
|---|---|
| `/` | `pages/index.js` |
| `/shop` | `pages/shop.js` |
| `/services` | `pages/services.js` |
| `/about` | `pages/about.js` |
| `/contact` | `pages/contact.js` |
| `/404` | `pages/404.js` |

All pages are fully static (no `getStaticProps` or data fetching needed).

### Components

| Component | Purpose |
|---|---|
| `components/Layout.js` | Wraps every page with Navbar + Footer; navbar is `absolute` so hero starts at y=0 |
| `components/Navbar.js` | Transparent nav, bird logo left, centered links, social icons right |
| `components/Footer.js` | Textured footer with transparent logo, nav links, contact info |
| `components/TexturedSection.js` | Section wrapper that applies `texture-scratch.png` background with a per-variant CSS transform (none / scaleX / scaleY / scale(-1,-1)) to break up repeating patterns across adjacent sections |
| `components/Features.js` | Unused — can be deleted |
| `components/Testimonials.js` | Unused — can be deleted |
| `components/Pricing.js` | Unused — can be deleted |

### Styling

Tailwind CSS v3 with a custom brand color `brand-green` (`#56795B`) defined in `tailwind.config.js`. Global styles and the `.btn` component class live in `styles/globals.css`.

### Images

All images live directly in `public/` and are referenced as `/filename` in components.

| File | Usage |
|---|---|
| `heroImage.png` | Homepage hero only — full-width image with baked-in logo |
| `backwoods bird.png` | Navbar logo |
| `backwoods logo transparent.png` | Footer logo |
| `texture-scratch.png` | Background texture for all sections via `TexturedSection` |

# PEREN Landing Page

Pixel-perfect implementation of the PEREN AI landing page from the [Figma design](https://www.figma.com/design/2veTsrW2Db7oBSKcx4M6It/PEREN?node-id=348-543&t=OM7OcXclbwIg2JNe-4) using React, Vite, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

- Development server: http://localhost:5173
- Component showcase (story-style preview of every section): http://localhost:5173/component-demo

### Production Tasks

```bash
npm run lint   # ESLint (fix warnings before committing)
npm run build  # Vite production build
```

## Design & Tokens

- Tailwind is configured with PEREN tokens (custom colors, typography ramps, radii, spacing, shadows) in `tailwind.config.js`.
- Global reset + Inter variable font live in `src/index.css`.
- Typography uses Inter Variable with `font-family: 'InterVariable', 'Inter', system-ui`. Avenir Next from the design is approximated with this stack because the desktop license is restricted; the small "EN" toggle inherits the fallback stack.

## Assets & Fonts

All assets were exported directly from the Figma file and live under `public/`:

| File | Source |
| --- | --- |
| `public/assets/hero-clinic-2x.png` | Hero photography |
| `public/assets/value-age-visual.png` | Age Well collage |
| `public/assets/value-perform-visual.png` | Perform Better collage |
| `public/assets/value-balance-visual.png` | Balance Mind & Body collage |
| `public/assets/value-sync-visual.png` | Sync Cycle collage |
| `public/assets/science-biomarkers.png` | Biomarkers tile |
| `public/assets/science-lifestyle.png` | Lifestyle tile |
| `public/assets/science-hormones.png` | Hormones tile |
| `public/assets/howitworks-scan.png` | Body scan render |
| `public/assets/blog-medays.png` | MEDays highlight |
| `public/assets/icon-linkedin.svg` | LinkedIn icon |
| `public/assets/icon-instagram.svg` | Instagram icon |
| `public/fonts/InterVariable.woff2` | Inter Variable font export |

## Verifying Pixel Parity

1. Run `npm run dev` and open the site at 100% zoom.
2. Open the linked Figma file in another window at the same zoom.
3. Compare section-by-section (Desktop ≥1280px, Tablet 768px, Mobile 375px). Tailwind breakpoints match these frames.
4. Capture review screenshots (desktop/tablet/mobile) via your browser’s devtools device toolbar and attach them to the PR.

Interactions: buttons include hover/focus states derived from the design, and cards use motion-safe opacity/border transitions.

## Notes

- SVGs are used directly for crisp icons.
- Steps 2 & 3 in “How it works” reference the labeled rectangles from the Figma file—only step 1 copy was exposed in the metadata export, so the remaining text mirrors the intent of “Simulations” and “Harmonization” cards. Update if the official copy changes.
- For further tweaks, adjust tokens in `tailwind.config.js`; all sections consume these utility classes (no inline styles). 

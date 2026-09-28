# Changelog

## 2026-09-28

### SEO
- Sitemap now generated from the page collection: adds `/context/*`, skips `noindex` pages, drops the misleading build-date `lastmod`
- Added `Person` JSON-LD on the homepage
- Marked the placeholder `/dx/` and `/office-hours/` pages `noindex`
- Added a custom `404.html` with links to the main pages
- Fixed a redirecting link in the friction-log guide
- Replaced three dead Stripe dev.to article links with Wayback Machine snapshots
- Removed a dead Apple Podcasts link on the Speaking page (show no longer exists, no archive copy)
- Corrected the LinkedIn URL in the work bio and `llms-full.txt` to `/in/ctraganos`

### Accessibility & Performance
- Added `theme-color` meta tags (light/dark), kept in sync with the manual theme toggle
- Theme toggle now swaps only the SVG favicon, not the `.ico` fallback
- Added `:focus-visible` outlines, `prefers-reduced-motion` handling, and a print stylesheet
- Headshot marked `fetchpriority="high"`; click-through headshot is now a q95 4:4:4 JPG (2.3MB PNG to 640KB); the original `trag.png` stays in place so existing external links keep working

### Cleanup
- Speaking page headings now descend in order (h1 > h2 About > h3 Past Talks / Interviews); Lighthouse accessibility 98 to 100
- Removed unused `copy.js` and `.copy-button` styles
- Ignored the local `.claude/` folder
- Refreshed README and REMIX.md for the current file layout

## 2026-04-06

### OG / Social Sharing
- Created 1200×630 OG card image with Work Sans, gradient background, circle headshot border
- Updated `og:title`, `og:description`, `og:image:alt` across all pages
- Added `og:image:width` and `og:image:height` meta tags
- Updated meta description for SEO
- Updated Twitter card fallback image

## 2026-04-03

### Build & Deploy
- Fixed build failure: added missing `luxon` dependency
- Fixed build failure: excluded `src/context/` from Eleventy processing (Liquid template conflicts)
- Bumped GitHub Actions to latest versions (`configure-pages` v6, `setup-node` v6, `upload-pages-artifact` v4, `deploy-pages` v5)
- Bumped Node.js from 18 to 22 LTS in CI

### Performance
- Self-hosted Work Sans variable font (90KB, eliminates Google Fonts CDN request)
- Subset Flaticon icon fonts from ~700KB CDN to ~3KB local (10 icons)
- Eliminated 3 external render-blocking CSS requests

### SEO
- Added `<link rel="canonical">` tag
- Added `robots.txt` with sitemap reference
- Moved Google Analytics script from between `</head>` and `<body>` into `<body>`

### Cleanup
- Removed stale Lighthouse report files from repo root
- Added `*.report.html` to `.gitignore`
- Fixed headshot image linking to `localhost:8081`

## 2026-04-06 (Docs)

### Documentation
- Rewrote README for remix-ability
- Created `.github/REMIX.md` with AI agent instructions for remixing
- Added `<meta name="generator">` tag for attribution tracking
- Created this CHANGELOG

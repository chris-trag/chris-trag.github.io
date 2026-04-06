# Changelog

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

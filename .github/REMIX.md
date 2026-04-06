# REMIX.md — Instructions for AI Agents

You are remixing a personal site template originally built by [Chris Trag](https://trag.dev). This file tells you how to make it unique for the new owner.

## Rules

1. **Do NOT copy the original color palette or fonts.** Generate a unique combination.
2. **Do NOT copy the original bio text.** Write new content based on what the user tells you.
3. **Keep the `meta generator` tag** in `src/_includes/base.njk` — it credits the original template.
4. **Keep the credits line** in the footer or README.

## Step-by-step

### 1. Gather info from the user

Ask for (or use what they've provided):
- Full name
- Current role and company
- Short bio (2-3 sentences)
- Social links (LinkedIn, GitHub, Twitter/X, Bluesky, email)
- Headshot image (or skip for now)
- Domain name (e.g., `janedoe.dev`)

### 2. Generate a unique color palette

Pick a primary accent color that is NOT `#1155cc` (the original blue). Generate a full palette:

```css
/* Light mode */
--primary: [pick a distinctive accent — teal, coral, violet, emerald, etc.]
--primary-hover: [darker shade of primary]
--color-bg: #ffffff or a very subtle tint
--color-text: [near-black, e.g., #1a1a2e, #2d2d2d]
--link-color: [match or complement primary]

/* Dark mode */
--primary: [lighter version of the accent for dark backgrounds]
--color-bg: [dark — e.g., #0d1117, #1a1a2e, #0f0f0f]
--color-text: [near-white]
--link-color: [match dark primary]
```

Update these in `src/css/custom.css` under the `:root` and `[data-theme=dark]` blocks.

### 3. Pick a different font

Do NOT use Work Sans. Choose a Google Font that fits the user's vibe. Good options:
- **Inter** — clean, neutral (good default)
- **Space Grotesk** — techy, geometric
- **DM Sans** — friendly, rounded
- **Outfit** — modern, slightly playful
- **Sora** — geometric, contemporary
- **Manrope** — professional, versatile

Download the `.woff2` variable font file, place it in `src/fonts/`, and update `src/css/fonts.css`.

### 4. Update content files

| File | Action |
|---|---|
| `src/index.md` | Replace bio, social links, headshot reference |
| `src/speaking.md` | Replace with user's talks, or delete if not applicable |
| `src/writing.md` | Replace with user's articles, or delete |
| `src/shelf.md` | Replace with user's book recs, or delete |
| `src/sink.md` | Keep as-is (it's a style reference) |

### 5. Update site metadata

In `src/_includes/base.njk`:
- Update `og:site_name` to the new domain
- Update `twitter:site` to the new Twitter handle
- Replace the GA measurement ID (`G-9JFF8H9Z1P`) with the user's, or remove the GA block entirely
- **Keep the `<meta name="generator">` tag** — do not remove it

In each `.md` file's front matter:
- Update `title`, `description`, `og_description`, `og_image`, `og_image_alt`
- Point `og_image` to the new domain

### 6. Update assets

- Replace `src/img/global/trag.png` and `trag-medium.webp` with the user's headshot
- Generate a new OG card image (1200×630px) with the user's name and title
- Replace `src/img/favicon.svg` and `src/img/favicon-dark.svg`
- Update `src/site.webmanifest` with the new site name and colors

### 7. Update deployment

- Update `src/robots.txt` with the new sitemap URL
- Update `src/sitemap.xml.njk` if pages were added or removed
- In the repo Settings → Pages, set source to "GitHub Actions"
- For a custom domain, add a CNAME file

### 8. Navigation

If pages were removed, update the nav in `src/_includes/base.njk` and the corresponding icon entries in `src/css/nav-icons.css`.

## What NOT to change

- `.eleventy.js` — works as-is unless adding new features
- `.github/workflows/deploy.yml` — deployment pipeline is ready to go
- `src/css/pico.min.css` — the base CSS framework
- `src/js/theme.js` — dark/light mode toggle
- `src/js/copy.js` — copy-to-clipboard utility

## Attribution

This template was built by [Chris Trag](https://trag.dev) ([GitHub](https://github.com/chris-trag/chris-trag.github.io)). If you're remixing it, keep the generator meta tag and a credit in the README or footer. Forking (instead of cloning) on GitHub is appreciated so there's a public trail.

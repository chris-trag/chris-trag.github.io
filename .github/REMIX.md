# REMIX.md — Instructions for AI Agents

## Goal

The user wants to launch a personal website based on this template. The end result should be a clean, single-page personal site (about/bio page) with their own identity — unique colors, fonts, and content. Additional pages (speaking, writing, bookshelf) are optional and should only be included if the user asks for them.

This template was originally built by [Chris Trag](https://trag.dev). The source repo is at [github.com/chris-trag/chris-trag.github.io](https://github.com/chris-trag/chris-trag.github.io).

## Rules

1. **Do NOT copy the original color palette or fonts.** Generate a unique combination for this person.
2. **Do NOT copy the original bio text.** Write new content based on what the user tells you.
3. **Replace or remove the Google Analytics ID** — `G-9JFF8H9Z1P` belongs to the original site and must not be used by anyone else.
4. **Keep the `meta generator` tag** in `src/_includes/base.njk` if possible — it's a small credit to the original template.

## Step-by-step

### 1. Gather info from the user

Ask for (or use what they've provided):
- Full name
- Current role and company
- Short bio (2-3 sentences)
- Social links (LinkedIn, GitHub, Twitter/X, Bluesky, email)
- Headshot image (or skip for now)
- Domain name (optional — the site works at `username.github.io` without one)
- Any additional pages they want beyond the homepage (speaking, writing, bookshelf, etc.)

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

### 4. Update content

The default site has multiple pages (speaking, writing, shelf). Most people just need a single homepage with their bio and links.

**If the user only wants a bio/about page:**
- Update `src/index.md` with their bio, social links, and headshot
- Delete `src/speaking.md`, `src/writing.md`, `src/shelf.md`
- Delete `src/context/` — these are personal to the original author. Optionally create new context files if the user wants an AI-readable bio and style guide at `/context/`
- Remove those nav items from `src/_includes/base.njk`
- Remove corresponding icon entries from `src/css/nav-icons.css`

**If the user wants additional pages:**

| File | Action |
|---|---|
| `src/index.md` | Replace bio, social links, headshot reference |
| `src/speaking.md` | Replace with user's content, or delete |
| `src/writing.md` | Replace with user's content, or delete |
| `src/shelf.md` | Replace with user's content, or delete |

Keep `src/sink.md` as-is — it's a style reference page, not public nav.

### 5. Update site metadata

In `src/_includes/base.njk`:
- Update `og:site_name` to the new domain
- Update `twitter:site` to the new Twitter handle
- **Replace or remove the GA measurement ID** — the existing ID (`G-9JFF8H9Z1P`) belongs to the original site and MUST be replaced with the user's own Google Analytics ID, or remove the entire `<!-- Google tag -->` block if they don't want analytics
- Keep the `<meta name="generator">` tag — it credits the original template

In each `.md` file's front matter:
- Update `title`, `description`, `og_description`, `og_image`, `og_image_alt`
- Point `og_image` to the new domain

### 6. Update assets

- Replace `src/img/global/trag.png` and `trag-medium.webp` with the user's headshot
- Generate a new OG card image (1200x630px) with the user's name and title
- Replace `src/img/favicon.svg` and `src/img/favicon-dark.svg`
- Update `src/site.webmanifest` with the new site name and colors

### 7. Update deployment files

- The repo should be named `username.github.io` for GitHub Pages to work automatically
- Update `src/robots.txt` — change the sitemap URL to `https://username.github.io/sitemap.xml` (or the custom domain if they have one)
- Update `src/sitemap.xml.njk` — change the base URL and add/remove pages to match what exists
- Update canonical URLs in `src/_includes/base.njk` to use `https://username.github.io` or their custom domain
- In the GitHub repo Settings → Pages, set source to "GitHub Actions"
- For a custom domain (optional), see [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## What NOT to change

- `.eleventy.js` — works as-is unless adding new features
- `.github/workflows/deploy.yml` — deployment pipeline is ready to go
- `src/css/pico.min.css` — the base CSS framework
- `src/js/theme.js` — dark/light mode toggle
- `src/js/copy.js` — copy-to-clipboard utility

## Attribution

This template was built by [Chris Trag](https://trag.dev) ([github.com/chris-trag/chris-trag.github.io](https://github.com/chris-trag/chris-trag.github.io)). A small credit in the README, footer, or the `<meta name="generator">` tag is appreciated but not required.

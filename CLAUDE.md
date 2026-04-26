# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Your Role

You are a **senior full-stack web developer** working alongside Yuchen on this site — bring the craft level of a top-tier studio engineer, not a generic assistant.

**Core craft:**
- **Frontend mastery** — semantic HTML, modern CSS (custom properties, grid, flexbox, container queries, clip-path, transforms, blend modes), and idiomatic vanilla JavaScript. You write lean, framework-free code by choice; no React/Vue reflexes when plain JS will do.
- **Motion & interaction design** — fluent in GSAP, ScrollTrigger, clip-path reveals, parallax, and easing curves. You understand *why* a 0.6s cubic-bezier feels right and a 1.2s linear feels broken. Animations should feel intentional, never decorative.
- **Backend awareness** — even though this project is static, you can reason about Node tooling, build pipelines, image optimization, deployment (Netlify/Vercel/GitHub Pages), and headless CMS integration if the project ever grows beyond static.
- **Performance** — Core Web Vitals, LCP/CLS/INP discipline, image formats (AVIF/WebP), responsive `srcset`, lazy loading, font loading strategy, and avoiding layout thrash in scroll handlers.
- **Accessibility** — WCAG 2.2, semantic landmarks, focus management, `prefers-reduced-motion`, color contrast, and keyboard navigation. Beautiful sites that exclude users are not beautiful.
- **SEO & metadata** — meta tags, OpenGraph, Twitter cards, structured data (JSON-LD), sitemap, and `robots.txt` hygiene.

**Design sensibility:**
- You have an **architectural background** and read the site as a designer would — spatial hierarchy, materiality (the embossed logo, grain texture), typographic rhythm, negative space, and the editorial pacing of a printed monograph translated to scroll. Treat the portfolio like an exhibition catalogue, not a CRUD app.
- Restraint over flourish. If something can be removed without losing meaning, remove it.
- Match the tone of `DESIGN-GUIDELINES.md` — read it before any visual change.

**How to work here:**
- Test changes in a real browser, not just by reading the diff. Animation and layout bugs only show up when running.
- Check both the cover page and a project page after CSS edits — they share `style.css` but the cover has its own inline overrides.
- Respect the no-build philosophy. Don't introduce bundlers, frameworks, or npm dependencies unless Yuchen explicitly asks.
- When unsure about visual judgment calls, propose 1–2 options with tradeoffs rather than picking silently.

## Project Overview

Architecture portfolio website for Yuchen Qiu / Studio Liminal. Static site (no build step, no framework) — just HTML, CSS, and vanilla JS with GSAP for animations.

## Development

Open any HTML file directly in a browser, or use a local server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

No build, lint, or test commands exist.

## Architecture

### Page Flow

1. **`index.html`** — Cover/landing page with 3D embossed logo, auto-rotating slideshow, and scroll/click-to-enter transition. Has its own inline `<script>` (does NOT load `animations.js`).
2. **`home.html`** — Main portfolio page with project grid, about section, and contact. Loads `animations.js`.
3. **`projects/*.html`** — Individual project pages (7 total). Load `animations.js`. All paths use `../` prefix for assets.
4. **`research.html`** — Index for the research section (long-form articles, methodology guides). Lists articles in reverse-chronological order. Loads `animations.js`.
5. **`research/*.html`** — Individual long-form articles (e.g. `research/energy-informed-design.html`). Load `animations.js`. Use `../` prefix for assets, same as project pages.

### Key Files

- **`style.css`** — Single shared stylesheet for home, project, and research pages (cover page styles are inline in `index.html`).
- **`animations.js`** — Shared GSAP + ScrollTrigger animation engine. Auto-detects page context and runs appropriate animations. All functions are wrapped in an IIFE.
- **`DESIGN-GUIDELINES.md`** — Comprehensive design spec: colors, typography, spacing, animation catalog, emboss technique, grain texture, and (§12) the article/research system. **Read this before making visual changes.**
- **`research/_template.html`** — Reference skeleton for new articles (underscore prefix means "not a published article" — do not link).

### Animation System

GSAP 3.12.7 loaded via CDN on all pages. `animations.js` provides: scroll-reveal (fade-up via `[data-reveal]` attribute), clip-path image wipes, word-stagger hero text, project header cascade, smart header hide/show, and image parallax. Cover page has separate inline animations for entrance/exit transitions.

All animations respect `prefers-reduced-motion: reduce`.

### Adding a New Project

1. Create thumbnail `images/[name].jpg` (displayed at 16:10 aspect ratio)
2. Create image folder `images/[name]/`
3. Create `projects/[name].html` — copy an existing project page as template
4. Add a `.project-item[data-reveal]` card to `home.html` project grid
5. Update prev/next navigation links in adjacent project pages

### Adding a New Article

1. Copy `research/_template.html` → `research/[slug].html`
2. Replace placeholder tokens (title, subtitle, date, reading time, tags, provenance, body, TOC entries)
3. Add a `.research-entry` link to `research.html`, sorted by date descending
4. Update prev/next links on adjacent articles when more than one exists
5. Place any images in `images/research/[slug]/` and reference as `../images/research/[slug]/[file]`
6. Read `DESIGN-GUIDELINES.md` §12 before any structural change to article styling — that section is the contract for the publishing pipeline

### Conventions

- Project and research article pages reference `../style.css`, `../images/`, and `../animations.js`
- Home and `research.html` index use root-relative paths (`style.css`, `images/`, `animations.js`)
- Scroll-reveal elements use the `data-reveal` attribute (batch-animated by `animations.js`). On articles, apply only to large block elements — `.article-header`, `.article-toc`, and per-section `<section>` wrappers — never per paragraph
- Image classes in project pages: `.image-full` (clip-wipe reveal), `.image-grid` (2-col layout), `.image-text` (inline text blocks)
- Article body classes: `.article-header`, `.article-toc`, `.article-body`, `.table-wrap` for table mobile overflow, `.article-provenance` for italic source notes, `.article-footnotes`, `.article-acknowledgments`
- CSS custom properties defined in `:root` of `style.css`: `--bg`, `--text`, `--text-muted`, `--border`, `--font-serif`, `--font-sans`
- Fonts: Libre Baskerville (serif headings) + Archivo (sans body), loaded from Google Fonts
- Sitewide grain texture overlay (`body::after`, opacity 0.18) is duplicated in `style.css` and inline in `index.html` — keep both in sync when tuning

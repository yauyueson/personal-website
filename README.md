# Yuchen Qiu — Architecture Portfolio Website

## Overview

A minimal, white-themed portfolio website showcasing architectural projects. Built with static HTML/CSS, ready for deployment on Vercel, Netlify, or any static hosting.

## Live Site

Deploy to Vercel and access via `[your-project-name].vercel.app`

---

## Structure

```
portfolio-site/
├── index.html              # Cover page — embossed logo + auto-rotating slideshow
├── home.html               # Main portfolio — project grid, about, contact
├── research.html           # Research index — long-form articles (reverse-chrono)
├── style.css               # Shared stylesheet (cover overrides inline in index.html)
├── animations.js           # GSAP + ScrollTrigger engine (home, project, research)
├── vendor/gsap/            # Self-hosted GSAP 3.12.7 + ScrollTrigger
├── images/
│   ├── [project].jpg       # Project thumbnails (16:10)
│   ├── cover/              # Cover slideshow images
│   ├── [project-name]/     # One folder per project
│   └── research/[slug]/    # Article figures — AVIF + JPG, originals in _source/
├── projects/
│   ├── spira-silva.html
│   ├── the-ripple.html
│   ├── the-loop.html
│   ├── motion.html
│   ├── the-third-space.html
│   ├── intertwine.html
│   └── school-of-methodology.html
└── research/
    ├── _template.html              # Article skeleton (do not link)
    └── performance-informed-design.html
```

`index.html` runs its own inline animation script for the cover transition. Every other page loads `animations.js`. Detailed conventions live in `DESIGN-GUIDELINES.md` (and §12 specifically covers the research / article system).

---

## Projects

| Project | Type | Location | Year | Team | Awards |
|---------|------|----------|------|------|--------|
| **Spira Silva** | Mixed-Use High-rise | Williamsburg, Brooklyn | 2023 | Hao Zhong | MUSE Platinum, A' Design Gold, SKYHIVE Finalist |
| **The Ripple** | Hospice | NYC Chinatown | 2025 | Hao Zhong, Tom Lin | — |
| **The Loop** | Housing | Melrose, Bronx | 2020 | Hao Zhong | Creative Mood Expo, #3 Top 5 Axonometric |
| **Motion** | Cultural Complex | New Jersey | 2020 | Hao Zhong, Peicong Zhang | Uni 'Liberty Today' Winner |
| **The Third Space** | Cultural Center | Bronx, NY | 2020 | Tom Lin, Qing Hou, Claire Chen | — |
| **Intertwine** | Visitor Center | Craco, Italy | 2019 | Hao Zhong, Peicong Zhang, Muyu Wu | Young Architects Finalist |
| **School of Methodology** | School | Adaptive Reuse | 2020 | — | — |

---

## Design

- **Fonts:** Libre Baskerville (headings) + Archivo (body)
- **Colors:** White background, dark text (#1a1a1a), muted gray (#888)
- **Layout:** 2-column project grid on homepage, single-column project pages
- **Images:** Max-width 1000px, centered with side margins
- **Text:** Inline descriptions between images, full-width alignment

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Connect repo to Vercel
3. Deploy automatically

### Manual

1. Upload all files to any static hosting
2. No build step required

---

## Customization

### Add a New Project

1. Create thumbnail → `images/[project-name].jpg` (displayed at 16:10)
2. Create image folder → `images/[project-name]/`
3. Create HTML page → `projects/[project-name].html` (copy an existing page as template)
4. Add a `.project-item[data-reveal]` card to `home.html`
5. Update prev/next nav links on adjacent project pages

### Add a New Research Article

1. Copy `research/_template.html` → `research/[slug].html`, replace tokens (title, date, meta, body, TOC)
2. Add a `.research-entry` link to `research.html`, sorted by date descending
3. Place article images in `images/research/[slug]/` per `DESIGN-GUIDELINES.md` §9.4 — keep originals in `_source/`, ship JPG + AVIF, cap longest side at 2000px
4. Update prev/next links on adjacent articles when more than one exists

### Update Styles

All styles in `style.css` (cover overrides are inline in `index.html`):
- `.project-images`, `.image-full`, `.image-grid`, `.image-text` — project page layouts
- `.project-header`, `.about` — project page header / home about section
- `.article-header`, `.article-toc`, `.article-body`, `.article-figure`, `.table-wrap` — research articles
- CSS custom properties on `:root` — `--bg`, `--text`, `--text-muted`, `--border`, `--font-serif`, `--font-sans`

---

## Contact

**Yuchen Qiu**  
Email: yauyueson@outlook.com

---

© 2024 Yuchen Qiu

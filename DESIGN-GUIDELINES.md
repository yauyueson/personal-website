# Design Guidelines — Yuchen Qiu Portfolio

> Studio Liminal | Architecture + Design
> Last updated: 2026-04-25

---

## 1. Design Philosophy

A restrained, material-driven aesthetic inspired by architectural presentation and letterpress craft. The site emphasizes negative space, typographic hierarchy, and subtle motion to create a sense of tactile luxury without visual noise.

**Principles:**
- Warm neutrality over cold minimalism
- Motion as meaning — every animation reveals, directs, or transitions
- Typography carries the hierarchy; color stays quiet
- Respect for the content — project images are the star

---

## 2. Color System

### 2.1 Core Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FFFFFF` | Page background (home, projects) |
| `--text` | `#1A1A1A` | Primary text |
| `--text-muted` | `#6E6E6E` | Secondary text, labels, metadata |
| `--border` | `#E5E5E5` | Dividers, borders |

### 2.2 Cover Page Palette

| Token | Value | Usage |
|-------|-------|-------|
| Cover background | `#E8E0D4` | Warm beige surface |
| Surface gradient | `#EDE6DA` to `#E6DED2` | Embossed shape fill |
| Emboss highlight | `rgba(255,255,255, 0.50–0.55)` | Top/left edges (light catch) |
| Emboss shadow | `rgba(0,0,0, 0.18–0.22)` | Right/bottom edges (depth) |
| Depth fill | `rgba(0,0,0, 0.03)` | Subtle offset shadow |
| Slide overlay | `rgba(0,0,0, 0.04)` | Image tint |

### 2.3 Interactive Colors

| Element | Default | Hover |
|---------|---------|-------|
| Enter button border | `rgba(26,26,26, 0.2)` | `#1A1A1A` solid |
| Enter button fill | Transparent | `#1A1A1A` bg, `#E8E0D4` text |
| Nav links | `var(--text-muted)` | `var(--text)` |
| Project card shadow | None | `0 12px 32px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)` |

### 2.4 Indicators

| State | Color |
|-------|-------|
| Track | `rgba(26,26,26, 0.10)` |
| Fill (active) | `rgba(26,26,26, 0.45)` |

---

## 3. Typography

### 3.1 Font Families

| Role | Family | Fallback |
|------|--------|----------|
| Serif (headings) | Libre Baskerville | Georgia, serif |
| Sans-serif (body) | Archivo | -apple-system, sans-serif |

Weights loaded: 300, 400, 500, 600.
Font smoothing: `-webkit-font-smoothing: antialiased`.

### 3.2 Type Scale

| Element | Size | Weight | Spacing | Transform |
|---------|------|--------|---------|-----------|
| Cover name | 12px | 600 | 0.40em | Uppercase |
| Cover studio | 12px | 600 | 0.40em | Uppercase |
| Cover tagline | 9px | 400 | 0.30em | Uppercase |
| Hero h1 | `clamp(28px, 4vw, 36px)` | 400 | — | Italic (em) |
| Project h1 | `clamp(32px, 5vw, 44px)` | 400 | — | — |
| Section h2 | 24px | 400 | — | — |
| Project h3 (card) | 17px | 400 | — | — |
| Body / detail value | 14px | 400 | — | — |
| Project description | 16px | 450 | — | — |
| Contact email | 15px | 400 | — | — |
| Nav links | 12px | 400 | 0.12em | Uppercase |
| Labels (meta) | 10px | 400 | 0.12em | Uppercase |
| Button text | 11px | 600 | 0.25em | Uppercase |
| Footer | 11px | 400 | — | — |

### 3.3 Line Heights

| Context | Value |
|---------|-------|
| Body default | 1.6 |
| Headings (h1) | 1.2–1.4 |
| Long-form text | 1.8 |

### 3.4 Hierarchy Pattern (Cover Page)

```
YUCHEN QIU            12px / 600 / #1A1A1A
architecture · design   9px / 400 / rgba(26,26,26, 0.3)
STUDIO LIMINAL        12px / 600 / #1A1A1A
```

Symmetric mirror layout — the small tagline is sandwiched between two equal-weight names.

---

## 4. Spacing System

### 4.1 Section Padding

| Section | Desktop | Mobile (< 768px) |
|---------|---------|-------------------|
| Header | 24px 40px | 20px 24px |
| Hero | 140px 40px 60px | 140px 24px 60px |
| Projects | 40px 40px 100px | 40px 24px 100px |
| About | 80px 40px | 80px 24px |
| Contact | 100px 40px | 100px 24px |
| Footer | 24px 40px | 24px 24px |

### 4.2 Component Spacing

| Element | Spacing |
|---------|---------|
| Project grid gap | 40px row, 24px column |
| About sections gap | 80px (48px mobile) |
| Nav link gap | 32px (20px mobile) |
| Image grid gap | 20px |
| Project images gap | 60px |
| Indicator gap | 12px |
| Cover content margin-top | 4vh |
| Project detail gap | 48px (24px mobile) |

### 4.3 Max Widths

| Element | Max Width |
|---------|-----------|
| Hero title | 600px |
| Project header | 800px |
| Project description | 1000px |
| Project images | 1000px |
| Project content | 1200px |

---

## 5. Layout

### 5.1 Grid Systems

| Context | Columns | Breakpoint to 1-col |
|---------|---------|----------------------|
| Project grid | 2 | 1024px |
| About section | 2 (1fr 1fr) | 768px |
| Image grid | 2 (1fr 1fr) | 1024px |

### 5.2 Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Desktop | > 1024px | 2-column grids, full padding |
| Tablet | 768–1024px | 1-column project grid, 1-column image grid |
| Mobile | < 768px | Reduced padding (24px), stacked project info, nav gap 20px |
| Small | < 480px | Cover logo: `min(50vw, 220px)` |

### 5.3 Aspect Ratios

| Element | Ratio |
|---------|-------|
| Project card image | 16 / 10 |
| Logo frame | 38 / 80 |

### 5.4 Z-Index Scale

| Layer | Value |
|-------|-------|
| Header | 100 |
| Transition overlay | 100 |
| Cover content | 10 |
| Slideshow | 2 |
| Emboss SVG | 1 |

---

## 6. Components

### 6.1 Header

- Fixed position, full width
- Background: `rgba(255,255,255, 0.95)` + `backdrop-filter: blur(10px)`
- Logo: centered absolute, 48px height
- Nav: right-aligned, 12px uppercase links
- Behavior: hides on scroll down, reveals on scroll up (GSAP)

### 6.2 Project Card

```
+----------------------------------+
|  [Image — 16:10, overflow:hidden] |
|  hover: lift -4px + shadow        |
|  hover: image scale 1.04x         |
+----------------------------------+
  Project Name          Category
  subtitle              Year
  hover: nudge right 4px
```

### 6.3 Enter Button

- Padding: 14px 48px
- Border: 1.5px solid, semi-transparent
- Font: 11px / 600 / uppercase / 0.25em spacing
- Hover: inverted (dark fill, light text)
- Transition: 0.4s ease

### 6.4 Slide Indicators

- Horizontal bar: 24px wide, 2px tall
- Track: `rgba(26,26,26, 0.10)`
- Fill: `rgba(26,26,26, 0.45)`, animated width 0% to 100% over slide duration

### 6.5 Contact Link

- Underline via `::after` pseudo-element
- `scaleX(0)` to `scaleX(1)` on hover, origin left
- Transition: 0.3s ease

### 6.6 Grain Texture Overlay

A subtle SVG fractal-noise grain laid over every page to evoke the tactility of printed paper. Sitewide; applied via `body::after` pseudo-element so it never blocks pointer events.

- Implementation: inline SVG `feTurbulence` (fractal noise, `baseFrequency: 0.75`, 4 octaves, stitched tiles), tiled at 512×512
- Position: `fixed; inset: 0; z-index: 9999; pointer-events: none`
- Opacity: **0.18** (intentionally near the perceptual floor — present, not visible)
- Two locations: `style.css` (home, project, research pages) and inline in `index.html` (cover page). Keep both in sync when tuning.

If the grain ever feels noisy on a new surface, drop the opacity rather than removing the rule. The texture is load-bearing in setting the editorial / letterpress register.

---

## 7. Cover Page — Embossed Logo

### 7.1 Structure

```
.logo-frame (28vw, aspect-ratio 38/80, overflow:hidden)
  svg.logo-emboss (viewBox 0 0 38 80, preserveAspectRatio none)
    ├── Depth shadow polygon (offset +0.4, rgba black 0.03)
    ├── Surface fill polygon (gradient #EDE6DA → #E6DED2)
    ├── Light edge lines (top + left, white 0.50–0.55, stroke 0.5)
    └── Shadow edge lines (right + bottom, black 0.18–0.22, stroke 0.5)
  .cover-slideshow
    └── .slide (clip-path: url(#logo-clip-inset))
        └── img (object-fit: cover)
```

### 7.2 Shape Coordinates (viewBox: 0 0 38 80)

| Shape | Points |
|-------|--------|
| Left bar | `(0,0) (11,6) (11,80) (0,80)` |
| Right bar | `(27,24) (38,18) (38,80) (27,80)` |

### 7.3 Clip-Path (objectBoundingBox, asymmetric inset)

The slideshow image is clipped *inside* the embossed logo silhouette using a subtly inset polygon. Insets are asymmetric — `0.65` units on the highlight edges (left, top) and `0.95` units on the shadow edges (right, bottom) — to compensate for the perceptual offset created by the emboss lighting (top-left lit, bottom-right shadowed). A symmetric inset reads as visually off-center; the asymmetric one reads as balanced.

| Shape | Normalized Points |
|-------|-------------------|
| Left inset | `0.0171,0.0137  0.2645,0.0778  0.2645,0.9881  0.0171,0.9881` |
| Right inset | `0.7276,0.3048  0.9750,0.2407  0.9750,0.9881  0.7276,0.9881` |

### 7.4 Emboss Technique

Per-edge directional lighting simulating raised letterpress:
- **Top and left edges** receive light → white strokes at 50–55% opacity
- **Right and bottom edges** fall in shadow → black strokes at 18–22% opacity
- **Surface** fills with a subtle warm gradient
- **Depth shadow** is a single offset polygon behind the surface
- Light source direction: **top-left**

---

## 8. Animation System

### 8.1 Library

- GSAP 3.12.7 via CDN
- Plugin: ScrollTrigger
- Loaded on all pages; `animations.js` is the shared engine

### 8.2 Easing Reference

| Name | Usage |
|------|-------|
| `power3.out` | Primary entrance easing (reveals, fades) |
| `power2.out` | Header show/hide, secondary reveals |
| `power2.in` | Exit animations |
| `power2.inOut` | Slide crossfade |
| `power3.in` | Logo zoom exit |
| `power3.inOut` | Clip-path image wipe |
| `back.out(1.2)` | Cover logo entrance (slight overshoot) |
| `sine.inOut` | Scroll hint bounce (gentle) |
| `none` | Ken Burns pans, indicator fill |
| `cubic-bezier(0.25,0.46,0.45,0.94)` | CSS hover transitions |

### 8.3 Animation Catalog

| Name | Type | Trigger | Duration | Description |
|------|------|---------|----------|-------------|
| **Fade Up** | Scroll reveal | `top 88%` | 0.8s | `y:50 → 0, opacity:0 → 1`. Batch stagger 0.12s. |
| **Clip Wipe** | Scroll reveal | `top 85%` | 1.0s | `clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)`. Bottom-to-top. |
| **Word Stagger** | Page load | Immediate | 0.7s | Text split into `<span>` per word, each rises with 0.06s stagger. |
| **Cascade** | Page load | Immediate | 0.5–0.6s | Timeline sequence: back-link → title → subtitle → details. |
| **Scroll Parallax** | Scrub | `top bottom` to `bottom top` | Continuous | `yPercent: -4 → 4`, `scale: 1.08`. |
| **Mouse Parallax** | Mousemove | Continuous | Continuous | Lerp 0.06, images offset ±5px X, ±3px Y. |
| **Ken Burns** | Timer | Per slide (5s) | 6s | Scale 1.05–1.06 + pan ±1.5%. |
| **Smart Header** | Scroll | `top -80` | 0.3s | `y: 0 ↔ -100` based on scroll direction. |
| **Card Lift** | CSS hover | Hover | 0.5s | `translateY(-4px)` + shadow + `scale(1.04)` + text nudge. |
| **Link Underline** | CSS hover | Hover | 0.3s | `scaleX(0 → 1)` on `::after`. |
| **Cover Enter** | Page load | Immediate | ~2.5s | Timeline: logo scale-in → slide fade → text cascade → button. |
| **Cover Exit** | Scroll/click | Wheel/swipe/click | ~1.1s | Content fades up → logo zooms 4x + rises → white overlay. |

### 8.4 Scroll/Swipe Detection

- **Mouse wheel**: accumulates `deltaY`, triggers at 80px threshold
- **Touch swipe**: measures `touchstart` to `touchend`, triggers at 60px upward swipe
- **Guard**: `isExiting` flag prevents double-trigger

### 8.5 Reduced Motion

All animations check `prefers-reduced-motion: reduce`. When enabled:
- No GSAP animations run
- Elements are set to their final state instantly
- Cover page navigates directly without transition

---

## 9. Image Guidelines

### 9.1 Formats

| Context | Format |
|---------|--------|
| Project images | JPG (photography) |
| Diagrams / plans | JPG or PNG |
| Logo / favicon | SVG |

### 9.2 Display Rules

| Context | Sizing | Object-fit |
|---------|--------|------------|
| Project card (home) | 16:10 aspect ratio | `cover` |
| Cover slideshow | Fill logo frame | `cover` |
| Full-width (project page) | 100% width, auto height | — |
| Grid (project page) | 2-column, equal | — |

### 9.3 Performance

- `loading="lazy"` on below-fold images (home page images 3–7)
- `will-change: transform` on animated image containers
- Preload: cover hero image and GSAP script

---

## 10. File Structure

```
/
├── index.html              Cover page (standalone)
├── home.html               Main portfolio page
├── style.css               Shared stylesheet
├── animations.js           GSAP animation engine
├── images/
│   ├── mark-light.svg      Logo mark / favicon
│   ├── cover/              Cover slideshow images
│   ├── spira-silva/        Project images
│   ├── the-ripple/
│   ├── school-of-methodology/
│   └── ...
└── projects/
    ├── spira-silva.html
    ├── the-ripple.html
    ├── the-loop.html
    ├── school-of-methodology.html
    ├── motion.html
    ├── the-third-space.html
    └── intertwine.html
```

### 10.1 Script Loading Order

```html
<!-- GSAP core (all pages) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>

<!-- ScrollTrigger (home + project pages) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>

<!-- Shared animations (home + project pages) -->
<script src="animations.js"></script>
```

Cover page (`index.html`) has its own inline `<script>` — it does not load `animations.js`.

---

## 11. Favicon

- Format: SVG (`images/mark-light.svg`)
- Declaration: `<link rel="icon" type="image/svg+xml" href="images/mark-light.svg">`
- Path adjustment: project pages use `../images/mark-light.svg`
- The two-polygon logo mark at native dark fill (`#1A1A18`)

---

## 12. Research / Articles

The Research section (`/research.html` index + `/research/[slug].html` articles) extends the project-page typographic system to long-form prose, tables, and lists. It does not introduce a new color or surface — articles render on the same `--bg: #ffffff` as everything else.

### Page structure

Articles are wrapped in `<article>`, with these top-level containers (in order):

1. `.article-header` — back-link, meta row (date · reading time · tags), `<h1>`, `.article-subtitle`, `.article-provenance`
2. `.article-toc` — bordered top + bottom, two-column on desktop, single-column on mobile, numbered with `decimal-leading-zero`
3. `.article-body` — sectioned by `<h2 id="slug">`, optional `<h3>`, prose / lists / tables / blockquotes
4. `.article-footnotes` — numeric `<ol>`, in-text refs use `<sup><a href="#fn-1">1</a></sup>`
5. `.article-acknowledgments` — small italic block. **Co-authors and source attribution belong here, not in the byline.**
6. `.article-nav` — back to research / next article

### Typography (article-specific)

| Element | Treatment |
|---|---|
| Article `h1` | serif, `clamp(32px, 5vw, 44px)`, weight 400, line-height 1.2 (matches project h1) |
| `.article-subtitle` | serif italic, 18px, muted, line-height 1.5 |
| `.article-provenance` | italic 14px, left-bordered, muted — load-bearing context note |
| `.article-meta` | uppercase 10px, 0.12em letter-spacing, separated by `·` middle dot |
| `.article-body p` | 16px / 450 weight / line-height 1.8, max-width 800px |
| `.article-body h2` | serif 24px, weight 400, `scroll-margin-top: 100px`, `margin-top: 64px` |
| `.article-body h3` | serif 18px, weight 400, `scroll-margin-top: 100px`, `margin-top: 40px` |
| `.article-body li` | inherits paragraph treatment; `margin-bottom: 8px` |
| `.article-body code` | `ui-monospace` family, `0.9em`, subtle bg, 5px horizontal padding |
| Inline links in `.article-body` | underlined with 3px offset, 1px thickness; hover → muted |

### Tables

Tables are essential, not decorative — never reformat them into definition lists. Always wrap in `<div class="table-wrap">` for horizontal overflow on mobile. Always use `<thead>` with `<th scope="col">`. The wrapper has top + bottom rules; the `<thead>` row gets a heavier bottom rule (`var(--text)`); body rows are separated by `var(--border)`.

```html
<div class="table-wrap">
  <table>
    <thead><tr><th scope="col">Column</th></tr></thead>
    <tbody><tr><td>Cell</td></tr></tbody>
  </table>
</div>
```

Mobile: tables drop to 13px and tighter padding. The wrapper handles overflow scroll with `-webkit-overflow-scrolling: touch`.

### Anchor offset (critical)

Because the header is `position: fixed`, smooth-scrolled anchor targets need `scroll-margin-top: 100px` to clear it. This is set on `.article-body h2` and `.article-body h3`. Do not remove. Test with both clicked-from-TOC and direct URL load (`?#section-id`).

### Reveal animations

Apply `data-reveal` to large block elements only — `.article-header`, `.article-toc`, and each `<section>` wrapping an H2. Do NOT put `data-reveal` on every paragraph; per-paragraph reveals feel chatty and break the editorial register.

### Asset paths

Articles live one directory deeper than home, so all asset references use `../`:
- Stylesheet: `../style.css`
- Animations: `../animations.js`
- Logo: `../images/mark-light.svg`
- Article images: `../images/research/[slug]/[file]`

Article-specific images live in `images/research/[slug]/`. Reserve the folder when you create the article, even if no images at launch.

### Adding an article

1. Copy `research/_template.html` → `research/[slug].html`
2. Replace placeholder tokens (title, date, meta, provenance, body, TOC entries)
3. Add a `.research-entry` link to `research.html`, sorted by date descending
4. Update prev/next links on adjacent articles (when more than one exists)
5. Place any images in `images/research/[slug]/`
6. Verify: nav has `Research` highlighted, TOC anchors land below the fixed header, tables scroll on mobile, reveals fire on sections (not paragraphs)

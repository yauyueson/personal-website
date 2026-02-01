# Yuchen Qiu — Architecture Portfolio Website

## Overview

A minimal, white-themed portfolio website showcasing architectural projects. Built with static HTML/CSS, ready for deployment on Vercel, Netlify, or any static hosting.

## Live Site

Deploy to Vercel and access via `[your-project-name].vercel.app`

---

## Structure

```
portfolio-site/
├── index.html              # Homepage with project grid + about section
├── style.css               # All styles
├── images/
│   ├── [project].jpg       # 7 thumbnail images (1200x750px)
│   ├── spira-silva/        # 11 images
│   ├── the-ripple/         # 10 images
│   ├── the-loop/           # 8 images
│   ├── motion/             # 5 images
│   ├── the-third-space/    # 5 images
│   ├── intertwine/         # 9 images
│   └── school-of-methodology/  # 6 images
└── projects/
    ├── spira-silva.html
    ├── the-ripple.html
    ├── the-loop.html
    ├── motion.html
    ├── the-third-space.html
    ├── intertwine.html
    └── school-of-methodology.html
```

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

### Add New Project

1. Create thumbnail (1200x750px) → `images/[project-name].jpg`
2. Create image folder → `images/[project-name]/`
3. Create HTML page → `projects/[project-name].html`
4. Add project card to `index.html`

### Update Styles

All styles in single `style.css` file:
- `.project-images` — image container (max-width: 1000px)
- `.image-text` — inline text blocks
- `.image-grid` — 2-column image layout
- `.project-header` — project page header
- `.about` — about section on homepage

---

## Contact

**Yuchen Qiu**  
Email: yauyueson@outlook.com

---

© 2024 Yuchen Qiu

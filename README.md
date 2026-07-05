# Ahmed Gamal Farouk — Portfolio

A bilingual (Arabic / English) personal portfolio website for Ahmed Gamal Farouk, a Front-End & Cross-Platform Mobile Developer based in Cairo, Egypt.

![Portfolio Preview](img/profile.png)

---

## 🌐 Live Demo

> Deploy via GitHub Pages: **Settings → Pages → Branch: `main` / Root**  
> Live at: `https://ahmedgamalfarouk.github.io/portfolio`

---

## ✨ Features

- **Bilingual** — Full Arabic / English toggle with RTL layout support and font switching (Inter ↔ Cairo)
- **Cinematic loading screen** — Animated AGF letters + progress bar wipe
- **GSAP animations** — Scroll-triggered reveals, line-unmask transitions, staggered entrances
- **Custom cursor** — Green dot + lagging ring, expands on hover, shrinks on click
- **Hero section** — Animated typewriter-style line reveals, profile photo with glow ring
- **Process section** — Numbered philosophy lines that reveal on scroll
- **Projects carousel** — 6 project cards with horizontal scroll, prev/next navigation
- **Skills section** — Categorized tech pills (Mobile / Web / Backend / Tools)
- **Publication highlight** — Springer research paper card
- **About section** — Bio, education, certifications list
- **Responsive** — Fixed sidebar on desktop → bottom navigation bar on mobile
- **Scroll progress bar** — Thin gradient bar at the top tracking scroll position

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (custom design system) |
| Animations | [GSAP 3](https://gsap.com/) + ScrollTrigger + ScrollToPlugin |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) (EN) · [Cairo](https://fonts.google.com/specimen/Cairo) (AR) |
| Hosting | GitHub Pages |

No frameworks. No build tools. No dependencies beyond GSAP (CDN).

---

## 📁 Project Structure

```
portfolio/
├── index.html                        # Single-page app entry point
├── css/
│   └── style.css                     # Full design system + all component styles
├── js/
│   └── main.js                       # GSAP animations, i18n, navigation logic
├── img/
│   └── profile.png                   # Profile avatar
└── AHMED_GAMAL_FAROUK_...Resume.pdf  # Downloadable CV
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0F172A` (OLED deep navy) |
| Surface | `#1E293B` |
| Accent (green) | `#22C55E` |
| Accent (blue) | `#38BDF8` |
| Text | `#F8FAFC` |
| Muted | `#94A3B8` |
| Font (EN) | Inter 300–700 |
| Font (AR) | Cairo 400–700 |

---

## 🚀 Projects Featured

| Project | Stack |
|---------|-------|
| Eshtry Menny | Flutter · SQLite · Bloc |
| Circle | React · Firebase · Tailwind |
| Cinema Flux | React · Redux Toolkit · Vite |
| Social Media App | Flutter · Firebase |
| Circle Mobile | React Native · Firebase |
| Orderly | React · Firebase · Firestore |

---

## 📦 Getting Started

No build step needed. Just open `index.html` in a browser:

```bash
git clone https://github.com/AhmedGamalFarouk/portfolio.git
cd portfolio
# Open index.html in your browser
start index.html       # Windows
open index.html        # macOS
xdg-open index.html    # Linux
```

Or use any static server:

```bash
npx serve .
# or
python -m http.server 8080
```

---

## 🌍 Bilingual Support

Click **EN / AR** in the sidebar to switch languages. The toggle:

1. Flips `<html dir="rtl | ltr">`
2. Swaps all text content via `data-i18n` attributes
3. Switches font family (Inter ↔ Cairo)
4. Persists the choice in `localStorage`

---

## 📄 License

MIT — free to use as inspiration. Please don't deploy it as your own portfolio without modification.

---

## 👤 Contact

- **Email:** ahmedgamalfarouk0@gmail.com
- **GitHub:** [github.com/AhmedGamalFarouk](https://github.com/AhmedGamalFarouk)
- **LinkedIn:** [linkedin.com/in/ahmed-gamal-farouk](https://linkedin.com/in/ahmed-gamal-farouk)

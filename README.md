# 黃喻琦 — Personal Website

A bold, dark editorial personal website featuring elegant typography, a live clock, and premium micro-interactions — fully responsive across all devices.

## ✨ Preview

| Hero | About | Contact |
|------|-------|---------|
| Large golden gradient name | Two-column layout with stats | "Let's Connect" CTA |
| Live clock with seconds | Scroll reveal animations | Animated button hover |
| Decorative parallax circles | Scrolling marquee banner | Footer with live date/time |

## 🎨 Design

- **Aesthetic**: Dark editorial, inspired by the Hostinger Stornoway template
- **Color Palette**: Deep black `#0a0a0a` background with champagne gold `#c9a96e` accents
- **Typography**: Cormorant Garamond (serif) + Noto Serif TC (中文) + Inter (sans-serif)
- **Grain Texture**: Subtle SVG noise overlay for premium depth
- **Cursor Glow**: Golden radial glow follows mouse movement (desktop only)

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🕐 Live Clock | Real-time `HH:MM:SS` display with blinking separators and Chinese date |
| ✨ Cursor Glow | Subtle golden radial glow that follows the mouse |
| 📜 Scroll Reveal | Elements fade in smoothly as they enter the viewport |
| 🎠 Parallax | Hero decorative circles move at different speeds on scroll |
| 🎞️ Marquee | Infinite scrolling text banner with name and keywords |
| 🔢 Counter Animation | Stats count up when scrolled into view |
| 🧭 Active Navigation | Nav links highlight based on current scroll position |
| 🍔 Hamburger Menu | Full-screen mobile menu overlay with animated links |

## 📱 Responsive Web Design (RWD)

Fully responsive with **4 breakpoints** and special handling for touch/landscape devices:

| Breakpoint | Target | Key Adaptations |
|------------|--------|-----------------|
| `≤1024px` | Tablet Landscape | Scaled typography, smaller decorations |
| `≤768px` | Tablet Portrait | Hamburger menu, single-column about layout, cursor glow disabled |
| `≤480px` | Phone | Compact spacing, full-width CTA button, smaller fonts |
| `≤360px` | Small Phone | Minimal font sizes for tiny screens |

**Additional RWD features:**
- 🔄 Landscape phone mode — auto-adjusts hero height, hides scroll indicator
- 👆 Touch device detection — disables cursor glow, enables `:active` tap states
- 📱 Notched phone support — `env(safe-area-inset)` for proper edge padding
- 🍔 Mobile menu — full-screen overlay with staggered animation and live clock
- 📐 Fluid typography — `clamp()` used throughout for smooth scaling

## 📁 Project Structure

```
personal-website/
├── index.html    # HTML structure & semantic markup
├── style.css     # All styling, animations & responsive design
├── script.js     # Clock, cursor glow, scroll effects & interactions
└── README.md     # This file
```

## 🛠️ Tech Stack

- **HTML5** — Semantic structure with mobile-first markup
- **CSS3** — Custom properties, keyframe animations, grid, flexbox, media queries
- **Vanilla JavaScript** — IntersectionObserver, requestAnimationFrame, DOM manipulation
- **Google Fonts** — Cormorant Garamond, Noto Serif TC, Inter

## 📖 How to View

1. Clone the repository:
   ```bash
   git clone https://github.com/chhcgrrace/20260303.git
   ```
2. Open `index.html` in your browser, or serve with any static server:
   ```bash
   python -m http.server 8080
   ```
3. Visit `http://localhost:8080`

## 📄 License

© 2026 黃喻琦. All rights reserved.

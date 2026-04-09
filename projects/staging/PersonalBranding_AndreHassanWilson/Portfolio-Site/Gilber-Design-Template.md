# Gilber Theme — Design Template Reference

**Source:** https://paul-themes.com/wordpress/gilber/
**Type:** Personal CV/Resume — Full-Page Scroll Dark Theme
**Framework:** Elementor + pagePiling.js (full-page scroll sections)
**Purpose:** Design reference for Andre "Hassan" Wilson personal branding website

---

## 1. Global Design Properties

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `rgb(22, 22, 22)` / `#161616` | Page background, section backgrounds |
| `--bg-secondary` | `rgb(63, 60, 57)` / `#3F3C39` | Cards, progress bar backgrounds, subtle containers |
| `--bg-overlay` | `rgba(0, 0, 0, 0.3)` | Dark overlays on images/sections |
| `--bg-white` | `rgb(255, 255, 255)` / `#FFFFFF` | Light section backgrounds, progress bar fills |
| `--accent-red` | `rgb(207, 0, 15)` / `#CF000F` | Accent dot, buttons, hover states, CTA |
| `--accent-red-hover` | `rgba(207, 0, 15, 0.85)` | Button hover states |
| `--text-primary` | `rgb(255, 255, 255)` / `#FFFFFF` | Headings, nav links, primary text |
| `--text-secondary` | `rgb(125, 125, 125)` / `#7D7D7D` | Body text, paragraphs, descriptions |
| `--text-muted` | `rgba(255, 255, 255, 0.6)` | Subtle labels, meta text |
| `--text-faint` | `rgba(255, 255, 255, 0.4)` | Decorative text, placeholders |
| `--text-bright` | `rgba(255, 255, 255, 0.8)` | Semi-emphasized text |
| `--text-dark` | `rgb(43, 41, 38)` / `#2B2926` | Text on light backgrounds |
| `--text-black` | `rgb(0, 0, 0)` | Text on white sections |
| `--border-subtle` | `rgba(255, 255, 255, 0.4)` | Borders, dividers on dark bg |

### Typography

| Element | Font Family | Size | Weight | Line Height | Letter Spacing | Text Transform |
|---------|-------------|------|--------|-------------|----------------|----------------|
| Body | `Roboto` | `16px` | `400` | `1.6` | `normal` | `none` |
| Hero H1 | `Roboto` | `120px` | `500` | `132px` (1.1) | `normal` | `none` |
| Section H3 | `Roboto` | `50px` | `400` | `1.2` | `normal` | `none` |
| Section H4 | `Roboto` | `36px` | `400` | `1.3` | `normal` | `none` |
| Subtitle / Label | `Roboto` | `16px` | `400` | `1.6` | `normal` | `none` |
| Nav Links | `Roboto` | `15px` | `500` | `1.5` | `0.3px` | `uppercase` |
| Small Text | `Roboto` | `13px` | `400` | `1.5` | `normal` | `none` |
| Icon Font | `LineIconsPro Regular` | varies | — | — | — | — |
| Display (alt) | `Gilroy` | varies | `700`–`900` | — | — | — |

**Full font size scale observed:** `10px`, `11px`, `12px`, `13px`, `14px`, `15px`, `16px`, `18px`, `20px`, `22px`, `24px`, `30px`, `36px`, `40px`, `50px`, `60px`, `80px`, `120px`

**Font weights used:** `300`, `400`, `500`, `600`, `700`, `800`, `900`

### Fonts CDN

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
/* Gilroy is a premium font — substitute with Poppins or Inter for web */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
```

---

## 2. Layout & Scroll System

### Full-Page Scroll (pagePiling.js)

```javascript
// pagePiling.js configuration pattern
pagePiling.init({
  direction: 'vertical',
  scrollingSpeed: 700,
  easing: 'swing',
  css3: true,
  navigation: {
    position: 'right',
    tooltips: ['Home', 'About', 'Projects', 'Education', 'Skills', 'Blog', 'Contact']
  },
  normalScrollElements: '.pp-scrollable',
  touchSensitivity: 5,
  keyboardScrolling: true,
  sectionSelector: '.pp-section',
  animateAnchor: false
});
```

**Key CSS Properties:**

```css
.pp-section {
  position: absolute;
  display: flex;
  height: 100vh;         /* Full viewport height */
  width: 100%;
  overflow: auto scroll; /* Scrollable within section */
  padding: 0;
}

.pp-section.active {
  z-index: 1;
}

/* Section vertical alignment wrapper */
.vlt-section__vertical-align {
  display: flex;
  align-items: center;   /* Vertically center content */
  min-height: 100vh;
}
```

### Pagination Navigation (Right Side Dots)

```css
#pp-nav {
  position: fixed;
  right: 17px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

#pp-nav span {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  border: 0px none;
  transition: background-color 0.3s ease;
}

#pp-nav .active span {
  background-color: rgb(207, 0, 15); /* Red accent */
}
```

### Container

```css
.container {
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
```

### Grid System

- Uses **Bootstrap 4** grid (`col-md-*`, `col-lg-*`)
- Elementor custom grid overlays
- Typical layouts: `col-lg-6 + col-lg-6` (50/50), `col-lg-4` (thirds)

---

## 3. Section-by-Section Structure

### Section 1: Hero

```css
.hero-section {
  background-color: rgb(22, 22, 22);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-section h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 120px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  line-height: 132px;
  letter-spacing: normal;
}

/* Red accent dot on name */
.hero-section h1 .accent-dot {
  color: rgb(207, 0, 15);
}
```

**Layout:** Full-screen dark section, large name centered, subtitle "Product Designer" below in `16px` white. Optional background image with dark overlay.

**Content mapping for Hassan:** `"Hassan."` with red accent dot → Subtitle: `"Revenue Operations | AI Architecture | Deal Architect"`

### Section 2: About

```css
.about-section {
  background-color: rgb(22, 22, 22);
  padding: 100px 0;
}

.about-section h3 {
  font-size: 50px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
}

.about-section p {
  font-size: 16px;
  color: rgb(125, 125, 125);
  line-height: 1.6;
  margin-bottom: 20px;
}
```

**Layout:** Two-column (50/50). Left: large heading + bio text. Right: profile image or key stats.

**Elements:**
- Section heading: `"Great Experience"` → Map to `"About Me"`
- Bio paragraph in muted text
- Progress bars for skills

### Section 3: Skills / Progress Bars

```css
.vlt-progress-bar {
  width: 100%;
  height: 42.5px;
  margin-bottom: 20px;
}

.vlt-progress-bar__bar {
  width: 100%;
  height: 7px;
  background-color: rgb(255, 255, 255); /* Track */
  border-radius: 0;
  position: relative;
}

.vlt-progress-bar__bar-fill {
  height: 100%;
  background-color: rgb(207, 0, 15); /* Red accent fill */
  border-radius: 0;
  transition: width 1.5s ease-in-out;
}

.vlt-progress-bar__title {
  font-size: 14px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}
```

### Section 4: Projects / Portfolio

```css
.portfolio-section {
  background-color: rgb(22, 22, 22);
  padding: 100px 0;
}

.portfolio-card {
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  border-radius: 0;
  position: relative;
  cursor: pointer;
  transition: transform 0.4s ease;
}

.portfolio-card:hover {
  transform: scale(1.02);
}

.portfolio-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-card:hover .portfolio-card__overlay {
  opacity: 1;
}

.portfolio-card__title {
  font-size: 16px;
  color: rgb(125, 125, 125);
  font-weight: 400;
}
```

**Layout:** Grid of project cards (2-3 columns). Each card has image, title, category label.

### Section 5: Education / Timeline

```css
.timeline-section {
  background-color: rgb(22, 22, 22);
  padding: 100px 0;
}

.timeline-section h3 {
  font-size: 50px;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.timeline-item {
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-item__year {
  font-size: 14px;
  color: rgb(207, 0, 15);
  font-weight: 500;
  text-transform: uppercase;
}

.timeline-item__title {
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.timeline-item__description {
  font-size: 16px;
  color: rgb(125, 125, 125);
  line-height: 1.6;
}
```

### Section 6: Blog / Articles

```css
.blog-card {
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 30px;
}

.blog-card__date {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

.blog-card__title {
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.blog-card__title:hover {
  color: rgb(207, 0, 15);
}
```

### Section 7: Contact

```css
.contact-section {
  background-color: rgb(22, 22, 22);
  padding: 100px 0;
}

.contact-section h3 {
  font-size: 50px;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

/* Form inputs */
.contact-form input,
.contact-form textarea {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  border: 0px none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0;
  padding: 12px 0;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: rgb(207, 0, 15);
  outline: none;
}

.contact-form input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
```

---

## 4. Component Styles

### Navigation Bar

```css
.vlt-navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vlt-navbar__link {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  text-decoration: none;
  padding: 8px 15px;
  transition: color 0.3s ease;
}

.vlt-navbar__link:hover,
.vlt-navbar__link.active {
  color: rgb(207, 0, 15);
}
```

**Navigation items for Hassan:** Home, About, Experience, Projects, Skills, Thought Leadership, Contact

### Buttons

```css
.vlt-btn {
  display: inline-block;
  padding: 14px 35px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  background-color: transparent;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.vlt-btn:hover {
  background-color: rgb(207, 0, 15);
  border-color: rgb(207, 0, 15);
  color: rgb(255, 255, 255);
}

.vlt-btn--filled {
  background-color: rgb(207, 0, 15);
  border-color: rgb(207, 0, 15);
  color: rgb(255, 255, 255);
}

.vlt-btn--filled:hover {
  background-color: transparent;
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}
```

### Social Icons

```css
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: rgb(207, 0, 15);
}
```

---

## 5. Animation & Transition Properties

### Element Entrance Animations

```css
/* Uses custom vlt-animate-element class */
.vlt-animate-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.vlt-animate-element.animated {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered delay pattern */
.vlt-animate-element:nth-child(1) { transition-delay: 0.1s; }
.vlt-animate-element:nth-child(2) { transition-delay: 0.2s; }
.vlt-animate-element:nth-child(3) { transition-delay: 0.3s; }
.vlt-animate-element:nth-child(4) { transition-delay: 0.4s; }
```

### Section Transitions (pagePiling)

```css
.pp-section {
  transition: all 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

/* Scroll animation: sections slide up/down */
.pp-section.pp-scrollable {
  transition: transform 0.7s ease;
}
```

### Hover Transitions (Global)

```css
/* All interactive elements use 0.3s ease transitions */
a, button, .vlt-btn, .portfolio-card, .social-icon, input, textarea {
  transition: all 0.3s ease;
}
```

### Progress Bar Animation

```css
.vlt-progress-bar__bar-fill {
  width: 0%;
  transition: width 1.5s ease-in-out;
}

/* Triggered when section scrolls into view */
.vlt-progress-bar__bar-fill.animated {
  width: var(--target-width); /* e.g., 90%, 85%, etc. */
}
```

---

## 6. Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) {
  .container { max-width: 1140px; }
  h1 { font-size: 120px; }
  h3 { font-size: 50px; }
}

/* Tablet */
@media (max-width: 1199px) and (min-width: 768px) {
  .container { max-width: 960px; }
  h1 { font-size: 80px; }
  h3 { font-size: 36px; }
  .vlt-navbar { padding: 15px 20px; }
}

/* Mobile */
@media (max-width: 767px) {
  .container { max-width: 100%; padding: 0 20px; }
  h1 { font-size: 50px; line-height: 1.1; }
  h3 { font-size: 28px; }
  .pp-section { height: auto; min-height: 100vh; }
  .vlt-navbar { padding: 10px 15px; }
  nav { display: none; } /* Hamburger menu on mobile */
}
```

---

## 7. Section Flow Map (Hassan's Website)

| # | Section | Gilber Original | Hassan Adaptation |
|---|---------|----------------|-------------------|
| 1 | **Hero** | "Gilber." + "Product Designer" | "Hassan." (red dot) + "Revenue Operations · AI Architecture · Deal Architect" |
| 2 | **About** | Bio + photo | Brand narrative + professional photo (or silhouette placeholder) |
| 3 | **Experience** | Timeline of jobs | 4 chapters: Atlanta → Kazakhstan → Kenya → AI Memory Brain at Qosil |
| 4 | **Projects** | Portfolio cards | Key deals: SierraHomes, Kazakhstan bilateral, AI Memory Brain |
| 5 | **Skills** | Progress bars | RevOps, GTM Strategy, Enterprise AI, Cross-Cultural Negotiation, Project Management |
| 6 | **Thought Leadership** | Blog posts | LinkedIn articles, AI Memory Brain methodology, case studies |
| 7 | **Contact** | Form + social links | Contact form + LinkedIn + Email + Calendly CTA |

---

## 8. Design Principles Summary

1. **Dark-first:** Nearly all sections use `rgb(22, 22, 22)` background
2. **Minimal color:** Only two accent colors — white for text, red (`#CF000F`) for emphasis
3. **Full-page scroll:** Each section fills the viewport, navigated by scroll or side dots
4. **Typography-driven:** Large headings (50px–120px) create visual hierarchy without heavy imagery
5. **Subtle animations:** Fade-in-up on scroll, progress bar fills, hover color shifts — all 0.3s–0.7s ease
6. **No border-radius:** Sharp edges throughout (buttons, cards, inputs) for a modern editorial feel
7. **High contrast:** White text on dark background with strategic red accents for CTAs and active states
8. **Generous whitespace:** Sections use 100px vertical padding, elements breathe with 20–30px margins

---

*This template serves as the definitive design reference for building the Andre "Hassan" Wilson personal branding website.*

# Payload CMS — Design Analysis & Landing Page Template
**Source:** https://payloadcms.com/get-started  
**Analyzed:** 2026-04-09  
**Purpose:** Template reference for AI Memory Brain landing page build

---

## 1. Color System

### Core Palette
| Role | Value | Usage |
|------|-------|-------|
| Page background | `#000000` | Full page, all sections |
| Primary text | `#ffffff` | All body copy and headings |
| Announcement bar bg | `rgb(0, 25, 35)` / `#001923` | Top banner strip |
| Announcement bar text | `rgb(229, 242, 247)` / `#e5f2f7` | Banner copy |
| Code block border | `rgb(47, 47, 47)` / `#2f2f2f` | Inline code boxes |
| Subtle divider | `rgba(255, 255, 255, 0.125)` | Column separators, borders |
| CTA button (primary) | `#ffffff` bg / `#000000` text | "Get Started" nav button |

### CSS Custom Property Scale
The design uses a full grayscale token system:
```
--color-base-0:   #ffffff  (white)
--color-base-50:  #f5f5f5
--color-base-100: #ebebeb
--color-base-200: #d0d0d0
--color-base-500: #808080  (mid-gray)
--color-base-700: #4a4a4a
--color-base-800: #2f2f2f
--color-base-850: #222222
--color-base-900: #141414
--color-base-950: #070707
--color-base-1000: #000000  (black)
```

---

## 2. Typography

### Font Stack
- **Primary:** `untitledSans` (custom proprietary font)  
- **Fallback:** `"untitledSans Fallback"` → use `Inter`, `system-ui`, or `'Helvetica Neue'`

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing | Notes |
|---------|------|--------|-------------|----------------|-------|
| H1 (hero) | `80px` | `500` | `80px` (1:1) | `-4px` | Massive, tight tracking |
| H3 (tier name) | `50px` | `500` | auto | `normal` | Pricing column headers |
| H4 (section heading) | `28px` | `500` | auto | `normal` | Testimonials, section intros |
| Body / P | `16px` | `400` | `22.4px` (1.4x) | `normal` | All body copy |
| Subheadline | `16px` | `400` | `22.4px` | `normal` | Under H1 in hero |

### Key Typography Rule
- H1 uses `letter-spacing: -4px` — negative tracking at large sizes creates the premium, editorial feel
- `margin-bottom: 48px` on H1 creates breathing room before the subtitle

---

## 3. Layout & Grid

### Page Structure
```
[Announcement Bar]       — full width, fixed height ~50px
[Sticky Nav]             — full width, transparent bg, becomes opaque on scroll
[Hero Section]           — full width, centered content, ~600px max content width
[Pricing Grid]           — 4-column, full bleed (no max-width container visible)
[FAQ Section]            — constrained width, accordion
[Enterprise CTA]         — full width dark section
[Footer]                 — 4-column links + newsletter
```

### Grid Pattern
- **Pricing tiers:** 4-column CSS grid, `cols-4` pattern
- **Footer:** 4-column grid with footer link categories
- **Column separators:** `1px solid rgba(255,255,255,0.125)` right borders (not CSS grid gap — actual borders)
- **Container padding:** `160px` horizontal on announcement bar (implies ~1200–1280px content width)

### Spacing Tokens (inferred)
- Section vertical padding: ~80–120px top/bottom
- Hero margin-bottom on H1: `48px`
- Feature list item spacing: ~12–16px between items
- Nav padding: `15px` top/bottom, `160px` left/right

---

## 4. Component Breakdown

### A. Announcement Bar
```
Structure: Full-width strip | text + arrow link right-aligned
Colors:    bg: #001923  |  text: #e5f2f7
Padding:   15px 160px
Content:   "[News text]  Learn More ↗"
```

### B. Navigation (Sticky Desktop)
```
Structure:  Logo (left) | Nav links (center) | [GitHub ★ count] [Login] [Get Started] [Search] (right)
Background: transparent (inherits page bg)
Logo:       SVG icon + wordmark, white
Nav links:  plain text, no underline, white, flex row with spacing
CTA button: "Get Started" — white bg, black text, 1px solid white border, 4px radius, 5px 10px padding
GitHub:     icon + star count (social proof in nav)
```

### C. Hero Section
```
Structure:  Left-aligned content (not centered) within a constrained column
H1:         Large bold statement — 80px, weight 500, letter-spacing -4px
Subtitle:   2 short paragraphs — 16px, weight 400, ~600px max-width
CTAs:       2 side-by-side links:
            Primary: "Explore Docs →" (text link, white, with arrow icon)
            Secondary: "Talk to Sales →" (text link, white, with arrow icon)
Background: Pure black with subtle hatched grid texture overlay
```

### D. Pricing Tier Grid (4 columns)
```
Each column contains:
  - Badge label     (e.g. "Self-hosted", "Instant deploy", "Support & Features")
  - Tier name H3   (80px, "Free" / "Vercel" / "Cloudflare" / "Enterprise")
  - Description     (16px body text, ~2-3 lines)
  - Toggle button   ("Toggle collapsible" — shows/hides feature list on mobile)
  - Feature list    (checkmark items — ✓ green for included, ✗ muted/red for excluded)
  - Requirements    (small gray text footnote at bottom of Free column)
  - CTA button/link (varies per tier: "npx create-payload-app" code block, "Deploy", "Get a Demo")

Column borders:   1px right-border rgba(255,255,255,0.125)
No column bg:     All transparent, black page shows through
Feature check:    ✓ green icon | ✗ muted red-ish icon
Code block:       `rgb(47,47,47)` border, copy button
```

### E. FAQ Section
```
Structure:  Full-width, accordion-style
Heading:    "FAQ" (H2)
Questions:  Expandable items — click to reveal answer
CTAs:       "Explore Docs" + "Payload on Github" (secondary link CTAs)
```

### F. Enterprise CTA Banner
```
Structure:  Full-width dark section
Heading:    "Build with [Product] enterprise"
Subtext:    1-2 lines
Buttons:    Primary CTA + Secondary browse link
```

### G. Footer
```
Columns:    4-column grid
Col 1:      Use Cases (links)
Col 2:      Developers (links)
Col 3:      Company (links)
Col 4:      Newsletter signup (email input + submit) + Social icons + Theme switcher
```

---

## 5. Button & Interactive Styles

### Button Types
| Type | Background | Text | Border | Radius | Padding |
|------|-----------|------|--------|--------|---------|
| Primary Nav CTA | `#ffffff` | `#000000` | `1px solid #fff` | `4px` | `5px 10px` |
| Text CTA with arrow | `transparent` | `#ffffff` | none | `0` | `0` |
| Code copy button | `transparent` | `#ffffff` | light border | `4px` | small |

### Arrow Pattern
Text CTAs use an angled arrow (`↗`) to signal external navigation or key actions.

---

## 6. Design Principles (Inferred)

1. **Radical minimalism** — Only black background, white text. Zero decoration except structural borders.
2. **Typography does the heavy lifting** — Massive H1 (80px) at -4px tracking creates instant premium feel with no imagery required.
3. **Social proof embedded in nav** — GitHub star count (41.7k) sits next to the CTA button. It's always visible.
4. **Progressive disclosure** — Feature lists are collapsed on mobile (toggle button), expanded on desktop.
5. **Left-aligned hero** — Content doesn't center-align in the traditional hero pattern — it sits left within a fixed column, with empty space to the right (can be used for product screenshot/demo).
6. **Announcement bar as trust signal** — The dark teal bar announces major news (Figma acquisition) before the user even sees the page.
7. **Tier comparison, not pricing** — No dollar amounts on the Get Started page. Focus is on feature differentiation and deployment path, not price.
8. **Code as CTA** — The Free tier's primary CTA is a copyable terminal command, not a button. Speaks directly to developers.
9. **Thin border grid texture** — Background uses a subtle hatched/diagonal grid pattern (CSS or SVG background), adds depth without color.

---

## 7. Responsive Notes
- Mobile nav collapses to hamburger menu
- Pricing columns collapse to vertical accordion (toggle collapsible pattern)
- Font sizes scale down (80px H1 → likely 40–48px on mobile)
- Announcement bar wraps on small screens

---

## 8. AI Memory Brain Adaptation Map

| Payload Element | AI Memory Brain Equivalent |
|----------------|---------------------------|
| "Get started with Payload" (H1) | "Give Your AI a Memory It Keeps" |
| Self-hosted / Vercel / Cloudflare / Enterprise tiers | Blueprint $297 / SMB $2,500+$500/mo / Enterprise $25K+ |
| "npx create-payload-app" code block | Setup command or download link |
| GitHub star count in nav | "Used by X teams" or "Trusted by founders + PMs" |
| "Talk to Sales" secondary CTA | "Book a Demo" secondary CTA |
| Case studies (Microsoft, ASICS) | "Used by: Provecta Group, [client names]" |
| Feature checklist (✓/✗) | AI context continuity / session persistence / agent routing features |
| FAQ accordion | AMB-specific FAQs (which AI tools, security, dev required?) |
| Newsletter footer | LinkedIn / newsletter signup |
| Theme switcher | (optional) |

---

## 9. CSS Template (Core Variables)

```css
:root {
  --bg: #000000;
  --text: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.6);
  --border-subtle: rgba(255, 255, 255, 0.125);
  --border-strong: rgba(255, 255, 255, 0.3);
  --accent-teal: #001923;
  --accent-teal-text: #e5f2f7;
  --code-bg: #111111;
  --code-border: #2f2f2f;
  --check-color: #4ade80;    /* green-400 */
  --cross-color: #666666;    /* muted gray */
  --font: 'Inter', system-ui, -apple-system, sans-serif;
  --max-w: 1280px;
  --nav-h: 64px;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
}

h1 {
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 1;
  margin-bottom: 48px;
}

h2 {
  font-size: clamp(32px, 3vw, 50px);
  font-weight: 500;
  letter-spacing: -0.02em;
}

h3 {
  font-size: clamp(28px, 3vw, 50px);
  font-weight: 500;
}

h4 {
  font-size: 28px;
  font-weight: 500;
}
```

---

## 10. Section Template (HTML Skeleton)

```html
<!-- ANNOUNCEMENT BAR -->
<div class="announcement-bar">
  <span>[News/badge text]</span>
  <a href="#">Learn More ↗</a>
</div>

<!-- NAV -->
<nav class="nav">
  <a class="logo" href="/">Logo</a>
  <ul class="nav-links">
    <li><a href="#">Link</a></li>
  </ul>
  <div class="nav-ctas">
    <span class="social-proof">★ 41.7k</span>
    <a href="#" class="btn-outline">Get Started</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1>[Big, direct claim — 4–6 words]</h1>
    <p>[Subheadline paragraph 1 — what it is, 1-2 sentences]</p>
    <p>[Subheadline paragraph 2 — who it's for or key differentiator]</p>
    <div class="hero-ctas">
      <a href="#" class="cta-primary">[Primary Action] ↗</a>
      <a href="#" class="cta-secondary">[Secondary Action] ↗</a>
    </div>
  </div>
</section>

<!-- PRICING GRID -->
<section class="pricing">
  <div class="pricing-grid">
    <!-- Tier Column (repeat per tier) -->
    <div class="tier">
      <span class="tier-badge">[Badge label]</span>
      <h3>[Tier Name]</h3>
      <p>[Description]</p>
      <ul class="features">
        <li class="included">✓ Feature</li>
        <li class="excluded">✗ Feature</li>
      </ul>
      <a href="#" class="tier-cta">[Action]</a>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <h2>FAQ</h2>
  <div class="faq-item">
    <button class="faq-q">[Question]</button>
    <div class="faq-a">[Answer]</div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="cta-banner">
  <h2>[Big closing statement]</h2>
  <p>[Supporting sentence]</p>
  <div class="cta-group">
    <a href="#" class="btn-primary">[Primary CTA]</a>
    <a href="#" class="btn-ghost">[Secondary CTA]</a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="footer-col">
      <h4>[Col Label]</h4>
      <ul>...</ul>
    </div>
    <!-- repeat cols -->
    <div class="footer-col">
      <h4>Stay connected</h4>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">→</button>
      </form>
      <div class="social-icons">...</div>
    </div>
  </div>
</footer>
```

---

*Analysis complete. Use Section 8 (Adaptation Map) + Section 9 (CSS Template) + Section 10 (HTML Skeleton) to build the AI Memory Brain landing page.*

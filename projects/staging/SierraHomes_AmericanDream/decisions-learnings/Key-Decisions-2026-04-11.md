# Key Decisions & Learnings — 2026-04-11 (Session 7)

**Session Goal:** Complete expo banner suite, fix location map accuracy, retire Provecta Group branding, consolidate all project files into staging folder, and ensure consistency across all deliverables.
**Operator:** Claude Sonnet 4.6 (Cowork)

---

## Decisions Made

### KD-020: Retire Provecta Group from all project materials
- **Context:** All documents, banners, brochure, and architecture.md still referenced "Provecta Group" or "A Provecta Group Development"
- **Decision:** Remove completely from all files. Replace with "Sierra USA Homes Ltd" where needed.
- **Impact:** Affects Master-AI-Context.md, ExpoBanners HTML/PDF, SalesBrochure HTML, architecture.md, all future deliverables.
- **Rule:** AI must never produce any new deliverable that references Provecta Group.

### KD-021: Update all contact details — website and email
- **Old values:** sierrahomes.co.ke / hassan.qaseem@gc-usa.com
- **New values:** sierrausahomes.com / sales@sierrausahomes.com
- **Impact:** Updated across ExpoBanners HTML/PDF, SalesBrochure HTML, architecture.md. Must be applied to all future deliverables.

### KD-022: Replace SVG schematic map on Banner 4 with realistic Leaflet/CartoDB map
- **Context:** Banner 4 had a hand-drawn SVG schematic map. Hassan requested a map "comparable to the one on the website."
- **Decision:** Render a real Leaflet.js map with CartoDB Positron tiles via Playwright headless browser, embed as base64 PNG.
- **Technical approach:** Python async Playwright, zoom 12, center [-4.038, 39.698], 350×490px viewport.
- **Learning:** Map must be rendered server-side before embedding — Leaflet tiles cannot be loaded inside a self-contained HTML file.

### KD-023: POI coordinates corrected to verified OSM/Nominatim values
- **Context:** Initial POI coordinates were estimates and placed markers in wrong locations relative to visible street map.
- **Decision:** Verify every POI via OpenStreetMap Nominatim API before placing markers.
- **Verified coordinates:**
  - American Dream (AD): -4.0215, 39.7255 (user-specified)
  - City Mall Nyali: -4.0196, 39.7210 (Nominatim + Google Maps URL confirmed)
  - Nyali Golf & Country Club: -4.0414, 39.7070 (Nominatim, Links Road)
  - Nyali Beach: -4.0480, 39.7087 (Nominatim beach hotel cluster)
  - Aga Khan Hospital: -4.0696, 39.6704 (Nominatim, Vanga Road / Ganjoni)
  - Nyali Intl. School: -4.0055, 39.7220 (NE Nyali residential estimate)
- **Rule:** Always verify POI coordinates from OpenStreetMap Nominatim before placing on any map deliverable.

### KD-024: Map label style — dots only, colour-coded legend below
- **Decision:** Remove all text labels from map markers. Show only coloured dots. Legend at bottom of banner identifies each location.
- **Rationale:** Clean, uncluttered map appearance consistent with professional real estate marketing.

### KD-025: AD marker same size as POI dots
- **Decision:** AD (American Dream) marker reduced from 36px to 18px to match all other POI dots. Gold colour still distinguishes it in the legend.

### KD-026: Replace emoji amenity icons with SVG icons on Banner 1
- **Context:** Banner 1 used emoji (🍽️🏊💪🌿🔒) which render as blank boxes in headless Chromium and are inconsistent with Banner 3's SVG icons.
- **Decision:** Replace all Banner 1 amenity emoji with the matching SVG icons already used in Banner 3.
- **Rule:** Never use emoji in HTML banners intended for headless rendering. Always use inline SVG.

### KD-027: Export all 7 amenity icons as individual PNG files
- **Decision:** Save each amenity icon as 256×256 PNG (gold on navy #1D235C background) to `Marketing/Amenity_Icons/`.
- **Files:** rooftop_lounge.png, swimming_pool.png, residents_gym.png, childrens_play.png, security_cctv.png, manicured_gardens.png, private_lift.png
- **Use:** Available for reuse in website, presentations, brochures, social media.

### KD-028: Add QR code to Banner 1 top-right corner
- **Destination:** https://sierrausahomes.com
- **Style:** Gold (#D4AF1A) modules on navy (#1D235C) background, 60×60px on banner, navy border.
- **Library:** Python `qrcode[pil]` with `ERROR_CORRECT_H` (highest redundancy).
- **Position:** Absolutely positioned, top: 12px, right: 12px, z-index: 10.

### KD-029: Consolidate project files — retire SierraHomes_AmericanDream_AI_Training
- **Decision:** All files merged from `SierraHomes_AmericanDream_AI_Training` into `staging/SierraHomes_AmericanDream`. The AI Training folder is now retired.
- **Merge stats:** 38 new files copied, 91 files updated. 6 lock/temp files skipped.
- **Canonical path:** `staging/SierraHomes_AmericanDream` is the single source of truth going forward.

---

## Learnings & Technical Notes

- **Base64 HTML files:** Self-contained HTML with embedded base64 images cannot be edited with simple string replacement — the file structure changes between sessions. Always rebuild from a generation script rather than patching.
- **Playwright map rendering:** Must wait for `networkidle` + additional 5000ms timeout for CartoDB tiles to fully paint before screenshotting.
- **Headless emoji rendering:** Emoji do not render in headless Chromium — always use inline SVG for icons in HTML deliverables.
- **Floor plan images:** The architectural drawing images have no white margins — content fills the full frame. Use `object-fit: contain` to display them without cropping.
- **Lock files (.~lock.*):** LibreOffice/Excel leave lock files when documents are open. Never copy these to the staging folder.

---

## Blockers / Open Questions

- **Rajab's drawings:** Structural and mechanical drawings still overdue. Permit application blocked.
- **Nyali Intl. School coordinates:** Could not confirm exact GPS via Nominatim — using NE Nyali residential area estimate (-4.0055, 39.7220). Verify if banner goes to print.

---

## Keywords

banner, map, Leaflet, CartoDB, Nominatim, OSM, POI coordinates, Provecta Group, sierrausahomes.com, QR code, SVG icons, amenity icons, PNG export, folder merge, staging, brand standards, emoji rendering

# Property Visual Production Standard
**Standard ID:** MKT-VIS-001
**Owner:** Marketing Agent
**Project:** SierraHomes AmericanDream — applies to all Provecta Group projects unless overridden
**Created:** 2026-04-01
**Status:** Active — reference before briefing any CGI studio, photographer, or AI image tool

---

## Purpose

This standard defines the minimum quality requirements, technical specifications, and creative direction for all property imagery used on the SierraHomes website, social media, print materials, and investor presentations. It is the internal benchmark the Marketing Agent checks all visual briefs against before they are sent to a studio or generated using AI tools.

It is derived from the production pipeline used by DAMAC Properties and their partner studios (including Render Atelier), who produce the most consistently photorealistic architectural CGI in the global off-plan residential market.

---

## 1. Rendering Engine Requirement

| Requirement | Approved | Not Approved |
|-------------|----------|--------------|
| Engine | V-Ray (preferred), Corona Renderer | Lumion, Enscape, Twinmotion (for hero shots) |
| Interactive / VR | Unreal Engine 5 (Lumen + Nanite) | Any older real-time engine |
| AI generation | Midjourney v6+ with V-Ray post-processing hybrid | AI output used as final deliverable without manual post |

**Why this matters:** Lumion and Enscape use rasterisation with screen-space effects, producing soft, slightly plastic output. V-Ray and Corona use true ray tracing — every light bounce is physically calculated, producing near-photographic accuracy. This distinction must be explicitly stated in all studio briefs. Do not leave the engine choice to the studio's discretion.

---

## 2. Lighting Standard

### 2.1 Time of Day
- **Default:** Golden hour (sunset). For Nyali, Mombasa this equates to approximately **18:15–18:45 EAT**, with the sun at a low westerly angle.
- **Sun angle:** Must reflect the correct solar trajectory for **latitude 4°S, longitude 39.7°E**. Studios must be given this coordinate — do not let them use a default Northern Hemisphere sun angle.
- **Mandatory variants per project:** Three time-of-day versions for hero shots — (1) golden hour, (2) dusk/blue hour (~18:50 EAT), (3) bright day with scattered cloud.

### 2.2 HDRI Environment Lighting
- All exterior renders must use a **dual HDRI setup**:
  - Primary: curated sunset/golden hour HDRI (warm tones, 2,800–3,500K colour temperature)
  - Secondary: cool sky HDRI for ambient fill (~8,000–10,000K colour temperature)
- This warm key / cool fill contrast is what human vision interprets as natural outdoor light. Renders without it look flat and artificial.
- HDRI source quality: **HDRI Haven / Poly Haven** minimum, or proprietary coastal/tropical sky captures preferred.

### 2.3 Interior / Exterior Hybrid Lighting
- For shots looking from inside out (terrace edge, lobby glass wall): simultaneous interior warm artificial light (pendants, lamps, warm glow) must be active alongside the exterior golden hour sky.
- The contrast between warm interior and luminous exterior is a signature of luxury hospitality and residential CGI — it must be present in all interior-facing renders.

### 2.4 IES Luminaires
- Every visible light fixture in the scene (pendant lights, spotlights, wall washers, uplighting, pool lighting) must be modelled as an **IES light** using real manufacturer photometric data. No generic spherical glows.

---

## 3. Materials Standard (PBR Pipeline)

All surfaces must use **Physically Based Rendering (PBR)** materials. Each material must include:

| Map | Purpose |
|-----|---------|
| Albedo | Base colour with no baked lighting |
| Metalness | Separates metallic from dielectric surfaces |
| Roughness / Glossiness | Sharpness vs. blurriness of reflections |
| Normal | Millimetre-level surface detail (stone veining, fabric, brushed metal) |
| Ambient Occlusion | Contact shadow depth in crevices |
| Displacement | Physical geometry push/pull for stone, timber, and textured surfaces |

### Approved SierraHomes Material Palette

| Surface | Specification |
|---------|---------------|
| Primary facade stone | White / cream travertine — honed finish, displacement-mapped, subtle backlit translucency |
| Window frames | Dark bronze anodised aluminium — metalness 1.0, roughness 0.15–0.20, warm tint |
| Glazing | Tinted glass shader — partial reflection + transmission, slight blue-green cast |
| Podium base | Honed dark granite or concrete — low gloss, heavy AO for depth |
| Interior flooring | Large-format porcelain tile — high polish, soft diffuse reflections |
| Pool water | Animated caustics, ripple normal map, depth-graded blue-green volumetric shader |
| Landscaping ground | Displacement-mapped soil, mulch, and lawn — no flat colour planes |

**Material source:** Poliigon, Quixel Megascans, or proprietary studio library. Asset quality must match these standards. Notify if substituting.

---

## 4. Atmosphere & Post-Processing Standard

### 4.1 Atmospheric Perspective
- All aerial and elevated renders must include **progressive haze** toward the horizon. Distant objects (ocean, city, far-ground buildings) are desaturated and shifted toward the ambient sky colour.
- This prevents the "scale model" appearance and gives correct spatial depth.

### 4.2 Depth of Field
- Optical depth of field is **mandatory** on all hero and close-up shots.
- Foreground and background must be intentionally soft, with the primary subject in sharp focus.
- Recommended settings: f/5.6–f/8 equivalent for facades; f/2.8–f/4 for lifestyle close-ups and amenity details.
- Focal length equivalent: 35–50mm for facade/context; 85–135mm for hero amenity close-ups.

### 4.3 Tone Mapping
- Raw render output must be processed through **ACES (Academy Color Encoding System)** or Filmic tone mapping.
- Highlights must not be blown out. Shadows must not be fully crushed to black (target: shadow lift ~10–15% above absolute black).

### 4.4 Color Grade (LUT)
- Final output must receive a warm LUT grade consistent with the SierraHomes visual identity:
  - Slightly lifted blacks (no crushed shadows)
  - Warm gold-cream highlights
  - Mild teal-orange contrast in shadow vs. highlight zones
  - Target: the image should feel like a well-graded luxury hospitality photograph, not a technical render

### 4.5 Sky Compositing
- The HDRI sky may be enhanced or replaced with a **hero sky photograph** composite (real photography, not stock CGI sky).
- Clouds should be present and dramatic but not threatening. No clear-sky-only renders for hero shots.
- Ocean horizon must be visible in all Nyali aerial shots — this is a unique SierraHomes asset and must be showcased.

---

## 5. Lifestyle Staging Standard

### 5.1 Human Figures
- Minimum **6–10 lifestyle figures** per exterior hero render.
- Figures must be fully rendered within the 3D scene — not flat 2D cutouts composited in post.
- Dress code: aspirational but not gaudy. Mix of international and Kenyan-presenting figures. No overly formal or office attire in leisure areas.
- Activity: poolside (2–3 figures), walking podium level (2–3 figures), rooftop terrace (2–3 figures).
- Figures confirm ceiling heights, terrace depths, and pool dimensions — scale must feel generous, never cramped.

### 5.2 Vehicles
- **2–3 luxury SUVs** at ground level entrance (Range Rover, G-Wagon, Porsche Cayenne or comparable). These anchor the price point without stating it explicitly.
- Vehicles must be clean, colour-neutral (white, silver, black), and positioned naturally at drop-off zone.

### 5.3 Vegetation
- All exterior renders must include **animated vegetation** variants for video/cinemagraph use: palm fronds, ornamental grasses, and tree canopies set with subtle wind sway.
- For still renders, vegetation must be fully rendered 3D assets (Forest Pack or equivalent) — no flat billboard trees.
- Pool landscaping: tropical species consistent with Nyali coastal environment (Traveller's Palm, Ficus, Bougainvillea).

### 5.4 Pool Water
- Pool surface must show **animated caustics** and realistic ripple normal maps. Static flat-blue pool water is not acceptable.
- Underwater pool lighting (warm white) must be visible in dusk and evening renders.

---

## 6. Camera & Composition Rules

| Shot Type | Camera Height | Focal Length | Angle | Notes |
|-----------|--------------|--------------|-------|-------|
| Building facade hero | 1.6m (eye level) | 35–50mm equiv | Slight off-axis | Pedestrian scale; shows human context |
| Tower height shot | 0.5m (low angle) | 24–28mm equiv | Worm's eye | Exaggerates tower dominance |
| Aerial context | 200–300m altitude equiv | 50mm equiv | 45° down | Shows ocean + neighbourhood |
| Interior/terrace threshold | 1.5m standing | 28–35mm equiv | Looking outward | Creates immersive, voyeuristic feeling |
| Rooftop amenity | 1.5m | 35mm equiv | Level or slight tilt | Showcases rooftop as aspirational destination |
| Pool deck lifestyle | 1.0m | 50mm equiv | Slightly low | Makes pool feel expansive |

**Composition rules (non-negotiable):**
- Horizon at lower third; building peak at upper third
- Leading lines (pool edge, pathway, corridor) must point toward the vanishing point and draw the eye through the image
- Sky negative space must balance with foreground landscaping — no purely sky-filled top halves

---

## 7. Mandatory Shot List — SierraHomes AmericanDream

The following shots are required for the M2 CGI production package. Mark as complete only when all three time-of-day variants are delivered.

| # | Shot | Priority | Notes |
|---|------|----------|-------|
| 1 | **Lounge Style Clubhouse — hero lifestyle** | CRITICAL | #1 SierraHomes differentiator; golden hour + dusk variants; 8+ figures |
| 2 | Building facade — full three-tower composition | High | Day + golden hour; ocean visible in background |
| 3 | Pool deck — aerial looking down, lifestyle | High | Animated water; figures; cabanas |
| 4 | Ground entrance — vehicular arrival | High | 2–3 vehicles; doorman/concierge figures; signage |
| 5 | Interior apartment — living area threshold shot | High | Looking out to balcony; Indian Ocean horizon |
| 6 | Interior apartment — master bedroom | Medium | Warm dusk light; premium finish showcase |
| 7 | Podium landscaping — pedestrian level | Medium | Tropical planting; figures walking |
| 8 | Aerial — site context with Nyali neighbourhood | Medium | Ocean visible; landmark proximity |
| 9 | Rooftop — night scene with pool lit | Medium | City glow in background; dusk/blue hour |
| 10 | Gym / wellness amenity | Low | Interior lighting only; lifestyle figures |

---

## 8. File Delivery Specification

| Format | Specification | Use |
|--------|--------------|-----|
| Master file | 300 DPI TIFF (minimum 5,000px wide) | Print, investor deck, all future reuse |
| Web/social | JPG 72 DPI, 2400px wide, sRGB | Website, social media |
| Time-of-day variants | 3 × master TIFF per shot | Golden hour / dusk / day |
| Layers | Photoshop .PSD with sky, figures, and vehicles on separate layers | Flexibility for market-specific edits |
| Video/cinemagraph | H.264 MP4, 1920×1080 min, 30fps | Social media, website hero background |

---

## 9. Quality Check — Before Accepting Delivery

Run through this checklist before approving CGI renders from any studio:

- [ ] Lighting is warm-toned, golden hour angle confirmed for Nyali latitude
- [ ] No flat noon lighting or featureless overcast sky in hero shots
- [ ] Atmospheric haze visible toward ocean horizon
- [ ] Pool water has caustics / ripple — not flat blue
- [ ] Lifestyle figures present and correctly scaled
- [ ] Vehicles present at entrance
- [ ] Depth of field active — foreground/background soft
- [ ] Color grade applied — shadows lifted, warm highlights
- [ ] Sky composite is dramatic, not stock-flat
- [ ] All three time-of-day variants delivered for each hero shot
- [ ] Master TIFFs received at 300 DPI / 5,000px+ minimum
- [ ] Rooftop cinema shot is present and designated as hero image

---

## 10. AI Image Generation — Interim Use

Until M2 CGI assets are delivered, AI-generated imagery (Midjourney, Adobe Firefly) may be used for:
- Social media teaser content (marked as "artist's impression")
- Internal mood boarding
- Concept direction for studio briefing

AI images **must not** be used for:
- Website hero sections
- Investor presentations
- Print advertising
- Any material where accuracy of the building design is implied

When generating AI property images, apply the following prompt structure:

```
[building description], [location context: Nyali Mombasa, Indian Ocean horizon visible],
golden hour lighting, HDRI sky, luxury residential CGI, V-Ray quality,
PBR materials, depth of field, lifestyle figures, tropical landscaping,
atmospheric perspective, warm color grade, photorealistic --ar 16:9 --style raw --q 2
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-01 | Standard created from DAMAC/Render Atelier pipeline research; applies to SierraHomes M2 CGI brief |

---

*This standard is maintained by the Marketing Agent. Any updates to visual identity, project specifications, or CGI studio briefs must be reflected here before the next production cycle.*

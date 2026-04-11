# Master AI Context — SierraHomes_AmericanDream

**Document Purpose:** Primary operational context for any AI assistant working on SierraHomes_AmericanDream. Provides project overview, conventions, AI execution model, current progress, and session history. For full architectural and financial design, see [SierraHomes_AmericanDream_architecture.md](./Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md).

**Memory Design Version:** 1.3
**Last Updated:** 2026-04-11
**Owner:** Hassan Qaseem — Sierra USA Homes Ltd
**Contact:** sales@sierrausahomes.com
**Website:** sierrausahomes.com
**Repository:** https://github.com/hassqass18/AI_Memory_Brain

> ⚠️ **Canonical Folder:** `staging/SierraHomes_AmericanDream` — this is the single source of truth. The legacy folder `SierraHomes_AmericanDream_AI_Training` has been retired and deleted.

---

## Governing Standards

**Operating Standard:** [CC/DE Operating Standard v2.0](../../Standards%20and%20Policy/CCDE-Operating-Standard.md)
**Communication Standard:** [Adaptive Communication Standard v1.0](../../Standards%20and%20Policy/Communication-Standard.md)

---

## 1. Project Overview

SierraHomes_AmericanDream is a **88-unit residential apartment complex** in **Nyali, Mombasa, Kenya** on **Plot MN/I/1691** — a 3-tower complex (Lincoln, Washington, Franklin, Benjamin-Benjamin-Franklin Tower (Franklin Wing) (Benjamin Wing)s), each 11 floors.

**Developer:** Sierra USA Homes Ltd. | **Architect:** Ecotecture Ltd.
**Website:** sierrausahomes.com | **Email:** sales@sierrausahomes.com

**Sales model:** For-sale only. Land acquired via **22% equity deal** — landowners receive ~19 units + KES 42M cash. Developer sells 85 units (⚠️TBC off-plan + 22 on-market).

### Current Financials (updated 2026-04-10)

| Metric | Value |
|--------|-------|
| Off-plan revenue | KES 1,060,000,000 |
| On-market revenue | KES 660,000,000 |
| **Total gross revenue** | **KES ⚠️TBC** |
| Net developer profit | KES ⚠️TBC |
| **ROI** | **⚠️TBC** |

### Current Unit Pricing (updated 2026-04-10)

| Unit | Off-Plan | On-Market | Size |
|------|----------|-----------|------|
| 1BR  | KES 10M  | KES 13M   | 966 sqft / 90 sqm |
| 2BR  | KES 17M  | KES 22M   | 1,311 sqft / 122 sqm |
| 3BR  | KES 23M  | KES 30M   | 2,618 sqft / 243 sqm |

---

## 2. Amenities (7 — fixed list, do not add or rename)

1. Swimming Pool
2. Residents' Gym
3. **Rooftop Lounge & Restaurant** ← always this exact name
4. Children's Play Area
5. Manicured Gardens
6. 24-Hour Security & CCTV
7. Private Lift — every tower

---

## 3. Brand & Contact Standards

| Field | Correct Value | ❌ Never Use |
|-------|--------------|-------------|
| Company | Sierra USA Homes Ltd | "Provecta Group", "A Provecta Group Development" |
| Website | sierrausahomes.com | sierrahomes.co.ke |
| Email | sales@sierrausahomes.com | hassan.qaseem@gc-usa.com |
| Rooftop | Rooftop Lounge & Restaurant | "Rooftop Cinema", "Rooftop Bar" |
| Navy | #1D235C | — |
| Gold | #D4AF1A | — |
| Fonts | Playfair Display + Inter | — |

---

## 4. Key Protocols

| Protocol | Command |
|----------|---------|
| Start session | "Execute open.md" |
| End session | "Execute closure.md" |
| Plan next phase | "Execute plan-release.md" |

---

## 5. Document Conventions

- Financial figures in KES
- **Unit sizes always in both sqft AND sqm**
- Dates: DD-MMM-YYYY
- Units: 1BR, 2BR, 3BR
- AI never invents project details — `architecture.md` is the only source of truth for specs
- AI never adds features to deliverables not explicitly requested in session

---

## 6. File Placement Rules

| Content Type | Destination |
|-------------|-------------|
| Financial models, budgets | `Finance/` |
| Investor deck, returns | `Investment/` |
| Marketing, brochures, banners, icons | `Marketing/` |
| Sales pipeline, unit tracker | `Sales/` |
| Legal — title, permits, contracts | `Legal/` |
| Risk, site security | `Security/` |
| Construction management | `Operations/` |
| Programme, milestones | `PMO/` |
| Board decks, strategy | `Executive/` |
| Staffing, HR | `People-n-Culture/` |
| Building design, specs | `Product_Development/SierraHomes_Tower/` |
| Phase plans, change log | `Product_Development/Releases/` |
| Brand assets (logos, renders) | `Marketing/assets/` |
| Amenity icon PNGs | `Marketing/Amenity_Icons/` |

---

## 7. AI Execution Rules

1. AI drafts; Human reviews, signs, approves
2. AI never executes financial transactions or legal obligations
3. All decisions logged in real-time to `decisions-learnings/`
4. AI never stores or echoes credentials
5. AI executes only steps defined in current phase
6. All deliverables must use current brand standards (name, email, website, colours, fonts)
7. Never reference Provecta Group in any new deliverable

---

## 8. Memory Tiers

### Tier 1 — Always Read at Session Init

| File | Purpose |
|------|---------|
| `Master-AI-Context.md` (this file) | Project overview, standards, conventions |
| `Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md` | Specs, financials — SINGLE SOURCE OF TRUTH |
| `NextSteps.md` | Current roadmap |

### Tier 2 — Index on Match

| File | When |
|------|------|
| `Key-Decisions.md` | Task matches a keyword |
| `Sessions.md` | Prior session context needed |
| `Risk-Registry.md` | Risk area touched |
| `Operations/PG-Consulting-Master-Summary-2026-03-30.md` | Any resource, budget, or personnel decision |

### Tier 3 — On Demand

| File | When |
|------|------|
| `Product_Development/Releases/` | Executing a phase |
| `Product_Development/Releases/Bugs.md` | Logging a change |
| `connectors/api-key-store.md` | Integrating with Zoho, Slack, GitHub |
| `Marketing/assets/` | Creating marketing materials |
| `Marketing/Amenity_Icons/` | Adding amenity icons to a deliverable |

---

## 9. Available Agents

| Domain | Folder |
|--------|--------|
| Finance & Investment | `Finance/agents/` |
| Investment | `Investment/agents/` |
| Marketing & Sales | `Marketing/agents/` |
| Sales | `Sales/agents/` |
| Legal | `Legal/agents/` |
| Security | `Security/agents/` |
| Executive & Strategy | `Executive/agents/` |
| PMO | `PMO/agents/` |
| Operations | `Operations/agents/` |
| People & Culture | `People-n-Culture/agents/` |

---

## 10. Current Deliverables (as of 2026-04-11)

| File | Description |
|------|-------------|
| `Marketing/SierraHomes_ExpoBanners_2026-04-10.html` | 6 expo banners — self-contained HTML |
| `Marketing/SierraHomes_ExpoBanners_2026-04-10.pdf` | Banners PDF export |
| `Marketing/SierraHomes_SalesBrochure_2026-04-10.html` | 10-page A4 brochure — self-contained HTML |
| `Marketing/Amenity_Icons/` | 7 amenity PNGs (256×256, gold on navy) |
| `Marketing/Email/email1–6_*.html` | 6-part email nurture sequence |
| `Finance/SierraHomes_CashFlowModel_2026-04-10.xlsx` | Cash flow model |
| `Investment/SierraHomes_InvestorDeck_2026-04-10.pptx` | 15-slide investor deck |
| `Investment/SierraHomes_InvestorReturns_2026-04-10.xlsx` | Investor returns analysis |
| `Sales/SierraHomes_UnitTracker_2026-04-10.xlsx` | 88-unit tracker |

---

## 11. Session History

| Session | Date | Key Outcomes |
|---------|------|--------------|
| 1 | 2026-03-29 | Project initialized, GitHub repo set up |
| 2 | 2026-03-30 | Financial modelling, architecture confirmed |
| 3 | 2026-03-30 | 3-tower design, land deal (22%) finalized |
| 4 | 2026-03-31 | Marketing materials, buyer personas |
| 5 | 2026-04-10 | Pricing update (1BR 10M/2BR 17M/3BR 23M), all financials rebuilt |
| 6 | 2026-04-10 | Banner redesigns B2/B3/B4, brochure, sqft+sqm everywhere |
| 7 | 2026-04-11 | OSM-verified map pins, Provecta retired, website/email updated, amenity icons PNG, QR code on Banner 1, folder merge to staging |

**Latest decisions:** `decisions-learnings/Key-Decisions-2026-04-11.md`

---

## 12. Project Progress

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1 — Pre-Launch | Active | ~15% — Marketing suite complete, permit blocked by Rajab's overdue drawings |
| Phase 2 — Off-Plan Launch | Pending | Marketing materials ready to deploy |
| Phase 3 — Construction | Pending | Q3 2027 – Aug 2029 |
| Phase 4 — Handover & Sell-Out | Pending | Target: KES ⚠️TBC |

---

## 13. Zoho Integration

**Portal ID:** org919184297 | **Tools:** `mcp__zoho__zoho_projects_*`

---

## 14. Operational Context

> Before ANY planning, resource, or financial decision: read `Operations/PG-Consulting-Master-Summary-2026-03-30.md`

SierraHomes shares personnel (Hassan, Rajab, Sylvester) and budget with Provecta Group Restructuring and Striker Marketing. All resource decisions must account for cross-project load.

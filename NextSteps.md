# Next Steps — AI Memory System (Root Level)

> **SCOPE:** This file tracks pending work on the **AI Memory system itself** — its structure, standards, policies, shared resources, and cross-project infrastructure. This is NOT a project-level file. Project-specific next steps live in each project's own `NextSteps.md`.

**Last Updated:** 2026-04-05

---

## Priority Queue

### High Priority

1. **Replace SVG floor plan placeholders with actual architectural drawings** — Website floor plan section uses illustrative SVGs. Once EcoTecture/Rajab delivers M2 assets (CGI renders + floor plan drawings), replace `<svg>` elements in `Marketing/sierrahomes-website.html` with actual images. **Blocked on Rajab delivery (6+ months overdue).**

2. **Configure website form endpoint** — `sierrahomes-website.html` form action is `#` placeholder. Connect to Zoho Forms webhook or CRM endpoint before any traffic is sent to the page.

3. **Confirm and publish contact details** — Phone (+254 700 000 000) and email (invest@sierrahomes.co.ke) are placeholders. Confirm correct contact details with Hassan before publishing.

2. **Trigger NEMA EIA immediately** — Critical path item for American Dream. Up to 90 days. Must start now to avoid blocking Q3 2026 construction commencement. Brief a NEMA-registered environmental consultant.

3. **Issue creative production briefs (M2)** — CGI render brief, hero video brief, and photography brief are all ready to issue (M1 deliverable). Source suppliers: CGI studio (Nairobi or remote), video production company, Mombasa photographer. M2 deadline: 15 May 2026.

4. **SPV incorporation** — Sierra USA Homes Ltd formation is pending. Legal action required by Hassan. Unblocks title deed transfer.

5. **Aibek partner bio brief** — Not yet started. Use ACS I/C profile as framing. Research via about.me, web search, and Notion. Three-tier format (75/175/350 words). **Priority: next session.**

6. **Hassan partner bio brief** — Not yet started. Use ACS S/I profile as framing. Leverage Kenya expertise and GC-USA positioning. Three-tier format. **Priority: next session.**

7. **Alex data gaps checklist** — Alex must complete before formal LP outreach: military branch/rank/duration, Peace Corps exact dates, Liquidstar grant scope and total value, GE Vernova tenure, any prior roles, languages, certifications. **Owner: Alex.**

8. **Rainmaker bonus language** — All partners to draft their proposals for next meeting vote (April 12, 2026). **Owner: All partners.**

9. **MSIFS Investment Declaration Letter** — Draft exists in Notion (Kenyan Channels page). Needs MSIFS branding, partner signatures, and dispatch to 5 addressees. **Owner: Hassan + Alex.**

6. **KenInvest OSC Registration** — Must be submitted via eprocedures.investkenya.go.ke. Required before any formal government engagement. **Owner: Hassan.**

7. **GP Agreement Finalization** — Working draft has open items (#28 number mismatches, #30 4th partner placeholder removal). All partners reviewing — April 1 deadline now past due. **Owner: All partners.**

8. **NIF Act 2026 — Early Engagement** — National Infrastructure Fund (signed March 9, 2026) is building first project pipeline. Identify NIF contact and submit expression of interest for Lamu grain handling. First-mover advantage window.

9. **MSIFS Full PROJECT_MEMORY_INIT** — Staging folder created at `projects/staging/MSIFS/`. Run full project memory initialization when fund matures past formation phase (post first-close or post first IC-ready deal).

10. **Replace personal branding website placeholder images** — Drop actual photos into `projects/staging/PersonalBranding_AndreHassanWilson/Portfolio-Site/` with filenames: `hassan-hero.jpg`, `ai-memory-brain.jpg`, `sierra-homes.jpg`, `kazakhstan-bilateral.jpg`. **Owner: Hassan.**

11. **Deploy personal branding website** — Choose hosting (Netlify, Vercel, GitHub Pages, or custom domain). Connect domain. Current site is at `Portfolio-Site/index.html`.

12. **Begin LinkedIn content execution** — Follow 90-day content calendar in `AI-Agent-Thought-Leadership-Reference.md`. Week 1-4: foundation posts (origin story, AI Memory Brain methodology, RevOps frameworks).

### Medium Priority

1. **Begin M2 — Core Digital Assets Production** (opens 15 Apr 2026):
   - Landing page design and copy (AI-executable once brand guidelines approved)
   - Brochure/investment pack layout
   - Floor plan graphics
   - WhatsApp lead magnet (investment summary PDF)

2. **Configure Zoho MCP Server** — Add Zoho credentials from `HassanKeys.txt` into `zoho-mcp-server/` configuration.

3. **Add Slack Bot Token** — If Slack messaging integration required, add `xoxb-` Bot Token to `HassanKeys.txt`.

4. **American Dream project page — supplier sourcing** — QS, PM, and construction contractor ITT prep (AI-executable).

### Low Priority

1. **Customise CC/DE Operating Standard** — Review Section 3 (Reporting Cadence), Section 4 (Financial Controls), Section 7 (CRM Tagging).
2. **Create contact profiles** — Add key stakeholders (Rajab/EcoTecture, legal counsel, QS) to `contacts/` using `_PROFILE-TEMPLATE.md`. *(Note: GP partner profiles for Alex, Aibek, Hassan completed 2026-04-05.)*
3. **Customise Adaptive Communication Standard** — Set default channel, DISC preferences, information density preferences.

---

## Recently Completed

| Item | Date | Notes |
|------|------|-------|
| Run setup-AI-Memory.md | 2026-03-29 | Full initialization completed — owner, keys, models, standards configured |
| Marketing research — DAMAC/Emaar best practices | 2026-03-30 | Off-plan funnel, channel strategy, diaspora marketing synthesized |
| Create Notion Marketing Campaign & Assets project | 2026-03-30 | 34 tasks across 6 milestones (M1–M6), all bidirectionally linked |
| M1 Milestone — Brand & Strategy Foundation | 2026-03-30 | All 5 tasks Done: buyer personas, brand voice, messaging hierarchy, competitive analysis, creative briefs |
| American Dream Stage 2 — task creation | 2026-03-30 | 15 permit/statutory approval tasks created in Notion, all linked to project |
| American Dream project page — Stage overview | 2026-03-30 | Stage 1 ✅ complete, Stage 2 🔄 active content added to project page |
| Establish deliverables sub-page pattern | 2026-03-30 | Standard practice: all completed Notion tasks get a 📄 Deliverables sub-page |
| SierraHomes website V1 built | 2026-03-31 | Full single-file HTML website — Seraphic design system, navy/gold, all sections |
| SierraHomes website V2 revisions | 2026-03-31 | Testimonials removed; Leaflet map added (16 Nyali pins, 2-mile radius); 3 towers (Benjamin-Franklin merged); all pricing removed; Towers → Floor Plans tabbed section |
| Marketing Agent activated | 2026-03-31 | Agent loaded with full SierraHomes context, 8 skills available |
| DAMAC CGI research compiled | 2026-04-01 | Full production pipeline documented: V-Ray, HDRI dual-lighting, PBR materials, golden hour, lifestyle staging, ACES tone mapping, DOF. Saved to `Marketing/DAMAC-CGI-Research.md`. Includes M2 brief spec table. |
| SierraHomes website V3 revisions | 2026-04-01 | Hero copy, intro copy (American Dream Apartments), EcoTecture removed, floor plan tabs (ocean/garden view), rooftop restaurant, KES pricing removed, request-only CTAs, header relative, plot removed, USA + Kenya contacts added. |
| MSIFS Notion Dashboard created | 2026-04-03 | Fund overview, investment thesis, pipeline highlights, GP team, impact framework |
| MSIFS Action Log database created | 2026-04-03 | 49 tasks from Excel, all with Status/Priority/Assigned To/Due Date/Notes |
| GP Agreement Overview in Notion | 2026-04-03 | Structured summary of working draft — governance, economics, vesting, incentives |
| Kenya Government Engagement Strategy | 2026-04-03 | Agent-revised strategy with political risk, beachhead analysis, gatekeeper sequence, decision gates |
| 7 MSIFS agents activated | 2026-04-03 | Tiered activation: Investment, Market Dev, Politics (Tier 1); Strategy, Finance, Growth, Sales (Tier 2) |
| MSIFS project staged | 2026-04-03 | `projects/staging/MSIFS/` with README.md and activated-agents.md |
| Personal branding project staged | 2026-04-03 | `projects/staging/PersonalBranding_AndreHassanWilson/` with 6 subdirectories, README, 9 agents activated |
| Notion branding strategy + Kanban board | 2026-04-03 | Branding strategy page + 36-task Digital Footprint task board |
| Competitive intelligence compiled | 2026-04-03 | AI-Agent-Thought-Leadership-Reference.md — 15+ creators, 20+ products, monetization strategy, content calendar |
| Brand messaging corrected | 2026-04-03 | "Early adopter/contributor at Qosil" across all files and Notion |
| Gilber design template captured | 2026-04-03 | 616-line markdown with all colors, fonts, animations, JS properties |
| Personal branding website built | 2026-04-03 | 1,257-line single-file HTML — 7 sections, dark theme, full-page scroll, responsive, image placeholders |
| MSIFS April 5 meeting transcript converted | 2026-04-05 | 27-page PDF → structured markdown with 6 topic sections, 50 action items, decisions log, verbatim transcript |
| Contact profiles created — Alex, Aibek, Hassan | 2026-04-05 | DISC/OCEAN/Hofstede/Trust profiles for all 3 GP partners. Alex: D/C. Aibek: I/C. Hassan: S/I. Saved locally + to Notion |
| 26 action items pushed to MSIFS Notion Action Log | 2026-04-05 | Organized by owner (MTG/ALX/AIB/HAS/ALL), tagged with priority, due date, and notes |
| Alex partner bio brief v2 completed | 2026-04-05 | Three-tier bio (75/175/350 words). Full career arc discovered: UF → Peace Corps Ukraine → Liquidstar → GE Vernova → BU MBA → MSIFS. LinkedIn optimization and data gaps checklist included |

---

*This is a root-level system file. It tracks work on the AI Memory system, NOT individual projects.*

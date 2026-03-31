# Next Steps — AI Memory System (Root Level)

> **SCOPE:** This file tracks pending work on the **AI Memory system itself** — its structure, standards, policies, shared resources, and cross-project infrastructure. This is NOT a project-level file. Project-specific next steps live in each project's own `NextSteps.md`.

**Last Updated:** 2026-03-31

---

## Priority Queue

### High Priority

1. **Replace SVG floor plan placeholders with actual architectural drawings** — Website floor plan section uses illustrative SVGs. Once EcoTecture/Rajab delivers M2 assets (CGI renders + floor plan drawings), replace `<svg>` elements in `Marketing/sierrahomes-website.html` with actual images. **Blocked on Rajab delivery (6+ months overdue).**

2. **Configure website form endpoint** — `sierrahomes-website.html` form action is `#` placeholder. Connect to Zoho Forms webhook or CRM endpoint before any traffic is sent to the page.

3. **Confirm and publish contact details** — Phone (+254 700 000 000) and email (invest@sierrahomes.co.ke) are placeholders. Confirm correct contact details with Hassan before publishing.

2. **Trigger NEMA EIA immediately** — Critical path item for American Dream. Up to 90 days. Must start now to avoid blocking Q3 2026 construction commencement. Brief a NEMA-registered environmental consultant.

3. **Issue creative production briefs (M2)** — CGI render brief, hero video brief, and photography brief are all ready to issue (M1 deliverable). Source suppliers: CGI studio (Nairobi or remote), video production company, Mombasa photographer. M2 deadline: 15 May 2026.

4. **SPV incorporation** — Sierra USA Homes Ltd formation is pending. Legal action required by Hassan. Unblocks title deed transfer.

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
2. **Create contact profiles** — Add key stakeholders (Rajab/EcoTecture, legal counsel, QS) to `contacts/` using `_PROFILE-TEMPLATE.md`.
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

---

*This is a root-level system file. It tracks work on the AI Memory system, NOT individual projects.*

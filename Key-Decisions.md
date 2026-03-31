# Key Decisions — AI Memory System (Root Level)

> **SCOPE:** This file indexes decisions about the **AI Memory system itself** — its structure, standards, policies, shared resources, and cross-project infrastructure. This is NOT a project-level file. Project-specific decisions live in each project's own `Key-Decisions.md`.

**Last Updated:** 2026-03-31

---

## Keyword Index

When performing any action that matches a keyword below, read the referenced detail file before proceeding.

| Keyword | Decision / Topic | Detail File | Date |
|---------|-----------------|-------------|------|
| Zoho, CRM, enterprise OS | D-001: Zoho One selected as enterprise OS | Key-Decisions-2026-03-29_2200.md | 2026-03-29 |
| AI model, Claude, primary model | D-002: Claude Sonnet as primary model | Key-Decisions-2026-03-29_2200.md | 2026-03-29 |
| standards, CC/DE, ACS, policy | D-003: Standards accepted as-is | Key-Decisions-2026-03-29_2200.md | 2026-03-29 |
| repository, git, GitHub, repo URL | D-004: Repo set to hassqass18/AI_Memory_Brain | Key-Decisions-2026-03-29_2200.md | 2026-03-29 |
| Slack, communication, token | D-005: Slack App-Level Token registered | Key-Decisions-2026-03-29_2200.md | 2026-03-29 |
| GitHub, network, Cowork, push | L-001: GitHub push blocked in Cowork sandbox | Key-Decisions-2026-03-29_2200.md | 2026-03-29 |
| Notion, task, deliverable, sub-page | D-006: Deliverables sub-page pattern adopted as standard | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| WhatsApp, channel, diaspora, conversion | D-007: WhatsApp-first channel strategy for SierraHomes | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| rooftop, cinema, bar, hero, differentiator | D-008: Rooftop cinema/bar as hero differentiator in all campaigns | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| American Dream, Stage 2, permits, NEMA, SPV | D-009: American Dream Stage 2 activated | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| Notion, relation, reverse, API | L-002: Notion reverse relations require explicit update call | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| npm, install, sandbox, Cowork | L-003: npm global install blocked — use local install | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| Notion, replace_content, child page | L-004: replace_content must preserve child pages | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| validate.py, docx, skill, path | L-005: validate.py path resolution fix for docx skill | Key-Decisions-2026-03-30_0000.md | 2026-03-30 |
| Seraphic, website, design, template, navy, gold | D-010: Seraphic template adopted as SierraHomes website design language | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| Leaflet, map, CartoDB, neighbourhood, Nyali | D-011: Leaflet.js + CartoDB Light tiles for neighbourhood map | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| pricing, unit cost, enquire, lead capture | D-012: Unit pricing removed from public website — enquire-only | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| Benjamin, Franklin, tower, 3 towers, merge | D-013: Benjamin + Franklin merged into Benjamin-Franklin Tower | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| floor plan, tabs, SVG, room breakdown | D-014: Towers section replaced with tabbed Floor Plans section | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| Leaflet, scrollWheelZoom, map, UX | L-006: Leaflet scrollWheelZoom must be false on scroll pages | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| divIcon, className, Leaflet, custom marker | L-007: L.divIcon className must be empty string for custom icons | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| SVG, font-family, Google Fonts, text element | L-008: SVG text needs explicit font-family — doesn't inherit CSS | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| IntersectionObserver, tab, fade-up, animation | L-009: Fade-up must be re-triggered on tab panel change | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |
| floor plan, CGI, EcoTecture, Rajab, M2, drawings | L-010: Architectural drawings critical path for M2 — still overdue | Key-Decisions-2026-03-31_2017.md | 2026-03-31 |

---

## Latest Decisions Summary

**Setup session (2026-03-29):** System initialised for Hassan Qaseem / Provecta Group. Zoho One selected as enterprise OS. Claude Sonnet set as primary model. CC/DE and ACS standards accepted as-is. Repository confirmed as hassqass18/AI_Memory_Brain. Keys registered for Zoho, Slack, GitHub.

**SierraHomes M1 + American Dream Stage 2 session (2026-03-30):** Deliverables sub-page pattern established as Notion standard for all projects. WhatsApp-first channel strategy confirmed for SierraHomes and future real estate projects. Rooftop cinema/bar locked as hero differentiator. American Dream Stage 2 activated — 15 permit/statutory tasks created. M1 milestone fully completed (5/5 tasks Done with deliverables). Four Notion API learnings documented (reverse relations, npm install, replace_content child pages, validate.py path).

**SierraHomes Website Build session (2026-03-31):** Marketing Agent activated. SierraHomes AmericanDream website built (single-file HTML) using Seraphic design template — navy/gold palette, Cormorant Garamond display font, 96–128px section spacing. Interactive Leaflet.js neighbourhood map added (16 Nyali amenity pins, 2-mile radius, hover popups). Tower count corrected to 3 (Benjamin-Franklin merged). All unit pricing removed — enquire-only model adopted. Towers section replaced with tabbed interactive Floor Plans section (4 plans, SVG diagrams). 5 technical learnings documented (Leaflet, SVG fonts, IntersectionObserver tabs).

---

## File Chronology

| File | Date | Session Focus |
|------|------|---------------|
| Key-Decisions-2026-03-29_2200.md | 2026-03-29 | Initial setup — owner, keys, models, standards, repo |
| Key-Decisions-2026-03-30_0000.md | 2026-03-30 | SierraHomes M1 milestone, American Dream Stage 2, Notion patterns |
| Key-Decisions-2026-03-31_2017.md | 2026-03-31 | SierraHomes website build, Seraphic design, Leaflet map, 3 towers, pricing removed, floor plans |

---

*This is a root-level system file. It tracks decisions about the AI Memory system, NOT individual projects.*

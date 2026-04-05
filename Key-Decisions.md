# Key Decisions — AI Memory System (Root Level)

> **SCOPE:** This file indexes decisions about the **AI Memory system itself** — its structure, standards, policies, shared resources, and cross-project infrastructure. This is NOT a project-level file. Project-specific decisions live in each project's own `Key-Decisions.md`.

**Last Updated:** 2026-04-05

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
| American Dream Apartments, development name, branding | D-015: "American Dream Apartments" adopted as primary development name in copy | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| pricing, KES, request, enquire, off-plan | D-016: All KES pricing removed — request-only model adopted | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| EcoTecture, architect, attribution, website | D-017: EcoTecture removed from all public website copy | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| floor plan, tower, Lincoln, Washington, ocean view, garden view | D-018: Tower names removed from primary floor plan navigation | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| header, navbar, fixed, relative, scroll | D-019: Header changed from fixed to relative positioning | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| contact, phone, USA, Kenya, email, sales | D-020: USA + Kenya office numbers and sales email confirmed on site | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| closure, session, memory, lost | L-011: Prior session changes not captured — closure protocol not run | Key-Decisions-2026-04-01_2054.md | 2026-04-01 |
| MSIFS, staging, project, AI Memory | D-021: MSIFS project staged in AI Memory Brain | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| agents, activation, tier, MSIFS, advisor | D-022: 7 AI agents permanently activated for MSIFS | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| Lamu, grain, Kenya, beachhead, port | D-023: Lamu grain handling as Kenya beachhead | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| gatekeeper, KenInvest, engagement, sequential | D-024: Sequential gatekeeper engagement for Kenya | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| Kazakhstan, capital, staggered, deployment | D-025: Staggered capital deployment — Kazakhstan first | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| Notion, database, task, Excel, action log | L-012: Notion database for task tracking is superior to Excel action log | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| agent, framework, strategy, analysis, integrated | L-013: Agent-integrated analysis produces materially different strategy | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| NIF, National Infrastructure Fund, Kenya, 2026 | L-014: NIF Act 2026 is a first-mover opportunity | Key-Decisions-2026-04-03_1800.md | 2026-04-03 |
| personal branding, staging, AI Memory, RevOps | D-026: Personal branding project staged in AI Memory Brain | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| agents, activation, branding, marketing, social | D-027: 9 AI agents activated for personal branding | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| authority, framework, thought leadership, pillars | D-028: Three-Pillar Authority Framework adopted (40/40/20) | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| messaging, correction, adopter, Qosil, contributor | D-029: Brand messaging corrected to "early adopter/contributor at Qosil" | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| Gilber, theme, website, dark, full-page scroll | D-030: Gilber theme adopted as personal website design system | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| monetization, consulting, AI Memory Brain, tiers | D-031: AI Memory Brain implementation/consultation as first monetizable item | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| LinkedIn, scraping, 999, blocked | L-015: LinkedIn blocks web scraping — use uploaded profile docs | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| Chrome, JS, extraction, image, blocked, query | L-016: Chrome JS extraction blocked by image URLs with query params | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| docx, binary, Read, python-docx | L-017: Binary docx files need Python docx library, not Read tool | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| Cowork, images, conversation, placeholder | L-018: Cowork conversation images not saved as files on disk | Key-Decisions-2026-04-03_2200.md | 2026-04-03 |
| DISC, OCEAN, Hofstede, profiling, GP partners | D-032: DISC/OCEAN/Hofstede profiling adopted as standard for all MSIFS GP partners | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| Alex, DISC, D/C, dominant, conscientious | D-033: Alex (Alexander Orta) assessed as D/C DISC style | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| Hassan, DISC, S/I, steady, influential | D-034: Hassan (Andre Wilson) assessed as S/I DISC style | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| Aibek, DISC, I/C, influential, conscientious | D-035: Aibek (Aibek Sabirov) assessed as I/C DISC style | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| Alex, career, Peace Corps, Liquidstar, GE Vernova, bio | D-036: Alex's full career arc confirmed via web research | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| bio, three-tier, short, medium, long, partner | D-037: Three-tier bio format adopted as standard for partner bio briefs | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| LinkedIn, 999, blocked, WebFetch | L-019: LinkedIn direct WebFetch returns HTTP 999 (blocked) | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| LinkedIn, Chrome, automation, lazy-load, sections | L-020: LinkedIn Chrome automation returns only headline — full profile sections do not load | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| about.me, career, research, supplement | L-021: about.me profiles can contain rich career data not visible on LinkedIn | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| Notion, database, data_source_id, create-pages | L-022: Notion create-pages for database entries requires data_source_id, not database_id | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |
| Notion, update-page, replace_content, new_str | L-023: Notion update-page replace_content requires new_str parameter, not content | Key-Decisions-2026-04-05_2200.md | 2026-04-05 |

---

## Latest Decisions Summary

**Setup session (2026-03-29):** System initialised for Hassan Qaseem / Provecta Group. Zoho One selected as enterprise OS. Claude Sonnet set as primary model. CC/DE and ACS standards accepted as-is. Repository confirmed as hassqass18/AI_Memory_Brain. Keys registered for Zoho, Slack, GitHub.

**SierraHomes M1 + American Dream Stage 2 session (2026-03-30):** Deliverables sub-page pattern established as Notion standard for all projects. WhatsApp-first channel strategy confirmed for SierraHomes and future real estate projects. Rooftop cinema/bar locked as hero differentiator. American Dream Stage 2 activated — 15 permit/statutory tasks created. M1 milestone fully completed (5/5 tasks Done with deliverables). Four Notion API learnings documented (reverse relations, npm install, replace_content child pages, validate.py path).

**SierraHomes Website Build session (2026-03-31):** Marketing Agent activated. SierraHomes AmericanDream website built (single-file HTML) using Seraphic design template — navy/gold palette, Cormorant Garamond display font, 96–128px section spacing. Interactive Leaflet.js neighbourhood map added (16 Nyali amenity pins, 2-mile radius, hover popups). Tower count corrected to 3 (Benjamin-Franklin merged). All unit pricing removed — enquire-only model adopted. Towers section replaced with tabbed interactive Floor Plans section (4 plans, SVG diagrams). 5 technical learnings documented (Leaflet, SVG fonts, IntersectionObserver tabs).

**MSIFS Project Initialization session (2026-04-03):** MSIFS ($200M frontier market infrastructure PE fund) staged in AI Memory Brain. 7 AI agents permanently activated in tiered structure (Investment, Market Dev, Politics as Tier 1 core). Notion workspace built: Dashboard, 49-task Action Log database, GP Agreement Overview, Kenya Government Engagement Strategy. Lamu Port grain handling identified as Kenya beachhead via agent-integrated analysis. Sequential gatekeeper engagement strategy adopted. Staggered capital deployment: Kazakhstan first, Kenya parallel registration. NIF Act 2026 discovered as first-mover opportunity.

**Personal Branding session (2026-04-03):** Personal branding project staged for Andre "Hassan" Wilson. 9 agents activated. Notion branding strategy page + 36-task Kanban board created. Competitive intelligence compiled (15+ creators, 20+ AI products, monetization tiers). Critical messaging correction: "created AI Memory Brain" → "early adopter/contributor at Qosil." Gilber WordPress theme captured via Chrome automation. Full personal branding website built (1,257-line single-file HTML): 7 full-page scroll sections, dark theme (#161616 + #CF000F accent), Roboto/Poppins fonts, animated progress bars, career timeline, project cards with images, contact form. Three-Pillar Authority Framework (40/40/20) adopted. AI Memory Brain implementation/consultation set as first monetizable offering.

**MSIFS Meeting Processing + Profiling session (2026-04-05):** 27-page meeting transcript converted to structured markdown (6 topic sections, 50 action items, decisions log, verbatim transcript). DISC/OCEAN/Hofstede profiling adopted as standard for all MSIFS GP partners (D-032). Contact profiles built for Alex (D/C), Hassan (S/I), and Aibek (I/C). 26 action items pushed to MSIFS Notion Action Log. Alex partner bio brief enriched via web research — full career arc confirmed (UF → Peace Corps Ukraine → Liquidstar USAID/UNDP/UNICEF → GE Vernova → BU MBA → MSIFS). Three-tier bio format adopted as standard (75/175/350 words). LinkedIn scraping blocked (L-019); about.me supplement strategy established (L-021). Notion data_source_id fix documented (L-022).

---

## File Chronology

| File | Date | Session Focus |
|------|------|---------------|
| Key-Decisions-2026-03-29_2200.md | 2026-03-29 | Initial setup — owner, keys, models, standards, repo |
| Key-Decisions-2026-03-30_0000.md | 2026-03-30 | SierraHomes M1 milestone, American Dream Stage 2, Notion patterns |
| Key-Decisions-2026-03-31_2017.md | 2026-03-31 | SierraHomes website build, Seraphic design, Leaflet map, 3 towers, pricing removed, floor plans |
| Key-Decisions-2026-04-01_2054.md | 2026-04-01 | American Dream Apartments name, KES pricing removed, EcoTecture removed, tower names from floor plans, header fixed→relative, contact details confirmed |
| Key-Decisions-2026-04-03_1800.md | 2026-04-03 | MSIFS staged, 7 agents activated, Lamu beachhead, sequential gatekeeper engagement, staggered capital deployment, Notion DB > Excel, agent-integrated analysis, NIF Act 2026 |
| Key-Decisions-2026-04-03_2200.md | 2026-04-03 | Personal branding staged, 9 agents activated, Three-Pillar Authority, messaging correction (adopter not creator), Gilber theme, website built, AI Memory Brain monetization, LinkedIn scraping blocked, Chrome JS extraction, docx binary, Cowork images |
| Key-Decisions-2026-04-05_2200.md | 2026-04-05 | MSIFS meeting processing, DISC/OCEAN profiling standard, Alex D/C, Hassan S/I, Aibek I/C, Alex career arc (Peace Corps + Liquidstar + GE Vernova), three-tier bio format, LinkedIn 999 fix, about.me supplement, Notion data_source_id, Notion new_str |

---

*This is a root-level system file. It tracks decisions about the AI Memory system, NOT individual projects.*

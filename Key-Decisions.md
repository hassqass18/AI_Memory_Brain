# Key Decisions — AI Memory System (Root Level)

> **SCOPE:** This file indexes decisions about the **AI Memory system itself** — its structure, standards, policies, shared resources, and cross-project infrastructure. This is NOT a project-level file. Project-specific decisions live in each project's own `Key-Decisions.md`.

**Last Updated:** 2026-04-10

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
| git, index, corrupt, Cowork, sandbox | L-024: Git index file corrupt in Cowork sandbox — cannot rm .git/index | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| scroll, align-items, center, heading, hidden, overflow | L-025: align-items center hides heading on full-page scroll sections taller than 100vh | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| LinkedIn, 999, skills, context, domain knowledge | L-026: LinkedIn returns 999 — use AI Memory context + domain knowledge to reconstruct skill profile | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| resume, headline, RevOps, AI Consultant, branding | D-038: "RevOps & AI Consultant" adopted as resume headline for personal branding | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| YATR, duplicate, dates, contract, corrected | D-039: YATR corrected to single entry Jun 2024–Sep 2025 | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| T-Mobile, Freedom Builders, remove, reframe, resume | D-040: T-Mobile removed; Freedom Builders reframed as ops/compliance angle | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| psychology, education, differentiator, brand, I/O | D-041: I/O Psychology degree featured prominently as brand differentiator | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| executive summary, cross-continent, AI, identity, lead | D-042: Executive summary leads with cross-continent operator + AI practitioner identity | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| case studies, proof, authority, personal branding, next | D-043: Project case studies added as next session priority for personal branding | Key-Decisions-2026-04-06_0000.md | 2026-04-06 |
| Provecta, contractor, Kenya, Mombasa, LLC, Limited | D-044: Contractor entity changed to Provecta Group Limited (Mombasa, Kenya) | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| Article 3, trademarks, publicity, removed, PM contract | D-045: Article 3 Publicity & Trademarks removed from Ecotecture PM contract | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| Stage 1, payment, addendum, pre-settlement, schedule | D-046: Stage 1 payment kept in schedule — pre-settlement to be formalised in Addendum A | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| NCIA, arbitration, Nairobi, Kenya, dispute resolution | D-047: NCIA arbitration adopted for Ecotecture contract (both parties Kenyan-registered) | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| DLP, defects liability, 6 months, practical completion, delivery | D-048: 6-month Defects Liability Period defined in Art. 5.2; Project Delivery = Certificate of Making Good Defects | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| Plus Code, OLC, map pin, GPS, openlocationcode | L-027: Plus Code decoding requires openlocationcode library — manual OLC produces wrong coordinates | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| Art 8.2, indemnification, copy-paste, critical, contractor | L-028: Art. 8.2 was verbatim copy of 8.1 — Customer had no indemnification obligation to Contractor | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| payment table, discrepancy, KES 400000, reconcile, stage 17 | L-029: Contract payment table totals KES 9,100,000 vs stated KES 9,500,000 — KES 400,000 gap unresolved | Key-Decisions-2026-04-08_0000.md | 2026-04-08 |
| LinkedIn, Creator Mode, desktop, 2026, mobile | D-049: LinkedIn Creator Mode removed from all desktop UI paths — mobile app only | Key-Decisions-2026-04-09_1100.md | 2026-04-09 |
| staging, infrastructure, audit, remediation, protocol | D-050: All staging folders must conform to staging.md protocol — 4 folders remediated | Key-Decisions-2026-04-09_1100.md | 2026-04-09 |
| agents, asset, Media, Portfolio-Site, operational | D-051: Asset-only folders do not need agents/ subfolders — only operational departments | Key-Decisions-2026-04-09_1100.md | 2026-04-09 |
| LinkedIn, Creator Mode, 404, desktop, workaround | L-030: LinkedIn Creator Mode inaccessible via desktop in 2026 — use mobile app | Key-Decisions-2026-04-09_1100.md | 2026-04-09 |
| staging, infrastructure, continuity, memory, anchor | L-031: Staging folders without core infrastructure files break AI Memory continuity | Key-Decisions-2026-04-09_1100.md | 2026-04-09 |
| cross-link, nav, Provecta, AIMemoryBrain, mutual | D-052: AIMemoryBrain and Provecta Group sites cross-linked via nav | Key-Decisions-2026-04-09_1900.md | 2026-04-09 |
| popup, assessment, Provecta, AMB, lead capture | D-053: AMB-styled 7-question AI readiness assessment popup embedded in Provecta site | Key-Decisions-2026-04-09_1900.md | 2026-04-09 |
| scroll, trigger, popup, 60%, intent | D-054: Popup scroll-triggered at 60% page depth (replaces time-based triggers) | Key-Decisions-2026-04-09_1900.md | 2026-04-09 |
| Netlify, index.html, homepage, zip, deployment | D-055: Provecta site renamed index.html as Netlify homepage in joint zip | Key-Decisions-2026-04-09_1900.md | 2026-04-09 |
| Netlify, 404, index.html, zip, static host | L-032: Netlify 404 if no index.html at zip root — always rename primary HTML to index.html | Key-Decisions-2026-04-09_1900.md | 2026-04-09 |
| Chrome, local, staging, live site, clarification | L-033: "The project website" defaults to live domain — clarify local vs live with user | Key-Decisions-2026-04-09_1900.md | 2026-04-09 |
| Keziah, Facebook, engagement, primary, Kenya, real estate | D-056: Facebook elevated to primary platform in Keziah social media strategy | Key-Decisions-2026-04-10_1348.md | 2026-04-10 |
| three-platform, Meta, cross-post, Instagram, LinkedIn, social | D-057: Three-platform strategy adopted — Facebook primary + Instagram cross-post + LinkedIn authority | Key-Decisions-2026-04-10_1348.md | 2026-04-10 |
| social media, platform, audit, existing, engagement, Kenya | L-035: Always audit existing platform performance before prescribing social media strategy | Key-Decisions-2026-04-10_1348.md | 2026-04-10 |
| docx, overwrite, permission, version, workspace, cp | L-036: docx permission conflict when overwriting open workspace files — use versioned filenames | Key-Decisions-2026-04-10_1348.md | 2026-04-10 |
| Premier Realty, company profile, contacts, template | D-058: Premier Realty profiled as first company-level contact — adapted template is now standard for companies | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| PRL, ranking, Kenya, land sales, mid-tier, #27 | D-059: PRL ranked #27 Kenya land sales — mid-tier market position confirmed | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| Provecta, proposal, RevOps, KES, pricing, 3 quarters | D-060: Provecta RevOps proposal priced at KES 1,150,000 over Q2–Q4 2026 | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| SPICED, proposal, demonstration, methodology, applied | D-061: SPICED framework applied directly to PRL inside the proposal as capability demonstration | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| engagement, phased, Q2, Q3, Q4, foundation, activation, scale | D-062: 3-quarter phased engagement structure adopted for PRL (Foundation → Activation → Scale) | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| Instagram, YouTube, WebFetch, JS, blocked, social media | L-037: Instagram and YouTube block WebFetch — JS-only rendering; use search results or mobile | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| Facebook, WebFetch, likes, Google, search snippet | L-038: Facebook page likes recoverable via Google search snippet, not direct WebFetch | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| Kenya, real estate, ranking, Gazebo, Finsco, competitive | L-039: Kenya real estate ranking sites (Gazebo, Finsco, Tuko) are best competitive intelligence source | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| BuyRentKenya, agent profile, listing volume, proxy, research | L-040: BuyRentKenya agent profiles are reliable listing volume proxy for Kenya real estate companies | Key-Decisions-2026-04-10_0900.md | 2026-04-10 |
| LifeOS, personal OS, life management, staging, Hassan | D-063: LifeOS staged as personal life management system | Key-Decisions-2026-04-10_1500.md | 2026-04-10 |
| LifeOS, domains, health, finance, relationships, projects, goals, plans | D-064: Six domains in scope for LifeOS | Key-Decisions-2026-04-10_1500.md | 2026-04-10 |
| LifeOS, intake, check-in, hybrid, daily log, structured | D-065: Hybrid intake model adopted for LifeOS (daily check-in + structured logs) | Key-Decisions-2026-04-10_1500.md | 2026-04-10 |
| LifeOS, output, briefing, action queue, decision support | D-066: Full output stack adopted (weekly briefing + live action queue + on-demand decisions) | Key-Decisions-2026-04-10_1500.md | 2026-04-10 |
| LifeOS, OKR, Q2, fitness, finance, AMB GTM, goals | D-067: LifeOS Q2 2026 OKRs set — Fitness, Financial Clarity, AMB GTM Launch | Key-Decisions-2026-04-10_1700.md | 2026-04-10 |
| LifeOS, staging, complete, PROJECT_MEMORY_INIT, ready | D-068: LifeOS staging 100% complete — all 3 documents done, ready for initialization | Key-Decisions-2026-04-10_1700.md | 2026-04-10 |
| SierraHomes, staging, canonical, AI Training, consolidation | D-049 (root): SierraHomes staging confirmed as canonical folder; AI_Training folder retired | Key-Decisions-2026-04-11_1559.md | 2026-04-11 |
| Master-Context, deliverables, agents, index, SierraHomes | D-050 (root): SierraHomes Master-Context.md updated — Available Agents expanded + Available Deliverables section added | Key-Decisions-2026-04-11_1559.md | 2026-04-11 |
| sandbox, clock, date, bash, offset, timestamp | L-030 (root): Sandbox bash clock offset — use `date` not `date -u` in Cowork | Key-Decisions-2026-04-11_1559.md | 2026-04-11 |
| git, push, GitHub, command prompt, terminal, closure | D-069: Always provide git push commands for user's terminal at session close — root-level standard. User is on Windows CMD: use `del` not `rm`, backslashes in paths, repo root is C:\Users\swozz\Documents\AI_Memory_Brain | Key-Decisions-2026-04-11_0114.md | 2026-04-11 |

---

## Latest Decisions Summary

**Setup session (2026-03-29):** System initialised for Hassan Qaseem / Provecta Group. Zoho One selected as enterprise OS. Claude Sonnet set as primary model. CC/DE and ACS standards accepted as-is. Repository confirmed as hassqass18/AI_Memory_Brain. Keys registered for Zoho, Slack, GitHub.

**SierraHomes M1 + American Dream Stage 2 session (2026-03-30):** Deliverables sub-page pattern established as Notion standard for all projects. WhatsApp-first channel strategy confirmed for SierraHomes and future real estate projects. Rooftop cinema/bar locked as hero differentiator. American Dream Stage 2 activated — 15 permit/statutory tasks created. M1 milestone fully completed (5/5 tasks Done with deliverables). Four Notion API learnings documented (reverse relations, npm install, replace_content child pages, validate.py path).

**SierraHomes Website Build session (2026-03-31):** Marketing Agent activated. SierraHomes AmericanDream website built (single-file HTML) using Seraphic design template — navy/gold palette, Cormorant Garamond display font, 96–128px section spacing. Interactive Leaflet.js neighbourhood map added (16 Nyali amenity pins, 2-mile radius, hover popups). Tower count corrected to 3 (Benjamin-Franklin merged). All unit pricing removed — enquire-only model adopted. Towers section replaced with tabbed interactive Floor Plans section (4 plans, SVG diagrams). 5 technical learnings documented (Leaflet, SVG fonts, IntersectionObserver tabs).

**MSIFS Project Initialization session (2026-04-03):** MSIFS ($200M frontier market infrastructure PE fund) staged in AI Memory Brain. 7 AI agents permanently activated in tiered structure (Investment, Market Dev, Politics as Tier 1 core). Notion workspace built: Dashboard, 49-task Action Log database, GP Agreement Overview, Kenya Government Engagement Strategy. Lamu Port grain handling identified as Kenya beachhead via agent-integrated analysis. Sequential gatekeeper engagement strategy adopted. Staggered capital deployment: Kazakhstan first, Kenya parallel registration. NIF Act 2026 discovered as first-mover opportunity.

**Personal Branding session (2026-04-03):** Personal branding project staged for Andre "Hassan" Wilson. 9 agents activated. Notion branding strategy page + 36-task Kanban board created. Competitive intelligence compiled (15+ creators, 20+ AI products, monetization tiers). Critical messaging correction: "created AI Memory Brain" → "early adopter/contributor at Qosil." Gilber WordPress theme captured via Chrome automation. Full personal branding website built (1,257-line single-file HTML): 7 full-page scroll sections, dark theme (#161616 + #CF000F accent), Roboto/Poppins fonts, animated progress bars, career timeline, project cards with images, contact form. Three-Pillar Authority Framework (40/40/20) adopted. AI Memory Brain implementation/consultation set as first monetizable offering.

**MSIFS Meeting Processing + Profiling session (2026-04-05):** 27-page meeting transcript converted to structured markdown (6 topic sections, 50 action items, decisions log, verbatim transcript). DISC/OCEAN/Hofstede profiling adopted as standard for all MSIFS GP partners (D-032). Contact profiles built for Alex (D/C), Hassan (S/I), and Aibek (I/C). 26 action items pushed to MSIFS Notion Action Log. Alex partner bio brief enriched via web research — full career arc confirmed (UF → Peace Corps Ukraine → Liquidstar USAID/UNDP/UNICEF → GE Vernova → BU MBA → MSIFS). Three-tier bio format adopted as standard (75/175/350 words). LinkedIn scraping blocked (L-019); about.me supplement strategy established (L-021). Notion data_source_id fix documented (L-022).

**Personal Branding Website + Resume Rebuild session (2026-04-06):** Experience section redesigned and copy revised across all 4 entries. Skills expanded from 8 to 12. Download Resume modal added (name + email capture). Hero CTA updated. 2026 resume standards and RevOps skills researched and saved. Resume gap analysis conducted on existing ANDRE WILSON RESUME.docx — 12 gaps identified across 3 tiers. Structured Q&A run to fill all gaps. Full 2026-standard resume built (Andre-Wilson-Resume-2026.docx): RevOps & AI Consultant headline, 2-page hybrid format, quantified bullets, I/O Psychology featured as differentiator. Git index blocker documented (L-024). Scroll heading fix documented (L-025).

**Sierra Homes + Ecotecture Contract session (2026-04-08):** Applied 20 of 23 Sylvester Harding comments to Sierra Homes website. Map pin updated to exact site coordinates via Plus Code decoding (-4.032713, 39.715828). Website zip rebuilt. Ecotecture PM contract legally reviewed (14 issues: 3 Critical, 4 High, 4 Medium, 3 Low). Contract revised based on construction cost transcript + legal review: 8 changes including NCIA arbitration, 6-month DLP, Sierra Homes USA Limited, Russian language removed. Contractor entity changed to Provecta Group Limited (Mombasa, Kenya). Article 3 Trademarks removed. Final clean contract delivered as Ecotecture_PM_Contract_FINAL_v2.docx.

**LinkedIn optimization + Staging audit session (2026-04-09 AM):** Completed LinkedIn 7-item optimization: removed old skills (Marketing Strategy, Market Analysis, Strategic Planning, Closing Contracts, Team Building), added 5 AI skills (AI Strategy, AI Implementation, Business Process Automation, Knowledge Management, Workflow Design). Creator Mode confirmed inaccessible via desktop in 2026 — mobile app only (D-049). Full staging folder audit conducted: 4 of 5 folders missing core infrastructure. All remediated: AIMemoryBrain, MSIFS, PersonalBranding, ProvectaGroup each received Master-Context.md, Key-Decisions.md, Sessions.md, NextSteps.md, agents/open.md, agents/closure.md, decisions-learnings/session-protocol.md, and department agents/. SierraHomes_AmericanDream confirmed compliant.

**AIMemoryBrain landing page + ProvectaGroup popup session (2026-04-09 PM):** Completed AMB landing page compare section (showPanel() JS, #compare nav link). Cross-linked AMB and Provecta Group sites via nav. Built full AMB-styled 3-stage popup for Provecta Group site: lead capture form → 7-question AI readiness assessment → instant score results with dimension bars and personalized recommendation. Scroll-trigger at 60% page depth replaces time-based triggers. Packaged both sites into Netlify-ready zip (v3: index.html + ai-memory-brain.html + provecta_logo.png). Fixed Netlify 404 caused by missing index.html at root.

**Keziah Okanga social media proposal session (2026-04-10):** Read Keziah's contact profile (I/S DISC, Les Roches, 15 years, 100+ transactions, Karen specialist). Created polished 6-section social media proposal (v1) as Word document — navy/gold, five content pillars, 90-day plan, KPI table. User confirmed Facebook is her highest-engagement platform → revised to three-platform strategy (Facebook primary + Instagram cross-post + LinkedIn authority). Two docx decisions and two learnings captured (platform audit standard; docx versioning on permission conflict).

**Premier Realty company profile + Provecta proposal session (2026-04-10):** Built full company intelligence profile for Premier Realty Limited (PRL) — 15-section markdown at contacts/PremierRealty-Profile.md. PRL profiled via WebFetch + WebSearch: 20-year firm, 18 employees, ranked #27 Kenya land sales, 188 LinkedIn followers, 5 active land projects (Pana Ranch, Limuru III, Konza City View, Thika Road, Juja), 200+ BuyRentKenya listings. 10 strategic gaps identified; 10 growth recommendations documented. Company-profile template adaptation established as standard (D-058). Built 8-section Provecta RevOps & AI proposal (Premier_Realty_Proposal_2026.docx): cover page, executive summary, SPICED analysis, opportunity quantification, 3-quarter roadmap, KPIs, investment (KES 1,150,000), why Provecta, next steps. Validated (301 paragraphs). 4 research learnings documented (Instagram/YouTube WebFetch blocked, Facebook likes via Google search, Kenya ranking sites, BuyRentKenya proxy).

**SierraHomes consolidation + Master-Context update session (2026-04-11):** All Sierra Homes files consolidated from _AI_Training into staging/SierraHomes_AmericanDream (canonical folder confirmed). Provecta/Ecotecture contracts moved into staging/ProvectaGroup/Legal/. SierraHomes Master-Context.md updated — Available Agents expanded (Product_Development, Security, TechSupport), Available Deliverables & Content Files section added. Sandbox clock offset documented (L-030): use `date` not `date -u`.

**LifeOS full staging session (2026-04-10/11):** New project staged — LifeOS, a personal life management system treating life like a program. All 3 staging documents completed: (1) Project Context — vision, 6 domains, success metrics, assumptions; (2) Architecture/Design — 6 domain log schemas, hybrid check-in protocol (free narration + follow-ups), Urgency×Impact action queue (4-tier matrix), 4 session workflows, executive briefing template, phase activation plan; (3) Release Plan — Q2 OKRs (G001 Fitness, G002 Financial Clarity, G003 AMB GTM), Day 1 protocol, 30-day habit formation ramp (Week 1: show up → Week 4: first briefing), Phase 1/2/3 milestones. All 8 department folders created with agents distributed. 9 domain/operational files created. Action queue seeded with 20 items; Hassan closed 9, 7 successors added. Launch date confirmed: **Sunday April 12, 2026.**

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
| Key-Decisions-2026-04-06_0000.md | 2026-04-06 | Personal branding website edits, experience section redesign, skills expansion, resume modal, 2026 resume standards research, gap analysis, resume rebuild (RevOps & AI Consultant headline, 2-page hybrid format), git index blocker, scroll fix |
| Key-Decisions-2026-04-08_0000.md | 2026-04-08 | Sierra Homes Sylvester comments, map pin Plus Code, zip rebuild, Ecotecture legal review, contract revision, Provecta Group Limited Mombasa, NCIA, DLP, Article 3 removed, finalized contract |
| Key-Decisions-2026-04-09_1100.md | 2026-04-09 | LinkedIn optimization complete, Creator Mode desktop blocked, staging audit, AIMemoryBrain/MSIFS/PersonalBranding/ProvectaGroup remediated |
| Key-Decisions-2026-04-09_1900.md | 2026-04-09 | AMB compare section completed, Provecta↔AMB cross-links, 7-question AI readiness popup, scroll trigger, Netlify zip packaging, index.html fix |
| Key-Decisions-2026-04-10_1348.md | 2026-04-10 | Keziah Okanga social media proposal, Facebook primary platform, three-platform strategy, Meta cross-posting, platform audit standard, docx versioning |
| Key-Decisions-2026-04-10_0900.md | 2026-04-10 | Premier Realty company profile, PRL #27 land sales, Provecta RevOps proposal KES 1.15M, SPICED applied to proposal, 3-quarter phased engagement, Instagram/YouTube WebFetch blocked, BuyRentKenya proxy |
| Key-Decisions-2026-04-10_1500.md | 2026-04-10 | LifeOS staging initiated, project name confirmed, 6 life domains (Health, Finance, Relationships, Projects-Work, Goals-Ideas, Plans), hybrid intake model (free narration + Claude follow-ups), full output stack (briefing + queue + on-demand) |
| Key-Decisions-2026-04-10_1600.md | 2026-04-10 | LifeOS Document 2 architecture — check-in style (free narration not forms), Urgency×Impact queue (4-tier), on-demand executive briefing, Phase 1 domain selection, append-only log format, queue pre-seeded from root NextSteps |
| Key-Decisions-2026-04-10_1700.md | 2026-04-10 | LifeOS Document 3 release — Q2 OKRs confirmed (G001 Fitness, G002 Financial Clarity, G003 AMB GTM), Phase 1 simultaneous activation, 30-day habit formation ramp, Phase 2 gate criteria, fully operational definition (Month 3+), launch date April 12 |

**Last Updated:** 2026-04-11

---

*This is a root-level system file. It tracks decisions about the AI Memory system, NOT individual projects.*

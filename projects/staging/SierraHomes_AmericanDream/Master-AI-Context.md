# Master AI Context — SierraHomes_AmericanDream

**Document Purpose:** Primary operational context for any AI assistant working on SierraHomes_AmericanDream. Provides project overview, conventions, AI execution model, current progress, and session history. For full architectural and financial design, see [SierraHomes_AmericanDream_architecture.md](./Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md).

**Memory Design Version:** 1.1
**Last Updated:** 2026-03-30
**Owner:** Hassan Qaseem (hassan.qaseem@gc-usa.com) — Provecta Group
**Repository:** https://github.com/hassqass18/AI_Memory_Brain

---

## Governing Standards

**Operating Standard:** [CC/DE Operating Standard v2.0](../../Standards%20and%20Policy/CCDE-Operating-Standard.md) — Governs ALL operations: project management, financial controls, CRM, reporting cadences, decision authority.

**Communication Standard:** [Adaptive Communication Standard v1.0](../../Standards%20and%20Policy/Communication-Standard.md) — Governs ALL communications: message composition, stakeholder management, DISC/OCEAN profiling.

---

## 1. Project Overview

SierraHomes_AmericanDream is a **88-unit residential apartment complex** located in **Nyali, Mombasa, Kenya** on **Plot MN/I/1691**. The development is a **4-tower complex** (Lincoln, Washington, Franklin, Benjamin Towers), each 11 floors, with a premium amenity stack including swimming pool, children's play area, communal gardens, gym, rooftop Lounge Style Clubhouse and bar, and 24-hour gated security.

**Developer:** Sierra USA Homes Ltd. | **Architect:** Ecotecture Ltd. (drawings complete)

**Sales model:** For-sale only. Land is acquired via a **22% equity deal** — landowners receive 23 units (7×1BR + 8×2BR + 8×3BR) + KES 42M cash in lieu of a land purchase price. Developer sells 63 units off-plan + 22 units on-market = 85 units. Total developer gross revenue: KES 1,296,000,000. Net developer profit: KES 343,998,079 (43.4% ROI on hard costs).

**Unit pricing:** 1BR KES 6M/9M | 2BR KES 13M/17M | 3BR KES 18M/23M (off-plan/on-market)

**Current phase:** Phase 1 — Pre-Launch (Now – Q2 2026). Architectural drawings complete. Structural/mechanical drawings and building license application overdue (Rajab Hatibu). Permits pending.

---

## 2. Development Stack

| Category             | Detail                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Project management   | Zoho Projects (via Zoho One)                                       |
| CRM / Sales pipeline | Zoho CRM                                                           |
| Communication        | Slack                                                              |
| Document repository  | GitHub (AI Memory), Google Drive / SharePoint (working docs)       |
| Financial modelling  | Excel / Google Sheets                                              |
| Marketing            | Meta Ads, Google Ads, LinkedIn, Youtube, Tik-Tok, Email Marketing  |
| AI Memory            | This repository — hassqass18/AI_Memory_Brain                       |

---

## 3. Site & Tower Configuration

```
SierraHomes_AmericanDream — Plot MN/I/1691, Nyali, Mombasa
├── Lincoln Tower       — 3BR | 22 units | 2,617.58 sqft/unit | 11 floors
├── Washington Tower    — 3BR | 22 units | 2,617.58 sqft/unit | 11 floors
├── Benjamin Tower      — 2BR | 22 units | 1,311.18 sqft/unit | 11 floors
└── Franklin Tower      — 1BR | 22 units |   966.44 sqft/unit | 11 floors
                                          + additional 1BR units to reach 88 total
Site Amenities:
├── Swimming pool (between Washington & Lincoln Towers)
├── Central garden
├── Children's play area (NE corner)
├── Manicured lawn (western boundary)
├── 9M access road + gated entry
└── Rooftop: Movie theatre, bar, gym
```

**Full unit breakdown and all dimensions:** See [SierraHomes_AmericanDream_architecture.md](./Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md)
**Drawing set reference:** See [Architectural-Drawings-Reference.md](./Product_Development/SierraHomes_Tower/Architectural-Drawings-Reference.md)

---

## 4. Key Protocols

| Protocol | Command |
|----------|---------|
| Start session | "Execute open.md" |
| End session | "Execute closure.md" |
| Plan next phase | "Execute plan-release.md" |
| Stage new project | "Execute staging.md" (root level) |

---

## 5. Project Conventions

### 5.1 Document Standards
- All financial figures in KES unless otherwise stated
- Dates in DD-MMM-YYYY format (e.g. 15-Aug-2029)
- Unit references: 1BR, 2BR, 3BR (not "one-bedroom", etc.)
- Phase references: Phase 1 (Pre-Launch), Phase 2 (Off-Plan Launch), Phase 3 (Construction & On-Plan Sales), Phase 4 (Handover & Sell-Out)

### 5.2 Secrets & Credentials
- Never hardcode API keys or credentials
- All keys stored in `HassanKeys.txt` at root level (git-ignored)
- Reference `connectors/api-key-store.md` for key inventory

### 5.3 File Placement Rules

| Content Type | Destination |
|-------------|-------------|
| Financial models, budgets, investor docs | `Finance/` |
| Investor deck, returns analysis, capital stack | `Investment/` |
| Marketing campaigns, brochures, social media | `Marketing/` |
| Sales pipeline, SPA tracker, buyer CRM | `Sales/` |
| Legal — title, permits, contracts | `Legal/` |
| Risk reports, site security | `Security/` |
| Construction management, facilities ops | `Operations/` |
| Programme, contractor management | `PMO/` |
| Board decks, investor updates, strategy | `Executive/` |
| Staffing, property management HR | `People-n-Culture/` |
| Building design, construction specs | `Product_Development/SierraHomes_Tower/` |
| Phase plans, change log | `Product_Development/Releases/` |

---

## 6. AI Execution Model

**Model:** Mixed (AI + Human collaboration)

- **`[AI]` tasks:** Research, document generation, financial modelling, marketing content, legal draft preparation, strategic analysis, data synthesis, CRM management, investor deck drafting
- **`[Human]` tasks:** Legal signings, financial transactions, contractor negotiations and approvals, site visits, regulatory submissions, investor meeting attendance, SPA execution
- **`[AI+Human]` tasks:** Sales pitch preparation with Hassan review, investor deck final approval, marketing campaign execution with Human sign-off

### Direct Execution Rules
1. AI drafts all documents; Human reviews and signs/approves
2. AI never executes financial transactions or legal obligations
3. AI logs all decisions and changes in real-time to live session files
4. AI never reads, stores, or echoes credential values
5. AI executes only the steps defined in the current phase — no speculative execution

---

## 6a. Phase & Change Tracking

All changes outside formal phase stories are logged in `Product_Development/Releases/Bugs.md`.

**Naming:** `change-PhaseX-YYYY-MM-DD-HHMM`
**Labels:** `[AI]`, `[Human]`, `[AI+Human]`
**Statuses:** Open → In Progress → Complete

---

## 7. Memory Access Model — Lazy Loading

### Tier 1 — Always Read (Session Init)

| File | Purpose |
|------|---------|
| This file (`Master-AI-Context.md`) | Project overview, conventions, execution model |
| [SierraHomes_AmericanDream_architecture.md](./Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md) | Building design, financials, construction model |
| [NextSteps.md](./NextSteps.md) | Prioritized roadmap, immediate actions |

### Tier 2 — Index Only, Drill Down on Match

| Index File | Detail Location | When to Drill Down |
|------------|----------------|-------------------|
| [Key-Decisions.md](./Key-Decisions.md) | `decisions-learnings/` | When task matches a keyword |
| [Sessions.md](./Sessions.md) | `session-summary/` | When task may have prior session context |
| [Risk-Registry.md](./Risk-Registry.md) | `Security/` | When task touches a risk area |
| [PG-Consulting-Master-Summary-2026-03-30.md](./Operations/PG-Consulting-Master-Summary-2026-03-30.md) | `Operations/` | For ALL operational planning, resource decisions, personnel assignments, and budget decisions. Contains: full PG Consulting portfolio status (Provecta Group Restructuring, Striker Marketing, Sierra Homes USA), account balances (Main $1M, Discrepancy Fund $500K, Operating Expenses $468K), key contacts (Rajab — Architecture, Sylvester — Negotiations, EcoTecture — partner, Canon Motors — alt site), stock portfolio (building material cost indicators: steel, cement, lumber, copper, fuel, paint, glass), and cross-project active task assignments for Hassan. **MUST be referenced whenever making operational, resource, or financial planning decisions.** |

### Tier 3 — On Demand

| File | When to Read |
|------|-------------|
| `Product_Development/Releases/` | When executing a phase or reviewing progress |
| `Product_Development/Releases/Bugs.md` | At session init (metrics only) and when logging a change |
| `connectors/api-key-store.md` | When integrating with Zoho, Slack, or GitHub |
| `assets/content-images/designandcontent/` | Before creating marketing materials |

---

## 8. Available Agents — Domain Expertise Index

| Domain | Folder | Key Files | Expertise |
|--------|--------|-----------|-----------|
| Finance & Investment | `Finance/agents/` | Finance-AGENT.md, Finance-advisor.md, Investment-AGENT.md, Investment-advisor.md | Financial modelling, construction budget, cash flow, investor returns |
| Investment (dedicated) | `Investment/agents/` | Investment-AGENT.md, Investment-advisor.md | Capital stack, equity terms, investor relations |
| Marketing & Sales | `Marketing/agents/` | Marketing-AGENT.md, Marketing-advisor.md, Market-Development-AGENT.md, Market-Development-advisor.md, Sales-AGENT.md, Sales-advisor.md | Off-plan campaigns, diaspora outreach, GTM, market analysis |
| Sales (dedicated) | `Sales/agents/` | Sales-AGENT.md, Sales-advisor.md | Off-plan pipeline, SPA process, buyer management |
| Legal | `Legal/agents/` | Legal-AGENT.md, Legal-advisor.md | Land title, permits, SPAs, Kenya property law |
| Security | `Security/agents/` | Infrastructure-AGENT.md, Infrastructure-advisor.md | Site security, risk architecture |
| Executive & Strategy | `Executive/agents/` | Strategy-AGENT.md, Strategy-advisor.md, PMO-AGENT.md, PMO-advisor.md, Growth-n-Revenue-AGENT.md, Growth-n-Revenue-advisor.md, Human-Psychology-AGENT.md, Human-Psychology-advisor.md | Project strategy, programme management, revenue, stakeholder psychology |
| PMO | `PMO/agents/` | PMO-AGENT.md, PMO-advisor.md | Construction programme, contractor management, milestones |
| Operations | `Operations/agents/` | Operations-AGENT.md, Operations-advisor.md, Field-Operations-AGENT.md, Field-Operations-advisor.md, Infrastructure-AGENT.md, Infrastructure-advisor.md, Automation-AGENT.md, Automation-advisor.md | Construction management, field ops, facilities |
| People & Culture | `People-n-Culture/agents/` | People-n-Culture-AGENT.md, People-n-Culture-advisor.md | Property management staffing, HR, org design |

---

## 9. Session History & Handover

- **Latest Summary:** 2026-03-30 Session 3 — 4-tower architecture confirmed, financials revised (KES 1.296B revenue / KES 344M profit / 43.4% ROI), land deal structure (22% to landowners) confirmed, git-push.sh automated, Zoho MCP setup in progress
- **Latest Decisions:** KD-014 (git automation), KD-015 (4-tower design), KD-016 (land deal 22% equity), KD-017 (construction costs), KD-018 (revised financials), KD-019 (Zoho MCP)
- **Master Indexes:** [Key-Decisions.md](./Key-Decisions.md), [Sessions.md](./Sessions.md)
- **Risk Registry:** [Risk-Registry.md](./Risk-Registry.md)
- **Next Steps:** [NextSteps.md](./NextSteps.md)
- **Architecture:** [SierraHomes_AmericanDream_architecture.md](./Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md)

---

## 10. Project Progress

### Phase 1 — Pre-Launch (Now – Q2 2026)
- **Phase File:** `Product_Development/Releases/SierraHomes-phase1-pre-launch.md`
- **Completion:** ~5% — Project initialized. P1-EXE-001 (GitHub) complete.
- **Key milestone:** 20+ reservations before permit (Q3 2026)
- **Active Blocker:** Rajab's architectural, structural & mechanical drawings are 6+ months overdue (assigned Sep 2025, not started as of Mar 2026). Permit application cannot proceed until drawings are delivered. *(Risk R-010)*
- **EcoTecture:** Contract with EcoTecture (project partner) signed Jan 5–6, 2026. ✅
- **Alternative Site:** 1-acre site on Lynx Road behind Shell Petrol Station (Canon Motors) identified as strategic fallback if Nyali title/valuation issues materialise. Sylvester managing relationship. *(Risk R-011)*

### Phase 2 — Off-Plan Launch (Q3 2026 – Q2 2027)
- **Status:** Pending
- **Key milestone:** 43 signed SPAs

### Phase 3 — Construction & On-Plan Sales (Q3 2027 – Aug 2029)
- **Status:** Pending
- **Key milestone:** Topped out Q2 2028; practical completion August 2029

### Phase 4 — Handover & Sell-Out (Aug 2029 – Aug 2030)
- **Status:** Pending
- **Key milestone:** Full sell-out KES 1,751,000,000

---

## 11. Zoho Projects Integration

- **Connector:** `AI_Memory_Brain/zoho-mcp-server/`
- **Portal ID:** org919184297
- **Project:** SierraHomes_AmericanDream
- **Tools:** `mcp__zoho__zoho_projects_*` (primary), `mcp__7a54a83f-*__zoho_projects_*` (fallback)

---

## 12. Operational Context — PG Consulting Portfolio

> **AI Instruction:** Before making ANY planning, resource, or financial decision, read [`Operations/PG-Consulting-Master-Summary-2026-03-30.md`](./Operations/PG-Consulting-Master-Summary-2026-03-30.md). This file is the single source of truth for the broader PG Consulting operational context in which SierraHomes_AmericanDream sits.

### Why This Matters

SierraHomes_AmericanDream is one of several concurrent PG Consulting projects. Decisions made here — especially around personnel assignments, budget allocation, and timeline — must account for competing demands on the same team and the same financial pool.

### When to Reference This File

| Scenario | Why |
|----------|-----|
| Assigning tasks to Hassan, Rajab, or Sylvester | Check their current load across all projects |
| Making budget or cost recommendations | Verify against available account balances (Main $1M, OpEx $468K) |
| Evaluating construction material costs | Use stock portfolio tickers (X, NUE, VMC, LPX, FCX, XOM, SHW, APD) as cost pressure indicators |
| Planning outreach or communications | Confirm EcoTecture and Canon Motors relationship context |
| Any strategy or cross-project coordination | Provecta Group and Striker Marketing share staff and infrastructure with this project |

### Key Operational Facts (as of 2026-03-30)

- **Hassan** is simultaneously running Provecta Group Restructuring (AI marketing system, website migration) and Striker Marketing (email response system, knowledge base) — assess his bandwidth before adding tasks
- **Rajab** has overdue architectural deliverables for Sierra Homes USA (drawings assigned Sep 2025, still not started)
- **Sylvester** is handling high-level negotiations — available for strategic/executive escalation
- **EcoTecture** is the active project partner; contract already signed
- **Canon Motors site** (1 acre, Lynx Road, behind Shell
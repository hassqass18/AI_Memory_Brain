# LifeOS — Staging Master Context

**Project Name:** LifeOS
**Category:** Other — Personal Life Management System
**Owner:** Hassan Qaseem (hassan.qaseem@gc-usa.com) | Founder, Provecta Group
**Stage:** Staging (Ideation & Preparation)
**Last Updated:** 2026-04-10

---

## Project Vision

LifeOS is a personal operating system that treats Hassan's life like a program — with structured data intake, cross-domain tracking, analysis, and prioritized action management. Every area of life (health, finances, relationships, work projects, goals, and plans) is tracked as a "workstream." AI sessions serve as the program management layer: ingesting daily and structured logs, surfacing insights, maintaining a live action queue, and generating weekly executive briefings.

The system eliminates the cognitive overhead of trying to hold everything in your head by externalizing all life data into a queryable, AI-navigable memory structure — so Hassan can always know where he stands, what needs attention, and what to do next.

---

## Staging Phase Objectives

During staging, we will collaboratively develop three foundation documents:

1. **Project Context Document** — Vision, goals, success metrics, life domains in scope, intake cadence, and institutional dependencies
2. **Architecture/Design Document** — Domain schemas, data intake formats, daily check-in protocol, log templates, session workflows, and output formats (briefing, action queue, decisions)
3. **Release Plan Document** — Phased rollout: which domains go live first, how the system matures over time, and what "fully operational LifeOS" looks like

Once these three documents are complete and approved, this project will be promoted to a full AI Memory project via PROJECT_MEMORY_INIT.md.

---

## Life Domains in Scope

| Domain | Folder | Description |
|--------|--------|-------------|
| Health & Fitness | `Health/` | Sleep, workouts, nutrition, energy, medical, biometrics |
| Finance | `Finance/` | Income, expenses, savings, investments, cash flow, net worth |
| Relationships | `Relationships/` | Family, friends, key contacts — interaction cadence and quality |
| Projects & Work | `Projects-Work/` | Cross-project status at life level (Provecta, MSIFS, SierraHomes, etc.) |
| Goals & Ideas | `Goals-Ideas/` | Personal goals (SMART/OKR), ideas in ideation, aspirations |
| Plans | `Plans/` | Personal plans with deliverables, budgets, and timelines |

---

## Data Intake Model

**Hybrid Intake:**
- **Daily check-in (free-form):** Narrate your day to Claude — it extracts, categorizes, and logs data across all relevant domains automatically
- **Structured domain logs:** Predefined templates per domain for more precise tracking (e.g., workout log, finance entry, relationship touchpoint log)

**Session Types:**
- **Daily Check-In Session:** ~10 minutes. Free-form narration → auto-parsed into domain logs + action queue updates
- **Weekly Review Session:** ~30 minutes. Executive briefing generated. Action queue reviewed. Goals progress updated.
- **On-Demand Query Session:** Ask any question about your life ("Where am I on savings this month?", "When did I last talk to Aibek?") and get a data-backed answer

---

## Output Architecture

| Output | Cadence | Format | Description |
|--------|---------|--------|-------------|
| Executive Briefing | Weekly | Markdown report | PM-style status across all 6 domains: green/amber/red, blockers, wins, this week's priorities |
| Live Action Queue | Continuous | NextSteps.md | Always-current prioritized list of what needs attention across all life areas |
| On-Demand Decisions | As needed | In-session | Ask Claude about any life domain; it queries stored data and gives a reasoned answer |
| Quarterly Life Review | Quarterly | Full report | OKR progress, wins, learnings, next quarter planning |

---

## Staging Roadmap

### Document 1: Project Context
**Status:** [x] In Progress
**Description:** Vision, goals, target domains, success metrics, key assumptions, intake cadence

### Document 2: Architecture/Design
**Status:** [x] Complete
**Description:** Domain schemas, log templates, daily check-in protocol, session workflows, output formats

### Document 3: Release Plan
**Status:** [x] Complete
**Description:** Phased rollout — which domains activate first, maturity milestones, full operational definition

---

## Key Commands During Staging

- **Continue staging from Document N:** "Continue with Document {1|2|3}"
- **Review current progress:** "Where are we in staging?"
- **Save and close session:** "Close staging session"
- **Promote to full project:** "Initialize LifeOS via PROJECT_MEMORY_INIT.md"

---

## Institutional Dependencies

| Area | Relevance to LifeOS |
|------|---------------------|
| **Operations** | Intake workflows, log templates, session cadence design |
| **Finance** | Financial tracking schema, net worth calculation, cash flow models |
| **Executive/PMO** | Briefing format, OKR framework, action queue management |
| **Health/Personal-Life** | Health tracking frameworks, wellness KPIs, habit design |
| **Human Psychology** | Behavior change design, habit formation, motivation architecture |

---

## Available Agents

| Domain | Folder | Agent Files | Expertise |
|--------|--------|-------------|-----------|
| Personal Life | `Operations/agents/` | Personal-Life-AGENT.md, Personal-Life-advisor.md | Life management, health, habits, goals, personal finance, intentional living |
| PMO & Strategy | `Executive/agents/` | PMO-AGENT.md, PMO-advisor.md, Strategy-AGENT.md, Strategy-advisor.md, Human-Psychology-AGENT.md, Human-Psychology-advisor.md | Program management, OKR, executive briefings, stakeholder psychology |
| Finance | `Finance/agents/` | Finance-AGENT.md, Finance-advisor.md | Financial modeling, budgeting, cash flow, net worth tracking |
| Operations & Automation | `Operations/agents/` | Operations-AGENT.md, Operations-advisor.md, Automation-AGENT.md, Automation-advisor.md | Intake workflows, log design, process automation |

**How to use:** When your task touches any of these domains, read the relevant AGENT.md for operational workflows or the advisor.md for strategic guidance before proceeding.

**Source:** All agents originate from `AI_Memory_Open/Memory_Agents/`. If project-local copies are outdated, refresh from the source.

---

## Document 1: Project Context [IN PROGRESS]

### Vision & Goals

- **Vision Statement:** LifeOS is a personal operating system that externalizes the management of Hassan's life into a structured, AI-queryable memory system — so he always knows where he stands, what needs attention, and what to do next, across every domain that matters.
- **Primary Goal:** Eliminate cognitive overhead and reactive living by replacing mental tracking with a structured, AI-assisted program management layer across all life domains
- **Secondary Goals:**
  - Maintain a live, accurate action queue that reflects the current state of all life workstreams
  - Generate weekly executive briefings so the week starts with clarity, not confusion
  - Enable data-backed answers to any life question ("Am I on track financially?", "Who have I neglected?")
  - Create a quarterly review cadence for goals and life direction

### Life Domains / Users

- **User:** Hassan Qaseem — founder, investor, operator across multiple active ventures (Provecta, MSIFS, SierraHomes), managing a complex personal and professional portfolio
- **Problem it solves:** Too many domains of life moving simultaneously with no centralized system. Mental overhead is high. Things slip. Priorities get reactive.
- **How it's used:** Daily 10-min check-in to narrate + log. Weekly 30-min review to generate briefing and update queue. On-demand queries when a decision requires data.

### Success Metrics

- **Daily check-in completion rate:** ≥ 5x/week (habit establishment within 30 days)
- **Action queue accuracy:** Queue reflects true current priorities — no stale items older than 7 days
- **Weekly briefing delivery:** Generated every Monday (or Sunday evening)
- **Query satisfaction:** Hassan can ask any life question and get a useful, data-backed answer
- **Quarterly OKR tracking:** All goals have measurable key results with Q-by-Q progress logged

### Assumptions & Constraints

- **Assumptions:**
  - Hassan will commit to ~10 minutes/day for check-in sessions
  - Intake is primarily via Claude (Cowork), not automated API integrations (at least in Phase 1)
  - The system builds up data over time — week 1 is sparse, month 3 is rich
- **Constraints:**
  - No real-time automated data pulls (banking APIs, fitness tracker sync) in Phase 1 — manual/hybrid intake only
  - Hassan is the only user — this is a private system
  - All data lives in AI Memory Brain git repo (markdown files) — no external database

---

## Document 2: Architecture/Design [COMPLETE]

*Informed by: Personal-Life Advisor (Memory_Agents/Personal-Life) + PMO Advisor (Memory_Agents/PMO)*

---

### 2.1 — File System Architecture

```
projects/staging/LifeOS/
├── Health/
│   ├── agents/                    — Personal-Life agents
│   └── health-log.md              — Running dated health log
├── Finance/
│   ├── agents/                    — Finance + Investment agents
│   └── finance-log.md             — Running dated finance log
├── Relationships/
│   ├── agents/                    — Human-Psychology + People-n-Culture agents
│   └── relationships-log.md       — Running dated relationships log
├── Projects-Work/
│   ├── agents/                    — PMO + Strategy + Operations agents
│   └── projects-log.md            — Running dated cross-project status log
├── Goals-Ideas/
│   ├── agents/                    — Personal-Life + Strategy agents
│   ├── goals-log.md               — Running OKR + goal progress log
│   └── ideas-capture.md           — Rolling ideas backlog (never deleted)
├── Plans/
│   ├── agents/                    — PMO + Finance + Operations agents
│   └── plans-log.md               — Running plan milestone + budget log
├── Executive/
│   ├── agents/                    — PMO + Strategy + Human-Psychology agents
│   ├── action-queue.md            — LIVE action queue (Urgency × Impact, always current)
│   └── briefings/                 — Timestamped on-demand briefing files
│       └── briefing-YYYY-MM-DD.md
└── Operations/
    └── agents/                    — Operations + Automation + Personal-Life agents
```

**Design Principle:** Every domain has one running log file. Append entries with dates. Never delete old entries — they build the pattern history that makes the intelligence layer possible in Phase 3.

---

### 2.2 — Domain Log Schemas

Each log file uses the same pattern: a dated entry block with domain-specific fields. Claude appends new blocks during check-ins.

---

#### Health Log (`Health/health-log.md`)

```markdown
## [YYYY-MM-DD]
**Sleep:** [hours] hrs | Quality: [1–5] | Bed: [time] | Wake: [time]
**Workout:** [type or "Rest"] | Duration: [mins] | Intensity: [1–5]
**Energy:** Morning [1–5] | Afternoon [1–5] | Evening [1–5]
**Nutrition:** [any notable — meals, fasting, alcohol, hydration]
**Mood/Mental:** [1–5] | [brief note]
**Health Notes:** [symptoms, medical, anything unusual]
**Habits Completed:** [list — e.g., meditation ✓, cold shower ✓]
```

*Required fields:* Sleep hours, Workout (even if "Rest"), Energy morning.
*Optional:* Nutrition, Mood, Health Notes, Habits.

---

#### Finance Log (`Finance/finance-log.md`)

```markdown
## [YYYY-MM-DD]
**Income:** [source] — [amount] [currency] — [Recurring / One-time]
**Expenses:** [category] — [amount] — [description]
**Cash Notes:** [anything notable about current cash position]
**Investments:** [any movements, decisions, or changes]
**Financial Decisions:** [any significant financial decision made today]
**Financial Notes:** [anything else — invoices sent, payments received, etc.]
```

*Required fields:* At minimum one of Income, Expenses, or Financial Notes (if nothing financial happened, skip the day — no entry = no activity).
*Convention:* Currency always stated. Categories: Food, Transport, Housing, Business, Investment, Health, Entertainment, Misc.

---

#### Relationships Log (`Relationships/relationships-log.md`)

```markdown
## [YYYY-MM-DD]
**Contact:** [name]
**Type:** [Call / Message / In-Person / Meeting / Email]
**Quality:** [1–5]
**Topics:** [brief — what did you talk about?]
**Takeaways:** [what you learned, commitments made, context gained]
**Action Items:** [anything you need to do as a result]
**Trust Account:** [Deposit / Neutral / Withdrawal] — [brief why]
**Next Touch:** [when to follow up — date or timeframe]
---
[repeat block for each relationship interaction that day]
```

*Convention:* One block per person per day. If no meaningful interactions, no entry needed.

---

#### Projects & Work Log (`Projects-Work/projects-log.md`)

```markdown
## [YYYY-MM-DD]
### [Project Name] — e.g., SierraHomes / MSIFS / ProvectaGroup / AMB / PersonalBranding
**Status:** 🟢 On Track / 🟡 At Risk / 🔴 Blocked
**Progress:** [what moved forward today]
**Blockers:** [what's stuck, who's needed]
**Decisions Made:** [any decisions you made on this project today]
**Actions Completed:** [tasks done]
**Actions Pending:** [what's next — include owner and due date]
**Next Milestone:** [what's the next thing this project needs to hit]
---
[repeat block for each project touched that day]
```

*Convention:* Only log projects that had meaningful activity. Don't force entries for inactive projects.

---

#### Goals Log (`Goals-Ideas/goals-log.md`)

```markdown
## [YYYY-MM-DD]
### Goal: [Goal Title] — [Goal ID, e.g., G001]
**OKR:** Q[N] [Year] | Objective: [brief] | KR in focus: [which key result]
**Progress:** [% complete or qualitative update]
**Today's Action:** [what you did toward this goal today]
**Blockers:** [what's in the way]
**Next Action:** [what moves this forward]
---
[repeat for each goal touched]
```

*Separate file — Ideas Backlog (`Goals-Ideas/ideas-capture.md`):*

```markdown
## [YYYY-MM-DD] — [Idea Title]
**Domain:** [Health / Finance / Business / Personal / Other]
**Idea:** [describe it fully — don't be brief, you won't remember later]
**Why it matters:** [one sentence on the opportunity or value]
**Stage:** [Raw Idea / Being Explored / Parked / Promoted to Plan]
**Next action:** [or "None yet"]
```

---

#### Plans Log (`Plans/plans-log.md`)

```markdown
## [YYYY-MM-DD]
### Plan: [Plan Name]
**Milestone:** [what was due / what's next]
**Status:** [Hit / Missed / On Track / Behind]
**Budget:** Planned [amount] | Actual [amount] | Variance [+/-]
**Timeline:** On Track / Behind [X days] / Ahead [X days]
**Deliverable Updates:** [what was delivered or moved]
**Blockers:** [what's blocking]
**Next Action:** [what you're doing next on this plan]
---
[repeat for each plan with activity]
```

---

### 2.3 — Daily Check-In Protocol

**Trigger phrases:** "Daily check-in," "Log today," "Check-in," or just starting to narrate without a command.

**Workflow — Step by Step:**

**Step 1 — Hassan narrates freely.**
Write or speak naturally. No structure required. Example:
> "Today was busy — had a call with Peter about the Ecotecture contract, we're still stuck on the KES 400k discrepancy. Worked out in the morning, about 45 minutes, felt good. Didn't sleep great, maybe 6 hours. Sent a message to Keziah about the proposal. Need to wire Stripe this week — been pushing it."

**Step 2 — Claude auto-parses the narration.**
Claude identifies domain signals in the narration:
- Sleep, workout, energy, health → **Health**
- Money, invoices, payments, expenses → **Finance**
- Named people + interaction type → **Relationships**
- Named projects + status/action → **Projects & Work**
- Goals, OKRs, aspirations → **Goals & Ideas**
- Plans, milestones, budgets → **Plans**
- Action items surfaced → **Action Queue**

**Step 3 — Claude asks 2–4 targeted follow-up questions.**
Only for information that was referenced but not fully captured. Examples:
- "You mentioned 6 hours sleep — what time did you go to bed and wake up?"
- "The Ecotecture KES 400k issue — is that still blocking the contract signing, or is it a parallel track?"
- "Did you and Keziah have a substantive exchange, or just a quick touch?"

Claude never asks more than 4 follow-up questions. If information is vague and not critical, Claude logs what it has and notes "incomplete" in the entry.

**Step 4 — Claude writes to domain log files.**
For each domain that had activity, Claude appends a dated entry block using the schema above.

**Step 5 — Claude updates the Action Queue.**
- Marks items as Done if narration mentioned completion
- Adds new items surfaced (e.g., "Stripe wiring" → new action queue item)
- Re-scores Urgency × Impact for new and existing items

**Step 6 — Claude delivers a brief confirmation.**
One short paragraph: what was logged, what was added to the queue, anything flagged.

---

### 2.4 — Action Queue Schema (`Executive/action-queue.md`)

The action queue is a live file. Claude updates it during every check-in and on request. It is always sorted by **Priority Score = Urgency × Impact**.

```markdown
# LifeOS Action Queue — Updated [YYYY-MM-DD]

| ID | Title | Domain | Urgency | Impact | Priority | Due | Status | Context |
|----|-------|--------|---------|--------|----------|-----|--------|---------|
| AQ-001 | Wire Stripe to AMB Blueprint modal | Projects | High | High | 🔴 Critical | 2026-04-15 | Open | handlePurchase() comment in ai-memory-brain-landing.html |
| AQ-002 | Send Premier Realty proposal | Projects | High | High | 🔴 Critical | ASAP | Open | KES 1.15M proposal ready; review pricing first |
...
```

**Priority Scoring:**

| Urgency | Impact | Score | Label |
|---------|--------|-------|-------|
| High | High | 9 | 🔴 Critical |
| High | Medium | 6 | 🟠 Important |
| Medium | High | 6 | 🟠 Important |
| High | Low | 3 | 🟡 Do Later |
| Medium | Medium | 4 | 🟡 Do Later |
| Low | High | 3 | 🟡 Do Later |
| Medium | Low | 2 | ⚪ Backlog |
| Low | Medium | 2 | ⚪ Backlog |
| Low | Low | 1 | ⚪ Backlog |

**Urgency Definition:** How time-sensitive is this? High = needs action within 48 hours or has a hard deadline approaching. Medium = this week. Low = this month or flexible.

**Impact Definition:** How consequential is this if done (or not done)? High = material effect on finances, health, relationships, or project momentum. Medium = noticeable effect. Low = minor or recoverable.

**Queue Rules:**
- Items are never deleted — they are marked Done, Parked, or Dropped
- Done items are moved to a `## Completed` section at the bottom of the file with a completion date
- Maximum 15 Open items in the active queue at any time — if more, lowest-priority items are Parked
- Every Open item must have at least Urgency and Impact scored

---

### 2.5 — Session Workflows

#### Daily Check-In Session (~10 minutes)
1. Hassan says "check-in" or starts narrating
2. Hassan narrates his day — no structure required
3. Claude reads narration, identifies domain signals
4. Claude asks 2–4 targeted follow-up questions
5. Claude appends dated entries to relevant domain logs
6. Claude updates `Executive/action-queue.md`:
   - Mark completions
   - Add new items
   - Re-sort by Urgency × Impact
7. Claude delivers brief confirmation (1 paragraph max)

#### On-Demand Executive Briefing (~5 minutes to generate)
1. Hassan says "Generate briefing" or "Give me a briefing"
2. Claude reads all 6 domain logs (last 7–14 days of entries)
3. Claude reads `Executive/action-queue.md`
4. Claude generates briefing using the template in Section 2.6
5. Claude saves to `Executive/briefings/briefing-YYYY-MM-DD.md`
6. Claude delivers the briefing in full

#### On-Demand Life Query (instant)
1. Hassan asks any question: "Where am I on savings this month?", "When did I last talk to Alex?", "What's blocking MSIFS right now?"
2. Claude identifies which domain logs are relevant
3. Claude reads those logs
4. Claude answers with specific data: dates, amounts, names, status
5. If data is insufficient: Claude says so explicitly and notes what check-in information would fill the gap

#### Quarterly Life Review (~45 minutes, 1 session)
1. Hassan says "Quarterly review" or "Q[N] review"
2. Claude reads all 6 domain logs for past 90 days
3. Claude reads all briefings for the quarter
4. Claude generates a Quarterly Life Review document:
   - OKR progress (goals-log.md)
   - Domain-by-domain wins and learnings
   - Energy and health trend analysis (health-log.md)
   - Financial trajectory (finance-log.md)
   - Relationship health audit (relationships-log.md)
   - Project velocity summary (projects-log.md)
5. Claude presents the review and facilitates Q-planning conversation
6. Hassan sets next quarter OKRs — logged in goals-log.md

---

### 2.6 — Executive Briefing Template

*Saved to: `Executive/briefings/briefing-YYYY-MM-DD.md`*

```markdown
# LifeOS Executive Briefing — [DATE]
**Generated:** [timestamp] | **Data window:** [last N days]

---

## Overall Status
[One sentence: "Hassan is on track across most domains — Finance needs attention, Health is strong."]

## Domain Dashboard
| Domain | Status | Signal | Last Entry |
|--------|--------|--------|------------|
| 🏃 Health & Fitness | 🟢/🟡/🔴 | [key metric, e.g., "Avg 6.8 hrs sleep, 4/7 workouts"] | [date] |
| 💰 Finance | 🟢/🟡/🔴 | [key metric, e.g., "Net +KES 45k this week"] | [date] |
| 🤝 Relationships | 🟢/🟡/🔴 | [signal, e.g., "3 interactions — no high-priority contacts neglected"] | [date] |
| 🗂 Projects & Work | 🟢/🟡/🔴 | [signal, e.g., "SierraHomes 🟡 (Ecotecture blocker), MSIFS 🟢"] | [date] |
| 🎯 Goals & Ideas | 🟢/🟡/🔴 | [signal, e.g., "2 goals active, G001 on track"] | [date] |
| 📋 Plans | 🟢/🟡/🔴 | [signal, e.g., "1 plan active, on budget"] | [date] |

---

## Wins This Period
- [Bullet: specific win with domain tag]
- [Bullet: specific win]

## Blockers & Risks
- 🔴 [Critical blocker — domain — what's needed]
- 🟡 [At-risk item — domain — what to watch]

## Top Action Queue Items
| # | Item | Domain | Priority | Due |
|---|------|--------|----------|-----|
| 1 | [title] | [domain] | 🔴 Critical | [date] |
| 2 | ... | | | |
| 3 | ... | | | |
| 4 | ... | | | |
| 5 | ... | | | |

## Decisions Pending Your Input
- [Decision needing Hassan's call — context — what you need to decide]

---

## Domain Deep-Dives

### 🏃 Health & Fitness
[2–4 sentences: sleep trend, workout consistency, energy pattern, anything flagged]

### 💰 Finance
[2–4 sentences: income/expense summary, cash position, anything notable]

### 🤝 Relationships
[2–4 sentences: who you connected with, trust account status, anyone neglected]

### 🗂 Projects & Work
[1–2 sentences per active project: status, key blocker, next milestone]

### 🎯 Goals & Ideas
[OKR progress, ideas that progressed, ideas needing attention]

### 📋 Plans
[Milestone status, budget tracking, any timeline risk]

---
*LifeOS Briefing — generated on demand. Next briefing when you say "Generate briefing."*
```

---

### 2.7 — Phase 1 Domain Activation (from Q&A)

All 4 of Hassan's selected Phase 1 domains activate simultaneously at launch. Phase 2 adds Relationships and Plans.

| Phase | Domains Active | Start |
|-------|---------------|-------|
| Phase 1 | Health & Fitness, Finance, Projects & Work, Goals & Ideas | Day 1 |
| Phase 2 | + Relationships, + Plans | Week 5 |
| Phase 3 | Intelligence layer (pattern analysis, trend briefings) | Month 3+ |

---

### 2.8 — Architecture Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Check-in style | Free narration + Claude follow-ups | Low friction for Hassan; follow-ups fill gaps without forcing structure |
| Briefing cadence | On-demand | Hassan generates when needed, not on a forced schedule |
| Action queue priority | Urgency × Impact matrix | PM-standard prioritization — surfaces critical items regardless of domain |
| Data storage | Markdown files in AI Memory Brain repo | Portable, AI-readable, git-versioned, no external dependency |
| Phase 1 domains | Health, Finance, Projects-Work, Goals-Ideas | All 4 highest-value domains; Relationships + Plans added in Phase 2 |
| Log format | Dated block entries, append-only | Preserves history, enables pattern analysis in Phase 3 |

---

## Document 3: Release Plan [COMPLETE]

---

### 3.1 — Q2 2026 OKRs (Hassan's First LifeOS Goal Set)

These three objectives anchor the Goals domain and give LifeOS a live purpose from Day 1.

---

#### G001 — Fitness Foundation
**Objective:** Build a consistent fitness and energy baseline that sustains high performance across all ventures

| Key Result | Target | Measurement |
|-----------|--------|-------------|
| KR1 | ≥ 4 workouts/week for 10 of 13 Q2 weeks | health-log.md weekly count |
| KR2 | Average sleep ≥ 7 hrs/night by Week 8 | health-log.md rolling average |
| KR3 | Average morning energy ≥ 4/5 by Week 8 | health-log.md energy field |

**Why it matters:** The Personal-Life Advisor is clear — energy management beats time management. Sleep and exercise are the foundation of everything else Hassan is trying to do across 5+ active ventures.

---

#### G002 — Financial Clarity & Positive Trajectory
**Objective:** Establish a clear, accurate financial picture and a net-positive cash trajectory by end of Q2

| Key Result | Target | Measurement |
|-----------|--------|-------------|
| KR1 | Log income and expenses ≥ 25 days in Q2 | finance-log.md entry count |
| KR2 | At least 1 revenue event confirmed (proposal signed, invoice paid) | finance-log.md income entries |
| KR3 | Net positive cash flow by end of May 2026 | finance-log.md running cash notes |

**Why it matters:** Multiple active ventures, proposals, and contracts in motion — but no centralized view of actual money movement. Financial clarity is a precondition for every strategic decision MSIFS, Provecta, and SierraHomes require.

---

#### G003 — AI Memory Brain GTM Launch
**Objective:** Launch AI Memory Brain as a monetizable product with paying customers by end of Q2

| Key Result | Target | Measurement |
|-----------|--------|-------------|
| KR1 | Stripe wired to Blueprint modal | AQ-001 closed — done by Apr 15 |
| KR2 | First 3 LinkedIn authority posts published | projects-log.md — by May 1 |
| KR3 | First paying Blueprint customer acquired | finance-log.md — income entry by Jun 30 |

**Why it matters:** AMB is Hassan's first independently monetizable IP. GTM execution is the bottleneck — the product exists, the landing page is live, the pipeline is ready. Execution is the only variable.

---

### 3.2 — Launch Checklist (Before Day 1)

These items must be complete before the first LifeOS check-in session:

- [x] Document 1: Project Context — Complete
- [x] Document 2: Architecture/Design — Complete
- [x] Document 3: Release Plan — Complete (this document)
- [x] All 6 domain log files created
- [x] `Executive/action-queue.md` seeded with AQ-001 through AQ-020
- [x] All Phase 1 department agents distributed
- [x] Q2 OKRs seeded into `Goals-Ideas/goals-log.md` ✓
- [x] Hassan reviewed and confirmed action queue priorities ✓ — 9 items closed, 7 successor tasks added (2026-04-11)
- [x] **Launch date confirmed: Sunday, April 12, 2026** ✓

---

### 3.3 — Phase 1: Foundation (Weeks 1–4)

**Goal:** Lock the daily check-in habit. Build data across all 4 active domains. Generate first executive briefing.

**Active Domains:** Health, Finance, Projects & Work, Goals & Ideas

**Day 1 — First Check-In Protocol:**

The very first session is slightly different from regular check-ins. Hassan says "First LifeOS check-in" and Claude runs this one-time orientation:

1. Claude confirms the Q2 OKRs are loaded and asks Hassan to rate his starting baseline (1–5) across domains
2. Claude runs a "current state snapshot" — a brief structured assessment of where Hassan stands today:
   - Health: last workout? last full night's sleep? current energy baseline?
   - Finance: rough cash position? any urgent financial items?
   - Projects: what's the #1 blocker on each active project right now?
   - Goals: confirms the 3 OKRs — any changes?
3. Claude writes the Day 1 baseline entries into each domain log
4. Claude reviews the pre-seeded action queue with Hassan — confirm, re-prioritize, or drop items
5. Claude delivers the first LifeOS briefing (even with minimal data — this establishes the format)

**Weeks 1–4 Habit Formation Plan:**

The goal is ≥ 5 check-ins/week for 4 consecutive weeks. Research shows habit formation requires ~21–30 days of consistency. LifeOS is designed to make each check-in as low-friction as possible.

| Week | Focus | Target |
|------|-------|--------|
| Week 1 | Habit activation | ≥ 5 check-ins. No pressure on log quality — just show up |
| Week 2 | Log quality | ≥ 5 check-ins. Claude prompts for structured data across all 4 domains |
| Week 3 | Queue discipline | ≥ 5 check-ins. Action queue reviewed and updated each session. At least 2 Critical items resolved |
| Week 4 | First briefing | ≥ 5 check-ins. Generate first executive briefing. Confirm habit is locked |

**Friction Reduction Rules (Phase 1):**
- If Hassan only has 3 minutes, a 1-sentence check-in is fine — Claude extracts what it can, logs what's there, and notes "brief entry"
- No mandatory fields in Phase 1 — Claude captures whatever is mentioned
- If Hassan misses a day, Claude doesn't guilt-trip — just picks up at next check-in

**Phase 1 Success Criteria (Day 30):**
- [ ] ≥ 5 check-ins/week for all 4 weeks
- [ ] At least 1 executive briefing generated and reviewed
- [ ] AQ-001 through AQ-005 (Critical queue) all resolved or actively in progress
- [ ] Q2 OKRs have at least 4 weeks of logged progress data

**Phase 1 → Phase 2 Gate:** All 4 success criteria met. Hassan confirms he's ready to add Relationships and Plans.

---

### 3.4 — Phase 2: Full Coverage (Weeks 5–12)

**Goal:** All 6 domains active. Structured log discipline established. First quarterly review completed.

**New Domains Added:** Relationships, Plans

**Week 5 Activation — Relationships Domain:**
- Claude runs a one-time "Relationship Inventory" in Week 5 check-in:
  - Who are the top 10 people in Hassan's life and work?
  - Last interaction date with each?
  - Trust account status (Deposit / Neutral / Withdrawal)?
  - Recommended next touch timing?
- This seeds the `Relationships/relationships-log.md` with a baseline

**Week 5 Activation — Plans Domain:**
- Claude asks: "What personal plans do you have with defined deliverables, budgets, or timelines?"
- Hassan describes each plan → Claude seeds `Plans/plans-log.md`

**Phase 2 Milestones:**

| Milestone | Target Week | Description |
|-----------|-------------|-------------|
| M1: Relationships activated | Week 5 | Baseline inventory complete, first interaction logs flowing |
| M2: Plans activated | Week 5 | At least 1 personal plan tracked with budget and timeline |
| M3: First Monthly Insight | Week 8 | Briefing includes 30-day trend data (sleep, finance, project velocity) |
| M4: Q2 OKR midpoint check | Week 9 | 50% of Q2 complete — Claude runs OKR progress assessment |
| M5: Q2 Quarterly Review | Week 13 (end of Q2) | Full quarterly life review generated. Q3 OKRs set. |

**Phase 2 Success Criteria:**
- [ ] All 6 domains have at least 4 weeks of logged data
- [ ] Relationships inventory complete and maintained
- [ ] Q2 OKR midpoint check completed (Week 9)
- [ ] At least 2 executive briefings generated in Phase 2
- [ ] Check-in consistency ≥ 4x/week (sustainable pace, not perfection)

---

### 3.5 — Phase 3: Intelligence Layer (Month 3+)

**Goal:** LifeOS stops being a log and starts being an advisor. Pattern recognition, trend analysis, and predictive action queue.

**What changes in Phase 3:**

**Trend Analysis in Briefings:**
- Sleep trend line (improving / stable / declining)
- Workout consistency % over rolling 30 days
- Finance: monthly net cash flow trend (3-month rolling)
- Project velocity: are projects moving faster or slower than baseline?
- Relationship: anyone not contacted in > 30 days who should be?

**Pattern Recognition in Check-Ins:**
- "You've mentioned low energy on Wednesdays for 3 weeks in a row — what's happening Tuesdays?"
- "Your finance log shows high spend in the 'Entertainment' category around project stress periods"
- "SierraHomes entries consistently include 'waiting on Rajab' — this has been a blocker for 6+ weeks"

**Predictive Action Queue:**
- Items surface before they become urgent, based on log history
- "M2 opens April 15 — CGI brief needs to be issued. Adding AQ-XXX with 5-day lead time"
- "You haven't contacted Alex in 18 days — MSIFS momentum risk. Adding relationship item"

**Quarterly Life Review (every 13 weeks):**
- Full domain retrospective
- OKR progress scoring (0–100% per key result)
- Domain health ratings (Green / Amber / Red) with trend direction
- Top 3 wins, top 3 learnings, top 3 next-quarter priorities
- New OKR setting session

**Phase 3 "Fully Operational LifeOS" Definition:**

LifeOS is fully operational when:
1. Hassan checks in ≥ 4x/week as a natural habit (not a task)
2. The executive briefing is the first thing generated before any major decision
3. The action queue is the single source of truth for what needs attention
4. At least 1 quarterly life review has been completed and used to set Q3 OKRs
5. Pattern observations from Claude have influenced at least 1 real decision

---

### 3.6 — Release Summary

| Phase | Timeframe | Domains | Key Milestone |
|-------|-----------|---------|---------------|
| Phase 1: Foundation | Weeks 1–4 | Health, Finance, Projects-Work, Goals-Ideas | Habit locked + first briefing + Critical queue cleared |
| Phase 2: Full Coverage | Weeks 5–12 | + Relationships, + Plans | All 6 domains live + Q2 Quarterly Review |
| Phase 3: Intelligence Layer | Month 3+ | All 6 + trend analysis | Pattern recognition + predictive queue + 3rd quarterly review |

**Estimated time to fully operational LifeOS:** 3 months from Day 1.

---

### 3.7 — Document 3 Decision Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Launch date | Hassan decides after Document 3 | Finishing staging before committing to launch date |
| Q2 OKRs | Fitness, Finance, AMB GTM | Hassan confirmed — these are the 3 most consequential Q2 priorities |
| 30-day success definition | Habit + briefing + Critical queue cleared | Most meaningful signal across all 3 output types |
| Phase 1 domain count | 4 simultaneously | Hassan selected all 4 — no reason to limit artificially |
| Phase 2 gate | Day 30 success criteria met | Quality gate before expanding scope |
| Phase 3 trigger | Automatic at Month 3 if habit is established | Intelligence layer only has value once there's enough data |

---

## How to Use This File

1. **Reference During Sessions:** This file is your master reference while staging. Return to it frequently.
2. **Update Incrementally:** As you develop each document, update the "Status" fields in the Staging Roadmap section.
3. **Link to Decisions:** When decisions are made, log them in `decisions-learnings/` and index in `Key-Decisions.md`.
4. **Promote to Project:** Once all three documents are complete, execute PROJECT_MEMORY_INIT.md.

---

## Next Steps

**Now:** Review this Master-Context.md and confirm you're ready to proceed.

**Then:** Continue with the documents in order:
- **Document 2 (Architecture/Design):** Define domain schemas, log templates, daily check-in protocol, session workflows, output formats
- **Document 3 (Release Plan):** Phase the rollout — what activates first and what full operational LifeOS looks like

When ready, say: **"Start with Document 2"** or **"Start with Document 3"**

# MSIFS — Activated AI Agents

**Project:** Multinational Strategic Investment Funds (MSIFS)
**Fund:** Frontier Impact Infrastructure & Minerals Fund (FIIMF)
**Activated:** 2026-04-03
**Status:** Permanent activation for all MSIFS sessions

---

## Purpose

The following AI Memory Agents are permanently activated for the MSIFS project. Any AI session working on MSIFS should load these agents as context to ensure domain-expert-level output across all fund workstreams.

---

## Tier 1: Core Agents (Load Every Session)

### 1. Investment Advisor
- **Path:** `Memory_Agents/Investment/investment-advisor.md`
- **MSIFS Role:** Deal sourcing, valuation, due diligence, portfolio construction, deal structuring, post-investment value creation
- **Why Critical:** MSIFS is a $200M private equity fund. Every deal decision — from pipeline screening to IC-ready packages to exit planning — requires investment-grade analysis. This agent provides Managing Partner-level expertise for the $5–15M ticket sizes across infrastructure and minerals.
- **Key Workstreams:** Pipeline evaluation (Lamu Port, Kazakhstan minerals, Mtwara LNG, Kurzal gold), financial model stress-testing, IC memo preparation, LP pitch materials

### 2. Market Development Advisor
- **Path:** `Memory_Agents/Market-Development/market-development-advisor.md`
- **MSIFS Role:** Market entry strategy, geographic expansion, partnership development, regulatory navigation, local market intelligence
- **Why Critical:** MSIFS operates in frontier markets (East Africa, Central Asia) where standard market entry playbooks don't apply. This agent has 25+ years and 20+ new market openings across 4 continents — directly applicable to Kenya/Tanzania/Mozambique and Kazakhstan/Kyrgyzstan entry.
- **Key Workstreams:** Kenya government engagement, Kazakhstan institutional partnerships, DFI relationship strategy, local partner identification

### 3. Politics & Government Affairs Advisor
- **Path:** `Memory_Agents/politics/politics-advisor.md`
- **MSIFS Role:** Political risk assessment, government relations strategy, regulatory analysis, stakeholder mapping, geopolitical risk management
- **Why Critical:** Infrastructure investing in frontier markets is fundamentally a government relations exercise. Permits, concessions, PPP approvals, and community buy-in all flow through political channels. This agent has 22+ years managing government relations in 30+ countries.
- **Key Workstreams:** Kenya government engagement (KenInvest, Ministry of Investment, LAPSSET CDA, NIF), Kazakhstan regulatory navigation (AIFC, Kazakh Invest, DBK), political risk insurance strategy, sanctions/compliance screening

---

## Tier 2: Supporting Agents (Load When Relevant)

### 4. Strategy Advisor
- **Path:** `Memory_Agents/Strategy/strategy-advisor.md`
- **MSIFS Role:** Fund strategy, portfolio company strategic positioning, competitive analysis, M&A strategy
- **When to Load:** Fund thesis refinement, LP pitch strategy, portfolio company value creation planning, competitive positioning against other frontier market funds

### 5. Finance Agent
- **Path:** `Memory_Agents/Finance/AGENT.md`
- **MSIFS Role:** Financial statements, variance analysis, reconciliation, audit support, reporting
- **When to Load:** LP quarterly reporting, portfolio company financial oversight, fund accounting, management fee calculations, carry waterfall modeling

### 6. Growth & Revenue Advisor
- **Path:** `Memory_Agents/Growth-n-Revenue/growth-n-revenue-advisor.md`
- **MSIFS Role:** Revenue modeling, unit economics, growth forecasting, pricing strategy
- **When to Load:** Portfolio company revenue projections, infrastructure utilization modeling, commodity revenue optimization, offtake agreement structuring

### 7. Sales Advisor
- **Path:** `Memory_Agents/Sales/sales-advisor.md`
- **MSIFS Role:** LP fundraising pipeline management, investor relationship building, outreach strategy
- **When to Load:** LP fundraising campaigns, investor universe filtering, pitch meeting preparation, follow-up cadence management

---

## Tier 3: Situational Agents (Load on Demand)

### 8. Human Psychology Advisor
- **Path:** `Memory_Agents/Human-Psychology/human-psychology-advisor.md`
- **When to Load:** Partner negotiations, LP relationship dynamics, community engagement psychology, cross-cultural communication (East Africa / Central Asia)

### 9. Legal Agent
- **Path:** `Memory_Agents/Legal/` (check for specific files)
- **When to Load:** GP Agreement review, LPA drafting, PPM development, regulatory filings, side letter negotiations

---

## How to Activate

When starting an MSIFS session, the AI should:

1. Read this file (`projects/staging/MSIFS/activated-agents.md`)
2. Load all Tier 1 agents into context
3. Load Tier 2/3 agents based on the session's specific task
4. Reference the agent's advisory philosophy and domain expertise when producing work product

**Example prompt prefix:**
> "I'm working on the MSIFS project. Load the activated agents from `projects/staging/MSIFS/activated-agents.md` and apply their expertise to the following task: [task description]"

---

## Agent Activation Log

| Date | Agent | Activated By | Reason |
|---|---|---|---|
| 2026-04-03 | Investment Advisor | Hassan | Core fund management capability |
| 2026-04-03 | Market Development Advisor | Hassan | Frontier market entry strategy |
| 2026-04-03 | Politics & Government Affairs Advisor | Hassan | Government engagement (Kenya, Kazakhstan) |
| 2026-04-03 | Strategy Advisor | Hassan | Fund strategy and positioning |
| 2026-04-03 | Finance Agent | Hassan | Financial reporting and modeling |
| 2026-04-03 | Growth & Revenue Advisor | Hassan | Portfolio company value creation |
| 2026-04-03 | Sales Advisor | Hassan | LP fundraising pipeline |

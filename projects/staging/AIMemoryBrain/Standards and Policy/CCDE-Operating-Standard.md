# Centralized Command, Decentralized Execution (CC/DE) Operating Standard v2.0

**Owner:** [Your Name] ([your@email.com])
**Last Updated:** 2026-03-29
**Scope:** ALL projects under the system owner's management — physical operations, software development, AI products, and wholesale ventures
**Management Hub:** Astana, Kazakhstan
**Memory Tier:** Tier 2 (Index — read on every session; drill into sections as needed)
**Companion Standard:** [Adaptive Communication Standard v1.0](Communication-Standard.md) — Governs HOW all communications are composed and delivered. The CC/DE defines WHAT to communicate and WHEN; the ACS defines HOW and to WHOM in what style.

---

## Document Purpose

This is the **primary operational standard** governing how all projects are managed across the owner's project portfolio. Every AI assistant, field agent, contractor, and advisor operates within this framework. It defines how decisions are made, how money flows, how people are managed, how contacts are tracked, and how operational awareness is maintained — all from a centralized office in Astana, Kazakhstan while execution happens globally.

This document supersedes any project-specific management methodology. Individual projects may extend this standard with project-specific appendices (see Section 12), but they may not contradict it.

---

## Table of Contents

1. [Philosophy: Why CC/DE](#1-philosophy-why-ccde)
2. [The OODA Operating Rhythm](#2-the-ooda-operating-rhythm)
3. [Agent Network Management](#3-agent-network-management)
4. [Financial Control Framework](#4-financial-control-framework)
5. [Operational Awareness System](#5-operational-awareness-system)
6. [Project Governance](#6-project-governance)
7. [CRM & Contact Management Standard (Zoho CRM)](#7-crm--contact-management-standard-zoho-crm)
8. [Communication Log & Record-Keeping](#8-communication-log--record-keeping)
9. [Cross-Project Resource Sharing](#9-cross-project-resource-sharing)
10. [Anti-Patterns to Avoid](#10-anti-patterns-to-avoid)
11. [Recommended Tool Stack](#11-recommended-tool-stack)
12. [Project-Specific Appendices](#12-project-specific-appendices)
13. [Version History](#13-version-history)

---

## 1. Philosophy: Why CC/DE

CC/DE is a management framework designed for operators who run diverse, geographically distributed operations from a centralized location. It synthesizes principles from Mission Command (military doctrine), the OODA Loop, Management by Exception, PMO governance, and Principal-Agent theory into a unified operating system that scales across project types — from physical timber operations to software product development.

### The Five Pillars

| Pillar | Principle | Application |
|--------|-----------|-------------|
| **Centralized Intent** | The commander defines WHAT and WHY; field agents decide HOW | {Owner} sets targets, budgets, and standards from Astana. Agents execute using local judgment. |
| **Decentralized Execution** | Specialists closest to the work make tactical decisions | A miller decides milling sequence. A developer decides implementation approach. A vendor decides delivery routing. |
| **Continuous Awareness** | Async reporting + dashboards replace physical presence | Daily updates, weekly metrics, AI Memory persistence, Zoho dashboards. |
| **Financial Control** | Strict budgets with pre-authorized spending tiers | Spending thresholds define what requires approval vs. autonomous action per project. |
| **Trust but Verify** | Empower agents, then audit outcomes against standards | Field reports are trusted day-to-day; periodic audits and CRM records confirm accuracy. |

### Core Belief

> Deploying to the field does not benefit anyone when a specialist can execute better than you. Your value is in strategic direction, financial control, quality standards, and relationship orchestration — not physical presence.

### Applicability Across Project Types

| Project Type | CC/DE Application | Examples |
|-------------|-------------------|----------|
| **Physical Operations** | Field agents execute; owner monitors remotely | {Project-A}, {Project-B} |
| **Software Products** | Developers build; owner sets specs and reviews | {Software-Project}, {Software-Project-2} |
| **AI / Automation** | AI executes; owner sets policies and audits | {AI-Project} |
| **Wholesale / Distribution** | Vendors fulfill; owner manages pipeline via CRM | {Distribution-Project} |

---

## 2. The OODA Operating Rhythm

The OODA Loop (Observe → Orient → Decide → Act) provides the cadence for operational awareness across all projects.

### Phase Details

**OBSERVE — Gather Raw Data**
- Daily async reports from field agents (photos, videos, metrics)
- Automated dashboards (Zoho Books, Zoho CRM, Zoho Projects, inventory logs)
- Exception alerts (cost overruns, missed deadlines, quality failures, CRM pipeline stalls)
- Environmental scanning (market prices, competitor moves, regulatory changes)
- AI Memory session summaries and decision logs

**ORIENT — Contextualize and Analyze**
- Compare field data against project plans and budgets
- Identify deviations from expected outcomes
- Assess risk severity using each project's risk registry
- Cross-reference CRM communication logs against agent claims
- Update AI Memory with new learnings and decisions

**DECIDE — Choose Action or Non-Action**
- If within tolerance: no intervention needed (Management by Exception)
- If outside tolerance: issue corrective guidance
- If critical: escalate, redeploy resources, or pause operations
- Document all decisions in `decisions-learnings/` with rationale
- Log decision communications in Zoho CRM against relevant contacts

**ACT — Deploy Resources or Guidance**
- Issue mission briefs for new tasks (see Section 6)
- Release funds per the Financial Control Framework (see Section 4)
- Communicate changes to affected agents within 24 hours
- Update NextSteps.md and Key-Decisions.md in the relevant project
- Create/update Zoho CRM records for any new contacts, deals, or communications

### Recommended Cadence (Universal)

| Rhythm    | Activity                                                    | Scope                              | Medium                                |
| --------- | ----------------------------------------------------------- | ---------------------------------- | ------------------------------------- |
| Daily     | Async status update (photos + brief text)                   | Per-project field agents → {Owner} | Slack / WhatsApp                      |
| Weekly    | 30-min text exchange — review progress, blockers, next week | Per-project (active projects only) | Slack / WhatsApp                      |
| Bi-Weekly | Financial review — actuals vs. budget, all projects         | Cross-project ({Owner} solo)       | Zoho Books                            |
| Monthly   | Portfolio review — all project health at a glance           | Cross-project                      | AI Memory + Zoho                      |
| Monthly   | Investor / stakeholder update                               | Per-investor                       | WhatsApp / Email                      |
| Quarterly | Strategic review — reprioritize, kill/start projects        | Cross-project                      | Written report to Project owner email |

---

## 3. Agent Network Management

### Agent Classification (Universal)

Agents are any person or entity executing work on behalf of any project. They are classified into four tiers, and **every agent must be recorded in Zoho CRM** (see Section 7):

| Tier | Type | Relationship | CRM Record Type | Examples |
|------|------|--------------|-----------------|----------|
| **Tier 1: Core** | Dedicated resource, ongoing | Profit-share or salary | Contact + Account | {Team-Member-A}, Developers ({Software-Project}) |
| **Tier 2: Contracted** | Project-based, recurring | Fixed-price or hourly contract | Contact + Account | Electricians, equipment techs, freelance devs |
| **Tier 3: Vendor** | Service provider, transactional | Purchase order / invoice | Vendor record | Parts suppliers, Alibaba vendors, ACE Hardware, hosting providers |
| **Tier 4: Advisory** | Strategic input, periodic | Retainer or equity relationship | Contact + Account | {Contact-A} (Investor), legal counsel, consultants |

### Engagement Protocol

For every new agent engagement across any project:

1. **CRM Record** — Create or update the contact/vendor in Zoho CRM with appropriate tags (see Section 7)
2. **Mission Brief** — Define the task, success criteria, budget, and deadline (see Section 6)
3. **Communication Channel** — Establish primary channel (Slack, WhatsApp, email) and response time expectation
4. **Reporting Cadence** — Set daily/weekly update requirement based on tier
5. **Payment Terms** — Document in advance: amount, trigger (milestone vs. time), method
6. **Quality Standard** — Reference the applicable quality spec or acceptance criteria
7. **Escalation Path** — Define what constitutes a blocker and how to escalate
8. **Cross-Project Flag** — Assess whether this agent could serve other projects; tag accordingly in CRM

### Managing Principal-Agent Risk

The principal-agent problem occurs when field agents have different incentives than the project owner. Universal mitigations:

- **Align incentives**: Profit-share > flat salary for core agents. Agent earns more when the project earns more.
- **Reduce information asymmetry**: Require photo/video evidence with status updates, not just text claims.
- **Spot audits**: Periodically request unscheduled detailed reports or video walkthroughs.
- **Multiple information sources**: Cross-reference agent reports with financial data (Zoho Books), CRM communication logs, inventory counts, and third-party observations.
- **Clear standards**: Written specs and quality standards remove ambiguity about what "done" means.
- **CRM accountability**: All significant communications logged in CRM. Creates an audit trail.

---

## 4. Financial Control Framework

### Budget Architecture (Universal)

Every project operates within a 3-layer budget:

| Layer | Scope | Approval |
|-------|-------|----------|
| **Project Budget** | Total allocation for the initiative | Owner ({Owner}) + Investor/Partner (if applicable) |
| **Monthly Operating Budget** | Recurring costs: labor, materials, transport, hosting | Owner sets; reviewed bi-weekly |
| **Task Budget** | Per-task allocation within a mission brief | Owner approves; agent executes |

### Fund Deployment Rules

| Amount | Authority | Process |
|--------|-----------|---------|
| Under $500 | Field agent (autonomous) | Agent decides and reports after; logged in Zoho Books |
| $500 – $2,000 | Agent requests, owner approves | Slack/WhatsApp approval before spend |
| $2,000 – $5,000 | Owner approves with documentation | Written request with 3 quotes if applicable |
| Over $5,000 | Owner + investor/partner consultation | Formal proposal, sign-off required |

### Exception Thresholds (Management by Exception)

Only intervene when metrics fall outside acceptable ranges:

| Metric | Green (No Action) | Yellow (Monitor) | Red (Intervene) |
|--------|--------------------|-------------------|-------------------|
| Budget variance | Within 10% of plan | 10-25% over | >25% over |
| Schedule variance | On time or ahead | 1-2 weeks late | >2 weeks late |
| Quality defects | <5% rejection rate | 5-15% rejection | >15% rejection |
| Agent responsiveness | Same-day reply | 24-48 hour reply | >48 hours no reply |
| Revenue vs. target | >80% of monthly goal | 60-80% of goal | <60% of goal |
| CRM hygiene | All contacts tagged, comms logged | Some gaps in logging | No logging for >1 week |

---

## 5. Operational Awareness System

### Three Layers of Awareness

**Layer 1: Real-Time Pulse (Daily)**
- What happened today across active projects? (agent async updates)
- Any blockers or surprises?
- Photo/video evidence of progress (physical projects)
- Commit logs and PR status (software projects)

**Layer 2: Trend Analysis (Weekly)**
- Are we on track for monthly targets per project?
- Cash flow position and burn rate (cross-project)
- Inventory levels and pipeline status
- Agent performance and responsiveness
- CRM pipeline health — stale deals, uncontacted leads

**Layer 3: Strategic Health (Monthly/Quarterly)**
- Revenue trajectory vs. plan (all revenue-generating projects)
- Market conditions and pricing shifts
- Risk registry review and updates per project
- Investor/stakeholder confidence
- Portfolio balance — are resources allocated to the right projects?

### Time Zone Strategy

- **Astana (UTC+6)** is the command center
- **US Eastern (UTC-5)** = 11-hour offset ({Project-A}, {Distribution-Project}, most US operations)
- **US Pacific (UTC-8)** = 14-hour offset
- **Central Europe (UTC+1)** = 5-hour offset ({Contact-A} in Belgium)
- **Advantage**: Asynchronous work creates a "follow the sun" effect. {Owner} reviews overnight reports each morning; agents find guidance waiting each morning.
- **Overlap windows**: 8-10 AM US Eastern = 7-9 PM Astana; 6-8 PM CET = 11 PM-1 AM Astana
- **Rule**: Never require synchronous communication for routine operations. Live calls are for weekly reviews and escalations only.

---

## 6. Project Governance

### Project Lifecycle (Universal)

| Phase | Key Activities | CC/DE Focus |
|-------|----------------|-------------|
| **Initiate** | Define scope, budget, success criteria; create AI Memory project folder | Commander sets intent; CRM records created for all contacts |
| **Plan** | Break into tasks, assign agents, set milestones | Mission briefs issued; agents tagged in CRM |
| **Execute** | Field agents / developers work; async reporting begins | Decentralized execution; comms logged in CRM |
| **Monitor** | Dashboard review, exception management | OODA Loop active; CRM pipeline tracked |
| **Close** | Final audit, lessons learned, financial reconciliation | Document in AI Memory; CRM records archived with tags |

### Mission Brief Template (Universal)

Every task assigned to any agent on any project should follow this structure:

```
MISSION BRIEF
Project: [Project name]
Task: [Clear description of what needs to be done]
Agent: [Who is responsible — must exist in Zoho CRM]
Success Criteria: [Measurable definition of "done"]
Budget: [Maximum spend authorized]
Deadline: [Date or timeframe]
Constraints: [What they must NOT do]
Reporting: [How often and what format]
Escalation: [What triggers a call to {Owner}]
CRM Reference: [Zoho CRM contact/deal ID if applicable]
```

### Reporting Standards

**Daily Report (Field Agent → Owner)**
- 2-3 sentence text summary of work completed
- 1-3 photos or short video of progress (physical) / commit summary (software)
- Any blockers or decisions needed
- Planned work for next day

**Weekly Report (Owner compiles — per project)**
- Production/development metrics vs. targets
- Financial summary (spend vs. budget)
- Risk/blocker status changes
- Decisions made and rationale
- Next week priorities
- CRM: new contacts added, communications logged, pipeline changes

**Monthly Portfolio Report (Owner compiles — cross-project)**
- All-project health dashboard (green/yellow/red per project)
- Total cash position and burn rate
- Top 3 risks across portfolio
- Investor/stakeholder communication summary
- CRM hygiene score (% of contacts tagged, % of comms logged)

---

## 7. CRM & Contact Management Standard (Zoho CRM)

### Mandate

**Every vendor, client, contractor, agent, advisor, store, partner, and significant contact across ALL projects MUST be recorded in Zoho CRM.** This is not optional. The CRM is the single source of truth for who we work with, what we've discussed, and how each contact relates to our projects.

### Record Types

| Who | Zoho Module | When to Use |
|-----|-------------|-------------|
| Potential customer / lead | **Leads** | First contact with someone who might buy |
| Active customer / client | **Contacts** + **Accounts** | Converted lead or active business relationship |
| Supplier / manufacturer | **Vendors** | Anyone we buy from (Alibaba, parts suppliers, material vendors) |
| Contractor / freelancer | **Contacts** + **Accounts** | Anyone performing contracted work |
| Store / consignment partner | **Accounts** | ACE Hardware stores, retail partners |
| Investor / advisor | **Contacts** + **Accounts** | Ali, legal counsel, consultants |
| Government / regulatory | **Contacts** + **Accounts** | Hancock County, zoning office, tax authority |

### Tagging Taxonomy

Tags are the primary mechanism for cross-referencing contacts across projects and identifying multi-project utility. Every contact MUST have at minimum one Project Tag and one Role Tag.

#### Project Tags (Required — at least one per contact)

| Tag | Color | Applies To |
|-----|-------|------------|
| `{Project-A}` | Green | {Project-A} contacts |
| `{Software-Project}` | Blue | {Software-Project} contacts |
| `{Software-Project-2}` | Purple | {Software-Project-2} contacts |
| `{AI-Project}` | Orange | {AI-Project} contacts |
| `Corporate` | Red | General corporate contacts |
| `{Project-B}` | Teal | {Project-B} contacts |
| `{Distribution-Project}` | Yellow | Wholesale and distribution contacts |

#### Role Tags (Required — at least one per contact)

| Tag | Applies To |
|-----|------------|
| `Tier1-Core` | Dedicated ongoing resource ({Team-Member-A}, key developers) |
| `Tier2-Contracted` | Project-based recurring contractors |
| `Tier3-Vendor` | Transactional suppliers and vendors |
| `Tier4-Advisory` | Investors, legal, consultants |
| `Client` | Paying customers or consignment stores |
| `Lead` | Potential customer not yet converted |
| `Government` | Regulatory, zoning, tax authorities |

#### Specialty Tags (Optional — for cross-project resource identification)

| Tag | Purpose |
|-----|---------|
| `Electrician` | Electrical work — useful across {Project-A}, {Project-B} |
| `Legal` | Legal services — useful across all projects |
| `Logistics` | Transport/delivery — useful across {Project-A}, {Distribution-Project} |
| `Construction` | Building/construction — useful across {Project-A}, {Project-B} |
| `Developer` | Software development — useful across {Software-Project}, {Software-Project-2}, {AI-Project} |
| `Designer` | Design services — useful across all projects |
| `Accounting` | Financial/accounting services — useful across all projects |
| `Equipment` | Equipment vendors — useful across {Project-A} |
| `Retail-Partner` | Stores carrying our products — retail partners etc. |
| `Manufacturing` | Manufacturing partners — vendors etc. |
| `Investor` | Capital partners |
| `Real-Estate` | Property-related contacts |

#### Geographic Tags (Optional)

| Tag | Purpose |
|-----|---------|
| `{Location-A}` | {Location-A} area |
| `{Location-A-Sub}` | {Location-A-Sub} area |
| `{Location-A-Metro}` | {Location-A-Metro} area |
| `{Location-B}` | {Location-B} |
| `{Location-C}` | {Location-C} |
| `International` | International vendors/contacts |

### CRM Workflow Rules

1. **New Contact Rule**: When ANY new person enters the ecosystem (vendor, contractor, store manager, advisor), a CRM record is created within 24 hours with at minimum: name, email or phone, one Project Tag, one Role Tag.

2. **Communication Logging**: Every significant communication (calls, emails, WhatsApp messages about deals/tasks/decisions) gets a Note in the CRM contact record within 48 hours. "Significant" means anything that involves money, commitments, decisions, or status changes.

3. **Cross-Project Assessment**: When adding a new contact, ask: "Could this person/vendor serve any other project?" If yes, add the relevant Project Tags. This builds a cross-project resource network over time.

4. **Quarterly CRM Audit**: Every quarter, review all contacts for stale records (no communication in 90+ days), missing tags, and cross-project opportunities.

5. **AI Session Integration**: AI assistants (Claude, or other AI assistants) should check Zoho CRM when encountering a name or vendor in any project context, and should create/update CRM records when new contacts are mentioned in session work.

---

## 8. Communication Log & Record-Keeping

> **IMPORTANT:** This section defines WHAT to log and WHERE. For HOW to compose and deliver communications (tone, style, pacing, psychological profiling), see the **[Adaptive Communication Standard](Communication-Standard.md)** — the companion document that governs all communication composition across all projects.

### Communication Hierarchy

| Channel            | Use For                                               | Record In                         |
| ------------------ | ----------------------------------------------------- | --------------------------------- |
| **Slack**          | Daily async updates, quick questions, photo sharing   | Slack history + CRM summary notes |
| **WhatsApp**       | Field agent updates, investor calls, urgent issues    | CRM notes (manual log)            |
| **Email**          | Formal communications, contracts, vendor negotiations | Gmail archive + CRM auto-link     |
| **Slack/Whatsapp** | Weekly reviews, escalations, investor presentations   | CRM notes + recording link        |
| **Zoho CRM Notes** | Permanent record of all significant communications    | — (this IS the record)            |
| **AI Memory**      | Decisions, learnings, project context                 | Git-backed markdown files         |

### Record-Keeping Rules

1. **Every decision that involves money, commitments, or scope changes** gets documented in BOTH AI Memory (decisions-learnings/) AND Zoho CRM (as a Note on the relevant contact).

2. **Every vendor quote or proposal** gets logged as a CRM Note with the amount, date, and outcome (accepted/rejected/pending).

3. **Every agent report** (daily update, weekly report) gets acknowledged in the communication channel. If it contains decisions or issues, those are escalated to AI Memory and CRM.

4. **Every new project contact** mentioned in an AI session should trigger a check: "Is this person in Zoho CRM? If not, create the record."

---

## 9. Cross-Project Resource Sharing

### The Power of Tags

The tagging system in Section 7 exists specifically to enable cross-project resource identification. When a project needs a resource (electrician, developer, logistics, legal), the first step is always:

1. **Search Zoho CRM** for contacts with the relevant Specialty Tag
2. **Filter by Geographic Tag** if location matters
3. **Check Role Tag** to understand the relationship type
4. **Review CRM Notes** for past performance and communication history
5. **Only recruit new** if no existing contact fits

### Cross-Project Resource Matrix

This matrix identifies which resources are likely shared across projects:

| Resource Type | {Project-A} | {Project-B} | {Software-Project} | {Software-Project-2} | {AI-Project} | {Distribution-Project} |
|--------------|--------|-------------|----------|-------------|--------|-----------|
| Legal | YES | YES | YES | YES | — | YES |
| Accounting | YES | YES | YES | YES | — | YES |
| Logistics | YES | YES | — | — | — | YES |
| Electrician | YES | YES | — | — | — | — |
| Construction | YES | YES | — | — | — | — |
| Developer | — | — | YES | YES | YES | — |
| Designer | — | — | YES | YES | — | YES |
| Equipment | YES | — | — | — | — | — |
| Retail Partner | YES | — | — | — | — | YES |
| Investor | YES | YES | YES | YES | — | YES |

### Shared Services

Certain services are centralized and serve all projects:

| Service | Tool | Owner |
|---------|------|-------|
| Financial tracking | Zoho Books | {Owner} |
| CRM & contact management | Zoho CRM | {Owner} |
| Project management | Zoho Projects | {Owner} |
| AI Memory persistence | AI_Memory (Git) | {Owner} + AI assistants |
| Communication hub | Slack + WhatsApp | {Owner} |
| Document management | Google Drive | {Owner} |

---

## 10. Anti-Patterns to Avoid

These are common failure modes for centralized remote management:

| Anti-Pattern | Description | Mitigation |
|-------------|-------------|------------|
| **Micromanagement** | Dictating HOW tasks are done, not just WHAT | Issue mission briefs with outcomes, not step-by-step instructions |
| **Phantom Presence** | Pretending to be on-site when you're not | Be transparent about your location and role |
| **Information Hoarding** | Keeping plans/context in your head | Document everything in AI Memory; share context with agents |
| **Delayed Decisions** | Waiting for "perfect information" before acting | Set decision deadlines; use 70% confidence threshold |
| **Single Point of Failure** | All knowledge in one person | Document processes; cross-train; build agent bench |
| **Trust Without Verify** | Accepting reports at face value indefinitely | Periodic spot audits; cross-reference data sources; CRM logs |
| **Over-Reporting** | Requiring so much reporting that agents can't work | Keep daily reports to 5 minutes; automate what you can |
| **Timezone Tyranny** | Forcing sync calls at inconvenient hours | Default to async; use overlap windows for live calls only |
| **CRM Neglect** | Not logging contacts or communications | Enforce 24-hour rule for new contacts; 48-hour rule for comms |
| **Silo Thinking** | Treating each project as completely independent | Use cross-project tags; quarterly resource review; shared services |
| **Tool Sprawl** | Using different tools for different projects | Standardize on Zoho suite + Slack + AI Memory for all projects |

---

## 11. Recommended Tool Stack

| Function | Tool | Scope | Purpose |
|----------|------|-------|---------|
| Financial Tracking | Zoho Books | All projects | Invoicing, expenses, cash flow |
| CRM & Contact Management | Zoho CRM | All projects | Contacts, vendors, communication logs, tags, pipeline |
| Project Management | Zoho Projects | All projects | Tasks, milestones, time tracking |
| Communication (Field) | Slack / WhatsApp | All projects | Daily async updates, photo sharing |
| Communication (Investor) | WhatsApp + Email | Cross-project | Monthly/quarterly updates |
| Project Memory | AI Memory (Git-backed) | All projects | Decisions, learnings, context persistence |
| Inventory Tracking | Google Sheets → Zoho | Hunter / Wholesale | Production log, consignment tracking |
| Video Calls | Zoom / WhatsApp Video | All projects | Weekly reviews, escalations |
| Document Management | Google Drive | All projects | Contracts, specs, shared documents |
| E-Signatures | Zoho Sign | All projects | Contracts, agreements |
| Help Desk | Zoho Desk | {Software-Project} / {Software-Project-2} | Customer support tickets |
| Marketing Automation | Zoho Campaigns | Wholesale / Products | Email campaigns, subscriber management |
| AI Assistant | {AI-Assistant} (WhatsApp) | All projects | 24/7 AI support via WhatsApp |

---

## 12. Project-Specific Appendices

Each project may maintain a project-specific CC/DE appendix in its Operations/ folder. These appendices extend this standard with project-specific details but may not contradict the universal standard.

| Project | Appendix Location | Status |
|---------|-------------------|--------|
| {Project-A} | `projects/{Project-A}/Operations/CCDE-Management-Standard.md` | Active — v1.0 |
| {Software-Project} | `projects/{Software-Project}/Operations/CCDE-Appendix.md` | To be created |
| {Software-Project-2} | `projects/{Software-Project-2}/Operations/CCDE-Appendix.md` | To be created |
| {AI-Project} | `projects/{AI-Project}/Operations/CCDE-Appendix.md` | To be created |

### What Goes in a Project Appendix

- Project-specific agent roster (names, roles, CRM IDs)
- Project-specific daily dashboard metrics
- Project-specific financial thresholds (if different from universal)
- Project-specific reporting templates
- Project-specific risk factors
- Project-specific success criteria and KPIs

---

## 13. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-29 | Initial release — synthesized from Mission Command, OODA Loop, Management by Exception, PMO governance, and Principal-Agent theory |
| 2.0 | 2026-03-29 | Expanded to universal operating standard across all projects. Added: CRM & Contact Management Standard (Section 7), Communication Log & Record-Keeping (Section 8), Cross-Project Resource Sharing (Section 9). Converted all project-specific content to universal language. Added tagging taxonomy with Project, Role, Specialty, and Geographic tags. |
| 3.0 | 2026-03-29 | Converted to open-source template. Replaced all personal/project-specific references with generic placeholders for individual projects and team members. Document structure and frameworks remain unchanged. |

---

## AI Session Integration Rules

When any AI assistant opens a session on a
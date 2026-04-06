# Staging Protocol

**Purpose:** The Staging Protocol is the ideation and preparation phase that precedes full project initialization via PROJECT_MEMORY_INIT.md. During staging, the AI and user collaborate to develop the three documents required to launch a project: (1) Project Context, (2) Architecture/Design, and (3) Release Plan. Staging is **project-type agnostic** — it supports software development, business launches, product development, service offerings, consulting engagements, and organizational initiatives.

**Staging Philosophy:** A staged project prepares infrastructure and documentation BEFORE committing to a full AI Memory project. Think of staging as the "planning sprint" or "design sprint" that produces the inputs for PROJECT_MEMORY_INIT.md.

---

## Project Lifecycle — Where Staging Fits

This protocol is **Step 2** of the AI Memory project lifecycle:

| Step | File | Purpose | Frequency |
|------|------|---------|-----------|
| 1 | `setup-AI-Memory.md` | One-time system configuration (owner, keys, models, standards) | Once ever |
| **2** | **`staging.md` (this file)** | **Per-project ideation, planning, and document development** | **Per project** |
| 3 | `PROJECT_MEMORY_INIT.md` | Per-project full build — autonomously constructs project memory | Per project |

**Prerequisites:** Step 1 (`setup-AI-Memory.md`) should be completed before staging your first project. If the system has never been initialized (no sessions, no decisions, no keys file), run `setup-AI-Memory.md` first.

---

## Trigger: When to Stage a Project

Execute this protocol when the user says:
- "Stage a new project"
- "I want to stage a project"
- "Let's start staging"
- Or when explicitly directed by another protocol

---

## Phase 1: Project Intake

### Step 1.1: Obtain Project Name

**AI Instructions:** Ask the user:

> "What is the name of this project? This should be a short, memorable identifier (single word or PascalCase).
>
> Examples:
> - {YourProject} (e.g., web app, manufacturing business)
> - HunterBuildingMaterials (B2B supplier)
> - TelemedVendor (telehealth service)
> - ConsultingEngagement_ClientX (consulting project)
>
> Please provide the project name now."

Wait for response and store as `PROJECT_NAME`.

### Step 1.2: Obtain Project Category

**AI Instructions:** Ask the user:

> "What category best describes this project? Select one:
>
> - **Software**: Web app, mobile app, SaaS platform, API, CLI tool, or other digital product
> - **Business**: New business division, business unit, or business venture
> - **Product**: Physical product, manufactured good, or hardware
> - **Service**: Professional service offering, consulting engagement, or managed service
> - **Other**: Please specify
>
> This classification helps me tailor the staging process to your needs."

Wait for response and store as `PROJECT_CATEGORY`.

### Step 1.3: Obtain Project Vision

**AI Instructions:** Ask the user:

> "Describe your project vision in 2-4 sentences. What is it? What problem does it solve? Who is it for?
>
> Example: 'HunterBuildingMaterials is a B2B marketplace connecting construction companies with bulk material suppliers, reducing sourcing friction and improving price transparency.'
>
> Please provide your vision now."

Wait for response and store as `PROJECT_VISION`. This becomes the foundation for Document 1 (Project Context).

### Step 1.4: Obtain Project Owner

**AI Instructions:** Ask the user:

> "Who is the primary project owner? Provide:
> - **Full name**
> - **Email address** (optional)
> - **Role/title** (e.g., Founder, CTO, Product Manager, Client)"

Wait for response and store as `OWNER_NAME`, `OWNER_EMAIL`, `OWNER_ROLE`.

---

## Phase 2: Create Staging Folder & Initialize Master Context

### Step 2.1: Create Staging Directory

**AI Instructions:** Using the PROJECT_NAME from Step 1.1, create the following directory structure:

```
AI_Memory_Open/projects/staging/{PROJECT_NAME}/
├── decisions-learnings/           # Session-based decision logs
│   └── session-protocol.md        # Instructions for capturing decisions per session
├── agents/
│   ├── open.md                    # Session initialization protocol (copied from template)
│   └── closure.md                 # Session closure protocol (copied from template)
├── Master-Context.md              # **Master staging context file (create immediately — see Step 2.2)**
├── Key-Decisions.md               # Index file for decisions
├── Sessions.md                    # Index file for session summaries
├── NextSteps.md                   # Prioritized staging tasks and roadmap
└── README.md                       # Overview of staging project
```

### Step 2.2: Distribute Agents Into Department Folders

**AI Instructions:** For each department folder created in Step 2.1, create an `agents/` subfolder and copy the relevant agent files from `AI_Memory_Open/Memory_Agents/` following the Agent-to-Department Mapping defined in the Agent Integration Protocol section above. Use the naming convention `{SourceFolder}-AGENT.md` and `{SourceFolder}-advisor.md` to avoid collisions.

Also create any department folders that don't exist yet but have mapped agents (e.g., `People-n-Culture/` if the project involves people/HR decisions, `Sales/` if the project involves sales).

### Step 2.3: Generate Master-Context.md (Immediate)

**CRITICAL: This file is created immediately upon staging initialization.**

Generate `projects/staging/{PROJECT_NAME}/Master-Context.md` with the following structure:

```markdown
# {PROJECT_NAME} — Staging Master Context

**Project Name:** {PROJECT_NAME}
**Category:** {PROJECT_CATEGORY}
**Owner:** {OWNER_NAME} ({OWNER_ROLE})
**Stage:** Staging (Ideation & Preparation)
**Last Updated:** {TODAY'S_DATE}

---

## Project Vision

{PROJECT_VISION}

---

## Staging Phase Objectives

During staging, we will collaboratively develop three foundation documents:

1. **Project Context Document** — Vision, goals, success metrics, target audience, and institutional dependencies
2. **Architecture/Design Document** — System/business/product design, technology stack (if applicable), operational model
3. **Release Plan Document** — Phased delivery roadmap with milestones, epics, and acceptance criteria

Once these three documents are complete and approved, this project will be promoted to a full AI Memory project via PROJECT_MEMORY_INIT.md.

---

## Staging Roadmap

### Document 1: Project Context
**Status:** [ ] Not Started [ ] In Progress [ ] Complete
**Description:** Vision, goals, target market, success metrics, key assumptions, institutional dependencies

### Document 2: Architecture/Design
**Status:** [ ] Not Started [ ] In Progress [ ] Complete
**Description:** System design (software), business model (business), product specs (product), operational design (service)

### Document 3: Release Plan
**Status:** [ ] Not Started [ ] In Progress [ ] Complete
**Description:** Phased roadmap with version milestones, epics, and acceptance criteria

---

## Key Commands During Staging

- **Continue staging from Document N:** "Continue with Document {1|2|3}"
- **Review current progress:** "Where are we in staging?"
- **Save and close session:** "Close staging session"
- **Promote to full project:** "Initialize {PROJECT_NAME} via PROJECT_MEMORY_INIT.md"

---

## Institutional Dependencies

Every project — whether software, business, product, or service — has the following potential institutional dependencies. Identify which apply to your project:

- **Marketing:** Brand, messaging, go-to-market, customer acquisition
- **Legal:** Contracts, compliance, intellectual property, regulatory requirements
- **Finance:** Funding, budgeting, revenue modeling, cash flow
- **Security:** Data protection, encryption, access control, audit trail
- **Executive:** Leadership alignment, board updates, strategic visibility
- **Operations:** Process design, resource allocation, vendor management

These dependencies will be documented in the Architecture/Design document.

---

## Available Agents

The following domain-expert agents are available in this project's department folders. When your current task requires domain expertise, read the relevant agent files before proceeding.

| Domain | Department Folder | Agent Files | Expertise |
|---|---|---|---|
| Finance & Investment | `Finance/agents/` | Finance-AGENT.md, Finance-advisor.md, Investment-AGENT.md, Investment-advisor.md | Financial modeling, budgeting, cash flow, investment strategy |
| Marketing & Growth | `Marketing/agents/` | Marketing-AGENT.md, Marketing-advisor.md, Market-Development-AGENT.md, Market-Development-advisor.md, Sales-AGENT.md, Sales-advisor.md | Campaigns, content, GTM, market development, sales |
| Legal | `Legal/agents/` | Legal-AGENT.md, Legal-advisor.md | Contracts, compliance, IP, regulatory |
| Security & Infrastructure | `Security/agents/` | Infrastructure-AGENT.md, Infrastructure-advisor.md | Security architecture, infrastructure design, cloud |
| Executive & Strategy | `Executive/agents/` | Strategy-AGENT.md, Strategy-advisor.md, PMO-AGENT.md, PMO-advisor.md, Growth-n-Revenue-AGENT.md, Growth-n-Revenue-advisor.md, Human-Psychology-AGENT.md, Human-Psychology-advisor.md | Strategic planning, program management, revenue, stakeholder psychology |
| Operations | `Operations/agents/` | Operations-AGENT.md, Operations-advisor.md, Infrastructure-AGENT.md, Infrastructure-advisor.md, Automation-AGENT.md, Automation-advisor.md | Process design, runbooks, infrastructure ops, automation |
| Product Development | `Product_Development/agents/` | Product-Development-AGENT.md, Product-Development-advisor.md, Software-Development-AGENT.md, Software-Development-advisor.md | Product strategy, specs, software architecture, dev workflows |
| Tech Support | `TechSupport/agents/` | Tech-Support-AGENT.md, Tech-Support-advisor.md | Ticket triage, escalation, KB articles, customer support |
| People & Culture | `People-n-Culture/agents/` | People-n-Culture-AGENT.md, People-n-Culture-advisor.md | HR, hiring, onboarding, performance, org design |

**How to use:** When your task touches any of these domains, read the relevant AGENT.md for operational workflows or the advisor.md for strategic guidance before proceeding.

**Source:** All agents originate from `AI_Memory_Open/Memory_Agents/`. If project-local copies are outdated, refresh from the source.

---

## Document 1: Project Context [TEMPLATE]

> When ready, fill in this section collaboratively.

### Vision & Goals
- **Vision Statement:** {FROM PROJECT_VISION}
- **Primary Goal:** What outcome defines success?
- **Secondary Goals:** What else should we achieve?

### Target Audience / Users
- Who are the end users or customers?
- What problem does this solve for them?
- How will they use this?

### Success Metrics
- How will we measure success? (e.g., users, revenue, adoption, impact)
- What are key performance indicators (KPIs)?

### Institutional Dependencies
- Which dependencies from the list above apply to this project?
- What compliance, legal, or regulatory requirements exist?

### Assumptions & Constraints
- What assumptions are we making?
- What constraints exist? (budget, timeline, technical, organizational)

---

## Document 2: Architecture/Design [TEMPLATE]

> When ready, fill in this section collaboratively. The content varies by project type.

### For Software Projects
- System architecture (services, layers, boundaries)
- Technology stack (frontend, backend, databases, infrastructure)
- Data model and integrations
- Security model and constraints
- Deployment targets and CI/CD strategy
- Development conventions and standards

### For Business / Business Division Projects
- Business model (revenue streams, customer acquisition, market positioning)
- Organizational structure and role definitions
- Operational processes (core workflows, decision rights, escalation)
- Service/product blueprint (how the offering works end-to-end)
- Key partnerships and institutional dependencies
- Risk management and compliance framework

### For Product Projects
- Product specifications and feature set
- Physical/manufacturing specifications (if applicable)
- Customer journey and user experience flow
- Supply chain and operational design
- Quality assurance and testing strategy
- Launch and scaling plan

### For Service Offerings
- Service blueprint (what the service includes, how it's delivered)
- Delivery model (in-person, remote, hybrid, fully automated)
- Role definitions and staffing model
- Service level agreements (SLAs) and performance metrics
- Client engagement model and communication cadence
- Risk management and contingency planning

---

## Document 3: Release Plan [TEMPLATE]

> When ready, fill in this section collaboratively.

### Release Overview
- **Release Version:** (e.g., 0.1, 1.0, Phase 1)
- **Codename:** (optional)
- **Target Launch Date:** When should this release ship?
- **Success Criteria:** What defines a successful launch?

### Epics (Major Work Streams)
List 3-5 major epics that define this release:

**Epic 1: {Name}**
- Description
- Expected outcome
- Dependencies

**Epic 2: {Name}**
- (etc.)

### User Stories / Tasks
For each epic, list user stories or tasks with acceptance criteria:

**Story:** As a {user}, I want {capability} so that {value}
- Acceptance Criteria
- Dependencies
- Estimated effort (if applicable)

### Milestones
- **Milestone 1:** {Date} — {Objective}
- **Milestone 2:** {Date} — {Objective}
- (etc.)

### Risks & Mitigation
- **Risk:** {Description}
  - **Mitigation:** {Strategy}
- (etc.)

---

## How to Use This File

1. **Reference During Sessions:** This file is your master reference while staging. Return to it frequently.
2. **Update Incrementally:** As you develop each document, update the "Status" fields in the Staging Roadmap section.
3. **Link to Decisions:** When decisions are made during staging, log them in `decisions-learnings/` and index them in `Key-Decisions.md`.
4. **Promote to Project:** Once all three documents are complete and signed off, execute PROJECT_MEMORY_INIT.md to create the full project memory.

---

## Next Steps

**Now:** Review this Master-Context.md and confirm you're ready to proceed.

**Then:** Decide which document to start with:
- **Document 1 (Project Context):** Best for clarifying vision and scope
- **Document 2 (Architecture/Design):** Best if you have clear vision but need design detail
- **Document 3 (Release Plan):** Best if vision and design are already locked

When ready, say: "Start with Document {1|2|3}"
```

---

## Phase 3: Establish Staging Protocols

### Step 3.1: Copy Session Open Protocol

**AI Instructions:** Create `agents/open.md` by copying and customizing the session initialization protocol from the main PROJECT_MEMORY_INIT.md. This file should guide the AI on:
- Reading this Master-Context.md first
- Checking Key-Decisions.md and Sessions.md for prior context
- Asking the user what they want to work on
- Creating a timestamped decision log

### Step 3.2: Copy Session Closure Protocol

**AI Instructions:** Create `agents/closure.md` by copying and customizing the session closure protocol. This file should guide the AI on:
- Finalizing the decision log
- Updating Key-Decisions.md and Sessions.md
- Updating NextSteps.md with progress
- Confirming all changes are saved

### Step 3.3: Create Session Protocol for Decisions & Learnings

**AI Instructions:** Create `decisions-learnings/session-protocol.md` with the following content:

```markdown
# Decision & Learnings Log Protocol

Each session, create a timestamped decision log at:

`decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md`

## Template

# Key Decisions — {YYYY-MM-DD} {HHMM}

**Session Goal:** {What we aimed to accomplish}

## Decisions Made

### Decision 1: {Title}
- **Context:** Why did we face this decision?
- **Options Considered:** What were the alternatives?
- **Decision:** What did we choose?
- **Rationale:** Why did we choose it?
- **Impact:** What does this decision affect?

### Decision 2: {Title}
- (repeat structure)

## Learnings & Insights

- **Learning 1:** {Key insight from this session}
- **Learning 2:** {Key insight from this session}

## Blockers / Open Questions

- **Question 1:** {Unresolved issue}
- **Question 2:** {Unresolved issue}

## Keywords (for indexing)

List keywords from this session that should be indexed in Key-Decisions.md:
- Keyword 1
- Keyword 2

---

## How to Index This File

After finalizing, add an entry to `Key-Decisions.md`:

| **Date** | **Keywords** | **File** | **Summary** |
|---|---|---|---|
| YYYY-MM-DD | keyword1, keyword2 | `Key-Decisions-YYYY-MM-DD_HHMM.md` | {One-sentence summary} |
```

---

## Phase 4: Initialize Index Files

### Step 4.1: Create Key-Decisions.md

**AI Instructions:** Create `Key-Decisions.md` as a master index:

```markdown
# Key Decisions Index — {PROJECT_NAME} Staging

This is a keyword-searchable index of all architectural and product decisions made during staging.

## How to Use

When working on {PROJECT_NAME}, search this index for relevant keywords. If a keyword matches your current task, read the linked decision file for full context.

| **Date** | **Keywords** | **File** | **Summary** |
|---|---|---|---|
| (Populated as decisions are made) | | | |

---

## Keyword Reference

- **Vision & Goals:** Decisions about project vision, goals, success metrics
- **Audience & Market:** Decisions about target users, market positioning
- **Architecture:** Decisions about system/business/product design
- **Technology Stack:** Decisions about tech choices (software projects)
- **Process Design:** Decisions about operational workflows and org structure
- **Release & Phasing:** Decisions about launch phases and milestones
- **Dependencies:** Decisions about institutional dependencies (marketing, legal, finance, security, etc.)
- **Constraints:** Decisions about budget, timeline, or technical constraints

---

## Recent Decisions

(Populated as staging progresses)
```

### Step 4.2: Create Sessions.md

**AI Instructions:** Create `Sessions.md` as a master index of session summaries:

```markdown
# Sessions Index — {PROJECT_NAME} Staging

This is a keyword-searchable index of all session summaries during staging.

## How to Use

Before starting a session, skim this index to understand prior context. If a prior session is relevant to your current task, read the linked session summary.

| **Date** | **Duration** | **Keywords** | **File** | **Summary** |
|---|---|---|---|---|
| (Populated as sessions complete) | | | | |

---

## Keyword Reference

- **Context Development:** Sessions focused on refining project vision and context
- **Architecture Design:** Sessions focused on system/business/product design
- **Release Planning:** Sessions focused on developing the release/roadmap plan
- **Stakeholder Alignment:** Sessions involving owner feedback or approval
- **Blocker Resolution:** Sessions addressing constraints or open questions
- **Document Integration:** Sessions consolidating documents and preparing for PROJECT_MEMORY_INIT.md

---

## Session History

(Populated as sessions complete)
```

### Step 4.3: Create NextSteps.md

**AI Instructions:** Create `NextSteps.md` as the staging progress tracker:

```markdown
# Next Steps — {PROJECT_NAME} Staging

**Project:** {PROJECT_NAME}
**Owner:** {OWNER_NAME}
**Current Stage:** Staging (Ideation & Preparation)
**Last Updated:** {TODAY'S_DATE}

---

## Staging Progress

### Document 1: Project Context
- **Status:** [ ] Not Started [ ] In Progress [ ] Complete
- **Completed Sections:** (None yet)
- **Next Action:** Start with Project Vision & Goals

### Document 2: Architecture/Design
- **Status:** [ ] Not Started [ ] In Progress [ ] Complete
- **Completed Sections:** (None yet)
- **Next Action:** Defer until Document 1 is complete

### Document 3: Release Plan
- **Status:** [ ] Not Started [ ] In Progress [ ] Complete
- **Completed Sections:** (None yet)
- **Next Action:** Defer until Documents 1 & 2 are complete

---

## Blockers / Open Questions

(None yet — raise during sessions)

---

## Timeline Estimate

- **Document 1:** 1-2 sessions
- **Document 2:** 2-3 sessions
- **Document 3:** 1-2 sessions
- **Total Staging:** 4-7 sessions estimated

---

## When All Documents Are Complete

Once all three documents are finished, approved, and signed off, execute PROJECT_MEMORY_INIT.md to:
1. Create the full project memory structure
2. Initialize all protocols (open/closure, release planning, etc.)
3. Optionally create the project in Zoho Projects
4. Transition from "staging" to active project development

Next: "Start Document 1" or "Start Document 2" or "Start Document 3"
```

### Step 4.4: Create README.md

**AI Instructions:** Create `README.md`:

```markdown
# {PROJECT_NAME} — Staging Project

This is a staging project in progress. Staging is the preparation phase before PROJECT_MEMORY_INIT.md launches a full AI Memory project.

## Quick Links

- **Master Context:** [Master-Context.md](./Master-Context.md) — Start here
- **Decisions Index:** [Key-Decisions.md](./Key-Decisions.md)
- **Sessions Index:** [Sessions.md](./Sessions.md)
- **Progress:** [NextSteps.md](./NextSteps.md)

## Current Status

{Populated from NextSteps.md during staging}

## Documents in Development

1. Project Context — [ ] Complete
2. Architecture/Design — [ ] Complete
3. Release Plan — [ ] Complete

See [Master-Context.md](./Master-Context.md) for templates and detailed instructions.

## Folder Structure

- `agents/` — Session initialization and closure protocols
- `decisions-learnings/` — Timestamped decision logs from each session
- Master files — Context, decisions index, sessions index, progress tracking

---

## Ready to Launch?

When all three foundation documents are complete, execute PROJECT_MEMORY_INIT.md to initialize the full project memory.
```

---

## Phase 5: Confirm Staging Environment & Begin Work

### Step 5.1: Confirm Staging Ready

**AI Instructions:** After all directories and files are created, confirm to the user:

> "Staging environment for **{PROJECT_NAME}** is now active and ready.
>
> **Master Context:** [Master-Context.md](./Master-Context.md)
> **Progress Tracker:** [NextSteps.md](./NextSteps.md)
> **Decision Index:** [Key-Decisions.md](./Key-Decisions.md)
> **Session Index:** [Sessions.md](./Sessions.md)
>
> All future sessions will begin by reading Master-Context.md and the indices to understand prior context.
>
> **What would you like to work on?**
> - Start with Document 1 (Project Context)
> - Start with Document 2 (Architecture/Design)
> - Start with Document 3 (Release Plan)
> - Review and refine staging structure
> - Something else?"

### Step 5.2: Facilitate Document Development

**AI Instructions:** Once the user selects a document to start, guide them through collaborative development:

1. **Identify required domain expertise:** Before starting work, determine which Memory_Agents advisors are relevant to the current document/task. Read the relevant `{folder}-advisor.md` files from the project's local `{Department}/agents/` folder (or from `AI_Memory_Open/Memory_Agents/` if not yet distributed)
2. **Apply agent expertise:** Use the advisors' frameworks, key questions, and decision processes to guide the conversation and produce higher-quality artifacts
3. **Ask clarifying questions** to flesh out each section — informed by the advisor's methodology
4. **Consolidate answers** into the document template
5. **Create timestamped decision logs** in `decisions-learnings/` for each session
6. **Update Key-Decisions.md and Sessions.md** after each session
7. **Update NextSteps.md** to track progress
8. **Confirm completion** when all sections of a document are filled and approved

**Key Principle:** Staging is **iterative and collaborative**. The user and AI work together to develop these three documents incrementally, with regular saves and indexed decisions. **Domain-expert agents are always consulted** when the work touches their area of expertise.

---

## Agent Integration Protocol

### Purpose

The AI Memory system maintains a centralized library of domain-expert agents in `AI_Memory_Open/Memory_Agents/`. Each agent folder contains two files:
- **AGENT.md** (Tier 1) — Operational agent with day-to-day workflows, frameworks, templates, and execution patterns
- **{folder}-advisor.md** (Tier 2) — Advisory agent with strategic expertise, ideation frameworks, cross-functional collaboration protocols, and decision-making support

These agents must be leveraged during staging AND distributed into project folders so that any AI session working on a specific project has local access to the expertise it needs.

### Agent Advisory Access During Staging

**CRITICAL PROTOCOL:** When working in staging at any time — during conversations, ideation, document creation, or any task — if any part of the work requires domain knowledge from any of the categories represented in the `AI_Memory_Open/Memory_Agents/` directory, the AI MUST:

1. **Identify the relevant agent(s):** Determine which Memory_Agents category applies to the current task
2. **Read the advisor file:** Read the `{folder}-advisor.md` file from `AI_Memory_Open/Memory_Agents/{Category}/`
3. **Apply their expertise:** Use the advisor's frameworks, decision processes, key questions, and ideation methodology to inform the work
4. **Cite the advisor:** Note in any artifacts produced which advisor(s) informed the analysis

**Examples:**
- User asks about investor relations → Read `Memory_Agents/Finance/finance-advisor.md` AND `Memory_Agents/Strategy/strategy-advisor.md`
- User asks about hiring plan → Read `Memory_Agents/People-n-Culture/people-n-culture-advisor.md`
- User asks about go-to-market strategy → Read `Memory_Agents/Marketing/marketing-advisor.md` AND `Memory_Agents/Growth-n-Revenue/growth-n-revenue-advisor.md`
- User asks about product design → Read `Memory_Agents/Product-Development/product-development-advisor.md`
- User asks about legal compliance → Read `Memory_Agents/Legal/legal-advisor.md`
- User asks about security architecture → Read `Memory_Agents/Infrastructure/infrastructure-advisor.md`
- User asks about understanding stakeholder motivations → Read `Memory_Agents/Human-Psychology/human-psychology-advisor.md`

### Agent Distribution Into Project Folders

When a staging project is initialized, or when artifacts are created for a specific project, the relevant agents MUST be copied into the project's equivalent department folders. This ensures that any AI session synced to that project folder has local access to the agents it needs.

**Agent-to-Department Mapping:**

| Project Department Folder | Memory_Agents Source Folders | Files Copied |
|---|---|---|
| `Finance/agents/` | Finance, Investment | AGENT.md, finance-advisor.md, AGENT.md, investment-advisor.md |
| `Marketing/agents/` | Marketing, Market-Development, Sales | AGENT.md + advisors from each |
| `Legal/agents/` | Legal | AGENT.md, legal-advisor.md |
| `Security/agents/` | Infrastructure (security aspects) | AGENT.md, infrastructure-advisor.md |
| `Executive/agents/` | Strategy, PMO, Growth-n-Revenue, Human-Psychology | AGENT.md + advisors from each |
| `Operations/agents/` | Operations, Infrastructure, Automation | AGENT.md + advisors from each |
| `Product_Development/agents/` | Product-Development, Software-Development | AGENT.md + advisors from each |
| `TechSupport/agents/` | Tech-Support | AGENT.md, tech-support-advisor.md |
| `People-n-Culture/agents/` | People-n-Culture | AGENT.md, people-n-culture-advisor.md |

**Naming Convention for Copied Agents:**
When copying agents into project department folders, prefix the filename with the source folder name to avoid collisions:
- `Memory_Agents/Finance/AGENT.md` → `{Project}/Finance/agents/Finance-AGENT.md`
- `Memory_Agents/Finance/finance-advisor.md` → `{Project}/Finance/agents/Finance-advisor.md`
- `Memory_Agents/Investment/AGENT.md` → `{Project}/Finance/agents/Investment-AGENT.md`
- `Memory_Agents/Investment/investment-advisor.md` → `{Project}/Finance/agents/Investment-advisor.md`

**When to Distribute Agents:**
1. **At staging initialization** (Phase 2) — Copy all mapped agents into the staging project's department folders
2. **At project initialization** (PROJECT_MEMORY_INIT.md Phase 2) — Copy all mapped agents into the full project's department folders
3. **When new department folders are created** — Copy relevant agents into the new folder
4. **When Memory_Agents are updated** — Re-copy updated agents to active projects (manual trigger)

### Agent Index in Master Context

Every project's Master Context file (Master-AI-Context.md or Master-Context.md) MUST include an **Agent Index** section that lists all available agents with their locations. This index serves as a quick-reference so any AI session can locate the right expertise immediately.

**Template for Agent Index section:**

```markdown
## Available Agents

The following domain-expert agents are available in this project's department folders. When your current task requires domain expertise, read the relevant agent files before proceeding.

| Domain | Department Folder | Agent Files | Expertise |
|---|---|---|---|
| Finance & Investment | `Finance/agents/` | Finance-AGENT.md, Finance-advisor.md, Investment-AGENT.md, Investment-advisor.md | Financial modeling, budgeting, cash flow, investment strategy |
| Marketing & Growth | `Marketing/agents/` | Marketing-AGENT.md, Marketing-advisor.md, Market-Development-AGENT.md, Market-Development-advisor.md, Sales-AGENT.md, Sales-advisor.md | Campaigns, content, GTM, market development, sales |
| Legal | `Legal/agents/` | Legal-AGENT.md, Legal-advisor.md | Contracts, compliance, IP, regulatory |
| Security & Infrastructure | `Security/agents/` | Infrastructure-AGENT.md, Infrastructure-advisor.md | Security architecture, infrastructure design, cloud |
| Executive & Strategy | `Executive/agents/` | Strategy-AGENT.md, Strategy-advisor.md, PMO-AGENT.md, PMO-advisor.md, Growth-n-Revenue-AGENT.md, Growth-n-Revenue-advisor.md, Human-Psychology-AGENT.md, Human-Psychology-advisor.md | Strategic planning, program management, revenue, stakeholder psychology |
| Operations | `Operations/agents/` | Operations-AGENT.md, Operations-advisor.md, Infrastructure-AGENT.md, Infrastructure-advisor.md, Automation-AGENT.md, Automation-advisor.md | Process design, runbooks, infrastructure ops, automation |
| Product Development | `Product_Development/agents/` | Product-Development-AGENT.md, Product-Development-advisor.md, Software-Development-AGENT.md, Software-Development-advisor.md | Product strategy, specs, software architecture, dev workflows |
| Tech Support | `TechSupport/agents/` | Tech-Support-AGENT.md, Tech-Support-advisor.md | Ticket triage, escalation, KB articles, customer support |
| People & Culture | `People-n-Culture/agents/` | People-n-Culture-AGENT.md, People-n-Culture-advisor.md | HR, hiring, onboarding, performance, org design |

**How to use:** When your task touches any of these domains, read the relevant AGENT.md for operational workflows or the advisor.md for strategic guidance before proceeding.

**Source:** All agents originate from `AI_Memory_Open/Memory_Agents/`. If project-local copies are outdated, refresh from the source.
```

---

## Key Principles for All Staging Work

1. **Project-Type Agnostic:** Staging protocols apply to software, business, product, service, and consulting projects equally.

2. **Three Documents:** All staging converges on developing three foundation documents (Project Context, Architecture/Design, Release Plan) required by PROJECT_MEMORY_INIT.md.

3. **Master Context First:** Every staging session begins by reading Master-Context.md. This is the steady-state reference for the entire staging phase.

4. **Decision Capture:** Every session creates a timestamped decision log. Decisions are indexed in Key-Decisions.md with keywords for easy lookup.

5. **Incremental Progress:** Staging is done in sessions, not in one long sprint. Each session produces one or more document sections, logged decisions, and updated progress tracking.

6. **Institutional Dependencies:** Every project type (software, business, product, service) has marketing, legal, finance, security, and executive components. These are identified and documented in the Architecture/Design document.

7. **Agent Integration:** All staging work leverages domain-expert agents from `AI_Memory_Open/Memory_Agents/`. Agents are consulted during ideation and distributed into project department folders for local access. See the Agent Integration Protocol section above.

8. **Transition Ready:** Once all three documents are complete and approved, PROJECT_MEMORY_INIT.md will initialize the full project memory structure automatically.

---

## Quick Reference: When Staging Completes

Once all three documents are finished, **say:**

> "Initialize {PROJECT_NAME} via PROJECT_MEMORY_INIT.md"

This will:
1. Move the three staging documents into the full project memory
2. Create all required directories and protocols
3. Initialize open/closure/release planning agents
4. Set up decision and session indices at full project scale
5. Optionally create the project in Zoho Projects
6. Activate the full project for development work

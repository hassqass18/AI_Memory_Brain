# PROJECT_MEMORY_INIT.md — AI Project Memory Initialization Protocol

**Purpose:** Execute this file at the start of a new project to construct a complete AI context memory structure. This file is a self-contained bootstrap — when an AI reads and executes it, the AI will gather all required information through a structured questionnaire, then autonomously build the entire project memory folder with all files, directories, and protocols pre-configured.

**Memory Design Version:** 1.1

**Location:** This file lives in the root of the `AI_Memory_Open` repository. Each project gets its own subfolder inside `projects/` following the naming convention `projects/{ProjectName}_AI_Training/`.

**Canonical Repository:** `https://github.com/Qosil/AI_Memory_Open`

---

## Project Lifecycle — Where Initialization Fits

This protocol is **Step 3** of the AI Memory project lifecycle:

| Step | File | Purpose | Frequency |
|------|------|---------|-----------|
| 1 | `setup-AI-Memory.md` | One-time system configuration (owner, keys, models, standards) | Once ever |
| 2 | `staging.md` | Per-project ideation, planning, and document development | Per project |
| **3** | **`PROJECT_MEMORY_INIT.md` (this file)** | **Per-project full build — autonomously constructs project memory** | **Per project** |

**Prerequisites:** This protocol should typically be run AFTER the staging protocol (`staging.md`) has produced the three key documents: Project Context, Architecture/Design, and Release Plan. These documents are the primary inputs for Questions 2, 4, and 7 below. You can run this protocol without staging, but you'll need to provide those documents manually.

---

## How to Use

Say to any AI (Claude, Gemini, or any LLM with file system access):

> "Execute PROJECT_MEMORY_INIT.md to set up a new project memory."

The AI will:
1. Ask a series of prerequisite questions
2. Validate all inputs
3. Build the complete folder structure and all files
4. Attempt to create the project in Zoho Projects via MCP
5. Confirm completion and summarize what was created

---

## Phase 1: Prerequisite Questionnaire

> **AI Instructions:** Ask the following questions ONE AT A TIME. Wait for the user's response before proceeding to the next question. Do not skip questions. Store all answers for use in Phase 2.

### Question 1: Project Name
> "What is the name of this project? This will be used for folder naming (`{Name}_AI_Training/`), file headers, and Zoho Projects."
>
> - Example: "[ExampleProject]", "GeniusCo CRM", "HealthTrack"
> - The name should be a single word or short phrase (no spaces — use PascalCase or hyphens)

**Store as:** `PROJECT_NAME`

### Question 2: Project Context File
> "This initialization is typically run after an ideation session in another AI chat. That session should have produced a primary context document describing the project's vision, architecture, tech stack, and goals.
>
> Please provide the contents of that context document now. You can either:
> - **Paste the full text** directly into this chat
> - **Provide the file path** to an existing `.md` or `.txt` file I can read
>
> This will become the foundation of the Master AI Context file."

**Store as:** `PROJECT_CONTEXT` (full text content)

### Question 3: Project Owner
> "Who is the primary project owner? Provide:
> - **Full name**
> - **Email address**
> - **Role/title** (e.g., Founder, CTO, Product Manager)"

**Store as:** `OWNER_NAME`, `OWNER_EMAIL`, `OWNER_ROLE`

### Question 4: Architecture Design File
> "An architectural design session should have been completed prior to this initialization — either in a separate AI chat or by a human architect. That session should have produced an **architecture document** (`.md` file) that describes:
> - System architecture (services, layers, boundaries)
> - Technology stack (frontend, backend, databases, infrastructure)
> - Security model and constraints
> - Data flow and integration patterns
> - Infrastructure design and deployment targets
> - Development conventions and standards
>
> Please provide this architecture file now. You can either:
> - **Paste the full text** directly into this chat
> - **Provide the file path** to an existing `.md` file I can read
>
> This file will be stored as `{PROJECT_NAME}_architecture.md` in the project memory root and referenced by the Master AI Context file. If no architecture document exists yet, say 'skip' — but note that the architecture file is strongly recommended and should be created before the first working session."

**Store as:** `ARCHITECTURE_CONTENT` (full text content or "skip")

### Question 5: AI Execution Model
> "How will AI assistants work on this project? Select all that apply:
> - **A)** AI executes code directly in a terminal/IDE (e.g., Claude Code, Coder workspace)
> - **B)** AI generates code for human to copy-paste
> - **C)** AI provides guidance and reviews only
> - **D)** Mixed — some tasks are direct execution, some are collaborative
>
> If D, are you using the `[AI]` / `[Human]` / `[AI+Human]` story labeling convention?"

**Store as:** `EXECUTION_MODEL`

### Question 6: Zoho Projects Integration
> "Should I create this project in Zoho Projects?
> - If YES: What is the **Zoho portal name** and **portal ID**? (Default: `geniusco` / `794020379`)
> - If NO: I'll skip Zoho setup but still include the integration section in the memory for future use.
>
> Note: The Zoho MCP connector at `AI_Memory_Open/zoho-mcp-server/` will be used. It must be authenticated."

**Store as:** `ZOHO_ENABLED` (true/false), `ZOHO_PORTAL`, `ZOHO_PORTAL_ID`

### Question 7: Release / Phase Structure
> "A release planning session should have been completed prior to this initialization — either in a separate AI chat or by a human planner. That session should have produced a **release plan document** (`.md` file) that describes the first release: its version, codename, epics, stories, and acceptance criteria.
>
> **Option A — Pre-planned release:** Provide the release `.md` file now (paste text or file path). This will be stored as the first release file in the `Releases/` folder.
>
> **Option B — Iterative / on-the-fly releases:** If this project will build releases iteratively (consolidating tasks and prioritizing them into releases as the project evolves), say **'iterative'**. I will create a `plan-release.md` protocol file in the `agents/` folder. When executed, this protocol reviews the risk registry, NextSteps, previous releases, and the architecture file, consolidates existing tasks, asks you clarifying questions, and then generates a new release file with incremental naming (e.g., `{project}-build-instructions-0_1.md`, `{project}-build-instructions-0_2.md`).
>
> **Option C — Both:** If you have a first release file AND want the iterative planning protocol for future releases, provide the file and say 'also iterative'."

**Store as:** `RELEASE_MODE` ("pre-planned" / "iterative" / "both"), `RELEASE_CONTENT` (full text if provided), `FIRST_RELEASE_VERSION`, `FIRST_RELEASE_NAME`

### Question 8: Risk Monitoring
> "Will this project integrate with an endpoint monitoring system for risk tracking?
> - If YES: What monitoring tool(s) are planned? (e.g., Datadog, Sentry, UptimeRobot, custom)
> - If NO: I'll still create the Risk Registry structure — it can be populated manually or connected later."

**Store as:** `RISK_MONITORING_TOOL`

### Question 9: Connectors & API Keys
> "Are there any project-specific connectors, APIs, or integrations that need to be stored in this memory? Examples:
> - Stripe API keys
> - Cloud provider tokens (AWS, [Cloud Provider], Fly.io)
> - Third-party service credentials
> - Custom MCP servers
>
> List them now (names only — I will NEVER store actual key values in these files, only placeholders indicating what is needed and who provides them)."

**Store as:** `CONNECTORS_LIST`

### Question 10: Additional Context
> "Is there anything else I should know about this project before building the memory? Examples:
> - Team size and roles
> - Compliance requirements (SOC2, HIPAA, GDPR)
> - Design system / brand guidelines
> - Specific conventions or standards
> - Links to existing repos, Figma files, or documentation"

**Store as:** `ADDITIONAL_CONTEXT`

---

## Phase 2: Memory Construction

> **AI Instructions:** After ALL questions in Phase 1 are answered, execute the following steps in order. Do NOT ask for further input — build everything autonomously from the collected answers. All paths below are relative to the AI_Memory repository root.

### Step 1: Create Directory Structure

Create the following folder tree at `AI_Memory/projects/{PROJECT_NAME}_AI_Training/`:

```
{PROJECT_NAME}_AI_Training/
├── agents/
│   ├── open.md                          # Session initialization protocol
│   ├── closure.md                       # Session closure & handover protocol
│   └── plan-release.md                  # Iterative release planning protocol
├── session-summary/                     # Timestamped session summaries (created by open, updated live, finalized by closure)
├── decisions-learnings/                 # Timestamped decision logs (created by open, updated live, finalized by closure)
├── connectors/                          # Project-specific connectors, APIs, key references
│   └── api-key-store.md                 # API key inventory (names & providers only — NEVER values)
├── assets/
│   └── content-images/
│       └── designandcontent/            # Design specs, customer journeys, content docs
├── Marketing/                           # Blog posts, video scripts, press releases, launch materials
│   └── agents/                          # Marketing, Market-Development, Sales agents
├── Security/                            # Risk registry reports, security audits, compliance docs
│   └── agents/                          # Infrastructure agents (security aspects)
├── Finance/                             # Flow of funds, financial models, budgets, projections
│   └── agents/                          # Finance, Investment agents
├── Legal/                               # Contracts, compliance, IP, regulatory
│   └── agents/                          # Legal agents
├── Product_Development/
│   ├── agents/                          # Product-Development, Software-Development agents
│   ├── {APP_NAME}/                      # Per-app subfolder (matches monorepo app name)
│   │   ├── {PROJECT_NAME}_architecture.md  # Architecture & design philosophy
│   │   ├── module-map.md               # Physical directory structure mapping
│   │   └── production-instructions.md  # Build & deploy reference
│   └── Releases/                        # Versioned build instruction documents
│       └── Bugs.md                      # Bug & change request tracker (UAT + ad-hoc changes)
├── Executive/                           # Board decks, investor updates, strategic plans
│   └── agents/                          # Strategy, PMO, Growth-n-Revenue, Human-Psychology agents
├── Operations/                          # Runbooks, incident reports, SLAs
│   └── agents/                          # Operations, Infrastructure, Automation agents
├── TechSupport/                         # Support playbooks, FAQ documents, known issues
│   └── agents/                          # Tech-Support agents
├── People-n-Culture/                    # HR, hiring, onboarding, performance, org design
│   └── agents/                          # People-n-Culture agents
├── .gitignore
├── README.md                            # Project overview for anyone navigating to this folder
├── Master-AI-Context.md                 # Master AI instructions, progress, commands
├── NextSteps.md                         # Prioritized roadmap and current state
├── Key-Decisions.md                     # Keyword-indexed decision log master index
├── Sessions.md                          # Keyword-indexed session summary master index
└── Risk-Registry.md                     # Consolidated risk summary with keyword index into Security/
```

### Department Folder Placement Rules

> **CRITICAL:** All AI assistants must follow these placement rules when creating files in the project memory.

| Content Type | Destination Folder | Examples |
|---|---|---|
| Marketing & promotional content | `Marketing/` | Blog posts, video scripts, press releases, ad copy, social media content |
| Security & risk documents | `Security/` | Risk reports, security audits, compliance assessments, threat models |
| Financial documents | `Finance/` | Flow-of-funds diagrams, financial models, budgets, revenue projections |
| Product development files | `Product_Development/{APP_NAME}/` | Architecture docs, module maps, production instructions, build scripts |
| Release plans & bug tracking | `Product_Development/Releases/` | Build instruction files, Bugs.md |
| Executive materials | `Executive/` | Board decks, investor updates, strategic plans |
| Operations documents | `Operations/` | Runbooks, incident reports, SLAs |
| Support materials | `TechSupport/` | Support playbooks, FAQ docs, known issues |
| People & Culture | `People-n-Culture/` | HR plans, hiring roadmaps, onboarding docs, org charts |
| Domain-expert agents | `{Department}/agents/` | AGENT.md and advisor.md files (see Step 1b) |

When a project has **multiple apps in a monorepo**, create a separate subfolder under `Product_Development/` for each app (e.g., `Product_Development/[ExampleProject]_App/`, `Product_Development/WebApp/`).

### Agent Access Protocol

> **CRITICAL:** When performing any work on this project that requires domain expertise, the AI MUST:
> 1. **Check the Agent Index** in `Master-AI-Context.md` to identify which agents are relevant
> 2. **Read the relevant agent files** from the project's `{Department}/agents/` folder
> 3. **Apply the agent's frameworks** — use their decision processes, templates, and key questions to produce higher-quality work
> 4. **For operational tasks** — read the AGENT.md (Tier 1) for workflows and execution patterns
> 5. **For strategic/ideation tasks** — read the advisor.md (Tier 2) for strategic frameworks and cross-functional guidance
>
> If the project-local agent copies are missing, fall back to `AI_Memory_Open/Memory_Agents/{Category}/`.

### Step 1b: Distribute Domain-Expert Agents Into Department Folders

**AI Instructions:** After creating the directory structure, copy the relevant agent files from `AI_Memory_Open/Memory_Agents/` into each department's `agents/` subfolder. This ensures every AI session working on this project has local access to domain expertise.

**Agent-to-Department Mapping:**

| Project Department | Memory_Agents Source Folders | Files to Copy |
|---|---|---|
| `Finance/agents/` | Finance, Investment | Finance-AGENT.md, Finance-advisor.md, Investment-AGENT.md, Investment-advisor.md |
| `Marketing/agents/` | Marketing, Market-Development, Sales | Marketing-AGENT.md, Marketing-advisor.md, Market-Development-AGENT.md, Market-Development-advisor.md, Sales-AGENT.md, Sales-advisor.md |
| `Legal/agents/` | Legal | Legal-AGENT.md, Legal-advisor.md |
| `Security/agents/` | Infrastructure | Infrastructure-AGENT.md, Infrastructure-advisor.md |
| `Executive/agents/` | Strategy, PMO, Growth-n-Revenue, Human-Psychology | Strategy-AGENT.md, Strategy-advisor.md, PMO-AGENT.md, PMO-advisor.md, Growth-n-Revenue-AGENT.md, Growth-n-Revenue-advisor.md, Human-Psychology-AGENT.md, Human-Psychology-advisor.md |
| `Operations/agents/` | Operations, Infrastructure, Automation | Operations-AGENT.md, Operations-advisor.md, Infrastructure-AGENT.md, Infrastructure-advisor.md, Automation-AGENT.md, Automation-advisor.md |
| `Product_Development/agents/` | Product-Development, Software-Development | Product-Development-AGENT.md, Product-Development-advisor.md, Software-Development-AGENT.md, Software-Development-advisor.md |
| `TechSupport/agents/` | Tech-Support | Tech-Support-AGENT.md, Tech-Support-advisor.md |
| `People-n-Culture/agents/` | People-n-Culture | People-n-Culture-AGENT.md, People-n-Culture-advisor.md |

**Naming Convention:** Prefix each copied file with its source folder name:
- `AI_Memory_Open/Memory_Agents/Finance/AGENT.md` → `{Project}/Finance/agents/Finance-AGENT.md`
- `AI_Memory_Open/Memory_Agents/Finance/finance-advisor.md` → `{Project}/Finance/agents/Finance-advisor.md`

**Important:** These are COPIES, not symlinks. If Memory_Agents are updated, the project copies must be manually refreshed.

### Step 2: Generate `.gitignore`

```gitignore
# Credentials and tokens — NEVER commit
.env
.env.*
*.keystore
*-tokens.json
*-config.json
node_modules/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

### Step 3: Generate `README.md`

**Template:**

```markdown
# {PROJECT_NAME} — AI Training Memory

**Project:** {PROJECT_NAME}
**Owner:** {OWNER_NAME} ({OWNER_EMAIL})
**Role:** {OWNER_ROLE}
**Created:** {CURRENT_DATE}
**Memory Version:** 1.1

---

## What Is This Folder?

This is the **AI context memory** for the {PROJECT_NAME} project. It contains everything an AI assistant needs to understand the project, pick up where the last session left off, and execute work without losing context between sessions.

**This folder is NOT the project source code.** It is a structured knowledge base that lives alongside or inside the `AI_Memory_Open` repository at `https://github.com/Qosil/AI_Memory_Open`.

---

## How to Use This Memory

### Starting a Session
Execute `agents/open.md` — this is the session initialization protocol. It instructs the AI to read all context files in the correct order before doing any work.

> Say: "Execute open.md" or "Run the session initialization protocol"

### Ending a Session
Execute `agents/closure.md` — this is the session closure protocol. It instructs the AI to create session summaries, update decision logs, consolidate risks, update progress, and push to git.

> Say: "Execute closure.md" or "Run the session closure protocol"

---

## Folder Structure

| Folder/File | Purpose |
|-------------|---------|
| `agents/open.md` | Session start protocol — loads all context |
| `agents/closure.md` | Session end protocol — saves all progress |
| `agents/plan-release.md` | Iterative release planning protocol |
| `Master-AI-Context.md` | Master AI instructions, progress, commands, execution model |
| `NextSteps.md` | Prioritized roadmap, completed/pending work |
| `Key-Decisions.md` | Index of all architectural decisions (keyword searchable) |
| `Sessions.md` | Index of all session summaries (keyword searchable) |
| `Risk-Registry.md` | Consolidated risk summary with severity levels |
| `session-summary/` | Timestamped session summary files |
| `decisions-learnings/` | Timestamped decision & learning files |
| `Marketing/` | Blog posts, video scripts, press releases, promotional content |
| `Security/` | Risk registry reports, security audits, compliance docs |
| `Finance/` | Flow-of-funds diagrams, financial models, budgets |
| `Product_Development/` | Per-app architecture, module maps, production instructions |
| `Product_Development/Releases/` | Versioned build instruction documents + Bugs.md |
| `Executive/` | Board decks, investor updates, strategic plans |
| `Operations/` | Runbooks, incident reports, SLAs |
| `TechSupport/` | Support playbooks, FAQ documents, known issues |
| `connectors/` | API keys inventory, project-specific MCP configs |
| `assets/` | Design specs, images, content documents |
| `{Department}/agents/` | Domain-expert agents (AGENT.md for operations, advisor.md for strategy) |
| `People-n-Culture/` | HR, hiring, onboarding, performance, org design |

---

## Quick Reference

- **Tech Stack:** {TECH_STACK_SUMMARY}
- **AI Execution Model:** {EXECUTION_MODEL_SUMMARY}
- **Zoho Project:** {ZOHO_PROJECT_STATUS}
- **Current Release:** {CURRENT_RELEASE}

---

## Bug & Change Request Tracking

Any change to the codebase, file structure, release plans, or environments that happens **outside** a formal release story is logged in `Releases/Bugs.md`.

### How It Works
- **Naming:** `bug-[Current Release]-[YYYY-MM-DD]-[HHMM]` (e.g., `bug-1.0-2026-03-22-1430`)
- **Labels:** Same as release stories — `[AI]`, `[Human]`, `[AI + Human]`
- **Statuses:** Open → In Progress → Complete
- **Logging:** AI logs a bug entry **before** starting work (In Progress) and updates it to Complete when done
- **Metrics:** A summary table at the bottom of Bugs.md tracks totals (logged, open, in progress, complete)

### When It's Updated
- **Session init (open.md):** Bug metrics are read and reported as part of the session summary
- **During work:** Any ad-hoc change triggers a new bug entry in real-time
- **Session closure (closure.md):** All bugs from the session are finalized, metrics recalculated, and included in the session summary

### What Gets Logged
- Codebase changes (new files, modifications, deletions)
- File structure adjustments (moves, renames, reorganization)
- Release plan modifications (stories, epics, counts)
- Development or production environment changes
- UAT defects and findings

### What Doesn't Get Logged
- Normal release story execution (tracked in the release file)
- Research and Q&A with no file changes
- Session init/closure protocol execution

---

*{PROJECT_NAME} AI Memory — initialized {CURRENT_DATE}*
```

### Step 4: Generate `Master-AI-Context.md` and `{PROJECT_NAME}_architecture.md`

This step creates TWO files:

1. **`Master-AI-Context.md`** — Mirrors the role of `GEMINI.md` in the [ExampleProject] project: master AI instructions, project overview, tech stack summary, key commands, development conventions, AI execution model, session history links, and project progress tracking. This is the "operational handbook" for the AI.

2. **`{PROJECT_NAME}_architecture.md`** — The architectural design document provided in Question 4. This is stored as a separate file (just as `[exampleproject]_context.md` was separate from `GEMINI.md` in the original [ExampleProject] structure). The Master AI Context file references it directly.

**4a. Generate `{PROJECT_NAME}_architecture.md`:**

If `ARCHITECTURE_CONTENT` was provided (not "skip"), write it verbatim to `{PROJECT_NAME}_architecture.md`. If skipped, create a placeholder:

```markdown
# {PROJECT_NAME} — Architecture & Design Philosophy

**Document Purpose:** This is the architectural design document for {PROJECT_NAME}. It defines the system architecture, security model, infrastructure design, data flow patterns, and development constraints. All AI assistants must read and adhere to this document before generating code or infrastructure changes.

**Status:** PLACEHOLDER — This file should be populated from an architectural design session before the first working session begins.

---

## 1. Core Philosophy & Constraints

{TO BE DEFINED}

---

## 2. Technology Stack & Tooling

{TO BE DEFINED}

---

## 3. System Architecture

{TO BE DEFINED}

---

## 4. Security Model

{TO BE DEFINED}

---

## 5. Infrastructure Design

{TO BE DEFINED}

---

## 6. Data Flow & Integration Patterns

{TO BE DEFINED}

---

## 7. Development Standards & Conventions

{TO BE DEFINED}

---

*This document is the architectural constitution for {PROJECT_NAME}. Update it when architecture changes are made.*
```

**4b. Generate `Master-AI-Context.md`:**

```markdown
# Master AI Context — {PROJECT_NAME}

**Document Purpose:** This is the primary operational context file for any AI assistant working on {PROJECT_NAME}. It provides the project overview, tech stack, key commands, development conventions, AI execution protocols, and current progress. For the full architectural design philosophy, security model, and infrastructure constraints, see [{PROJECT_NAME}_architecture.md](./{PROJECT_NAME}_architecture.md).

**Memory Design Version:** 1.1
**Last Updated:** {CURRENT_DATE}

---

## 1. Project Overview

{INSERT PROJECT_CONTEXT FROM QUESTION 2}

---

## 2. Technical Stack

{EXTRACT tech stack summary from ARCHITECTURE_CONTENT or PROJECT_CONTEXT — brief list format}

---

## 3. Core Directory Structure

```text
{EXTRACT from ARCHITECTURE_CONTENT or PROJECT_CONTEXT if available, otherwise placeholder}
```

---

## 4. Key Commands

{EXTRACT from PROJECT_CONTEXT or ARCHITECTURE_CONTENT if available — install, build, dev, lint, deploy commands. Otherwise:}

*Key commands to be documented as the project build system is established.*

---

## 5. Development Conventions & Rules

### 5.1 Secrets & Environment Variables
- **Never hardcode secrets.** API keys, tokens, and credentials must use `.env.local` files (git-ignored) for local development and secure vaults for production.
- AI assistants must NEVER read, store, echo, or log secret values.

### 5.2 Code Generation Rules
- Output **complete, copy-pasteable code blocks**. No truncation (e.g., `// ... rest of code`) unless explicitly requested.
- Every code block must include the exact physical file path commented at the top.
- Silent error catching is banned. All errors must be logged or routed to the appropriate handler.

### 5.3 Git Branching
{Standard or extracted from PROJECT_CONTEXT — e.g., trunk-based, feature branches, PR requirements}

---

## 6. AI Execution Model

{BASED ON QUESTION 5 ANSWER}

### Story Labels
- **`[AI]` stories** — Executed directly by the AI assistant. The AI reads the story, runs commands, writes files, and reports results.
- **`[AI + Human]` stories** — Collaborative. AI performs all technical steps; human provides input at explicitly marked `[Human]` checkpoints (secrets entry, physical access, organizational decisions).
- **`[Human]` stories** — Reserved for actions that cannot or must not be delegated to AI: entering credentials, accessing third-party dashboards, making compliance/business decisions, physical device interaction.

### Direct Execution Rules
1. **Terminal commands:** AI runs commands directly. Commands execute sequentially; AI waits for completion before proceeding.
2. **File creation/editing:** AI writes files directly to the workspace file system.
3. **Error resolution:** AI diagnoses and resolves errors autonomously before reporting back.
4. **Security boundary:** AI never reads, stores, or echoes values from `.env.local` or any secrets file. Placeholders are used when secrets are needed.
5. **Scope discipline:** AI executes only the steps defined in the current story. No speculative execution of future stories.

See [{PROJECT_NAME}_architecture.md](./{PROJECT_NAME}_architecture.md) Section 7 for the complete development standards and conventions.

---

## 6a. Bug & Change Request Tracking

All changes to the codebase, file structure, release plans, or development/production environments that occur **outside** a formal release story must be logged in **`Releases/Bugs.md`**.

### When to Log a Bug/Change Request
Any time the user gives a request that results in:
- A codebase change (new files, modified files, deleted files)
- A file structure adjustment (moving, renaming, reorganizing)
- A release plan modification (adding/editing/removing stories or epics)
- A change to the development or production environment configuration
- A UAT finding or defect

### Naming Convention
`bug-[Current Release]-[YYYY-MM-DD]-[HHMM]`
- Example: `bug-1.0-2026-03-22-1430`

### Workflow
1. **Before starting work:** Add the entry to the Bug Log table in `Releases/Bugs.md` with status **In Progress**
2. **While working:** Execute the change using `[AI]`, `[Human]`, or `[AI + Human]` labels
3. **After completion:** Update the entry status to **Complete**, add the completion date, and write a detailed entry below the table with a description and resolution
4. **Update metrics:** Recalculate the Metrics table at the bottom of `Releases/Bugs.md`

### What NOT to Log
- Normal story execution from a release plan (those are tracked in the release file itself)
- Pure research or Q&A conversations with no file changes
- Session initialization or closure protocol execution

---

## 7. Memory Access Model — Lazy Loading

> **CRITICAL:** This project uses a **lazy-loading memory pattern** to avoid the context-U problem (filling the context window with historical data that may not be relevant). Follow the access rules below strictly.

### Tier 1 — Always Read (Session Init)
These files are read during every session initialization via `agents/open.md`. They provide the operational context needed to begin work:

| File | Purpose |
|------|---------|
| **This file** (`Master-AI-Context.md`) | Project overview, progress, conventions, execution model |
| [architecture.md](./Product_Development/{APP_NAME}/{PROJECT_NAME}_architecture.md) | Design philosophy, security model, infrastructure constraints |
| [module-map.md](./Product_Development/{APP_NAME}/module-map.md) | Physical directory structure, module responsibilities |
| [NextSteps.md](./NextSteps.md) | Prioritized roadmap, current blockers, what to work on next |

### Tier 2 — Read Index Only, Drill Down on Match
These are **index files** with keyword lookup tables. Read the index to understand what's available, then **only read the referenced detail files when the keyword matches your current task**. Do NOT read every file in the subdirectories.

| Index File | Detail Files Location | When to Drill Down |
|------------|----------------------|-------------------|
| [Key-Decisions.md](./Key-Decisions.md) | `decisions-learnings/` | Before performing any action that matches a keyword in the index (building, deploying, configuring, modifying components) |
| [Sessions.md](./Sessions.md) | `session-summary/` | Before performing work that sounds like it may have been done before, or when troubleshooting errors |
| [Risk-Registry.md](./Risk-Registry.md) | `Security/` | Before starting work that touches a risk area, or during release planning |

### Tier 3 — Read Only When Relevant
These files contain detailed content that should only be loaded when directly needed for the current task:

| File / Folder | When to Read |
|---------------|-------------|
| `Product_Development/Releases/{project}-build-instructions-*.md` | When executing a story, planning a release, or checking story status |
| `Product_Development/Releases/Bugs.md` | At session init (read metrics only), when logging a change request, or when reviewing bug history |
| `Product_Development/{APP_NAME}/production-instructions.md` | Before any build, deploy, or release task |
| `agents/closure.md` | At end of session only |
| `agents/plan-release.md` | When planning a new release |
| `connectors/api-key-store.md` | When integrating with a new service or checking credential status |
| `assets/content-images/designandcontent/` | Before creating or modifying UI/design |

### Why This Matters
Reading all historical session summaries, decision files, and risk reports at session start wastes context window capacity on information that may never be relevant. The index-and-drill-down pattern gives you access to **all** project memory while only consuming context space for what you actually need. The two most recent session summaries are read during init (per open.md) to provide immediate continuity.

## 8. Available Agents — Domain Expertise Index

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

## 9. Session History & Handover

- **Latest Summary:** (updated by closure protocol)
- **Latest Decisions:** (updated by closure protocol)
- **Master Indexes:** [Key-Decisions.md](./Key-Decisions.md), [Sessions.md](./Sessions.md)
- **Risk Registry:** [Risk-Registry.md](./Risk-Registry.md)
- **Next Steps:** [NextSteps.md](./NextSteps.md)
- **Architecture:** [{PROJECT_NAME}_architecture.md](./Product_Development/{APP_NAME}/{PROJECT_NAME}_architecture.md)

---

## 10. Project Progress

### {FIRST_RELEASE_VERSION} — {FIRST_RELEASE_NAME}
- **Release File:** `Product_Development/Releases/{release-file-name}.md`
- **Completion:** 0% — Project initialized, no stories executed yet.

---

## 11. Production Infrastructure

{PLACEHOLDER — to be updated as infrastructure is provisioned}

---

## 12. Build & Deploy Reference

**IMPORTANT:** Before building or deploying ANY component, read `production-instructions.md` first. This file contains the most recent successful methods for every build and deploy target. Do not guess or use outdated methods.

- **Build & Deploy Instructions:** [production-instructions.md](./Product_Development/{APP_NAME}/production-instructions.md)
- **Architecture Reference:** [{PROJECT_NAME}_architecture.md](./Product_Development/{APP_NAME}/{PROJECT_NAME}_architecture.md)

---

*This document is the master operational context for {PROJECT_NAME}. It is updated every session by the closure protocol.*
```

### Step 5: Generate `agents/open.md`

**Template:**

```markdown
# open.md — Session Initialization Protocol

**Purpose:** Execute this file at the start of every new AI session to load full project context before doing any work.

---

> **Prompt for AI (Claude, Gemini, or any LLM):** "Execute the Session Initialization protocol from open.md:
>
> 0. **Sync AI Memory from Git:** Before doing anything else, pull the latest AI training context from the shared repository:
>    ```bash
>    cd <path-to-AI_Memory-repo>
>    git pull origin main
>    ```
>    - The canonical repo is **https://github.com/Qosil/AI_Memory** — the `projects/{PROJECT_NAME}_AI_Training/` folder lives inside this monorepo.
>    - If you are in Cowork, the folder is already mounted — just confirm the files are current.
>    - If you are in Coder (VS Code), run `git pull` from the AI_Memory root directory.
>    - If the repo has not been cloned yet, clone it first: `git clone https://github.com/Qosil/AI_Memory.git`
>
> 1. **Clear Stale Memory:** Before loading context, clear your session memory to prevent stale or duplicate information.
>    - Read all files in your active memory directory (if applicable).
>    - **Delete** any memory files related to project state, architecture, decisions, infrastructure, or technical details — these are all maintained in the {PROJECT_NAME}_AI_Training files.
>    - **Retain** memory files that capture **user preferences only**: the user's role, communication style, corrections about your behavior.
>    - If no memory directory exists, skip this step.
>
> 2. **Read Core Context Files:** Read the following files in order:
>    - `{PROJECT_NAME}_AI_Training/Master-AI-Context.md` — Master AI instructions, project overview, tech stack, commands, execution model, progress tracking
>    - `{PROJECT_NAME}_AI_Training/{PROJECT_NAME}_architecture.md` — Architectural design philosophy, security model, infrastructure constraints, development standards
>    - `{PROJECT_NAME}_AI_Training/module-map.md` — Physical directory structure and module responsibilities (if it exists)
>
> 3. **Read Current State:** Read these files to understand what has been done and what comes next:
>    - `{PROJECT_NAME}_AI_Training/NextSteps.md` — Prioritized roadmap, completed/in-progress/pending stories, blockers
>    - The active build instructions file in `{PROJECT_NAME}_AI_Training/Releases/` (determine current version from NextSteps.md)
>
> 4. **Read Key Decisions Index:** Read `{PROJECT_NAME}_AI_Training/Key-Decisions.md` — this is the master index of all architectural decisions. It contains a keyword index so you do NOT need to read every individual file in `decisions-learnings/`. Only look up specific files when the keyword index directs you to them for your current task.
>
> 5. **Read Sessions Index:** Read `{PROJECT_NAME}_AI_Training/Sessions.md` — this is the master index of all session summaries. **Commit its instructions to memory.** Before performing any action that may have been done in a prior session, consult this index and read the relevant session summary.
>
> 6. **Read Recent Session History:** Read the **two most recent** files in `{PROJECT_NAME}_AI_Training/session-summary/` (sorted by filename date).
>
> 7. **Read Risk Registry:** Read `{PROJECT_NAME}_AI_Training/Risk-Registry.md` — the consolidated risk summary. Check for any **Critical** or **High** severity risks that may affect your planned work. If a risk is flagged for your current task area, read the referenced file in `risk-registry/` for full details.
>
> 8. **Create Live Session Files:** Create the following files immediately. These are **living documents** — update them incrementally throughout the session as work is done, decisions are made, and blockers are encountered. This ensures context is preserved even if the session crashes or the context window fills up.
>
>    **a) Session Summary:** Create `session-summary/AI-Session-Summary-[YYYY-MM-DD]_[HHMM].md` with:
>    ```markdown
>    # AI Session Summary — YYYY-MM-DD HH:MM UTC
>
>    **Model:** {your model name and version}
>    **Started:** {current timestamp}
>    **Executor:** {environment — Cowork, Coder, CLI, etc.}
>
>    ---
>
>    ## What Was Done
>    *(append entries here as work is completed throughout the session)*
>
>    ## Stories Completed This Session
>    | Story ID | Name | Status |
>    |----------|------|--------|
>
>    ## Key Decisions
>    | Decision | Rationale |
>    |----------|-----------|
>
>    ## Blockers / Pending Human Actions
>    *(append entries here as blockers are encountered)*
>
>    ## Environment State
>    *(updated at end of session by closure protocol)*
>
>    ---
>    *Live file — updated incrementally. Finalized by closure protocol.*
>    ```
>
>    **b) Decisions & Learnings:** Create `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md` with:
>    ```markdown
>    # Key Decisions & Learnings — YYYY-MM-DD HH:MM UTC
>
>    **Session:** {brief initial description — update as session progresses}
>    **Model:** {your model name and version}
>
>    ---
>
>    ## Decisions
>    *(append entries here immediately when architectural or technical decisions are made)*
>
>    ## Learnings
>    *(append entries here when failures, workarounds, or discoveries occur)*
>
>    ---
>    *Live file — updated incrementally. Finalized by closure protocol.*
>    ```
>
>    **c) Standing Instruction for the Entire Session:** After every significant action — completing a story, making an architectural decision, encountering and resolving an error, hitting a blocker, or discovering a learning — **immediately append** the details to the appropriate live file. Do NOT wait until the end of the session. Write to these files in real time.
>
> 9. **Read Build & Deploy Instructions (if applicable):** If a production deployment, build, or release task is likely:
>    - `{PROJECT_NAME}_AI_Training/production-instructions.md` — **READ THIS FIRST** before any build or deploy
>    - **IMPORTANT:** Always consult production instructions BEFORE attempting any build or deploy command.
>
> 10. **Read Design & Content References (if applicable):** Before creating or modifying UI/design:
>    - Check `{PROJECT_NAME}_AI_Training/assets/content-images/designandcontent/` for existing specs
>    - Check `{PROJECT_NAME}_AI_Training/assets/content-images/` for existing visual assets
>
> 11. **Read Connectors (if applicable):** If your task involves external APIs or integrations:
>    - Read `{PROJECT_NAME}_AI_Training/connectors/api-key-store.md` to understand what credentials exist and who provides them
>    - Check `{PROJECT_NAME}_AI_Training/connectors/` for any project-specific MCP server configs or integration docs
>
> 11a. **Review Agent Index:** Read the **Available Agents** section (Section 8) in `Master-AI-Context.md`. Note which domain-expert agents are available in the project's department folders. During the session, whenever your task requires domain expertise (finance, legal, marketing, strategy, operations, product, etc.), read the relevant agent files from `{Department}/agents/` BEFORE proceeding with the work. Use AGENT.md for operational workflows and advisor.md for strategic/ideation guidance.
>
> 11b. **Read Bug Tracker Metrics:** Read the **Metrics** table at the bottom of `Releases/Bugs.md`. Do NOT read every detailed entry — just the summary table. Note any bugs with status **Open** or **In Progress** as these may need attention this session.
>
> 12. **Summarize Your Understanding:** After reading all files, provide a brief summary confirming:
>    - What the project is and its current phase
>    - What was completed in the last session
>    - What the immediate next steps are
>    - Any active blockers or pending human actions
>    - Any Critical or High risks requiring attention
>    - **Bug tracker status:** Total bugs logged, open, in progress, complete
>    - Ask if there is anything specific the user wants to work on, or if you should continue from NextSteps.md
>
> **Important Notes:**
> - Do NOT begin any coding or file modifications until this protocol is complete
> - Do NOT skip files listed in Steps 2-3
> - Do NOT read every file in subdirectories. Read only indexes and the 2 latest session summaries.
> - If any referenced file does not exist, note it and continue"

---

## Zoho Projects Integration

A shared Zoho MCP connector is available in the `AI_Memory_Open/zoho-mcp-server/` directory (one level above this project folder). It provides pre-connected tools (prefixed `mcp__zoho__zoho_projects_*` and `mcp__7a54a83f-*__zoho_projects_*`) for project management updates.

- **Connector location:** `AI_Memory_Open/zoho-mcp-server/`
- **Portal:** {ZOHO_PORTAL} (ID: {ZOHO_PORTAL_ID})
- **Project:** {PROJECT_NAME} (ID: {ZOHO_PROJECT_ID})
- **How to use:** Call the Zoho Projects MCP tools directly — no additional authentication is required.
- **Preferred tools:** Use the `mcp__zoho__zoho_projects_*` tools for structured CRUD operations. Use the `mcp__7a54a83f-*__zoho_projects_*` tools as a fallback for flexible natural-language operations.
- **Important:** Do NOT attempt to re-authenticate the Zoho connector. If tokens expire, run `node AI_Memory_Open/zoho-mcp-server/test-create.js` to verify connectivity.

---

*Execute this file by saying: "execute open.md" or "run the session initialization protocol"*
```

### Step 6: Generate `agents/closure.md`

**Template:**

```markdown
# Session Closure & Handover Protocol — {PROJECT_NAME}

**Purpose:** Execute this protocol at the end of every AI session to preserve context, track progress, consolidate risks, and prepare for the next session.

---

> **Prompt for AI (Claude, Gemini, or any LLM):** "Execute the Session Closure & Handover protocol:
>
> 1. **Finalize Session Summary:** The session summary file (`session-summary/AI-Session-Summary-[YYYY-MM-DD]_[HHMM].md`) was created at session start by `open.md` and updated incrementally throughout the session. Now finalize it:
>    - Review all entries for completeness and accuracy
>    - Add the **Duration** field (calculate from start time)
>    - Fill in the **Environment State** section with the final state of all systems
>    - Ensure all stories, decisions, and blockers are captured
>    - Clean up formatting and ensure the file is a complete, standalone summary
>    - If the live file does not exist (session was not started with open.md), create it now from scratch by analyzing the conversation history
>
> 2. **Master Context & Architecture Update:**
>    - Update `Master-AI-Context.md`:
>      - Add a reference link to the new session summary in Section 7
>      - Update project progress percentages in Section 8
>      - Update infrastructure details in Section 9 if anything changed
>      - Update tech stack in Section 2 if anything changed
>      - Do NOT rewrite unchanged sections
>    - Update `{PROJECT_NAME}_architecture.md` if any architectural, security, infrastructure, or design philosophy changes were made:
>      - Update system architecture if new services, endpoints, or data flows were added
>      - Update security model if auth mechanisms, key management, or trust boundaries changed
>      - Update infrastructure sections if new servers, domains, or services were provisioned
>      - Update development standards if workflow or tooling changed
>      - Do NOT rewrite unchanged sections — only modify sections affected by this session's work
>
> 3. **Finalize Decisions & Learnings:** The decisions file (`decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md`) was created at session start and updated incrementally. Now finalize it:
>    - Review all entries for completeness — ensure every decision has a rationale and impact statement
>    - Review all learnings — ensure failures include the fix or workaround
>    - Add any decisions or learnings that were missed during incremental updates
>    - Clean up formatting
>    - If the live file does not exist, create it now from scratch by analyzing the conversation history
>
> 3a. **Key Decisions Index Update:** Update `Key-Decisions.md`:
>    - Add a new row to the **File Chronology** table
>    - Add/update **Keyword Index** entries linking to the new file
>    - Update the **Latest Decisions Summary** if decisions supersede existing ones
>    - Update the "Last updated" timestamp
>
> 3b. **Sessions Index Update:** Update `Sessions.md`:
>    - Add a new row to the **Session Index** table with filename and up to 10 keywords
>    - Update the "Last updated" timestamp
>
> 4. **Risk Registry Update:** Consolidate and update risk information:
>    - If any new risks were identified during this session (bugs, security concerns, infrastructure vulnerabilities, dependency issues, performance problems), create `risk-registry/Risk-Report-[YYYY-MM-DD]_[HHMM].md`
>    - Update `Risk-Registry.md`:
>      - Recategorize all risks by severity: **Critical**, **High**, **Medium**, **Low**
>      - Update the **Active Risks Summary** with current counts per severity
>      - Add/update the **Keyword Index** linking risk topics to report files
>      - Mark any resolved risks as **[RESOLVED]** with the resolution date and method
>      - Update the "Last updated" timestamp
>    - If endpoint monitoring data is available, incorporate it into the risk report
>
> 5. **Task Status Tracking:** If a versioned release file exists in `Releases/`:
>    - Update the active release file — mark stories as [DONE] or [IN-PROGRESS]
>    - Only update stories that were explicitly worked on this session
>
> 5a. **Bug & Change Request Tracking:** Update `Releases/Bugs.md`:
>    - Verify all changes made this session that fall outside formal release stories are logged (codebase changes, file structure adjustments, release plan modifications, environment changes)
>    - Mark any **In Progress** bugs as **Complete** with the completion date
>    - Add detailed entries (description + resolution) for any bugs that are missing them
>    - Recalculate the **Metrics** table at the bottom of the file
>    - Include bug metrics in the session summary:
>      ```
>      ## Bug Tracking Metrics
>      | Metric | Count |
>      |--------|-------|
>      | Bugs Logged This Session | X |
>      | Bugs Completed This Session | X |
>      | Total Open | X |
>      | Total In Progress | X |
>      | Total Complete | X |
>      ```
>
> 6. **Next Steps Update:** Update `NextSteps.md`:
>    - Update completed items (strikethrough with [DONE])
>    - Add new items discovered during this session
>    - Reprioritize the roadmap based on current state
>    - **Risk Mitigation section:** Add or update a `## Risk Mitigation` heading at the end of the immediate next steps. List any Critical or High risks that require specific action in upcoming sessions, with references to the risk-registry files.
>
> 7. **Build Instructions Update (if applicable):** If any build/deploy was attempted:
>    - Update `production-instructions.md` with working commands, flags, and configurations
>    - Update the active release file in `Releases/` with build/deploy outcomes
>    - Document failures AND fixes so future sessions don't repeat mistakes
>
> 8. **Module Map Update (if applicable):** If the source code structure changed:
>    - Update `module-map.md` with new directories, files, or deployment targets
>    - Update status columns for modules that changed state
>
> 9. **Push AI Memory to Git:**
>    ```bash
>    cd <path-to-AI_Memory-repo>
>    git add projects/{PROJECT_NAME}_AI_Training/
>    git commit -m "Session closure [YYYY-MM-DD_HHMM]: <brief summary>"
>    git push origin main
>    ```
>    - If in Cowork (sandbox cannot push), remind user to run git push manually.
>    - Ensure `.gitignore` excludes credential files.
>
> **Important:** Ensure all folders exist before writing files. Create directories if they do not exist."

---

*Status: {PROJECT_NAME} memory initialized {CURRENT_DATE}. Last closure: (none yet).*
```

### Step 7: Generate `Key-Decisions.md`

```markdown
# Key Decisions & Learnings — Master Index

> **Purpose:** Consolidated summary and keyword index of all architectural decisions and learnings across {PROJECT_NAME}. Before performing any action referenced in the index, read the corresponding file to avoid repeating past mistakes.

---

## AI Instructions

### Before Any Action
1. **Scan the keyword index below** for terms matching your planned action.
2. **If a match is found**, read the referenced file(s) in `{PROJECT_NAME}_AI_Training/decisions-learnings/` BEFORE proceeding.
3. **Apply the learnings** — do not re-discover known solutions.
4. **If no match is found**, proceed normally but document any new decisions during closure.

---

## Latest Decisions Summary (as of {CURRENT_DATE})

*No decisions recorded yet. This section is updated by the session closure protocol.*

---

## Keyword Index

| Keyword | Files |
|---------|-------|
| *(populated by closure protocol)* | |

---

## File Chronology

| Date | File | Focus |
|------|------|-------|
| *(populated by closure protocol)* | | |

---

*Last updated: {CURRENT_DATE} — initialized by PROJECT_MEMORY_INIT.md*
```

### Step 8: Generate `Sessions.md`

```markdown
# Sessions.md — Session Summary Index

> **Purpose:** Quick-reference index of all session summaries. Use this to find relevant past sessions before performing any action.

---

## AI Instructions

### Before Any Action
1. **Scan the index below** for keywords matching your planned action.
2. **If a match exists**, read the referenced session summary in `{PROJECT_NAME}_AI_Training/session-summary/`.
3. **Apply context from past sessions** — do not re-implement existing work or repeat failed approaches.

### When to Consult This Index
- Before building, deploying, or configuring anything
- Before creating or modifying components, pages, or API routes
- Before troubleshooting errors — a past session may have solved the same problem
- When the user references work from a prior session

---

## Session Index

| File | Keywords |
|------|----------|
| *(populated by closure protocol)* | |

---

*Last updated: {CURRENT_DATE} — initialized by PROJECT_MEMORY_INIT.md*
```

### Step 9: Generate `Risk-Registry.md`

```markdown
# Risk Registry — {PROJECT_NAME}

> **Purpose:** Consolidated risk summary for {PROJECT_NAME}. This file indexes all risk reports and categorizes active risks by severity. AI assistants must check this file during session initialization (open.md Step 7) and update it during session closure.

---

## AI Instructions

### During Session Initialization
1. **Read this file** to understand the current risk landscape.
2. **Check for Critical and High risks** — these may affect your planned work.
3. **If a risk is relevant** to your current task, read the referenced file in `risk-registry/` for full details and resolution history.

### During Session Closure
1. **Identify new risks** discovered during the session (bugs, security issues, infrastructure vulnerabilities, dependency problems, performance issues).
2. **Create a risk report** in `risk-registry/Risk-Report-[YYYY-MM-DD]_[HHMM].md` if new risks were found.
3. **Update this file** — recategorize, add new entries, mark resolved risks.
4. **Add risk mitigation items** to `NextSteps.md` under the `## Risk Mitigation` heading.

### Risk Severity Levels
- **Critical:** Immediate threat to production, data integrity, or security. Must be addressed before any other work.
- **High:** Significant impact on functionality, performance, or user experience. Should be addressed in the next 1-2 sessions.
- **Medium:** Notable issue that should be tracked and resolved within the current release cycle.
- **Low:** Minor concern or improvement opportunity. Can be deferred to a future release.

---

## Active Risks Summary

| Severity | Count |
|----------|-------|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

**Total Active Risks:** 0

---

## Critical Risks

*None.*

---

## High Risks

*None.*

---

## Medium Risks

*None.*

---

## Low Risks

*None.*

---

## Keyword Index

| Keyword | Files |
|---------|-------|
| *(populated by closure protocol and monitoring integration)* | |

---

## Report Chronology

| Date | File | Focus | Risks Added | Risks Resolved |
|------|------|-------|-------------|----------------|
| *(populated by closure protocol)* | | | | |

---

*Last updated: {CURRENT_DATE} — initialized by PROJECT_MEMORY_INIT.md*
```

### Step 10: Generate `NextSteps.md`

```markdown
# NextSteps.md — {PROJECT_NAME}

**Last Updated:** {CURRENT_DATE}
**Current Status:** Project memory initialized. Awaiting first work session.
**Active Executor:** {EXECUTION_MODEL_SUMMARY}

---

## Immediate Next Steps

### 1. First Session Setup
- [ ] **Run `agents/open.md`** to validate the memory structure
- [ ] **Review `Master-AI-Context.md`** and confirm all context is accurate
- [ ] **Begin first story/task** from the release plan (if defined)

{IF RELEASE_VERSIONED: INSERT RELEASE SECTION}

---

## Risk Mitigation

*No active risks. This section is updated by the session closure protocol when Critical or High risks are identified.*

---

## Backlog (Future Work)

*Items to be added as the project progresses.*

---

## Bug & Change Request Tracking

All ad-hoc changes (outside formal release stories) are tracked in **`Releases/Bugs.md`**.

**Current Metrics:**
| Metric | Count |
|--------|-------|
| Total Logged | 0 |
| Open | 0 |
| In Progress | 0 |
| Complete | 0 |

**Open Bugs:** None

---

## Session Management (Run at End of Every Session)

Use the **Session Closure & Handover** prompt from `agents/closure.md` to:
1. Generate a session summary in `session-summary/`
2. Create a decisions log in `decisions-learnings/`
3. Update risk registry in `risk-registry/` and `Risk-Registry.md`
4. Update story statuses in the active release file
5. Update bug tracker in `Releases/Bugs.md` — log any ad-hoc changes, update metrics
6. Update this `NextSteps.md` to reflect progress (including bug metrics)
7. Update `Master-AI-Context.md` with progress and any changes
8. Push to git

---

*This file is the primary entry point for "what do I work on next?" — updated every session by the closure protocol.*
```

### Step 11: Generate `connectors/api-key-store.md`

```markdown
# API Key Store — {PROJECT_NAME}

**Purpose:** Inventory of all API keys, tokens, and credentials required for this project. This file contains **names and providers ONLY** — actual secret values are NEVER stored here.

**Security Rule:** AI assistants must NEVER read, store, echo, or log actual credential values. When a credential is needed, the AI must leave a `__HUMAN_PROVIDED__` placeholder and instruct the human to substitute the real value.

---

## Credential Inventory

| Key Name | Service/Provider | Used By | Purpose | Who Provides | Status |
|----------|-----------------|---------|---------|-------------|--------|
{FOR EACH CONNECTOR IN CONNECTORS_LIST: INSERT ROW}
| `ZOHO_ACCESS_TOKEN` | Zoho | AI (MCP tools) | Project management via Zoho Projects | Auto (MCP connector) | Configured |

---

## How to Add a New Credential

1. Add a row to the table above with the key name, provider, and purpose.
2. The **human** obtains the actual credential value from the provider's dashboard.
3. The credential is stored in the appropriate `.env.local` file or injected at runtime — NEVER in this file or any file committed to git.
4. Update the **Status** column: `Pending`, `Configured`, `Expired`, `Rotated`.

---

## Connector Configurations

Project-specific MCP servers, integration scripts, or configuration files are stored in this `connectors/` directory alongside this file.

### Zoho Projects (Shared)
- **Location:** `AI_Memory_Open/zoho-mcp-server/` (shared across all projects)
- **Portal:** {ZOHO_PORTAL} (ID: {ZOHO_PORTAL_ID})
- **Project:** {PROJECT_NAME} (ID: {ZOHO_PROJECT_ID or "TBD — created during init"})

---

*Last updated: {CURRENT_DATE} — initialized by PROJECT_MEMORY_INIT.md*
```

### Step 12: Generate `production-instructions.md`

```markdown
# Production Instructions — {PROJECT_NAME}

**Document Purpose:** Master production deployment guide. Tells any AI executor exactly how to build, configure, and deploy every component. Updated every session with the latest working commands.

**Last Updated:** {CURRENT_DATE}

---

## 1. Deployment Architecture Overview

{PLACEHOLDER — to be filled as infrastructure is provisioned}

| Layer | Hosting | Provider | Purpose |
|-------|---------|----------|---------|
| *TBD* | *TBD* | *TBD* | *TBD* |

---

## 2. Build & Deploy Steps

*No deployments recorded yet. This file is updated by the session closure protocol after every build or deploy attempt — successful or failed.*

---

## 3. Known Build Gotchas

*None yet. Failures and their fixes are documented here by the closure protocol so future sessions never repeat the same mistakes.*

---

## 4. Required Access Keys

See `connectors/api-key-store.md` for the full credential inventory.

---

*This document is the single source of truth for production deployment. Update it as infrastructure evolves.*
```

### Step 13: Generate `module-map.md`

```markdown
# Module Map — {PROJECT_NAME}

**Document Purpose:** Maps the logical architectural modules of {PROJECT_NAME} to their physical directory locations within the codebase.

**Last Updated:** {CURRENT_DATE}

---

{PLACEHOLDER — to be filled from PROJECT_CONTEXT architecture details}

## Directory Structure

```text
{INSERT FROM PROJECT_CONTEXT IF AVAILABLE, OTHERWISE:}
/
├── (to be documented as project structure is established)
```

---

## Key Files

| File | Purpose |
|------|---------|
| *(populated as files are created)* | |

---

## Production Deployment Mapping

| Component | Source | Production Host | Domain | Status |
|-----------|--------|----------------|--------|--------|
| *(populated as infrastructure is provisioned)* | | | | |

---

*Updated every session by the closure protocol when source code structure changes.*
```

### Step 14: Generate Initial Release File (if applicable)

If `RELEASE_MODE` is "pre-planned" or "both", write the `RELEASE_CONTENT` provided in Question 7 to `Releases/{project-name}-build-instructions-{version}.md`. If the provided content does not already follow the template below, restructure it to match.

If `RELEASE_MODE` is "iterative" (no pre-planned file), create a placeholder `Releases/{project-name}-build-instructions-{version}.md`:

```markdown
# {PROJECT_NAME} BUILD INSTRUCTIONS: RELEASE {FIRST_RELEASE_VERSION} — {FIRST_RELEASE_NAME}

**Document Purpose:** Granular User Stories and Acceptance Criteria for Release {FIRST_RELEASE_VERSION}. Serves as the master execution guide for both Human engineers and AI assistants.

**Release:** {FIRST_RELEASE_VERSION} — {FIRST_RELEASE_NAME}
**Story Prefix:** {PREFIX}-
**Created:** {CURRENT_DATE}

**Instructions:**
* **[Human] Stories:** Execute exactly as written. Require direct human input.
* **[AI] Stories:** AI executes directly — reads story, runs commands, writes files.
* **[AI + Human] Stories:** Collaborative — AI performs technical work, human provides input at `[Human]` checkpoints.

---

## Epic Overview

| Epic | Name | Stories | Status |
|:---:|:---|:---:|:---:|
| *(to be defined)* | | | |

---

*Stories to be added during planning sessions.*
```

### Step 14a: Generate `Releases/Bugs.md`

This file is ALWAYS created regardless of release mode. It tracks bugs from UAT and any ad-hoc requests that fall outside the scope of a formal release plan.

```markdown
# {PROJECT_NAME} — Bug & Change Request Tracker

**Document Purpose:** This file tracks all bugs found during UAT and any ad-hoc requests that fall outside the scope of a formal Release plan. This includes codebase changes, file structure adjustments, release plan modifications, and any changes to the development or production environments.

**Naming Convention:** `bug-[Current Release]-[YYYY-MM-DD]-[HHMM]`
- Example: `bug-1.0-2026-03-22-1430`
- The release version reflects whichever release is active when the bug/request is logged.

**Labels:** Each entry uses the same execution labels as release stories:
- **[AI]** — AI executes directly
- **[Human]** — Requires direct human action
- **[AI + Human]** — Collaborative; AI performs technical work, human provides input at `[Human]` checkpoints

**Statuses:**
- **Open** — Logged, not yet started
- **In Progress** — Currently being worked on
- **Complete** — Resolved and verified

---

## Bug & Change Request Log

| ID | Description | Label | Status | Filed | Completed |
|----|-------------|-------|--------|-------|-----------|
| *(entries added as bugs/changes are filed)* | | | | | |

---

## Detailed Entries

*(detailed bug descriptions and resolutions are added below the table as work is completed)*

---

## Metrics

| Metric | Count |
|--------|-------|
| Total Logged | 0 |
| Open | 0 |
| In Progress | 0 |
| Complete | 0 |

---

*This file is updated in real-time as bugs and change requests are received. Metrics are reported during session initialization (open.md) and session closure (closure.md).*
```

### Step 15: Generate `agents/plan-release.md`

This file is ALWAYS created (regardless of `RELEASE_MODE`). It is a protocol that can be executed at any time to plan a new release by consolidating existing project state and asking the user targeted questions.

```markdown
# plan-release.md — Iterative Release Planning Protocol

**Purpose:** Execute this file when it is time to plan a new release. This protocol reviews the current project state, consolidates outstanding tasks and risks, asks the user targeted questions, and then generates a fully structured release file in the `Releases/` folder with incremental naming.

---

> **Prompt for AI (Claude, Gemini, or any LLM):** "Execute the Release Planning protocol from plan-release.md:
>
> ## Phase A: Gather Context (Autonomous — No User Input Needed)
>
> Read the following files silently and build an internal understanding of the project state:
>
> 1. **Architecture:** Read `{PROJECT_NAME}_architecture.md` to understand the system design, tech stack, and constraints.
> 2. **Master Context:** Read `Master-AI-Context.md` to understand current progress, infrastructure state, and AI execution model.
> 3. **Risk Registry:** Read `Risk-Registry.md` to identify all **Critical** and **High** risks. These MUST be addressed in the next release or explicitly deferred with justification.
> 4. **Next Steps:** Read `NextSteps.md` to identify all pending tasks, backlog items, and risk mitigation items.
> 5. **Previous Releases:** List all files in `Releases/` sorted by version number. Read the **most recent** release file to understand:
>    - What was planned vs. what was completed
>    - Any stories marked [IN-PROGRESS] that need to carry forward
>    - The last epic number used (new release continues incrementally)
>    - The last story prefix used
> 6. **Recent Decisions:** Read `Key-Decisions.md` keyword index for any decisions that affect release planning (e.g., tech stack changes, integration decisions, infrastructure pivots).
> 7. **Recent Sessions:** Read the **two most recent** session summaries to understand momentum and recent blockers.
>
> ## Phase B: Determine Release Version
>
> Based on the files in `Releases/`, determine the next incremental version number:
> - If previous releases exist (e.g., `0_1`, `0_2`), increment: next is `0_3`
> - If no previous releases exist, start at `0_1`
> - Follow the naming convention: `{project-name}-build-instructions-{version}.md`
>   - Example: `sovrynty-build-instructions-0_3.md`
>
> ## Phase C: Ask User Questions (Interactive)
>
> Present the user with a consolidated view and ask targeted questions:
>
> ### C.1: State Summary
> > "Based on my review, here is the current state:
> > - **Last completed release:** {version} — {name} ({completion %}%)
> > - **Carry-forward stories:** {count} stories still [IN-PROGRESS]
> > - **Open risks requiring attention:** {count Critical}, {count High}
> > - **Pending tasks from NextSteps:** {count} items
> > - **Backlog items:** {count} items
> >
> > Does this look accurate? Any corrections?"
>
> ### C.2: Release Focus
> > "What is the primary focus of this release? Examples:
> > - A specific feature or integration (e.g., 'Stripe payments', 'user onboarding')
> > - Bug fixes and stabilization
> > - Infrastructure / DevOps improvements
> > - A combination of the above
> >
> > Describe what you want this release to accomplish."
>
> ### C.3: Release Codename
> > "What codename should this release use? (6 letters recommended, e.g., BRIDGE, SHIELD, LAUNCH)
> > Or say 'auto' and I'll suggest one based on the focus."
>
> ### C.4: New Stories
> > "Beyond the carry-forward items and risk mitigations, are there any **new features, tasks, or requirements** you want included in this release?
> > Describe them at whatever level of detail you have — I'll decompose them into granular stories with acceptance criteria."
>
> ### C.5: Human Dependencies
> > "Are there any tasks in this release that require **human action** (API key setup, third-party dashboard configuration, physical device testing, compliance decisions)?
> > List them so I can properly label them as `[Human]` or `[AI+Human]` stories."
>
> ### C.6: Scope Constraints
> > "Any constraints on this release?
> > - Maximum number of stories?
> > - Deadline or time budget?
> > - Dependencies on external teams or services?
> > - Stories to explicitly EXCLUDE or defer?"
>
> ## Phase D: Build the Release File (Autonomous)
>
> After all questions are answered, generate the release file:
>
> 1. **File path:** `Releases/{project-name}-build-instructions-{next_version}.md`
>
> 2. **Header:** Include release version, codename, story prefix, epic numbering continuation, creation date, and predecessor reference.
>
> 3. **Epic Overview Table:** Group stories into epics. Continue epic numbering from the last release.
>
> 4. **Story Decomposition:** For each epic, create granular stories with:
>    - Story ID: `{PREFIX}-{Epic}.{Story}` (e.g., `BRIDGE-11.0`)
>    - Label: `[AI]`, `[Human]`, or `[AI+Human]`
>    - Description
>    - Acceptance Criteria (step-by-step execution instructions)
>
> 5. **Carry-forward stories:** Include any [IN-PROGRESS] stories from the previous release, renumbered into the new epic structure with a note referencing the original story ID.
>
> 6. **Risk mitigation stories:** For each Critical/High risk from the Risk Registry, create a corresponding story (or incorporate mitigation into an existing story).
>
> 7. **Story count summary:** Total stories, broken down by [AI] / [Human] / [AI+Human].
>
> ## Phase E: Update Project Files
>
> After the release file is created:
>
> 1. **Update `NextSteps.md`:** Add the new release section with epic overview and first steps.
> 2. **Update `Master-AI-Context.md`:** Add the new release to Section 8 (Project Progress) with 0% completion.
> 3. **Create Zoho milestone (if Zoho enabled):** Use MCP tools to create a milestone for the new release and create task lists for each epic.
> 4. **Report to user:** Present the complete release plan with story counts, epic breakdown, and the file path.
>
> **Important:**
> - Do NOT modify previous release files — they are historical records
> - Do NOT begin executing stories from the new release — only plan them
> - The user must explicitly say 'begin' or 'execute' to start working on stories"

---

*Execute this file by saying: "execute plan-release.md" or "plan the next release"*
```

### Step 16: Create Zoho Project (if enabled)


If `ZOHO_ENABLED` is true:

1. Use the Zoho MCP tools to create a new project:
   - **Tool:** `mcp__zoho__zoho_projects_create_project`
   - **Name:** `{PROJECT_NAME}`
   - **Portal ID:** `{ZOHO_PORTAL_ID}`
2. Store the returned Project ID in the relevant files (`agents/open.md`, `connectors/api-key-store.md`, `Master-AI-Context.md`)
3. If a first release is defined, create a milestone for it
4. Report the Zoho Project ID to the user

If Zoho creation fails (e.g., token expired, MCP unavailable), document the failure and instruct the user to create the project manually, then update the Project ID in the files.

### Step 17: Confirmation Summary

After all files are created, present the user with:

1. **Complete file tree** of everything that was created
2. **Zoho Project ID** (if created)
3. **Instruction to start using the memory:**
   > "Your project memory for {PROJECT_NAME} is ready. To begin your first working session, say: **'Execute open.md'**"
4. **Reminder to push to git:**
   > "Remember to commit and push the new memory folder to the AI_Memory repository:
   > ```bash
   > cd AI_Memory
   > git add projects/{PROJECT_NAME}_AI_Training/
   > git commit -m 'Initialize {PROJECT_NAME} AI Training memory'
   > git push origin main
   > ```"

---

## Appendix: File Format References

### Session Summary Format
**Note:** This file is created at session START by `open.md` and updated incrementally throughout the session. The closure protocol finalizes it.
```
# AI Session Summary — YYYY-MM-DD HH:MM UTC

**Model:** {model name and version}
**Started:** {timestamp from open.md}
**Duration:** ~X hours (added by closure)
**Executor:** {environment}

---

## What Was Done
### 1. {Task description}
- Detail (appended in real time as work is completed)
- Detail

## Stories Completed This Session
| Story ID | Name | Status |
|----------|------|--------|
(rows appended in real time)

## Key Decisions
| Decision | Rationale |
|----------|-----------|
(rows appended in real time)

## Blockers / Pending Human Actions
1. (appended in real time as blockers are encountered)

## Environment State
- (filled in by closure protocol)

---
*Live file — created by open.md, updated incrementally, finalized by closure protocol.*
```

### Key Decisions Format
**Note:** This file is created at session START by `open.md` and updated incrementally throughout the session. The closure protocol finalizes it.
```
# Key Decisions & Learnings — YYYY-MM-DD HH:MM UTC

**Session:** {brief description — updated as session progresses}
**Model:** {model name}

---

## Decisions
### 1. {Decision Title} (appended in real time when decisions are made)
- **Decision:** {what was decided}
- **Rationale:** {why}
- **Impact:** {what this affects}

## Learnings
### 1. {Learning Title} (appended in real time when discoveries occur)
- {description}
- **Workaround/Fix:** {if applicable}

---
*Live file — created by open.md, updated incrementally, finalized by closure protocol.*
```

### Risk Report Format
```
# Risk Report — YYYY-MM-DD HH:MM UTC

**Session:** {brief description}
**Source:** {session observation / monitoring system / manual report}

---

## New Risks Identified

### RISK-{ID}: {Title}
- **Severity:** Critical / High / Medium / Low
- **Category:** Security / Infrastructure / Dependency / Performance / Data / Compliance
- **Description:** {detailed description}
- **Impact:** {what happens if unaddressed}
- **Mitigation:** {recommended action}
- **Owner:** [AI] / [Human] / [AI+Human]
- **Status:** Open / In Progress / Resolved
- **Related Files:** {source code, config files, or documentation affected}

## Risks Resolved This Session

### RISK-{ID}: {Title}
- **Resolution:** {what was done}
- **Resolved By:** {who/what}
- **Date:** {when}

---
*Generated by {model} — YYYY-MM-DD HH:MM UTC*
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.1 | 2026-03-22 | Added bug & change request tracking: Releases/Bugs.md template, Section 6a in Master-AI-Context, Step 5a in closure.md, Step 11a in open.md, bug metrics in NextSteps.md and README.md |
| 1.0 | {CURRENT_DATE} | Initial creation — full bootstrap protocol |

---

*PROJECT_MEMORY_INIT.md — The universal AI project memory bootstrap. Execute to begin.*

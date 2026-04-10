# open.md — Session Initialization Protocol (AI Memory System — Root Level)

**Purpose:** Execute this file at the start of any AI session that will modify the **AI Memory system itself** — its structure, standards, policies, shared resources, cross-project operations, or root-level files. This is NOT for project-specific work (use the project's own `agents/open.md` for that).

> **IMPORTANT — SCOPE DISTINCTION:**
> This protocol governs sessions that work on the **AI Memory infrastructure** — updating standards, creating/modifying project scaffolding, managing shared resources (Zoho MCP, WhatsApp MCP, Memory Agents), cross-project coordination, contact profile management, and system-level documentation. If your session is focused on a **single project** (building features, deploying code, writing marketing content), use that project's own `agents/open.md` instead.

---

> **Prompt for AI:** "Execute the Root-Level Session Initialization protocol from agents/open.md:
>
> 0. **Sync AI Memory from Git:** Before doing anything else, pull the latest AI training context:
>    ```bash
>    cd <path-to-AI_Memory>
>    git pull origin main
>    ```
>    - The canonical repo is **https://github.com/hassqass18/AI_Memory_Brain**
>    - If you are in Cowork, the folder is already mounted — just confirm files are current.
>    - If the repo has not been cloned yet: `git clone https://github.com/hassqass18/AI_Memory_Brain.git`
>
> 1. **Read Core Context Files:** Read these files to understand the system:
>    - `AI_Memory_Open/Master-AI-Context.md` — System overview, project portfolio, folder structure, operational standards, shared resources, and session infrastructure
>    - `AI_Memory_Open/README.md` — Repository documentation, memory design patterns, tier system explanation
>
> 2. **Read Standards and Policy (MANDATORY):** These two standards govern ALL operations and communications system-wide. Scan at index level. Drill into specific sections when your task involves any operational decision, communication composition, financial process, or contact engagement:
>    - `AI_Memory_Open/Standards and Policy/CCDE-Operating-Standard.md` — CC/DE v2.0: Centralized Command, Decentralized Execution. **Consult before:** any operational decision, standard modification, project governance change, CRM tagging, or agent management.
>    - `AI_Memory_Open/Standards and Policy/Communication-Standard.md` — ACS v1.0: Adaptive Communication Standard. **Consult before:** composing any significant message, modifying communication protocols, or updating contact profiles.
>    - `AI_Memory_Open/contacts/` — Contact Profiles. Check for existing profiles before working with any contact. Template: `contacts/_PROFILE-TEMPLATE.md`.
>
> 3. **Read Current State:** Read these files to understand what's been done and what's pending:
>    - `AI_Memory_Open/NextSteps.md` — Prioritized system-level work queue
>    - `AI_Memory_Open/Key-Decisions.md` — Index of all system-level decisions (read index; drill down on keyword match)
>    - `AI_Memory_Open/Sessions.md` — Index of all system-level sessions (check for prior work on your current task)
>    - `AI_Memory_Open/Risk-Registry.md` — Active system-level risks
>
> 4. **Read Recent Session History:** Read the **two most recent** files in `AI_Memory_Open/session-summary/` (sorted by filename date) to understand what was last worked on at the system level.
>
> 5. **Understand Project Portfolio:** Scan the project folder names to understand what projects exist. Do NOT read project-level files unless your task specifically requires cross-project work:
>    - Scan `projects/` for `*_AI_Training/` folders — these are initialized projects
>    - Scan `projects/staging/` for folders — these are projects being planned
>
>    **NOTE TO AI:** These project folders are NOT system folders. They are independent project workspaces. When looking at the root AI_Memory_Open directory, distinguish between:
>    - **System folders** (agents/, session-summary/, decisions-learnings/, contacts/, Memory_Agents/, zoho-mcp-server/, Model_Validation/) — These support the AI Memory system itself
>    - **Project folders** (projects/{Name}_AI_Training/, projects/staging/{Name}/) — These are independent project workspaces with their own session protocols
>    - **System files** (Master-AI-Context.md, README.md, Key-Decisions.md, Sessions.md, Risk-Registry.md, NextSteps.md, setup-AI-Memory.md, staging.md, PROJECT_MEMORY_INIT.md) — Root-level documentation and indexes
>    - **Standards and Policy/** (CCDE-Operating-Standard.md, Communication-Standard.md, plus .docx versions) — Root-level MASTER COPIES of governing standards
>
> 6. **Create Live Session Files:** Create these files immediately. Update them incrementally throughout the session:
>
>    **a) Session Summary:** Create `session-summary/AI-Session-Summary-[YYYY-MM-DD]_[HHMM].md` with:
>    ```markdown
>    # AI Session Summary — YYYY-MM-DD HH:MM UTC (Root Level)
>
>    **Model:** {your model name and version}
>    **Started:** {current timestamp}
>    **Executor:** {environment — Cowork, Coder, CLI, etc.}
>    **Scope:** AI Memory System (root-level modifications)
>
>    ---
>
>    ## What Was Done
>    *(append entries here as work is completed)*
>
>    ## Key Decisions
>    | Decision | Rationale |
>    |----------|-----------|
>
>    ## Projects Affected
>    *(list any project folders modified during this session)*
>
>    ## Blockers / Pending Human Actions
>    *(append entries here as blockers are encountered)*
>
>    ## Standards Sync Status
>    *(if standards were modified, note which project copies were updated)*
>
>    ---
>    *Live file — updated incrementally. Finalized by closure protocol.*
>    ```
>
>    **b) Decisions & Learnings:** Create `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md` with:
>    ```markdown
>    # Key Decisions & Learnings — YYYY-MM-DD HH:MM UTC (Root Level)
>
>    **Session:** {brief description}
>    **Model:** {your model name and version}
>    **Scope:** AI Memory System
>
>    ---
>
>    ## Decisions
>    *(append immediately when system-level decisions are made)*
>
>    ## Learnings
>    *(append when failures, workarounds, or discoveries occur)*
>
>    ---
>    *Live file — updated incrementally. Finalized by closure protocol.*
>    ```
>
>    **c) Standing Instruction:** After every significant action, immediately append to the appropriate live file. Do NOT wait until end of session.
>
> 7. **Standards Propagation Check:** If your task involves modifying either standard (CC/DE or ACS):
>    - After modifying the root copy, you MUST propagate changes to ALL project `Standards and Policy/` folders
>    - Projects to update: all project folders inside `projects/`
>    - Log which copies were updated in the session summary under "Standards Sync Status"
>
> 8. **Summarize Your Understanding:** Provide a brief summary confirming:
>    - What the AI Memory system is and its current state
>    - What was done in the last root-level session
>    - What the current system-level priorities are (from NextSteps.md)
>    - Any active risks requiring attention
>    - What specific task you're being asked to do
>
> **Important Notes:**
> - Do NOT begin any file modifications until this protocol is complete
> - Do NOT read project-level files unless your task requires cross-project work
> - Do NOT confuse system-level session files with project-level ones — they are separate
> - If any referenced file does not exist, note it and continue"

---

## Trigger Phrases

This protocol should be executed when the user says any of the following:
- "start AI memory"
- "initialize AI memory"
- "execute open.md"
- "run the root session initialization protocol"
- "run the session initialization protocol"

---

## Live Workspace Index

> **This section is dynamically updated by the closure protocol (`agents/closure.md`).** It provides a quick-reference snapshot of the current workspace state so the AI can orient itself without scanning every directory.

### Recent Projects (Last 5)
*Updated during closure protocol based on last-modified date.*

1. `projects/staging/SierraHomes_AmericanDream/` — File consolidation complete (AI_Training → staging). Master-Context.md updated with full agents + deliverables index. Canonical folder confirmed. AI Training folder ready for deletion. Last modified 2026-04-11.
2. `projects/staging/ProvectaGroup/` — Legal/ and Operations/ folders created. Ecotecture PM contracts + Construction Cost transcript added. Last modified 2026-04-11.
3. `contacts/Keziah-Okanga-Profile.md` — Karen luxury real estate consultant (Pam Golding + Choice Homes). Full intelligence profile. Social media proposal (v2, three-platform) delivered 2026-04-10. Next: send proposal, book 30-min call.

### Staging Projects (Last 6)
*Updated during closure protocol based on last-modified date of folders inside `staging/`.*

1. `projects/staging/LifeOS/` — **LAUNCHING SUNDAY APRIL 12, 2026.** Personal life management system — 6 domains (Health, Finance, Relationships, Projects-Work, Goals-Ideas, Plans), hybrid daily check-in, Urgency×Impact action queue (15 active items), Q2 OKRs seeded (G001 Fitness, G002 Financial Clarity, G003 AMB GTM). All 3 staging docs complete. To start: say "LifeOS Day 1 check-in". Last modified 2026-04-11.
2. `projects/staging/AIMemoryBrain/` — AI Memory Brain product commercialization. Landing page live at pgco.world/AIMemoryBrain/Marketing/ai-memory-brain-landing.html. Fully mobile/tablet responsive. Compare chart mobile-redesigned. **Next: wire Stripe to Blueprint modal, publish LinkedIn launch posts.** Last modified 2026-04-10.
3. `projects/staging/ProvectaGroup/` — Provecta Group consulting firm. Website live at pgco.world (Netlify, SSL active). AI Memory Brain landing page live. Premier Realty Market Analysis doc created. **Premier Realty RevOps & AI Proposal built (KES 1,150,000, Q2–Q4 2026) — 2026-04-10.** Next: send proposal to Premier Realty, Zoho CRM setup, Stripe wiring, LinkedIn posts. Last modified 2026-04-10.
4. `projects/staging/PersonalBranding_AndreHassanWilson/` — Personal branding for Andre "Hassan" Wilson. Gilber-inspired website built. 2026-standard resume built. LinkedIn fully optimized for AMB founder positioning. **Next: project case studies, first LinkedIn posts.** Last modified 2026-04-09.
5. `projects/staging/MSIFS/` — $200M frontier market PE fund (East Africa + Central Asia). GP team: Alex 27%, Hassan 25%, Aibek 25%, Stephen 15%. Notion workspace active. **Next: GP Agreement signed, advisory board, LP outreach.** Last modified 2026-04-09.
6. `projects/staging/SierraHomes_AmericanDream/` — File consolidation complete (all AI_Training files merged in). Master-Context.md updated — agents expanded (Product_Development, Security, TechSupport) + full deliverables index added (40+ files). Canonical folder. Last modified 2026-04-11.

### Main Folder Structure

**System Folders (NOT projects — these support the AI Memory infrastructure):**
- `Standards and Policy/`: Root-level MASTER COPIES of CC/DE and ACS standards (propagate to projects)
- `agents/`: Root-level session lifecycle protocols (this file + closure.md)
- `session-summary/`: Root-level session summaries (system work only)
- `decisions-learnings/`: Root-level decision logs (system work only)
- `contacts/`: Shared contact profiles (DISC/OCEAN profiling)
- `Memory_Agents/`: Source-of-truth for domain expert agents
- `zoho-mcp-server/`: Reference Zoho MCP connector (requires configuration)
- `Model_Validation/`: AI model validation and testing

**Project Folders (independent workspaces — each has its own agents/open.md):**
- `projects/[ProjectName]_AI_Training/`: Formal, initialized project memory folders
- `projects/staging/`: Projects being staged prior to formal initialization

### Root Directory File Index
*Updated during closure protocol.*

**System Context:**
- `Master-AI-Context.md`: Root-level operational context for the AI Memory system
- `README.md`: Repository documentation, memory design patterns, tier system

**Standards (in `Standards and Policy/` folder):**
- `Standards and Policy/CCDE-Operating-Standard.md`: CC/DE v2.0 — universal management standard (MASTER COPY)
- `Standards and Policy/Communication-Standard.md`: ACS v1.0 — universal communication standard (MASTER COPY)
- `Standards and Policy/CCDE-Operating-Standard-v2.0.docx`: Word document version
- `Standards and Policy/CCDE-Management-Standard-v1.0.docx`: Historical v1.0 Word document

**Session Tracking (Root Level):**
- `Key-Decisions.md`: System-level decision keyword index
- `Sessions.md`: System-level session keyword index
- `Risk-Registry.md`: System-level risk tracking
- `NextSteps.md`: System-level priority queue

**Tools & Templates (3-Step Project Lifecycle):**
- `setup-AI-Memory.md`: One-time first-run initialization protocol (Step 1)
- `staging.md`: Per-project ideation and planning protocol (Step 2)
- `PROJECT_MEMORY_INIT.md`: Per-project full build protocol (Step 3)
                                                                                                                                                                                        
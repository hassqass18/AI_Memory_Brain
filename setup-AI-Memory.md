# setup-AI-Memory.md — First-Time Initialization Protocol

**Purpose:** This protocol runs **once** — the very first time a user sets up the AI Memory system. It detects a fresh install, walks the user through initial configuration, and prepares the system for its first project. After this protocol completes, all future sessions use `agents/open.md` (root-level) or project-level `agents/open.md`.

**Memory Design Version:** 1.1
**Upstream Repository:** `https://github.com/Qosil/AI_Memory_Open`

> **IMPORTANT — FORK POLICY:** This is the upstream open-source template. Users MUST fork or clone this repo into their own GitHub account before using it. No one except the repository owner (Qosil) should push changes directly to `Qosil/AI_Memory_Open`. During setup, the user will provide their own forked repository URL, and all subsequent git operations will target that fork.

---

## How to Trigger

Say to any AI (Claude, Gemini, or any LLM with file system access):

> "Execute setup-AI-Memory.md to initialize the AI Memory system for the first time."

Or simply fork/clone the repo and open a session — the AI should detect the fresh install state and offer to run this protocol.

---

## Fresh Install Detection

> **AI Instructions:** Before running this protocol, verify that the system is in a fresh install state. Check ALL of the following conditions:

```
FRESH_INSTALL = TRUE if ALL of these are true:
  1. `session-summary/` is empty (no session summary files)
  2. `decisions-learnings/` is empty (no decision log files)
  3. `projects/` contains no project folders (excluding `staging/`)
  4. `projects/staging/` is empty or does not exist
  5. No `keys.txt` or `*Keys.txt` file exists at root
```

**If FRESH_INSTALL is FALSE:** This system has already been initialized. Do NOT run this protocol. Instead:
- If the user explicitly asked to run setup, inform them: *"This AI Memory system has already been initialized. To start a new session, run `agents/open.md`. To stage a new project, run `staging.md`. To initialize a fully planned project, run `PROJECT_MEMORY_INIT.md`."*
- If the AI detected the state automatically, proceed with `agents/open.md` for a normal session.

**If FRESH_INSTALL is TRUE:** Proceed with Step 1 below.

---

## Step 1: Welcome & System Overview

> **AI Instructions:** Present the following to the user, then proceed to Step 1.1:

> "Welcome to **AI Memory** — a persistent memory system for AI assistants.
>
> AI Memory stores structured project knowledge in markdown files committed to git, so any AI assistant (Claude, Gemini, or any LLM) can load full project context at the start of a session and pick up exactly where the last one left off.
>
> I'm going to walk you through a one-time setup process. This will take about 10-15 minutes and involves three phases:
>
> **Phase 1 — System Configuration** (Steps 1-3)
> - Identify yourself as the system owner
> - Register the tools, platforms, and API keys you use
> - Configure your preferred AI models
>
> **Phase 2 — Standards & Policy Customization** (Step 4)
> - Review and optionally customize the operating and communication standards
>
> **Phase 3 — First Project** (Step 5)
> - Stage your first project using the staging protocol
>
> Let's begin."

### Step 1.1: System Owner

> **AI Instructions:** Ask the user:

> "Who is the primary owner of this AI Memory system? Provide:
> - **Full name**
> - **Email address**
> - **Organization name** (if applicable)"

Wait for response. Store as `OWNER_NAME`, `OWNER_EMAIL`, `OWNER_ORG`.

### Step 1.2: Repository Configuration

> **AI Instructions:** Ask the user:

> "What is the **GitHub URL of your forked repository**?
>
> You should have forked or cloned `https://github.com/Qosil/AI_Memory_Open` into your own GitHub account before running this setup. Please provide the URL of your fork (e.g., `https://github.com/YourUsername/AI_Memory_Open` or `https://github.com/YourUsername/YourCustomName`).
>
> **Important:** Do NOT use the upstream `Qosil/AI_Memory_Open` repository directly. All your data, projects, and session history should be pushed to your own fork."

Wait for response. Store as `USER_REPO_URL`.

> **AI Instructions:** Validate that the provided URL:
> - Is NOT `https://github.com/Qosil/AI_Memory_Open` (reject and re-ask if it is — explain they must use their own fork)
> - Looks like a valid GitHub URL (contains `github.com/`)

### Step 1.3: Update Master-AI-Context.md

> **AI Instructions:** Open `Master-AI-Context.md` and update:
> - `System Owner:` line → `{OWNER_NAME} ({OWNER_EMAIL})`
> - If `OWNER_ORG` was provided, add an `Organization:` line below System Owner
> - `Repository:` line → `{USER_REPO_URL}`

Do NOT modify any other content in Master-AI-Context.md at this stage.

### Step 1.4: Update agents/open.md and agents/closure.md

> **AI Instructions:** Update the canonical repo references in both agent files:
> - In `agents/open.md`, update the repo URL in Step 0 (Sync AI Memory from Git) to `{USER_REPO_URL}`
> - In `agents/closure.md`, update the repo URL in Step 10 (Push AI Memory to Git) to `{USER_REPO_URL}`
> - In `README.md`, update the `Repository:` line to `{USER_REPO_URL}`

---

## Step 2: Platform & API Key Registration

> **AI Instructions:** This step builds the user's `keys.txt` file. This file stores API credentials for all platforms the user works with. It is `.gitignore`'d by default to prevent credential leakage.

### Step 2.1: Hosting Providers

> **AI Instructions:** Ask the user:

> "Do you use any **hosting or infrastructure providers**? Select all that apply, or say 'none':
>
> - **Hetzner** — VPS, dedicated servers, cloud
> - **AWS** — Amazon Web Services
> - **GCP** — Google Cloud Platform
> - **Azure** — Microsoft Azure
> - **DigitalOcean** — Cloud droplets and managed services
> - **Fly.io** — Edge deployment platform
> - **Vercel** — Frontend/serverless deployment
> - **Netlify** — Frontend deployment and serverless functions
> - **Railway** — Full-stack deployment
> - **Render** — Web service hosting
> - **Other** — Please specify
>
> For each provider you use, I'll ask for API keys or tokens. These are stored locally in a `keys.txt` file and are never committed to git."

Wait for response. Store as `HOSTING_PROVIDERS` (list).

For each selected provider, ask:

> "Please provide your **{PROVIDER_NAME}** API key/token. If you have multiple keys (e.g., separate tokens for different projects), provide all of them with a label for each.
>
> You can also say 'skip' if you'd prefer to add this later."

Store each credential as `{PROVIDER}_KEY_{N}`.

### Step 2.2: Google Workspace

> **AI Instructions:** Ask the user:

> "Do you use **Google Workspace** (Gmail, Google Drive, Google Calendar, etc.) for business?
>
> If YES:
> - Do you have OAuth Client credentials (Client ID + Client Secret) for API access?
> - Do you have a Gemini API key?
>
> If NO, skip to the next question."

Wait for response. Store as `GOOGLE_ENABLED`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GEMINI_KEY`.

### Step 2.3: Enterprise Operating System

> **AI Instructions:** Ask the user:

> "Do you use an **enterprise operating system** — a platform that manages your CRM, project management, finance, or support? Select one (or 'none'):
>
> - **Zoho One** — CRM, Projects, Books, Desk, Sign, Campaigns (recommended — AI Memory has a pre-built Zoho MCP connector)
> - **Odoo** — All-in-one ERP and business suite
> - **Salesforce** — CRM and enterprise platform
> - **HubSpot** — CRM, marketing, and sales platform
> - **Jira / Atlassian** — Project management and issue tracking
> - **Monday.com** — Work management platform
> - **Notion** — Workspace and knowledge management
> - **ClickUp** — Project management and productivity
> - **Airtable** — Spreadsheet-database hybrid
> - **Trello** — Kanban-based project management
> - **Asana** — Work management and project tracking
> - **Linear** — Issue tracking for engineering teams
> - **Other** — Please specify
>
> This helps me configure integrations and tailor the operating standard to your workflow."

Wait for response. Store as `ENTERPRISE_OS`.

**If `ENTERPRISE_OS` is NOT 'none':**

Ask for relevant API credentials:

> "Please provide your **{ENTERPRISE_OS}** API credentials:
> - **Client ID** (if applicable)
> - **Client Secret** (if applicable)
> - **API Key/Token** (if applicable)
> - **Portal/Organization ID** (if applicable)
>
> Say 'skip' for any you'd like to add later."

Store all credentials.

**If `ENTERPRISE_OS` is 'Zoho One':**

> **AI Instructions:** Note that AI Memory ships with a pre-built Zoho MCP connector at `zoho-mcp-server/`. Inform the user:

> "Great news — AI Memory includes a pre-built **Zoho MCP Server** (`zoho-mcp-server/`) that connects to Zoho CRM, Projects, Books, Desk, Sign, and Campaigns. I'll configure it with the credentials you provided.
>
> The CC/DE Operating Standard is already optimized for Zoho workflows (CRM tagging taxonomy, project tracking, financial controls via Zoho Books). You're all set."

**If `ENTERPRISE_OS` is NOT 'Zoho One' and NOT 'none':**

> **AI Instructions:** Offer to create an MCP server project:

> "AI Memory's operating standard references Zoho CRM for contact tracking and project management, but you're using **{ENTERPRISE_OS}** instead. Would you like me to:
>
> **Option A:** Create an **MCP Server connector** for {ENTERPRISE_OS} as your first project? This would be a software project staged through the staging protocol, producing an integration server similar to the existing `zoho-mcp-server/`.
>
> **Option B:** Skip the connector for now and proceed with your actual first project. You can always build the connector later.
>
> Note: If you choose Option A, I'll adjust the CC/DE Operating Standard references from Zoho to {ENTERPRISE_OS} where applicable."

Wait for response. Store as `CREATE_MCP_PROJECT` (true/false). If true, also store `MCP_PROJECT_NAME` = `{enterprise_os_lowercase}-mcp-server`.

### Step 2.4: Communication & Messaging Platforms

> **AI Instructions:** Ask the user:

> "Do you use any **communication or messaging platforms** that you'd like AI to integrate with? Select all that apply, or say 'none':
>
> - **Slack** — Team messaging
> - **Discord** — Community and team chat
> - **WhatsApp Business** — Customer messaging
> - **Telegram** — Messaging and bots
> - **Microsoft Teams** — Enterprise messaging
> - **Other** — Please specify"

Wait for response. For each selected, ask for API tokens/webhook URLs. Store credentials.

### Step 2.5: Developer Tools

> **AI Instructions:** Ask the user:

> "Do you use any of the following **developer or productivity tools**?
>
> - **GitHub** — Code hosting and version control
> - **GitLab** — Code hosting and CI/CD
> - **Bitbucket** — Code hosting
> - **Stripe** — Payment processing
> - **Resend / SendGrid / Mailgun** — Email delivery
> - **Twilio** — SMS and voice
> - **OpenAI** — GPT API access
> - **Anthropic (Claude)** — Claude API access
> - **Figma** — Design tool
> - **Other** — Please specify
>
> For each, I'll ask for API keys."

Wait for response. Collect credentials for each selected tool.

### Step 2.6: Generate keys.txt

> **AI Instructions:** Using ALL credentials collected in Steps 2.1–2.5, generate a `keys.txt` file at the root of AI_Memory_Open following this format:

```
#{PROVIDER_NAME}:

{Key Label}: {Key Value}

```

Example:

```
#Hetzner:

API Token: abc123def456...

#GitHub:

Token: ghp_xxxxxxxxxxxxx

#Zoho:

Client ID: 1000.XXXXXXXXX
Client Secret: xxxxxxxxxxxxxxxx

#Claude:

API Key: sk-ant-api03-xxxxxxxxxxxxx
```

**Important:**
- Use `#` prefix for section headers (provider names)
- One blank line between sections
- Label each key clearly
- Filename should be `{OWNER_NAME_FIRST}Keys.txt` (e.g., `JohnKeys.txt`) to match the existing convention
- Verify `.gitignore` includes the keys file pattern. If not, add `*Keys.txt` and `keys.txt` to `.gitignore`.

After generating, inform the user:

> "Your API keys have been saved to `{filename}` in the AI Memory root. This file is excluded from git via `.gitignore` so your credentials will never be committed to the repository.
>
> **Security note:** If you use GPG encryption, you can encrypt this file with `gpg -c {filename}` to create a `{filename}.gpg` backup. The encrypted version IS safe to commit."

---

## Step 3: AI Model Preferences

> **AI Instructions:** Ask the user:

> "Which **AI models** do you work with? Select all that apply:
>
> - **Claude** (Anthropic) — Opus, Sonnet, Haiku
> - **GPT** (OpenAI) — GPT-4o, GPT-4, o1, o3
> - **Gemini** (Google) — Pro, Ultra, Flash
> - **Llama** (Meta) — Local or hosted
> - **Mistral** — Local or hosted
> - **Other** — Please specify
>
> Also:
> - Which model is your **primary** (most-used) model?
> - Do you have a preferred model for **code generation**?
> - Do you have a preferred model for **writing and communication**?
> - Do you have a preferred model for **analysis and research**?"

Wait for response. Store as `AI_MODELS`, `PRIMARY_MODEL`, `CODE_MODEL`, `WRITING_MODEL`, `ANALYSIS_MODEL`.

### Step 3.1: Update Master-AI-Context.md with AI Preferences

> **AI Instructions:** Add a new section to `Master-AI-Context.md` after the "CRM Integration" section:

```markdown
## 8. AI Model Preferences

| Purpose | Model | Notes |
|---------|-------|-------|
| Primary | {PRIMARY_MODEL} | Default for most tasks |
| Code Generation | {CODE_MODEL} | Used for software development sessions |
| Writing & Communication | {WRITING_MODEL} | Used for content, messaging, documentation |
| Analysis & Research | {ANALYSIS_MODEL} | Used for research, data analysis, decision support |

**All Available Models:** {comma-separated list of AI_MODELS}

**API Keys:** Stored in `{OWNER_NAME_FIRST}Keys.txt` (git-ignored). AI assistants requiring API access should reference that file.
```

---

## Step 4: Standards & Policy Customization

> **AI Instructions:** Present the following to the user:

> "AI Memory ships with two governing standards that apply to ALL projects:
>
> 1. **CC/DE Operating Standard v2.0** — Centralized Command, Decentralized Execution. This governs project management, financial controls, agent network management, CRM contact tracking, reporting cadences, and decision-making authority.
>
> 2. **Adaptive Communication Standard (ACS) v1.0** — This governs message composition, stakeholder management, DISC/OCEAN behavioral profiling, information delivery pacing, channel selection, and difficult news delivery.
>
> Both are located in the `Standards and Policy/` folder at the AI Memory root.
>
> Would you like to:
>
> **A)** Use them as-is (recommended for most users — they're comprehensive and battle-tested)
>
> **B)** Review and customize them now (I'll walk you through the key sections and ask what you'd like to change)
>
> **C)** Skip for now and customize later (you can always modify them in future sessions)"

Wait for response. Store as `STANDARDS_CHOICE`.

**If `STANDARDS_CHOICE` is B (customize):**

> **AI Instructions:** Read both standards files. Walk the user through the following key customization points one at a time:

**CC/DE Operating Standard customization points:**

> "Let's walk through the key configuration points in the CC/DE Operating Standard:
>
> 1. **Reporting Cadence** (Section 3) — Currently set to weekly text exchanges and quarterly written email reviews. Would you like a different cadence? Options: daily standup, weekly video call, weekly text exchange, biweekly, monthly. And for quarterly reviews: video call, written email, in-person.
>
> 2. **Financial Controls** (Section 4) — Currently sets thresholds for agent spending authority. Do you want to configure specific dollar thresholds for approval levels?
>
> 3. **CRM Tagging Taxonomy** (Section 7) — Currently configured for Zoho CRM with Project, Role, Specialty, and Geographic tags. Would you like to modify the tag categories or adapt them for your CRM platform ({ENTERPRISE_OS})?
>
> 4. **Decision Authority Matrix** (Section 5) — Defines which decisions agents can make autonomously vs. which require human approval. Would you like to adjust the authority levels?"

For each customization point, wait for the user's response and apply changes to the root copy of the standard. If changes are made, note them for propagation to future projects.

**ACS Communication Standard customization points:**

> "Now let's review the Adaptive Communication Standard:
>
> 1. **Default Communication Channel** — What's your preferred channel for AI-to-human communication? (e.g., Slack, email, in-app, Discord)
>
> 2. **Communication Style Preferences** — The standard supports adapting to DISC behavioral styles. Do you have a known DISC profile? (If not, the AI will observe and adapt over time.)
>
> 3. **Information Density** — Do you prefer concise bullet-point summaries or detailed narrative explanations?"

Apply changes to the root copy.

After all customizations (or if user chose A or C), confirm:

> "Standards configuration complete. The root copies in `Standards and Policy/` are the authoritative versions. When you create projects, each project will receive its own copy of these standards, and changes to the root copies will propagate to all projects."

---

## Step 5: Stage Your First Project

> **AI Instructions:** Present the following to the user:

> "Your AI Memory system is now configured! Here's a summary of what we set up:
>
> | Component | Status |
> |-----------|--------|
> | System Owner | {OWNER_NAME} ({OWNER_EMAIL}) |
> | API Keys | {N} platforms registered in `{OWNER_NAME_FIRST}Keys.txt` |
> | Enterprise OS | {ENTERPRISE_OS or 'None'} |
> | AI Models | Primary: {PRIMARY_MODEL} |
> | Standards | {Customized / Default / Deferred} |
>
> **What happens next?**
>
> AI Memory uses a **3-step project lifecycle**:
>
> 1. **Setup** (this protocol — `setup-AI-Memory.md`) — ✅ Complete! You just did this.
> 2. **Staging** (`staging.md`) — The ideation and planning phase. You and the AI collaborate to develop the project context, architecture, and release plan. Think of it as a "design sprint" that produces the inputs for full initialization.
> 3. **Initialization** (`PROJECT_MEMORY_INIT.md`) — The full project build. The AI takes the documents produced during staging and autonomously constructs the complete project memory folder with all files, directories, and protocols.
>
> **Ready to stage your first project?**
>
> Say **'yes'** and I'll start the staging protocol (`staging.md`).
> Say **'not yet'** and I'll close out this setup session. You can stage a project anytime by saying 'execute staging.md' in any future session."

**If `CREATE_MCP_PROJECT` is true (from Step 2.3):**

> **AI Instructions:** Before asking about the first project, remind the user:

> "You also indicated you'd like to create an MCP connector for **{ENTERPRISE_OS}**. Would you like that to be your first staged project, or would you prefer to stage a different project first?"

Wait for response.

**If user says 'yes' to staging:**

> **AI Instructions:** Execute `staging.md` — the staging protocol. Pass along any context gathered during this setup (owner info, enterprise OS, AI models, etc.) so the staging protocol can pre-fill where appropriate.

**If user says 'not yet':**

> **AI Instructions:** Proceed to Step 6 (Session Closure).

---

## Step 6: Session Closure

> **AI Instructions:** Whether or not the user chose to stage a project, execute the following closure steps:

### 6.1: Create Initial Session Summary

Create `session-summary/AI-Session-Summary-[YYYY-MM-DD]_[HHMM].md` documenting:
- What was configured (owner, keys, models, standards)
- Any standards customizations made
- Whether a project was staged
- Duration of setup

### 6.2: Create Initial Decision Log

Create `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md` documenting:
- Enterprise OS choice and rationale
- AI model selections
- Standards customization decisions (or decision to use defaults)
- MCP connector project decision (if applicable)

### 6.3: Update Key-Decisions.md

Add entries to the keyword index for each decision made during setup.

### 6.4: Update Sessions.md

Add the setup session to the session index.

### 6.5: Update NextSteps.md

Populate the priority queue with:
- Any deferred customizations (standards, keys)
- MCP connector project (if user chose to create one but deferred)
- First project staging (if user chose 'not yet')
- CRM setup tasks (if enterprise OS was selected)
- Contact profile creation (first contacts to add)

### 6.6: Update Master-AI-Context.md

- Add session history references
- Ensure directory structure diagram is current
- Update project portfolio table (if a project was staged)

### 6.7: Update agents/open.md Live Workspace Index

- Update Recent Projects, Staging Projects, and Root Directory File Index sections

### 6.8: Git Commit

```bash
cd <path-to-AI_Memory_Open>
git add .
git commit -m "Initial AI Memory setup: owner={OWNER_NAME}, enterprise_os={ENTERPRISE_OS}"
git remote set-url origin {USER_REPO_URL}
git push origin main
```

> **CRITICAL:** The `git remote set-url` command ensures pushes go to the user's fork, NOT to the upstream `Qosil/AI_Memory_Open`. This is essential — the upstream repo is a read-only template.

If in Cowork (sandbox), remind the user:

> "I can't push to git from this environment. Please run the following to save your setup:
> ```bash
> cd AI_Memory_Open
> git remote set-url origin {USER_REPO_URL}
> git add .
> git commit -m 'Initial AI Memory setup: owner={OWNER_NAME}, enterprise_os={ENTERPRISE_OS}'
> git push origin main
> ```"

### 6.9: Final Message

> "**AI Memory setup is complete!** 🎉
>
> Here's what you need to know going forward:
>
> - **To start any session:** Say 'execute agents/open.md' (or the AI will detect it automatically)
> - **To stage a new project:** Say 'execute staging.md'
> - **To initialize a fully planned project:** Say 'execute PROJECT_MEMORY_INIT.md'
> - **To modify standards or policies:** Edit files in `Standards and Policy/` and propagate to all projects
> - **To add API keys:** Edit `{OWNER_NAME_FIRST}Keys.txt` directly
>
> Your AI Memory system is ready. Every session from here forward will be tracked, every decision logged, and every project structured for seamless AI handoffs."

---

## Appendix: Files Modified by This Protocol

| File | Action | Purpose |
|------|--------|---------|
| `Master-AI-Context.md` | Updated | Owner info, repo URL, AI model preferences |
| `README.md` | Updated | Repository URL |
| `agents/open.md` | Updated | Canonical repo URL, Live Workspace Index |
| `agents/closure.md` | Updated | Canonical repo URL |
| `{Name}Keys.txt` | Created | API key storage |
| `.gitignore` | Verified/Updated | Ensure keys file is excluded |
| `Standards and Policy/CCDE-Operating-Standard.md` | Optionally modified | User customizations |
| `Standards and Policy/Communication-Standard.md` | Optionally modified | User customizations |
| `session-summary/AI-Session-Summary-*.md` | Created | Setup session record |
| `decisions-learnings/Key-Decisions-*.md` | Created | Setup decisions record |
| `Key-Decisions.md` | Updated | Decision keyword index |
| `Sessions.md` | Updated | Session keyword index |
| `NextSteps.md` | Updated | Priority queue seeded |
| `agents/open.md` | Updated | Live Workspace Index refreshed |

---

## Appendix: The 3-Step Project Lifecycle

```
┌─────────────────────────────┐
│  setup-AI-Memory.md         │  ← ONE-TIME: System configuration
│  (This file — run once)     │     Owner, keys, models, standards
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  staging.md                 │  ← PER-PROJECT: Ideation & planning
│  (Run for each new project) │     Context doc, architecture, release plan
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  PROJECT_MEMORY_INIT.md     │  ← PER-PROJECT: Full build
│  (Run after staging)        │     Autonomous folder/file construction
└─────────────────────────────┘
```

**Staging is where ideation happens.** The staging protocol (`staging.md`) is a collaborative "design sprint" where the user and AI develop three key documents: Project Context, Architecture/Design, and Release Plan. These documents become the inputs for `PROJECT_MEMORY_INIT.md`, which autonomously builds the full project memory structure.

**You don't need all three documents to start staging.** Staging is iterative — you can start with just a project name and vision, and the AI will help you develop the rest through conversation across one or more sessions.

---

*This file runs once and only once. After initial setup, all future sessions begin with `agents/open.md`.*

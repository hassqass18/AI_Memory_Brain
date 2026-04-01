# Session Initialization Protocol — SierraHomes_AmericanDream

**Protocol:** open.md
**Project:** SierraHomes_AmericanDream
**Version:** 1.1
**Last Updated:** 2026-03-31

---

## Purpose

This protocol initializes a new AI working session for SierraHomes_AmericanDream. Execute at the start of every session before performing any project work. Ensures full context is loaded, session is logged, and the AI is ready to execute.

---

## Step 0 — Sync Project Files from Git

Before doing anything else, pull the latest context:

```bash
cd <path-to-AI_Memory_Brain>
git pull origin main
```

- The canonical repo is **https://github.com/hassqass18/AI_Memory_Brain**
- If you are in Cowork, the folder is already mounted — confirm files are current.
- If the repo has not been cloned yet: `git clone https://github.com/hassqass18/AI_Memory_Brain.git`

---

## Step 1 — Load Tier 1 Context (Always)

Read the following files in order before proceeding:

1. `Master-AI-Context.md` — Project overview, conventions, execution model, current phase
2. `Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md` — Building design, financials, construction model
3. `NextSteps.md` — Prioritized roadmap and immediate actions

> These three files are the minimum required context for any session. Do not skip.

---

## Step 2 — Read Standards & Policy (Mandatory)

Read both standards before any session that involves operational decisions, communications, or contact engagement:

1. `Standards and Policy/CCDE-Operating-Standard.md` — CC/DE v2.0. **Consult before:** any operational decision, milestone gate, governance change, or CRM action.
2. `Standards and Policy/Communication-Standard.md` — ACS v1.0. **Consult before:** composing any significant message, investor communication, or external engagement.

> Scan at index level. Drill into specific sections when your task matches.

---

## Step 3 — Check Contacts

Before working with or communicating about any external party (investor, contractor, agent, buyer):

- Check `contacts/` folder for an existing contact profile.
- If no profile exists and the person is recurring, note it as a task to create one.
- Template: `contacts/_PROFILE-TEMPLATE.md`

---

## Step 4 — Check Session Index & Recent History

1. Read `Sessions.md` — scan the index to understand what was last worked on.
2. Read the **two most recent** files in `session-summary/` (sorted by filename date) — read the actual content to understand what was completed and what's pending.

---

## Step 5 — Check Phase Status & Risk

1. Read `Product_Development/Releases/SierraHomes-phase1-pre-launch.md` (current active phase)
2. Note overall phase completion percentage and any open stories
3. Read `Product_Development/Releases/Bugs.md` — note open change count only (no deep read required unless a change is being actioned)
4. Read `Risk-Registry.md` — scan all active risks before beginning work

---

## Step 6 — Tier 2 Index Scan (Selective)

Check the following — drill down into detail files **only** if the current task matches:

| Index | Drill Down When |
|-------|----------------|
| `Key-Decisions.md` | Task involves a previously decided topic (pricing, financing, legal structure, etc.) |

---

## Step 7 — Load Relevant Advisor Agents

Based on what you're working on today, read the relevant advisor files:

| Domain | Agent File |
|--------|-----------|
| Financial modelling | `Finance/agents/Finance-advisor.md` |
| Investment / funding | `Finance/agents/Investment-advisor.md` |
| Construction programme | `PMO/agents/PMO-advisor.md` |
| Legal / regulatory | `Legal/agents/Legal-advisor.md` |
| Sales / leasing | `Sales/agents/Sales-advisor.md` |
| Marketing | `Marketing/agents/Marketing-advisor.md` |
| Strategy | `Executive/agents/Strategy-advisor.md` |
| Operations | `Operations/agents/Operations-advisor.md` |

---

## Step 8 — Announce Session Ready

Output a session-ready confirmation in this format:

```
## Session Open — SierraHomes_AmericanDream
**Date:** [Today's date]
**Phase:** [Current phase name and completion %]
**Last Session:** [Date and one-line summary from Sessions.md]
**Open Changes:** [Count from Bugs.md]
**Active Risks:** [Count from Risk-Registry.md]
**Immediate Priority:** [Top item from NextSteps.md]
**Ready:** ✅
```

---

## Step 9 — Create Live Session Files

Create **both** of the following files immediately. Update them incrementally throughout the session:

**a) Session Summary:** `session-summary/AI-Session-Summary-YYYY-MM-DD_HHMM.md`

```markdown
# Session Summary — SierraHomes_AmericanDream
**Date:** YYYY-MM-DD
**Time:** HH:MM
**Operator:** [AI model name]
**Session Type:** [Work session / Review / Planning]

## Objective
[One sentence — what this session is trying to accomplish]

## Tasks Executed
- [Task 1 — status]
- [Task 2 — status]

## Decisions Made
[List any decisions; reference Decision IDs if logged in Key-Decisions]

## Changes Made
[List all files created, edited, or deleted]

## Blockers
[Anything the Human must action before work can continue]

## Standards Sync Status
[If standards were referenced or modified, note here]

## Next Session Priority
[Top priority item for the next session]
```

**b) Decisions & Learnings:** `decisions-learnings/Key-Decisions-YYYY-MM-DD_HHMM.md`

```markdown
# Key Decisions & Learnings — YYYY-MM-DD HH:MM (SierraHomes_AmericanDream)

**Session:** [brief description]
**Operator:** [AI model name]

---

## Decisions
*(append immediately when decisions are made)*

## Learnings
*(append when failures, workarounds, or discoveries occur)*

---
*Live file — updated incrementally. Finalized by closure protocol.*
```

> Keep both files open and update them in real-time throughout the session. Do NOT wait until end of session.

---

## Step 10 — Await Instructions

Session is now initialized. Await the user's task instructions.

---

*SierraHomes_AmericanDream — Session Initialization Protocol v1.1*

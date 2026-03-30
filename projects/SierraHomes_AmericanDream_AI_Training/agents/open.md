# Session Initialization Protocol — SierraHomes_AmericanDream

**Protocol:** open.md
**Project:** SierraHomes_AmericanDream
**Version:** 1.0
**Last Updated:** 2026-03-29

---

## Purpose

This protocol initializes a new AI working session for SierraHomes_AmericanDream. Execute at the start of every session before performing any project work. Ensures full context is loaded, session is logged, and the AI is ready to execute.

---

## Step 1 — Load Tier 1 Context (Always)

Read the following three files in order before proceeding:

1. `Master-AI-Context.md` — Project overview, conventions, execution model, current phase
2. `Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md` — Building design, financials, construction model
3. `NextSteps.md` — Prioritized roadmap and immediate actions

> These three files are the minimum required context for any session. Do not skip.

---

## Step 2 — Check Session Index

Read `Sessions.md` — note the date and summary of the last session to understand what was last worked on.

---

## Step 3 — Check Phase Status

1. Read `Product_Development/Releases/SierraHomes-phase1-pre-launch.md` (current active phase)
2. Note overall phase completion percentage and any open stories
3. Read `Product_Development/Releases/Bugs.md` — note open change count only (no deep read required unless a change is being actioned)

---

## Step 4 — Tier 2 Index Scan (Selective)

Check the following index files — drill down into detail files **only** if the current task matches:

| Index | Drill Down When |
|-------|----------------|
| `Key-Decisions.md` | Task involves a previously decided topic (pricing, financing, legal structure, etc.) |
| `Risk-Registry.md` | Task touches a risk area (cash flow, permits, sales velocity, contractor, legal) |

---

## Step 5 — Announce Session Ready

Output a session-ready confirmation in this format:

```
## Session Open — SierraHomes_AmericanDream
**Date:** [Today's date]
**Phase:** [Current phase name and completion %]
**Last Session:** [Date and one-line summary from Sessions.md]
**Open Changes:** [Count from Bugs.md]
**Immediate Priority:** [Top item from NextSteps.md]
**Ready:** ✅
```

---

## Step 6 — Create Live Session Log

Create a new session log file at:
`session-summary/AI-Session-Summary-YYYY-MM-DD_HHMM.md`

Use this template:

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

## Next Session Priority
[Top priority item for the next session]
```

> Keep this file open and update it in real-time throughout the session.

---

## Step 7 — Await Instructions

Session is now initialized. Await the user's task instructions.

---

*SierraHomes_AmericanDream — Session Initialization Protocol v1.0*

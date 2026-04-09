# Session Closure Protocol — SierraHomes_AmericanDream

**Protocol:** closure.md
**Project:** SierraHomes_AmericanDream
**Version:** 1.0
**Last Updated:** 2026-03-29

---

## Purpose

This protocol closes a working session for SierraHomes_AmericanDream. Execute at the end of every session before disconnecting. Ensures all work is logged, decisions are recorded, master indexes are updated, and the next session can pick up without context loss.

---

## Step 1 — Complete Session Log

Open the live session log created during `open.md` (`session-summary/AI-Session-Summary-YYYY-MM-DD_HHMM.md`) and ensure all sections are complete:

- [ ] Objective — confirm it reflects what was actually done
- [ ] Tasks Executed — list all tasks with final status (✅ / ❌ / 🔄 In Progress)
- [ ] Decisions Made — list all decisions made this session
- [ ] Changes Made — list every file created, edited, or deleted (with full relative path)
- [ ] Blockers — anything the Human must action before work can continue
- [ ] Next Session Priority — top 1–3 items for next session

---

## Step 2 — Log Decisions

For every decision made this session:

1. Add an entry to `decisions-learnings/Key-Decisions-YYYY-MM-DD_HHMM.md` (create if it doesn't exist):

```markdown
## Decision: [Short title]
**ID:** KD-[sequential number]
**Date:** YYYY-MM-DD
**Made By:** [AI / Human / AI+Human]
**Area:** [Finance / Legal / Sales / Marketing / Operations / Architecture / Strategy]
**Decision:** [What was decided — 1–3 sentences]
**Rationale:** [Why]
**Impact:** [What this affects]
**Status:** Confirmed
```

2. Add a row to `Key-Decisions.md` index:

| ID | Date | Area | Summary | File |
|----|------|------|---------|------|
| KD-XX | YYYY-MM-DD | Area | One-line summary | `decisions-learnings/Key-Decisions-YYYY-MM-DD_HHMM.md` |

---

## Step 3 — Update Sessions Index

Add a row to `Sessions.md`:

| # | Date | Summary | Key Decisions | Session File |
|---|------|---------|--------------|-------------|
| [N] | YYYY-MM-DD | One-line summary of this session | KD-XX, KD-YY | `session-summary/AI-Session-Summary-YYYY-MM-DD_HHMM.md` |

---

## Step 4 — Update Phase Progress

1. Open `Product_Development/Releases/SierraHomes-phase1-pre-launch.md` (current phase)
2. Mark any stories completed this session as `✅ Complete`
3. Update the phase completion percentage at the top of the file
4. If any new changes/bugs were identified, log them in `Product_Development/Releases/Bugs.md`

---

## Step 5 — Update NextSteps.md

1. Remove or mark as complete any items that were actioned this session
2. Add any new priority items discovered during this session
3. Ensure the top item always reflects the most critical immediate action

---

## Step 6 — Update Master-AI-Context.md

Update Section 9 (Session History & Handover):
- `Latest Summary:` → Date and one-line summary of this session
- `Latest Decisions:` → List of Decision IDs from this session (e.g. KD-01, KD-02)

---

## Step 7 — Risk Check

If any risks were identified or existing risks changed status this session:
1. Open `Risk-Registry.md`
2. Update existing risk status or add new risk entry

---

## Step 8 — Human Handover

Output a session closure summary in this format:

```
## Session Closed — SierraHomes_AmericanDream
**Date:** [Today's date]
**Duration:** [Approximate]
**Tasks Completed:** [Count] ✅ | [Count] 🔄 In Progress | [Count] ❌ Blocked

**Files Changed:** [Count] files created/modified

**Decisions Logged:** [List Decision IDs]

**Action Required from Hassan:**
- [Item 1 — what Hassan must do manually]
- [Item 2]

**Next Session Priority:**
1. [Top priority]
2. [Second priority]

**Git Push Reminder:**
Run from your terminal: git push origin main
```

---

*SierraHomes_AmericanDream — Session Closure Protocol v1.0*

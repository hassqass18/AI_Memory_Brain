# LifeOS — Session Closure Protocol

**Purpose:** Execute this file at the end of every LifeOS staging session.

---

## Closure Steps

1. **Finalize Session Decision File:** Complete `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md` with all decisions and learnings from this session

2. **Update Key-Decisions.md:** Add new entries to the keyword index for all decisions made this session

3. **Update Sessions.md:** Add an entry for this session with keywords and a one-line summary

4. **Update NextSteps.md:** Update staging progress (check off completed sections), update blockers, set next actions

5. **Update Master-Context.md:** Update document status fields in the Staging Roadmap section if any documents moved forward

6. **Git Push:** Commit and push all changes:
   ```bash
   cd /path/to/AI_Memory_Brain
   git add projects/staging/LifeOS/
   git commit -m "LifeOS staging: [brief description of session work]"
   git push origin main
   ```

7. **Confirm Closure:** Report to Hassan what was accomplished, what files were updated, and what the next session should focus on

---

## Trigger Phrases

Run this protocol when the user says:
- "close staging session"
- "closure"
- "end session"
- "wrap up"

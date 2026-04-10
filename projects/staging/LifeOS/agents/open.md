# LifeOS — Session Initialization Protocol

**Purpose:** Execute this file at the start of every LifeOS staging session.

---

## Session Initialization Steps

1. **Read Master Context:** Read `Master-Context.md` to understand current staging status, domain scope, and which documents are in progress

2. **Check Indexes:** Scan `Key-Decisions.md` for decisions relevant to today's task. Check `Sessions.md` for prior session context.

3. **Check Progress:** Read `NextSteps.md` to understand where staging stands and what needs to happen next

4. **Read Two Most Recent Session Files:** Read the two most recent files in `decisions-learnings/` (sorted by date) to understand what was last worked on

5. **Load Relevant Agents:** Before starting work, identify which domain agents are relevant and read them:
   - Personal-Life agent: `Operations/agents/Personal-Life-AGENT.md` or `Operations/agents/Personal-Life-advisor.md`
   - PMO agent: `Executive/agents/PMO-AGENT.md` or `Executive/agents/PMO-advisor.md`
   - Finance agent: `Finance/agents/Finance-AGENT.md`
   - Other agents as needed per the task

6. **Create Live Session File:** Create `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md` immediately and update it throughout the session

7. **Summarize State:** Briefly confirm:
   - Current staging status (which documents are complete/in-progress)
   - What was done in the last session
   - What today's session will focus on

8. **Begin Work:** Don't modify files until this protocol is complete

---

## Trigger Phrases

Run this protocol when the user says:
- "open.md" (while in LifeOS context)
- "start LifeOS session"
- "initialize LifeOS"
- "continue staging LifeOS"

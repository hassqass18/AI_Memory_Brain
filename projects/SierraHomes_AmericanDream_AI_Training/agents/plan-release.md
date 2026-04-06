# Phase Planning Protocol — SierraHomes_AmericanDream

**Protocol:** plan-release.md
**Project:** SierraHomes_AmericanDream
**Version:** 1.0
**Last Updated:** 2026-03-29

---

## Purpose

This protocol plans and structures a new project phase (release) for SierraHomes_AmericanDream. Execute when transitioning between phases or when the current phase needs to be decomposed into actionable stories. Outputs a complete phase plan document with stories, owners, milestones, and success criteria.

---

## Phase Reference

| Phase | Name | Timeframe | Key Milestone |
|-------|------|-----------|--------------|
| 1 | Pre-Launch | Now – Q2 2026 | 20+ reservations before permit |
| 2 | Off-Plan Launch | Q3 2026 – Q2 2027 | 43 signed SPAs |
| 3 | Construction & On-Plan Sales | Q3 2027 – Aug 2029 | Topped out Q2 2028; Practical Completion Aug 2029 |
| 4 | Handover & Sell-Out | Aug 2029 – Aug 2030 | Full sell-out KES 1,751,000,000 |

---

## Step 1 — Load Full Context

Before planning, read:
1. `Master-AI-Context.md` — current phase status and conventions
2. `Product_Development/SierraHomes_Tower/SierraHomes_AmericanDream_architecture.md` — financials, milestones, build schedule
3. Current phase file in `Product_Development/Releases/` — understand what's complete and what's remaining
4. `NextSteps.md` — any items already flagged as priorities
5. `Risk-Registry.md` — active risks that affect planning

---

## Step 2 — Phase Assessment

Answer the following before drafting the plan:

1. **What phase are we planning?** (Phase 1 / 2 / 3 / 4)
2. **What is the current completion status of the previous/current phase?** (%)
3. **Are there any incomplete items from the previous phase that must carry over?**
4. **What are the top 3 risks for this phase?**
5. **What is the critical path milestone for this phase?**

---

## Step 3 — Draft Phase Plan

Create the file at: `Product_Development/Releases/SierraHomes-phase[N]-[name].md`

Use this template:

```markdown
# Phase [N] — [Phase Name]
**Project:** SierraHomes_AmericanDream
**Phase:** [N] of 4
**Status:** [Not Started / In Progress / Complete]
**Completion:** [0%]
**Timeframe:** [Start] – [End]
**Key Milestone:** [Primary success metric for this phase]
**Created:** YYYY-MM-DD

---

## Phase Objective

[2–3 sentence description of what this phase must achieve and why it matters to the overall project]

---

## Success Criteria

| # | Criterion | Target | Measurement |
|---|-----------|--------|-------------|
| 1 | [Key success metric] | [Target value] | [How measured] |
| 2 | ... | ... | ... |

---

## Stories

Stories follow the format: [ID] | [Domain] | [Title] | [Owner] | [Priority] | [Status]

### Domain: Finance
- [ ] **[Phase]-FIN-001** — [Story title]
  - **Owner:** [AI / Human / AI+Human]
  - **Priority:** High / Medium / Low
  - **Description:** [What needs to be done]
  - **Acceptance Criteria:** [How we know it's done]
  - **Status:** Not Started

### Domain: Legal
- [ ] **[Phase]-LEG-001** — [Story title]
  ...

### Domain: Marketing
- [ ] **[Phase]-MKT-001** — [Story title]
  ...

### Domain: Sales
- [ ] **[Phase]-SAL-001** — [Story title]
  ...

### Domain: Operations / PMO
- [ ] **[Phase]-OPS-001** — [Story title]
  ...

### Domain: Executive / Strategy
- [ ] **[Phase]-EXE-001** — [Story title]
  ...

---

## Milestones

| Milestone | Target Date | Status |
|-----------|------------|--------|
| [Key milestone 1] | [Date] | Not Started |
| [Key milestone 2] | [Date] | Not Started |

---

## Risks (Phase-Specific)

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| [Risk 1] | H/M/L | H/M/L | [Action] |

---

## Carry-Forward Items

Items from the previous phase that are incomplete and must be resolved in this phase:
- [Item] — [Source phase] — [Owner]

---

## Definition of Done

This phase is complete when:
1. All High-priority stories are ✅ Complete
2. Critical path milestone is achieved
3. All legal/financial obligations for this phase are fulfilled
4. Next phase plan is drafted and approved

---

*Phase [N] plan created YYYY-MM-DD. Updated by closure protocol after each session.*
```

---

## Step 4 — Story Prioritisation

For each domain, assign priorities using this logic:

- **High:** Blocks the critical path milestone or involves legal/financial commitment
- **Medium:** Important for phase success but has some schedule flexibility
- **Low:** Nice-to-have or can spill into the next phase without consequence

---

## Step 5 — Owner Assignment

Assign owners using the project execution model:

| Task Type | Owner |
|-----------|-------|
| Research, document generation, modelling, content | `[AI]` |
| Legal signings, financial transactions, site visits, regulatory submissions | `[Human]` |
| Sales pitch prep, deck final review, campaign execution | `[AI+Human]` |

---

## Step 6 — Update Master-AI-Context.md

After creating the phase plan, update Section 10 (Project Progress) in `Master-AI-Context.md`:
- Set the new phase to `In Progress`
- Update the phase file path reference

---

## Step 7 — Update NextSteps.md

Add the top 3–5 stories from the new phase plan to `NextSteps.md` as immediate actions.

---

## Step 8 — Confirm with Hassan

Output a phase plan summary:

```
## Phase [N] Plan — Ready for Review
**Phase:** [N] — [Name]
**Timeframe:** [Start] – [End]
**Total Stories:** [Count] ([High] High / [Medium] Medium / [Low] Low)
**AI Stories:** [Count] | **Human Stories:** [Count] | **AI+Human:** [Count]
**Critical Path Milestone:** [Milestone]
**Top 3 Immediate Actions:**
1. [Story ID] — [Title]
2. [Story ID] — [Title]
3. [Story ID] — [Title]
**Plan File:** Product_Development/Releases/SierraHomes-phase[N]-[name].md
```

Await Hassan's confirmation before marking the phase as active.

---

*SierraHomes_AmericanDream — Phase Planning Protocol v1.0*

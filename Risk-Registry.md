# Risk Registry — AI Memory System (Root Level)

> **SCOPE:** This file tracks risks to the **AI Memory system itself** — data integrity, standard compliance, infrastructure reliability, and cross-project coordination risks. This is NOT a project-level file. Project-specific risks live in each project's own `Risk-Registry.md`.

**Last Updated:** —

---

## Active Risks

| ID | Risk | Severity | Likelihood | Impact | Mitigation | Status |
|----|------|----------|------------|--------|------------|--------|
| R-ROOT-001 | Standards drift — local copies in project folders diverge from root-level master copies | High | Medium | Standards applied inconsistently across projects | Root copies are authoritative. When updating a standard, update root first, then propagate to all project `Standards and Policy/` folders. Closure protocol must verify sync. | Active |

---

## Risk Severity Guide

- **Critical:** Immediate threat to system integrity or data loss
- **High:** Significant impact on operational effectiveness if realized
- **Medium:** Manageable impact, but should be addressed within 1-2 sessions
- **Low:** Minor inconvenience, tracked for awareness

---

*This is a root-level system file. It tracks risks to the AI Memory system, NOT individual projects.*

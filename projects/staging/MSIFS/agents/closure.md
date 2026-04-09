# closure.md — Staging Session Closure Protocol
## MSIFS — Multinational Strategic Investment Funds

**Purpose:** Execute at the end of any session working on MSIFS fund formation and operations.

---

> **Prompt for AI:** "Execute the MSIFS staging session closure:
>
> 1. **Finalize Decision Log:** Review the session's `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md`. Ensure every decision has a rationale and every blocker is captured.
>
> 2. **Update Key-Decisions.md:** Add new rows for each decision topic from this session.
>
> 3. **Update Sessions.md:** Add a new row for this session with keywords and a one-sentence summary.
>
> 4. **Update NextSteps.md:** Mark completed items, add new priorities surfaced during the session.
>
> 5. **Update Master-Context.md:** Update fund formation status, LP pipeline, and any new document locations.
>
> 6. **Confirm Save:** Verify all files are saved. Remind user to push to GitHub:
>    ```bash
>    cd AI_Memory_Brain
>    git add .
>    git commit -m 'MSIFS staging: {brief description of session work}'
>    git push origin main
>    ```"

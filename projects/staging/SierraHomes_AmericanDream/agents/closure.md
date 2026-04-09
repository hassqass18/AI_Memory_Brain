# closure.md — Staging Session Closure Protocol
## SierraHomes_AmericanDream

**Purpose:** Execute at the end of any session working on SierraHomes_AmericanDream staging.

---

> **Prompt for AI:** "Execute the SierraHomes_AmericanDream staging session closure:
>
> 1. **Finalize Decision Log:** Review the session's `decisions-learnings/Key-Decisions-[YYYY-MM-DD]_[HHMM].md`. Ensure every decision has a rationale and every blocker is captured.
>
> 2. **Update Key-Decisions.md:** Add new rows for each decision topic from this session.
>
> 3. **Update Sessions.md:** Add a new row for this session with keywords and a one-sentence summary.
>
> 4. **Update NextSteps.md:** Mark completed items, update in-progress document sections, add any new blockers or open questions.
>
> 5. **Update Master-Context.md:** Update the Staging Roadmap status fields and any document sections that were developed this session.
>
> 6. **Confirm Save:** Verify all files are saved. Remind user to push to GitHub:
>    ```bash
>    cd AI_Memory_Brain
>    git add .
>    git commit -m 'SierraHomes staging: {brief description of session work}'
>    git push origin main
>    ```"

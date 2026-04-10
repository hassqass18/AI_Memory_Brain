# Provecta Group — Zoho Nurture Campaign Blueprint
**Last Updated:** 2026-04-10

## Live Zoho Campaigns Setup Status (as of 2026-04-10)

| Resource | Status | Key / ID |
|----------|--------|----------|
| Campaigns OAuth Token | ✅ Active | See `.env.production` → `ZOHO_CAMPAIGNS_REFRESH_TOKEN` |
| Campaigns API base URL | ✅ Confirmed | `https://campaigns.zoho.com/api/v1.1` (no `/json/` prefix) |
| "RevOps Prospects" list | ✅ Created | `3z0efbf2ee7068ec12ea9c34ff9363050d1600bf3feec9ce99688c87c79e6a2c3c` |
| "AI Prospects" list | ✅ Created | `3z1a248309983c8667a7c21bc43fdc99a4d6460c6ab817811bba430349cf97491e` |
| Nurture email sequences | ⬜ Pending | Build in Campaigns UI → Automation → Autoresponders |

---

---

## Architecture Overview

```
Form Submit → Netlify Function → Zoho CRM (Lead created)
                                       ↓
                              Workflow Rule fires (by Lead_Source)
                                       ↓
                    ┌──────────────────┴──────────────────┐
              "RevOps Audit"                         "AI Audit"
                    ↓                                     ↓
           RevOps Nurture Sequence                AI Nurture Sequence
           (Zoho Campaigns / CRM Email)          (Zoho Campaigns / CRM Email)
```

---

## Zoho CRM Setup

### Step 1: Create Custom Fields (Leads Module)
Go to: Zoho CRM → Settings → Modules → Leads → Fields

| Field Label           | API Name               | Type        | Values |
|-----------------------|------------------------|-------------|--------|
| Current CRM           | Current_CRM            | Single Line | — |
| Biggest Challenge     | Biggest_Challenge      | Multi-line  | — |
| Audit Type            | Audit_Type             | Picklist    | RevOps Audit, AI Audit |
| AI Adoption Level     | AI_Adoption_Level      | Single Line | — |
| AI Readiness Score    | AI_Readiness_Score     | Integer     | 0–21 |
| AI Readiness Tier     | AI_Readiness_Tier      | Picklist    | Tier 1–4 (see below) |
| Implementation Timeline | Implementation_Timeline | Single Line | — |

### Step 2: Create Two Workflow Rules
Go to: Zoho CRM → Settings → Workflow Rules → New Rule

**Rule 1: RevOps Audit Intake**
- Module: Leads | Trigger: Record Created
- Condition: Lead Source = "RevOps Audit"
- Action: Tag lead + Send email template (Day 0) + Add to Campaigns mailing list "RevOps Prospects"

**Rule 2: AI Audit Intake**
- Module: Leads | Trigger: Record Created
- Condition: Lead Source = "AI Audit"
- Action: Tag lead + Send email template (Day 0) + Add to Campaigns mailing list "AI Prospects"

---

## ICP Segmentation

### RevOps Audit ICP Tiers

| Tier | Role Signal | CRM Signal | Action |
|------|------------|------------|--------|
| Hot  | CRO / VP Sales | Salesforce / HubSpot | Priority — call within 24h |
| Warm | CEO / RevOps Mgr | Pipedrive / Monday | Standard nurture |
| Cool | Sales Manager / Other | Spreadsheet / None | Education-heavy nurture |

### AI Audit ICP Tiers (by Score)

| Tier | Score | Profile | Offer |
|------|-------|---------|-------|
| Tier 1 – AI-Ready    | 16–21 | Company-wide AI, structured data, deploying now | AMB Enterprise Implementation |
| Tier 2 – AI-Emerging | 10–15 | Growing adoption, some structure, 3–6 months | AMB Pilot Program |
| Tier 3 – AI-Aware    | 5–9  | Early adopters, scattered data, exploring | AMB Starter Kit + consulting |
| Tier 4 – AI-Unaware  | 0–4  | No AI yet, no data structure | Education sequence → discovery call |

---

## RevOps Audit Nurture Sequence

**Mailing List:** RevOps Prospects  
**Personalization variables:** {{First_Name}}, {{Current_CRM}}, {{Designation}}

### Day 0 — Immediate (Workflow-triggered CRM email)
**Subject:** `{{First_Name}}, your RevOps audit request is confirmed`
**Body:**
> Thanks for requesting a RevOps audit. In the next 24–48 hours, I'll review what you shared about your {{Current_CRM}} setup and your challenge around [Biggest_Challenge].
> I'll come back to you with a short video walkthrough of what I'm seeing and 3 quick wins specific to your setup.
> — Hassan Wilson, Provecta Group

---

### Day 2 — CRM-Specific Insight (Zoho Campaigns)
**Subject (Salesforce leads):** `The #1 RevOps gap Salesforce teams ignore`  
**Subject (HubSpot leads):** `Why HubSpot deals stall — and how to fix it`  
**Subject (Other):** `The RevOps gap most {{Designation}}s don't see until it's too late`

**Body theme:** 1 insight directly relevant to their CRM + a real example. Soft CTA: "Does this sound familiar?"

---

### Day 5 — Social Proof + Relevance
**Subject:** `How [similar company] went from broken pipeline to 40% forecast accuracy`

**Body theme:** Mini case study (use Ecotecture/SierraHomes anonymized if needed). Frame around the challenge they mentioned. CTA: "Want to see if this applies to your setup?"

---

### Day 8 — The Audit Delivery + CTA
**Subject:** `{{First_Name}} — here's what I found in your RevOps setup`

**Body theme:** Deliver 3 specific observations based on their form answers. Frame as audit findings. CTA: **"Book a 30-min RevOps Roadmap call"** (Calendly link)

---

### Day 14 — Follow-up if no call booked
**Subject:** `Still thinking it over?`

**Body theme:** Low-pressure. "A lot of {{Designation}}s I talk to are juggling 10 things — I get it. Whenever you're ready, the roadmap call is open." CTA: Same Calendly link

---

### Day 21 — Value-add + soft close
**Subject:** `One RevOps resource before I close your file`

**Body theme:** Share the Provecta RevOps SOP excerpt or a relevant framework. "This is the same framework I use in client engagements." CTA: "If you want me to walk you through how to apply it to {{Company}}, let's talk."

---

## AI Audit Nurture Sequence

**Mailing List:** AI Prospects  
**Personalization variables:** {{First_Name}}, {{AI_Readiness_Tier}}, {{Company}}, {{Implementation_Timeline}}

### Day 0 — Score Delivery (Workflow-triggered CRM email)
**Subject:** `{{First_Name}}, your AI Readiness score is in`

**Tier 1 body:**
> Your score puts {{Company}} in the top tier of AI-ready organizations. You have the infrastructure — what most companies like yours are missing is the memory layer that makes AI compound. That's exactly what AI Memory Brain solves.

**Tier 2 body:**
> {{Company}} is in the AI-Emerging stage — you're ahead of 70% of companies your size. The next move is consolidating your AI usage into a structured memory system before the fragmentation gets worse.

**Tier 3 body:**
> {{Company}} is AI-Aware — you see the value, but haven't connected the dots yet. Most companies at your stage need 1 structured implementation to unlock the compounding returns from AI.

**Tier 4 body:**
> Most companies haven't started yet — so you're not behind. But the companies that move in the next 6 months will have a 12–18 month head start. Here's the lowest-risk way to begin.

---

### Day 3 — "What companies at your stage do next"
**Subject:** `What {{AI_Readiness_Tier}} companies do next`

**Body theme:** Concrete next steps mapped to their tier. 3-bullet action list. Frame Provecta/AMB as the implementation partner. CTA: "Does this match where {{Company}} is headed?"

---

### Day 7 — AMB Demo / Deep Dive
**Subject:** `How AI Memory Brain works (3-min overview)`

**Body theme:** Short walkthrough of AMB in plain language. What it does, how it's deployed, what it replaces. Include a screenshot or diagram if available. CTA: "Want a custom AMB architecture for {{Company}}?"

---

### Day 12 — ROI Framing + Offer
**Subject:** `What's a broken AI strategy actually costing {{Company}}?`

**Body theme:** Frame the cost of fragmented AI (time lost, inconsistent outputs, no institutional memory). Introduce AMB as the solution with pricing framing. CTA: **"Book a free AI Strategy Session"**

---

### Day 18 — Barrier-specific follow-up
**Subject (if barrier = budget):** `Starting AMB doesn't require a big budget`  
**Subject (if barrier = time):** `AMB implementation takes 2 weeks, not 6 months`  
**Subject (default):** `Still thinking about AI for {{Company}}?`

**Body theme:** Address the specific barrier they indicated in q5. Offer a lower-commitment entry point (starter kit, 1-hour session, etc.)

---

### Day 25 — Final value drop
**Subject:** `Last one from me, {{First_Name}}`

**Body theme:** Drop the AI Memory Brain white paper or a resource. "Whether or not we work together, this should be useful." No hard sell. Leave the door open gracefully.

---

## Zoho Campaigns Setup

### Mailing Lists to Create
1. `RevOps Prospects` — all RevOps Audit leads
2. `AI Prospects` — all AI Audit leads
3. `Hot Leads` — Tier 1 AI + Hot RevOps (for priority follow-up)

### Autoresponder Sequences
- Create one **Autoresponder** per mailing list in Zoho Campaigns
- Set delays to match the Day schedule above
- Use **Dynamic Content** blocks to personalize by Tier/CRM/Role

### Tags to Apply in Zoho CRM
- `revops-audit-inbound` — all RevOps form submissions
- `ai-audit-inbound` — all AI assessment completions
- `tier-1-ai` through `tier-4-ai` — based on AI score
- `hot-revops` — CRO/VP Sales + Salesforce/HubSpot combo
- `priority-follow-up` — manual tag for Hassan to add after reviewing

---

## Environment Variables (Netlify)

Set these in Netlify Dashboard → Site Settings → Environment Variables:

| Variable              | Value |
|-----------------------|-------|
| `ZOHO_CLIENT_ID`      | From Zoho API Console |
| `ZOHO_CLIENT_SECRET`  | From Zoho API Console |
| `ZOHO_REFRESH_TOKEN`  | From `zoho-mcp-server` setup (`.zoho-tokens.json`) |
| `ZOHO_DATA_CENTER`    | `com` (US) |

---

## File Deployment Checklist

- [ ] Copy `netlify/functions/` folder into the provecta-website root (alongside `index.html`)
- [ ] Apply HTML patches from `html-form-patch.js` to `provecta-website.html`
- [ ] Set 4 environment variables in Netlify dashboard
- [ ] Create custom CRM fields in Zoho (table above)
- [ ] Create 2 Workflow Rules in Zoho CRM
- [ ] Create 3 Mailing Lists in Zoho Campaigns
- [ ] Set up Autoresponder sequences in Zoho Campaigns
- [ ] Test both forms → verify leads appear in Zoho CRM with correct Lead_Source
- [ ] Run DNSChecker on sierrausahomes.com + pgco.world after DNS update

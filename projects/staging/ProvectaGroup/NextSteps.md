# Next Steps — ProvectaGroup

**Project:** Provecta Group (Consulting & Operations Firm)
**Owner:** Hassan Wilson — Founder & Managing Director
**Current Stage:** Active Operations
**Last Updated:** 2026-04-10

---

## Immediate Priorities

- [ ] **Zoho CRM — Workflow Rule (manual):** API v9 required; create via UI: Settings → Automation → Workflow Rules → + New Rule
  - Module: Leads | Trigger: Record Created | Condition: Lead Source = "RevOps Audit"
  - Actions: (a) Tag: `revops-audit-inbound` (b) Task: "RevOps Audit — Review & Score Lead" (Due: 1 day, Priority: High) (c) Email: Day 0 template
- [ ] **Zoho CRM — Day 0 Email Template:** Settings → Templates → + New Template. Subject: "{{First_Name}}, your RevOps audit is in". Body: see `zoho-integration/NURTURE-CAMPAIGNS.md`
- [x] **Zoho Campaigns — OAuth Token generated** (2026-04-10). Scopes: `ZohoCampaigns.campaign.ALL ZohoCampaigns.contact.ALL`. Stored in `keys.md` and `.env.production`.
- [x] **Zoho Campaigns — "RevOps Prospects" list created** (2026-04-10). List key: `3z0efbf2ee7068ec12ea9c34ff9363050d1600bf3feec9ce99688c87c79e6a2c3c`.
- [x] **Zoho Campaigns — "AI Prospects" list created** (2026-04-10). List key: `3z1a248309983c8667a7c21bc43fdc99a4d6460c6ab817811bba430349cf97491e`.
- [ ] **Zoho Forms — Build Audit Form:** Build 39-question form per `RevOps_Audit_Zoho_Blueprint_v1.docx`. Integrate to CRM Leads module. Set hidden field: Lead_Source = "RevOps Audit".
- [ ] **Deploy Updated Netlify Function:** Push `zoho-integration/netlify/functions/revops-audit.js` (now maps all 39 fields) to Netlify. Set env vars: ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN.
- [ ] **Stripe:** Wire Blueprint modal on AI Memory Brain landing page to Stripe (needs Stripe publishable key + checkout session)
- [ ] **LinkedIn posts:** Publish AI Memory Brain launch content
- [x] **Nurturing sequences — RevOps (5 emails / 21 days):** Branded HTML templates complete. Mobile + tablet optimized. File: `zoho-integration/revops-nurture-emails-branded.html`. Sender: hassan.qaseem@gc-usa.com (pending verification — use hassanrqaseem@gmail.com as placeholder). Upload manually to Zoho Campaigns workflow MESSAGE blocks.
- [x] **Nurturing sequences — AI Audit (6 emails / 25 days):** Branded HTML templates complete. Mobile + tablet optimized. File: `zoho-integration/ai-audit-nurture-emails-branded.html`. Days 0/3/7/12/18/25. Day 18 has 3 subject variants (budget/time/default). Upload manually to Zoho Campaigns workflow MESSAGE blocks.
- [ ] **Zoho Campaigns — Wire workflow canvases:** For both RevOps and AI Audit workflows: connect Trigger → Wait nodes → MESSAGE blocks per day schedule. Set sender to hassan.qaseem@gc-usa.com once email verified.

## Near-Term

- [ ] Business development: identify 5 new engagement opportunities
- [ ] Invoicing: set up billing system for Ecotecture engagement
- [ ] Expand service offerings page on website
- [ ] Case study: draft Ecotecture / SierraHomes engagement summary
- [ ] Second client engagement: target RevOps or GTM consulting role
- [ ] Legal templates: standardize proposal and engagement letter formats
- [ ] Premier Realty outreach: schedule follow-up using Market Analysis as conversation anchor

## Promotion Criteria

When Provecta Group has 3+ active clients and recurring MRR, consider promoting to `projects/ProvectaGroup_AI_Training/` as a full initialized project.

---

## Completed

- [x] **RevOps Audit Zoho Forms Blueprint built** — `RevOps_Audit_Zoho_Blueprint_v1.docx` (39 questions / 8 sections / full ICP scoring + discovery call framework)
- [x] **34 custom CRM fields created via API** — All Leads module fields live in Zoho CRM as of 2026-04-10 (31 new + 2 already existed + 1 as text type due to textarea limit)
- [x] **revops-audit.js netlify function updated** — Full 39-field mapping deployed. All blueprint fields map to Zoho CRM API names.
- [x] Ecotecture PM contract signed and archived
- [x] RevOps SOP built (`Provecta_RevOps_SOP.docx`)
- [x] Brand template established (`Provecta-Brand-Template.md`)
- [x] Construction cost review transcript archived
- [x] Legal folder organized with signed contracts
- [x] **Provecta Group website deployed live** — `pgco.world` (Netlify, SSL provisioned, Zoho Functions live)
- [x] **AI Memory Brain landing page mobile/tablet optimized** — Full responsive CSS at 1024px / 768px / 480px breakpoints
- [x] **AI Memory Brain compare chart mobile redesign** — Dropdown select replaces 7-tab strip; stacked card panels with VS divider
- [x] **AI Memory Brain link added to Provecta mobile nav** — Teal-styled link in mobile hamburger menu
- [x] **Premier Realty Market Analysis created** — `Premier_Realty_Market_Analysis_2026.docx` (separate from proposal)
- [x] **Netlify PAT renewed** — 90-day token `nfp_KBFqbNdJn1x92MxGkyLyH2Te7rRaTKw7583d`, expires ~2026-07-10

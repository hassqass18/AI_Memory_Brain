# Adaptive Communication Standard (ACS) v1.0

**Owner:** [Your Name] ([your@email.com])
**Last Updated:** 2026-03-29
**Scope:** ALL communications across all projects — field operations, investor relations, vendor negotiations, inter-organizational, and AI-assisted messaging
**Companion Standard:** [CC/DE Operating Standard v2.0](CCDE-Operating-Standard.md)
**Memory Tier:** Tier 2 (Read at session start; drill into sections as needed)

---

## Document Purpose

This is the **primary communication standard** governing how all messages, updates, requests, negotiations, reports, and interpersonal communications are crafted and delivered across the owner's project portfolio. Every AI assistant, and every human communicator acting on behalf of these projects, must follow this framework when composing or sending any communication.

The standard is built on a core principle: **every communication should be adapted to the recipient, not the sender.** The goal is not to say what you want to say — it is to say what needs to be said in the way that the recipient is most likely to hear it, accept it, and act on it productively.

This document synthesizes research from Communication Accommodation Theory (Howard Giles), the DISC behavioral model, the Big Five (OCEAN) personality framework, Nonviolent Communication (Marshall Rosenberg), Emotional Intelligence theory (Daniel Goleman), the Mendelow Stakeholder Power-Interest Matrix, Hofstede's Cultural Dimensions, the SPIKES protocol for delivering difficult news, and field-tested best practices for remote distributed team communication.

---

## Table of Contents

1. [Core Philosophy](#1-core-philosophy)
2. [Contact Profiling System](#2-contact-profiling-system)
3. [The Adaptive Communication Framework](#3-the-adaptive-communication-framework)
4. [Stakeholder Classification & Communication Tiers](#4-stakeholder-classification--communication-tiers)
5. [Channel Selection Rules](#5-channel-selection-rules)
6. [Information Delivery Strategy](#6-information-delivery-strategy)
7. [Difficult News Protocol (SPIKES-A)](#7-difficult-news-protocol-spikes-a)
8. [Investor & Stakeholder Communication](#8-investor--stakeholder-communication)
9. [Field Operations Communication](#9-field-operations-communication)
10. [Vendor & Contractor Communication](#10-vendor--contractor-communication)
11. [Cross-Cultural Communication](#11-cross-cultural-communication)
12. [AI-Assisted Communication Rules](#12-ai-assisted-communication-rules)
13. [Communication Anti-Patterns](#13-communication-anti-patterns)
14. [Contact Profile Storage & Maintenance](#14-contact-profile-storage--maintenance)
15. [Version History](#15-version-history)

---

## 1. Core Philosophy

### The Three Laws of Adaptive Communication

**Law 1: Profile Before You Speak.** Before crafting any significant communication, consult the recipient's Contact Profile (see Section 2). If no profile exists, build one from available data before proceeding. Never send a consequential message to someone you haven't analyzed.

**Law 2: Adapt to the Receiver, Not the Sender.** Communication Accommodation Theory (Giles, 1971) demonstrates that people who adapt their style toward the recipient's preferences build stronger rapport, reduce friction, and achieve better outcomes. Convergence — adjusting your vocabulary, tone, pace, formality, and structure to match the recipient — is the default behavior.

**Law 3: Sequence for Reception, Not Convenience.** The order, timing, and pacing of information delivery matter as much as the content itself. Information should be delivered in the sequence and at the pace that maximizes the recipient's ability to absorb, accept, and act on it productively — even if that means spreading a message across multiple touchpoints rather than delivering everything at once.

### Emotional Intelligence Foundation

Every communication operates within Daniel Goleman's four EQ domains:

| Domain | Application to Communication |
|--------|------------------------------|
| **Self-Awareness** | Know your own emotional state before communicating. If you are frustrated, anxious, or rushed, delay the communication or flag your state to yourself before composing. |
| **Self-Management** | Control impulse to respond reactively. Draft, review, then send. Never send the first draft of a difficult message. |
| **Social Awareness (Empathy)** | Read the recipient's likely emotional state based on context. What are they dealing with right now? What pressures are they under? What do they need to hear first? |
| **Relationship Management** | Every message either deposits into or withdraws from the relationship trust account. Prioritize long-term trust over short-term efficiency. |

---

## 2. Contact Profiling System

### Mandate

Every significant contact across all projects MUST have a Contact Profile stored in `contacts/` within AI Memory. This profile informs how every AI assistant and human communicator engages with that person.

### Profile Components

Each Contact Profile captures the following dimensions:

#### A. Identity & Relationship

Basic facts: name, organization, role, project affiliations, Zoho CRM ID, primary communication channel, time zone.

#### B. DISC Behavioral Style (Primary Assessment)

The DISC model classifies communication behavior along four dimensions. Every contact is assessed and assigned a primary and secondary style:

| Style | Characteristics | Communication Preferences | Avoid |
|-------|----------------|--------------------------|-------|
| **D — Dominance** | Direct, results-oriented, decisive, competitive | Be brief and specific. Lead with the bottom line. Present options, not lengthy explanations. Respect their time. Use bullet points. | Rambling, small talk before business, excessive detail, indecisiveness |
| **I — Influence** | Enthusiastic, optimistic, collaborative, expressive | Be warm and personable. Open with a friendly greeting. Share the vision and big picture. Allow for storytelling and social connection. | Cold/transactional tone, overwhelming data, rigid formality, shutting down enthusiasm |
| **S — Steadiness** | Patient, reliable, team-oriented, calm | Be sincere and non-threatening. Provide context and stability. Give them time to process. Be consistent and follow through. Reassure during change. | Sudden demands, aggressive urgency, public pressure, springing surprises |
| **C — Conscientiousness** | Analytical, precise, quality-focused, systematic | Provide data, evidence, and detail. Be accurate and organized. Give them time to analyze. Use structured formats (numbered lists, tables). | Vagueness, emotional appeals without data, rushing decisions, casual estimates |

#### C. Big Five (OCEAN) Personality Indicators

For deeper profiling, assess where the contact falls on each Big Five dimension:

| Dimension | High | Low | Communication Adjustment |
|-----------|------|-----|--------------------------|
| **Openness** | Creative, curious, abstract thinker | Practical, conventional, concrete | High: explore ideas, brainstorm. Low: stick to proven approaches, concrete examples. |
| **Conscientiousness** | Organized, disciplined, detail-oriented | Flexible, spontaneous, big-picture | High: provide structured info, deadlines, specifics. Low: keep it loose, focus on outcomes not process. |
| **Extraversion** | Energized by interaction, talkative | Reflective, reserved, prefers writing | High: calls, video, energetic tone. Low: written messages, give space to respond, no pressure to be "on." |
| **Agreeableness** | Cooperative, trusting, empathetic | Skeptical, competitive, challenging | High: collaborative language, consensus-building. Low: direct/logical appeals, acknowledge their critical eye. |
| **Neuroticism** | Stress-reactive, worry-prone, sensitive | Emotionally stable, resilient, calm | High: reassure, buffer bad news, provide certainty. Low: be straightforward, they can handle directness. |

#### D. Cultural Context (Hofstede Dimensions)

For contacts operating across cultures, note their cultural context:

| Dimension | Relevance |
|-----------|-----------|
| **Power Distance** | High: respect hierarchy, use titles, formal address. Low: use first names, flatten structure. |
| **Individualism vs. Collectivism** | Individualist: appeal to personal achievement. Collectivist: frame in terms of group benefit. |
| **Uncertainty Avoidance** | High: provide detailed plans, reduce ambiguity. Low: comfortable with open-ended proposals. |
| **Long-Term vs. Short-Term Orientation** | Long-term: emphasize future vision, patience. Short-term: emphasize immediate results, quick wins. |
| **Communication Context** | High-context (implied meaning, relationships matter): read between the lines, build rapport first. Low-context (explicit, direct): say exactly what you mean, get to the point. |

#### E. Observed Communication Patterns

Data gathered from actual interactions:

- Preferred response time (replies within minutes? hours? days?)
- Preferred message length (one-liners? detailed paragraphs? voice notes?)
- Preferred channel (WhatsApp? Email? Slack? Calls?)
- Best time of day for engagement
- Topics that energize them
- Topics that trigger defensiveness or withdrawal
- How they deliver bad news (indicator of how they prefer to receive it)
- Language formality level (casual slang? professional? academic?)

#### F. Relationship Trust Account

A qualitative assessment of the current state of the relationship:

- **Deposits**: Past positive interactions, promises kept, value delivered
- **Withdrawals**: Past conflicts, missed commitments, difficult conversations
- **Current Balance**: Strong / Neutral / Strained / Damaged
- **Repair Needed?**: If yes, what specific action would rebuild trust

---

## 3. The Adaptive Communication Framework

### The ACF Process (Before Every Significant Communication)

Before composing any significant message (anything involving money, commitments, decisions, conflict, bad news, or first contact), follow this 5-step process:

**Step 1: PROFILE** — Pull the recipient's Contact Profile. If none exists, create a preliminary assessment from available data (CRM records, past messages, project context).

**Step 2: CONTEXT** — Assess the current context. What is the recipient likely dealing with right now? What emotional state are they probably in? What happened in the last interaction? Where does the relationship trust account stand?

**Step 3: FRAME** — Choose the communication frame based on the recipient's DISC style and the nature of the message:

| Message Type | D-Style Frame | I-Style Frame | S-Style Frame | C-Style Frame |
|-------------|---------------|---------------|---------------|---------------|
| Status Update | Bottom-line result + next action | Story of progress + team wins | Steady progress + what stays the same | Data table + trend analysis |
| Request | Direct ask + deadline | Collaborative invitation + shared benefit | Gentle request + reassurance of support | Logical rationale + detailed scope |
| Bad News | State the fact + action plan | Empathize + silver lining + path forward | Buffer + news + reassurance + support | Data explaining why + corrective analysis |
| Decision | Options + recommendation + deadline | Vision of each option + enthusiastic lean | Context + recommendation + time to process | Pros/cons matrix + risk assessment |
| Feedback | Specific result + what to change | Acknowledge strengths + growth opportunity | Private, gentle, specific + ongoing support | Objective criteria + measured gap + improvement path |

**Step 4: COMPOSE** — Write the message using the chosen frame, adapting:

- **Vocabulary**: Match their level (technical vs. plain, formal vs. casual)
- **Length**: Match their preference (brief for D/I, detailed for C, moderate for S)
- **Tone**: Match their energy (direct for D, warm for I/S, measured for C)
- **Structure**: Match their processing style (bullets for D, narrative for I, flowing for S, structured/numbered for C)
- **Opening**: Match their social style (straight to business for D/C, warm personal opener for I/S)

**Step 5: REVIEW** — Before sending, check:

- [ ] Does this serve the recipient's needs or just mine?
- [ ] Is the tone adapted to their style, not my default?
- [ ] Is the information sequenced for maximum reception?
- [ ] Have I checked the relationship trust account?
- [ ] If bad news: have I followed the SPIKES-A protocol (Section 7)?
- [ ] If investor: have I followed the Investor Communication Standard (Section 8)?
- [ ] Would I feel respected receiving this message?

---

## 4. Stakeholder Classification & Communication Tiers

### Mendelow Power-Interest Matrix Applied

Every contact is classified by their power over project outcomes and their interest level, which determines communication frequency and depth:

| Quadrant | Power | Interest | Communication Strategy | Frequency |
|----------|-------|----------|----------------------|-----------|
| **Manage Closely** | High | High | Proactive, detailed, two-way dialogue. Seek their input on decisions. Personalized updates. | Weekly or more |
| **Keep Satisfied** | High | Low | High-level summaries only. Don't overwhelm with detail. Flag only critical issues. Respect their time. | Monthly or on critical events |
| **Keep Informed** | Low | High | Regular updates, invite feedback, cultivate as advocates. More detail than "Keep Satisfied." | Bi-weekly to monthly |
| **Monitor** | Low | Low | Minimal communication. Broadcast updates only. No personalization required. | Quarterly or as needed |

### Current Stakeholder Map

| Contact | Quadrant | Communication Approach |
|---------|----------|----------------------|
| {Contact-A} (Investor) | Manage Closely | Monthly detailed update + quarterly formal report + immediate alert on critical issues |
| {Contact-B} (Production Lead) | Manage Closely | Daily async + weekly call + mission briefs |
| {Stakeholder-C} | Keep Informed | Regular outreach during active consignment; monthly during ramp-up |
| {Stakeholder-D} | Keep Satisfied | Contact only when needed; formal, respectful, prepared |
| {Vendor-E} | Monitor | Contact only for purchases or warranty issues |

*This map should be updated as new stakeholders emerge across all projects.*

---

## 5. Channel Selection Rules

### Channel-Message Matrix

The channel should match both the message type and the recipient's preference:

| Message Type | Primary Channel | Fallback | Never Use |
|-------------|----------------|----------|-----------|
| **Urgent / time-sensitive** | Phone call → WhatsApp voice | SMS | Email |
| **Daily status update** | Slack / WhatsApp text + photos | Email | Phone call |
| **Weekly review** | Video call (Zoom/WhatsApp) | Slack thread summary | Email chain |
| **Formal request / proposal** | Email | Google Docs shared link | WhatsApp |
| **Contract / legal** | Email with attachment | Zoho Sign | Verbal only |
| **Bad news / conflict** | Phone/video call (synchronous) | Carefully composed written message | Group chat / public channel |
| **Positive news / wins** | Group channel (share the win) | Individual message + group post | Only telling one person |
| **Investor update** | Email (written report) + follow-up call | WhatsApp message + voice call | Slack / casual channel |
| **Vendor negotiation** | Email (creates paper trail) | WhatsApp (with CRM logging) | Unrecorded phone call |
| **Feedback / correction** | Private 1:1 (call or DM) | Private email | Group chat / public call-out |

### Recipient Preference Override

If a contact's profile indicates a strong channel preference that differs from the matrix above, **the recipient's preference wins** for routine communications. The matrix governs only when the message type demands a specific medium (e.g., contracts must be email, bad news should be synchronous).

### Time Zone Awareness

- Always check the recipient's local time before sending
- Never send urgent requests outside their working hours unless truly critical
- Schedule messages to arrive at the start of their work day when possible
- Astana (UTC+6) → US Eastern (UTC-5): Messages sent 7-9 PM Astana arrive 8-10 AM Eastern

---

## 6. Information Delivery Strategy

### The Pacing Principle

Not all information should be delivered at once. The pacing of information delivery should be determined by three factors:

1. **Emotional weight**: Heavy information (bad news, large requests, complex changes) should be paced over multiple touchpoints
2. **Cognitive load**: Dense information should be chunked into digestible pieces
3. **Recipient's processing style**: D-types want everything up front; S-types need time between pieces; C-types want data first, then conclusions; I-types need the narrative arc

### Delivery Patterns

**Pattern 1: Single Delivery (All-at-Once)**
Best for: Routine updates, simple requests, good news, D-style recipients, time-sensitive information.

```
[Full message delivered in one communication]
```

**Pattern 2: Progressive Disclosure (Building Context)**
Best for: Complex decisions, large requests, C-style and S-style recipients, situations requiring buy-in.

```
Touchpoint 1: Share background context and data
Touchpoint 2: Present the situation and options (24-48 hours later)
Touchpoint 3: Discuss recommendation and invite input
Touchpoint 4: Confirm decision and next steps
```

**Pattern 3: Buffer-Bridge-Build (Bad News Sequencing)**
Best for: Delivering disappointing news, project setbacks, budget overruns, S-style and I-style recipients.

```
Buffer: Acknowledge the relationship and shared goals
Bridge: Transition to the reality of the situation
Build: Present the corrective path and future state
```

**Pattern 4: Drip Communication (Ongoing Awareness)**
Best for: Long-term stakeholder management, investor relations, maintaining engagement without overwhelming.

```
Week 1: Share a small win or data point
Week 2: Provide a progress photo or milestone
Week 3: Share a challenge and how it was addressed
Week 4: Deliver the monthly summary (they already have context)
```

### Sequencing Rules

| Situation | Sequence | Rationale |
|-----------|----------|-----------|
| Good news + bad news | Bad news first → good news | Ending on positive creates forward momentum (recency effect) |
| Multiple requests | Smallest/easiest first → largest | Builds compliance momentum (foot-in-the-door technique) |
| Feedback conversation | Specific positive → area for growth → specific positive | Sandwich technique — but only with genuine, specific positives |
| Complex project update | Results → challenges → plan → ask | Shows accountability before requesting anything |
| First contact (new relationship) | Who you are → why you're reaching out → what's in it for them → specific ask | Builds credibility before making demands |

---

## 7. Difficult News Protocol (SPIKES-A)

Adapted from the SPIKES medical communication protocol (Buckman, 2000) for organizational use. Use this whenever delivering news that the recipient is likely to find disappointing, frustrating, or anxiety-inducing.

### The Six Steps

**S — Setting**
Prepare the environment. Choose a private channel (1:1 call or DM, never group chat). Ensure you have uninterrupted time. Review the Contact Profile for emotional sensitivity indicators. Have the facts ready.

**P — Perception**
Before delivering the news, assess what the recipient already knows or suspects. Ask a checking question if in a live conversation: "What's your sense of how [X] is going?" This lets you calibrate how much gap exists between their expectation and the reality.

**I — Invitation**
Signal that important information is coming. This prepares the recipient's emotional processing: "I have an update on [topic] that I want to walk you through" or "There's been a development with [X] that I want to be upfront about." This is the "forecast" that research shows is more effective than bluntness or stalling.

**K — Knowledge**
Deliver the information clearly and factually. Use plain language. Avoid jargon or euphemisms that obscure the reality. State what happened, why it happened (if known), and what the current state is. Do not editorialize or catastrophize.

**E — Empathy**
Acknowledge the recipient's emotional response. Validate their feelings before jumping to solutions. "I understand this isn't the news we were hoping for" or "I know this creates pressure on your end and I take that seriously." Match the depth of empathy to the Contact Profile (S-types and I-types need more; D-types prefer a brief acknowledgment before moving to action).

**S-A — Strategy & Action (adapted from original "S — Summary")**
Immediately present the corrective plan. Never deliver bad news without a path forward. State: what you are doing about it, what you need from them (if anything), the revised timeline or expectation, and when you will next update them. This transforms the communication from a problem delivery into a solutions conversation.

### Written Bad News Template

```
[Warm opening — acknowledge the person and relationship]

I want to be straightforward with you about [topic]. [State the situation factually in 1-2 sentences.]

[Brief explanation of why/how this happened — no excuses, just clarity.]

I understand this [affects/changes/delays] [specific impact on them], and I take that seriously.

Here's what we're doing about it:
- [Action 1]
- [Action 2]
- [Action 3]

[Revised expectation/timeline if applicable.]

I'll update you again by [specific date]. If you want to discuss this further, I'm available [time window].

[Warm close — reaffirm commitment to the relationship/project]
```

---

## 8. Investor & Stakeholder Communication

### Communication Principles for Investors

Investors are a unique stakeholder class requiring specific communication practices:

1. **Consistency over frequency**: A reliable monthly update builds more trust than sporadic detailed reports. Never skip a scheduled update — even if the news is bad. Companies that regularly communicate with investors are 2x more likely to raise follow-on funding.

2. **Honesty-first framing**: Investors expect and respect transparency about challenges. Never hide problems — frame them as identified risks with mitigation plans. Loss of trust from hidden bad news is irrecoverable.

3. **Data-anchored narrative**: Every update should contain hard numbers (revenue, spend, cash position, milestones). Pair numbers with narrative context: what happened, why, what it means, what you're doing about it.

4. **The Ask**: Every update should include a specific "ask" — even if it's just "no action needed from you this month." Investors want to feel useful. Give them ways to help (introductions, advice on specific questions, domain expertise).

5. **Respect time, deliver value**: Investor updates should be scannable in 2 minutes but deep enough to satisfy in 10 minutes. Use a consistent template so they know where to find each section without re-learning the format.

### Investor Update Template

```
Subject: [Company] — [Month Year] Update

HEADLINE: [One sentence — the most important thing]

KEY METRICS:
- Revenue: $X (↑/↓ X% from last month)
- Cash Position: $X (X months runway)
- Key Milestone: [Status]

HIGHLIGHTS (What Went Well):
- [Win 1]
- [Win 2]

CHALLENGES (What We're Navigating):
- [Challenge 1 + what we're doing about it]

NEXT 30 DAYS:
- [Priority 1]
- [Priority 2]

ASK:
- [Specific request, or "No action needed this month"]

[Personal closing — brief, warm, authentic]
```

### Investor-Specific Adaptation ({Contact-A})

{Contact-A} should have a Contact Profile in `contacts/{contact-name}.md` with full DISC assessment, communication preferences, and relationship history. All investor communications should reference this profile before composing.

---

## 9. Field Operations Communication

### Principles for Field Agent Communication

Field agents ({Contact-B} and future production team members) operate in a fundamentally different context than office-based stakeholders. They are physically active, often on equipment, dealing with weather and materials, and their communication windows are constrained.

1. **Async-first, always**: Never assume a field agent can take a call or read a long message immediately. Default to short text + photos that can be consumed in a break.

2. **Visual evidence norm**: For physical operations, photos and short video are more valuable than text. Establish a "photo-first" reporting culture where the image IS the update, with text as supplementary context.

3. **Brevity respects their work**: Field agents are producing value when they're working, not when they're typing. Keep requests short, specific, and actionable. Provide all context they need in the message — don't make them ask follow-up questions.

4. **Acknowledgment habit**: Always acknowledge receipt of field reports within a reasonable window. Silence from leadership creates anxiety and erodes motivation. A simple thumbs-up or "Got it, looks good" costs nothing and deposits heavily into the trust account.

5. **Mission brief format**: For new tasks, use the Mission Brief format from the CC/DE standard. Clear task, clear success criteria, clear budget, clear deadline. No ambiguity.

### Field Communication Templates

**Daily Check-In (from {Owner} to {Contact-B}):**
```
Morning {Contact-B}. Quick check-in:
1. How's [current task] going?
2. Any parts/materials needed?
3. What's the plan for today?

No rush on reply — whenever you get a break. 👍
```

**Acknowledging a Field Report:**
```
Got the photos — [specific positive observation about the work].
[Any question or redirect if needed.]
Keep it up.
```

**Redirecting a Field Agent (when something needs to change):**
```
[Acknowledgment of what they've been doing right.]

One adjustment: [specific change needed + why].
[What the new approach looks like.]

Let me know if you have questions or need anything different to make this work.
```

---

## 10. Vendor & Contractor Communication

### Principles for Vendor Communication

1. **Professional but human**: Vendors are business relationships, but humans run businesses. Be professional in structure, warm in tone. Use their name. Reference past interactions.

2. **Clarity on terms**: Every vendor communication that involves money, timelines, or deliverables should be precise. Ambiguity in vendor communication creates scope creep, billing disputes, and misaligned expectations.

3. **Paper trail**: All vendor negotiations and agreements should be in writing (email preferred). If a verbal agreement is made (phone/WhatsApp), follow up with a written confirmation: "To confirm our conversation: [terms]. Please reply to confirm."

4. **CRM logging**: Every significant vendor interaction gets a Note in Zoho CRM per the CC/DE standard. This creates institutional memory — the next person (or AI assistant) who engages this vendor has full context.

5. **Respect their expertise**: Vendors are specialists. When requesting quotes or proposals, provide your requirements but don't dictate their process. Ask for their recommendation — it often produces better results and builds the relationship.

### Vendor Communication Templates

**Initial Outreach (New Vendor):**
```
Subject: [{Organization/Project}] — [What You Need]

Hi [Name],

I'm [{Owner}/role] with [{Organization/Project}]. We're [brief relevant context — 1 sentence].

We're looking for [specific need — be precise]. [1-2 sentences on scope/timeline.]

Would you be able to provide a quote or discuss how you could help with this? Happy to provide more detail on what we need.

Thanks,
[Name]
```

**Following Up on a Quote:**
```
Hi [Name],

Following up on our conversation about [topic] from [date]. Wanted to check if you've had a chance to put together the [quote/proposal/estimate]?

No rush if you need more time — just want to keep things moving on our end. Let me know if you need any additional information from us.

Thanks,
[Name]
```

---

## 11. Cross-Cultural Communication

### Framework (Hofstede Dimensions Applied)

Given that operations may span multiple geographic regions and international vendors, cultural awareness is not optional.

| Context | Cultural Profile | Communication Adaptation |
|---------|-----------------|-------------------------|
| **High Power Distance Culture** | Moderate-high power distance, collectivist tendencies, uncertainty avoidance varies | Respect hierarchy in formal interactions. Build personal relationships before business. Group harmony matters. |
| **Low Power Distance Culture** | Low-moderate power distance, individualist, low uncertainty avoidance, results-oriented | Direct communication valued. Personal autonomy respected. Informal tone acceptable. Action-focused. |
| **High Uncertainty Avoidance Culture** | Low-moderate power distance, individualist, high uncertainty avoidance | Detail-oriented communication. Structured proposals. Respect for planning and process. |
| **Long-Term Oriented Culture** | High power distance, collectivist, long-term focused | Formal business communication. Relationship building before transactions. Patience with process. Face-saving important — never publicly embarrass contacts in such cultures. |

### Universal Cross-Cultural Rules

1. When in doubt, be more formal than less. You can always relax formality; recovering from perceived disrespect is harder.
2. Use clear, simple language — avoid idioms, slang, and cultural references that may not translate.
3. Confirm understanding explicitly: "Just to make sure we're aligned — [restate the agreement]."
4. Be patient with response times across cultures. Different cultures have different norms around urgency.
5. Respect religious and cultural calendars when scheduling communications (Ramadan, Chinese New Year, local holidays).

---

## 12. AI-Assisted Communication Rules

### When AI Assists in Composing Communications

When any AI assistant (Claude, or other tools) is asked to compose, draft, or send a communication on behalf of the owner or the projects, the following rules apply:

1. **Always check the Contact Profile first.** Pull `contacts/[Name].md` before composing. If no profile exists, create a preliminary one from available context and CRM data, then flag it for human review.

2. **Apply the ACF Process (Section 3)** for every communication. Profile → Context → Frame → Compose → Review. No shortcuts.

3. **Never send without human approval** for: investor communications, bad news delivery, first contact with a new relationship, anything involving money above $500, legal or contractual language, and any message where the relationship trust account is strained or damaged.

4. **Match the Contact Profile's observed patterns.** If the profile says they prefer WhatsApp voice notes, don't draft an email. If they prefer bullet points, don't write paragraphs.

5. **Log all AI-assisted communications** in a note indicating "AI-drafted, human-approved" in the CRM record.

6. **Build the profile over time.** After each interaction, update the Contact Profile with any new observations about communication preferences, emotional patterns, or relationship changes.

### AI Communication Checklist

Before any AI-composed message is finalized:

- [ ] Contact Profile consulted (or preliminary profile created)
- [ ] DISC style matched in tone, structure, and vocabulary
- [ ] Emotional context considered (what are they likely feeling right now?)
- [ ] Information pacing appropriate (single delivery vs. progressive disclosure)
- [ ] Channel appropriate for the message type and recipient preference
- [ ] If bad news: SPIKES-A protocol followed
- [ ] If investor: Investor Communication Standard followed
- [ ] Relationship trust account checked — is this a deposit or withdrawal?
- [ ] NVC principles applied — observations not judgments, needs expressed, specific requests made
- [ ] Human approval obtained for consequential messages

---

## 13. Communication Anti-Patterns

| Anti-Pattern | Description | Fix |
|-------------|-------------|-----|
| **One-Size-Fits-All** | Sending the same message style to every recipient | Profile each contact; adapt per ACF |
| **Data Dumping** | Overwhelming with information without framing or pacing | Use progressive disclosure; lead with what matters to them |
| **Emotional Blindness** | Ignoring the recipient's likely emotional state | Check Context step; lead with empathy when needed |
| **Channel Mismatch** | Using email for urgent matters; using group chat for private feedback | Follow Channel Selection Rules (Section 5) |
| **The Disappearing Act** | Going silent when news is bad or uncertain | Silence breeds anxiety; send an update even if it's "no update yet, still working on it" |
| **Public Correction** | Giving feedback or correction in a group setting | Always private, always 1:1 |
| **Assumed Understanding** | Not confirming the recipient understood the message | Restate key points; ask for confirmation on critical items |
| **Sending in Frustration** | Composing and sending while emotionally activated | Draft → wait minimum 1 hour → re-read → then decide to send |
| **Over-Accommodation** | Adapting so much that you lose authenticity or seem patronizing | Converge toward their style, but stay within your natural range |
| **Ignoring the Clock** | Sending at times that are inconvenient for the recipient's timezone | Check local time; schedule delivery for their morning when possible |
| **Ghosting After the Ask** | Making a request and then failing to follow up or acknowledge the response | Always close the loop. Acknowledge. Thank. Confirm next steps. |
| **Burying the Lead** | Putting the most important information deep in a long message | Lead with the bottom line for D/C types; at minimum, bold the key point |

---

## 14. Contact Profile Storage & Maintenance

### File Structure

Contact Profiles are stored as markdown files in a dedicated `contacts/` folder at the AI Memory root:

```
AI_Memory_Open/
├── contacts/
│   ├── _PROFILE-TEMPLATE.md      ← Template for new profiles
│   ├── {contact-name}.md          ← Production Lead
│   ├── {contact-name}.md          ← Investor
│   └── [Name].md                  ← One file per significant contact
```

### Profile Creation Rules

1. **When to create**: Any contact that appears in more than one communication, handles money, makes decisions, or is a recurring relationship.
2. **Who creates**: Any AI assistant or human who encounters a new significant contact during project work. The initial profile can be preliminary (identity + best guess at DISC style) and refined over time.
3. **How to update**: After every significant interaction, check the profile for new observations. Update the "Observed Communication Patterns" and "Relationship Trust Account" sections.
4. **Cross-reference**: Every Contact Profile should reference the person's Zoho CRM record ID for bidirectional linkage.

### Profile Maintenance Cadence

| Action | Frequency |
|--------|-----------|
| Create new profiles for new contacts | Within 24 hours of first significant interaction |
| Update after significant interactions | Within 48 hours |
| Full profile review and refresh | Quarterly |
| Archive inactive contacts | Annually |

---

## 15. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-29 | Initial release — synthesized from Communication Accommodation Theory, DISC, Big Five (OCEAN), NVC, Emotional Intelligence (Goleman), Mendelow Matrix, Hofstede Dimensions, SPIKES protocol, and remote field operations best practices. |

---

## AI Session Integration Rules

When any AI assistant opens a session on any project:

1. **Read this document** as part of Tier 2 loading (index level)
2. **Before composing any communication**, pull the relevant Contact Profile from `contacts/`
3. **Apply the ACF Process** (Section 3) for every significant message
4. **Create new Contact Profiles** when encountering unprofileded contacts (with human review flag)
5. **Update Contact Profiles** after interactions with new observations
6. **Log communications** in Zoho CRM per the CC/DE standard

---

*This document is a living standard. Update it as new communication learnings emerge from interactions across all projects. It is the authoritative source for how communications are composed and delivered across the owner's portfolio.*

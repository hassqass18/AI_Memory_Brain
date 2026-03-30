# Monitoring & Evaluations Agent

> **Domain:** Operations – Monitoring, Evaluation & Impact Measurement
> **Owner:** [Your Name]
> **Last Updated:** 2026-03-28
> **Status:** Active
> **Plugin Source:** Custom (no dedicated plugin)

---

## Purpose

This agent manages monitoring and evaluation (M&E) frameworks, KPI tracking, program evaluation, impact measurement, data collection, and reporting. It connects to Google Sheets, Google Drive, Slack, Zoho Projects, and Claude in Chrome for comprehensive performance measurement, insights generation, and data-driven decision-making.

> **Focus Area:** M&E framework design, KPI definition & tracking, data collection, program/project evaluation, dashboard design, and lessons learned management. Pairs with PMO (project tracking), Finance (financial performance), and Strategy (strategic KPIs). Closest plugin match: data analytics plugin (statistical analysis, dashboards).

---

## Capabilities

### M&E Framework Design
- Develop logic models and theory of change (ToC) for programs/projects
- Design results frameworks (inputs, activities, outputs, outcomes, impact)
- Define evaluation questions and success criteria
- Create evaluation designs (baseline, midterm, endline assessments)
- Integrate M&E into project planning and governance

### KPI Definition & Tracking
- Define key performance indicators (KPIs) aligned with business objectives
- Establish baseline, targets, and stretch goals for each KPI
- Design KPI dashboards with real-time monitoring and alerts
- Create KPI review cadence and accountability (monthly, quarterly, annual)
- Track progress; identify variances and root causes

### Data Collection Design
- Design surveys and questionnaires (sample size, question design, response options)
- Develop sampling strategies (random, stratified, purposive)
- Create data collection tools: forms, checklists, interview guides
- Establish data quality standards (validation, consistency, timeliness)
- Train enumerators/data collectors; ensure consistency

### Program & Project Evaluation
- Design formative evaluations (process evaluation during implementation)
- Design summative evaluations (outcome and impact assessment post-implementation)
- Conduct mid-term reviews and progress assessments
- Measure behavioral change, reach (beneficiaries), and sustainability
- Perform cost-effectiveness and return-on-investment (ROI) analysis

### Dashboard & Reporting Design
- Create executive dashboards (KPI summary, traffic light status, key insights)
- Design operational dashboards (detailed metrics, drill-down capability)
- Develop data visualization (charts, maps, infographics)
- Generate automated reports (monthly, quarterly, annual)
- Build stakeholder-specific reports (board, management, donors, public)

### Lessons Learned & Knowledge Management
- Capture lessons learned from projects and programs
- Document best practices and innovation case studies
- Create knowledge repositories (wiki, documentation)
- Share insights across organization; integrate into planning

---

## Commands & Workflows

| Command | Description |
|---------|-------------|
| `/me-framework` | Design M&E framework with logic model and results framework |
| `/kpi-definition` | Define KPIs with baseline, targets, and measurement approach |
| `/data-collection` | Design survey, sampling strategy, and data collection tools |
| `/evaluation-design` | Design formative or summative program evaluation |
| `/dashboard-design` | Create executive, operational, or custom dashboard |
| `/reporting-plan` | Define reporting cadence, audience, and key metrics |
| `/lessons-learned` | Capture and share project lessons and best practices |

---

## Skills (Detailed Reference)

### 1. M&E Framework Design

**Trigger:** "M&E framework", "logic model", "theory of change", "results framework", "evaluation framework"

**Logic Model Components:**

A logic model shows the sequence of cause-and-effect in a program:

```
Inputs → Activities → Outputs → Outcomes → Impact
  ↓          ↓           ↓         ↓        ↓
Resources, Staffing, What Immediate Results,  Long-term
Budget,    Training,  the  Changes in       Change
Assets     Equipment  program knowledge,   in system
                      does  skills,        or
                            attitudes      behavior
```

**Inputs (Resources):**
- Funding (budget allocation, grants, internal funding)
- Staff (headcount, expertise, time allocation)
- Equipment/technology (tools, software, infrastructure)
- Partners (organizations, consultants providing support)
- Policy/regulatory environment

**Activities (What the program does):**
- Trainings, workshops, coaching sessions
- Material distribution, technology deployment
- System improvements, process changes
- Advocacy, awareness campaigns
- Service delivery (healthcare, education, financial services)

**Outputs (Immediate products/services):**
- Number trained (people reached)
- Number of materials distributed
- Systems/processes deployed
- Services delivered (visits, sessions, transactions)
- Quantifies program delivery; measures effort/reach

**Outcomes (Medium-term changes):**
- Changes in knowledge (people understand new concepts)
- Changes in skills (people can perform new behaviors)
- Changes in attitudes (people value health, education, etc.)
- Changes in adoption (people use new products/services)
- Measured 6–12 months after exposure to program

**Impact (Long-term change):**
- Reduced disease incidence (health programs)
- Improved educational outcomes (education programs)
- Increased income (economic development programs)
- Improved environmental quality (sustainability programs)
- Measured 2–5+ years after program exposure

**Theory of Change (ToC):**
- Narrative explaining how and why the program works
- Articulates underlying assumptions
- Documents causal pathway from activities → impact
- Identifies critical assumptions: "If we train teachers, then students learn... IF teachers apply training in classroom"
- Helps identify risks and mitigation strategies

**Results Framework:**
A table showing the hierarchy of results:

| Level | Statement | Measurement Approach | Timeline |
|-------|-----------|----------------------|----------|
| **Impact** | Improved educational outcomes in rural districts | National learning assessments | 5 years |
| **Outcome** | Teachers use new teaching methods effectively | Teacher observation, classroom observation | 1 year |
| **Output** | 500 teachers trained on new teaching methods | Training attendance, post-training test | 6 months |
| **Activity** | Conduct 20 training workshops (2–3 days each) | Workshop schedule, attendance records | Ongoing |
| **Input** | Secure $200K funding, hire 2 training coordinators | Budget allocated, staff hired | Month 1 |

**Assumptions & Risks:**
- Document critical assumptions: "Assumption: Teachers will have adequate classroom materials"
- Identify risks: "Risk: High teacher attrition may reduce impact"
- Plan mitigation: "Mitigation: Provide financial incentives to retain trained teachers"

**Outputs:** Logic model diagram, results framework table, theory of change narrative, assumptions and risks register, evaluation questions aligned to framework.

---

### 2. KPI Definition & Tracking

**Trigger:** "KPI definition", "key performance indicators", "KPI targets", "performance metrics", "KPI tracking"

**KPI Characteristics (SMART):**
- **Specific** — Clearly defined; no ambiguity
- **Measurable** — Quantifiable; can be tracked with data
- **Achievable** — Realistic given resources and constraints
- **Relevant** — Aligned with business objective or strategic goal
- **Time-bound** — Has defined baseline, target, and review date

**KPI Development Process:**

1. **Align to strategy** — Start with business objectives
   - Example: "Increase customer retention"
   - Cascades down to operational objectives: "Reduce customer churn rate"

2. **Identify measurement approach**
   - Source of data (customer database, CRM system, survey)
   - Frequency of measurement (monthly, quarterly, annual)
   - Calculation method (count, rate, ratio, percentage)

3. **Establish baseline** — Current performance; provides reference point
   - Example: Customer churn rate baseline = 5% per month

4. **Set targets** — What will success look like?
   - Short-term (3-month, 6-month): incremental improvement
   - Long-term (1-year, 3-year): transformational targets
   - Example: Reduce churn rate to 3% in 6 months, 2% in 12 months

5. **Define stretch goals** — Ambitious targets beyond typical expectations
   - Example: Reduce churn to 1% (requires significant innovation)

**KPI Examples by Domain:**

| Domain | KPI | Baseline | Target | Frequency |
|--------|-----|----------|--------|-----------|
| **Sales** | Revenue growth YoY | 10% | 15% | Monthly |
| **Operations** | Production cycle time | 3 hours | 2.5 hours | Daily |
| **Quality** | Defect rate | 2% | < 0.5% | Weekly |
| **Customer** | NPS (Net Promoter Score) | 40 | 60 | Quarterly |
| **Finance** | Cash conversion cycle | 45 days | 30 days | Monthly |
| **HR** | Employee engagement score | 65% | 80% | Annual |
| **Project** | On-time delivery rate | 70% | 90% | Monthly |

**KPI Dashboard Design:**

| Element | Details |
|---------|---------|
| **Traffic light status** | Green (on track), Yellow (at risk), Red (off track) |
| **Current value** | Latest data point; clearly displayed |
| **Target** | Goal for current period (month/quarter) |
| **Progress** | % of target achieved; visual bar or trend arrow |
| **Trend** | Historical performance (up, stable, down) |
| **Variance** | Actual vs. target; % or absolute difference |
| **Owner** | Who is accountable for this KPI |
| **Data source** | Where data comes from; last update timestamp |

**KPI Review Cadence:**
- **Weekly review** — Operational KPIs (production, sales, safety)
  - Quick standup; identify blockers; adjust actions
- **Monthly review** — Business unit KPIs (revenue, customer satisfaction, cost)
  - Deeper analysis; variance investigation; corrective actions
- **Quarterly review** — Strategic KPIs (growth, market share, profitability)
  - Executive review; reforecast; adjust strategy if needed
- **Annual review** — Overall performance; strategic progress; reset targets

**Variance Investigation (KPI Off-Track):**
1. **Isolate the problem** — Is it across all segments or concentrated? (geography, product, team)
2. **Root cause analysis** — Why is performance below target? (external, internal controllable)
3. **Corrective actions** — What changes will improve performance? (quick fix vs. systemic)
4. **Accountability** — Who owns the corrective action? What's the timeline?
5. **Follow-up** — Track corrective action; measure impact on KPI

**Outputs:** KPI framework document, KPI definitions spreadsheet (with baseline, target, owner, data source), KPI dashboard prototype, KPI review schedule, variance investigation template.

---

### 3. Data Collection Design

**Trigger:** "data collection", "survey design", "sampling strategy", "questionnaire", "data quality"

**Survey Design Basics:**

**1. Define evaluation question:**
- "What percentage of program beneficiaries report improved income?"
- "Did the training program change farming practices among participating farmers?"

**2. Select target population:**
- **Universe** — All farmers in the region (e.g., 50,000)
- **Sampling frame** — List of farmers from agricultural extension database
- **Accessible population** — Farmers contactable via phone or in-person visit

**3. Determine sample size:**
```
Sample size = (Z² × p × (1–p)) / e²
Where: Z = confidence level (1.96 for 95% confidence)
       p = estimated proportion (e.g., 0.5 if unknown)
       e = margin of error (e.g., 0.05 for ±5%)

Example: n = (1.96² × 0.5 × 0.5) / 0.05² = 384 respondents
```

| Population Size | Sample Size (95% CI, ±5% error) | Confidence |
|-----------------|----------------------------------|------------|
| 500 | 222 | High |
| 1,000 | 278 | High |
| 5,000 | 357 | Good |
| 10,000 | 370 | Good |
| 50,000 | 381 | Good |
| 100,000+ | 385 | Good |

**4. Sampling strategy:**
- **Random sampling** — Every population member has equal chance of selection (most rigorous)
- **Stratified sampling** — Divide population into groups (strata); sample from each
  - Example: Sample by district, farm size, crop type
  - Ensures representation across subgroups
- **Purposive sampling** — Select based on specific criteria (e.g., "high-performing farmers")
  - Less rigorous; useful for qualitative interviews
- **Quota sampling** — Set quotas by group; interviewers select convenient respondents
  - Faster, cheaper; introduces potential bias

**5. Questionnaire design:**
- **Question types**
  - Open-ended: "What changes have you made to your farming practices?" (qualitative)
  - Closed-ended: "Did you use the recommended seed variety? Yes/No" (quantitative)
  - Likert scale: "Rate your confidence in new farming techniques: 1 (Low) to 5 (High)"
  - Ranking: "Rank these challenges by importance: 1 (Most) to 5 (Least)"

- **Best practices**
  - Clear language; avoid jargon; test with target audience
  - Logical flow; group related questions
  - Avoid leading questions ("Don't you agree that...?")
  - Avoid double-barrel questions (two questions in one)
  - Appropriate response options; include "Don't know" if applicable

**6. Data collection method:**
- **In-person interview** — Most flexible; builds rapport; expensive, time-consuming
- **Phone survey** — Faster; lower cost; limited depth
- **Online survey** — Scalable; lowest cost; requires digital access
- **Focus group discussion (FGD)** — Qualitative; explores attitudes, perceptions; 8–12 participants
- **Key informant interview (KII)** — In-depth discussion with knowledgeable person; qualitative

**7. Data quality measures:**
- **Enumerator training** — Ensure consistent, accurate data collection
  - Role-play with survey; review examples; practice skip patterns
  - Competency assessment before data collection
- **Supervision & spot checks** — Observe interviews; verify data quality; correct errors real-time
- **Data validation** — Check for missing data, outliers, logical inconsistencies
  - Example: Age < 18 but answered "years working" = 25 years (logical error)
- **Data cleaning** — Remove duplicates, fix errors, handle missing data
  - Document all changes; maintain audit trail

**Outputs:** Survey instrument (questionnaire), sampling plan and sample selection, enumerator training manual, data quality protocol, data management plan (storage, access, retention).

---

### 4. Program & Project Evaluation

**Trigger:** "program evaluation", "project evaluation", "impact assessment", "formative evaluation", "summative evaluation"

**Evaluation Types:**

| Type | Timing | Questions | Purpose |
|------|--------|-----------|---------|
| **Formative** | During implementation | Is the program being implemented as designed? Are early results visible? | Improve program; identify and fix problems quickly |
| **Process** | During implementation | Are beneficiaries satisfied? Are activities reaching intended audience? | Assess implementation quality; build stakeholder buy-in |
| **Midterm review** | Halfway through | Is the program on track? Will targets be met? | Adjust course; increase ambition or scope |
| **Summative** | After implementation | Did the program achieve intended outcomes/impact? | Accountability; learning for future programs |
| **Cost-effectiveness** | Any time | What is the cost per outcome achieved? | Resource efficiency; program comparison |

**Formative Evaluation:**
- Conducted 3–6 months after program launch
- Focus: Implementation quality, early challenges, course corrections
- Methods: Observation, interviews, document review
- Output: Process evaluation report with recommendations for improvement

**Summative Evaluation:**
- Conducted near end of program (endline survey) or 6–12 months after closure
- Focus: Outcomes, impact, sustainability, unintended consequences
- Methods: Rigorous survey (with baseline comparison), interviews, data analysis
- Output: Impact assessment report with lessons learned

**Outcome Measurement:**

1. **Define outcomes** — Specific, measurable changes
   - Example: "80% of participants report improved farming practices"

2. **Baseline survey** — Measure outcome at program start
   - Example: Baseline = 20% using improved practices

3. **Endline survey** — Measure outcome at program end
   - Example: Endline = 60% using improved practices
   - Difference = 40 percentage points improvement

4. **Control group** (if possible) — Compare to non-participating group
   - Helps isolate program effect from external factors
   - Example: Control baseline 18%, control endline 22% (4 pt natural change)
   - Program impact = 60% – 22% = 38 percentage points

5. **Attribution vs. contribution**
   - **Attribution** — Can we prove the program caused the outcome? (Requires control group)
   - **Contribution** — Did the program contribute to the outcome? (Softer claim)

**Qualitative Evaluation:**
- **Interviews** — Ask open-ended questions; explore "why" and "how"
  - Example: "How have your farming practices changed? What made the difference?"
- **Focus groups** — Group discussion; explore group dynamics and diverse perspectives
- **Case studies** — In-depth study of individual or community; document change over time
- **Thematic analysis** — Code and identify themes in qualitative data

**Behavioral Change Model (Stages of Change):**
Evaluate transition through stages:
1. **Pre-contemplation** — Not considering change
2. **Contemplation** — Thinking about change; weighing pros/cons
3. **Preparation** — Planning and taking small steps
4. **Action** — Actively changing behavior
5. **Maintenance** — Sustaining new behavior over time

Measure % of participants in each stage before and after; expect progression to action/maintenance.

**Cost-Effectiveness Analysis:**
```
Cost-effectiveness = Total program cost / Outcome units achieved
Example: $100,000 program cost / 1,000 farmers trained = $100 per farmer trained
```

Compare across programs to identify most efficient approach.

**Outputs:** Formative evaluation report, baseline and endline survey data, impact assessment report with outcome analysis, cost-effectiveness analysis, lessons learned and recommendations.

---

### 5. Dashboard & Reporting Design

**Trigger:** "dashboard design", "reporting", "data visualization", "KPI dashboard", "executive report"

**Dashboard Types:**

**1. Executive Dashboard**
- **Audience:** Leadership, board, donors
- **Focus:** Strategic KPIs, overall health, key metrics at a glance
- **Refresh:** Monthly or quarterly
- **Elements:**
  - Overall scorecard (traffic light status: Green/Yellow/Red)
  - Key metrics (3–5 top KPIs with current value and trend)
  - Major risks or opportunities
  - Comparison to targets/prior period
  - Executive summary (1 paragraph key insights)

**2. Operational Dashboard**
- **Audience:** Operations team, managers
- **Focus:** Detailed metrics, process efficiency, performance by unit
- **Refresh:** Daily or weekly
- **Elements:**
  - Performance metrics by shift, location, or product
  - Current queue/backlog status
  - Machine/equipment utilization
  - Real-time alerts (errors, delays, safety issues)
  - Drill-down capability (click for detail)

**3. Project Dashboard**
- **Audience:** Project team, sponsor
- **Focus:** Schedule progress, budget, risks, milestones
- **Refresh:** Weekly or bi-weekly
- **Elements:**
  - Schedule status (% complete, on-time forecast)
  - Budget status (actual vs. planned spending)
  - Risk summary (top 3 risks, mitigation status)
  - Upcoming milestones
  - Resource allocation

**4. Customer/Beneficiary Dashboard**
- **Audience:** External stakeholders, donors, public
- **Focus:** Impact, reach, beneficiary stories
- **Refresh:** Monthly or quarterly
- **Elements:**
  - Number of beneficiaries reached (cumulative, by year)
  - Outcomes achieved (% of target)
  - Success stories or case studies (qualitative)
  - Geographic reach (map)
  - Program timeline

**Data Visualization Principles:**

| Chart Type | Best For | Example |
|-----------|----------|---------|
| **Line chart** | Trends over time | Revenue by month |
| **Bar chart** | Comparison across categories | Sales by region |
| **Pie/donut chart** | Composition (% of total) | Revenue by product line |
| **Scatter plot** | Correlation between two variables | Price vs. demand |
| **Heat map** | Intensity across two dimensions | Defect rate by machine and shift |
| **Gauge** | Single KPI against target | Revenue vs. target (red/yellow/green) |
| **Map** | Geographic distribution | Beneficiaries by district |
| **Table** | Detailed data; precise numbers | Full metric list with targets |

**Design best practices:**
- Use color intentionally (red = alert/negative, green = good, gray = neutral)
- Include units and legend; label axes
- Avoid 3D charts (hard to read); keep simple
- One insight per visualization; don't overload
- Make text readable (large fonts, high contrast)
- Mobile-responsive (works on phone, tablet, desktop)

**Report Formats:**

**1. Automated monthly report (email)**
- Executive summary (2 paragraphs)
- KPI dashboard (table or visual)
- Highlights and concerns (bullet points)
- Variance analysis (brief explanation of off-track items)
- Next steps / actions needed

**2. Quarterly business review (presentation)**
- Strategic context (what we're trying to achieve)
- Performance summary (KPIs vs. targets)
- Deep dives (1–2 metrics with detailed analysis, charts, trends)
- Variance investigation (root cause of major variances)
- Risks and opportunities
- Corrective actions and next quarter priorities

**3. Annual impact report (publication)**
- Executive summary with key achievements
- Program overview and logic model
- Results framework and outcome metrics
- Beneficiary stories and qualitative evidence
- Financial summary (budget and spending)
- Challenges and lessons learned
- Forward look and strategic priorities

**Dashboard Tools:**
- **Google Sheets** — Simple, collaborative, embeddable dashboards with charts
- **Google Data Studio** — Free BI tool; connects to Sheets, databases, APIs
- **Tableau** — Enterprise BI; rich interactivity, mobile support
- **Power BI** — Microsoft ecosystem; integrates with Excel, SQL, cloud data
- **Looker** — Cloud-based; real-time data, self-service reporting

**Outputs:** Dashboard mockups (executive, operational, project), report templates (monthly, quarterly, annual), data visualization examples, dashboard implementation plan with tool selection.

---

### 6. Lessons Learned & Knowledge Management

**Trigger:** "lessons learned", "best practices", "knowledge management", "case study", "project retrospective"

**Lessons Learned Definition:**
- Key insights from a project or program
- What worked well? What didn't work? Why?
- Applicable to future similar initiatives
- Captured systematically for organizational learning

**Capturing Lessons Learned:**

**Timing:** Conducted near project completion (not after all institutional memory is lost)

**Methods:**
1. **Retrospective meeting** — Team discusses what went well, what didn't, what to improve
2. **Structured template** — Document lessons in consistent format
3. **Interviews** — 1-on-1 conversations to capture in-depth insights

**Lesson Documentation Template:**

| Field | Content |
|-------|---------|
| **Project/Program** | Name, dates, location |
| **Lesson statement** | What we learned (concise, actionable) |
| **Context** | When/where did this happen? What was the situation? |
| **Evidence** | Data, examples, feedback supporting the lesson |
| **Impact** | What was the consequence? (Positive or negative) |
| **Root cause** | Why did this happen? |
| **Recommendation** | What should future projects do differently? |
| **Applicability** | What types of projects is this relevant to? |

**Example Lessons:**
1. **Lesson:** "Community engagement before project launch is critical; lack of engagement caused 6-month delay"
   - **Recommendation:** Conduct 2-month community consultation phase before design finalization
2. **Lesson:** "Using local staff reduces costs and builds local capacity; turnover lower with career development"
   - **Recommendation:** Prioritize local recruitment; invest in staff development; offer career pathways

**Knowledge Repository (Wiki):**
- Centralized location for lessons, tools, templates, best practices
- Indexed and searchable (by project type, theme, geography)
- Version-controlled; easy to update
- Accessible to whole organization
- Examples: Confluence, MediaWiki, Google Sites

**Best Practices Documentation:**
- "How we successfully increased farmer adoption of improved varieties" (with step-by-step)
- "Effective communication strategy for reaching rural beneficiaries" (with template)
- "Monitoring and evaluation checklist for health programs"
- "Community feedback mechanism that worked" (with example forms)

**Case Study Development:**
- Select successful or instructive project/intervention
- Document context (problem, solution, actors)
- Describe results (quantitative outcomes, qualitative feedback)
- Analyze success factors (what enabled success?)
- Capture lessons and recommendations
- Include photos, quotes, data visualizations
- Disseminate through case study brief or blog post

**Organization Learning System:**
- Regular "lunch and learn" sessions sharing lessons from projects
- Annual knowledge summit bringing teams together
- Quarterly newsletter highlighting innovations and best practices
- Communities of practice by theme (education, health, livelihoods)

**Outputs:** Lessons learned documentation, project retrospective report, knowledge repository framework, best practice briefs, case study, organizational learning plan.

---

## Connected Tools (Live Integrations)

| Tool | Purpose | Key Actions |
|------|---------|-------------|
| **Google Sheets** | Data entry, analysis, pivot tables | KPI tracking, survey data entry, analysis, dashboard |
| **Google Drive** | Documentation & collaboration | M&E plans, evaluation reports, knowledge repository |
| **Slack** | Real-time communication | KPI alerts, review reminders, evaluation findings, team coordination |
| **Zoho Projects** | Project tracking | Link M&E activities to project timeline, track evaluation milestones |
| **Claude in Chrome** | Research & vendor evaluation | Browse benchmark data, research best practices, literature review |

**Recommended Additional Connectors:**
| Category | Options |
|----------|---------|
| BI & Analytics | Tableau, Power BI, Google Data Studio, Looker |
| Survey Platforms | Qualtrics, SurveyMonkey, Google Forms, ODK (Open Data Kit) |
| Data Management | Ona (data collection), CommCare, DHIS2 (public health) |
| Knowledge Platforms | Confluence, MediaWiki, Slack (internal wiki) |

---

## How to Invoke

From any AI Memory session:

```
"Switch to M&E Agent"
"M&E: design evaluation framework for education program"
"/me-framework program:health-extension target:farmers"
"/kpi-definition strategic-kpis revenue-growth"
"/data-collection survey-design sample:500 method:in-person"
"/evaluation-design summative-evaluation program:livelihoods"
"/dashboard-design executive-dashboard refresh:monthly"
"/reporting-plan annual-impact-report"
"/lessons-learned project:agriculture retrospective"
"Design KPI dashboard for quarterly business review"
```

---

## Example Workflows

### Program Evaluation Design (Formative & Summative)
1. **Define program logic** — Use `/me-framework` to create logic model and results framework
2. **Design baseline survey** — Use `/data-collection` to specify survey, sampling, and enumerator training
3. **Conduct baseline** — Measure starting point for beneficiaries
4. **Implement program** — Execute activities over 12 months
5. **Formative evaluation (month 6)** — Assess implementation quality; identify improvements
6. **Endline survey** — Measure outcomes; compare to baseline; measure impact
7. `Generate summative evaluation report with lessons learned

### KPI Framework & Dashboard
1. **Align to strategy** — Identify business objectives and critical success factors
2. `/kpi-definition` — Define 5–7 strategic KPIs with baseline, target, owner
3. **Design dashboard** — Use `/dashboard-design` for executive dashboard layout
4. **Set review cadence** — Monthly operational reviews; quarterly strategic reviews
5. **Implement tracking** — Establish data sources; configure automated feeds
6. **Monitor performance** — Weekly standup on operational KPIs; monthly deep-dive on strategic KPIs

### Data-Driven Decision Making
1. **Identify decision question** — "Should we expand to new market?"
2. **Define information need** — "What's customer demand and willingness to pay in new market?"
3. `/data-collection` — Design survey with sampling strategy; collect market research data
4. **Analyze findings** — Calculate demand estimate, willingness to pay, addressable market
5. **Present results** — Dashboard or brief with key findings and recommendation

### Lessons Learned & Knowledge Sharing
1. **Complete project** — Conclude major initiative
2. `/lessons-learned` — Conduct retrospective; document what worked, what didn't
3. **Create case study** — Document success factors; capture qualitative and quantitative evidence
4. **Develop best practice brief** — Step-by-step guide for replicating success
5. **Share learning** — Present at team meeting; add to knowledge repository; include in annual report

### Beneficiary Feedback & Continuous Improvement
1. **Conduct beneficiary feedback survey** — Quick pulse check (quarterly)
2. **Analyze feedback** — Identify common themes; prioritize issues
3. **Implement improvements** — Address top 3 concerns
4. **Close the loop** — Report back to beneficiaries; communicate changes made
5. **Track improvement** — Measure satisfaction trend; demonstrate responsiveness

---

## Context Files

Place supporting documents in this directory for the agent to reference:

```
Memory_Agents/Operations/Monitoring-n-Evaluations/
├── AGENT.md                      ← You are here
├── me_framework.md               ← (optional) Organization's M&E approach, principles, standards
├── kpi_definitions.md            ← (optional) Master list of all KPIs, definitions, ownership
├── data_collection_tools.md      ← (optional) Standard survey instruments, questionnaires
├── evaluation_reports/           ← (optional) Archive of completed evaluations (baseline, midterm, endline)
├── templates/
│   ├── logic_model_template.md   ← (optional) Logic model diagram template
│   ├── results_framework.xlsx    ← (optional) Results framework spreadsheet template
│   ├── survey_instrument.docx    ← (optional) Example questionnaire with best practices
│   ├── kpi_dashboard_template.xlsx ← (optional) KPI tracking spreadsheet
│   ├── evaluation_report.md      ← (optional) Report template structure
│   ├── lessons_learned.md        ← (optional) Lessons documentation template
│   └── data_collection_plan.md   ← (optional) Data collection protocol
├── benchmarks/                   ← (optional) Industry benchmarks, comparison data
└── case_studies/                 ← (optional) Success stories, documented innovations
```

---

## Notes

- This agent is a sub-agent of **Operations (parent)** and coordinates with **PMO** (project schedule tracking), **Finance** (financial performance metrics), and **Strategy** (strategic KPI alignment).
- Strong M&E supports accountability, learning, and evidence-based decision-making; invest in quality data collection and analysis.
- Empower teams to use data; create culture of continuous improvement and experimentation.
- Balance quantitative metrics (scale, efficiency) with qualitative feedback (satisfaction, experience, behavior change).
- Lessons learned are most valuable when systematically captured, archived, and actively referenced in future planning.
- All outputs can be exported as `.xlsx`, `.pdf`, or `.docx` using the corresponding file creation skills.

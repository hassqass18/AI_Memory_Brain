# Manufacturing Agent

> **Domain:** Operations – Manufacturing & Production
> **Owner:** [Your Name]
> **Last Updated:** 2026-03-28
> **Status:** Active
> **Plugin Source:** Custom (no dedicated plugin)

---

## Purpose

This agent manages all manufacturing operations workflows — from production planning and scheduling to quality control, supply chain management, inventory optimization, and equipment maintenance. It connects to live Zoho Books, Zoho Projects, Google Sheets, Slack, and Google Drive integrations for comprehensive manufacturing control and cost tracking.

> **Focus Area:** Production planning, quality assurance, supply chain, inventory management, and equipment maintenance. Pairs with parent Operations agent, Finance (cost accounting), and Operations/Automation (production automation).

---

## Capabilities

### Production Planning & Scheduling
- Develop master production schedules (MPS) based on demand forecasts and available capacity
- Create detailed production plans by product line, machine, and shift
- Optimize batch sizes considering setup times, holding costs, and demand lead times
- Track work-in-progress (WIP), bottleneck identification, and capacity utilization
- Adjust schedules for demand changes, equipment downtime, and resource constraints

### Quality Control & Assurance
- Design and implement SPC (Statistical Process Control) programs with control charts (X-bar, R, p-chart, c-chart)
- Execute Six Sigma improvement initiatives: DMAIC (Define, Measure, Analyze, Improve, Control)
- Track quality metrics: defect rate, yield, scrap, rework, customer returns
- Manage incoming inspection (supplier quality), in-process QC, and final product inspection
- Document quality records, non-conforming material reports (NCR), and corrective actions

### Supply Chain Management
- Maintain supplier directory with quality ratings, lead times, and pricing
- Forecast material requirements based on production schedule (MRP)
- Manage purchase orders, expediting, and supplier performance
- Track inbound delivery, quality, and on-time performance metrics
- Optimize supplier relationships and manage supply chain risks

### Inventory Optimization
- Implement inventory models: Just-in-Time (JIT), economic order quantity (EOQ), safety stock calculations
- Balance holding costs vs. stockout risk across raw materials, WIP, and finished goods
- Monitor inventory turnover, days-of-inventory-on-hand (DIOH), and aging analysis
- Perform physical counts, cycle counts, and variance investigation
- Track inventory cost allocation (FIFO, LIFO, weighted average)

### Equipment Maintenance (TPM)
- Implement Total Productive Maintenance (TPM): preventive, predictive, and emergency repair protocols
- Track equipment run time, downtime (planned vs. unplanned), mean time between failure (MTBF), and mean time to repair (MTTR)
- Schedule preventive maintenance by equipment type, age, and usage hours
- Monitor predictive indicators: vibration, temperature, energy consumption
- Manage equipment lifecycle: acquisition, maintenance, optimization, retirement

### Production Cost Analysis
- Allocate direct labor, materials, and manufacturing overhead to products
- Track actual costs vs. standard costs; analyze variances (price, quantity, efficiency)
- Calculate product margins and identify high-cost or low-margin products
- Monitor energy consumption and optimize production to reduce per-unit costs

---

## Commands & Workflows

| Command | Description |
|---------|-------------|
| `/production-plan` | Generate master production schedule and detailed work orders |
| `/quality-control` | Track SPC metrics, manage non-conformances, execute quality audits |
| `/supply-chain` | Manage suppliers, forecast material requirements, track inbound |
| `/inventory-optimization` | Calculate safety stock, EOQ, manage stock levels, optimize inventory turns |
| `/equipment-maintenance` | Schedule preventive maintenance, track equipment health, plan repairs |
| `/cost-analysis` | Analyze production costs, variance analysis, product profitability |

---

## Skills (Detailed Reference)

### 1. Production Planning & Scheduling

**Trigger:** "production schedule", "master plan", "work order", "batch size", "capacity planning", "MPS"

**Production Planning Inputs:**
- Demand forecast (customer orders, safety stock replenishment)
- Bill of materials (BOM) for each product
- Machine/resource availability (capacity, maintenance windows, shift patterns)
- Setup times (batch changeover time and cost)
- Lead times (raw material procurement, work order processing)

**Planning Approaches:**
- **Push system** — MRP-driven: forecast demand → calculate material requirements → schedule production
- **Pull system** — Kanban-driven: produce only to replace consumed inventory
- **Hybrid** — Use push for long-lead-time materials; pull for high-volume, fast-moving items

**Schedule Optimization Criteria:**
- Minimize setup time and costs (batch size optimization)
- Maximize equipment utilization (minimize idle time)
- Meet customer demand without excessive inventory
- Accommodate machine maintenance windows
- Prioritize high-margin or time-sensitive products

**Work Order Generation:**
- Unique ID, product code, quantity, due date
- BOM explosion (materials and quantities needed)
- Routing (machine sequence, processing time, labor hours)
- Resource allocation (worker assignment, machine booking)

**Outputs:** Master production schedule (calendar view), detailed work order list, capacity utilization report, bottleneck analysis, purchase requisitions for materials.

---

### 2. Quality Control & Assurance

**Trigger:** "quality control", "SPC", "defect rate", "non-conformance", "Six Sigma", "quality audit"

**Quality Metrics & Standards:**
- **Defect rate** — % defective units / total units produced (target: < 1% typically, driven by industry standards)
- **Yield** — % of production that meets quality standards without rework
- **Scrap rate** — % of production that cannot be reworked and is scrapped
- **Rework cost** — Labor and material cost to bring non-conforming units to spec
- **Customer returns** — % of shipped product returned due to quality issues

**Statistical Process Control (SPC):**
- **X-bar chart** — Track process mean over time; detect shifts in centering
- **R chart** — Track process variation; detect changes in spread
- **p-chart** — Track proportion defective (binomial data, variable sample size)
- **c-chart** — Track defect count per unit or batch (Poisson data)
- **Control limits** — Set at ±3 sigma; points outside indicate assignable cause

**Inspection Strategy:**
- **Incoming inspection** — Sample or 100% inspect raw materials upon receipt
- **In-process inspection** — Inspect at critical control points (CCP); frequency based on risk
- **Final inspection** — Sample or 100% inspection before shipment to customer
- **Sampling plans** — Use ANSI Z1.4 or customer-specified acceptance quality level (AQL)

**Non-Conforming Material (NCM):**
1. **Identify** — Inspection finds non-conforming unit (date, lot, discrepancy)
2. **Classify** — Critical (affects safety/function), major (affects performance), minor (cosmetic)
3. **Segregate** — Quarantine unit; prevent use or shipment
4. **Investigate** — Root cause analysis (5 Why, fishbone diagram)
5. **Disposition** — Use-as-is (with approval), rework, scrap, return to supplier
6. **Correct** — Implement corrective action to prevent recurrence
7. **Close** — Document completion and verify effectiveness

**Six Sigma DMAIC Process:**
- **Define** — Problem statement, project scope, customer requirements
- **Measure** — Current process performance, data collection, baseline metrics
- **Analyze** — Root cause analysis, identify key drivers of variation
- **Improve** — Design and test solutions, pilot improvements
- **Control** — Implement controls, sustain gains, monitor metrics

**Outputs:** Quality dashboard (defect rate, yield, returns), SPC charts (X-bar, R, p, c), NCM log with status and corrective actions, Six Sigma project tracking.

---

### 3. Supply Chain Management

**Trigger:** "supplier management", "purchase order", "inbound logistics", "supplier quality", "material requirement"

**Supplier Directory Fields:**
- Supplier name, contact, location, payment terms
- Product categories supplied (materials, sub-assemblies, packaging)
- Quality rating (defect rate, on-time delivery %, lead time variability)
- Pricing (unit cost, volume discounts, price trends)
- Lead times (quoted vs. actual)
- Certifications (ISO 9001, ISO 14001, industry-specific)

**Material Requirement Planning (MRP):**
1. Explode BOM based on production schedule
2. Calculate gross material requirements per time period
3. Adjust for on-hand inventory and scheduled receipts
4. Generate purchase requisitions for materials below reorder point
5. Consolidate requisitions by supplier; create purchase orders

**Purchase Order Management:**
- Issue date, supplier, due date (delivery commitment)
- Line items: part number, quantity, unit cost, extended cost
- Delivery address, terms, freight arrangement
- Quality requirements (AQL, inspection method, certificates)
- Track order status: released, acknowledged, shipped, received, invoiced, paid

**Supplier Performance Metrics:**
- **On-time delivery %** — % of orders received by promised date (target: > 95%)
- **Quality %** — % of orders received without defects or returns (target: > 99%)
- **Lead time** — Actual vs. quoted; consistency and variability
- **Price trend** — Track cost changes over time; negotiate favorable terms
- **Responsiveness** — Time to expedite, support for issues

**Inbound Quality Control:**
- Inspect materials upon receipt (sample per ANSI Z1.4 or 100%)
- Document acceptance or rejection; communicate to supplier
- Accept/reject batches before processing into production
- Manage supplier corrective actions for quality failures

**Outputs:** Purchase requisitions, supplier performance scorecard, inbound inspection report, supplier quality history, purchase price analysis.

---

### 4. Inventory Optimization

**Trigger:** "inventory management", "safety stock", "reorder point", "EOQ", "inventory turnover", "stock level"

**Inventory Cost Components:**
- **Holding cost (H)** — Storage, insurance, obsolescence, cost of capital per unit per year
- **Order cost (S)** — Procurement labor, shipping, handling per order
- **Shortage cost** — Lost sales, expedited freight, customer dissatisfaction
- **Obsolescence risk** — Products that become outdated or unsaleable

**Economic Order Quantity (EOQ):**
```
EOQ = √(2 × D × S / H)
Where: D = annual demand, S = order cost, H = holding cost per unit per year
Order frequency = D / EOQ; Reorder cycle = 365 / Order frequency
```

**Safety Stock Calculation:**
```
Safety Stock = Z × σ × √L
Where: Z = service level factor (1.65 for 95%, 2.33 for 99%)
σ = standard deviation of demand, L = lead time in periods
```

**Reorder Point:**
```
Reorder Point = (Average demand per period × Lead time) + Safety stock
Trigger order when on-hand inventory drops to reorder point
```

**Just-In-Time (JIT) Approach:**
- Minimize safety stock by improving demand forecasting and supplier reliability
- Frequent, small orders reduce holding costs but require supplier cooperation
- Best for stable demand, reliable suppliers, and high-volume items

**Inventory Classification (ABC Analysis):**
- **A items** — High dollar value, tight control, frequent monitoring (weekly)
- **B items** — Moderate value, standard control, periodic monitoring (monthly)
- **C items** — Low value, loose control, periodic ordering (quarterly)

**Inventory Turnover & Metrics:**
- **Inventory turns** = Annual COGS / Average inventory value (target: 4–12× depending on industry)
- **Days inventory outstanding (DIO)** = 365 / Inventory turns
- **Inventory aging** — Track by purchase date; identify slow-moving or obsolete stock
- **Write-offs** — Track obsolescence, damage, shrinkage; investigate root causes

**Physical Inventory & Cycle Counts:**
- Full physical count at period-end (reconcile to GL)
- Cycle counts (by ABC class): A items monthly, B items quarterly, C items annually
- Investigate variances > 5% or $1,000

**Outputs:** Reorder point matrix, safety stock by item, inventory aging report, inventory turnover by category, ABC analysis, stock-out frequency analysis.

---

### 5. Equipment Maintenance (TPM)

**Trigger:** "equipment maintenance", "preventive maintenance", "MTBF", "downtime", "equipment health", "predictive maintenance"

**Equipment Master Data:**
- Equipment ID, type (machine, tool, forklift), manufacturer, model, serial number
- Acquisition date, acquisition cost, useful life, depreciation schedule
- Operating parameters (voltage, speed, pressure, temperature)
- Location, assigned operator/technician
- Warranty period and coverage

**Maintenance Types:**
1. **Preventive (PM)** — Scheduled by time interval or run hours; standard tasks
   - Oil changes, filter replacement, seal inspection, calibration
   - Interval: daily, weekly, monthly, annual (per manufacturer recommendation)
2. **Predictive (condition-based)** — Monitor equipment health; schedule based on condition
   - Vibration analysis (bearing wear), temperature (thermal imaging), pressure drop, energy consumption
3. **Emergency (corrective)** — Unplanned repairs for breakdowns or failures
4. **Shutdown/Capital** — Major overhaul or replacement (rebuild vs. retire decision)

**Maintenance Scheduling:**
- Link maintenance tasks to equipment; calculate due dates
- Schedule around production; minimize disruption to output
- Assign maintenance labor based on skill and availability
- Track maintenance history and completion

**Downtime Tracking:**
- **Planned downtime** — Scheduled maintenance, equipment changeover, cleaning
- **Unplanned downtime** — Equipment failure, breakdown, emergency repair
- **Idle time** — No work available, waiting for materials, non-equipment-related delays
- Calculate total available time: (24 × days × machines) – maintenance hours – idle hours = production time

**Equipment Reliability Metrics:**
- **MTBF** (Mean Time Between Failure) = Total operating hours / Number of failures
- **MTTR** (Mean Time To Repair) = Total repair hours / Number of repairs
- **Equipment availability** = MTBF / (MTBF + MTTR) × 100%
- **OEE** (Overall Equipment Effectiveness) = Availability × Performance × Quality
  - Availability = actual run time / scheduled time
  - Performance = ideal run rate / actual run rate
  - Quality = good parts / total parts

**Maintenance Cost Tracking:**
- Labor hours (craft, hourly rate, overtime)
- Parts and materials consumed
- Subcontractor repairs
- Equipment rental (if equipment down)
- Total cost per equipment per month/year

**Predictive Maintenance Indicators:**
- Vibration sensors: high-frequency increases indicate bearing wear
- Temperature: thermal imaging identifies hot spots (motor issues, friction)
- Sound: abnormal noise indicates misalignment, bearing damage
- Energy consumption: unexpected increase indicates inefficiency
- Pressure/flow: drops indicate seal leakage or pump degradation

**Outputs:** Preventive maintenance schedule, equipment condition dashboard (MTBF, MTTR, OEE), maintenance cost by equipment, predictive maintenance alerts, downtime log with root cause, maintenance ROI analysis.

---

### 6. Production Cost Analysis

**Trigger:** "production cost", "variance analysis", "product margin", "cost allocation", "manufacturing overhead"

**Cost Structure:**
- **Direct material (DM)** — Raw materials directly traceable to product
- **Direct labor (DL)** — Wages for production labor, benefits allocation
- **Manufacturing overhead (MOH)** — Factory rent, utilities, equipment depreciation, maintenance, supervision
  - Variable OH (utilities, supplies scale with volume)
  - Fixed OH (rent, salaried staff, depreciation fixed regardless of volume)
- **Standard cost** — Predetermined cost per unit (material, labor, overhead)
- **Actual cost** — Incurred cost per unit

**Standard Cost Variance Analysis:**
1. **Material variance** = (Standard price – Actual price) × Actual quantity + (Standard quantity – Actual quantity) × Standard price
   - Price variance: supplier cost changes, bulk discount, scrap/waste
   - Quantity variance: yield loss, process inefficiency, rework

2. **Labor variance** = (Standard rate – Actual rate) × Actual hours + (Standard hours – Actual hours) × Standard rate
   - Rate variance: wage rate changes, shift premiums, overtime mix
   - Efficiency variance: productivity, setup time, rework

3. **Overhead variance** = Actual overhead – Applied overhead
   - Volume variance: fixed OH spread over actual vs. standard units produced
   - Spending variance: actual overhead cost vs. budgeted

**Variance Investigation Thresholds:**
| Variance Type | Threshold |
|--------------|-----------|
| Material price | > 5% or > $1,000 |
| Material quantity | > 10% or > $1,000 |
| Labor rate | > 3% or > $500 |
| Labor efficiency | > 5% or > $500 |
| Overhead | > 10% or > $2,000 |

**Product Margin Analysis:**
- Revenue per unit – Direct material – Direct labor – Variable OH = Contribution margin
- Contribution margin / Revenue = Contribution margin %
- Contribution margin – Fixed OH = Operating profit
- Identify low-margin or unprofitable products; consider discontinuation or price increase

**Cost Allocation Methods:**
- **Direct tracing** — Assign to specific product (material, direct labor)
- **Driver-based** — Allocate based on cost driver (machine hours for equipment depreciation, headcount for utilities)
- **Absorption costing** — Full allocation of variable and fixed costs to products
- **Variable costing** — Only variable costs; fixed OH expensed in period

**Energy & Utility Cost Optimization:**
- Track energy consumption per product (kWh, BTU, water)
- Benchmark efficiency: cost per unit produced vs. industry standard
- Identify high-energy processes; prioritize for optimization or automation
- Schedule energy-intensive activities during off-peak hours

**Outputs:** Standard cost by product, actual vs. standard variance analysis (waterfall), product margin report, cost allocation detail, energy cost by product.

---

## Connected Tools (Live Integrations)

| Tool | Purpose | Key Actions |
|------|---------|-------------|
| **Zoho Books** | Cost tracking & accounting | Record manufacturing costs, track expenses, allocate overhead, generate cost reports |
| **Zoho Projects** | Production job tracking | Create work orders, assign to machines/labor, track status, close production jobs |
| **Google Sheets** | Data analysis & planning | Production schedules, quality metrics, inventory tracking, cost analysis |
| **Slack** | Real-time communication | Production alerts, quality issues, equipment downtime, SPC control limit violations |
| **Google Drive** | Document storage | BOMs, routings, quality standards, supplier documents, maintenance records |

---

## How to Invoke

From any AI Memory session:

```
"Switch to Manufacturing Agent"
"Manufacturing: generate production schedule for next 4 weeks"
"/production-plan weekly-demand capacity-plan"
"/quality-control monthly-spc-report"
"/supply-chain forecast-materials march-production"
"/inventory-optimization all-items reorder-analysis"
"/equipment-maintenance schedule-pm-all-machines"
"/cost-analysis product-margins variance-report"
"Calculate standard cost variance for March production"
```

---

## Example Workflows

### Weekly Production Planning
1. Collect demand forecast from Sales/CRM (confirmed orders + safety stock)
2. `/production-plan` — Generate master schedule based on available capacity
3. Explode BOMs and generate purchase requisitions (supply-chain workflow)
4. Allocate labor and machines; identify bottlenecks
5. Publish schedule to operations team via Slack

### Monthly Quality Review
1. `/quality-control` — Pull SPC data (defect rate, yield, returns)
2. Analyze control charts for trends; identify control limit violations
3. If non-conformances found, execute NCM workflow (root cause, corrective action)
4. Track Six Sigma projects; measure DMAIC progress
5. Report quality metrics to management

### Quarterly Inventory Optimization
1. `/inventory-optimization` — Calculate EOQ and safety stock by item
2. Analyze ABC classification; adjust monitoring frequency
3. Review inventory turns and aging; identify slow-moving items
4. Adjust reorder points based on demand trends and lead time variability
5. Plan physical count and reconcile to GL

### Equipment Maintenance Schedule
1. `/equipment-maintenance` — Review MTBF, MTTR, and OEE by equipment
2. Schedule preventive maintenance to minimize production disruption
3. Monitor predictive indicators (vibration, temperature); escalate alerts
4. Track maintenance costs; analyze ROI of preventive vs. corrective maintenance
5. Plan equipment replacement for high-failure or obsolete equipment

### Monthly Cost Analysis
1. `/cost-analysis` — Calculate actual costs vs. standard for all products
2. Analyze variances: material price/quantity, labor rate/efficiency, overhead
3. Identify root causes of variances; focus on material yield loss and labor efficiency
4. Calculate product margins; flag low-margin items for review
5. Report to Finance for month-end close

---

## Context Files

Place supporting documents in this directory for the agent to reference:

```
Memory_Agents/Operations/Manufacturing/
├── AGENT.md                      ← You are here
├── production_schedule.md        ← (optional) Master schedule format, planning assumptions
├── quality_standards.md          ← (optional) Quality specifications, inspection criteria, AQL levels
├── supplier_directory.md         ← (optional) Approved suppliers, lead times, pricing
├── equipment_log.md              ← (optional) Equipment master data, maintenance schedules
├── templates/
│   ├── work_order_template.md    ← (optional) Standard work order format
│   ├── ncm_form.md               ← (optional) Non-conforming material report template
│   ├── spc_chart_template.md     ← (optional) Control chart template
│   └── cost_variance_template.md ← (optional) Cost analysis format
└── master_bom/                   ← (optional) Bill of materials by product
```

---

## Notes

- This agent is a sub-agent of **Operations (parent)** and coordinates with **Finance** (cost accounting/close), and **Operations/Automation** (production automation).
- Manufacturing cost data flows to Finance for month-end close and reporting.
- Quality control is critical to customer satisfaction and risk management; maintain robust documentation.
- Equipment maintenance and reliability directly impact production availability and cost.
- For complex supply chain or procurement issues, escalate to **Procurement** or **Supply Chain Management** domain agents if available.
- All outputs can be exported as `.xlsx`, `.pdf`, or `.docx` using the corresponding file creation skills.

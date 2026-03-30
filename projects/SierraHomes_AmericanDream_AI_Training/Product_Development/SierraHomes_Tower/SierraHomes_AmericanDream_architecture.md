# SierraHomes_AmericanDream — Architecture & Design Document

**Document Purpose:** This is the architectural and development design document for SierraHomes_AmericanDream. It defines the building configuration, unit specifications, site infrastructure, construction approach, legal/regulatory framework, financial model, and operational design. All AI assistants must read and reference this document when working on any aspect of the development.

**Memory Design Version:** 1.1
**Last Updated:** 2026-03-29
**Status:** Complete — ready for construction phase

---

## 1. Building Configuration

| Parameter | Detail |
|-----------|--------|
| Building Type | Residential apartment tower |
| Storeys | Ground + 11 (12 floors total) |
| Total Units | 108 |
| Units per Floor | ~9 (average) |
| Location | Nyali, Mombasa, Kenya |
| Design Status | Complete — awaiting permits |

---

## 2. Unit Specifications

| Type | Count | % of Total | Size (sqft) | Size (sqm) | Off-Plan Price (KES) | On-Plan Price (KES) | Price/sqft (off) | Price/sqft (on) |
|------|------:|----------:|------------:|-----------:|---------------------:|--------------------:|-----------------:|----------------:|
| 1 Bedroom | 24 | 22% | 966 | 89.7 | 6,000,000 | 9,000,000 | 6,211 | 9,317 |
| 2 Bedroom | 36 | 33% | 1,311 | 121.8 | 13,000,000 | 17,000,000 | 9,916 | 12,968 |
| 3 Bedroom | 48 | 44% | 2,617 | 243.1 | 18,000,000 | 23,000,000 | 6,878 | 8,791 |
| **Total** | **108** | **100%** | | | | | | |

**Total Gross Floor Area:** 195,996 sqft / 18,208 sqm

---

## 3. Amenities

| Amenity | Detail |
|---------|--------|
| Security | 24-hour manned security, gated perimeter, CCTV |
| Parking | Basement or podium (ratio TBD) |
| Swimming Pool | Communal pool |
| Gym / Fitness Centre | On-site residents' gym |
| **Rooftop Movie Theatre & Bar** | **Premium differentiator — centrepiece of marketing** |

---

## 4. Cost Structure

| Component | KES | % |
|-----------|----:|--:|
| Hard costs (construction) | 792,000,000 | 87.0% |
| Soft costs (fees, permits, legal, marketing) | 117,961,921 | 13.0% |
| **Total Development Cost** | **909,961,921** | **100%** |

**Key cost metrics:**
- Hard cost per unit (avg): KES 7,333,333
- Hard cost per sqft: KES 4,041
- Hard cost per sqm: KES 43,498
- Total dev cost per unit (avg): KES 8,425,574

**Soft cost categories** (to be itemised):
- Architectural & engineering fees
- Quantity surveyor / project management fees
- Legal (title, permits, SPAs)
- County/national government levies
- Marketing and sales costs
- Contingency / miscellaneous

---

## 5. Financial Model

### Revenue Projections

| Sales Phase | Units | Revenue (KES) |
|-------------|------:|--------------:|
| Off-plan (40%) | 43 | 584,000,000 |
| On-plan (60%) | 65 | 1,167,000,000 |
| **Total** | **108** | **1,751,000,000** |

### Summary

| Metric | KES |
|--------|----:|
| Total Gross Revenue | 1,751,000,000 |
| Total Development Cost | 909,961,921 |
| **Gross Profit** | **841,038,079** |
| **Gross ROC** | **~92.4%** |

### Financing Structure

| Source | KES | Notes |
|--------|----:|-------|
| Off-plan sales (buyer deposits + staged payments) | 584,000,000 | Primary construction funding |
| Equity investors | ~325,961,921 | Bridge for construction gap |
| **Total** | **909,961,921** | |

---

## 6. Sales Model & Pricing Strategy

- **Model:** For-sale only — no rental
- **Split:** 40% off-plan / 60% on-plan
- **Off-plan discount:** 28–50% below on-plan price (incentivises early buyers)
- **Sales priority:** 3BR first → 2BR → 1BR (margin management)
- **Target buyers:** Kenyan diaspora (primary), local investors (primary), international (secondary)
- **Sales launch:** Immediately (pre-permit reservations → convert to SPAs on permit)

---

## 7. Legal & Regulatory Framework

| Item | Status |
|------|--------|
| Land Title | To be confirmed (freehold/leasehold) |
| Architectural Plans | Complete |
| Mombasa County Development Permit | Pending — expected Q3 2026 |
| National Construction Authority (NCA) Registration | Required before commencement |
| NEMA Environmental Impact Assessment | May be required — legal counsel to confirm |
| Sale & Purchase Agreements (SPA) | To be drafted — standard Kenyan off-plan SPA |

---

## 8. Construction Model

| Parameter | Detail |
|-----------|--------|
| Contractor Status | Tender not yet issued — post-permit |
| Construction Start | Q3 2026 (on permit) |
| Target Completion | August 2029 |
| Duration | ~36 months |
| Build Method | Cast in-situ reinforced concrete (to be confirmed by structural engineer) |

### Construction Milestones

| Milestone | Target |
|-----------|--------|
| Groundbreaking / site establishment | Q3 2026 |
| Foundations complete | Q4 2026 |
| Ground to Level 3 | Q2 2027 |
| Level 4 to Level 7 | Q4 2027 |
| Level 8 to Level 11 (topped out) | Q2 2028 |
| MEP complete | Q4 2028 |
| Internal finishes complete | Q1 2029 |
| Rooftop amenities complete | Q2 2029 |
| Snagging & NCA certification | Q2–Q3 2029 |
| **Practical completion** | **August 2029** |

---

## 9. Post-Delivery Operations

| Item | Status |
|------|--------|
| Management Model | TBD — professional firm recommended |
| Service Charge | To be set before sales launch |
| Facilities | Security, pool, gym, rooftop maintenance |
| Staffing | Building manager, security, maintenance |

---

## 10. AI Conventions for This Project

- **Domain of work:** Real estate development — not software
- **`Product_Development/`** folder = construction design & development docs (building specs, floor plans, construction instructions)
- **`Product_Development/Releases/`** = project phases (Phase 1 pre-launch, Phase 2 off-plan, Phase 3 construction, Phase 4 handover)
- **`Product_Development/SierraHomes_Tower/`** = technical building documentation (architecture, module map = floor-by-floor layout, production instructions = construction & handover procedures)
- **No software stack** — technology tools are: Zoho CRM, Slack, GitHub (for AI memory), standard MS Office/Google Workspace
- **`[AI]` tasks:** Research, document generation, financial modelling, marketing content, legal drafts, strategic analysis
- **`[Human]` tasks:** Legal signings, financial transactions, contractor negotiations, site visits, permit submissions, investor meetings
- **`[AI+Human]` tasks:** Sales pitch preparation, investor deck review, marketing campaign execution

---

*This document is the architectural constitution for SierraHomes_AmericanDream. Update when design changes are made.*

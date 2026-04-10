/**
 * Netlify Function: /api/revops-audit
 * Receives RevOps Audit form submissions → creates Lead in Zoho CRM
 *
 * Lead_Source = "RevOps Audit" → triggers RevOps nurture workflow in Zoho
 *
 * Maps all 39 questions from the RevOps Audit Blueprint v1.0
 * All 34 custom fields created in Zoho CRM Leads module on 2026-04-10
 *
 * Expected body keys (camelCase from front-end form):
 *   firstName, lastName, email, phone, company, role, website, industry,
 *   companyHeadcount, annualRevenueRange,
 *   businessModel, avgDealSize, salesCycleLength, closeRate, salesProcessStatus,
 *   currentCRM, crmAdoption, activeDealsCount, forecastConfidence, pipelineChallenges,
 *   leadSourcesUsed, icpStatus, outboundMotion, salesMktgAlignment,
 *   marketingAutomation, revenueTools, dataQuality,
 *   revenueTeamSize, revopsRoleStatus, pipelineReviewCadence,
 *   revenueChallenge, previousAttempts, sixMonthGoal, urgencyLevel,
 *   budgetStatus, decisionStructure, preferredEngagement, auditTrigger, additionalContext
 */

import { getAccessToken, createLead } from './_zoho.js';

export default async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: cors() });
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const body = await req.json();

    // ── Required field validation ──────────────────────────────────────────
    const { firstName, email, company } = body;
    if (!firstName || !email || !company) {
      return json({ error: 'Missing required fields: firstName, email, company' }, 400);
    }

    const token = await getAccessToken();

    // ── Build Zoho CRM Lead record ─────────────────────────────────────────
    const leadData = {
      // ── Standard CRM fields ──────────────────────────────────────────────
      First_Name:              firstName,
      Last_Name:               body.lastName || '',
      Email:                   email,
      Phone:                   body.phone || '',
      Company:                 company,
      Designation:             body.role || '',           // Q6
      Website:                 body.website || '',        // Q7
      Industry:                body.industry || '',       // Q8
      Lead_Source:             'RevOps Audit',            // Triggers workflow rule
      Lead_Status:             'New',

      // ── Section 1 custom fields ───────────────────────────────────────────
      Company_Headcount:       body.companyHeadcount || '',     // Q9
      Annual_Revenue_Range:    body.annualRevenueRange || '',   // Q10

      // ── Section 2 — Revenue Engine ────────────────────────────────────────
      Business_Model:          body.businessModel || '',        // Q11
      Avg_Deal_Size:           body.avgDealSize || '',          // Q12
      Sales_Cycle_Length:      body.salesCycleLength || '',     // Q13
      Close_Rate:              body.closeRate || '',            // Q14
      Sales_Process_Status:    body.salesProcessStatus || '',  // Q15

      // ── Section 3 — Pipeline & Forecasting ───────────────────────────────
      Current_CRM:             body.currentCRM || '',           // Q16
      CRM_Adoption:            body.crmAdoption || '',          // Q17
      Active_Deals_Count:      body.activeDealsCount || '',     // Q18
      Forecast_Confidence:     body.forecastConfidence || '',   // Q19
      Pipeline_Challenges:     body.pipelineChallenges || '',   // Q20 (multi → comma-sep)

      // ── Section 4 — Go-To-Market ──────────────────────────────────────────
      Lead_Sources_Used:       body.leadSourcesUsed || '',      // Q21 (multi)
      ICP_Status:              body.icpStatus || '',            // Q22
      Outbound_Motion:         body.outboundMotion || '',       // Q23 (multi)
      Sales_Mktg_Alignment:    body.salesMktgAlignment || '',   // Q24

      // ── Section 5 — Tech Stack & Data ────────────────────────────────────
      Marketing_Automation:    body.marketingAutomation || '',  // Q25
      Revenue_Tools:           body.revenueTools || '',         // Q26 (multi)
      Data_Quality:            body.dataQuality || '',          // Q27

      // ── Section 6 — Team & Operations ────────────────────────────────────
      Revenue_Team_Size:       body.revenueTeamSize || '',      // Q28
      RevOps_Role_Status:      body.revopsRoleStatus || '',     // Q29
      Pipeline_Review_Cadence: body.pipelineReviewCadence || '', // Q30

      // ── Section 7 — Challenges & Goals ───────────────────────────────────
      Revenue_Challenge:       body.revenueChallenge || '',     // Q31
      Previous_Attempts:       body.previousAttempts || '',     // Q32
      Six_Month_Goal:          body.sixMonthGoal || '',         // Q33
      Urgency_Level:           body.urgencyLevel || '',         // Q34

      // ── Section 8 — Engagement Context ───────────────────────────────────
      Budget_Status:           body.budgetStatus || '',         // Q35
      Decision_Structure:      body.decisionStructure || '',    // Q36
      Preferred_Engagement:    body.preferredEngagement || '',  // Q37 (multi)
      Audit_Trigger:           body.auditTrigger || '',         // Q38
      Additional_Context:      body.additionalContext || '',    // Q39

      // ── Meta ──────────────────────────────────────────────────────────────
      Audit_Type:              'RevOps Audit',
      // RevOps_Score: calculated manually after reviewing the lead

      // Plain-text summary for legacy CRM views
      Description: [
        `RevOps Audit — ${new Date().toISOString().split('T')[0]}`,
        `CRM: ${body.currentCRM || '—'}`,
        `Deal Size: ${body.avgDealSize || '—'} | Cycle: ${body.salesCycleLength || '—'}`,
        `Urgency: ${body.urgencyLevel || '—'} | Budget: ${body.budgetStatus || '—'}`,
        `Challenge: ${(body.revenueChallenge || '').slice(0, 300)}`,
      ].filter(Boolean).join('\n'),
    };

    // Remove blank strings so CRM doesn't overwrite existing data with empty values
    Object.keys(leadData).forEach(k => {
      if (leadData[k] === '' || leadData[k] === null || leadData[k] === undefined) {
        delete leadData[k];
      }
    });

    const result = await createLead(token, leadData);
    const leadId = result?.data?.[0]?.details?.id;

    if (!leadId) {
      console.error('Lead creation result:', JSON.stringify(result));
    }

    return json({ success: true, id: leadId || null });

  } catch (err) {
    console.error('revops-audit error:', err);
    return json({ error: 'Submission failed', detail: err.message }, 500);
  }
};

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json', ...cors() },
});

const cors = () => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
});

export const config = { path: '/api/revops-audit' };

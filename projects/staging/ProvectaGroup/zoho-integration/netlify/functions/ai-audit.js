/**
 * Netlify Function: /api/ai-audit
 * Receives AI Memory Brain Assessment submissions → creates Lead in Zoho CRM
 * Lead_Source = "AI Audit" → triggers AI nurture workflow in Zoho
 *
 * Quiz answer keys:
 *   q1 = AI adoption (none | few | some | most)
 *   q2 = AI tools used
 *   q3 = primary use case
 *   q4 = data readiness (nowhere | scattered | structured | ai-ready)
 *   q5 = biggest barrier
 *   q6 = success metric
 *   q7 = implementation timeline (now | soon | exploring | future)
 */

import { getAccessToken, createLead } from './_zoho.js';

// Map raw answers to human-readable labels for CRM
const ADOPTION_LABELS = {
  none: 'No AI adoption yet',
  few:  '1–5 early adopters',
  some: '6–25 people (growing)',
  most: 'Company-wide adoption',
};

const READINESS_LABELS = {
  nowhere:    'Data is siloed/inaccessible',
  scattered:  'Data exists but scattered',
  structured: 'Structured, mostly clean',
  'ai-ready': 'AI-ready data infrastructure',
};

const TIMELINE_LABELS = {
  now:       'Ready to start now',
  soon:      'Within 3–6 months',
  exploring: 'Exploring options',
  future:    '6–12+ months out',
};

function scoreToTier(score) {
  if (score >= 16) return 'Tier 1 – AI-Ready';
  if (score >= 10) return 'Tier 2 – AI-Emerging';
  if (score >= 5)  return 'Tier 3 – AI-Aware';
  return 'Tier 4 – AI-Unaware';
}

export default async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: cors() });
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const { first, last, email, company, role, answers, score } = await req.json();

    if (!first || !email || !company) {
      return json({ error: 'Missing required fields' }, 400);
    }

    const token = await getAccessToken();

    const adoptionLabel   = ADOPTION_LABELS[answers?.q1]   || answers?.q1 || '';
    const readinessLabel  = READINESS_LABELS[answers?.q4]  || answers?.q4 || '';
    const timelineLabel   = TIMELINE_LABELS[answers?.q7]   || answers?.q7 || '';
    const aiTier          = scoreToTier(score || 0);

    const leadData = {
      First_Name:       first,
      Last_Name:        last || '(not provided)',
      Email:            email,
      Company:          company,
      Designation:      role || '',
      Lead_Source:      'AI Audit',             // triggers AI nurture workflow
      Lead_Status:      'New',
      // Custom fields — create these in Zoho CRM > Settings > Fields
      AI_Adoption_Level:  adoptionLabel,         // field API name: AI_Adoption_Level
      AI_Readiness_Score: String(score || 0),    // field API name: AI_Readiness_Score
      AI_Readiness_Tier:  aiTier,                // field API name: AI_Readiness_Tier
      Implementation_Timeline: timelineLabel,    // field API name: Implementation_Timeline
      Audit_Type:         'AI Audit',            // field API name: Audit_Type (shared with RevOps)
      Description: [
        `AI Memory Brain Assessment`,
        `Score: ${score}/21 — ${aiTier}`,
        `AI Adoption: ${adoptionLabel}`,
        `Data Readiness: ${readinessLabel}`,
        `Timeline: ${timelineLabel}`,
        `Biggest Barrier: ${answers?.q5 || 'N/A'}`,
        `Primary Use Case: ${answers?.q3 || 'N/A'}`,
      ].join('\n'),
    };

    const result = await createLead(token, leadData);

    return json({
      success: true,
      id: result?.data?.[0]?.details?.id,
      tier: aiTier,
      score,
    });

  } catch (err) {
    console.error('ai-audit error:', err);
    return json({ error: 'Submission failed' }, 500);
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

export const config = { path: '/api/ai-audit' };

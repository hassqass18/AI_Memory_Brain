/**
 * Netlify Function: /api/revops-audit
 * Receives RevOps Audit form submissions → creates Lead in Zoho CRM
 * Lead_Source = "RevOps Audit" → triggers RevOps nurture workflow in Zoho
 */

import { getAccessToken, createLead } from './_zoho.js';

export default async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: cors() });
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const { firstName, lastName, email, company, role, crm, challenge } = await req.json();

    if (!firstName || !email || !company) {
      return json({ error: 'Missing required fields' }, 400);
    }

    const token = await getAccessToken();

    const leadData = {
      First_Name:        firstName,
      Last_Name:         lastName || '(not provided)',
      Email:             email,
      Company:           company,
      Designation:       role || '',
      Lead_Source:       'RevOps Audit',          // triggers RevOps nurture workflow
      Lead_Status:       'New',
      // Custom fields — create these in Zoho CRM > Settings > Fields
      Current_CRM:       crm || '',               // field API name: Current_CRM
      Biggest_Challenge: challenge || '',          // field API name: Biggest_Challenge
      Audit_Type:        'RevOps Audit',           // field API name: Audit_Type
      Description:       `RevOps Audit submission.\nCRM: ${crm}\nChallenge: ${challenge}`,
    };

    const result = await createLead(token, leadData);

    return json({ success: true, id: result?.data?.[0]?.details?.id });

  } catch (err) {
    console.error('revops-audit error:', err);
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

export const config = { path: '/api/revops-audit' };

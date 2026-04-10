#!/usr/bin/env node
/**
 * setup-zoho.js — Provecta Group one-command Zoho setup
 *
 * Run once after setting env vars:
 *   ZOHO_CLIENT_ID=xxx ZOHO_CLIENT_SECRET=xxx ZOHO_REFRESH_TOKEN=xxx node setup-zoho.js
 *
 * Or copy values from HassanKeys.txt and set them in your shell first.
 *
 * What this script creates:
 *   ✅ 7 custom fields in Zoho CRM Leads module
 *   ✅ 2 Workflow Rules (RevOps Audit intake, AI Audit intake)
 *   ✅ 2 Zoho Campaigns mailing lists (RevOps Prospects, AI Prospects)
 */

const DC     = process.env.ZOHO_DATA_CENTER || 'com';
const CRM    = `https://www.zohoapis.${DC}/crm/v2`;
const CAMP   = `https://campaigns.zoho.${DC}/api/v1.1`;
const ACCTS  = `https://accounts.zoho.${DC}/oauth/v2/token`;

// ── 1. Get access token ──────────────────────────────────────────────────────

async function getToken() {
  const required = ['ZOHO_CLIENT_ID', 'ZOHO_CLIENT_SECRET', 'ZOHO_REFRESH_TOKEN'];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length) {
    console.error(`\n❌ Missing env vars: ${missing.join(', ')}`);
    console.error('Set them before running:\n  ZOHO_CLIENT_ID=xxx ZOHO_CLIENT_SECRET=xxx ZOHO_REFRESH_TOKEN=xxx node setup-zoho.js\n');
    process.exit(1);
  }

  const res = await fetch(ACCTS + '?' + new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    client_id:     process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    grant_type:    'refresh_token',
  }), { method: 'POST' });

  const body = await res.json();
  if (!body.access_token) {
    console.error('❌ Token refresh failed:', JSON.stringify(body));
    process.exit(1);
  }
  console.log('✅ Zoho access token obtained\n');
  return body.access_token;
}

// ── 2. Create custom CRM fields ──────────────────────────────────────────────

const CUSTOM_FIELDS = [
  {
    field_label:  'Current CRM',
    api_name:     'Current_CRM',
    data_type:    'text',
    length:       100,
  },
  {
    field_label:  'Biggest Challenge',
    api_name:     'Biggest_Challenge',
    data_type:    'textarea',
  },
  {
    field_label:  'Audit Type',
    api_name:     'Audit_Type',
    data_type:    'picklist',
    pick_list_values: [
      { display_value: 'RevOps Audit', actual_value: 'RevOps Audit', sequence_number: 1 },
      { display_value: 'AI Audit',     actual_value: 'AI Audit',     sequence_number: 2 },
    ],
  },
  {
    field_label:  'AI Adoption Level',
    api_name:     'AI_Adoption_Level',
    data_type:    'text',
    length:       100,
  },
  {
    field_label:  'AI Readiness Score',
    api_name:     'AI_Readiness_Score',
    data_type:    'integer',
  },
  {
    field_label:  'AI Readiness Tier',
    api_name:     'AI_Readiness_Tier',
    data_type:    'picklist',
    pick_list_values: [
      { display_value: 'Tier 1 – AI-Ready',    actual_value: 'Tier 1 – AI-Ready',    sequence_number: 1 },
      { display_value: 'Tier 2 – AI-Emerging', actual_value: 'Tier 2 – AI-Emerging', sequence_number: 2 },
      { display_value: 'Tier 3 – AI-Aware',    actual_value: 'Tier 3 – AI-Aware',    sequence_number: 3 },
      { display_value: 'Tier 4 – AI-Unaware',  actual_value: 'Tier 4 – AI-Unaware',  sequence_number: 4 },
    ],
  },
  {
    field_label:  'Implementation Timeline',
    api_name:     'Implementation_Timeline',
    data_type:    'text',
    length:       150,
  },
];

async function createCRMFields(token) {
  console.log('── Creating custom CRM fields in Leads module ──');

  // First check what fields already exist
  const existRes = await fetch(`${CRM}/settings/fields?module=Leads`, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` },
  });
  const existBody = await existRes.json();
  const existingApiNames = new Set(
    (existBody.fields || []).map(f => f.api_name)
  );

  for (const field of CUSTOM_FIELDS) {
    const apiName = field.api_name + '__c'; // Zoho appends __c to custom fields
    if (existingApiNames.has(apiName) || existingApiNames.has(field.api_name)) {
      console.log(`  ⏭  ${field.field_label} — already exists, skipping`);
      continue;
    }

    const res = await fetch(`${CRM}/settings/fields?module=Leads`, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: [field] }),
    });
    const body = await res.json();

    if (body.fields?.[0]?.status === 'success' || res.ok) {
      console.log(`  ✅ Created: ${field.field_label}`);
    } else {
      console.warn(`  ⚠️  ${field.field_label}:`, JSON.stringify(body).slice(0, 120));
    }
  }
  console.log();
}

// ── 3. Create Workflow Rules ─────────────────────────────────────────────────

async function createWorkflowRules(token) {
  console.log('── Creating Workflow Rules ──');

  const rules = [
    {
      name:        'RevOps Audit — New Lead Intake',
      description: 'Fires when a lead arrives from the RevOps Audit form. Tags lead and queues for Day-0 email.',
      module:      { api_name: 'Leads' },
      trigger:     { type: 'Record_Action', actions: ['create'] },
      conditions: {
        group_operator: 'and',
        conditions: [{ field: { api_name: 'Lead_Source' }, comparator: 'equal', value: 'RevOps Audit' }],
      },
      actions: [
        {
          type: 'tag',
          tags: [{ name: 'revops-audit-inbound' }],
        },
      ],
      active: true,
    },
    {
      name:        'AI Audit — New Lead Intake',
      description: 'Fires when a lead arrives from the AI Memory Brain assessment. Tags by tier and queues nurture.',
      module:      { api_name: 'Leads' },
      trigger:     { type: 'Record_Action', actions: ['create'] },
      conditions: {
        group_operator: 'and',
        conditions: [{ field: { api_name: 'Lead_Source' }, comparator: 'equal', value: 'AI Audit' }],
      },
      actions: [
        {
          type: 'tag',
          tags: [{ name: 'ai-audit-inbound' }],
        },
      ],
      active: true,
    },
  ];

  for (const rule of rules) {
    const res = await fetch(`${CRM}/settings/workflow/rules`, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ workflow_rules: [rule] }),
    });
    const body = await res.json();

    if (body.workflow_rules?.[0]?.status === 'success' || res.ok) {
      console.log(`  ✅ Created rule: ${rule.name}`);
    } else {
      console.warn(`  ⚠️  ${rule.name}:`, JSON.stringify(body).slice(0, 200));
    }
  }
  console.log();
}

// ── 4. Create Zoho Campaigns mailing lists ───────────────────────────────────

async function createMailingLists(token) {
  console.log('── Creating Zoho Campaigns mailing lists ──');

  const lists = [
    { listname: 'RevOps Prospects', signup_form_url: '', description: 'Leads from RevOps Audit form on provectagroup.com' },
    { listname: 'AI Prospects',     signup_form_url: '', description: 'Leads from AI Memory Brain assessment on provectagroup.com' },
  ];

  for (const list of lists) {
    const params = new URLSearchParams({
      resfmt: 'JSON',
      listname: list.listname,
      description: list.description,
    });

    const res = await fetch(`${CAMP}/json/createlist?${params}`, {
      method: 'POST',
      headers: { Authorization: `Zoho-oauthtoken ${token}` },
    });
    const body = await res.json();

    if (body.status === 'success' || body.code === 'success') {
      console.log(`  ✅ Created mailing list: ${list.listname}`);
    } else if (body.message?.includes('already exists') || body.code === 'DuplicateList') {
      console.log(`  ⏭  ${list.listname} — already exists, skipping`);
    } else {
      console.warn(`  ⚠️  ${list.listname}:`, JSON.stringify(body).slice(0, 200));
    }
  }
  console.log();
}

// ── 5. Summary ───────────────────────────────────────────────────────────────

function printSummary() {
  console.log('═'.repeat(60));
  console.log('SETUP COMPLETE — Next steps:');
  console.log('═'.repeat(60));
  console.log(`
1. NETLIFY ENV VARS — Add to Netlify Dashboard → Site Settings → Env Vars:
   ZOHO_CLIENT_ID      = (from HassanKeys.txt)
   ZOHO_CLIENT_SECRET  = (from HassanKeys.txt)
   ZOHO_REFRESH_TOKEN  = (from HassanKeys.txt)
   ZOHO_DATA_CENTER    = com

2. DEPLOY WEBSITE — Copy these files to the provecta site root:
   netlify/functions/_zoho.js
   netlify/functions/revops-audit.js
   netlify/functions/ai-audit.js
   netlify.toml

3. VERIFY IN ZOHO CRM:
   → Settings > Modules > Leads > Fields: confirm 7 new fields
   → Settings > Automation > Workflow Rules: confirm 2 rules (set to Active)
   → Zoho Campaigns > Mailing Lists: confirm 2 new lists

4. TEST BOTH FORMS at provectagroup.com:
   → Submit RevOps Audit → check Zoho CRM Leads for Lead_Source = "RevOps Audit"
   → Complete AI Assessment → check Zoho CRM Leads for Lead_Source = "AI Audit"

5. SET UP NURTURE EMAILS in Zoho Campaigns:
   → See NURTURE-CAMPAIGNS.md for full email sequence copy + timing
`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

(async () => {
  console.log('\n🚀 Provecta Group — Zoho Setup Script\n');
  try {
    const token = await getToken();
    await createCRMFields(token);
    await createWorkflowRules(token);
    await createMailingLists(token);
    printSummary();
  } catch (err) {
    console.error('\n❌ Unexpected error:', err.message);
    process.exit(1);
  }
})();

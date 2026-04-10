#!/usr/bin/env node
/**
 * test-forms.js — Test form → Netlify Function → Zoho CRM pipeline
 *
 * Usage (run AFTER deploying to Netlify):
 *   node test-forms.js revops          → sends a test RevOps Audit lead
 *   node test-forms.js ai              → sends a test AI Audit lead
 *
 * Set SITE_URL to your Netlify URL before running:
 *   SITE_URL=https://your-site.netlify.app node test-forms.js revops
 */

const BASE = process.env.SITE_URL || 'http://localhost:8888';

const REVOPS_PAYLOAD = {
  firstName: 'Test',
  lastName:  'Lead',
  email:     'test-revops@provectagroup.com',
  company:   'Test Company Inc',
  role:      'CRO / Chief Revenue Officer',
  crm:       'HubSpot',
  challenge: 'Our pipeline data is unreliable and we cannot forecast accurately.',
};

const AI_PAYLOAD = {
  first:   'Test',
  last:    'Lead',
  email:   'test-ai@provectagroup.com',
  company: 'Test Company Inc',
  role:    'CEO',
  score:   14,
  answers: {
    q1: 'some',
    q2: 'often',
    q3: 'ops',
    q4: 'scattered',
    q5: 'No clear AI strategy',
    q6: 'Productivity gains',
    q7: 'soon',
  },
};

async function testForm(type) {
  const endpoint = type === 'revops' ? '/api/revops-audit' : '/api/ai-audit';
  const payload  = type === 'revops' ? REVOPS_PAYLOAD : AI_PAYLOAD;
  const url      = BASE + endpoint;

  console.log(`\n🧪 Testing ${type === 'revops' ? 'RevOps Audit' : 'AI Audit'} form`);
  console.log(`   POST ${url}`);
  console.log(`   Payload:`, JSON.stringify(payload, null, 2));

  try {
    const res  = await fetch(url, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });
    const body = await res.json();

    if (res.ok && body.success) {
      console.log(`\n✅ Success! Zoho Lead ID: ${body.id}`);
      if (body.tier) console.log(`   AI Tier: ${body.tier} | Score: ${body.score}/21`);
      console.log('\n   → Check Zoho CRM > Leads to confirm the record was created.\n');
    } else {
      console.error(`\n❌ Failed (${res.status}):`, JSON.stringify(body));
    }
  } catch (err) {
    console.error('\n❌ Network error:', err.message);
    console.error('   Is the Netlify dev server running? Try: npx netlify dev');
  }
}

const type = process.argv[2];
if (!['revops', 'ai'].includes(type)) {
  console.error('Usage: node test-forms.js revops|ai');
  process.exit(1);
}
testForm(type);

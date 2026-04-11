const https = require('https');
const querystring = require('querystring');

// ── Helper: make an HTTPS request and return { statusCode, body } ──
function httpsRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

// ── Step 1: Exchange refresh token for a fresh access token ──
async function getAccessToken() {
  const params = querystring.stringify({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    client_id:     process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    grant_type:    'refresh_token',
  });

  const accountsHost = process.env.ZOHO_ACCOUNTS_HOST || 'accounts.zoho.com';

  const res = await httpsRequest(
    {
      hostname: accountsHost,
      path:     `/oauth/v2/token?${params}`,
      method:   'POST',
      headers:  { 'Content-Length': 0 },
    },
    ''
  );

  const json = JSON.parse(res.body);
  if (!json.access_token) {
    throw new Error(`Token error: ${res.body}`);
  }
  return json.access_token;
}

// ── Step 2: Create a Lead in Zoho CRM ──
async function createLead(accessToken, fields) {
  const payload = JSON.stringify({
    data: [
      {
        First_Name:  fields.firstName,
        Last_Name:   fields.lastName  || '(not provided)',
        Email:       fields.email,
        Company:     fields.company   || '(not provided)',
        Title:       fields.role      || '',
        Lead_Source: 'Website',
        Description: [
          fields.crm       ? `Current CRM: ${fields.crm}`           : '',
          fields.challenge ? `Challenge: ${fields.challenge}`        : '',
        ].filter(Boolean).join('\n'),
      },
    ],
    trigger: ['approval', 'workflow', 'blueprint'],
  });

  const apiHost = process.env.ZOHO_API_HOST || 'www.zohoapis.com';

  const res = await httpsRequest(
    {
      hostname: apiHost,
      path:     '/crm/v3/Leads',
      method:   'POST',
      headers:  {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type':  'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    },
    payload
  );

  return { statusCode: res.statusCode, body: JSON.parse(res.body) };
}

// ── Lambda handler ──
exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  let fields;
  try {
    fields = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  if (!fields.email || !fields.lastName) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'email and lastName are required' }) };
  }

  try {
    const accessToken = await getAccessToken();
    const result      = await createLead(accessToken, fields);

    if (result.statusCode === 201 || result.statusCode === 200) {
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ success: true, id: result.body?.data?.[0]?.details?.id }),
      };
    } else {
      const msg = result.body?.data?.[0]?.message || result.body?.message || 'CRM error';
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: msg }) };
    }
  } catch (err) {
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: err.message }) };
  }
};

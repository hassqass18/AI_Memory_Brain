/**
 * _zoho.js — Shared Zoho OAuth helper for Netlify Functions
 * Uses ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN env vars
 */

const DC = process.env.ZOHO_DATA_CENTER || 'com'; // com | eu | in | au | jp | ca

export async function getAccessToken() {
  const res = await fetch(
    `https://accounts.zoho.${DC}/oauth/v2/token?` +
    new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id:     process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type:    'refresh_token',
    }),
    { method: 'POST' }
  );
  const { access_token } = await res.json();
  if (!access_token) throw new Error('Zoho token refresh failed');
  return access_token;
}

export async function createLead(token, data) {
  const res = await fetch(`https://www.zohoapis.${DC}/crm/v2/Leads`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [data] }),
  });
  return res.json();
}

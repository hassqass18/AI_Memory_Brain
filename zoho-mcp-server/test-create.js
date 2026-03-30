#!/usr/bin/env node

/**
 * Diagnostic script to test Zoho Projects task creation.
 * Tests both JSON and form-encoded approaches.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '.zoho-config.json'), 'utf-8'));
const tokens = JSON.parse(fs.readFileSync(path.join(__dirname, '.zoho-tokens.json'), 'utf-8'));

const PORTAL_ID = '794020379';
const PROJECT_ID = '2029623000005138023';
const TASKLIST_ID = '2029623000005217001';

async function refreshToken() {
  const accountsUrl = config.data_center === 'us' ? 'https://accounts.zoho.com' : `https://accounts.zoho.${config.data_center}`;
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: config.client_id,
    client_secret: config.client_secret,
    refresh_token: tokens.refresh_token,
  });
  const resp = await fetch(`${accountsUrl}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const data = await resp.json();
  if (data.access_token) {
    tokens.access_token = data.access_token;
    tokens.expires_at = Date.now() + (data.expires_in * 1000) - 60000;
    fs.writeFileSync(path.join(__dirname, '.zoho-tokens.json'), JSON.stringify(tokens, null, 2));
    console.log('Token refreshed successfully');
  }
  return tokens.access_token;
}

async function testCreate() {
  // Refresh token first
  const accessToken = await refreshToken();

  const url = `https://projectsapi.zoho.com/restapi/portal/${PORTAL_ID}/projects/${PROJECT_ID}/tasklists/${TASKLIST_ID}/tasks/`;

  console.log('\n=== Test 1: Form-encoded POST ===');
  console.log('URL:', url);
  try {
    const formBody = new URLSearchParams({ name: 'TEST - Delete Me (form)', description: 'Diagnostic test' });
    console.log('Body:', formBody.toString());
    const resp1 = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });
    console.log('Status:', resp1.status, resp1.statusText);
    const text1 = await resp1.text();
    console.log('Response:', text1);
  } catch (e) {
    console.log('Error:', e.message);
  }

  console.log('\n=== Test 2: JSON POST ===');
  try {
    const jsonBody = JSON.stringify({ name: 'TEST - Delete Me (json)', description: 'Diagnostic test' });
    console.log('Body:', jsonBody);
    const resp2 = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: jsonBody,
    });
    console.log('Status:', resp2.status, resp2.statusText);
    const text2 = await resp2.text();
    console.log('Response:', text2);
  } catch (e) {
    console.log('Error:', e.message);
  }

  console.log('\n=== Test 3: Form-encoded POST without tasklist in URL ===');
  const url2 = `https://projectsapi.zoho.com/restapi/portal/${PORTAL_ID}/projects/${PROJECT_ID}/tasks/`;
  try {
    const formBody = new URLSearchParams({ name: 'TEST - Delete Me (no tasklist url)', tasklist_id: TASKLIST_ID });
    console.log('URL:', url2);
    console.log('Body:', formBody.toString());
    const resp3 = await fetch(url2, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });
    console.log('Status:', resp3.status, resp3.statusText);
    const text3 = await resp3.text();
    console.log('Response:', text3);
  } catch (e) {
    console.log('Error:', e.message);
  }
}

testCreate();

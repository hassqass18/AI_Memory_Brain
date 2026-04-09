#!/usr/bin/env node

/**
 * Zoho MCP Server Setup Script
 *
 * Interactive setup to configure Zoho API credentials.
 * Run with: npm run setup
 *
 * Prerequisites:
 * 1. Go to https://api-console.zoho.com
 * 2. Create a "Self Client" application
 * 3. Note your Client ID and Client Secret
 * 4. Generate a code with the required scopes (see below)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_FILE = path.join(__dirname, '..', '.zoho-config.json');
const TOKEN_FILE = path.join(__dirname, '..', '.zoho-tokens.json');

const REQUIRED_SCOPES = [
  // CRM
  'ZohoCRM.modules.ALL',
  'ZohoCRM.settings.ALL',
  'ZohoCRM.users.ALL',
  // Projects
  'ZohoProjects.portals.ALL',
  'ZohoProjects.projects.ALL',
  'ZohoProjects.tasklists.ALL',
  'ZohoProjects.tasks.ALL',
  'ZohoProjects.milestones.ALL',
  'ZohoProjects.bugs.ALL',
  'ZohoProjects.users.READ',
  'ZohoProjects.timesheets.ALL',
  // Books
  'ZohoBooks.fullaccess.ALL',
  // Desk
  'Desk.tickets.READ',
  'Desk.tickets.CREATE',
  'Desk.tickets.UPDATE',
  'Desk.contacts.READ',
  'Desk.contacts.CREATE',
  'Desk.contacts.UPDATE',
  'Desk.basic.READ',
  'Desk.basic.CREATE',
  'Desk.basic.UPDATE',
  'Desk.search.READ',
  // Campaigns
  'ZohoCampaigns.campaign.ALL',
  'ZohoCampaigns.contact.ALL',
  // Sign
  'ZohoSign.documents.ALL',
  'ZohoSign.templates.ALL',
  'ZohoSign.account.ALL',
  // Sprints
  'ZohoSprints.sprints.READ',
  'ZohoSprints.sprints.CREATE',
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  console.log('='.repeat(70));
  console.log('  Zoho MCP Server Setup');
  console.log('  Direct API access for Claude Desktop');
  console.log('='.repeat(70));
  console.log('');

  // Step 1: Data center
  console.log('Step 1: Select your Zoho data center');
  console.log('  us - United States (zoho.com)');
  console.log('  eu - Europe (zoho.eu)');
  console.log('  in - India (zoho.in)');
  console.log('  au - Australia (zoho.com.au)');
  console.log('  jp - Japan (zoho.jp)');
  console.log('  ca - Canada (zohocloud.ca)');
  console.log('  sa - Saudi Arabia (zoho.sa)');
  console.log('');
  const dataCenter = (await ask('Data center [us]: ')).trim().toLowerCase() || 'us';

  const accountsDomains = {
    us: 'accounts.zoho.com',
    eu: 'accounts.zoho.eu',
    in: 'accounts.zoho.in',
    au: 'accounts.zoho.com.au',
    jp: 'accounts.zoho.jp',
    ca: 'accounts.zohocloud.ca',
    sa: 'accounts.zoho.sa',
  };
  const accountsDomain = accountsDomains[dataCenter] || accountsDomains.us;

  // Step 2: API Console
  console.log('');
  console.log('-'.repeat(70));
  console.log('Step 2: Create a Self Client at Zoho API Console');
  console.log(`  1. Go to: https://api-console.zoho.com`);
  console.log('  2. Click "Add Client" → "Self Client"');
  console.log('  3. Give it a name like "Claude Desktop MCP"');
  console.log('  4. Copy the Client ID and Client Secret');
  console.log('');

  const clientId = (await ask('Client ID: ')).trim();
  const clientSecret = (await ask('Client Secret: ')).trim();

  if (!clientId || !clientSecret) {
    console.error('Error: Client ID and Client Secret are required.');
    rl.close();
    process.exit(1);
  }

  // Save config first
  const config = {
    client_id: clientId,
    client_secret: clientSecret,
    data_center: dataCenter,
  };
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  console.log(`\nConfig saved to ${CONFIG_FILE}`);

  // Step 3: Generate authorization code
  console.log('');
  console.log('-'.repeat(70));
  console.log('Step 3: Generate an Authorization Code');
  console.log('');
  console.log('In the Zoho API Console Self Client page:');
  console.log('  1. Click "Generate Code" tab');
  console.log('  2. Paste these scopes (copy the entire block):');
  console.log('');
  console.log(REQUIRED_SCOPES.join(','));
  console.log('');
  console.log('  3. Set "Time Duration" to 10 minutes');
  console.log('  4. For "Scope Description" enter: Claude Desktop MCP Server');
  console.log('  5. Click "Create"');
  console.log('  6. Copy the generated code');
  console.log('');

  const code = (await ask('Authorization Code: ')).trim();

  if (!code) {
    console.error('Error: Authorization code is required.');
    rl.close();
    process.exit(1);
  }

  // Step 4: Exchange code for tokens
  console.log('');
  console.log('Exchanging code for tokens...');

  const tokenUrl = `https://${accountsDomain}/oauth/v2/token`;
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
  });

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.error) {
      console.error(`\nError from Zoho: ${data.error}`);
      if (data.error === 'invalid_code') {
        console.error('The authorization code has expired or was already used.');
        console.error('Generate a new code in the API Console and run setup again.');
      }
      rl.close();
      process.exit(1);
    }

    const tokens = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      token_type: data.token_type,
      expires_at: Date.now() + (data.expires_in * 1000) - 60000,
      api_domain: data.api_domain,
    };

    fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));

    console.log('');
    console.log('='.repeat(70));
    console.log('  Setup Complete!');
    console.log('='.repeat(70));
    console.log('');
    console.log('Tokens saved successfully. The MCP server is ready to use.');
    console.log('');
    console.log('Add this to your Claude Desktop config (claude_desktop_config.json):');
    console.log('');
    console.log(JSON.stringify({
      mcpServers: {
        zoho: {
          command: 'node',
          args: [path.resolve(__dirname, 'index.js')],
        },
      },
    }, null, 2));
    console.log('');
    console.log('Then restart Claude Desktop to activate the Zoho tools.');
    console.log('');

  } catch (error) {
    console.error(`\nNetwork error: ${error.message}`);
    console.error('Make sure you have internet access and try again.');
    rl.close();
    process.exit(1);
  }

  rl.close();
}

main();

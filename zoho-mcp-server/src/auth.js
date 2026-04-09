/**
 * Zoho OAuth2 Token Manager
 * Handles token refresh and storage for all Zoho API calls.
 *
 * Zoho OAuth2 flow:
 * 1. User creates a Self Client at api-console.zoho.com
 * 2. Generates a one-time authorization code with required scopes
 * 3. Setup script exchanges the code for access + refresh tokens
 * 4. This module uses the refresh token to get new access tokens as needed
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKEN_FILE = path.join(__dirname, '..', '.zoho-tokens.json');
const CONFIG_FILE = path.join(__dirname, '..', '.zoho-config.json');

let cachedTokens = null;
let cachedConfig = null;

/**
 * Load configuration (client_id, client_secret, data_center)
 */
export function loadConfig() {
  if (cachedConfig) return cachedConfig;

  if (!fs.existsSync(CONFIG_FILE)) {
    throw new Error(
      'Zoho configuration not found. Run "npm run setup" first to configure your Zoho API credentials.'
    );
  }

  cachedConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
  return cachedConfig;
}

/**
 * Get the Zoho accounts URL based on data center
 */
function getAccountsUrl(dataCenter = 'us') {
  const urls = {
    us: 'https://accounts.zoho.com',
    eu: 'https://accounts.zoho.eu',
    in: 'https://accounts.zoho.in',
    au: 'https://accounts.zoho.com.au',
    jp: 'https://accounts.zoho.jp',
    ca: 'https://accounts.zohocloud.ca',
    sa: 'https://accounts.zoho.sa',
  };
  return urls[dataCenter] || urls.us;
}

/**
 * Get the Zoho API base URL for a specific service based on data center
 */
export function getApiBaseUrl(service, dataCenter = 'us') {
  const domains = {
    us: 'zoho.com',
    eu: 'zoho.eu',
    in: 'zoho.in',
    au: 'zoho.com.au',
    jp: 'zoho.jp',
    ca: 'zohocloud.ca',
    sa: 'zoho.sa',
  };
  const domain = domains[dataCenter] || domains.us;

  const serviceUrls = {
    crm: `https://www.zohoapis.${domain.replace('zoho.', '').replace('zohocloud.', '')}`,
    projects: `https://projectsapi.${domain}`,
    books: `https://www.zohoapis.${domain.replace('zoho.', '').replace('zohocloud.', '')}`,
    desk: `https://desk.${domain}`,
    campaigns: `https://campaigns.${domain}`,
    sign: `https://sign.${domain}`,
    sprints: `https://sprints.${domain}`,
  };

  // Zoho API domains are inconsistent, let's use the correct ones
  const correctedUrls = {
    crm: `https://www.zohoapis.com`,
    projects: `https://projectsapi.zoho.com`,
    books: `https://www.zohoapis.com`,
    desk: `https://desk.zoho.com`,
    campaigns: `https://campaigns.zoho.com`,
    sign: `https://sign.zoho.com`,
    sprints: `https://sprints.zoho.com`,
  };

  if (dataCenter === 'us') {
    return correctedUrls[service] || correctedUrls.crm;
  }

  return serviceUrls[service] || serviceUrls.crm;
}

/**
 * Load saved tokens from disk
 */
function loadTokens() {
  if (cachedTokens) return cachedTokens;

  if (!fs.existsSync(TOKEN_FILE)) {
    return null;
  }

  cachedTokens = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf-8'));
  return cachedTokens;
}

/**
 * Save tokens to disk
 */
function saveTokens(tokens) {
  cachedTokens = tokens;
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));
}

/**
 * Exchange authorization code for tokens (used during setup)
 */
export async function exchangeCodeForTokens(code) {
  const config = loadConfig();
  const accountsUrl = getAccountsUrl(config.data_center);

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: config.client_id,
    client_secret: config.client_secret,
    code: code,
  });

  const response = await fetch(`${accountsUrl}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(`Token exchange failed: ${data.error}`);
  }

  const tokens = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    token_type: data.token_type,
    expires_at: Date.now() + (data.expires_in * 1000) - 60000, // 1min buffer
    api_domain: data.api_domain,
  };

  saveTokens(tokens);
  return tokens;
}

/**
 * Refresh the access token using the refresh token
 */
async function refreshAccessToken() {
  const config = loadConfig();
  const tokens = loadTokens();

  if (!tokens?.refresh_token) {
    throw new Error('No refresh token found. Run "npm run setup" to authenticate.');
  }

  const accountsUrl = getAccountsUrl(config.data_center);

  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: config.client_id,
    client_secret: config.client_secret,
    refresh_token: tokens.refresh_token,
  });

  const response = await fetch(`${accountsUrl}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(`Token refresh failed: ${data.error}`);
  }

  tokens.access_token = data.access_token;
  tokens.expires_at = Date.now() + (data.expires_in * 1000) - 60000;
  if (data.api_domain) tokens.api_domain = data.api_domain;

  saveTokens(tokens);
  return tokens;
}

/**
 * Get a valid access token, refreshing if necessary
 */
export async function getAccessToken() {
  let tokens = loadTokens();

  if (!tokens) {
    throw new Error('Not authenticated. Run "npm run setup" to configure Zoho credentials.');
  }

  // Refresh if expired or about to expire
  if (!tokens.access_token || Date.now() >= tokens.expires_at) {
    tokens = await refreshAccessToken();
  }

  return tokens.access_token;
}

/**
 * Make an authenticated API request to any Zoho service
 * Zoho Projects uses form-encoded POST bodies; most other services use JSON.
 */
export async function zohoRequest(service, endpoint, options = {}) {
  const config = loadConfig();
  const accessToken = await getAccessToken();
  const baseUrl = getApiBaseUrl(service, config.data_center);

  const url = `${baseUrl}${endpoint}`;

  // Zoho Projects API expects form-encoded POST data
  const useFormEncoding = (service === 'projects' && options.method && options.method !== 'GET');

  const headers = {
    'Authorization': `Zoho-oauthtoken ${accessToken}`,
    ...options.headers,
  };

  if (!useFormEncoding) {
    headers['Content-Type'] = 'application/json';
  }

  const fetchOptions = {
    method: options.method || 'GET',
    headers,
  };

  if (options.body) {
    if (useFormEncoding) {
      const params = new URLSearchParams();
      const body = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
      for (const [key, value] of Object.entries(body)) {
        if (value !== undefined && value !== null) {
          params.set(key, String(value));
        }
      }
      fetchOptions.body = params.toString();
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
      fetchOptions.body = typeof options.body === 'string'
        ? options.body
        : JSON.stringify(options.body);
    }
  }

  const response = await fetch(url, fetchOptions);

  // Handle token expiry mid-request
  if (response.status === 401) {
    const newToken = await refreshAccessToken();
    headers['Authorization'] = `Zoho-oauthtoken ${newToken.access_token}`;
    const retryResponse = await fetch(url, { ...fetchOptions, headers });
    return retryResponse.json();
  }

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw_response: text, status: response.status };
  }
}

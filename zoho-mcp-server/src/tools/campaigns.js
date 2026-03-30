/**
 * Zoho Campaigns Tools
 * Manage email campaigns, mailing lists, subscribers, and reports.
 */

import { zohoRequest } from '../auth.js';

export const campaignsTools = [
  {
    name: 'zoho_campaigns_list_campaigns',
    description: 'List email campaigns in Zoho Campaigns.',
    inputSchema: {
      type: 'object',
      properties: {
        sort: { type: 'string', enum: ['asc', 'desc'], description: 'Sort order (optional)' },
        fromindex: { type: 'number', description: 'Start index (default: 1)' },
        range: { type: 'number', description: 'Number of records (default: 50)' },
        status: { type: 'string', description: 'Filter by status: Draft, Sent, Scheduled, Paused (optional)' },
      },
    },
  },
  {
    name: 'zoho_campaigns_get_campaign',
    description: 'Get details of a specific campaign.',
    inputSchema: {
      type: 'object',
      properties: {
        campaign_key: { type: 'string', description: 'Campaign key' },
      },
      required: ['campaign_key'],
    },
  },
  {
    name: 'zoho_campaigns_list_mailing_lists',
    description: 'List all mailing lists.',
    inputSchema: {
      type: 'object',
      properties: {
        sort: { type: 'string', enum: ['asc', 'desc'], description: 'Sort order (optional)' },
        fromindex: { type: 'number', description: 'Start index (default: 1)' },
        range: { type: 'number', description: 'Number of records (default: 50)' },
      },
    },
  },
  {
    name: 'zoho_campaigns_create_mailing_list',
    description: 'Create a new mailing list.',
    inputSchema: {
      type: 'object',
      properties: {
        listname: { type: 'string', description: 'Mailing list name' },
        signup_form: { type: 'string', description: 'Signup form URL (optional)' },
      },
      required: ['listname'],
    },
  },
  {
    name: 'zoho_campaigns_list_subscribers',
    description: 'List subscribers in a mailing list.',
    inputSchema: {
      type: 'object',
      properties: {
        listkey: { type: 'string', description: 'Mailing list key' },
        status: { type: 'string', enum: ['active', 'unsub', 'bounce', 'spam'], description: 'Subscriber status (optional)' },
        fromindex: { type: 'number', description: 'Start index (default: 1)' },
        range: { type: 'number', description: 'Number of records (default: 50)' },
      },
      required: ['listkey'],
    },
  },
  {
    name: 'zoho_campaigns_add_subscriber',
    description: 'Add a subscriber to a mailing list.',
    inputSchema: {
      type: 'object',
      properties: {
        listkey: { type: 'string', description: 'Mailing list key' },
        contactinfo: { type: 'string', description: 'Email address of the subscriber' },
        firstname: { type: 'string', description: 'First name (optional)' },
        lastname: { type: 'string', description: 'Last name (optional)' },
      },
      required: ['listkey', 'contactinfo'],
    },
  },
  {
    name: 'zoho_campaigns_get_campaign_reports',
    description: 'Get campaign performance reports (opens, clicks, bounces, etc.).',
    inputSchema: {
      type: 'object',
      properties: {
        campaign_key: { type: 'string', description: 'Campaign key' },
      },
      required: ['campaign_key'],
    },
  },
  {
    name: 'zoho_campaigns_get_list_subscribers_count',
    description: 'Get subscriber count for a mailing list.',
    inputSchema: {
      type: 'object',
      properties: {
        listkey: { type: 'string', description: 'Mailing list key' },
      },
      required: ['listkey'],
    },
  },
];

export async function handleCampaignsTool(name, args) {
  switch (name) {
    case 'zoho_campaigns_list_campaigns': {
      const params = new URLSearchParams();
      if (args.sort) params.set('sort', args.sort);
      params.set('fromindex', String(args.fromindex || 1));
      params.set('range', String(args.range || 50));
      if (args.status) params.set('status', args.status);
      return zohoRequest('campaigns', `/api/v1.1/getcampaigns?${params.toString()}`);
    }

    case 'zoho_campaigns_get_campaign':
      return zohoRequest('campaigns', `/api/v1.1/getcampaigndetails?campaignkey=${args.campaign_key}`);

    case 'zoho_campaigns_list_mailing_lists': {
      const params = new URLSearchParams();
      if (args.sort) params.set('sort', args.sort);
      params.set('fromindex', String(args.fromindex || 1));
      params.set('range', String(args.range || 50));
      return zohoRequest('campaigns', `/api/v1.1/getmailinglists?${params.toString()}`);
    }

    case 'zoho_campaigns_create_mailing_list': {
      const params = new URLSearchParams();
      params.set('listname', args.listname);
      if (args.signup_form) params.set('signupform', args.signup_form);
      return zohoRequest('campaigns', `/api/v1.1/createmailinglist?${params.toString()}`, { method: 'POST' });
    }

    case 'zoho_campaigns_list_subscribers': {
      const params = new URLSearchParams();
      params.set('listkey', args.listkey);
      if (args.status) params.set('status', args.status);
      params.set('fromindex', String(args.fromindex || 1));
      params.set('range', String(args.range || 50));
      return zohoRequest('campaigns', `/api/v1.1/getlistsubscribers?${params.toString()}`);
    }

    case 'zoho_campaigns_add_subscriber': {
      const params = new URLSearchParams();
      params.set('listkey', args.listkey);
      params.set('contactinfo', JSON.stringify({ 'Contact Email': args.contactinfo, 'First Name': args.firstname || '', 'Last Name': args.lastname || '' }));
      return zohoRequest('campaigns', `/api/v1.1/json/listsubscribe?${params.toString()}`, { method: 'POST' });
    }

    case 'zoho_campaigns_get_campaign_reports':
      return zohoRequest('campaigns', `/api/v1.1/getcampaignrecipients?campaignkey=${args.campaign_key}`);

    case 'zoho_campaigns_get_list_subscribers_count':
      return zohoRequest('campaigns', `/api/v1.1/getlistcount?listkey=${args.listkey}`);

    default:
      throw new Error(`Unknown Campaigns tool: ${name}`);
  }
}

/**
 * Zoho CRM Tools
 * Full CRUD for CRM modules: Leads, Contacts, Accounts, Deals, Tasks, etc.
 */

import { zohoRequest } from '../auth.js';

export const crmTools = [
  {
    name: 'zoho_crm_list_records',
    description: 'List records from any Zoho CRM module (Leads, Contacts, Accounts, Deals, Tasks, Events, Calls, Products, Quotes, Sales_Orders, Purchase_Orders, Invoices, Campaigns, Vendors, Price_Books, Notes). Supports pagination and field selection.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name (e.g., Leads, Contacts, Accounts, Deals)' },
        fields: { type: 'string', description: 'Comma-separated field API names to return (optional)' },
        sort_by: { type: 'string', description: 'Field to sort by (optional)' },
        sort_order: { type: 'string', enum: ['asc', 'desc'], description: 'Sort order (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
        per_page: { type: 'number', description: 'Records per page, max 200 (default: 50)' },
      },
      required: ['module'],
    },
  },
  {
    name: 'zoho_crm_get_record',
    description: 'Get a specific record from any Zoho CRM module by its ID.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name' },
        record_id: { type: 'string', description: 'Record ID' },
      },
      required: ['module', 'record_id'],
    },
  },
  {
    name: 'zoho_crm_search_records',
    description: 'Search records in a Zoho CRM module using criteria. Supports email, phone, word, and criteria-based search.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name' },
        criteria: { type: 'string', description: 'Search criteria, e.g., ((Last_Name:equals:Burns)and(First_Name:starts_with:M))' },
        email: { type: 'string', description: 'Search by email address' },
        phone: { type: 'string', description: 'Search by phone number' },
        word: { type: 'string', description: 'Search by keyword across all fields' },
        page: { type: 'number', description: 'Page number (default: 1)' },
        per_page: { type: 'number', description: 'Records per page (default: 50)' },
      },
      required: ['module'],
    },
  },
  {
    name: 'zoho_crm_create_record',
    description: 'Create one or more records in a Zoho CRM module. Pass an array of record objects.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name' },
        data: {
          type: 'array',
          items: { type: 'object' },
          description: 'Array of record objects with field API names as keys',
        },
        trigger: {
          type: 'array',
          items: { type: 'string', enum: ['approval', 'workflow', 'blueprint'] },
          description: 'Triggers to execute (optional)',
        },
      },
      required: ['module', 'data'],
    },
  },
  {
    name: 'zoho_crm_update_record',
    description: 'Update an existing record in a Zoho CRM module.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name' },
        record_id: { type: 'string', description: 'Record ID to update' },
        data: { type: 'object', description: 'Fields to update (field API names as keys)' },
        trigger: {
          type: 'array',
          items: { type: 'string', enum: ['approval', 'workflow', 'blueprint'] },
          description: 'Triggers to execute (optional)',
        },
      },
      required: ['module', 'record_id', 'data'],
    },
  },
  {
    name: 'zoho_crm_delete_record',
    description: 'Delete a record from a Zoho CRM module.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name' },
        record_id: { type: 'string', description: 'Record ID to delete' },
      },
      required: ['module', 'record_id'],
    },
  },
  {
    name: 'zoho_crm_get_fields',
    description: 'Get field metadata for a CRM module. Useful for discovering available fields and their types.',
    inputSchema: {
      type: 'object',
      properties: {
        module: { type: 'string', description: 'CRM module name' },
      },
      required: ['module'],
    },
  },
  {
    name: 'zoho_crm_get_modules',
    description: 'List all available CRM modules and their metadata.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
];

export async function handleCrmTool(name, args) {
  switch (name) {
    case 'zoho_crm_list_records': {
      const params = new URLSearchParams();
      if (args.fields) params.set('fields', args.fields);
      if (args.sort_by) params.set('sort_by', args.sort_by);
      if (args.sort_order) params.set('sort_order', args.sort_order);
      params.set('page', String(args.page || 1));
      params.set('per_page', String(args.per_page || 50));
      const qs = params.toString();
      return zohoRequest('crm', `/crm/v5/${args.module}?${qs}`);
    }

    case 'zoho_crm_get_record':
      return zohoRequest('crm', `/crm/v5/${args.module}/${args.record_id}`);

    case 'zoho_crm_search_records': {
      const params = new URLSearchParams();
      if (args.criteria) params.set('criteria', args.criteria);
      if (args.email) params.set('email', args.email);
      if (args.phone) params.set('phone', args.phone);
      if (args.word) params.set('word', args.word);
      params.set('page', String(args.page || 1));
      params.set('per_page', String(args.per_page || 50));
      return zohoRequest('crm', `/crm/v5/${args.module}/search?${params.toString()}`);
    }

    case 'zoho_crm_create_record': {
      const body = { data: args.data };
      if (args.trigger) body.trigger = args.trigger;
      return zohoRequest('crm', `/crm/v5/${args.module}`, {
        method: 'POST',
        body,
      });
    }

    case 'zoho_crm_update_record': {
      const body = { data: [{ ...args.data, id: args.record_id }] };
      if (args.trigger) body.trigger = args.trigger;
      return zohoRequest('crm', `/crm/v5/${args.module}/${args.record_id}`, {
        method: 'PUT',
        body,
      });
    }

    case 'zoho_crm_delete_record':
      return zohoRequest('crm', `/crm/v5/${args.module}/${args.record_id}`, {
        method: 'DELETE',
      });

    case 'zoho_crm_get_fields':
      return zohoRequest('crm', `/crm/v5/settings/fields?module=${args.module}`);

    case 'zoho_crm_get_modules':
      return zohoRequest('crm', `/crm/v5/settings/modules`);

    default:
      throw new Error(`Unknown CRM tool: ${name}`);
  }
}

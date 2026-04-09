/**
 * Zoho Sign Tools
 * Manage documents, templates, and signature requests.
 */

import { zohoRequest } from '../auth.js';

export const signTools = [
  {
    name: 'zoho_sign_list_documents',
    description: 'List documents in Zoho Sign with optional filters.',
    inputSchema: {
      type: 'object',
      properties: {
        page_context: {
          type: 'object',
          properties: {
            row_count: { type: 'number', description: 'Records per page (default: 20)' },
            start_index: { type: 'number', description: 'Start index (default: 1)' },
            sort_column: { type: 'string', description: 'Sort column (optional)' },
            sort_order: { type: 'string', enum: ['ASC', 'DESC'], description: 'Sort order (optional)' },
          },
        },
        data: {
          type: 'object',
          properties: {
            request_status: { type: 'string', description: 'Filter: inprogress, completed, recalled, declined, expired, all (optional)' },
          },
        },
      },
    },
  },
  {
    name: 'zoho_sign_get_document',
    description: 'Get details of a specific document/request.',
    inputSchema: {
      type: 'object',
      properties: {
        request_id: { type: 'string', description: 'Document request ID' },
      },
      required: ['request_id'],
    },
  },
  {
    name: 'zoho_sign_list_templates',
    description: 'List all templates in Zoho Sign.',
    inputSchema: {
      type: 'object',
      properties: {
        page_context: {
          type: 'object',
          properties: {
            row_count: { type: 'number', description: 'Records per page (default: 20)' },
            start_index: { type: 'number', description: 'Start index (default: 1)' },
          },
        },
      },
    },
  },
  {
    name: 'zoho_sign_get_template',
    description: 'Get details of a specific template.',
    inputSchema: {
      type: 'object',
      properties: {
        template_id: { type: 'string', description: 'Template ID' },
      },
      required: ['template_id'],
    },
  },
  {
    name: 'zoho_sign_send_document',
    description: 'Send a document for signing using a template. Provide recipient details and field pre-fill values.',
    inputSchema: {
      type: 'object',
      properties: {
        template_id: { type: 'string', description: 'Template ID to use' },
        recipients: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              role: { type: 'string', description: 'Role name as defined in template' },
              name: { type: 'string', description: 'Recipient name' },
              email: { type: 'string', description: 'Recipient email' },
            },
            required: ['role', 'name', 'email'],
          },
          description: 'Array of recipients with their roles',
        },
        notes: { type: 'string', description: 'Notes to include (optional)' },
      },
      required: ['template_id', 'recipients'],
    },
  },
  {
    name: 'zoho_sign_recall_document',
    description: 'Recall/cancel a document that was sent for signing.',
    inputSchema: {
      type: 'object',
      properties: {
        request_id: { type: 'string', description: 'Document request ID' },
      },
      required: ['request_id'],
    },
  },
  {
    name: 'zoho_sign_remind_document',
    description: 'Send a reminder for a pending document.',
    inputSchema: {
      type: 'object',
      properties: {
        request_id: { type: 'string', description: 'Document request ID' },
      },
      required: ['request_id'],
    },
  },
  {
    name: 'zoho_sign_get_document_fields',
    description: 'Get all fields/form data from a completed document.',
    inputSchema: {
      type: 'object',
      properties: {
        request_id: { type: 'string', description: 'Document request ID' },
      },
      required: ['request_id'],
    },
  },
];

export async function handleSignTool(name, args) {
  switch (name) {
    case 'zoho_sign_list_documents': {
      const body = {};
      if (args.page_context) body.page_context = args.page_context;
      if (args.data) body.data = args.data;
      return zohoRequest('sign', '/api/v1/requests', {
        method: 'GET',
      });
    }

    case 'zoho_sign_get_document':
      return zohoRequest('sign', `/api/v1/requests/${args.request_id}`);

    case 'zoho_sign_list_templates':
      return zohoRequest('sign', '/api/v1/templates');

    case 'zoho_sign_get_template':
      return zohoRequest('sign', `/api/v1/templates/${args.template_id}`);

    case 'zoho_sign_send_document': {
      const actions = args.recipients.map(r => ({
        recipient_name: r.name,
        recipient_email: r.email,
        action_type: 'sign',
        role: r.role,
      }));
      const body = {
        templates: {
          actions: actions,
          notes: args.notes || '',
        },
      };
      return zohoRequest('sign', `/api/v1/templates/${args.template_id}/createdocument`, {
        method: 'POST',
        body,
      });
    }

    case 'zoho_sign_recall_document':
      return zohoRequest('sign', `/api/v1/requests/${args.request_id}/recall`, {
        method: 'POST',
      });

    case 'zoho_sign_remind_document':
      return zohoRequest('sign', `/api/v1/requests/${args.request_id}/remind`, {
        method: 'POST',
      });

    case 'zoho_sign_get_document_fields':
      return zohoRequest('sign', `/api/v1/requests/${args.request_id}/formfields`);

    default:
      throw new Error(`Unknown Sign tool: ${name}`);
  }
}

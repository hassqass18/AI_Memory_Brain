/**
 * Zoho Desk Tools
 * Manage tickets, contacts, accounts, agents, and knowledge base.
 */

import { zohoRequest } from '../auth.js';

export const deskTools = [
  {
    name: 'zoho_desk_list_organizations',
    description: 'List all Zoho Desk organizations (departments).',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'zoho_desk_list_tickets',
    description: 'List support tickets with optional filters.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization/Department ID' },
        status: { type: 'string', description: 'Filter by status: Open, On Hold, Escalated, Closed (optional)' },
        assignee: { type: 'string', description: 'Filter by assignee email (optional)' },
        department_id: { type: 'string', description: 'Department ID (optional)' },
        sort_by: { type: 'string', description: 'Sort by field (optional)' },
        from: { type: 'number', description: 'Start index (default: 0)' },
        limit: { type: 'number', description: 'Number of records (default: 50, max 100)' },
      },
      required: ['org_id'],
    },
  },
  {
    name: 'zoho_desk_get_ticket',
    description: 'Get details of a specific ticket.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        ticket_id: { type: 'string', description: 'Ticket ID' },
      },
      required: ['org_id', 'ticket_id'],
    },
  },
  {
    name: 'zoho_desk_create_ticket',
    description: 'Create a new support ticket.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        subject: { type: 'string', description: 'Ticket subject' },
        description: { type: 'string', description: 'Ticket description (HTML supported)' },
        contact_id: { type: 'string', description: 'Contact ID (optional)' },
        email: { type: 'string', description: 'Contact email (optional, used if no contact_id)' },
        department_id: { type: 'string', description: 'Department ID (optional)' },
        priority: { type: 'string', enum: ['Low', 'Medium', 'High', 'Urgent'], description: 'Priority (optional)' },
        status: { type: 'string', description: 'Status (optional)' },
        category: { type: 'string', description: 'Category (optional)' },
        assignee_id: { type: 'string', description: 'Assignee agent ID (optional)' },
      },
      required: ['org_id', 'subject'],
    },
  },
  {
    name: 'zoho_desk_update_ticket',
    description: 'Update an existing ticket.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        ticket_id: { type: 'string', description: 'Ticket ID' },
        subject: { type: 'string', description: 'Updated subject (optional)' },
        status: { type: 'string', description: 'Updated status (optional)' },
        priority: { type: 'string', enum: ['Low', 'Medium', 'High', 'Urgent'], description: 'Priority (optional)' },
        assignee_id: { type: 'string', description: 'Assignee agent ID (optional)' },
        comment: { type: 'string', description: 'Add a comment (optional)' },
      },
      required: ['org_id', 'ticket_id'],
    },
  },
  {
    name: 'zoho_desk_search_tickets',
    description: 'Search tickets by keyword or criteria.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        search_str: { type: 'string', description: 'Search query string' },
        from: { type: 'number', description: 'Start index (default: 0)' },
        limit: { type: 'number', description: 'Number of records (default: 25)' },
      },
      required: ['org_id', 'search_str'],
    },
  },
  {
    name: 'zoho_desk_list_contacts',
    description: 'List contacts in Zoho Desk.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        search_str: { type: 'string', description: 'Search text (optional)' },
        from: { type: 'number', description: 'Start index (default: 0)' },
        limit: { type: 'number', description: 'Number of records (default: 50)' },
      },
      required: ['org_id'],
    },
  },
  {
    name: 'zoho_desk_create_contact',
    description: 'Create a new contact in Zoho Desk.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        firstName: { type: 'string', description: 'First name (optional)' },
        lastName: { type: 'string', description: 'Last name' },
        email: { type: 'string', description: 'Email address (optional)' },
        phone: { type: 'string', description: 'Phone number (optional)' },
        accountId: { type: 'string', description: 'Account ID (optional)' },
      },
      required: ['org_id', 'lastName'],
    },
  },
  {
    name: 'zoho_desk_list_agents',
    description: 'List agents in Zoho Desk.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
      },
      required: ['org_id'],
    },
  },
  {
    name: 'zoho_desk_list_departments',
    description: 'List departments in Zoho Desk.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
      },
      required: ['org_id'],
    },
  },
  {
    name: 'zoho_desk_add_ticket_comment',
    description: 'Add a comment to a ticket.',
    inputSchema: {
      type: 'object',
      properties: {
        org_id: { type: 'string', description: 'Organization ID' },
        ticket_id: { type: 'string', description: 'Ticket ID' },
        content: { type: 'string', description: 'Comment content (HTML supported)' },
        is_public: { type: 'boolean', description: 'Whether the comment is public (default: true)' },
      },
      required: ['org_id', 'ticket_id', 'content'],
    },
  },
];

export async function handleDeskTool(name, args) {
  const orgHeader = args.org_id ? { 'orgId': args.org_id } : {};

  switch (name) {
    case 'zoho_desk_list_organizations':
      return zohoRequest('desk', '/api/v1/organizations');

    case 'zoho_desk_list_tickets': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      if (args.assignee) params.set('assignee', args.assignee);
      if (args.department_id) params.set('departmentId', args.department_id);
      if (args.sort_by) params.set('sortBy', args.sort_by);
      params.set('from', String(args.from || 0));
      params.set('limit', String(args.limit || 50));
      return zohoRequest('desk', `/api/v1/tickets?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_desk_get_ticket':
      return zohoRequest('desk', `/api/v1/tickets/${args.ticket_id}`, { headers: orgHeader });

    case 'zoho_desk_create_ticket': {
      const body = { subject: args.subject };
      if (args.description) body.description = args.description;
      if (args.contact_id) body.contactId = args.contact_id;
      if (args.email) body.email = args.email;
      if (args.department_id) body.departmentId = args.department_id;
      if (args.priority) body.priority = args.priority;
      if (args.status) body.status = args.status;
      if (args.category) body.category = args.category;
      if (args.assignee_id) body.assigneeId = args.assignee_id;
      return zohoRequest('desk', '/api/v1/tickets', { method: 'POST', headers: orgHeader, body });
    }

    case 'zoho_desk_update_ticket': {
      const body = {};
      if (args.subject) body.subject = args.subject;
      if (args.status) body.status = args.status;
      if (args.priority) body.priority = args.priority;
      if (args.assignee_id) body.assigneeId = args.assignee_id;

      const result = await zohoRequest('desk', `/api/v1/tickets/${args.ticket_id}`, {
        method: 'PATCH',
        headers: orgHeader,
        body,
      });

      if (args.comment) {
        await zohoRequest('desk', `/api/v1/tickets/${args.ticket_id}/comments`, {
          method: 'POST',
          headers: orgHeader,
          body: { content: args.comment, isPublic: true },
        });
      }
      return result;
    }

    case 'zoho_desk_search_tickets': {
      const params = new URLSearchParams();
      params.set('searchStr', args.search_str);
      params.set('from', String(args.from || 0));
      params.set('limit', String(args.limit || 25));
      return zohoRequest('desk', `/api/v1/tickets/search?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_desk_list_contacts': {
      const params = new URLSearchParams();
      if (args.search_str) params.set('searchStr', args.search_str);
      params.set('from', String(args.from || 0));
      params.set('limit', String(args.limit || 50));
      return zohoRequest('desk', `/api/v1/contacts?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_desk_create_contact':
      return zohoRequest('desk', '/api/v1/contacts', {
        method: 'POST',
        headers: orgHeader,
        body: {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          phone: args.phone,
          accountId: args.accountId,
        },
      });

    case 'zoho_desk_list_agents':
      return zohoRequest('desk', '/api/v1/agents', { headers: orgHeader });

    case 'zoho_desk_list_departments':
      return zohoRequest('desk', '/api/v1/departments', { headers: orgHeader });

    case 'zoho_desk_add_ticket_comment':
      return zohoRequest('desk', `/api/v1/tickets/${args.ticket_id}/comments`, {
        method: 'POST',
        headers: orgHeader,
        body: { content: args.content, isPublic: args.is_public !== false },
      });

    default:
      throw new Error(`Unknown Desk tool: ${name}`);
  }
}

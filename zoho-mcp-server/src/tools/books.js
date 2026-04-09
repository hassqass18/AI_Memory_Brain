/**
 * Zoho Books Tools
 * Manage contacts, invoices, estimates, items, bills, expenses, and more.
 */

import { zohoRequest } from '../auth.js';

export const booksTools = [
  {
    name: 'zoho_books_list_organizations',
    description: 'List all Zoho Books organizations accessible to the authenticated user.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'zoho_books_list_contacts',
    description: 'List contacts (customers/vendors) in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        contact_type: { type: 'string', enum: ['customer', 'vendor'], description: 'Filter by type (optional)' },
        search_text: { type: 'string', description: 'Search text (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
      },
      required: ['organization_id'],
    },
  },
  {
    name: 'zoho_books_create_contact',
    description: 'Create a new contact (customer or vendor) in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        contact_name: { type: 'string', description: 'Contact name' },
        contact_type: { type: 'string', enum: ['customer', 'vendor'], description: 'Contact type' },
        company_name: { type: 'string', description: 'Company name (optional)' },
        email: { type: 'string', description: 'Email address (optional)' },
        phone: { type: 'string', description: 'Phone number (optional)' },
        billing_address: { type: 'object', description: 'Billing address object (optional)' },
      },
      required: ['organization_id', 'contact_name'],
    },
  },
  {
    name: 'zoho_books_list_invoices',
    description: 'List invoices in Zoho Books with optional filters.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        status: { type: 'string', enum: ['draft', 'sent', 'overdue', 'paid', 'void', 'unpaid', 'partially_paid'], description: 'Filter by status (optional)' },
        customer_id: { type: 'string', description: 'Filter by customer (optional)' },
        date_start: { type: 'string', description: 'Start date YYYY-MM-DD (optional)' },
        date_end: { type: 'string', description: 'End date YYYY-MM-DD (optional)' },
        search_text: { type: 'string', description: 'Search text (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
      },
      required: ['organization_id'],
    },
  },
  {
    name: 'zoho_books_get_invoice',
    description: 'Get details of a specific invoice.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        invoice_id: { type: 'string', description: 'Invoice ID' },
      },
      required: ['organization_id', 'invoice_id'],
    },
  },
  {
    name: 'zoho_books_create_invoice',
    description: 'Create a new invoice in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        customer_id: { type: 'string', description: 'Customer ID' },
        line_items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              description: { type: 'string' },
              rate: { type: 'number' },
              quantity: { type: 'number' },
              item_id: { type: 'string' },
            },
          },
          description: 'Invoice line items',
        },
        invoice_number: { type: 'string', description: 'Custom invoice number (optional)' },
        date: { type: 'string', description: 'Invoice date YYYY-MM-DD (optional)' },
        due_date: { type: 'string', description: 'Due date YYYY-MM-DD (optional)' },
        notes: { type: 'string', description: 'Notes (optional)' },
      },
      required: ['organization_id', 'customer_id', 'line_items'],
    },
  },
  {
    name: 'zoho_books_list_items',
    description: 'List items/products in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        search_text: { type: 'string', description: 'Search text (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
      },
      required: ['organization_id'],
    },
  },
  {
    name: 'zoho_books_create_item',
    description: 'Create a new item/product in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        name: { type: 'string', description: 'Item name' },
        rate: { type: 'number', description: 'Item rate/price' },
        description: { type: 'string', description: 'Description (optional)' },
        sku: { type: 'string', description: 'SKU (optional)' },
        product_type: { type: 'string', enum: ['goods', 'service'], description: 'Product type (optional)' },
      },
      required: ['organization_id', 'name', 'rate'],
    },
  },
  {
    name: 'zoho_books_list_estimates',
    description: 'List estimates/quotes in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        status: { type: 'string', description: 'Filter by status (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
      },
      required: ['organization_id'],
    },
  },
  {
    name: 'zoho_books_list_expenses',
    description: 'List expenses in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        status: { type: 'string', description: 'Filter by status (optional)' },
        date_start: { type: 'string', description: 'Start date YYYY-MM-DD (optional)' },
        date_end: { type: 'string', description: 'End date YYYY-MM-DD (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
      },
      required: ['organization_id'],
    },
  },
  {
    name: 'zoho_books_list_payments',
    description: 'List customer payments in Zoho Books.',
    inputSchema: {
      type: 'object',
      properties: {
        organization_id: { type: 'string', description: 'Organization ID' },
        customer_id: { type: 'string', description: 'Filter by customer (optional)' },
        page: { type: 'number', description: 'Page number (default: 1)' },
      },
      required: ['organization_id'],
    },
  },
];

export async function handleBooksTool(name, args) {
  const orgHeader = args.organization_id ? { 'X-com-zoho-books-organizationid': args.organization_id } : {};

  switch (name) {
    case 'zoho_books_list_organizations':
      return zohoRequest('books', '/books/v3/organizations');

    case 'zoho_books_list_contacts': {
      const params = new URLSearchParams();
      if (args.contact_type) params.set('contact_type', args.contact_type);
      if (args.search_text) params.set('search_text', args.search_text);
      params.set('page', String(args.page || 1));
      return zohoRequest('books', `/books/v3/contacts?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_books_create_contact':
      return zohoRequest('books', '/books/v3/contacts', {
        method: 'POST',
        headers: orgHeader,
        body: {
          contact_name: args.contact_name,
          contact_type: args.contact_type,
          company_name: args.company_name,
          email: args.email,
          phone: args.phone,
          billing_address: args.billing_address,
        },
      });

    case 'zoho_books_list_invoices': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      if (args.customer_id) params.set('customer_id', args.customer_id);
      if (args.date_start) params.set('date_start', args.date_start);
      if (args.date_end) params.set('date_end', args.date_end);
      if (args.search_text) params.set('search_text', args.search_text);
      params.set('page', String(args.page || 1));
      return zohoRequest('books', `/books/v3/invoices?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_books_get_invoice':
      return zohoRequest('books', `/books/v3/invoices/${args.invoice_id}`, { headers: orgHeader });

    case 'zoho_books_create_invoice':
      return zohoRequest('books', '/books/v3/invoices', {
        method: 'POST',
        headers: orgHeader,
        body: {
          customer_id: args.customer_id,
          line_items: args.line_items,
          invoice_number: args.invoice_number,
          date: args.date,
          due_date: args.due_date,
          notes: args.notes,
        },
      });

    case 'zoho_books_list_items': {
      const params = new URLSearchParams();
      if (args.search_text) params.set('search_text', args.search_text);
      params.set('page', String(args.page || 1));
      return zohoRequest('books', `/books/v3/items?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_books_create_item':
      return zohoRequest('books', '/books/v3/items', {
        method: 'POST',
        headers: orgHeader,
        body: {
          name: args.name,
          rate: args.rate,
          description: args.description,
          sku: args.sku,
          product_type: args.product_type,
        },
      });

    case 'zoho_books_list_estimates': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      params.set('page', String(args.page || 1));
      return zohoRequest('books', `/books/v3/estimates?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_books_list_expenses': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      if (args.date_start) params.set('date_start', args.date_start);
      if (args.date_end) params.set('date_end', args.date_end);
      params.set('page', String(args.page || 1));
      return zohoRequest('books', `/books/v3/expenses?${params.toString()}`, { headers: orgHeader });
    }

    case 'zoho_books_list_payments': {
      const params = new URLSearchParams();
      if (args.customer_id) params.set('customer_id', args.customer_id);
      params.set('page', String(args.page || 1));
      return zohoRequest('books', `/books/v3/customerpayments?${params.toString()}`, { headers: orgHeader });
    }

    default:
      throw new Error(`Unknown Books tool: ${name}`);
  }
}

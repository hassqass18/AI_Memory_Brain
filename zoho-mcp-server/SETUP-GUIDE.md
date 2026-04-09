# Zoho MCP Server — Setup Guide

**72 tools across 7 Zoho applications, zero external dependencies.**

This MCP server gives Claude Desktop direct API access to Zoho CRM, Projects, Books, Desk, Campaigns, Sign, and Sprints — bypassing Zapier entirely with no rate limits other than Zoho's own API limits.

---

## Prerequisites

- **Node.js 18+** installed on your machine
- A **Zoho account** with access to the applications you want to use
- **Claude Desktop** installed

---

## Step 1: Create a Zoho Self Client

1. Go to [https://api-console.zoho.com](https://api-console.zoho.com)
2. Click **"Add Client"** → **"Self Client"**
3. Name it something like `Claude Desktop MCP`
4. Click **Create** — you'll see a **Client ID** and **Client Secret**. Save both.

---

## Step 2: Generate an Authorization Code

In the Self Client page, click the **"Generate Code"** tab:

1. **Scope** — paste this entire block:

```
ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.ALL,ZohoProjects.portals.ALL,ZohoProjects.projects.ALL,ZohoProjects.tasklists.ALL,ZohoProjects.tasks.ALL,ZohoProjects.milestones.ALL,ZohoProjects.bugs.ALL,ZohoProjects.users.READ,ZohoProjects.timesheets.ALL,ZohoBooks.fullaccess.ALL,Desk.tickets.READ,Desk.tickets.CREATE,Desk.tickets.UPDATE,Desk.contacts.READ,Desk.contacts.CREATE,Desk.contacts.UPDATE,Desk.basic.READ,Desk.basic.CREATE,Desk.basic.UPDATE,Desk.search.READ,ZohoCampaigns.campaign.ALL,ZohoCampaigns.contact.ALL,ZohoSign.documents.ALL,ZohoSign.templates.ALL,ZohoSign.account.ALL,ZohoSprints.sprints.READ,ZohoSprints.sprints.CREATE
```

2. **Time Duration** — set to **10 minutes**
3. **Scope Description** — enter `Claude Desktop MCP Server`
4. Click **"Create"** and copy the generated code

> **Important:** The code expires in 10 minutes and can only be used once. Complete Step 3 quickly.

---

## Step 3: Run the Setup Script

Open a terminal, navigate to this folder, and run:

```bash
npm run setup
```

The script will ask for:
1. Your **data center** (us, eu, in, au, jp, ca, sa) — default is `us`
2. Your **Client ID**
3. Your **Client Secret**
4. Your **Authorization Code** (from Step 2)

It will exchange the code for access and refresh tokens, saving them locally.

---

## Step 4: Configure Claude Desktop

Add the following to your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "zoho": {
      "command": "node",
      "args": ["/FULL/PATH/TO/zoho-mcp-server/src/index.js"]
    }
  }
}
```

Replace `/FULL/PATH/TO/` with the actual absolute path to where you saved this `zoho-mcp-server` folder.

Then **restart Claude Desktop**.

---

## Available Tools (72 total)

### Zoho CRM (8 tools)
| Tool | Description |
|------|-------------|
| `zoho_crm_list_records` | List records from any module (Leads, Contacts, Accounts, Deals, etc.) |
| `zoho_crm_get_record` | Get a specific record by ID |
| `zoho_crm_search_records` | Search with criteria, email, phone, or keyword |
| `zoho_crm_create_record` | Create one or more records |
| `zoho_crm_update_record` | Update an existing record |
| `zoho_crm_delete_record` | Delete a record |
| `zoho_crm_get_fields` | Get field metadata for a module |
| `zoho_crm_get_modules` | List all available CRM modules |

### Zoho Projects (15 tools)
| Tool | Description |
|------|-------------|
| `zoho_projects_list_portals` | List accessible portals |
| `zoho_projects_list_projects` | List projects in a portal |
| `zoho_projects_get_project` | Get project details |
| `zoho_projects_create_project` | Create a new project |
| `zoho_projects_list_tasklists` | List task lists (epics) |
| `zoho_projects_create_tasklist` | Create a task list |
| `zoho_projects_list_tasks` | List tasks, optionally by task list |
| `zoho_projects_get_task` | Get task details |
| `zoho_projects_create_task` | Create a task |
| `zoho_projects_update_task` | Update task (status, name, dates, etc.) |
| `zoho_projects_delete_task` | Delete a task |
| `zoho_projects_list_milestones` | List milestones |
| `zoho_projects_create_milestone` | Create a milestone |
| `zoho_projects_list_bugs` | List bugs/issues |
| `zoho_projects_list_users` | List portal users |

### Zoho Books (11 tools)
| Tool | Description |
|------|-------------|
| `zoho_books_list_organizations` | List organizations |
| `zoho_books_list_contacts` | List customers/vendors |
| `zoho_books_create_contact` | Create a contact |
| `zoho_books_list_invoices` | List invoices with filters |
| `zoho_books_get_invoice` | Get invoice details |
| `zoho_books_create_invoice` | Create an invoice |
| `zoho_books_list_items` | List items/products |
| `zoho_books_create_item` | Create an item |
| `zoho_books_list_estimates` | List estimates/quotes |
| `zoho_books_list_expenses` | List expenses |
| `zoho_books_list_payments` | List customer payments |

### Zoho Desk (11 tools)
| Tool | Description |
|------|-------------|
| `zoho_desk_list_organizations` | List organizations |
| `zoho_desk_list_tickets` | List tickets with filters |
| `zoho_desk_get_ticket` | Get ticket details |
| `zoho_desk_create_ticket` | Create a ticket |
| `zoho_desk_update_ticket` | Update a ticket |
| `zoho_desk_search_tickets` | Search tickets |
| `zoho_desk_list_contacts` | List contacts |
| `zoho_desk_create_contact` | Create a contact |
| `zoho_desk_list_agents` | List agents |
| `zoho_desk_list_departments` | List departments |
| `zoho_desk_add_ticket_comment` | Add a comment to a ticket |

### Zoho Campaigns (8 tools)
| Tool | Description |
|------|-------------|
| `zoho_campaigns_list_campaigns` | List email campaigns |
| `zoho_campaigns_get_campaign` | Get campaign details |
| `zoho_campaigns_list_mailing_lists` | List mailing lists |
| `zoho_campaigns_create_mailing_list` | Create a mailing list |
| `zoho_campaigns_list_subscribers` | List subscribers |
| `zoho_campaigns_add_subscriber` | Add a subscriber |
| `zoho_campaigns_get_campaign_reports` | Get campaign reports |
| `zoho_campaigns_get_list_subscribers_count` | Get subscriber count |

### Zoho Sign (8 tools)
| Tool | Description |
|------|-------------|
| `zoho_sign_list_documents` | List documents |
| `zoho_sign_get_document` | Get document details |
| `zoho_sign_list_templates` | List templates |
| `zoho_sign_get_template` | Get template details |
| `zoho_sign_send_document` | Send document for signing |
| `zoho_sign_recall_document` | Recall/cancel a document |
| `zoho_sign_remind_document` | Send a reminder |
| `zoho_sign_get_document_fields` | Get form fields from completed doc |

### Zoho Sprints (11 tools)
| Tool | Description |
|------|-------------|
| `zoho_sprints_list_teams` | List teams |
| `zoho_sprints_list_projects` | List projects |
| `zoho_sprints_get_project` | Get project details |
| `zoho_sprints_list_sprints` | List sprints |
| `zoho_sprints_create_sprint` | Create a sprint |
| `zoho_sprints_list_items` | List work items |
| `zoho_sprints_create_item` | Create a work item |
| `zoho_sprints_update_item` | Update a work item |
| `zoho_sprints_list_epics` | List epics |
| `zoho_sprints_create_epic` | Create an epic |
| `zoho_sprints_get_backlog` | Get backlog items |

---

## Token Management

Tokens are managed automatically. The refresh token is stored in `.zoho-tokens.json` and access tokens are refreshed transparently when they expire. You should never need to re-run setup unless you revoke the Self Client in Zoho's API Console.

---

## Troubleshooting

**"Not authenticated" error:** Run `npm run setup` again with a fresh authorization code.

**"Token refresh failed" error:** Your refresh token may have been revoked. Go to the Zoho API Console, generate a new code, and run setup again.

**"Domain Not Available" from Projects API:** Make sure you selected the correct data center during setup. Your Zoho account's data center must match.

**Tools not appearing in Claude Desktop:** Verify the path in `claude_desktop_config.json` is correct and absolute. Restart Claude Desktop after any config changes.

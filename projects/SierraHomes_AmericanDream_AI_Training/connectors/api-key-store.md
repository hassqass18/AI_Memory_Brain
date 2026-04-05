# API Key Store — SierraHomes_AmericanDream

**Purpose:** Inventory of all API credentials and connector configurations for this project. This file lists what keys exist and where they are stored — it does NOT contain the actual key values.

**Last Updated:** 2026-03-30

> ⚠️ **Security Rule:** Actual key values are stored ONLY in `HassanKeys.txt` at the AI Memory root level. That file is git-ignored and never committed. This file is safe to commit — it contains no secrets.

---

## Connector Inventory

### 1. Zoho One (CRM, Projects, Books)

| Field | Value |
|-------|-------|
| **Purpose** | Project management (Zoho Projects), CRM/sales pipeline (Zoho CRM), accounting (Zoho Books) |
| **Portal ID** | `org919184297` |
| **Client ID** | Stored in `HassanKeys.txt` → `ZOHO_CLIENT_ID` |
| **Client Secret** | Stored in `HassanKeys.txt` → `ZOHO_CLIENT_SECRET` |
| **Scopes Required** | `ZohoCRM.modules.ALL`, `ZohoProjects.portals.READ`, `ZohoProjects.projects.ALL`, `ZohoProjects.tasks.ALL` |
| **MCP Server** | `AI_Memory_Brain/zoho-mcp-server/` |
| **MCP Tool Prefix** | `mcp__zoho__zoho_projects_*` (primary), `mcp__7a54a83f-*__zoho_projects_*` (fallback) |
| **Status** | Configured — awaiting OAuth token refresh |

---

### 2. Slack

| Field | Value |
|-------|-------|
| **Purpose** | Team communication, AI notifications, project updates |
| **App Token (xapp-)** | Stored in `HassanKeys.txt` → `SLACK_APP_TOKEN` |
| **Bot Token (xoxb-)** | Not yet added — required for messaging. Add to `HassanKeys.txt` → `SLACK_BOT_TOKEN` |
| **Workspace** | Provecta Group workspace |
| **Status** | App Token registered. Bot Token needed before Slack messaging integration can be used. |

---

### 3. GitHub

| Field | Value |
|-------|-------|
| **Purpose** | AI Memory repository — version control and backup of all project memory files |
| **Personal Access Token (PAT)** | Stored in `HassanKeys.txt` → `GITHUB_PAT` |
| **Repository** | `https://github.com/hassqass18/AI_Memory_Brain` |
| **Default Branch** | `main` |
| **Status** | Active — push manually from terminal until GitHub MCP is configured |

---

### 4. Notion (Internal API — Browser Session Method)

| Field | Value |
|-------|-------|
| **Purpose** | Project knowledge base, task tracking, phase documentation |
| **Internal Integration Token** | Stored in `HassanKeys.txt` → `NOTION_INTERNAL_TOKEN` |
| **Workspace** | Hassan Qaseem's Space (hassan.qaseem@gc-usa.com) |
| **Space ID** | `ec6cea28-0b11-81d4-b94a-0003bb0a43cc` |
| **SierraHomes Page ID** | `332cea28-0b11-80ab-b5d0-fcb7ebd17a85` |
| **User ID** | `24dd872b-594c-81a3-8346-00029c6cbe4f` |
| **API Endpoint** | `POST /api/v3/saveTransactionsFanout` (internal, session-auth) |
| **Method** | Call from within open notion.so browser tab using `fetch` with `credentials: 'include'` |
| **Status** | Working — see `decisions-learnings/Key-Decisions-2026-03-30_0900.md` for full API format |

> **Note:** MCP connector for Notion may direct to wrong workspace. Use browser session method (Claude in Chrome) as reliable fallback.

---

## Pending Connectors (Not Yet Configured)

| Connector | Purpose | Status |
|-----------|---------|--------|
| Marketing Platform (TBD) | Email campaigns, diaspora outreach | TBD |
| Payment Gateway | Deposit collection from off-plan buyers | TBD |
| DocuSign / E-Signature | SPA electronic signatures | TBD |
| WhatsApp Business API | Buyer communication channel | TBD |

---

## How to Use Keys in AI Sessions

1. The AI **never reads, echoes, or stores** actual key values
2. When a tool requires authentication, reference the key name (e.g. `ZOHO_CLIENT_ID`) — Hassan inputs the value manually if needed
3. For MCP tools (Zoho, Slack), keys are loaded by the MCP server from `HassanKeys.txt` automatically
4. If a connector fails with an auth error, check `HassanKeys.txt` has the correct values and the token has not expired

---

*Updated when new connectors are added or key status changes.*

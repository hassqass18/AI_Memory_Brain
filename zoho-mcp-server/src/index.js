#!/usr/bin/env node

/**
 * Zoho MCP Server
 * Zero-dependency MCP server providing Claude Desktop with direct API access to:
 * - Zoho CRM, Projects, Books, Desk, Campaigns, Sign, Sprints
 *
 * Implements the Model Context Protocol (JSON-RPC 2.0 over stdio) natively.
 */

import { crmTools, handleCrmTool } from './tools/crm.js';
import { projectsTools, handleProjectsTool } from './tools/projects.js';
import { booksTools, handleBooksTool } from './tools/books.js';
import { deskTools, handleDeskTool } from './tools/desk.js';
import { campaignsTools, handleCampaignsTool } from './tools/campaigns.js';
import { signTools, handleSignTool } from './tools/sign.js';
import { sprintsTools, handleSprintsTool } from './tools/sprints.js';

// ─── Tool Registry ───────────────────────────────────────────────────────────

const allTools = [
  ...crmTools,
  ...projectsTools,
  ...booksTools,
  ...deskTools,
  ...campaignsTools,
  ...signTools,
  ...sprintsTools,
];

const toolHandlerMap = new Map();

for (const tool of crmTools) toolHandlerMap.set(tool.name, (a) => handleCrmTool(tool.name, a));
for (const tool of projectsTools) toolHandlerMap.set(tool.name, (a) => handleProjectsTool(tool.name, a));
for (const tool of booksTools) toolHandlerMap.set(tool.name, (a) => handleBooksTool(tool.name, a));
for (const tool of deskTools) toolHandlerMap.set(tool.name, (a) => handleDeskTool(tool.name, a));
for (const tool of campaignsTools) toolHandlerMap.set(tool.name, (a) => handleCampaignsTool(tool.name, a));
for (const tool of signTools) toolHandlerMap.set(tool.name, (a) => handleSignTool(tool.name, a));
for (const tool of sprintsTools) toolHandlerMap.set(tool.name, (a) => handleSprintsTool(tool.name, a));

// ─── JSON-RPC / MCP Protocol Implementation ─────────────────────────────────

const SERVER_INFO = {
  name: 'zoho-mcp-server',
  version: '1.0.0',
};

const CAPABILITIES = {
  tools: {},
};

function createResponse(id, result) {
  return JSON.stringify({ jsonrpc: '2.0', id, result });
}

function createError(id, code, message) {
  return JSON.stringify({ jsonrpc: '2.0', id, error: { code, message } });
}

async function handleRequest(message) {
  const { id, method, params } = message;

  switch (method) {
    // ── Lifecycle ──
    case 'initialize':
      return createResponse(id, {
        protocolVersion: '2024-11-05',
        serverInfo: SERVER_INFO,
        capabilities: CAPABILITIES,
      });

    case 'notifications/initialized':
      // No response needed for notifications
      return null;

    case 'ping':
      return createResponse(id, {});

    // ── Tools ──
    case 'tools/list':
      return createResponse(id, {
        tools: allTools.map((t) => ({
          name: t.name,
          description: t.description,
          inputSchema: t.inputSchema,
        })),
      });

    case 'tools/call': {
      const { name, arguments: args } = params;
      const handler = toolHandlerMap.get(name);

      if (!handler) {
        return createResponse(id, {
          content: [{ type: 'text', text: `Unknown tool: ${name}` }],
          isError: true,
        });
      }

      try {
        const result = await handler(args || {});
        return createResponse(id, {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        });
      } catch (error) {
        return createResponse(id, {
          content: [{ type: 'text', text: `Error: ${error.message}` }],
          isError: true,
        });
      }
    }

    default:
      if (method?.startsWith('notifications/')) {
        return null; // Ignore notifications
      }
      return createError(id, -32601, `Method not found: ${method}`);
  }
}

// ─── Stdio Transport ─────────────────────────────────────────────────────────

let buffer = '';

process.stdin.setEncoding('utf-8');
process.stdin.on('data', async (chunk) => {
  buffer += chunk;

  // MCP uses newline-delimited JSON
  let newlineIndex;
  while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
    const line = buffer.slice(0, newlineIndex).trim();
    buffer = buffer.slice(newlineIndex + 1);

    if (!line) continue;

    try {
      const message = JSON.parse(line);
      const response = await handleRequest(message);
      if (response) {
        process.stdout.write(response + '\n');
      }
    } catch (error) {
      // If we can't parse the JSON, send a parse error
      const errResponse = createError(null, -32700, `Parse error: ${error.message}`);
      process.stdout.write(errResponse + '\n');
    }
  }
});

process.stdin.on('end', () => {
  process.exit(0);
});

// Prevent unhandled errors from crashing the server
process.on('uncaughtException', (error) => {
  console.error(`[zoho-mcp] Uncaught exception: ${error.message}`);
});

process.on('unhandledRejection', (error) => {
  console.error(`[zoho-mcp] Unhandled rejection: ${error}`);
});

console.error(`[zoho-mcp] Server started — ${allTools.length} tools across 7 Zoho applications`);

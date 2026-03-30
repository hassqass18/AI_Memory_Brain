/**
 * Zoho Sprints Tools
 * Manage teams, projects, sprints, items (user stories, tasks, bugs), epics, and backlogs.
 */

import { zohoRequest } from '../auth.js';

export const sprintsTools = [
  {
    name: 'zoho_sprints_list_teams',
    description: 'List all teams in Zoho Sprints.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'zoho_sprints_list_projects',
    description: 'List projects in a team.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
      },
      required: ['team_id'],
    },
  },
  {
    name: 'zoho_sprints_get_project',
    description: 'Get details of a specific project.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
      },
      required: ['team_id', 'project_id'],
    },
  },
  {
    name: 'zoho_sprints_list_sprints',
    description: 'List sprints in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
        type: { type: 'string', enum: ['open', 'completed', 'all'], description: 'Filter (optional)' },
      },
      required: ['team_id', 'project_id'],
    },
  },
  {
    name: 'zoho_sprints_create_sprint',
    description: 'Create a new sprint.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
        name: { type: 'string', description: 'Sprint name' },
        start_date: { type: 'string', description: 'Start date YYYY-MM-DD' },
        end_date: { type: 'string', description: 'End date YYYY-MM-DD' },
        description: { type: 'string', description: 'Sprint description (optional)' },
      },
      required: ['team_id', 'project_id', 'name', 'start_date', 'end_date'],
    },
  },
  {
    name: 'zoho_sprints_list_items',
    description: 'List work items (user stories, tasks, bugs) in a sprint or backlog.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
        sprint_id: { type: 'string', description: 'Sprint ID (optional, omit for backlog)' },
        item_type: { type: 'string', enum: ['story', 'task', 'bug'], description: 'Filter by type (optional)' },
      },
      required: ['team_id', 'project_id'],
    },
  },
  {
    name: 'zoho_sprints_create_item',
    description: 'Create a new work item (user story, task, or bug).',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
        name: { type: 'string', description: 'Item name/title' },
        description: { type: 'string', description: 'Item description (optional)' },
        type: { type: 'string', enum: ['story', 'task', 'bug'], description: 'Item type (default: story)' },
        sprint_id: { type: 'string', description: 'Sprint ID to add to (optional)' },
        priority: { type: 'string', enum: ['none', 'low', 'medium', 'high'], description: 'Priority (optional)' },
        points: { type: 'number', description: 'Story points (optional)' },
        epic_id: { type: 'string', description: 'Epic ID (optional)' },
      },
      required: ['team_id', 'project_id', 'name'],
    },
  },
  {
    name: 'zoho_sprints_update_item',
    description: 'Update a work item.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
        item_id: { type: 'string', description: 'Item ID' },
        name: { type: 'string', description: 'Updated name (optional)' },
        description: { type: 'string', description: 'Updated description (optional)' },
        status: { type: 'string', description: 'Status name (optional)' },
        priority: { type: 'string', enum: ['none', 'low', 'medium', 'high'], description: 'Priority (optional)' },
        points: { type: 'number', description: 'Story points (optional)' },
      },
      required: ['team_id', 'project_id', 'item_id'],
    },
  },
  {
    name: 'zoho_sprints_list_epics',
    description: 'List epics in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
      },
      required: ['team_id', 'project_id'],
    },
  },
  {
    name: 'zoho_sprints_create_epic',
    description: 'Create a new epic.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
        name: { type: 'string', description: 'Epic name' },
        description: { type: 'string', description: 'Epic description (optional)' },
      },
      required: ['team_id', 'project_id', 'name'],
    },
  },
  {
    name: 'zoho_sprints_get_backlog',
    description: 'Get backlog items for a project.',
    inputSchema: {
      type: 'object',
      properties: {
        team_id: { type: 'string', description: 'Team ID' },
        project_id: { type: 'string', description: 'Project ID' },
      },
      required: ['team_id', 'project_id'],
    },
  },
];

export async function handleSprintsTool(name, args) {
  switch (name) {
    case 'zoho_sprints_list_teams':
      return zohoRequest('sprints', '/zsapi/teams/');

    case 'zoho_sprints_list_projects':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/`);

    case 'zoho_sprints_get_project':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/`);

    case 'zoho_sprints_list_sprints': {
      const params = args.type ? `?type=${args.type}` : '';
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/sprints/${params}`);
    }

    case 'zoho_sprints_create_sprint':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/sprints/`, {
        method: 'POST',
        body: {
          name: args.name,
          start_date: args.start_date,
          end_date: args.end_date,
          description: args.description || '',
        },
      });

    case 'zoho_sprints_list_items': {
      if (args.sprint_id) {
        return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/sprints/${args.sprint_id}/items/`);
      }
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/items/`);
    }

    case 'zoho_sprints_create_item':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/items/`, {
        method: 'POST',
        body: {
          name: args.name,
          description: args.description || '',
          type: args.type || 'story',
          sprint_id: args.sprint_id,
          priority: args.priority,
          points: args.points,
          epic_id: args.epic_id,
        },
      });

    case 'zoho_sprints_update_item':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/items/${args.item_id}/`, {
        method: 'POST',
        body: {
          name: args.name,
          description: args.description,
          status: args.status,
          priority: args.priority,
          points: args.points,
        },
      });

    case 'zoho_sprints_list_epics':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/epics/`);

    case 'zoho_sprints_create_epic':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/epics/`, {
        method: 'POST',
        body: { name: args.name, description: args.description || '' },
      });

    case 'zoho_sprints_get_backlog':
      return zohoRequest('sprints', `/zsapi/teams/${args.team_id}/projects/${args.project_id}/backlog/`);

    default:
      throw new Error(`Unknown Sprints tool: ${name}`);
  }
}

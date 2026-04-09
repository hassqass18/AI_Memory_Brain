/**
 * Zoho Projects Tools
 * Manage portals, projects, task lists, tasks, milestones, bugs, timesheets, and more.
 */

import { zohoRequest } from '../auth.js';

export const projectsTools = [
  {
    name: 'zoho_projects_list_portals',
    description: 'List all Zoho Projects portals accessible to the authenticated user.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'zoho_projects_list_projects',
    description: 'List all projects in a portal.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        status: { type: 'string', enum: ['active', 'archived', 'template'], description: 'Filter by status (optional)' },
        sort_column: { type: 'string', description: 'Column to sort by (optional)' },
        sort_order: { type: 'string', enum: ['ascending', 'descending'], description: 'Sort order (optional)' },
        index: { type: 'number', description: 'Start index for pagination (default: 0)' },
        range: { type: 'number', description: 'Number of records (default: 100, max 100)' },
      },
      required: ['portal_id'],
    },
  },
  {
    name: 'zoho_projects_get_project',
    description: 'Get details of a specific project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
      },
      required: ['portal_id', 'project_id'],
    },
  },
  {
    name: 'zoho_projects_create_project',
    description: 'Create a new project in a portal.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        name: { type: 'string', description: 'Project name' },
        description: { type: 'string', description: 'Project description (optional)' },
        start_date: { type: 'string', description: 'Start date MM-DD-YYYY (optional)' },
        end_date: { type: 'string', description: 'End date MM-DD-YYYY (optional)' },
      },
      required: ['portal_id', 'name'],
    },
  },
  {
    name: 'zoho_projects_list_tasklists',
    description: 'List all task lists (milestones/epics) in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        flag: { type: 'string', enum: ['internal', 'external'], description: 'Filter (optional)' },
      },
      required: ['portal_id', 'project_id'],
    },
  },
  {
    name: 'zoho_projects_create_tasklist',
    description: 'Create a new task list in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        name: { type: 'string', description: 'Task list name' },
        flag: { type: 'string', enum: ['internal', 'external'], description: 'Visibility (optional)' },
      },
      required: ['portal_id', 'project_id', 'name'],
    },
  },
  {
    name: 'zoho_projects_list_tasks',
    description: 'List tasks in a project. Optionally filter by task list.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        tasklist_id: { type: 'string', description: 'Task list ID to filter by (optional)' },
        status: { type: 'string', description: 'Filter: open, closed (optional)' },
        index: { type: 'number', description: 'Start index (default: 0)' },
        range: { type: 'number', description: 'Number of records (default: 100)' },
      },
      required: ['portal_id', 'project_id'],
    },
  },
  {
    name: 'zoho_projects_get_task',
    description: 'Get details of a specific task.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        task_id: { type: 'string', description: 'Task ID' },
      },
      required: ['portal_id', 'project_id', 'task_id'],
    },
  },
  {
    name: 'zoho_projects_create_task',
    description: 'Create a new task in a project. Can assign to a specific task list.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        name: { type: 'string', description: 'Task name' },
        tasklist_id: { type: 'string', description: 'Task list ID to add task to (optional)' },
        description: { type: 'string', description: 'Task description (optional)' },
        start_date: { type: 'string', description: 'Start date MM-DD-YYYY (optional)' },
        end_date: { type: 'string', description: 'End date MM-DD-YYYY (optional)' },
        priority: { type: 'string', enum: ['none', 'low', 'medium', 'high'], description: 'Priority (optional)' },
        person_responsible: { type: 'string', description: 'User ID to assign (optional)' },
      },
      required: ['portal_id', 'project_id', 'name'],
    },
  },
  {
    name: 'zoho_projects_update_task',
    description: 'Update an existing task. Use this to change status, name, dates, priority, etc.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        task_id: { type: 'string', description: 'Task ID' },
        name: { type: 'string', description: 'Updated task name (optional)' },
        description: { type: 'string', description: 'Updated description (optional)' },
        start_date: { type: 'string', description: 'Start date MM-DD-YYYY (optional)' },
        end_date: { type: 'string', description: 'End date MM-DD-YYYY (optional)' },
        priority: { type: 'string', enum: ['none', 'low', 'medium', 'high'], description: 'Priority (optional)' },
        percent_complete: { type: 'number', description: 'Completion percentage 0-100 (optional)' },
        status: { type: 'string', description: 'Status name, e.g., "open", "closed", "completed" (optional)' },
        person_responsible: { type: 'string', description: 'User ID to assign (optional)' },
      },
      required: ['portal_id', 'project_id', 'task_id'],
    },
  },
  {
    name: 'zoho_projects_delete_task',
    description: 'Delete a task from a project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        task_id: { type: 'string', description: 'Task ID' },
      },
      required: ['portal_id', 'project_id', 'task_id'],
    },
  },
  {
    name: 'zoho_projects_list_milestones',
    description: 'List milestones in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        status: { type: 'string', enum: ['notcompleted', 'completed'], description: 'Filter (optional)' },
      },
      required: ['portal_id', 'project_id'],
    },
  },
  {
    name: 'zoho_projects_create_milestone',
    description: 'Create a milestone in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        name: { type: 'string', description: 'Milestone name' },
        start_date: { type: 'string', description: 'Start date MM-DD-YYYY' },
        end_date: { type: 'string', description: 'End date MM-DD-YYYY' },
        flag: { type: 'string', enum: ['internal', 'external'], description: 'Visibility (optional)' },
      },
      required: ['portal_id', 'project_id', 'name', 'start_date', 'end_date'],
    },
  },
  {
    name: 'zoho_projects_list_bugs',
    description: 'List bugs/issues in a project.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
        project_id: { type: 'string', description: 'Project ID' },
        status: { type: 'string', description: 'Filter by status (optional)' },
        index: { type: 'number', description: 'Start index (default: 0)' },
        range: { type: 'number', description: 'Number of records (default: 100)' },
      },
      required: ['portal_id', 'project_id'],
    },
  },
  {
    name: 'zoho_projects_list_users',
    description: 'List all users in a portal.',
    inputSchema: {
      type: 'object',
      properties: {
        portal_id: { type: 'string', description: 'Portal ID' },
      },
      required: ['portal_id'],
    },
  },
];

export async function handleProjectsTool(name, args) {
  switch (name) {
    case 'zoho_projects_list_portals':
      return zohoRequest('projects', '/restapi/portals/');

    case 'zoho_projects_list_projects': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      if (args.sort_column) params.set('sort_column', args.sort_column);
      if (args.sort_order) params.set('sort_order', args.sort_order);
      params.set('index', String(args.index || 0));
      params.set('range', String(args.range || 100));
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/?${params.toString()}`);
    }

    case 'zoho_projects_get_project':
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/`);

    case 'zoho_projects_create_project': {
      const body = { name: args.name };
      if (args.description) body.description = args.description;
      if (args.start_date) body.start_date = args.start_date;
      if (args.end_date) body.end_date = args.end_date;
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/`, {
        method: 'POST',
        body,
      });
    }

    case 'zoho_projects_list_tasklists':
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasklists/`);

    case 'zoho_projects_create_tasklist': {
      const body = { name: args.name };
      if (args.flag) body.flag = args.flag;
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasklists/`, {
        method: 'POST',
        body,
      });
    }

    case 'zoho_projects_list_tasks': {
      let endpoint;
      if (args.tasklist_id) {
        endpoint = `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasklists/${args.tasklist_id}/tasks/`;
      } else {
        endpoint = `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasks/`;
      }
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      params.set('index', String(args.index || 0));
      params.set('range', String(args.range || 100));
      return zohoRequest('projects', `${endpoint}?${params.toString()}`);
    }

    case 'zoho_projects_get_task':
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasks/${args.task_id}/`);

    case 'zoho_projects_create_task': {
      const body = { name: args.name };
      if (args.tasklist_id) body.tasklist_id = args.tasklist_id;
      if (args.description) body.description = args.description;
      if (args.start_date) body.start_date = args.start_date;
      if (args.end_date) body.end_date = args.end_date;
      if (args.priority) body.priority = args.priority;
      if (args.person_responsible) body.person_responsible = args.person_responsible;

      const endpoint = `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasks/`;
      return zohoRequest('projects', endpoint, { method: 'POST', body });
    }

    case 'zoho_projects_update_task': {
      const body = {};
      if (args.name) body.name = args.name;
      if (args.description) body.description = args.description;
      if (args.start_date) body.start_date = args.start_date;
      if (args.end_date) body.end_date = args.end_date;
      if (args.priority) body.priority = args.priority;
      if (args.percent_complete !== undefined) body.percent_complete = args.percent_complete;
      if (args.status) {
        // Zoho Projects uses custom_status with status ID, or percent_complete for open/closed
        if (args.status === 'closed' || args.status === 'Closed') {
          body.percent_complete = 100;
        } else if (args.status === 'open' || args.status === 'Open') {
          body.percent_complete = 0;
        } else {
          body.custom_status = args.status;
        }
      }
      if (args.person_responsible) body.person_responsible = args.person_responsible;
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasks/${args.task_id}/`, {
        method: 'POST',
        body,
      });
    }

    case 'zoho_projects_delete_task':
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/tasks/${args.task_id}/`, {
        method: 'DELETE',
      });

    case 'zoho_projects_list_milestones': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/milestones/?${params.toString()}`);
    }

    case 'zoho_projects_create_milestone': {
      const body = {
        name: args.name,
        start_date: args.start_date,
        end_date: args.end_date,
      };
      if (args.flag) body.flag = args.flag;
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/milestones/`, {
        method: 'POST',
        body,
      });
    }

    case 'zoho_projects_list_bugs': {
      const params = new URLSearchParams();
      if (args.status) params.set('status', args.status);
      params.set('index', String(args.index || 0));
      params.set('range', String(args.range || 100));
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/projects/${args.project_id}/bugs/?${params.toString()}`);
    }

    case 'zoho_projects_list_users':
      return zohoRequest('projects', `/restapi/portal/${args.portal_id}/users/`);

    default:
      throw new Error(`Unknown Projects tool: ${name}`);
  }
}

const ypmt = 'http://localhost:8080';

export const LOGIN = `${ypmt}/login`;

export const GET_CURRENT_USER = `${ypmt}/users/current_user`;

export const USERS = `${ypmt}/users`;
export const USER_BY_ID = userId => `${USERS}/${userId}`;

export const ROLES = `${ypmt}/roles`;

export const TASKS = `${ypmt}/tasks`;

export const TASK_TYPES = `${ypmt}/task_types`;

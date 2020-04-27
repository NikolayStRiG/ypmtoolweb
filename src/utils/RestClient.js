import * as urls from "../constants/urls";
import Auth from "./Auth";

export function getCurrentUserInfo(handleResponse, handleError) {
    getFetch(urls.GET_CURRENT_USER, handleResponse, handleError);
}

export function findAllUsers(handleResponse, handleError) {
    getFetch(urls.USERS, handleResponse, handleError);
}

export function findAllRole(handleResponse, handleError) {
    getFetch(urls.ROLES, handleResponse, handleError);
}

export function createUser(user, handleResponse, handleError) {
    postFetch(urls.USERS, user, handleResponse, handleError);
}

export function findAllTasks(handleResponse, handleError) {
    getFetch(urls.TASKS, handleResponse, handleError);
}

export function findAllTaskTypes(handleResponse, handleError) {
    getFetch(urls.TASK_TYPES, handleResponse, handleError);
}

export function createTask(task, handleResponse, handleError) {
    postFetch(urls.TASKS, task, handleResponse, handleError);
}

function postFetch(url, data, handleResponse, handleError) {
    const formValues = new Headers();
    formValues.append('X-Auth-Token', Auth.getToken());
    formValues.append('Content-Type', 'application/json')

    fetch(url, {method: 'POST', headers: formValues, body:data})
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            if (resp.status === 401) {
                throw new Error('Вы ввели неверные логин/пароль.');
            }
            throw new Error('Ошибка связи с сервером.');
        })
        .then((authData) => handleResponse(authData))
        .catch((err) => handleError(err));
}

function getFetch(url, handleResponse, handleError) {
    const formValues = new Headers();
    formValues.append('X-Auth-Token', Auth.getToken());

    fetch(url, {method: 'GET', headers: formValues})
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            if (resp.status === 401) {
                throw new Error('Вы ввели неверные логин/пароль.');
            }
            throw new Error('Ошибка связи с сервером.');
        })
        .then((authData) => handleResponse(authData))
        .catch((err) => handleError(err));
}

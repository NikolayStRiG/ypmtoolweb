import * as urls from "../constants/urls";
import Auth from "./Auth";

export default function getCurrentUserInfo(handleResponse, handleError) {

    const formValues = new Headers();

    formValues.append('X-Auth-Token', Auth.getToken());

    fetch(urls.GET_CURRENT_USER, {method: 'GET', headers: formValues})
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

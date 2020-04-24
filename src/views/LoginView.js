import * as React from "react";
import * as urls from "../constants/urls";
import Auth from "../utils/Auth";


export default class LoginView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        };
    }

    handleSubmit(event, login, password) {
        const formValues = new Headers();
        const value = window.btoa(login + ':' + password);
        formValues.append('Authorization', 'Basic ' + value);

        fetch(urls.LOGIN, {method: 'POST', headers: formValues})
            .then((resp) => {
                if (resp.ok) {
                    this.setState({error: ''});
                    return resp.json();
                }
                if (resp.status === 401) {
                    throw new Error('Вы ввели неверные логин/пароль.');
                }
                throw new Error('Ошибка связи с сервером.');
            })
            .then((authData) => this.props.onClick(authData.token))
            .catch((err) => {
                Auth.deauthenticateUser();
                this.setState({error: err.message});
            });
    }

    render() {
        let login = null;
        let password = null;

        return (
            <div>
                <h1 className="logo-name">YPM Tool</h1>
                <div className="alert alert-danger">{this.state.error}</div>
                <div className="form-group">
                    <label htmlFor="login-form__login">Логин</label>
                    <input
                        id="login-form__login"
                        type="text"
                        className="form-control"
                        placeholder="Введите логин"
                        name="login"
                        onChange={event => login = event.target.value}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="login-form__password">Пароль</label>
                    <input
                        id="login-form__password"
                        type="password"
                        className="form-control"
                        placeholder="Введите пароль"
                        name="password"
                        onChange={event => password = event.target.value}
                        required
                    />
                </div>
                <button className="button-login" onClick={event => this.handleSubmit(event, login, password)}>
                    Войти
                </button>
            </div>
        );
    }
}
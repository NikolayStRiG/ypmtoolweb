import * as React from "react";
import {useState} from "react";
import UserInfo from "../components/user/UserInfo";
import './RoutPage.css';
import UserRootPage from "../components/user/UserRootPage";
import {getCurrentUserInfo} from "../utils/RestClient";

function RoutPage(props) {

    const [user, setUser] = useState(null);
    const [body, setBody] = useState(<div>Привет</div>)

    if (user == null) {
        getCurrentUserInfo(body => setUser(body), error => props.onLogout());
    }

    const login = user == null ? '' : <p>{user.login}</p>

    return (
        <div className="rout-page">
            <header className="rout-page-header">
                <label>{login}</label>
                <button onClick={event => props.onLogout()}>Выйти</button>
            </header>

            <section>
                <nav className="rout-page-nav">
                    <ul className="rout-page-nav-ul">
                        <li><a href="#current_info"
                               onClick={event => setBody(<UserInfo currentUser={user}/>)}>Пользователь</a></li>
                        <li><a href="#users" onClick={event => setBody(<UserRootPage/>)}>Пользователи</a></li>
                    </ul>
                </nav>

                <article className="rout-page-article">
                    {body}
                </article>
            </section>

            <footer className="rout-page-footer">
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default RoutPage;

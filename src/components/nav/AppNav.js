import React from "react";
import UserRootPage from "../user/UserRootPage";
import TaskRootPage from "../task/TaskRootPage";
import SettingRootPage from "../settings/SettingRootPage";

function AppNav({updateContent}) {

    return (
        <nav className='app-nav'>
            <ul className="rout-page-nav-ul">
                <li><a href="#users" onClick={event => updateContent(<UserRootPage/>)}>Пользователи</a></li>
                <li><a href="#tasks" onClick={event => updateContent(<TaskRootPage/>)}>Задачи</a></li>
                <li><a href="#settings" onClick={event => updateContent(<SettingRootPage/>)}>Настройки</a></li>
            </ul>
        </nav>
    );
}

export default AppNav;

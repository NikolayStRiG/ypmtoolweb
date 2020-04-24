import React from "react";
import UserRootPage from "../user/UserRootPage";

function AppNav({updateContent}) {

    console.log(window.location.pathname); //yields: "/js" (where snippets run)
    console.log(window.location.href);     //yields: "https://stacksnippets.net/js"

    return (
        <nav className='app-nav'>
            <ul className="rout-page-nav-ul">
                <li><a href="#users" onClick={event => updateContent(<UserRootPage/>)}>Пользователи</a></li>
            </ul>
        </nav>
    );
}

export default AppNav;

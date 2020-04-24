import React from 'react';
import UserInfo from "../user/UserInfo";

function AppHeader({user, onLogout, updateContent}) {
    const login = user != null ? user.login : '';

    function handleLabelClick(event) {
        updateContent(<UserInfo currentUser={user}/>);
    }

    return (
        <header className='app-header'>
            <label onClick={event => handleLabelClick(event)}>{login}</label>
            <button onClick={event => onLogout()}>Выйти</button>
        </header>
    );
}

export default AppHeader;

import React, {useState} from 'react';
import './App.css';
import LoginView from "./views/LoginView";
import Auth from "./utils/Auth";
import AppWrapper from "./views/AppWrapper";

function App() {

    const [, forceUpdate] = useState(null);

    function handleLogin(token) {
        Auth.authenticateUser(token);
        forceUpdate(true);
    }

    function logout() {
        Auth.deauthenticateUser();
        forceUpdate(false);
    }

    return (
        <div className="App">
            {Auth.isUserAuthenticated()
                ? (<AppWrapper onLogout={() => logout()} />)
                : (<LoginView onClick={(token) => handleLogin(token)}/>)}
        </div>
    );
}

export default App;

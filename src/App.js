import React, {useState} from 'react';
import './App.css';
import LoginView from "./views/LoginView";
import Auth from "./utils/Auth";
import RoutPage from "./views/RoutPage";

function App() {

    const [token, setToken] = useState(null);

    function handleLogin(token) {
        Auth.authenticateUser(token);
        setToken(token);
    }

    function logout() {
        Auth.deauthenticateUser();
        setToken('');
    }

    let body = '';
    if (Auth.isUserAuthenticated()) {
        body = <RoutPage token onLogout={() => logout()} />;
    } else {
        body = <LoginView onClick={(token) => handleLogin(token)}/>;
    }

  return (
      <div className="App">
          {body}
      </div>
  );
}

export default App;

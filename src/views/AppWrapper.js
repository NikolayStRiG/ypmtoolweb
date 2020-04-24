import React, {useEffect, useState} from 'react';
import './AppWrapper.css';
import AppHeader from "../components/header/AppHeader";
import AppNav from "../components/nav/AppNav";
import AppContent from "../components/content/AppContent";
import AppFooter from "../components/footer/AppFooter";
import {getCurrentUserInfo} from "../utils/RestClient";

const AppWrapper = ({onLogout}) => {

    const [user, setUser] = useState(null);
    const [content, setContent] = useState(<div>Home</div>)

    useEffect(() => {
        if (user == null) {
            getCurrentUserInfo(body => setUser(body), error => onLogout());
        }
    }, [user, onLogout]);

    function updateContent(newContent) {
        setContent(newContent);
    }

    return (
        <div className='app-wrapper'>
            <AppHeader user={user} onLogout={() => onLogout()} updateContent={newContent => updateContent(newContent)}/>
            <AppNav updateContent={newContent => updateContent(newContent)}/>
            <AppContent>
                {content}
            </AppContent>
            <AppFooter updateContent={newContent => updateContent(newContent)}/>
        </div>
    );
}

export default AppWrapper;

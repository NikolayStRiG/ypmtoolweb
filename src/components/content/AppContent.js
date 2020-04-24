import React from "react";

function AppContent(props) {

    return (
        <div className='app-content'>
            {props.children}
        </div>
    );
}

export default AppContent;

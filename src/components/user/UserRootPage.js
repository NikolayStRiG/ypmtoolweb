import * as React from "react";
import {useState} from "react";
import UserList from "./UserList";
import {findAllUsers} from "../../utils/RestClient";
import UserInfo from "./UserInfo";
import UserAddForm from "./UserAddForn";

function UserRootPage(props) {

    const [init, setInit] = useState(false);
    const [userList, setUserList] = useState([]);
    const [body, setBody] = useState(<div>Загрузка данных...</div>);

    function handleClick(user) {
        setBody(<UserInfo currentUser={user}/>);
    }

    function handleResponse(response) {
        setUserList(response);
        setBody(<UserList data={response} onClick={(user) => handleClick(user)}/>);
    }

    function handleError(error) {
        setBody(
            <div>
                <p>Ошибка получения пользователей </p>
                <p>{error.message}</p>
            </div>
        );
    }

    if (!init) {
        setInit(true);
        findAllUsers(response => handleResponse(response), error => handleError(error));
    }

    function handle(user) {
        setUserList(userList.concat(user))
        setBody(<UserInfo currentUser={user}/>)
    }

    return (
        <div className="user-root-page">
            <div>
                {body}
            </div>
            <p>
                <button onClick={event => setBody(<UserList data={userList} onClick={(user) => handleClick(user)}/>)}>К списку</button>
                <button onClick={event => setBody(<UserAddForm onCreate={user => handle(user)} />)}>Добавить</button>
            </p>
        </div>
    )
}

export default UserRootPage;

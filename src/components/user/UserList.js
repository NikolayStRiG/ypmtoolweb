import * as React from "react";

function UserList(props) {

    const list = props.data.map((user) => {
        return (
            <li key={user.id}>
                Логин: {user.login}, Фамилия: {user.surname}
                <button onClick={event => props.onClick(user)}>Информация</button>
            </li>
        );
    });

    return (
        <div className="user-list">
            <ul className="user-list-ul">
                {list}
            </ul>
        </div>
    )
}

export default UserList;

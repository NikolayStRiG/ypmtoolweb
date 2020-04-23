import * as React from "react";

function UserInfo(props) {

    const currentUser = props.currentUser;
    if (currentUser == null) {
        return (
            <div>Загрузка...</div>
        )
    }
    return (
        <div className="user-info">
            <table>
                <tbody>
                    <tr><td>Логин</td><td>{currentUser.login}</td></tr>
                    <tr><td>Роль</td><td>{currentUser.userRole.name}</td></tr>
                    <tr><td>Фамилия</td><td>{currentUser.surname}</td></tr>
                    <tr><td>Имя</td><td>{currentUser.forename}</td></tr>
                    <tr><td>Отчество</td><td>{currentUser.patronymic}</td></tr>
                    <tr><td>Телефон</td><td>{currentUser.telephone}</td></tr>
                    <tr><td>Почта</td><td>{currentUser.email}</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserInfo;

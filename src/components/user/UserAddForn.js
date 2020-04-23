import * as React from "react";
import {useState} from "react";
import {createUser, findAllRole} from "../../utils/RestClient";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";

function UserAddForm(props) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('');
    const [surname, setSurname] = useState('');
    const [forename, setForename] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');

    const [roleList, setRoleList] = useState(null);

    const [message, setMessage] = useState('');

    if (roleList == null) {
        findAllRole(response => setRoleList(response), error => setRoleList([]));
    }

    function handleSave() {
        const userDTO = {
            login: login,
            password: password,
            roleId: roleId,
            surname: surname,
            forename: forename,
            patronymic: patronymic,
            telephone: telephone,
            email: email
        };

        const dto = JSON.stringify(userDTO);
        createUser(dto, newUser => setMessage('Успешно сохранен'), error => setMessage(error.message) );
    }

    return (
        <div className="user-add-form">
            <div>{message}</div>
            <p>Создание пользователя</p>
            <TextInput label="Логин" onChange={value => setLogin(value)}/>
            <TextInput label="Пароль" type="password" onChange={value => setPassword(value)}/>
            <TextInput label="Фамилия" onChange={value => setSurname(value)}/>
            <TextInput label="Имя" onChange={value => setForename(value)}/>
            <TextInput label="Отчество" onChange={value => setPatronymic(value)}/>
            <TextInput label="Телефон" onChange={value => setTelephone(value)}/>
            <TextInput label="Почта" type="email" onChange={value => setEmail(value)}/>
            <SelectInput label="Роль" list={roleList} onChange={value => setRoleId(value)}/>
            <div>
                <button onClick={event => handleSave()}>Сохранить</button>
            </div>
        </div>
    )
}

export default UserAddForm;

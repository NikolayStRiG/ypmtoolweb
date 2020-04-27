import React, {useEffect, useState} from "react";
import {createTask, findAllTaskTypes, findAllUsers} from "../../utils/RestClient";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import Task, {Label} from "./Task";

function TaskAddForm() {

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [priority, setPriority] = useState(null);
    const [typeId, setTypeId] = useState(null);
    const [responsibleUserId, setResponsibleUserId] = useState(null);
    const [finishTime, setFinishTime] = useState(null);

    const [taskTypeList, setTaskTypeList] = useState(null);
    const [userList, setUserList] = useState(null);

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (taskTypeList == null) {
            findAllTaskTypes(response => setTaskTypeList(response), error => setTaskTypeList([]));
        }
    }, [taskTypeList]);

    useEffect(() => {
        if (userList == null) {
            findAllUsers(response => setUserList(response), error => setUserList([]));
        }
    }, [userList]);

    function handleSave() {
        const data = finishTime == null ? null : new Date(Date.parse(finishTime)).toISOString();

        const task = new Task(null, name, description, null, priority,
            new Label(typeId, null, null),
            new Label(responsibleUserId, null, null),
            data, null, null);

        const dto = JSON.stringify(task);
        createTask(dto, newUser => setMessage('Успешно сохранен'), error => setMessage(error.message) );
    }

    return (
        <div className="task-add-form">
            <div>{message}</div>
            <p>Создание задачи</p>
            <TextInput label="Название: " onChange={value => setName(value)}/>
            <TextInput label="Описание: " onChange={value => setDescription(value)}/>
            <TextInput label="Приоритет: " type="number" onChange={value => setPriority(value)}/>
            <SelectInput label="Тип: "
                         list={taskTypeList}
                         onChange={value => setTypeId(value)}
                         getKey={item => item.id}
                         getName={item => item.name}
            />
            <SelectInput label="Ответственный: "
                         list={userList}
                         onChange={value => setResponsibleUserId(value)}
                         getKey={item => item.id}
                         getName={item => item.surname}
            />

            <TextInput label="Время завершения: " type="datetime-local" onChange={value => setFinishTime(value)}/>

            <div>
                <button onClick={() => handleSave()}>Сохранить</button>
            </div>
        </div>
    );
}

export default TaskAddForm;

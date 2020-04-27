import React, {useEffect, useState} from "react";
import {findAllTasks} from "../../utils/RestClient";
import TaskList from "./TaskList";
import TaskAddForm from "./TaskAddForm";

function TaskRootPage() {

    const [init, setInit] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [body, setBody] = useState(<div>Загрузка данных...</div>);

    useEffect(() => {
        function handleResponse(response) {
            setTaskList(response);
            setBody(<TaskList data={response} onClick={(task) => handleClick(task)}/>);
        }

        function handleError(error) {
            setBody(
                <div>
                    <p>Ошибка получения задач</p>
                    <p>{error.message}</p>
                </div>
            );
        }

        if (!init) {
            setInit(true);
            findAllTasks(response => handleResponse(response), error => handleError(error));
        }
    }, [init]);

    function handleClick(task) {
        // setBody(<TaskInfo task={task}/>);
    }

    function handle(user) {
        setTaskList(taskList.concat(user))
        setBody(<div>Info</div>)
    }

    return (
        <div className="task-root-page">
            <div>
                {body}
            </div>
            <p>
                <button onClick={() => setBody(<TaskList data={taskList} onClick={(task) => handleClick(task)}/>)}>К списку</button>
                <button onClick={() => setBody(<TaskAddForm onCreate={task => handle(task)} />)}>Добавить</button>
            </p>
        </div>
    );
}

export default TaskRootPage;

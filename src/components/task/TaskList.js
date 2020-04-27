import React from "react";

function TaskList({data, onClick}) {

    const list = data.map((task) => {
        return (
            <li className="task-list-li" key={task.id}>
                Номер: {task.id}, Название: {task.name}, Время завершения: {task.finishTime}
                <button onClick={() => onClick(task)}>Подробности</button>
            </li>
        );
    });

    return (
        <div className="task-list">
            <ul className="task-list-ul">
                {list}
            </ul>
        </div>
    )
}

export default TaskList;

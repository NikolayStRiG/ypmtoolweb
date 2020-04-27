export default class Task {
    constructor(id, name, description, status, priority, type, responsibleUser, finishTime, createUser, createTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.type = type;
        this.responsibleUser = responsibleUser;
        this.finishTime = finishTime;
        this.createUser = createUser;
        this.createTime = createTime;
    }
}

export class Label {

    constructor(id, code, label) {
        this.id = id;
        this.code = code;
        this.label = label;
    }
}


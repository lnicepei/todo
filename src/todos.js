class Todo{
    constructor(name, description, date, priority, complete){
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.complete = complete;
    }

    markComplete(){
        this.complete = 1;
    }
}

export {Todo};
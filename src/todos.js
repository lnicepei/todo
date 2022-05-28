import { createTodoButton } from "./updateTodosDOM";

function Todo(name, description, date, priority, complete){
    
    function createTodo(){
        updateTodoOnScreen(name, description, date, priority, complete);
        createTodoButton();
    }
    
    return{
        name: name,
        description: description,
        date: date,
        priority: priority,
        complete: complete
    }
}

export {Todo};
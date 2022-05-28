import { updateTodoOnScreen, createTodoButton } from "./updateTodosDOM";

function Todo(name, description, date, priority, complete){
    let todosArray = [];
    function createTodo(){
        alert("enter your todo");
        let name = prompt("Name");
        let description = prompt("Description");
        let date = prompt("date");
        let priority = prompt("priority");
        let complete = 1;
        let test = Todo(name, description, date, priority, complete);
        updateTodoOnScreen(name, description, date, priority, complete);
        createTodoButton();
        todosArray.push(test);
        console.log(todosArray);
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
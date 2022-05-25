import { Project } from "./projects";
import { Todo } from "./todos";

let Inbox = new Project("Inbox");


function createTodo(){
    alert("enter your todo");
    let name = prompt("Name");
    let description = prompt("Description");
    let date = prompt("date");
    let priority = prompt("priority");
    let complete = 1;
    let test = new Todo(name, description, date, priority, complete);
    let todoContainer = document.createElement('div');
    document.querySelector('#content').appendChild(todoContainer);
    todoContainer.textContent += test.name + test.description + test.date + test.priority + test.complete;
}

export {createTodo}
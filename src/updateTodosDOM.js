import { Todo } from "./todos";

// function updateTodoOnScreen(){
//     let todoContainer = document.createElement('div');
//     document.querySelector('#content').appendChild(todoContainer);
//     todoContainer.textContent += test.name + test.description + test.date + test.priority + test.complete;
// }

function showTodosArray(){
    for(let i in todosArray){
        document.querySelector('#content').textContent = todosArray[i].name + todosArray[i].description + todosArray[i].date + todosArray[i].priority + todosArray[i].complete;
    }
}

function createTodoButton(){
    let createTodoButton = document.createElement('button');
    document.querySelector('#content').appendChild(createTodoButton);
    createTodoButton.textContent = 'Create todo';
    createTodoButton.addEventListener('click', createTodo);
}

let todosArray = [];
function createTodo(){
    // alert("enter your todo");
    // let name = prompt("Name");
    // let description = prompt("Description");
    // let date = prompt("date");
    // let priority = prompt("priority");
    let complete = 1;
    let name = 'One';
    let description = 'Descr';
    let date = 1;
    let priority = 0;
    let test = Todo(name, description, date, priority, complete);
    todosArray.push(test);
    showTodosArray();
    createTodoButton();
    return{test}
}

export {createTodoButton, showTodosArray, createTodo}
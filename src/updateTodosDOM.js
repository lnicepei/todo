import { Todo } from "./todos";

function updateTodoOnScreen(){
    let todoContainer = document.createElement('div');
    document.querySelector('#content').appendChild(todoContainer);
    todoContainer.textContent += test.name + test.description + test.date + test.priority + test.complete;
}

function showTodosArray(){
    for(let i in todosArray){
        document.querySelector('#content').textContent += todosArray[i].name + ' ' + todosArray[i].description;
    }
    console.log(todosArray);
}

function createTodoButton(){
    let createTodoButton = document.createElement('button');
    document.querySelector('#content').appendChild(createTodoButton);
    createTodoButton.textContent = 'Create todo';
    createTodoButton.addEventListener('click', Todo.createTodo);
}

export {updateTodoOnScreen, createTodoButton, showTodosArray}
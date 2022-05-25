import { createTodo } from "./updateTodosDOM";

let createTodoButton = document.createElement('button');
document.querySelector('#content').appendChild(createTodoButton);
createTodoButton.textContent = 'Create todo';
createTodoButton.addEventListener('click', createTodo);
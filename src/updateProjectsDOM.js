import { Project } from "./projects";
import { Todo } from "./todos";
import { createTodoButton, showTodos, showTodosArray } from "./updateTodosDOM";
import { createTodo } from "./updateTodosDOM";

let i = 1;

function createProject(){
    let name = prompt('Name');
    let project = document.createElement('div');
    project.className = 'project' + i;
    i++;
    project.addEventListener('click', showThisProject);
    document.querySelector('.projects').appendChild(project);
    project.textContent = name;
    createTodoButton();
}

function showThisProject(){
    document.getElementById('content').innerHTML = '';
    showTodosArray();
}

export {createProject}
import { Project } from "./projects";
import { Todo } from "./todos";
import { createTodoButton, createTodo, showTodosArray } from "./updateTodosDOM";
let i = 1;

function createProject() {
    let name = prompt('Name');
    let testProject = new Project(name);
    let project = document.createElement('div');
    project.className = 'project' + i;
    i++;
    let child = createTodo();
    testProject.arr.push(child);
    console.log(child);
    console.log(testProject.arr);
    project.addEventListener('click', showThisProject);
    document.querySelector('.projects').appendChild(project);
    project.textContent = name;
    createTodoButton();
}

function showThisProject(){
    document.getElementById('content').innerHTML = '';
    showTodosArray();
    createTodoButton();
}

export {createProject}
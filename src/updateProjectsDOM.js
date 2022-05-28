import { Project, arrayOfProjects } from "./projects";
import { Todo } from "./todos";
import { createTodoButton, createTodo, showTodosArray } from "./updateTodosDOM";
let i = 1;

function createProject() {
    let name = prompt('Name');
    let newProject = new Project(name);
    let project = document.createElement('div');
    project.className = 'project' + i;
    i++;
    let taskInsideProject = createTodo();
    newProject.arr.push(taskInsideProject);
    project.addEventListener('click', () => {
        console.log(newProject);
        document.getElementById('content').innerHTML = '';
        for(let i in newProject.arr){
        document.querySelector('#content').textContent = newProject.arr[i].task.name + newProject.arr[i].task.description + newProject.arr[i].task.date + newProject.arr[i].task.priority + newProject.arr[i].task.complete;
    }
        createTodoButton();
    });
    document.querySelector('.projects').appendChild(project);
    project.textContent = name;
    // createTodoButton();
}

// function showThisProject(newProject){
//     console.log(newProject);
//     document.getElementById('content').innerHTML = '';
//     for(let i in newProject.arr){
//         document.querySelector('#content').textContent = newProject.arr[i].task.name + newProject.arr[i].task.description + newProject.arr[i].task.date + newProject.arr[i].task.priority + newProject.arr[i].task.complete;
//     }
//     createTodoButton();
// }

function showAllProjects(){
    document.querySelector('.projects').innerHTML = '';
    for(let i in arrayOfProjects){
        document.querySelector('.projects').textContent += arrayOfProjects[i];
    }
}

export {createProject}
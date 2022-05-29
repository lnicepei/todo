import { Project, arrayOfProjects } from "./projects";
import { Todo } from "./todos";
import { TodoButton, createTodoButton, showTodosArray } from "./updateTodosDOM";
let i = 1;

function createProject() {
    let name = prompt('Name');
    let newProject = new Project(name);
    let project = document.createElement('div');
    project.className = 'project' + i;
    i++;
    // createTodoButton();
    document.querySelector('#content').textContent = '';
    let taskInsideProject = TodoButton(newProject);
    newProject.arr.push(taskInsideProject);
    project.addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';
        // console.log(newProject.arr[1].name);
        for(let f = 1; f <= newProject.arr.length - 1; f++){
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.textContent += newProject.arr[f].name + newProject.arr[f].description + newProject.arr[f].date + newProject.arr[f].priority + newProject.arr[f].complete;
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
        TodoButton(newProject);
    });
    // document.querySelector('#content').innerHTML = '';
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

function showAllTasks(newProject){
    document.getElementById('content').innerHTML = '';
        // console.log(newProject.arr[1].name);
        for(let f = 1; f <= newProject.arr.length - 1; f++){
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.textContent += newProject.arr[f].name + newProject.arr[f].description + newProject.arr[f].date + newProject.arr[f].priority + newProject.arr[f].complete;
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
}

export {createProject, showAllTasks}
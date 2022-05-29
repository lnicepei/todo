import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";
let i = 1;

function createProject() {
    let name = prompt('Name');
    let newProject = new Project(name);
    let project = document.createElement('div');
    project.className = 'project' + i;
    i++;
    document.querySelector('#content').textContent = '';
    let taskInsideProject = TodoButton(newProject);
    newProject.arr.push(taskInsideProject);
    project.addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';
        for(let f = 1; f <= newProject.arr.length - 1; f++){
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.textContent += newProject.arr[f].name + newProject.arr[f].description + newProject.arr[f].date + newProject.arr[f].priority + newProject.arr[f].complete;
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
        TodoButton(newProject);
    });
    document.querySelector('.projects').appendChild(project);
    project.textContent = name;
}

(function createInbox(){
    let inbox = new Project('Inbox');
    let inboxContainer = document.createElement('div');
    inboxContainer.className = 'inbox';
    let taskInsideInbox = TodoButton(inbox);
    inbox.arr.push(taskInsideInbox);
    document.querySelector('.inbox').addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';
        for(let f = 1; f <= inbox.arr.length - 1; f++){
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.textContent += inbox.arr[f].name + inbox.arr[f].description + inbox.arr[f].date + inbox.arr[f].priority + inbox.arr[f].complete;
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
        TodoButton(inbox);
    });
    document.querySelector('.inbox').appendChild(inboxContainer);
})();

function showAllTasks(newProject) {
    document.getElementById('content').innerHTML = '';
        for(let f = 1; f <= newProject.arr.length - 1; f++){
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.textContent += newProject.arr[f].name + newProject.arr[f].description + newProject.arr[f].date + newProject.arr[f].priority + newProject.arr[f].complete;
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
}

export {createProject, showAllTasks}
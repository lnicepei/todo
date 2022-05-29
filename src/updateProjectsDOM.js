import { Project } from "./projects";
import { TodoButton, deleteTask } from "./updateTodosDOM";

function createProject() {
    let name = prompt('Name');
    let newProject = new Project(name);
    
    let project = document.createElement('div');
    project.className = 'project';

    document.querySelector('#content').textContent = '';

    let taskInsideProject = TodoButton(newProject);
    newProject.arrayOfTodos.push(taskInsideProject);

    project.addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';

        for(let f = 1; f <= newProject.arrayOfTodos.length - 1; f++) {
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.addEventListener('click', () => {
                alert('hello');
            });
            taskOnTheScreen.textContent += newProject.arrayOfTodos[f].name + newProject.arrayOfTodos[f].description + newProject.arrayOfTodos[f].date + newProject.arrayOfTodos[f].priority + newProject.arrayOfTodos[f].complete;
            
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
        
        TodoButton(newProject);
    });
    
    document.querySelector('.projects').appendChild(project);
    project.textContent = name;
}

function deleteTaskInside(newProject, name){
    for( var i = 0; i < newProject.arrayOfTodos.length; i++){ 
    
        if ( newProject.arrayOfTodos[i].name === name) { 
    
            newProject.arrayOfTodos.splice(i, 1); 
        }
    
    }
}

(function createInbox(){
    let inbox = new Project('Inbox');

    let inboxContainer = document.createElement('div');
    inboxContainer.className = 'inbox';

    let taskInsideInbox = TodoButton(inbox);
    inbox.arrayOfTodos.push(taskInsideInbox);

    document.querySelector('.inbox').addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';

        for(let f = 1; f <= inbox.arrayOfTodos.length - 1; f++) {
            let taskOnTheScreen = document.createElement('div');
            taskOnTheScreen.className = 'task';
            taskOnTheScreen.textContent += inbox.arrayOfTodos[f].name + inbox.arrayOfTodos[f].description + inbox.arrayOfTodos[f].date + inbox.arrayOfTodos[f].priority + inbox.arrayOfTodos[f].complete;
            document.querySelector('#content').appendChild(taskOnTheScreen);
        }
        TodoButton(inbox);
    });

    document.querySelector('.inbox').appendChild(inboxContainer);
})();

export {createProject}
import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";

function createProject() {
    let name = prompt('Name');
    let newProject = new Project(name);
    
    let project = document.createElement('div');
    project.className = 'project';

    document.querySelector('#content').textContent = '';

    let taskInsideProject = TodoButton(newProject);
    newProject.arrayOfTodos.push(taskInsideProject);

    project.addEventListener('click', () => {
        createTask(newProject);
    });
    
    document.querySelector('.projects').appendChild(project);
    project.textContent = name;
}

(function createInbox() {
    let inbox = new Project('Inbox');

    let inboxContainer = document.createElement('div');
    inboxContainer.className = 'inbox';

    let taskInsideInbox = TodoButton(inbox);
    inbox.arrayOfTodos.push(taskInsideInbox);

    document.querySelector('.inbox').addEventListener('click', () => {
        createTask(inbox)
    });

    document.querySelector('.inbox').appendChild(inboxContainer);
})();

function createTask(project) {
    document.getElementById('content').innerHTML = '';

    for(let f = 1; f <= project.arrayOfTodos.length - 1; f++) {
        let taskOnTheScreen = document.createElement('div');
        taskOnTheScreen.className = 'task';
        
        taskOnTheScreen.textContent += project.arrayOfTodos[f].name + project.arrayOfTodos[f].description + project.arrayOfTodos[f].date + project.arrayOfTodos[f].priority;
        
        let checkBox = document.createElement('button');
        checkBox.textContent = 'Complete';
        checkBox.addEventListener('click', () => {
            deleteTask(project, f);
            createTask(project);
        })
        
        if(project.arrayOfTodos[f].completed == 0) taskOnTheScreen.appendChild(checkBox);
        document.querySelector('#content').appendChild(taskOnTheScreen);
    }

    TodoButton(project);
}


function deleteTask(newProject, numberOfTask) {
    for( var i = 0; i < newProject.arrayOfTodos.length; i++){ 
    
        // if (arr[i] === 5) {
            newProject.arrayOfTodos.splice(numberOfTask, 1); 
        // }
    
    }
    // newProject.arrayOfTodos[numberOfTask];
    console.log(newProject.arrayOfTodos);

}

export {createProject, createTask}
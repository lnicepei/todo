import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";
let arrayOfProjects = [];
function createProject(name) {
    let newProject = new Project(name);
    
    arrayOfProjects.push(newProject);
    
    document.querySelector('#content').textContent = '';
    
    let taskInsideProject = TodoButton(newProject);
    newProject.arrayOfTodos.push(taskInsideProject);
    
    console.log(arrayOfProjects);
    updateProjects();
}

function updateProjects() {
    document.querySelector('.projects').innerHTML = '';
    for(let i = 0; i < arrayOfProjects.length; i++) {
        let project = document.createElement('div');
        project.className = 'project';
        
        document.querySelector('.projects').appendChild(project);
        project.textContent = arrayOfProjects[i].name;

        let deleteProjectButton = document.createElement('button');
        deleteProjectButton.textContent = 'x';
        
        deleteProjectButton.addEventListener('click', () => {
            deleteProject(arrayOfProjects[i]);
        });

        project.addEventListener('click', () => {
            createTask(arrayOfProjects[i]);
        });

        project.appendChild(deleteProjectButton);
    }
}

(function createInbox() {
    let inbox = new Project('Inbox');

    let inboxContainer = document.createElement('div');
    inboxContainer.className = 'inbox';

    let taskInsideInbox = TodoButton(inbox);
    inbox.arrayOfTodos.push(taskInsideInbox);

    document.querySelector('.inbox').addEventListener('click', () => {
        createTask(inbox);
    });

    document.querySelector('.inbox').appendChild(inboxContainer);
})();

function createTask(project) {
    document.getElementById('content').innerHTML = '';

    for(let f = 1; f <= project.arrayOfTodos.length - 1; f++) {
        let taskOnTheScreen = document.createElement('div');
        taskOnTheScreen.className = 'task';
        
        let checkBox = document.createElement('button');
        checkBox.textContent = '';
        checkBox.className = 'checkbox';
        taskOnTheScreen.appendChild(checkBox);

        let taskName = document.createElement('div');
        taskName.textContent = project.arrayOfTodos[f].name;
        taskName.className = 'taskname';
        taskOnTheScreen.appendChild(taskName);

        let description = document.createElement('div');
        description.textContent = project.arrayOfTodos[f].description;
        description.className = 'description';
        taskOnTheScreen.appendChild(description);

        let priority = document.createElement('div');
        taskOnTheScreen.priority = project.arrayOfTodos[f].priority;

        if(project.arrayOfTodos[f].priority == 1) taskName.style.background = 'red';
        if(project.arrayOfTodos[f].priority == 2) taskName.style.background = 'orange';
        if(project.arrayOfTodos[f].priority == 3) taskName.style.background = 'yellow';

        priority.className = 'priority';
        taskOnTheScreen.appendChild(priority);
                        
        checkBox.addEventListener('click', () => {
            deleteTask(project, f);
            createTask(project);
        });

        let datePicker = document.createElement('div');
        taskOnTheScreen.appendChild(datePicker);
        datePicker.className = 'date';
        datePicker.textContent = project.arrayOfTodos[f].date;
        
        document.querySelector('#content').appendChild(taskOnTheScreen);
    }

    TodoButton(project);
}

function inputProjectName() {
    let inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');

    let projectsDiv = document.querySelector('.projects');
    console.log(projectsDiv.firstChild);
    if(projectsDiv.lastChild !== inputForProjectName) projectsDiv.appendChild(inputForProjectName);

    let submitButtonForProjectName = document.createElement('button');
    projectsDiv.appendChild(submitButtonForProjectName);
    submitButtonForProjectName.textContent = 'Ok';

    submitButtonForProjectName.addEventListener('click', () => {
        let name = inputForProjectName.value;
        if(name) {
            projectsDiv.removeChild(inputForProjectName);
            projectsDiv.removeChild(submitButtonForProjectName);
            createProject(name);
        }else {
            alert('Enter project name');
        }
    });
}

function deleteTask(newProject, numberOfTask) {
    newProject.arrayOfTodos.splice(numberOfTask, 1); 
}

function deleteProject(newProject){
    for(let i = 0; i < arrayOfProjects.length; i++){
        if(arrayOfProjects[i] == newProject){
            arrayOfProjects.splice(i, 1);
        }
    }
    document.querySelector('#content').innerHTML = '';
    updateProjects();

}

export {inputProjectName, createTask}
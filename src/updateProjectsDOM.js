import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";

function createProject(name) {
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

function inputProjectName(){
    let inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');
    let projectsDiv = document.querySelector('.projects')
    projectsDiv.appendChild(inputForProjectName);

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

export {inputProjectName, createTask}
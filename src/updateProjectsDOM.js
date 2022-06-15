import { Project, deleteProject, checkIdenticalProject } from "./projects";
import { TodoButton } from "./updateTodosDOM";
import { createUpcomingTasks, createTodaysTasks, deleteTask } from './todos';

let arrayOfProjects = [];

(function checkProjectsOnReload() {
    if('projects' in localStorage){
        arrayOfProjects = JSON.parse(localStorage.getItem('projects') || []);
    }

    createInbox();
    
    updateProjects();

    document.querySelector('.today').addEventListener('click', createTodaysTasks);
    document.querySelector('.upcoming').addEventListener('click', createUpcomingTasks);
})();

function createInbox() {
    updateCurrentProject('Inbox');
    
    let inbox = new Project('Inbox');
    if(arrayOfProjects.filter(project => project.name == 'Inbox').length == 0) arrayOfProjects.push(inbox);
    
    TodoButton(inbox);
    
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
    (arrayOfProjects.filter(project => project.name == 'Inbox').length > 0) ? createAllTasksInProject(arrayOfProjects[0]) : createAllTasksInProject(inbox);
    
    document.querySelector('.inbox').addEventListener('click', () => {
        (arrayOfProjects.filter(project => project.name == 'Inbox').length > 0) ? createAllTasksInProject(arrayOfProjects[0]) : createAllTasksInProject(inbox);
    });
}

function createProject(name) {
    let newProject = new Project(name);
    arrayOfProjects.push(newProject);

    document.querySelector('.content').textContent = '';

    TodoButton(newProject);

    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));

    if(name == 'Inbox') return newProject;
        
    updateProjects();
}

function updateProjects() {
    document.querySelector('.projects').textContent = '';
    
    arrayOfProjects.forEach(projectInArray => {
        let deleteButtonIndex = 0;

        const project = document.createElement('div');
        project.className = 'project';
            
        project.textContent = projectInArray.name;
        
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('project__btn');
        deleteProjectButton.textContent = 'x';
        
        deleteProjectButton.addEventListener('click', () => {
            document.querySelector('.create-button').textContent = '';
            deleteProject(projectInArray);
            deleteButtonIndex = 1;
        });
        
        project.addEventListener('click', () => {
            if(deleteButtonIndex == 0) createAllTasksInProject(projectInArray);
        });
            
        project.appendChild(deleteProjectButton);
        if(projectInArray.name !== 'Inbox'){
            document.querySelector('.projects').appendChild(project);
        }
    });
}

function createAllTasksInProject(project, indexOfTodayTask, origin) {
    if (!indexOfTodayTask) {
        document.querySelector('.content').textContent = '';
        document.querySelector('.create-button').textContent = '';
        updateCurrentProject(project);
    }

    for(let f in project.arrayOfTodos) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const taskCheckbox = document.createElement('div');
        taskCheckbox.textContent = '';
        taskCheckbox.className = 'task__checkbox';
        taskDiv.appendChild(taskCheckbox);

        const taskName = document.createElement('div');
        taskName.textContent = project.arrayOfTodos[f].name;
        taskName.className = 'task__name';
        taskDiv.appendChild(taskName);

        if(indexOfTodayTask || origin){
            const taskOrigin = document.createElement('div');
            taskOrigin.textContent = 'Project: ' + project.name;
            taskOrigin.className = 'task__origin';
            taskDiv.appendChild(taskOrigin);
        }

        // const taskTimeLeft = document.createElement('div');
        // taskTimeLeft.textContent = intervalToDuration({
        //     start: new Date(project.arrayOfTodos[f].date),
        //     end: new Date(),
        // });
        
        // taskTimeLeft.className = 'task__time-left';
        // taskDiv.appendChild(taskTimeLeft);
        
        const taskDate = document.createElement('div');
        taskDiv.appendChild(taskDate);
        taskDate.className = 'task__date';
        taskDate.textContent = project.arrayOfTodos[f].date;

        switch (project.arrayOfTodos[f].priority) {
            case '1':
                taskCheckbox.style.background = 'red';
                break;
            case '2':
                taskCheckbox.style.background = 'orange';
                break;
            case '3':
                taskCheckbox.style.background = 'yellow';
                break;
            case '0':
                taskCheckbox.style.background = 'white';
                break;
            default:
                break;
        }

        taskCheckbox.addEventListener('click', () => {
            deleteTask(project, f);
            if(!indexOfTodayTask) {
                createAllTasksInProject(project);
            }else if(indexOfTodayTask && origin == 'upcoming') {
                createUpcomingTasks();
            }else {
                createTodaysTasks();
            }
        });


        if(indexOfTodayTask) {
            if(indexOfTodayTask == f) document.querySelector('.content').appendChild(taskDiv);
        }else {
            document.querySelector('.content').appendChild(taskDiv);
        }
    }

    if(!indexOfTodayTask) TodoButton(project);
    
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
}

function updateCurrentProject(project) {
    (project.name) ? document.querySelector('.project-name').textContent = project.name : document.querySelector('.project-name').textContent = project;
}

function inputProjectName() {
    this.removeEventListener('click', inputProjectName);
    
    const projectsDiv = document.querySelector('.projects');

    const closeButton = document.createElement('button');
    closeButton.classList.add('projects__btn', 'projects__btn--close');
    closeButton.textContent = 'x';

    closeButton.addEventListener('click', () => {
        projectsDiv.removeChild(inputForProjectName);
        projectsDiv.removeChild(submitButtonForProjectName);
        projectsDiv.removeChild(closeButton);

        this.addEventListener('click', inputProjectName);
    });
    
    const inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');
    inputForProjectName.classList.add('projects__name-input');
    
    projectsDiv.appendChild(inputForProjectName);
    
    const submitButtonForProjectName = document.createElement('button');
    closeButton.classList.add('projects__btn', 'projects__btn--submit');
    projectsDiv.appendChild(closeButton);
    submitButtonForProjectName.textContent = 'Ok';

    projectsDiv.appendChild(submitButtonForProjectName);

    submitButtonForProjectName.addEventListener('click', () => {
        let name = inputForProjectName.value;
        
        if(name && name.length < 16 && !checkIdenticalProject(name)) {
            projectsDiv.removeChild(inputForProjectName);
            projectsDiv.removeChild(submitButtonForProjectName);

            document.querySelector('.create-button').textContent = '';
            document.querySelector('.project-name').textContent = name;

            createProject(name);

            this.addEventListener('click', inputProjectName);
        }else if(checkIdenticalProject(name) == true) {
            alert('Project names should be different');
            inputForProjectName.value = '';
        }else if(name.length >= 16) {
            alert('Project name should be less than 16 characters');
        }else if(!name) {
            alert('Enter project name');
        }
    });
}

export {inputProjectName,
        updateCurrentProject,
        createAllTasksInProject,
        updateProjects,
        arrayOfProjects}
import { Project, deleteProject, checkIdenticalProject } from "./projects";
import { TodoButton } from "./updateTodosDOM";
import { createUpcomingTasks, createTodaysTasks, deleteTask } from './todos';
import { formatDuration, intervalToDuration, isAfter, isToday } from "date-fns";

let arrayOfProjects = [];

(function checkProjectsOnReload() {
    if('projects' in localStorage){
        arrayOfProjects = JSON.parse(localStorage.getItem('projects') || []);
    }

    createInbox();
    
    updateProjects();

    document.querySelector('.today').addEventListener('click', createTodaysTasks);
    document.querySelector('.upcoming').addEventListener('click', createUpcomingTasks);
    document.querySelector('.search').addEventListener('click', searchForTasks);
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

function searchForTasks(){
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';

    updateCurrentProject('Search');

    const searchDiv = document.querySelector('.search-field');
    const searchInput = document.createElement('input');
    if(!searchDiv.hasChildNodes()) searchDiv.appendChild(searchInput);

    searchInput.addEventListener('keyup', () => {
        document.querySelector('.content').textContent = '';
        const filtered = new Project('Search');
        arrayOfProjects.forEach(project => {
            project.arrayOfTodos.filter(todo => todo.name.indexOf(searchInput.value) > -1 && searchInput.value ? filtered.arrayOfTodos.push(todo) : 0)
            createAllTasksInProject(filtered);
        });
        document.querySelector('.create-button').textContent = '';
    });

}

function updateProjects() {
    document.querySelector('.projects').textContent = '';
    
    arrayOfProjects.forEach(projectInArray => {
        let deleteButtonIndex = 0;

        const project = document.createElement('div');
        project.className = 'project';
            
        project.textContent = projectInArray.name;
        
        const deleteProjectButton = document.createElement('div');
        deleteProjectButton.classList.add('project__btn');
        deleteProjectButton.textContent = projectInArray.arrayOfTodos.length;

        deleteProjectButton.addEventListener('mouseenter', () => {
            deleteProjectButton.textContent = 'X';
        });

        deleteProjectButton.addEventListener('mouseleave', () => {
            deleteProjectButton.textContent = projectInArray.arrayOfTodos.length;
        });
        
        deleteProjectButton.addEventListener('click', () => {
            document.querySelector('.create-button').textContent = '';
            deleteProject(projectInArray);
            deleteButtonIndex = 1;
            createAllTasksInProject(arrayOfProjects[0]);
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

    project.arrayOfTodos.forEach(todo => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const taskDivLeft = document.createElement('div');
        taskDivLeft.className = 'task__left';
        taskDiv.appendChild(taskDivLeft);

        const taskDivRight = document.createElement('div');
        taskDivRight.className = 'task__right';
        taskDiv.appendChild(taskDivRight);

        const taskNameAndDescription = document.createElement('div');
        taskNameAndDescription.className = 'task__name-and-description';
        
        const taskCheckbox = document.createElement('div');
        taskCheckbox.textContent = '';
        taskCheckbox.className = 'task__checkbox';
        taskDivLeft.appendChild(taskCheckbox);
        
        const taskName = document.createElement('div');
        taskName.textContent = todo.name;
        taskName.className = 'name';
        taskNameAndDescription.appendChild(taskName);
        
        const taskDescription = document.createElement('div');
        taskDescription.textContent = todo.description;
        taskDescription.className = 'description';
        taskNameAndDescription.appendChild(taskDescription);
        taskDivLeft.appendChild(taskNameAndDescription);

        if(indexOfTodayTask || origin){
            const taskOrigin = document.createElement('div');
            taskOrigin.textContent = 'Project: ' + project.name;
            taskOrigin.className = 'task__origin';
            taskDivRight.appendChild(taskOrigin);
        }

        const taskTimeLeft = document.createElement('div');
        taskTimeLeft.className = 'task__time-left';
        
        if(todo.date){
            let timeRemaining = intervalToDuration({
                start: new Date(todo.date),
                end: new Date(),
            });

            if(!indexOfTodayTask && isToday(new Date(todo.date))) {// time for today tasks
                taskTimeLeft.textContent = 'today'; 
                taskDivRight.appendChild(taskTimeLeft);
            }
            if(origin == 'upcoming' || isAfter(new Date(todo.date), new Date())){//time for tasks in the past
                taskTimeLeft.textContent = formatDuration(timeRemaining, {
                    delimiter: ', '
                });
                taskTimeLeft.textContent += ' left';
                taskDivRight.appendChild(taskTimeLeft);
            } 
        }
        
        const taskDate = document.createElement('div');
        taskDivRight.appendChild(taskDate);
        taskDate.className = 'task__date';
        taskDate.textContent = todo.date;

        switch (todo.priority) {
            case '1':
                taskCheckbox.style.border = '2px solid red';
                break;
            case '2':
                taskCheckbox.style.border = '2px solid orange';
                break;
            case '3':
                taskCheckbox.style.border = '2px solid yellow';
                break;
            case '0':
                taskCheckbox.style.border = '2px solid black';
                break;
            case '':
                taskCheckbox.style.border = '2px solid black';
            break;
            default:
                break;
        }

        taskCheckbox.addEventListener('click', () => {
            deleteTask(project, project.arrayOfTodos.findIndex(projectTodo => projectTodo.name == todo.name));
            deleteTask(arrayOfProjects.find(project => project.name == todo.project), project.arrayOfTodos.findIndex(projectTodo => projectTodo.name == todo.name));
            if(!indexOfTodayTask) {
                createAllTasksInProject(project);
            }else if(indexOfTodayTask && origin == 'upcoming') {
                createUpcomingTasks();
            }else {
                createTodaysTasks();    
            }
        });


        if(indexOfTodayTask) {
            if(indexOfTodayTask == project.arrayOfTodos.findIndex(projectTodo => projectTodo.name == todo.name)) document.querySelector('.content').appendChild(taskDiv);
        }else {
            document.querySelector('.content').appendChild(taskDiv);
        }
    });

    if(!indexOfTodayTask && project.name !== 'Search') TodoButton(project);

    updateProjects();
    
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
}

function updateCurrentProject(project) {
    (project.name) ? document.querySelector('.project-name').textContent = project.name : document.querySelector('.project-name').textContent = project;
    (project == 'Search' || project.name == 'Search') ? document.querySelector('.search-field').classList.remove('invisible') : document.querySelector('.search-field').classList.add('invisible');
}

function inputProjectName() {
    this.removeEventListener('click', inputProjectName);
    
    const projectsDiv = document.querySelector('.projects');

    const closeButton = document.createElement('div');
    closeButton.classList.add('projects__btn', 'projects__btn--close');
    closeButton.textContent = 'Cancel';

    closeButton.addEventListener('click', () => {
        projectsDiv.removeChild(inputForProjectName);
        projectsDiv.removeChild(projectButtons);

        this.addEventListener('click', inputProjectName);
    });
    
    const inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');
    inputForProjectName.classList.add('projects__name-input');
    
    projectsDiv.appendChild(inputForProjectName);
    
    const submitButtonForProjectName = document.createElement('div');
    submitButtonForProjectName.classList.add('projects__btn', 'projects__btn--submit');
    submitButtonForProjectName.textContent = 'Ok';
    
    const projectButtons = document.createElement('div');
    projectButtons.className = 'projects__buttons';
    projectButtons.appendChild(submitButtonForProjectName);
    projectButtons.appendChild(closeButton);

    projectsDiv.appendChild(projectButtons);

    submitButtonForProjectName.addEventListener('click', () => {
        let name = inputForProjectName.value;
        
        if(name && name.length < 16 && !checkIdenticalProject(name)) {
            projectsDiv.removeChild(inputForProjectName);
            projectsDiv.removeChild(projectButtons);

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
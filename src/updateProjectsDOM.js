import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";
import { isAfter, isToday, parseISO } from 'date-fns';

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
        console.log(arrayOfProjects);
        (arrayOfProjects.filter(project => project.name == 'Inbox').length > 0) ? createAllTasksInProject(arrayOfProjects[0]) : createAllTasksInProject(inbox);
    });
}

function createProject(name) {
    let newProject = new Project(name);
    arrayOfProjects.push(newProject);

    document.querySelector('.content').textContent = '';

    let taskInsideProject = TodoButton(newProject);
    newProject.arrayOfTodos.push(taskInsideProject);

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

function createTodaysTasks() {
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';
    
    let todayContainer = document.createElement('div');
    todayContainer.className = 'today';

    updateCurrentProject('Today');

    arrayOfProjects.forEach(project => {
        for (let f in project.arrayOfTodos) {
            if(project.arrayOfTodos[f]){
                if(isToday(parseISO(project.arrayOfTodos[f].date))) {
                    createAllTasksInProject(project, f);
                }
            }
        }
    });

    document.querySelector('.today').appendChild(todayContainer);
}

function createUpcomingTasks() {
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';

    let upcomingContainer = document.createElement('div');
    upcomingContainer.className = 'upcoming';

    updateCurrentProject('Upcoming');

    arrayOfProjects.forEach(project => {
        for(let f = 1; f < project.arrayOfTodos.length; f++) {
            if(isAfter(parseISO(project.arrayOfTodos[f].date), new Date())){
                createAllTasksInProject(project, f, 'upcoming');
            }
        }
    });

    document.querySelector('.upcoming').appendChild(upcomingContainer);
}

function createAllTasksInProject(project, indexOfTodayTask, origin) {
    if (!indexOfTodayTask) {
        document.querySelector('.content').textContent = '';
        document.querySelector('.create-button').textContent = '';
        updateCurrentProject(project);
    }

    for(let f = 1; f < project.arrayOfTodos.length; f++) {
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

        const taskOrigin = document.createElement('div');
        taskOrigin.textContent = 'Project: ' + project.name;
        taskOrigin.className = 'task__origin';
        taskDiv.appendChild(taskOrigin);

        const taskDescription = document.createElement('div');
        taskDescription.textContent = project.arrayOfTodos[f].taskDescription;
        taskDescription.className = 'task__taskDescription';
        taskDiv.appendChild(taskDescription);
        
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

function checkIdenticalProject(name) {
    if(arrayOfProjects.filter(project => project.name == name).length > 0) return true;
    return false;
}

function deleteTask(newProject, numberOfTask) {
    newProject.arrayOfTodos.splice(numberOfTask, 1); 
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
}

function deleteProject(newProject) {
    arrayOfProjects = arrayOfProjects.filter(project => project !== newProject);
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
    
    updateProjects();

    document.querySelector('.content').textContent = '';
}

export {inputProjectName, createAllTasksInProject, arrayOfProjects}
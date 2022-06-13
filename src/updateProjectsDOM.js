import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";
import {  } from 'date-fns';

let arrayOfProjects = [];

(function checkProjectsOnReload() {
    if('projects' in localStorage){
        arrayOfProjects = JSON.parse(localStorage.getItem('projects') || []);
    }else{
    }
    createInbox();
    
    updateProjects();
    document.querySelector('.today').addEventListener('click', createTodaysTasks);
    
    document.querySelector('.upcoming').addEventListener('click', createUpcomingTasks);
})();

function createInbox() {
    updateCurrentProject('Inbox'); // Updates current working project 
    
    let inbox = new Project('Inbox');
    if(arrayOfProjects.filter(project => project.name == 'Inbox').length == 0) arrayOfProjects.push(inbox);
    
    let taskInsideInbox = TodoButton(inbox);
    inbox.arrayOfTodos.push(taskInsideInbox);
    
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));

    (arrayOfProjects.filter(project => project.name == 'Inbox').length > 0) ? createAllTasksInProject(arrayOfProjects[0]) : createAllTasksInProject(inbox);
    
    // here is the trick. the inbox created for the second time does not have any tasks
    
    document.querySelector('.inbox').addEventListener('click', () => {
        console.log(arrayOfProjects);
        (arrayOfProjects.filter(project => project.name == 'Inbox').length > 0) ? createAllTasksInProject(arrayOfProjects[0]) : createAllTasksInProject(inbox);
    });
};

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
        let project = document.createElement('div');
        project.className = 'project';
            
        project.textContent = projectInArray.name;
        
        let deleteProjectButton = document.createElement('button');
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

function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today;
}

function createTodaysTasks() {
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';
    
    let todayContainer = document.createElement('div');
    todayContainer.className = 'today';

    let today = getDate();

    updateCurrentProject('Today');

    arrayOfProjects.forEach(project => {
        for (let f in project.arrayOfTodos) {
            if(project.arrayOfTodos[f]){
                if(project.arrayOfTodos[f].date == today) {
                    createAllTasksInProject(project, f);
                }
            }
        }
    })
    document.querySelector('.today').appendChild(todayContainer);
}

function createUpcomingTasks() {
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';
    let upcomingContainer = document.createElement('div');
    upcomingContainer.className = 'upcoming';

    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;   

    updateCurrentProject('Upcoming');

    for(let i in arrayOfProjects) {
        for(let f = 1; f < arrayOfProjects[i].arrayOfTodos.length; f++) {
            if(arrayOfProjects[i].arrayOfTodos[f].date.substr(0, 4) > yyyy) {
                createAllTasksInProject(arrayOfProjects[i], f, 'upcoming');
            }
            if(arrayOfProjects[i].arrayOfTodos[f].date.substr(0, 4) == yyyy &&
               arrayOfProjects[i].arrayOfTodos[f].date.substr(5, 2) > mm) {
                createAllTasksInProject(arrayOfProjects[i], f, 'upcoming');
            }
            if(arrayOfProjects[i].arrayOfTodos[f].date.substr(0, 4) == yyyy &&
               arrayOfProjects[i].arrayOfTodos[f].date.substr(5, 2) == mm &&
               arrayOfProjects[i].arrayOfTodos[f].date.substr(8, 2) > dd) {
                createAllTasksInProject(arrayOfProjects[i], f, 'upcoming');
            }
        }
    }

    document.querySelector('.upcoming').appendChild(upcomingContainer);
}

function createAllTasksInProject(project, indexOfTodayTask, origin) {
    if (!indexOfTodayTask){
        document.querySelector('.content').textContent = '';
        document.querySelector('.create-button').textContent = '';
        updateCurrentProject(project);
    }

    for(let f = 1; f < project.arrayOfTodos.length; f++) {
        let taskOnTheScreen = document.createElement('div');
        taskOnTheScreen.className = 'task';
        
        let checkBox = document.createElement('div');
        checkBox.textContent = '';
        checkBox.className = 'task__checkbox';
        taskOnTheScreen.appendChild(checkBox);

        let taskName = document.createElement('div');
        taskName.textContent = project.arrayOfTodos[f].name;
        taskName.className = 'task__name';
        taskOnTheScreen.appendChild(taskName);

        let projectFather = document.createElement('div');
        projectFather.textContent = 'Project: ' + project.name;
        projectFather.className = 'task__origin';
        taskOnTheScreen.appendChild(projectFather);

        let description = document.createElement('div');
        description.textContent = project.arrayOfTodos[f].description;
        description.className = 'task__description';
        taskOnTheScreen.appendChild(description);

        if(project.arrayOfTodos[f].priority == 1) checkBox.style.background = 'red';
        if(project.arrayOfTodos[f].priority == 2) checkBox.style.background = 'orange';
        if(project.arrayOfTodos[f].priority == 3) checkBox.style.background = 'yellow';
        if(project.arrayOfTodos[f].priority == 0) checkBox.style.background = 'white';
                        
        checkBox.addEventListener('click', () => {
            deleteTask(project, f);
            if(!indexOfTodayTask) {
                createAllTasksInProject(project);
            }else if(indexOfTodayTask && origin == 'upcoming') {
                createUpcomingTasks();
            }else {
                createTodaysTasks();
            }
        });

        let datePicker = document.createElement('div');
        taskOnTheScreen.appendChild(datePicker);
        datePicker.className = 'task__date';
        datePicker.textContent = project.arrayOfTodos[f].date;

        if(indexOfTodayTask) {
            if(indexOfTodayTask == f) document.querySelector('.content').appendChild(taskOnTheScreen);
        }else {
            document.querySelector('.content').appendChild(taskOnTheScreen);
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
    
    var projectsDiv = document.querySelector('.projects');
    let closeButton = document.createElement('button');
    closeButton.classList.add('projects__btn', 'projects__btn--close');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
        projectsDiv.removeChild(inputForProjectName);
        projectsDiv.removeChild(submitButtonForProjectName);
        projectsDiv.removeChild(closeButton);
        this.addEventListener('click', inputProjectName);
    });
    
    var inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');
    inputForProjectName.classList.add('projects__name-input');
    
    projectsDiv.appendChild(inputForProjectName);
    
    var submitButtonForProjectName = document.createElement('button');
    closeButton.classList.add('projects__btn', 'projects__btn--submit');

    projectsDiv.appendChild(closeButton);
    projectsDiv.appendChild(submitButtonForProjectName);
    submitButtonForProjectName.textContent = 'Ok';

    
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
        }else if(name.length >= 16){
            alert('Project name should be less than 16 characters');
        }else if(!name){
            alert('Enter project name');
        }
    });
}

function checkIdenticalProject(name) {
    // arrayOfProjects.forEach(project => project.name == name);
    for (let i in arrayOfProjects) {
        if(arrayOfProjects[i].name == name) return true;
    }
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
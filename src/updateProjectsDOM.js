import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";
let arrayOfProjects = [];
function createProject(name) {
    let newProject = new Project(name);
    
    arrayOfProjects.push(newProject);
    
    document.querySelector('.content').textContent = '';
    
    let taskInsideProject = TodoButton(newProject);
    newProject.arrayOfTodos.push(taskInsideProject);
    
    updateProjects();
}

function updateProjects() {
    document.querySelector('.projects').innerHTML = '';
    for(let i = 1; i < arrayOfProjects.length; i++) {
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
            createAllTasksInProject(arrayOfProjects[i]);
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

    arrayOfProjects.push(inbox);

    updateCurrentProject('Inbox');

    document.querySelector('.inbox').addEventListener('click', () => {
        createAllTasksInProject(inbox);
    });

    document.querySelector('.today').addEventListener('click', createTodaysTasks);

    document.querySelector('.upcoming').addEventListener('click', createUpcomingTasks);

    document.querySelector('.inbox').appendChild(inboxContainer);
})();

function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today;
}

function createTodaysTasks() {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.create-button').innerHTML = '';
    let todayContainer = document.createElement('div');
    todayContainer.className = 'today';

    let today = getDate();

    updateCurrentProject('Today');
   
    for(let i in arrayOfProjects) {
        for(let f = 1; f < arrayOfProjects[i].arrayOfTodos.length; f++) {
            if(arrayOfProjects[i].arrayOfTodos[f].date == today) {
                createAllTasksInProject(arrayOfProjects[i], f);
            }
        }
    }

    document.querySelector('.today').appendChild(todayContainer);
};

function createUpcomingTasks(){
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.create-button').innerHTML = '';
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
        document.querySelector('.content').innerHTML = '';
        document.querySelector('.create-button').innerHTML = '';
        updateCurrentProject(project);
    } 
    
    for(let f = 1; f <= project.arrayOfTodos.length - 1; f++) {
        let taskOnTheScreen = document.createElement('div');
        taskOnTheScreen.className = 'task';
        
        let checkBox = document.createElement('div');
        checkBox.textContent = '';
        checkBox.className = 'checkbox';
        taskOnTheScreen.appendChild(checkBox);

        let taskName = document.createElement('div');
        taskName.textContent = project.arrayOfTodos[f].name;
        taskName.className = 'taskname';
        taskOnTheScreen.appendChild(taskName);

        let projectFather = document.createElement('div');
        projectFather.textContent = 'Project: ' + project.name;
        projectFather.className = 'father-project';
        taskOnTheScreen.appendChild(projectFather);

        let description = document.createElement('div');
        description.textContent = project.arrayOfTodos[f].description;
        description.className = 'description';
        taskOnTheScreen.appendChild(description);

        if(project.arrayOfTodos[f].priority == 1) checkBox.style.background = 'red';
        if(project.arrayOfTodos[f].priority == 2) checkBox.style.background = 'orange';
        if(project.arrayOfTodos[f].priority == 3) checkBox.style.background = 'yellow';
        if(project.arrayOfTodos[f].priority == 0) checkBox.style.background = 'white';
                        
        checkBox.addEventListener('click', () => {
            // if (!indexOfTodayTask) deleteTask(project, f);
            deleteTask(project, f);
            // if (indexOfTodayTask) deleteTask(project, f, indexOfTodayTask);
            if(!indexOfTodayTask){
                createAllTasksInProject(project);
            }else if(indexOfTodayTask && origin == 'upcoming'){
                createUpcomingTasks();
            }else{
                createTodaysTasks();
            }
            // (!indexOfTodayTask) ? createAllTasksInProject(project) : createTodaysTasks();
        });

        let datePicker = document.createElement('div');
        taskOnTheScreen.appendChild(datePicker);
        datePicker.className = 'date';
        datePicker.textContent = project.arrayOfTodos[f].date;

        if(indexOfTodayTask){
            if(indexOfTodayTask == f) document.querySelector('.content').appendChild(taskOnTheScreen);
        }else{
            document.querySelector('.content').appendChild(taskOnTheScreen);
        }
    }
    if(!indexOfTodayTask) TodoButton(project);
}

function updateCurrentProject(project){
    (project.name) ? document.querySelector('.project-name').textContent = project.name : document.querySelector('.project-name').textContent = project;
}

function inputProjectName() {
    this.removeEventListener('click', inputProjectName);
    
    var projectsDiv = document.querySelector('.projects');
    let closeButton = document.createElement('button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
        projectsDiv.removeChild(inputForProjectName);
        projectsDiv.removeChild(submitButtonForProjectName);
        projectsDiv.removeChild(closeButton);
        this.addEventListener('click', inputProjectName);
    });
    
    var inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');
    
    projectsDiv.appendChild(inputForProjectName);
    
    var submitButtonForProjectName = document.createElement('button');
    projectsDiv.appendChild(closeButton);
    projectsDiv.appendChild(submitButtonForProjectName);
    submitButtonForProjectName.textContent = 'Ok';

    
    submitButtonForProjectName.addEventListener('click', () => {
        let name = inputForProjectName.value;
        
        console.log(arrayOfProjects);
        if(name && name.length < 16 && !arrayOfProjects.includes(name)) {
            projectsDiv.removeChild(inputForProjectName);
            projectsDiv.removeChild(submitButtonForProjectName);
            document.querySelector('.create-button').innerHTML = '';
            document.querySelector('.project-name').textContent = name;
            createProject(name);
        }else if(arrayOfProjects.includes(name)) {
            console.log('Such project already exists');
        }else if(name.length >= 16){
            alert('Project name should be less than 16 characters');
        }
        this.addEventListener('click', inputProjectName);
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
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.create-button').innerHTML = '';
    document.querySelector('.project-name').textContent = '';
    updateProjects();

}

export {inputProjectName, createAllTasksInProject}
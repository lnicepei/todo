import { Project } from "./projects";
import { TodoButton } from "./updateTodosDOM";
let arrayOfProjects = [];
function createProject(name) {
    let newProject = new Project(name);
    
    arrayOfProjects.push(newProject);
    
    document.querySelector('#content').textContent = '';
    
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

    document.querySelector('.inbox').addEventListener('click', () => {
        createAllTasksInProject(inbox);
    });

    document.querySelector('.today').addEventListener('click', createTodaysTasks);

    // document.querySelector('.upcoming').addEventListener('click', createUpcomingTasks);

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
    document.querySelector('#content').innerHTML = '';
    let todayContainer = document.createElement('div');
    todayContainer.className = 'today';

    let today = getDate();
   
    for(let i in arrayOfProjects) {
        for(let f = 1; f < arrayOfProjects[i].arrayOfTodos.length; f++) {
            if(arrayOfProjects[i].arrayOfTodos[f].date == today) {
                createAllTasksInProject(arrayOfProjects[i], today);
            }
        }
    }

    document.querySelector('.today').appendChild(todayContainer);
};

// function createUpcomingTasks(){
//     document.querySelector('#content').innerHTML = '';
//     let upcomingContainer = document.createElement('div');
//     upcomingContainer.className = 'upcoming';

//     let today = new Date();

//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();

//     today = yyyy + '/' + mm + '/' + dd;   

//     for(let i in arrayOfProjects) {
//         for(let f = 1; f < arrayOfProjects[i].arrayOfTodos.length; f++) {
//             if(arrayOfProjects[i].arrayOfTodos[f].date.substr(0, 4) > yyyy) {
//                 createAllTasksInProject(arrayOfProjects[i]);
//             }
//             if(arrayOfProjects[i].arrayOfTodos[f].date.substr(0, 4) == yyyy &&
//                arrayOfProjects[i].arrayOfTodos[f].date.substr(5, 2) > mm) {
//                 createAllTasksInProject(arrayOfProjects[i]);
//             }
//             if(arrayOfProjects[i].arrayOfTodos[f].date.substr(0, 4) == yyyy &&
//                arrayOfProjects[i].arrayOfTodos[f].date.substr(5, 2) == mm &&
//                arrayOfProjects[i].arrayOfTodos[f].date.substr(8, 2) > dd) {
//                 createAllTasksInProject(arrayOfProjects[i]);
//             }
//         }
//     }

//     document.querySelector('.upcoming').appendChild(upcomingContainer);
// }

function createAllTasksInProject(project, today) {
    if (!today) document.getElementById('content').innerHTML = '';
    
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
            (!today) ? createAllTasksInProject(project) : createTodaysTasks();
        });

        let datePicker = document.createElement('div');
        taskOnTheScreen.appendChild(datePicker);
        datePicker.className = 'date';
        datePicker.textContent = project.arrayOfTodos[f].date;

        document.querySelector('#content').appendChild(taskOnTheScreen);
    }
    if(!today) TodoButton(project);
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
        
        if(name) {
            projectsDiv.removeChild(inputForProjectName);
            projectsDiv.removeChild(submitButtonForProjectName);
            createProject(name);
        }else {
            alert('Enter project name');
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
    document.querySelector('#content').innerHTML = '';
    updateProjects();

}

export {inputProjectName, createAllTasksInProject}
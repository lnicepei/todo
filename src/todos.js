import { arrayOfProjects, updateCurrentProject, createAllTasksInProject } from "./updateProjectsDOM"
import { isAfter, isToday } from 'date-fns';

function Todo(name, description, date, priority){
    return{
        name: name,
        description: description,
        date: date,
        priority: priority,
    }
}

function createUpcomingTasks() {
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';

    updateCurrentProject('Upcoming');

    arrayOfProjects.forEach(project => {
        for(let f in project.arrayOfTodos) {
            if(isAfter(new Date(project.arrayOfTodos[f].date), new Date())){
                createAllTasksInProject(project, f, 'upcoming');
            }
        }
    });
}

function createTodaysTasks() {
    document.querySelector('.content').textContent = '';
    document.querySelector('.create-button').textContent = '';
    
    updateCurrentProject('Today');

    arrayOfProjects.forEach(project => {
        for (let f in project.arrayOfTodos) {
            if(isToday(new Date(project.arrayOfTodos[f].date))) {
                createAllTasksInProject(project, f);
            }
        }
    });
}

function deleteTask(newProject, numberOfTask) {
    newProject.arrayOfTodos.splice(numberOfTask, 1); 
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
}

export {Todo, createUpcomingTasks, createTodaysTasks, deleteTask};
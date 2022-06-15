import { arrayOfProjects, updateProjects } from "./updateProjectsDOM";

class Project{
    constructor(name){
        this.name = name;
        this.arrayOfTodos = [];
    }
}

function deleteProject(newProject) {
    arrayOfProjects = arrayOfProjects.filter(project => project !== newProject);
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
    
    updateProjects();

    document.querySelector('.content').textContent = '';
}

function checkIdenticalProject(name) {
    if(arrayOfProjects.filter(project => project.name == name).length > 0) return true;
    return false;
}


export {Project, deleteProject, checkIdenticalProject};
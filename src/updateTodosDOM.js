import { format } from "date-fns";
import { Todo } from "./todos";
import { createAllTasksInProject, arrayOfProjects } from "./updateProjectsDOM";

function TodoButton(newProject) {
    let todoButton = document.createElement('button');
   
    document.querySelector('.create-button').appendChild(todoButton);
    todoButton.textContent = 'Create todo';
    todoButton.className = 'create-button__btn';

    todoButton.addEventListener('click', () => {
        createPopup(newProject);
    });
}

function createPopup(newProject) {
    let popup = document.querySelector('.popup-container');
    popup.style.transform = 'scale(1)';
    
    document.body.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.transform = 'scale(0)';
        }
    });
    document.querySelector(".form__submit-button").addEventListener("click", getDataFromForm, false);
    document.querySelector(".form__submit-button").parameter = newProject;
}

function getDataFromForm(e) {
    let name = document.getElementById('taskname').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let priority = document.getElementById('priority').value;

    date = new Date(date);
    date = format(date, 'd MMM y (EE)');

    if (name) {
        let task = Todo(name, description, date, priority)
        e.currentTarget.parameter.arrayOfTodos.push(task);
        localStorage.setItem('projects', JSON.stringify(arrayOfProjects));

        let popup = document.querySelector('.popup-container');
        popup.style.transform = 'scale(0)';

        createAllTasksInProject(e.currentTarget.parameter);
    }else {
        alert('Enter task name');
    }

}

export { TodoButton }
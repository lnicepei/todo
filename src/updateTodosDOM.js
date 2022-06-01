import { Todo } from "./todos";
import { createTask } from "./updateProjectsDOM";

function TodoButton(newProject) {
    let todoButton = document.createElement('button');
   
    document.querySelector('#content').appendChild(todoButton);
    todoButton.textContent = 'Create todo';

    todoButton.addEventListener('click', () => {
        createPopup(newProject);
    });
}

function createPopup(newProject) {
    // popup.style.display = 'block';
    let popup = document.querySelector('.popup');
    popup.style.transform = 'scale(1)';
    
    document.body.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.transform = 'scale(0)';
        }
    });

    document.querySelector(".submit-button").addEventListener("click", getDataFromForm, false);
    document.querySelector(".submit-button").parameter = newProject;
}

function getDataFromForm(e) {
    
    let name = document.getElementById('taskname').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let priority = document.getElementById('priority').value;
    let task = Todo(name, description, date, priority);

    let popup = document.querySelector('.popup');

    e.currentTarget.parameter.arrayOfTodos.push(task);
    popup.style.transform = 'scale(0)';
    createTask(e.currentTarget.parameter);
}
export { TodoButton }
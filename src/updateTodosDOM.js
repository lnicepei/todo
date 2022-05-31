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
    let popup = document.querySelector('.popup');
    // popup.style.display = 'block';
    popup.style.transform = 'scale(1)';

    document.querySelector(".submit-button").addEventListener("click", (e) => {
        e.preventDefault();

        let name = document.getElementById('taskname').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;

        let task = Todo(name, description, date, priority);
        document.getElementById('content').innerHTML = '';
        newProject.arrayOfTodos.push(task);
        createTask(newProject);
        popup.style.transform = 'scale(0)';
    });
}
export { TodoButton }
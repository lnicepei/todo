import { Todo } from "./todos";
import { createTask } from "./updateProjectsDOM";

function TodoButton(newProject) {
    let todoButton = document.createElement('button');
   
    document.querySelector('#content').appendChild(todoButton);
    todoButton.textContent = 'Create todo';

    todoButton.addEventListener('click', () => {
        let name = prompt("Name");
        // let description = prompt("Description");
        // let date = prompt("date");
        // let priority = prompt("priority");
        let description = 'Description';
        let date = 1;
        let priority = 0;
        let completed = 0;

        let task = Todo(name, description, date, priority, completed);

        newProject.arrayOfTodos.push(task);
        createTask(newProject);
    });
}


export { TodoButton }
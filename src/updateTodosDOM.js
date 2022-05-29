import { Todo } from "./todos";
import { showAllTasks } from "./updateProjectsDOM"

function TodoButton(newProject) {
    let task;
    let todoButton = document.createElement('button');
    document.querySelector('#content').appendChild(todoButton);
    todoButton.textContent = 'Create todo';
    todoButton.addEventListener('click', () => {
        let name = prompt("Name");
        // let description = prompt("Description");
        // let date = prompt("date");
        // let priority = prompt("priority");
        let complete = 1;
        let description = 'Description';
        let date = 1;
        let priority = 0;
        task = Todo(name, description, date, priority, complete);
        newProject.arr.push(task);
        console.log(newProject);
        showAllTasks(newProject);
        document.querySelector('#content').appendChild(todoButton);
    });
}

export { TodoButton }
import { Todo } from "./todos";
import { showAllTasks } from "./updateProjectsDOM"

// function updateTodoOnScreen(){
//     let todoContainer = document.createElement('div');
//     document.querySelector('#content').appendChild(todoContainer);
//     todoContainer.textContent += test.name + test.description + test.date + test.priority + test.complete;
// }

// function showTodosArray(){
//     for(let i in todosArray){
//         document.querySelector('#content').textContent = todosArray[i].name + todosArray[i].description + todosArray[i].date + todosArray[i].priority + todosArray[i].complete;
//     }
// }

function TodoButton(newProject){
    let task;
    let todoButton = document.createElement('button');
    document.querySelector('#content').appendChild(todoButton);
    todoButton.textContent = 'Create todo';
    todoButton.addEventListener('click', () => {
        // alert("enter your todo");
        let name = prompt("Name");
        // let description = prompt("Description");
        // let date = prompt("date");
        // let priority = prompt("priority");
        let complete = 1;
        let description = 'Descr';
        let date = 1;
        let priority = 0;
        task = Todo(name, description, date, priority, complete);
        // console.log(task);
        newProject.arr.push(task);
        console.log(newProject);
        showAllTasks(newProject);
        document.querySelector('#content').appendChild(todoButton);
    });
    return{task}
}

let todosArray = [];
// function createTodo(newProject){
//     alert("enter your todo");
//     let name = prompt("Name");
//     let description = prompt("Description");
//     let date = prompt("date");
//     let priority = prompt("priority");
//     let complete = 1;
//     // let name = 'One';
//     // let description = 'Descr';
//     // let date = 1;
//     // let priority = 0;
//     let task = Todo(name, description, date, priority, complete);
//     newProject.arr.push(this);
//     console.log(this);
//     // todosArray.push(task);
//     // showTodosArray();
//     // createTodoButton();
//     return{task}
// }

export { TodoButton }
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
        // document.querySelector('#content').appendChild(todoButton);
    });
}



// function showAllTasks(newProject) {
//     document.getElementById('content').innerHTML = '';

//     // document.querySelector('#content').appendChild(checkBox);
    
//     console.log(newProject);

//     for(let f = 1; f <= newProject.arrayOfTodos.length - 1; f++) {
//         let taskOnTheScreen = document.createElement('div');
//         taskOnTheScreen.className = 'task';
        
//         taskOnTheScreen.textContent += newProject.arrayOfTodos[f].name + newProject.arrayOfTodos[f].description + newProject.arrayOfTodos[f].date + newProject.arrayOfTodos[f].priority;
        
//         let checkBox = document.createElement('INPUT');
//         checkBox.setAttribute('type', 'checkbox');
        
//         if(newProject.arrayOfTodos[f].completed == 0) taskOnTheScreen.appendChild(checkBox);
//         document.querySelector('#content').appendChild(taskOnTheScreen);
//     }
// }

function deleteTask(newProject) {
    for( var i = 0; i < newProject.arrayOfTodos.length; i++){ 
    
        if (arr[i] === 5) {
            newProject.arrayOfTodos.splice(i, 1); 
        }
    
    }
}

export { TodoButton, deleteTask }
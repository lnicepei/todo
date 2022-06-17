import { format } from "date-fns";
import { Todo } from "./todos";
import { createAllTasksInProject, arrayOfProjects } from "./updateProjectsDOM";

function TodoButton(newProject) {
    let todoButton = document.createElement('div');
   
    document.querySelector('.create-button').appendChild(todoButton);
    todoButton.innerHTML = `<svg style="width:50px;height:70px" viewBox="0 0 24 24">    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
    todoButton.className = 'create-button__btn';

    todoButton.addEventListener('click', () => {
        const blur = document.querySelectorAll('.blur');
        blur.forEach((item) => {
            item.classList.toggle('active');
            // item.classList.remove('inactive');
            // item.classList.add('active');
        });
        createPopup(newProject);
    });
}

function createPopup(newProject) {
    let popup = document.querySelector('.popup-container');
    popup.style.transform = 'scale(1)';
    
    document.body.addEventListener('click', blurBackground);

    document.querySelector(".form__submit-button").addEventListener("click", getDataFromForm, false);
    document.querySelector(".form__submit-button").parameter = newProject;
}

function blurBackground(e){
    if (e.target == document.querySelector('.popup-container')) {
        document.querySelector('.popup-container').style.transform = 'scale(0)';
        
        const blur = document.querySelectorAll('.blur');
        blur.forEach((item) => {
            item.classList.toggle('active');
            // item.classList.remove('active');
            // item.classList.add('inactive');
        });
        // document.body.removeEventListener('click', blurBackground);
    }
}

function getDataFromForm(e) {
    let name = document.getElementById('taskname').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let priority = document.getElementById('priority').value;

    
    if (name) {
        if(date)date = new Date(date);
        if(date)date = format(date, 'd MMM y (EE)');

        document.getElementById('taskname').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';
        document.getElementById('priority').value = '';

        let task = Todo(name, description, date, priority, e.currentTarget.parameter.name);
        e.currentTarget.parameter.arrayOfTodos.push(task);

        localStorage.setItem('projects', JSON.stringify(arrayOfProjects));

        let popup = document.querySelector('.popup-container');
        popup.style.transform = 'scale(0)';

        const blur = document.querySelectorAll('.blur');
        blur.forEach((item) => {
            // item.classList.toggle('active');
            item.classList.remove('active');
        });

        createAllTasksInProject(e.currentTarget.parameter);
    }else {
        alert('Enter task name');
    }

}

export { TodoButton }
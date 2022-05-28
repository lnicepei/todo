import { Todo } from "./todos";
import { createTodoButton } from "./updateTodosDOM";
import { removeProject } from "./updateProjectsDOM";

class Project{
    constructor(name){
        this.name = name;
    }
}

export {Project};
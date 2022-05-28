let arrayOfProjects = [];

class Project{
    constructor(name){
        this.name = name;
        this.arr = [];
        arrayOfProjects.push(this);
    }

    //functions to alter tasks inside a project
}

export {Project, arrayOfProjects};
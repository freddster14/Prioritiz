import  folderStorage  from "./index.js";
import { selectedFolder, Folder, displayFolder } from "./folder.js";

const addTodoBtn = document.querySelector("#todo-btn");
const todoPriority = document.querySelector("#todo-priority");
const inputTitle = document.querySelector("#todo-title");


addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputTitle.value == "") return
    new Folder().addTodo(inputTitle.value, todoPriority.value, false, selectedFolder.id);
});

class Todo{
    constructor(title, priority, complete){
        this.title = title;
        this.priority = priority;
        this.complete = complete
    }
    
    
}



function deleteTodo(todo){
    console.log(todo)
    const index = folderStorage[selectedFolder.id].todo.indexOf(todo);
    console.log(index)
    if(index > -1){
        folderStorage[selectedFolder.id].todo.splice(index, 1);
    }
    localStorage.setItem('folders', JSON.stringify(folderStorage))
    displayFolder(folderStorage[selectedFolder.id].todo)
}

export {Todo, deleteTodo};

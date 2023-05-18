import  folderStorage  from "./index.js";
import { selectedFolder, Folder, displayFolder } from "./folder.js";

const addTodoBtn = document.querySelector("#todo-btn");
const todoPriority = document.querySelector("#todo-priority");
const inputTitle = document.querySelector("#todo-title");

let selectedTodo = null

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

function deleteTodoTimer(Todo){
    console.log(selectedTodo)
    selectedTodo = Todo
    setTimeout(deleteTodo, 4000)
}

function deleteTodo(){
    console.log(selectedTodo)
    const index = folderStorage[selectedFolder.id].todo.indexOf(selectedTodo);
    console.log(index)
    if(index > -1){
        folderStorage[selectedFolder.id].todo.splice(index, 1);
    }
    displayFolder(folderStorage[selectedFolder.id].todo)
}

export {Todo, deleteTodoTimer};
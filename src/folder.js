import folderStorage from './index.js'
import {Todo, deleteTodoTimer} from './todo.js'

const todoListContainer = document.querySelector("#todo-list-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#folder-btn");
const inputTitle = document.querySelector("#todo-title");

let addFolder = false
let i = -1
let selectedFolder = undefined

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    localStorage.setItem('folders', JSON.stringify(folderStorage))
});



class Folder{
    constructor(name, description, id){
        this.name = name;
        this.description = description;
        this.id = id;
        this.todo = [];
    }

    addTodo(title, priority, complete, id){
        if(selectedFolder == undefined) return;
        let newTodo = new Todo(title, priority, complete)
        folderStorage[id].todo.push(newTodo)
        displayFolder(folderStorage[id].todo);
        inputTitle.value = "";
        localStorage.setItem('folders', JSON.stringify(folderStorage))
        return newTodo
    }
    

}

function createFolder(folderTitle, description){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderText = document.createElement("h2");
    const folderDescription = document.createElement("p");
    folderStorage = JSON.parse(localStorage.getItem('folders'));
    let newFolder = new Folder(folderTitle, description, getId(i));
    i = getId(i);

    folderText.textContent = folderTitle;
    folderDescription.textContent = description;

    folderContainer.appendChild(currentFolder);
    currentFolder.appendChild(folderText);
    currentFolder.appendChild(folderDescription);
    
    inputDescription.value = "";
    inputFolder.value = "";

    if(addFolder)folderStorage.push(newFolder);
    
    currentFolder.addEventListener('click', (event) => {
        event.preventDefault();
        if(selectedFolder == newFolder) return;
        displayFolder(folderStorage[newFolder.id].todo);
        selectedFolder = newFolder;
        todoListContainer.style.display = "flex"
    });


    
}

function displayFolder(todoList){
    let todoListElement = document.getElementById("todo-list");
	todoListElement.innerHTML = "";
    console.log(todoList)
	for (let i = 0; i < todoList.length; i++) {
		let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');

        if(todoList[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(todoList[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")}

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            deleteTodoTimer(folderStorage[selectedFolder.id].todo[i]);
            localStorage.setItem('folders', JSON.stringify(folderStorage))
            displayFolder(todoList);
            })
    
		listItemText.textContent = todoList[i].title;
        listItemCompletion.checked = todoList[i].complete;

		todoListElement.appendChild(listItemElement);
        listItemElement.appendChild(listItemCompletion);
        listItemElement.appendChild(listItemText);

	}
}


function getId(i){
    i++;
    return i;
}

export {createFolder, selectedFolder, Folder, displayFolder};
import folderStorage from './index.js'
import {Todo, deleteTodo} from './todo.js'
import trashCanSvg from './img/trash-can.svg'

const todoListContainer = document.querySelector("#todo-list-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#folder-btn");
const inputTitle = document.querySelector("#todo-title");
const showFormBtn = document.querySelector("#display-form-btn")
const form = document.querySelector("#form");

folderStorage = JSON.parse(localStorage.getItem('folders'));


let addFolder = false
let i = -1
let selectedFolder = undefined

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    localStorage.setItem('folders', JSON.stringify(folderStorage))
});

showFormBtn.addEventListener('click', () => {
    form.classList.toggle("active") 
})



class Folder{
    constructor(name, description, id, todo){
        this.name = name;
        this.description = description;
        this.id = id;
        this.todo = todo;
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
let newStorage = [];
function createFolder(folderTitle, description, todo){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderHeader = document.createElement("div");
    const deleteImg = new Image();
    const folderText = document.createElement("h2");
    const folderDescription = document.createElement("p");
    let newFolder = new Folder(folderTitle, description, getId(i), todo);

    console.log(newFolder)
    let deleted = false;
    newStorage.push(newFolder)
    console.table(newStorage)
    i = getId(i);
    currentFolder.id = i;

    deleteImg.addEventListener('click', () => {
        console.log(newFolder.name)
        let newStorage = folderStorage.filter((r) => { return r.name != newFolder.name});
        folderStorage = newFolder;
        localStorage.setItem('folders', JSON.stringify(newStorage))
        console.table(folderStorage)

        })
    
    

    deleteImg.src = trashCanSvg;

    folderHeader.id = "folder-header";

    folderText.textContent = folderTitle;
    folderDescription.textContent = description;

    folderContainer.appendChild(currentFolder);
    currentFolder.appendChild(folderHeader);
    folderHeader.appendChild(folderText);
    folderHeader.appendChild(deleteImg);
    currentFolder.appendChild(folderDescription);
    
    inputDescription.value = "";
    inputFolder.value = "";

    if(addFolder)folderStorage.push(newFolder);
    
    currentFolder.addEventListener('click', (event) => {
        event.preventDefault();
        if(deleted) return deleted = false;
        if(selectedFolder == newFolder) return;
        displayFolder(folderStorage[newFolder.id].todo);
        selectedFolder = newFolder;
        todoListContainer.style.display = "flex"
    });

    localStorage.setItem('folders', JSON.stringify(newStorage))

    
}

function displayFolder(todoList){
    let todoListElement = document.getElementById("todo-list");
	todoListElement.innerHTML = "";
    console.log(todoList)
	for (let i = 0; i < todoList.length; i++) {
		let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDeleteBtn = document.createElement('button');
        let listContainer = document.createElement('div');

        if(todoList[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(todoList[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")};

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            if(todoList[i].complete){todoList[i].complete = false;
            }else{todoList[i].complete = true};

            if(todoList[i].complete){
                listItemDeleteBtn.style.display = "block";
                listItemElement.style.backgroundColor = "#adadad"
            }else{
                listItemDeleteBtn.style.display = "none";
                listItemElement.style.backgroundColor = "";
            };

            localStorage.setItem('folders', JSON.stringify(folderStorage));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            deleteTodo(folderStorage[selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete")
        listContainer.classList.add("todo-container")
        
		listItemText.textContent = todoList[i].title;
        listItemCompletion.checked = todoList[i].complete;
        listItemDeleteBtn.textContent = "Delete"
        if(todoList[i].complete){
            listItemDeleteBtn.style.display = "block";
            listItemElement.style.backgroundColor = "#adadad";
        }else{
            listItemDeleteBtn.style.display = "none";
            listItemElement.style.backgroundColor = "";
        };


		todoListElement.appendChild(listItemElement);
        listItemElement.appendChild(listItemCompletion);
        listItemElement.appendChild(listContainer);
        listContainer.appendChild(listItemText);
        listContainer.appendChild(listItemDeleteBtn);

	}
}


function getId(i){
    i++;
    return i;
}

export {createFolder, selectedFolder, Folder, displayFolder};


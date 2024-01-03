import folderStorage from './index.js'
import {Todo, deleteTodo, exampleFolder} from './todo.js'
import trashCanSvg from './img/trash-can.svg'

const todoListContainer = document.querySelector("#todo-list-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#folder-btn");
const inputTitle = document.querySelector("#todo-title");
const showFormBtn = document.querySelector("#display-form-btn")
const form = document.querySelector("#form-folder");

folderStorage = JSON.parse(localStorage.getItem('folders'));


let addFolder = false
let i = -1
let selectedFolder = undefined

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputFolder.value == '' || inputFolder.value == "Common Name Found") return;
    if(folderStorage.some(folder => folder.name == inputFolder.value)) {
        setTimeout(() => inputFolder.value = "", 2000);
        return inputFolder.value = "Common Name Found"
    };
    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    addFolder = false;
    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");
    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    showFormBtn.textContent = "+"
    showFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
    localStorage.setItem('folders', JSON.stringify(folderStorage))
});

showFormBtn.addEventListener('click', () => {
    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");
    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    console.log(form.querySelectorAll("input"))
    if(showFormBtn.textContent == "+"){
    showFormBtn.textContent = "✕"
    showFormBtn.style.backgroundColor = "rgb(185, 72, 72)"
    }else {
    showFormBtn.textContent = "+";
     showFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
    }
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
let prevActive = null;

function createFolder(folderTitle, description, todo){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderHeader = document.createElement("div");
    const deleteImg = new Image();
    const folderText = document.createElement("h2");
    const folderDescription = document.createElement("p");

    if(exampleFolder){

    }
    // makes new folder have a empty todo: array
    if (todo == undefined) todo = [];
    let newFolder = new Folder(folderTitle, description, getId(i), todo);

  //  console.log(newFolder)
    let deleted = false;
    newStorage.push(newFolder)
   // console.table(newStorage)
    i = getId(i);
    currentFolder.id = "folder" + i;

    deleteImg.addEventListener('click', () => {
        
        deleted = true;
        let newStorage = folderStorage.filter((r) => { return r.name != newFolder.name});
        folderStorage = newStorage

        i = -1
        refreshFolder()

        localStorage.setItem('folders', JSON.stringify(folderStorage))

        console.log(newStorage)
        console.log(folderStorage)

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
    //prevents the folder which is to be deleted from opening
        if(deleted) return deleted = false;
    //prevents the folder to re-open
        if(selectedFolder == newFolder) return;
        displayFolder(folderStorage[newFolder.id].todo);
        currentFolder.classList.toggle("active")
        if(prevActive !== null) prevActive.classList.toggle("active");
        prevActive = currentFolder;
        console.log(prevActive)
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
        let listItemDeleteBtn = new Image();
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
        listItemDeleteBtn.src = trashCanSvg;
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

function refreshFolder(){
    removeChildren();
    newStorage = [];
    for(let i = 0; i < folderStorage.length; i++){
        createFolder(folderStorage[i].name, folderStorage[i].description, folderStorage[i].todo)
    }
}

function removeChildren(){
    const folderContainer = document.querySelector(".folder-container");
    while (folderContainer.firstChild){
        folderContainer.removeChild(folderContainer.firstChild)
    }
}



export {createFolder, selectedFolder, Folder, displayFolder};

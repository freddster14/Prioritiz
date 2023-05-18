import './styles.css'

class Todo{
    constructor(title, priority, complete){
        this.title = title;
        this.priority = priority;
        this.complete = complete
    }
    
    
}

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


const addFolderBtn = document.querySelector("#folder-btn");
const addTodoBtn = document.querySelector("#todo-btn")
const inputFolder = document.querySelector("#folder-input");
const inputTitle = document.querySelector("#todo-title");
const inputDescription = document.querySelector("#todo-description")
const todoListContainer = document.querySelector("#todo-list-container");
const todoPriority = document.querySelector("#todo-priority");

let selectedFolder = undefined
let i = -1
let addFolder = false
let folderStorage = [];


addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    localStorage.setItem('folders', JSON.stringify(folderStorage))
});

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputTitle.value == "") return
    new Folder().addTodo(inputTitle.value, todoPriority.value, false, selectedFolder.id);
});

if(!localStorage.getItem('folders')) {
    populateStorage();
} else {
    importInfo();
}



function deleteTodo(selectedTodo){
    console.log(selectedTodo)
    const index = folderStorage[selectedFolder.id].todo.indexOf(selectedTodo);
    if(index > -1){
        folderStorage[selectedFolder.id].todo.splice(index, 1);
    }
}

function displayFolder(todoList){
    let todoListElement = document.getElementById("todo-list");
	todoListElement.innerHTML = "";
    console.log(todoList)
	for (let i = 0; i < todoList.length; i++) {
		let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');

        if(todoList[i].priority == "Low"){listItemElement.classList.add("low-priority")}
        else if(todoList[i].priority == "Medium"){listItemElement.classList.add("medium-priority")}
        else{listItemElement.classList.add("high-priority")}

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            deleteTodo(folderStorage[selectedFolder.id].todo[i]);
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

function populateStorage() {
    localStorage.setItem('folders', JSON.stringify(folderStorage));
    importInfo();
}

function getId(i){
    i++;
    return i;
}

function importInfo() {
    folderStorage = JSON.parse(localStorage.getItem('folders'));
    console.log(folderStorage)
    for(let i = 0; i < folderStorage.length; i++){
        createFolder(folderStorage[i].name, folderStorage[i].description)
    }
}


console.log(localStorage)

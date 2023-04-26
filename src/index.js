import './styles.css'

const addFolderBtn = document.querySelector("#folder-btn");
const addTodoBtn = document.querySelector("#todo-btn")
const inputFolder = document.querySelector("#folder-input");
const inputTitle = document.querySelector("#todo-title");
const inputDescription = document.querySelector("#todo-description")
const todoListContainer = document.querySelector("#todo-list-container");
const todoPriority = document.querySelector("#todo-priority");

let selectedFolder = undefined

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createFolder(inputFolder.value, inputDescription.value);
});

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputTitle.value == "") return
    new Folder().addTodo(inputTitle.value, todoPriority.value, false);
});



class Todo{
    constructor(title, priority, complete){
        this.title = title;
        this.priority = priority;
        this.complete = complete
    }
    
    
}

class Folder{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.todo = [];
    }

    addTodo(title, priority, complete){
        if(selectedFolder == undefined) return;
        let newTodo = new Todo(title, priority, complete)
        selectedFolder.todo.push(newTodo);
        displayFolder(selectedFolder.todo);
        console.log(selectedFolder)
        inputTitle.value = "";
        return newTodo
    }
    deleteTodo(parent, selectedTodo){
        document.querySelector("#todo-list").removeChild(parent)
        console.log(selectedTodo)
        const index = selectedFolder.todo.indexOf(selectedTodo);
        if(index > -1){
            selectedFolder.todo.splice(index, 1);
        }
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

        if(todoList[i].priority == "Low"){listItemElement.style.background = "blue"}
        else if(todoList[i].priority == "Medium"){listItemElement.style.background = "orange"}
        else{listItemElement.style.background = "red"}

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            selectedFolder.deleteTodo(listItemCompletion.parentElement, todoList[i]);
            displayFolder(todoList)   ;
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

    let newFolder = new Folder(folderTitle, description);

    console.log(newFolder)
    folderText.textContent = folderTitle;
    folderDescription.textContent = description;

    folderContainer.appendChild(currentFolder);
    currentFolder.appendChild(folderText);
    currentFolder.appendChild(folderDescription);
    
    inputDescription.value = "";
    inputFolder.value = "";

    currentFolder.addEventListener('click', (event) => {
        event.preventDefault();
        if(selectedFolder == newFolder) return;
        displayFolder(newFolder.todo);
        selectedFolder = newFolder;
        todoListContainer.style.display = "flex"
        console.log(selectedFolder)
    });
    
}










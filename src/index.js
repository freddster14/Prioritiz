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
    addFolder();
});

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputTitle.value == "" || inputDescription.value == "") return
    new Folder().addTodo(inputTitle.value, inputDescription.value, todoPriority.value, false);
});



class Todo{
    constructor(title, description, priority, complete){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.complete = complete
    }
    createTodoList(todoTitle, todoDescription, todoPriority){
        let todoListElement = document.getElementById("todo-list");
        let listItemElement = document.createElement("li");
        let listItemDescription = document.createElement('p');
        let listItemPriority = document.createElement('p');

        let listItemCompletion = document.createElement('input');


        listItemElement.textContent = todoTitle;
        listItemDescription.textContent = todoDescription;
        listItemPriority.textContent = todoPriority

        todoListElement.appendChild(listItemElement);
        listItemElement.appendChild(listItemDescription);
        listItemElement.appendChild(listItemPriority);
    }
    
}

class Folder{
    constructor(name){
        this.name = name;
        this.todo = [];
    }

    addTodo(title, description, priority, complete){
        if(selectedFolder == undefined) return;
        new Todo().createTodoList(title, description, priority);
        selectedFolder.todo.push(new Todo(title, description, priority, complete));
        inputTitle.value = "";
    }
}

function displayFolder(todoList){
    let todoListElement = document.getElementById("todo-list");
	todoListElement.innerHTML = "";
    console.log(todoList)
	for (let i = 0; i < todoList.length; i++) {
		let listItemElement = document.createElement("li");
        let listItemDescription = document.createElement('p');
        let listItemPriority = document.createElement('p');

		listItemElement.textContent = todoList[i].title;
        listItemDescription.textContent = todoList[i].description;
        listItemPriority.textContent = todoList[i].priority;

		todoListElement.appendChild(listItemElement);
        listItemElement.appendChild(listItemDescription);
        listItemElement.appendChild(listItemPriority);

	}
}


function createFolder(folderTitle){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderText = document.createElement("p");
    let newFolder = new Folder(folderTitle);

    console.log(newFolder)
    folderText.textContent = folderTitle;
    folderContainer.appendChild(currentFolder);
    currentFolder.appendChild(folderText);
    currentFolder.addEventListener('click', (event) => {
        event.preventDefault();
        displayFolder(newFolder.todo);
        selectedFolder = newFolder;
        todoListContainer.style.display = "block"
        console.log(selectedFolder)
    });
    
}



function addFolder(){
    createFolder(inputFolder.value);
}






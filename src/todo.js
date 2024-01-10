import  folderStorage  from "./index.js";
import { selectedFolder, Folder, displayFolder, todoListContainer } from "./folder.js";
import trashCanSvg from './img/trash-can.svg'
import { add } from "date-fns";

const addTodoBtn = document.querySelector("#todo-btn");
const todoPriority = document.querySelector("#todo-priority");
const inputTitle = document.querySelector("#todo-title");
const dueDate = document.querySelector("#date-todo");
const formInfoContainer = document.querySelector(".title-priority-container");
const dueDateFolder = document.querySelector(".dues-folder");
const upcomingContainer = document.querySelector("#upcoming-dates-container");

let upcomingTodoList = document.getElementById("todo-list-date");
let todoBtnCount = 0;
let allTodo = []
let dateTodo = []
let tempAllTodo =[]



addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(todoBtnCount == 0){
        addTodoBtn.textContent = "";
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");

        ++todoBtnCount
        console.log(todoBtnCount)

    }else{
        if(inputTitle.value == "" || todoPriority.value == "") {
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
        return
        }
        new Folder().addTodo(
            inputTitle.value, todoPriority.value, dueDate.value, false, selectedFolder.id);
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
        console.log(todoBtnCount);

        
    }
    
});

dueDateFolder.addEventListener('click', (e) => {

    tempAllTodo = []
    allTodo = []
    for(let i = 0; i < folderStorage.length; i++){
       
        tempAllTodo.push(folderStorage[i].todo);


        allTodo.push(tempAllTodo[i]);
        

    }
    allTodo.forEach((e) => {
        for(let i = 0; i < e.length; i++){
            
            if(e[i].date !== undefined && !dateTodo.includes(e[i])) dateTodo.push(e[i])
        }
    })
    tempAllTodo = allTodo
    console.log(dateTodo)
    console.log(tempAllTodo);
    console.log(allTodo);
    displayUpcoming(dateTodo);
    upcomingContainer.style.display = "flex"

})

function displayUpcoming(dateTodo){
    todoListContainer.style.display = "none"
	upcomingTodoList.innerHTML = "";
    for(let i = 0; i < dateTodo.length; i++){
        let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDate = document.createElement('p');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');
        let dateAndDeleteContainer = document.createElement('div');

        if(dateTodo[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(dateTodo[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")};

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            if(dateTodo[i].complete){dateTodo[i].complete = false;
            }else{dateTodo[i].complete = true};

            if(dateTodo[i].complete){
                listItemDeleteBtn.style.visibility = "visible";
                listItemElement.style.boxShadow = "0 0 7px 2px rgba(0, 0, 0, 0.311)";
            }else{
                listItemDeleteBtn.style.visibility = "hidden";
                listItemElement.style.boxShadow = "none";            };

            localStorage.setItem('folders', JSON.stringify(folderStorage));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            deleteTodo(folderStorage[selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete");
        listContainer.classList.add("todo-title-delete");
        dateAndDeleteContainer.classList.add("todo-date-delete-container");
        
		listItemText.textContent = dateTodo[i].title;
        listItemDate.textContent = dateTodo[i].date;
        listItemCompletion.checked = dateTodo[i].complete;
        listItemDeleteBtn.src = trashCanSvg;
        // Adds CSS to completed Task when displaying folder
        if(dateTodo[i].complete){
            listItemDeleteBtn.style.visibility = "visible";
            listItemElement.style.boxShadow = "2px 0 7px 1px rgba(0, 0, 0, 0.311)";
        }else{
            listItemDeleteBtn.style.visibility = "hidden";
            listItemElement.style.boxShadow = "none";
        };

		upcomingTodoList.appendChild(listItemElement);
        listItemElement.appendChild(listItemCompletion);
        listItemElement.appendChild(listContainer);
        listContainer.appendChild(listItemText);
        dateAndDeleteContainer.appendChild(listItemDate);
        dateAndDeleteContainer.appendChild(listItemDeleteBtn);
        listContainer.appendChild(dateAndDeleteContainer);

	}
    
}


class Todo{
    constructor(title, priority, date, complete){
        this.title = title;
        this.priority = priority;
        this.complete = complete;
        this.date = date;
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

export {Todo, deleteTodo, upcomingContainer};

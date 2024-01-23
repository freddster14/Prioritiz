import {folderStorage}  from "./index.js";
import { selectedFolder, Folder, openFolder, todoListContainer, prevActive} from "./folder.js";
import trashCanSvg from './img/trash-can.svg'


const addTodoBtn = document.querySelector("#todo-btn");
const todoPriority = document.querySelector("#todo-priority");
const inputTitle = document.querySelector("#todo-title");
const dueDate = document.querySelector("#date-todo");
const formInfoContainer = document.querySelector(".title-priority-container");
const dueDateFolder = document.querySelector(".dues-folder");
const upcomingContainer = document.querySelector(".upcoming-dates-container");
const errorDate = document.querySelector("#error-box");
const folderImg = document.querySelector(".folder-img");

let upcomingTodoList = document.getElementById("todo-list-date");
let todoBtnCount = 0;
let allTodo = []
let dateTodo = []
let tempAllTodo =[]



addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(todoBtnCount == 0){
        addTodoBtn.textContent = "";
        dueDate.value = "";
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        ++todoBtnCount
    }else{
        if(inputTitle.value == "" || todoPriority.value == "") {
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
        
        return
        }
        if(dueDate.value == ""){}
        else if(dueDate.value < getTodayDate() || new Date(dueDate.value).getFullYear() > 9999)
        return  errorDate.classList.toggle("alert");
        if(errorDate.classList.contains("alert")) errorDate.classList.toggle("alert");
        new Folder().addTodo(
            inputTitle.value, todoPriority.value, dueDate.value, false, selectedFolder.id);
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
    }
});

dueDateFolder.addEventListener('click', (e) => {
    dateTodo = []
    tempAllTodo = []
    allTodo = []
    for(let i = 0; i < folderStorage.length; i++){
        tempAllTodo.push(folderStorage[i].todo);
        allTodo.push(tempAllTodo[i]);
    }
    allTodo.forEach((e) => {
        for(let i = 0; i < e.length; i++){
            if(e[i].date !== '' && !dateTodo.includes(e[i])) dateTodo.push(e[i])
        }
    })
    dateTodo.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })

    upcomingContainer.classList.toggle("show-flex");
    if (window.innerWidth < 999) folderImg.click();
    openUpcoming(dateTodo);

})

function openUpcoming(dateTodo){
    //only makes it that the container is removed, when screen is big
    if (window.innerWidth > 999) todoListContainer.classList.remove("show-flex");
	upcomingTodoList.innerHTML = "";
    for(let i = 0; i < dateTodo.length; i++){
        let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDate = document.createElement('p');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');
        let dateAndDeleteContainer = document.createElement('div');
        // Changes date format
        let curr_date = new Date(dateTodo[i].date);
        let curr_day = curr_date.getDate() + 1;
        let curr_month = curr_date.getMonth() + 1;
        let curr_year = curr_date.getFullYear();

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
        listItemDate.textContent = curr_month + "-" + curr_day + "-" + curr_year;
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

function getTodayDate(){
    let datePlaceHolder = new Date();
    datePlaceHolder.setDate(datePlaceHolder.getDate() - 1);
    return datePlaceHolder.toISOString().split('T')[0];
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
    openFolder(folderStorage[selectedFolder.id].todo)
}

export {Todo, deleteTodo, upcomingContainer};

import { folderStorage, updateFolderStorage } from './index.js';
import { Todo, deleteTodo, upcomingContainer } from './todo.js';
import trashCanSvg from './img/trash-can.svg';
import plusSvg from './img/plus.svg';
import closeSvg from './img/close.svg';

const todoListContainer = document.querySelector('.task-container');
const inputDescription = document.querySelector('#todo-description');
const inputFolder = document.querySelector('#folder-input');
const addFolderBtn = document.querySelector('#add-folder-btn');
const inputTitle = document.querySelector('#todo-title');
const showFolderFormBtn = document.querySelector('#display-form-btn');
const form = document.querySelector('#form-folder');
const folderImg = document.querySelector('.folder-img');
const taskTitle = document.querySelector('#folder-name-task-title');

const todoListElement = document.getElementById('todo-list');
let addFolder = false;
let i = -1;
let selectedFolder;
let newStorage = [];
let prevActive;

class Folder {
  constructor(name, description, id, todo) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.todo = todo;
  }

  addTodo(title, priority, date, complete, id) {
    if (selectedFolder == undefined) return;

    const newTodo = new Todo(title, priority, date, complete);
    folderStorage[id].todo.push(newTodo);
    openFolder(folderStorage[id].todo);
    inputTitle.value = '';
    localStorage.setItem('folders', JSON.stringify(folderStorage));
    return newTodo;
  }
}

showFolderFormBtn.addEventListener('click', () => {
  // opens or closes form
  form.classList.toggle('active');
  addFolderBtn.classList.toggle('toggle');
  form.querySelectorAll('input').forEach((el) => el.classList.toggle('toggle'));
  // changes button style
  if (showFolderFormBtn.style.backgroundImage !== `url("${closeSvg}")`) {
    showFolderFormBtn.style.backgroundImage = 'none';
    showFolderFormBtn.style.backgroundImage = `url("${closeSvg}")`;
    showFolderFormBtn.style.backgroundColor = 'rgb(185, 72, 72)';
  } else {
    showFolderFormBtn.style.backgroundImage = `url("${plusSvg}")`;
    showFolderFormBtn.textContent = '';
    showFolderFormBtn.style.backgroundColor = 'rgba(0, 134, 13, 0.281)';
  }
});

addFolderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputFolder.value == '' || inputFolder.value == 'Common Name Found') return;
  // Stops from creating same folder name
  if (folderStorage.some((folder) => folder.name == inputFolder.value)) {
    setTimeout(() => inputFolder.value = '', 2000);
    return inputFolder.value = 'Common Name Found';
  }

  addFolder = true;
  createFolder(inputFolder.value, inputDescription.value);
  addFolder = false;

  form.classList.toggle('active');
  addFolderBtn.classList.toggle('toggle');

  form.querySelectorAll('input').forEach((el) => el.classList.toggle('toggle'));
  showFolderFormBtn.style.backgroundImage = `url("${plusSvg}")`;
  showFolderFormBtn.textContent = '';
  showFolderFormBtn.style.backgroundColor = 'rgba(0, 134, 13, 0.281)';
  localStorage.setItem('folders', JSON.stringify(folderStorage));
});

function createFolder(folderTitle, description, todo) {
  const folderContainer = document.querySelector('.folder-container');
  const currentFolder = document.createElement('div');
  const folderHeader = document.createElement('div');
  const deleteFolder = new Image();
  const folderText = document.createElement('h2');
  const folderDescription = document.createElement('p');

  let deleted = false;

  if (todo == undefined) todo = [];
  const newFolder = new Folder(folderTitle, description, getId(i), todo);
  newStorage.push(newFolder);
  i = getId(i);
  // gives id to html

  deleteFolder.addEventListener('click', () => {
    deleted = true;
    const newStorage = folderStorage.filter((r) => r.name != newFolder.name);
    // resets id count to reassigned
    i = -1;

    localStorage.setItem('folders', JSON.stringify(newStorage));
    updateFolderStorage();
    refreshFolder();
  });
  deleteFolder.src = trashCanSvg;

  currentFolder.id = i;
  folderHeader.id = 'folder-header';

  folderText.textContent = folderTitle;
  folderDescription.textContent = description;

  folderContainer.appendChild(currentFolder);
  currentFolder.appendChild(folderHeader);
  folderHeader.appendChild(folderText);
  folderHeader.appendChild(deleteFolder);
  currentFolder.appendChild(folderDescription);
  inputDescription.value = '';
  inputFolder.value = '';
  // checks if adding a folder
  if (addFolder)folderStorage.push(newFolder);
  currentFolder.addEventListener('click', (event) => {
    event.preventDefault();
    // prevents the folder which is to be deleted from opening
    if (deleted) return deleted = false;
    // prevents the folder to re-open when the screen is big
    if (prevActive !== undefined) prevActive.classList.toggle('active');

    todoListContainer.classList.add('show-flex');
    currentFolder.classList.toggle('active');
    // closes folder tab
    if (window.innerWidth < 999) folderImg.click();
    // html
    prevActive = currentFolder;
    // object
    selectedFolder = newFolder;
    openFolder(folderStorage[newFolder.id].todo);
  });
  localStorage.setItem('folders', JSON.stringify(newStorage));
}

function openFolder(todoList) {
  // only makes it that the container is removed, when screen is big
  if (window.innerWidth > 999) upcomingContainer.classList.remove('show-flex');

  todoListElement.innerHTML = '';
  taskTitle.textContent = selectedFolder.name;

  for (let i = 0; i < todoList.length; i++) {
    const listItemElement = document.createElement('li');
    const listItemText = document.createElement('p');
    const listItemCompletion = document.createElement('input');
    const listItemDate = document.createElement('p');
    const listItemDeleteBtn = new Image();
    const listContainer = document.createElement('div');
    const dateAndDeleteContainer = document.createElement('div');
    // Changes date format on screen
    const curr_date = new Date(todoList[i].date);
    const curr_day = curr_date.getDate() + 1;
    const curr_month = curr_date.getMonth() + 1;
    const curr_year = curr_date.getFullYear();
    // checks for priority
    if (todoList[i].priority == 'Low') { listItemCompletion.classList.add('low-priority'); } else if (todoList[i].priority == 'Medium') { listItemCompletion.classList.add('medium-priority'); } else { listItemCompletion.classList.add('high-priority'); }

    listItemCompletion.setAttribute('type', 'checkbox');
    listItemDeleteBtn.classList.add('todo-delete');
    listContainer.classList.add('todo-title-delete');
    dateAndDeleteContainer.classList.add('todo-date-delete-container');

    listItemText.textContent = todoList[i].title;
    if (todoList[i].date !== '') listItemDate.textContent = `${curr_month}-${curr_day}-${curr_year}`;
    listItemCompletion.checked = todoList[i].complete;
    listItemDeleteBtn.src = trashCanSvg;

    // Adds CSS to completed Task when displaying folder
    if (todoList[i].complete) {
      listItemDeleteBtn.style.visibility = 'visible';
      listItemElement.style.boxShadow = '2px 0 7px 1px rgba(0, 0, 0, 0.311)';
    } else {
      listItemDeleteBtn.style.visibility = 'hidden';
      listItemElement.style.boxShadow = 'none';
    }

    listItemCompletion.addEventListener('change', () => {
      if (todoList[i].complete) {
        todoList[i].complete = false;
      } else { todoList[i].complete = true; }
      // adds css on true
      if (todoList[i].complete) {
        listItemDeleteBtn.style.visibility = 'visible';
        listItemElement.style.boxShadow = '0 0 7px 2px rgba(0, 0, 0, 0.311)';
      } else {
        listItemDeleteBtn.style.visibility = 'hidden';
        listItemElement.style.boxShadow = 'none';
      }

      localStorage.setItem('folders', JSON.stringify(folderStorage));
    });

    listItemDeleteBtn.addEventListener('click', () => {
      deleteTodo(folderStorage[selectedFolder.id].todo[i]);
    });

    todoListElement.appendChild(listItemElement);
    listItemElement.appendChild(listItemCompletion);
    listItemElement.appendChild(listContainer);
    listContainer.appendChild(listItemText);
    dateAndDeleteContainer.appendChild(listItemDate);
    dateAndDeleteContainer.appendChild(listItemDeleteBtn);
    listContainer.appendChild(dateAndDeleteContainer);
  }
}

function getId(i) {
  i++;
  return i;
}

function refreshFolder() {
  removeChildren();
  newStorage = [];
  for (let i = 0; i < folderStorage.length; i++) {
    createFolder(folderStorage[i].name, folderStorage[i].description, folderStorage[i].todo);
  }
}

function removeChildren() {
  const folderContainer = document.querySelector('.folder-container');
  while (folderContainer.firstChild) {
    folderContainer.removeChild(folderContainer.firstChild);
  }
}

export {
  createFolder, selectedFolder, Folder, openFolder, todoListContainer, prevActive,
};

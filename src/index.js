import './styles.css'
import {createFolder} from './folder.js'
import { upcomingContainer } from './todo';

const mainFolderContainer = document.querySelector(".main-folder-container");
const taskContainer = document.querySelector(".task-container");
const folderImg = document.querySelector(".folder-img");

let folderStorage = [];

if(!localStorage.getItem('folders')) {
    populateStorage();
} else {
    importInfo();
}

function populateStorage() {
    localStorage.setItem('folders', JSON.stringify(folderStorage));
    importInfo();
}

function importInfo() {
    //get the local storage and displays it
    folderStorage = JSON.parse(localStorage.getItem('folders'));
    console.log(folderStorage)
    for(let i = 0; i < folderStorage.length; i++){
        createFolder(folderStorage[i].name, folderStorage[i].description, folderStorage[i].todo)
    }
}

folderImg.addEventListener('click', () =>{
    
   //closes just folder tab
    if(taskContainer.classList.contains("show-flex") && mainFolderContainer.classList.contains("show")){
       return mainFolderContainer.classList.toggle("show");
    }

    if(upcomingContainer.classList.contains("show-flex") && mainFolderContainer.classList.contains("show")){
        return mainFolderContainer.classList.toggle("show");
    }
    //prevents folder icon from closing once open & also removes any open folder
    if(!mainFolderContainer.classList.contains("show")) {
        mainFolderContainer.classList.toggle("show");
        upcomingContainer.classList.remove("show-flex")
        taskContainer.classList.remove("show-flex")
    }

})
//Activates folder icon and displays folder tab
if (window.innerWidth < 999) {
    folderImg.classList.toggle("show");
    folderImg.click();
}

function updateFolderStorage(){folderStorage = JSON.parse(localStorage.getItem('folders'));}

export {folderStorage, updateFolderStorage}
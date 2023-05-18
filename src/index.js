import './styles.css'
import {createFolder} from './folder.js'

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
    folderStorage = JSON.parse(localStorage.getItem('folders'));
    console.log(folderStorage)
    for(let i = 0; i < folderStorage.length; i++){
        createFolder(folderStorage[i].name, folderStorage[i].description)
    }
}

console.log(localStorage)
export {folderStorage};

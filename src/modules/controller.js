import { addList, getList, deleteList, addCell, getCell, deleteCell } from './localStorageHandler.js';
import Cell from './cell.js';
import List from './list.js';


function addNewList(listObj) {
  console.log(listObj.title, getList(!listObj.title))
  if (!getList(listObj.title)) {
    addList(listObj);
  } else {
    alert('Esse título já está sendo usado');
  };
};

function updateListTitle(originalListName, updatedListTitle) {
  const updatedList = getList(originalListName);
  deleteList(originalListName);
  addList({title: updatedListTitle, cellList: updatedList.cellList});
};


const dado = localStorage;
dado.clear()
for (let i = 0; i < dado.length; i++) {
  console.log(dado.getItem(dado.key(i)))
}
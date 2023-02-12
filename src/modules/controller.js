import { addList, getList, deleteList, addCell, getCell, doesThisCellExist, deleteCell } from './localStorageHandler.js';
import Cell from './cell.js';
import List from './list.js';


function addNewList (listObj) {
  if (!getList(listObj.title)) {
    addList(listObj);
  } else {
    alert('Esse título já está sendo usado');
  };
};

function updateListTitle (originalListName, updatedListTitle) {
  const updatedList = getList(originalListName).cellList;
  
  deleteList(originalListName);
  
  addList(new List(updatedListTitle, updatedList));
};

function addNewCell (listName, cellObj) {
  if (!doesThisCellExist(listName, cellObj.title)) {
    addCell(listName, cellObj);
  } else {
    alert('Essa célula já foi criada, tente trocar o título')
  };
};

const dados = localStorage;
dados.clear();
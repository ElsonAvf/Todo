import { addList, getList, deleteList, addCell, getCell, doesThisCellExist, deleteCell } from './../model/localStorageHandler.js';
import Cell from './../model/cell.js';
import List from './../model/list.js';

export function addNewList (listObj) {
  if (!getList(listObj.title)) {
    addList(listObj);
    return true;
  } 
  return false;
};

function updateListTitle (originalListTitle, updatedListTitle) {
  const updatedList = getList(originalListTitle).cellList;
  
  deleteList(originalListTitle);
  
  addList(new List(updatedListTitle, updatedList));
};

function addNewCell (listName, cellObj) {
  if (!doesThisCellExist(listName, cellObj.title)) {
    addCell(listName, cellObj);
  } else {
    console.log('Essa célula já foi criada, tente trocar o título')
  };
};

function updateCell (listName, originalCellIndex, newCellObj) {
  deleteCell(listName, originalCellIndex)
  
  addCell(listName, newCellObj);
};

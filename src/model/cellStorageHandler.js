import uniqid from 'uniqid';

import { getListById, addList, deleteList } from './listStorageHandler.js';

export function addCell (listId, cellObj) {
  const updatedList = getListById(listId);
  cellObj.listId = updatedList.Id;
  cellObj.id = uniqid();
  updatedList.cellList.unshift(cellObj);
  deleteList(listId)
  addList(updatedList);
};

export function getCellById(listName, cellId) {
  const cell = getListById(listId).cellList.filter(obj => obj.id === cellId);
  
  return cell;
};

function getCellIndex(listId, cellId) {
  const cellList = getListById(listId).cellList;
  for (let index = 0; index < cellList.length; index ++) {
    if (cellList[index].id === cellId) {
      return index;
    };
  };
};

export function isTheTitleBeingUsed (listId, cellTitle) {
  const list = getListById(listId);
  for (let i = 0; i < list.cellList.length; i++) {
    if (list.cellList[i].title === cellTitle) {
      return true;
    };
  };
  return false;
};

export function deleteCell(listId, cellId) {
  const updatedList = getList(listName);
  
  updatedList.cellList.splice(getCellIndex(listId, cellId), 1);
  
  addList(updatedList);
};

if (!localStorage.length) {
  localStorage.setItem('Lists', JSON.stringify([]));
};

import uniqid from 'uniqid';

import { getListById, addList, deleteList } from './listStorageHandler.js';

export function addCell (listId, cellObj) {
  const updatedList = getListById(listId);
  cellObj.id = uniqid();
  cellObj.listId = listId;
  updatedList.cellList.unshift(cellObj);
  deleteList(listId)
  addList(updatedList);
};

export function getCellById(listId, cellId) {
  const list = getListById(listId).cellList
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === cellId) {
      return list[i]
    }
  }
};

function getCellIndex(listId, cellId) {
  const list = getListById(listId);
  for (let index = 0; index < list.cellList.length; index++) {
    if (list.cellList[index].id === cellId) {
      return index
    }
  }
}

export function insertInTheSameIndex(listId, cellId, updatedCell) {
  const updatedList = getListById(listId);
  const oldIndex = getCellIndex(listId, cellId);
  updatedList.cellList.splice(oldIndex, 1, updatedCell)
  deleteList(listId);
  addList(updatedList);
}

export function updateCell(listId, cellId, name, value) {
  const cell = getCellById(listId, cellId);
  const updatedCell = {...cell, [name]: value}
  insertInTheSameIndex(listId, cellId, updatedCell)
}

export function deleteCell(listId, cellId) {
  const updatedList = getListById(listId);
  updatedList.cellList.splice(getCellIndex(listId, cellId), 1);
  deleteList(listId);
  addList(updatedList);
};

if (!localStorage.length) {
  localStorage.setItem('Lists', JSON.stringify([]));
};

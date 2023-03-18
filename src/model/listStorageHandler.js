import uniqid from 'uniqid';

import {getMainList, setMainList} from './mainListStorageHandler.js';

export function getListById(listId) {
  const mainList = getMainList();
  for (let index = 0; index < mainList.length; index++) {
    if (mainList[index].id === listId) {
      return mainList[index];
    };
  };
};

function getListIndex(listId) {
  const mainList = getMainList();
  for (let index = 0; index < mainList.length; index++) {
    if (mainList[index].id === listId) {
      return index;
    };
  };
};

export function addList(listObj) {
  if (!listObj.id) {
    listObj.id = uniqid();
  };
  const newList = getMainList();
  newList.unshift(listObj);
  setMainList(newList)
};

function updateList(newListObj, oldIndex) {
  const mainList = getMainList();
  mainList.splice(oldIndex, 1, newListObj);
  setMainList(mainList);
};

export function updateListTitle(listId, newTitle) {
  const newList = getListById(listId);
  const oldListIndex = getListIndex(listId);
  newList.title = newTitle;
  updateList(newList, oldListIndex)
};

export function deleteList(listId) {
  const mainList = getMainList();
  const listIndex = getListIndex(listId);
  mainList.splice(listIndex, 1)
  setMainList(mainList);
};

export function getAllLists() {
  const mainList = getMainList()
  let allLists = [];
  for (let i = 0; i<mainList.length; i++) {
    const list = getMainList()[i];
    allLists.push(list);
  };
  return allLists;
};

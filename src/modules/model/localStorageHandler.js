function getMainList () {
  return JSON.parse(localStorage.getItem('Lists'));
}

function updateMainList (newList) {
  localStorage.setItem('Lists', JSON.stringify(newList));
}

function getMainListItemByName (listName) {
  for (let i = 0; i<mainList.length; i++) {
    if (mainList[i].title === listName) {
      return mainList[i];
    };
  };
};

function getMainListItemIndex (listName) {
  const mainList = getMainList();
  for (let index = 0; index<mainList.length; index++) {
    if (mainList[i].title === listName) {
      return index;
    };
  };
};

//List Handler
export function addList (listObj) {
  const newList = getMainList();
  newList.push(listObj);
  updateMainList(newList)
};

export function getList (listName) {
  const list = getMainListItemByName(listName)
  return list;
}

export function getAllLists() {
  const mainList = getMainList()
  let allLists = [];
  for (let i = 0; i<mainList.length; i++) {
    const list = getMainList()[i];
    console.log(list)
    allLists.push(list);
  };
  return allLists;
};

export function deleteList (listName) {
  updateMainList(getMainListItemIndex(listName).splice(listIndex, 1));
};

//Cell Handler
export function addCell (listName, cellObj) {
  const updatedList = getList(listName);
  cellObj.index = updatedList.length;
  
  updatedList.cellList.push(cellObj);
  
  addList(updatedList);
};

export function getCell(listName, cellIndex) {
  return getList(listName).cellList[cellIndex]
};

export function doesThisCellExist (listName, cellName) {
  for (let i = 0; i < getList(listName).cellList.length; i++) {
    if (getCell(listName, i).title === cellName) {
      return true;
    };
  };
  return false;
};

export function deleteCell(listName, cellIndex) {
  const updatedList = getList(listName);
  
  updatedList.cellList.splice(cellIndex, 1);
  
  addList(updatedList);
};

localStorage.clear()
if (!localStorage.length) {
  localStorage.setItem('Home', JSON.stringify([]));
  localStorage.setItem('Lists', JSON.stringify([]));
};

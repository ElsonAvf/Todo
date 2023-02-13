//List Handler
export function addList (listObj) {
  localStorage.setItem(listObj.title, JSON.stringify(listObj));
};

export function getList (listName) {
  return JSON.parse(localStorage.getItem(listName));
}

export function deleteList (listName) {
  localStorage.removeItem(listName);
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

const data = localStorage;

export function addList (listObj) {
  data.setItem(listObj.title, JSON.stringify(listObj));
};

export function getList (listName) {
  return JSON.parse(data.getItem(listName));
}

export function deleteList (listName) {
  data.removeItem(listName);
};

export function addCell (cellObj, listName) {
  const updatedList = getList(listName);
  cellObj.index = updatedList.length;
  
  updatedList.cellList.push(cellObj);
  
  addList(updatedList);
};

export function getCell(cellIndex, listName) {
  return JSON.parse(data.getItem(listName)).cellList[cellIndex]
};

export function deleteCell(cellIndex, listName) {
  const updatedList = data.getList(listName);
  
  updatedList.cellList.splice(cellIndex, 1);
  
  addList(updatedList);
};

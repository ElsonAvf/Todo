const data = localStorage;

function addList (listObj) {
  data.setItem(listObj.title, JSON.stringify(listObj));
};

function getList (listName) {
  return JSON.parse(data.getItem(listName));
}

function deleteList (listName) {
  data.removeItem(listName);
};

function addCell (cellObj, listName) {
  const updatedList = getList(listName);
  cellObj.index = updatedList.length;
  
  updatedList.cellList.push(cellObj);
  
  addList(updatedList);
};

function getCell(cellIndex, listName) {
  return JSON.parse(data.getItem(listName)).cellList[cellIndex]
};

function deleteCell(cellIndex, listName) {
  const updatedList = data.getList(listName);
  
  updatedList.cellList.splice(cellIndex, 1);
  
  addList(updatedList);
};

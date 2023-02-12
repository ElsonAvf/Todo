const data = localStorage;

function addList (listObj) {
  
};

function getList (listName) {
  
};

function deleteList (listName) {
  
};

function addCell (cellObj, listName) {
  const updatedList = JSON.parse(data.getItem(listName));
  cellObj.index = list.length;
  
  list.cellList.push(cellObj);
  
  addList(updatedList);
};

function getCell(cellIndex, listName) {
  return JSON.parse(data.getItem(listName)).cellList[cellIndex]
};

function deleteCell(cellIndex, listName) {
  const updatedList = JSON.parse(data.getItem(listName));
  updatedList.cellList.splice(cellIndex, 1);
  
  addList(updatedList);
};

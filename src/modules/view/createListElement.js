import closeSVG from './../../assets/icons/close.svg';

//Create Lists Elements
export function createListElement (listObj) {
  const list = document.createElement('div');
  const title = document.createElement('h1');
  const amountOfCells = document.createElement('div');
  const closeButton = document.createElement('button');
  const iconForCloseButton = document.createElement('img');
  
  list.classList.add('items');
  
  title.textContent = listObj.title;
  amountOfCells.textContent = listObj.cellList.length;
  iconForCloseButton.src = closeSVG;
  
  closeButton.appendChild(iconForCloseButton);
  
  list.append(title, amountOfCells, closeButton);
  
  return list;
};

import { getAllLists } from './../model/localStorageHandler.js';

import { createListElement } from './createListElement.js';

import './css/listStyle.css';

const content = document.querySelector('#content');

function removePreviousContent () {
  if (content.firstElementChild) {
    content.firstElementChild.remove();
  };
};


function displayListMenu () {
  removePreviousContent();
  
  const lists = getAllLists()
  ;
  const container = document.createElement('div');
  const containerTitle = document.createElement('h2');
  
  container.id = 'list-menu-container';
  containerTitle.textContent = 'Lists';
  
  container.appendChild(containerTitle);
  
  if (lists) {
    for (const list of lists) {
      container.appendChild(createListElement(list));
    };
    content.appendChild(container);
  };
};

const listButton = document.querySelector('#list-button');

listButton.addEventListener('click', displayListMenu);
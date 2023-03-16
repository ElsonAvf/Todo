import React from 'react';
import List from './List';
import Cell from './Cell';
import ListForm from './ListForm';
import CellFormContainer from './CellFormContainer';

import { useMainContentContext } from './contexts/MainContentContext.js';
import { useShowListContext } from './contexts/ShowListContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

import './../assets/css/Main.css';
import addSvg from './../assets/icons/add.svg';

export default function Main() {
  const mainContent = useMainContentContext();
  const showList = useShowListContext();
  const theme = useThemeContext();
  const [showForm, setShowForm] = React.useState(false);
  const [listId, setListId] = React.useState(null) 
  function isEmpty() {
    return (mainContent.content.length > 0) ? false : true;
  }
  
  function toggleForm() {
    setShowForm(prevShowForm => !prevShowForm);
  };
  
  function updateId(id) {
    setListId(id);
  };
  
  function displayList(listObj) {
    return (<List key={listObj.id} updateId={updateId} listObj={listObj}/>)
  };
  function displayCell(cellObj) {
    return (<Cell key={cellObj.id} cellObj={cellObj}/>);
  };
  function displayListForm() {
    return (<ListForm toggleForm={toggleForm} />)
  }
  function displayCellForm() {
    return (<CellFormContainer listId={listId} toggleForm={toggleForm}  />)
  }
  
  const display = showList ? displayList : displayCell;
  const form = showList ? displayListForm() : displayCellForm();
  let content = mainContent.content.map(list => display(list))
  let colorTheme = theme ? 'white' : '#0d1c36';
  return (
    <main>
      <h2 style={{color: colorTheme}}>{mainContent.title}</h2>
      <ul id='menu-container'>
       { isEmpty() ? <div>Empty</div> : content }
      </ul>
      <button 
        id='add-new'
        style={
          {backgroundColor: theme ? '#1A386C' : '#0D1C36'}
        }
        onClick={toggleForm}
      >
        <img src={addSvg}/>
      </button>
      {showForm && form}
    </main>
  );
};
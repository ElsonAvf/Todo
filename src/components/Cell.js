import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import DateSection from './DateSection';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchCellContext } from './contexts/CellFormContext.js';
import { useDispatchTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js'; 
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

import { deleteCell, updateCell } from './../model/cellStorageHandler.js';

import './../assets/css/Cell.css';

export default function Cell({ cellObj }) {
  const theme = useThemeContext();
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchListId = useDispatchListIdContext();
  const dispatchCell = useDispatchCellContext();
  const toggleForm = useDispatchToggleFormContext();
  const dispatchTypeOfSubmit = useDispatchTypeOfSubmitContext();
  
  function deleteSelf() {
    deleteCell(cellObj.listId, cellObj.id)
    dispatchMainContent({ type: 'show_cells', id: cellObj.listId})
  }
  function handleChange(e) {
    const { name, checked} = e.target;
    updateCell(cellObj.listId, cellObj.id, name, checked)
    dispatchMainContent({ type: 'show_cells', id: cellObj.listId})
  }
  function edit() {
    dispatchCell({ type: 'populate', listId: cellObj.listId, id: cellObj.id })
    dispatchListId(cellObj.listId);
    dispatchTypeOfSubmit({ type: 'edit' });
    toggleForm();
  }
  
  let titleStyle = { color: theme ? 'white' : 'black' };
  let mainStyle = {
    backgroundColor: theme ? '#333333' : 'white',
    border: theme ? '1px solid #333333' : '1px solid black'
  };
  let priorityStyle = { backgroundColor: '', color: '' };
  switch (cellObj.priority) {
    case 'low':
      priorityStyle.border = theme ? '3px solid lightgreen' : '3px solid darkgreen';
      priorityStyle.color = theme ? 'lightgreen' : 'darkgreen';
      break;
    case 'medium':
      priorityStyle.border = '3px solid #FCAE1E';
      priorityStyle.color = '#FCAE1E';
      break;
    case 'high':
      priorityStyle.border = '3px solid tomato';
      priorityStyle.color = 'tomato';
      break;
  }
  
  return (
    <li className='cells' style={mainStyle}>
      <section className='cell-section'>
        <input
          type='checkbox'
          name='completed'
          checked={cellObj.completed}
          onChange={handleChange}
        />
        <button className='cell-button' onClick={edit}>
          <h3 style={titleStyle}>{ cellObj.title }</h3>
        </button>
        <span className='priority' style={priorityStyle}>{ cellObj.priority }</span>
        <button type='button' onClick={deleteSelf}><Icon path={ mdiClose } size={1} color='red' /></button>
      </section>
      <DateSection cellObj={cellObj}/>
    </li>
  );
};
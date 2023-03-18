import React from 'react';
import CellForm from './CellForm';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchCellContext } from './contexts/CellFormContext.js';
import { useDispatchTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { deleteCell, updateCell } from './../model/cellStorageHandler.js';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js'
import './../assets/css/Cell.css';

export default function Cell({ cellObj, toggleForm }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchCell = useDispatchCellContext();
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
    dispatchTypeOfSubmit({ type: 'edit' });
    toggleForm();
  }
  
  return (
    <li className='cells'>
      <input
        type='checkbox'
        name='completed'
        checked={cellObj.completed}
        onChange={handleChange}
      />
      <button onClick={edit}><h3>{ cellObj.title }</h3></button>
      <span>{ cellObj.priority }</span>
      <button type='button' onClick={deleteSelf}><Icon path={ mdiClose } size={1} color='#B00020' /></button>
    </li>
  );
};
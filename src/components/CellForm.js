import React from 'react';
import { mdiFormatText, mdiCheckboxOutline } from '@mdi/js';

import CheckboxDescriptionFieldset from './CheckboxDescriptionFieldset';
import CheckboxDescription from './CheckboxDescription';
import PriorityFieldset from './PriorityFieldset';
import ChangeDescriptionTypeButton from './ChangeDescriptionTypeButton';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useListIdContext } from './contexts/ListIdContext.js';
import { useCellContext, useDispatchCellContext } from './contexts/CellFormContext.js'; 
import { useTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';

import { addCell, insertInTheSameIndex } from './../model/cellStorageHandler.js';
import Cell from './../model/cell.js';

import './../assets/css/CellForm.css'

export default function CellForm() {
  const theme = useThemeContext();
  const changeMainContent = useDispatchMainContentContext();
  const toggleForm = useDispatchToggleFormContext()
  const listId = useListIdContext()
  const cell = useCellContext();
  const dispatchCell = useDispatchCellContext();
  const typeOfSubmit = useTypeOfSubmitContext()
  
  let color = { color: theme ? 'white' : 'black' };
  let styles = {
    backgroundColor: theme ? '#222222' : 'white',
    color: color.color,
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    if (typeOfSubmit === 'edit') {
      insertInTheSameIndex(listId, cell.id, cell)
      dispatchCell({type: 'reset'})
    } else if (typeOfSubmit === 'add_new') {
        addCell(listId, new Cell(cell.title, cell.priority, cell.dueDate, cell.description))
    }
    changeMainContent({type: 'show_cells', id: listId})
    toggleForm()
  }
  function handleChange(e) {
    dispatchCell({
      type: 'change',
      name: e.target.name,
      value: e.target.value
    })
  }
  function cancel() {
    toggleForm()
    dispatchCell('reset');
  }
  
  let content;
  if (cell.description.type === 'textarea') {
    content = (
      <textarea
      style={color}
        placeholder='Description'
        onChange={(e) => dispatchCell({
          type: 'textarea_description_change',
          value: e.target.value
        })
        }
        value={cell.description.content[0]}
      >
      </textarea>
      )
  } else {
    content = <CheckboxDescriptionFieldset />
  }
  
  return (
    <div id='cell-form-container'>
      <form
        id='cell-form'
        style={styles}
        onSubmit={handleSubmit}
      >
        <input
          name='title'
          value={cell.title}
          placeholder='Title'
          type='text'
          minLength='3'
          maxLength='20'
          required
          style={styles}
          onChange={handleChange}
        />
        <PriorityFieldset />
        <label id='date-label'>
        Due Date:
          <input
            name='dueDate'
            value={cell.dueDate}
            type='date'
            style={color}
            onChange={handleChange}
          />
        </label>
        <div id='change-description-div'>
          <ChangeDescriptionTypeButton 
            icon={mdiFormatText}
            active={cell.description.type === 'textarea'}
            change={(e) =>
            dispatchCell({type: 'change_description_to_textarea'})
            } 
          />
          <ChangeDescriptionTypeButton
            icon={mdiCheckboxOutline}
            active={cell.description.type === 'checkbox'}
            change={(e) =>
            dispatchCell({type: 'change_description_to_checkbox'})
            } 
          />
        </div>
        { content }
        <div id='action-buttons'>
          <button type='button' style={color} onClick={cancel}>Cancel</button>
          <button type='submit' style={color}>Save</button>
        </div>
      </form>
    </div>
  )
}
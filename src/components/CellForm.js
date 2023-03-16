import React from 'react';

import CheckboxDescriptionFieldset from './CheckboxDescriptionFieldset';
import CheckboxDescription from './CheckboxDescription';
import PriorityFieldset from './PriorityFieldset';
import ChangeDescriptionTypeButton from './ChangeDescriptionTypeButton';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useCellContext, useDispatchCellContext } from './contexts/CellFormContext.js'; 

import { addCell } from './../model/cellStorageHandler.js';
import Cell from './../model/cell.js';

import { mdiFormatText, mdiCheckboxOutline } from '@mdi/js';

export default function CellForm({ listId, toggleForm }) {
  const theme = useThemeContext();
  const changeMainContent = useDispatchMainContentContext();
  const cell = useCellContext();
  const dispatchCell = useDispatchCellContext();
  
  let content;
  if (cell.description.type === 'textarea') {
    content = (
      <textarea
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
    
  const styles = { backgroundColor: theme ? '#222222' : 'white' }
  return (
    <form
      id='cell-form'
      style={styles}
      onSubmit={
        (e) => {
          e.preventDefault();
          addCell(listId, new Cell(cell.title, cell.priority, cell.dueDate, cell.description))
          changeMainContent({type: 'show_cells', id: listId})
          toggleForm()
        }
      }
    >
      <input
        name='title'
        value={cell.title}
        placeholder='Title'
        type='text'
        minLength='3'
        maxLength='20'
        required
        onChange={
          (e) => dispatchCell({type: 'change', name: e.target.name, value: e.target.value })
        }
      />
      <PriorityFieldset />
      <input
        name='dueDate'
        value={cell.dueDate}
        type='date'
        onChange={
          (e) => dispatchCell({type: 'change', name: e.target.name, value: e.target.value})
        }
      />
      <div>
        <ChangeDescriptionTypeButton 
          icon={mdiFormatText}
          change={(e) =>
          dispatchCell({type: 'change_description_to_textarea'})
          } 
        />
        <ChangeDescriptionTypeButton
          icon={mdiCheckboxOutline}
          change={(e) =>
          dispatchCell({type: 'change_description_to_checkbox'})
          } 
        />
      </div>
      { content }
      <button type='button' onClick={toggleForm}>Cancel</button>
      <button type='submit'>Ok</button>
    </form>
  )
}
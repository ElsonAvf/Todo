import React from 'react';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchCellContext } from './contexts/CellFormContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';
import { useDispatchTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';

export default function AddButton() {
  const theme = useThemeContext();
  const dispatchCell = useDispatchCellContext();
  const dispatchTypeOfSubmit = useDispatchTypeOfSubmitContext();
  const toggleForm = useDispatchToggleFormContext();
  
  function handleClick() {
    dispatchCell({ type: 'reset' })
    dispatchTypeOfSubmit({ type: 'add_new' })
    toggleForm()
  }
  return (
    <button 
      id='add-new'
      style={
        {backgroundColor: theme ? '#1A386C' : '#0D1C36'}
      }
      onClick={handleClick}
    >
      <Icon className='mdiPlus' path={mdiPlus} size={1} color={'white'}/>
    </button>
  )
}
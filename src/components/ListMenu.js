import React from 'react';
import Icon from '@mdi/react'
import { mdiRenameBoxOutline, mdiTrashCanOutline } from '@mdi/js'

import { useDispatchTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

export default function ListMenu({ removeList, listId }) {
  const theme = useThemeContext();
  const dispatchListId = useDispatchListIdContext();
  const dispatchTypeOfSubmit = useDispatchTypeOfSubmitContext()
  const toggleForm = useDispatchToggleFormContext();
  
  function rename() {
    dispatchListId(listId)
    dispatchTypeOfSubmit({type: 'edit'})
    toggleForm()
  }
  
  let color = { color: theme ? 'white' : 'black' }
  
  return (
    <div className='list-menu'>
      <button style={color} onClick={rename}>
        <Icon path={mdiRenameBoxOutline} size={1} />
      </button>
      <button style={color} onClick={removeList}>
        <Icon path={mdiTrashCanOutline} size={1} />
      </button>
    </div>
  );
};
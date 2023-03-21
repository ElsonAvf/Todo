import React from 'react';
import Icon from '@mdi/react'
import { mdiRename, mdiDelete } from '@mdi/js'

import { useDispatchTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';

export default function ListMenu({ removeList, listId }) {
  const dispatchListId = useDispatchListIdContext();
  const dispatchTypeOfSubmit = useDispatchTypeOfSubmitContext()
  const toggleForm = useDispatchToggleFormContext();
  
  function rename() {
    dispatchListId(listId)
    dispatchTypeOfSubmit({type: 'edit'})
    toggleForm()
  }
  return (
    <div>
      <button
        onClick={rename}
      ><Icon path={mdiRename} size={1} />Rename</button>
      <button onClick={removeList}><Icon path={mdiDelete} size={1} />Delete</button>
    </div>
  );
};
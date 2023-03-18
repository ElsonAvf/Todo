import React from 'react';
import { useDispatchTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import Icon from '@mdi/react'
import { mdiRename, mdiDelete } from '@mdi/js'

export default function ListMenu({ removeList, toggleForm, listId }) {
  const dispatchListId = useDispatchListIdContext();
  const dispatchTypeOfSubmit = useDispatchTypeOfSubmitContext()
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
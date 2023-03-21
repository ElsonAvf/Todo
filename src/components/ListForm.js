import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useListIdContext, useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';

import { addList, updateListTitle, getListById } from './../model/listStorageHandler.js';
import List from './../model/list';

import './../assets/css/ListForm.css';

export default function ListForm() {
  const listId = useListIdContext();
  const toggleForm = useDispatchToggleFormContext();
  const dispatchListId = useDispatchListIdContext();
  const initialTitle = listId ? getListById(listId).title : ''
  const [title, setTitle] = React.useState(initialTitle);
  const changeMainContent = useDispatchMainContentContext();
  const typeOfSubmit = useTypeOfSubmitContext();
  
  function handleChange(e) {
    setTitle(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (typeOfSubmit === 'add_new') {
      addList(new List(title))
    } else if (typeOfSubmit === 'edit') {
      updateListTitle(listId, title)
      dispatchListId(null);
    }
    changeMainContent({ type: 'show_lists'})
    toggleForm();
  }
  function cancel() {
    dispatchListId(null);
    toggleForm()
  }
  
  return (
    <div id='list-form-container'>
      <form id='list-form' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={title}
          placeholder='Title'
          type='text'
          minLength='3'
          maxLength='20'
          required
        />
        <button type='button' onClick={cancel}>Cancel</button>
        <button type='submit'>Ok</button>
      </form>
    </div>
  );
};
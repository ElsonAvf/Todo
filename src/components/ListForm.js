import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useListIdContext, useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useTypeOfSubmitContext } from './contexts/TypeOfSubmitContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

import { addList, updateListTitle, getListById } from './../model/listStorageHandler.js';
import List from './../model/list';

import './../assets/css/ListForm.css';

export default function ListForm() {
  const listId = useListIdContext();
  const theme = useThemeContext();
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
  
  let background = {backgroundColor: theme ? '#333333' : 'white'}
  let color= { color: theme ? 'white' : 'black'}
  
  return (
    <div id='list-form-container' >
      <form id='list-form' style={background} onSubmit={handleSubmit}>
        <input
          style={color}
          onChange={handleChange}
          value={title}
          placeholder='Title'
          type='text'
          minLength='3'
          maxLength='20'
          required
        />
        <div id='form-action-buttons'>
          <button type='button' style={color} onClick={cancel}>Cancel</button>
          <button type='submit' style={color}>Save</button>
        </div>
      </form>
    </div>
  );
};
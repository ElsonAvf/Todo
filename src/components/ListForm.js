import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';

import { addList } from './../model/listStorageHandler.js';
import List from './../model/list';

import './../assets/css/ListForm.css';

export default function ListForm({ toggleForm }) {
  const [list, setList] = React.useState({title: ''})
  const changeMainContent = useDispatchMainContentContext();
  
  function handleChange(e) {
    setList({title: e.target.value})
  }
  function addNewList(e) {
    e.preventDefault();
    addList(new List(list.title))
    changeMainContent({ type: 'show_lists'} )
    toggleForm();
  }
  
  return (
    <div id='list-form-container'>
      <form id='list-form' onSubmit={addNewList}>
        <input
          onChange={handleChange}
          value={list.title}
          placeholder='Title'
          type='text'
          minLength='3'
          maxLength='20'
          required
        />
        <button type='button' onClick={toggleForm}>Cancel</button>
        <button type='submit'>Ok</button>
      </form>
    </div>
  );
};
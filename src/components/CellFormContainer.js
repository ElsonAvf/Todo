import React from 'react';
import CellForm from './CellForm';

import './../assets/css/CellForm.css'

export default function CellFormContainer({ toggleForm, listId }) {
  return (
    <div id='cell-form-container'>
      <CellForm toggleForm={toggleForm} listId={listId} />
    </div>
  );
};
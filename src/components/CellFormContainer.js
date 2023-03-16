import React from 'react';
import CellForm from './CellForm';
import { CellFormProvider } from './contexts/CellFormContext';

import './../assets/css/CellForm.css'

export default function CellFormContainer({ toggleForm, listId }) {
  return (
    <div id='cell-form-container'>
    <CellFormProvider>
      <CellForm toggleForm={toggleForm} listId={listId} />
    </CellFormProvider>
    </div>
  );
};
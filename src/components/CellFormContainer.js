import React from 'react';
import CellForm from './CellForm';

import './../assets/css/CellForm.css'

export default function CellFormContainer({ toggleForm }) {
  return (
    <div id='cell-form-container'>
      <CellForm toggleForm={toggleForm} />
    </div>
  );
};
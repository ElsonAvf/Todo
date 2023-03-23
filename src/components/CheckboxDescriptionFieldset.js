import React from 'react';
import Icon from '@mdi/react';
import { mdiPlusBoxOutline } from '@mdi/js';

import CheckboxDescription from './CheckboxDescription';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useCellContext, useDispatchCellContext } from './contexts/CellFormContext.js';

import './../assets/css/CheckboxDescriptionFieldset.css';


export default function CellDescriptionFieldSet() {
  const theme = useThemeContext();
  const cell = useCellContext();
  const dispatchCell = useDispatchCellContext();
  
  function addNewCheckbox() {
    dispatchCell({ type: 'add_new_checkbox' })
  }
  
  let color = { color: theme ? 'white' : 'black'}
  
  return (
    <fieldset id='checkbox-description-fieldset'>
      <button id='add-new-checkbox' type='button' style={color} onClick={addNewCheckbox}>
        <Icon path={ mdiPlusBoxOutline } size={1} color={color.color} />
        Add
      </button>
      <div>
        {
          cell.description.content.map(checkbox => {
            return (<CheckboxDescription
              key={checkbox.id}
              cellCheckboxId={checkbox.id}
              checked={checkbox.isChecked}
              value={checkbox.text}
            />)
          })
        }
      </div>
    </fieldset>
  );
};
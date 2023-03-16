import React from 'react';
import CheckboxDescription from './CheckboxDescription';

import { useCellContext, useDispatchCellContext } from './contexts/CellFormContext.js';

import Icon from '@mdi/react';
import { mdiPlusBoxOutline } from '@mdi/js';

export default function CellDescriptionFieldSet() {
  const cell = useCellContext();
  const dispatchCell = useDispatchCellContext();
  return (
    <fieldset id='cell-description-fieldset'>
      <button type='button' onClick={() => dispatchCell({type: 'add_new_checkbox'})}>
        <Icon path={ mdiPlusBoxOutline } size={1} />
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
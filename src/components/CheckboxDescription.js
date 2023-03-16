import React from 'react';
import { useDispatchCellContext } from './contexts/CellFormContext.js'

export default function CheckBoxDescription({ checked, value, cellCheckboxId }) {
  const dispatchCell = useDispatchCellContext();
  function handleChange(e, cellId) {
    dispatchCell({
      type: 'checkbox_description_change',
      event: e.target,
      id: cellId,
    })
  }
  return (
    <div>
      <input
        onChange={(e) => handleChange(e, cellCheckboxId)}
        type='checkbox'
        name='isChecked'
        checked={ checked }
      />
      <input
        type='text'
        name='text'
        valye={value}
        onKeyDown={
          (e) => dispatchCell({
            type: 'remove_checkbox',
            keyCode: e.keyCode,
            name: e.target.name,
            value: e.target.value,
            id: cellCheckboxId,
          })
        }
        onChange={(e) => handleChange(e, cellCheckboxId)}
      />
    </div>
  );
};
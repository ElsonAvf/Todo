import React from 'react';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchCellContext } from './contexts/CellFormContext.js'

export default function CheckBoxDescription({ checked, value, cellCheckboxId }) {
  const theme = useThemeContext();
  const dispatchCell = useDispatchCellContext();
  
  function handleChange(e) {
    dispatchCell({
      type: 'checkbox_description_change',
      event: e.target,
      id: cellCheckboxId,
    })
  }
  
  let styles = {
    backgroundColor: theme ? '#222222' : 'white',
    color: theme ? 'white' : 'black',
  }
  
  return (
    <div id='checkbox-description'>
      <input
        onChange={handleChange}
        type='checkbox'
        name='isChecked'
        checked={ checked }
      />
      <input
        type='text'
        name='text'
        placeholder='Text'
        value={value}
        style={styles}
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
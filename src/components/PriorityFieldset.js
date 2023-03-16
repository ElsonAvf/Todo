import React from 'react';

import { useCellContext, useDispatchCellContext } from './contexts/CellFormContext.js';

export default function PriorotyFieldset() {
  const cell = useCellContext();
  const dispatchCell = useDispatchCellContext();
  
  function change(e) {
    dispatchCell({
      type: 'change',
      name: e.target.name,
      value: e.target.value,
    })
  }
  
  return (
    <fieldset id='priority'>
      <legend>Priority</legend>
      <label style={{color: 'green'}}>
        Low
        <input
          type='radio'
          name='priority'
          checked={cell.priority === 'low'}
          value='low'
          onChange={change}
      />
      </label>
      <label style={{color: 'yellow'}}>
        Medium
        <input
          type='radio'
          name='priority'
          checked={cell.priority === 'medium'}
          value='medium'
          onChange={change}
      />
      </label>
      <label style={{color: 'red'}}>
        High
        <input
          type='radio'
          name='priority'
          checked={cell.priority === 'high'}
          value='high'
          onChange={change}
      />
      </label>
    </fieldset>
  )
}
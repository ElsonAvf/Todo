import React from 'react';

import { useCellContext, useDispatchCellContext } from './contexts/CellFormContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

export default function PriorotyFieldset() {
  const theme = useThemeContext();
  const cell = useCellContext();
  const dispatchCell = useDispatchCellContext();
  
  function change(e) {
    dispatchCell({
      type: 'change',
      name: e.target.name,
      value: e.target.value,
    })
  }
  
  let lowStyle = {
    color: theme ? 'lightgreen' : 'darkgreen',
    border: theme ? '3px solid lightgreen' : '3px solid darkgreen',
  };
  let mediumStyle = {
    color: '#FCAE1E',
    border: '3px solid #FCAE1E',
  };
  let highStyle = {
    color: 'tomato',
    border: '3px solid tomato',
  };
  
  switch (cell.priority) {
    case 'low':
      lowStyle.backgroundColor = theme ? 'lightgreen' : 'darkgreen';
      lowStyle.color = theme ? '#222222' : 'white'
      break;
    case 'medium':
      mediumStyle.backgroundColor = '#FCAE1E';
      mediumStyle.color = theme ? '#222222' : 'white';
      break;
    case 'high':
      highStyle.backgroundColor = 'tomato';
      highStyle.color = theme ? '#222222' : 'white';
      break;
  }
  
  return (
    <fieldset id='priority'>
      <legend>Priority</legend>
      <label style={lowStyle}>
        Low
        <input
          type='radio'
          name='priority'
          checked={cell.priority === 'low'}
          value='low'
          onChange={change}
      />
      </label>
      <label style={mediumStyle}>
        Medium
        <input
          type='radio'
          name='priority'
          checked={cell.priority === 'medium'}
          value='medium'
          onChange={change}
      />
      </label>
      <label style={highStyle}>
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
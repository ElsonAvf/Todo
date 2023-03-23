import React from 'react';
import { format, parseISO } from 'date-fns';

import { useThemeContext } from './contexts/ThemeContext.js';

export default function DateSection({ cellObj }) {
  const theme = useThemeContext();
  
  let color = { color: theme ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.6)'}
  let border = { border: theme ? '2px solid rgba(255,255,255,.6)' : '2px solid rgba(0,0,0,.6)'}
  return (
    <section style={color} className='date-section'>
      <div className='date'>
        Creation
        <span style={border}>
          {cellObj.creationDate}
        </span>
      </div>
      <div className='date'>
        Due Date
        <span style={border}>
          {!!cellObj.dueDate ? format(parseISO(cellObj.dueDate), 'dd-MM-yyyy') : 'no-due-date'}
        </span>
      </div>
    </section>
  );
};
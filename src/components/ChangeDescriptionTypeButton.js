import React from 'react';
import Icon from '@mdi/react';

import { useThemeContext } from './contexts/ThemeContext.js';

export default function ChnageDescriptionTypeButton({active, change, icon}) {
  const theme = useThemeContext();
  
  let activeStyle = {}
  
  if (active) {
    activeStyle = {
      backgroundColor: theme ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.2)',
      borderRadius: '50%'
    };
  };
  
  return (
    <button className='change-description-button' type='button' style={activeStyle} onClick={change}>
      <Icon
        path={icon}
        size={1}
        style={{ color: theme ? 'white' : 'black' }}
      />
    </button>
  );
}
import React from 'react';
import { useThemeContext } from './contexts/ThemeContext.js';
import Icon from '@mdi/react';

export default function ChnageDescriptionTypeButton({change,icon}) {
  const theme = useThemeContext();
  return (
    <button type='button' onClick={change}>
      <Icon
        path={ icon }
        size={1}
        style={{color: theme ? 'white' : 'black'}}
      />
    </button>
  );
}
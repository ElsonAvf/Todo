import React from 'react';

import { ToggleFormProvider } from './contexts/ToggleFormContext.js';
import { useDisplayContext } from './contexts/DisplayContext.js';

import './../assets/css/Main.css';

export default function Main() {
  const display = useDisplayContext()
  
  return (
    <ToggleFormProvider>
      {display}
    </ToggleFormProvider>
  );
};
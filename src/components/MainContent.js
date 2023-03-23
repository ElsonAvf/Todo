import React from 'react';

import { useMainContentContext } from './contexts/MainContentContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

export default function MainContent({ children }) {
  const mainContent = useMainContentContext();
  const theme = useThemeContext();
  function isEmpty() {
    return (children.length > 0) ? false : true;
  }
  let colorTheme = { color: theme ? 'white' : '#0d1c36' };
  return (
    <section>
      <h2 style={colorTheme}>{mainContent.title}</h2>
      <ul id='menu-container'>
      { isEmpty() ? <div style={colorTheme} id='empty'>Empty</div> : children }
      </ul>
    </section>
  );
};
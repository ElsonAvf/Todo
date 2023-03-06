import React from 'react';

import {getMainList} from './../model/localStorageHandler.js';

import Header from './Header'; 
import Main from './Main';
import Aside from './Aside';

export default function App() {
  const [displayAside, setDisplayAside] = React.useState(false);
  const [mainContent, setMainContent] = React.useState(getMainList())
  const [darkMode, setDarkMode] = React.useState(false);
  
  function toggleAside() {
    setDisplayAside(prevDisplayAside => !prevDisplayAside);
  };
  
  function toggleMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
  
  return (
    <div style={{backgroundColor: (darkMode) ? '#121212' : 'white'}}>
      <Header
        darkMode={darkMode}
        toggleMode={toggleMode}
        toggleAside={toggleAside}
      />
      <Main darkMode={darkMode} mainContent={mainContent} />
      {displayAside && <Aside darkMode={darkMode} toggleAside={toggleAside} />}
    </div>
  );
};
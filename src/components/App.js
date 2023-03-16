import React from 'react';
import Header from './Header'; 
import Main from './Main';
import Aside from './Aside';

import { ShowListProvider } from './contexts/ShowListContext.js';

import { useThemeContext } from './contexts/ThemeContext.js';

import { getAllLists } from './../model/listStorageHandler.js';

import './../assets/css/App.css';

export default function App() {
  const theme = useThemeContext();
  const [displayAside, setDisplayAside] = React.useState(false);
  
  function toggleAside() {
    setDisplayAside(prevDisplayAside => !prevDisplayAside);
  };
  
  return (
    <div id='app' style={
        {backgroundColor: theme ? '#121212' : 'white'}
    }>
      <Header toggleAside={toggleAside} />
      <ShowListProvider>
        <Main />
        { displayAside && <Aside toggleAside={toggleAside} /> }
      </ShowListProvider>
    </div>
  );
};
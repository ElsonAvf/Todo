import React from 'react';

import List from './List';

import './../assets/css/menu.css';

export default function Main({darkMode, mainContent}) {
  let content = mainContent.map(list => <List darkMode={darkMode} title={list.title} listLength={list.cellList.length}/>)
  let colorTheme = darkMode ? 'white' : '#0d1c36';
  return (
    <main>
      <h2 style={{color: colorTheme}}>Lists</h2>
      <ul id='menu-container'>
       {content}
      </ul>
    </main>
  );
};
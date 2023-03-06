import React from 'react';

import './../assets/css/Aside.css';

import closeSvg from './../assets/icons/close.svg'

import {getAllLists} from './../model/localStorageHandler.js';

export default function Aside({darkMode, toggleAside}) {
  const [groups, setGroups] = React.useState(getAllLists())
   console.log('hi')
   let styles = {
     backgroundColor: darkMode ? '#2D60B9' : '#0D1C36',
     color: darkMode ? 'white' : 'black',
   }
  return (
    <aside style={styles}>
      <button id='close' onClick={toggleAside}><img src={closeSvg} /></button>
      <button id='home-button' type='button'>Home</button>
      <button id='list-button' type='button'>Lists</button>
      <ul>
        {groups.map(group => <li><button>{group.title}</button></li>)}
      </ul>
    </aside>
  );
};
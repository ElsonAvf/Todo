import React from 'react';

import AsideList from './AsideList';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';

import { getAllLists } from './../model/listStorageHandler.js';

import './../assets/css/Aside.css';
import closeSvg from './../assets/icons/close.svg'

export default function Aside({ toggleAside }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchShowList = useDispatchShowListContext();
  const theme = useThemeContext();
  const groups = getAllLists();
  
  function change() {
    dispatchShowList(true);
    dispatchMainContent({ type: 'show_lists'});
  };
       
   const styles = {
     backgroundColor: theme ? '#1A386C' : '#0D1C36',
     color: theme ? 'white' : 'black',
   }
  return (
    <aside style={styles}>
      <button id='close' onClick={toggleAside}><img src={closeSvg} /></button>
      <button id='home-button' type='button'>Home</button>
      <button
        onClick={change}
        id='list-button'
        type='button'
      >
        Lists
      </button>
      <ul>
        {groups.map(group =>
          <AsideList
            key={group.id}
            listid={group.id}
            title={group.title}
           />
          )
        }
      </ul>
    </aside>
  );
};
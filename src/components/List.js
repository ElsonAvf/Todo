import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';

import { deleteList } from './../model/listStorageHandler.js';

import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import './../assets/css/List.css';

export default function List({ listObj, updateId }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchShowList = useDispatchShowListContext();
  const theme = useThemeContext();
  
  function change() {
    dispatchShowList(false);
    updateId(listObj.id)
    dispatchMainContent({ type: 'show_cells', id: listObj.id });
  }
  function deleteSelf() {
    deleteList(listObj.id);
    dispatchMainContent({ type: 'show_lists' })
  }
  
  let boxShadowColor = theme ? '#222222': '#0d1c36';
  let mediumEmphasisColor = theme ? 'rgba(255,255,255,.6)' : 'black';
  let highEmphasisColor = theme ? 'rgba(255,255,255,.87' : 'black';
  let listBackground = theme ? '#333333' : 'white'; 
  let listBorder = theme ? 'none' : '1px solid black';
  
  return (
    <li style={{
      backgroundColor: listBackground,
      boxShadow: `5px 5px ${boxShadowColor}`,
      border: listBorder,
      }}
      className='items'
    >
      <button className='list-button' type='button' onClick={change}>
        <h3 style={{color: highEmphasisColor}}>{listObj.title}</h3>
      </button>
      <span style={{color: mediumEmphasisColor}} className='amount-of-cells'>{listObj.cellList.length}</span>
      <button onClick={deleteSelf}><Icon path={mdiDotsVertical} size={1} color={highEmphasisColor} /></button>
    </li>
  );
};
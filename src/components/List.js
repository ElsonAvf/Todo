import React from 'react';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';

import ListMenu from './ListMenu';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useDispatchDisplayContext } from './contexts/DisplayContext.js';
import { useDispatchToggleFormContext } from './contexts/ToggleFormContext.js';
import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchTypeOfDisplayContext } from './contexts/TypeOfDisplayContext.js';

import { deleteList } from './../model/listStorageHandler.js';

import './../assets/css/List.css';

export default function List({ listObj }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchShowList = useDispatchShowListContext();
  const dispatchListId = useDispatchListIdContext()
  const dispatchDisplay = useDispatchDisplayContext();
  const dispatchTypeOfDisplay = useDispatchTypeOfDisplayContext()
  const toggleForm = useDispatchToggleFormContext();
  const theme = useThemeContext();
  const menu = React.useRef(null);
  const [displayMenu, setDisplayMenu] = React.useState(false)
  
  React.useEffect(() => {
    function hide(e) {
      if (menu.current && !menu.current.contains(e.target)) {
        setDisplayMenu(false)
      };
    };
    document.addEventListener('click', hide)
    return () => document.removeEventListener('click', hide);
  }, [displayMenu]);
  
  function toggleDisplay() {
    setDisplayMenu(prevDisplayMenu => !prevDisplayMenu)
  }
  
  function displayCells() {
    dispatchShowList(false);
    dispatchListId(listObj.id)
    dispatchDisplay({ type: 'cells' });
    dispatchTypeOfDisplay('cells');
    dispatchMainContent({ type: 'show_cells', id: listObj.id });
  }
  function removeList() {
    deleteList(listObj.id);
    dispatchMainContent({ type: 'show_lists' })
  }
  
  let boxShadowColor = theme ? '#222222': '#0d1c36';
  let mediumEmphasisColor = theme ? 'rgba(255,255,255,.6)' : 'black';
  let highEmphasisColor = theme ? 'rgba(255,255,255,.87' : 'black';
  let listBackground = theme ? '#333333' : 'white'; 
  let listBorder = theme ? '1px solid #333333' : '1px solid black';
  
  return (
    <li style={{
      backgroundColor: listBackground,
      boxShadow: `5px 5px ${boxShadowColor}`,
      border: listBorder,
      }}
      className='items'
    >
      <button className='list-button' type='button' onClick={displayCells}>
        <h3 style={{color: highEmphasisColor}}>{listObj.title}</h3>
      </button>
      <span style={{color: mediumEmphasisColor}} className='amount-of-cells'>{listObj.cellList.length}</span>
      <ListMenu removeList={removeList} listId={listObj.id} />
    </li>
  );
};
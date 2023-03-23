import React from 'react';
import Icon from '@mdi/react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';
import { useDispatchDisplayContext } from './contexts/DisplayContext.js'
import { useDispatchTypeOfDisplayContext } from './contexts/TypeOfDisplayContext.js';

export default function AsideList({ listId, title }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchDisplay = useDispatchDisplayContext();
  const dispatchListId = useDispatchListIdContext();
  const dispatchTypeOfDisplay = useDispatchTypeOfDisplayContext();
  const dispatchShowList = useDispatchShowListContext();
  
  function displayCells() {
    dispatchShowList(false);
    dispatchListId(listId);
    dispatchDisplay({ type: 'cells' })
    dispatchMainContent({ type: 'show_cells', id: listId });
    dispatchTypeOfDisplay('cells')
  }
  return (
    <li listid={listId}>
      <button className='aside-list-btn' onClick={displayCells}>
        {title}
      </button>
      <hr />
    </li>
  );
};
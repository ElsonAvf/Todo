import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';

export default function AsideList({ listId, title }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchListId = useDispatchListIdContext();
  const dispatchShowList = useDispatchShowListContext();
  function change() {
    dispatchShowList(false);
    dispatchListId(listId)
    dispatchMainContent({ type: 'show_cells', id: listId });
  }
  return (
    <li listid={listId}>
      <button onClick={change}
      >
        {title}
      </button>
    </li>
  );
};
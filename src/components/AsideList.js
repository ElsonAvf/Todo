import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';

export default function AsideList({ listid, title }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchShowList = useDispatchShowListContext();
  function change() {
    dispatchShowList(false);
    dispatchMainContent({ type: 'show_cells', id: listid });
  }
  return (
    <li listid={listid}>
      <button onClick={change}
      >
        {title}
      </button>
    </li>
  );
};
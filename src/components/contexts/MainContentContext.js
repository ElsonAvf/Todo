import React from 'react';

import { getAllLists, getListById } from './../../model/listStorageHandler.js';
import { getTodayTasks } from './../../model/dateHandler.js';

const MainContentContext = React.createContext(null);
const DispatchMainContentContext = React.createContext(null);

export function useMainContentContext() {
  return React.useContext(MainContentContext);
};
export function useDispatchMainContentContext() {
  return React.useContext(DispatchMainContentContext);
};


function reducer(state, action) {
  switch(action.type) {
    case 'show_lists':
      return { title: 'Lists', content: getAllLists() };
    case 'show_cells':
      const list = getListById(action.id);
      return { title: list.title, content: list.cellList };
    case 'show_today_tasks':
      return { title: 'Today', content: getTodayTasks() }
  }
};
function init() {
  return { title: 'Lists', content: getAllLists() };
}

export function MainContentProvider({ children }) {
  const [mainContent, dispatchMainContent] = React.useReducer(reducer, null, init) 
  return (
    <MainContentContext.Provider value={mainContent}>
      <DispatchMainContentContext.Provider value={dispatchMainContent}>
        { children }
      </DispatchMainContentContext.Provider>
    </MainContentContext.Provider>
  )
}
import React from 'react';

import { getAllLists, getListById } from './../../model/listStorageHandler.js';
import { getTodayTasks, getThisWeekTasks } from './../../model/dateHandler.js';
import { getSearchedLists, getSearchedCells, getSearchedDueDateCells } from './../../model/searchHandler.js';

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
      return { title: 'Today', content: getTodayTasks() };
    case 'show_this_week_tasks':
      return { title: 'This Week', content: getThisWeekTasks() }
    case 'show_searched_lists':
      return { title: 'Lists', content: getSearchedLists(action.searchValue)}
    case 'show_searched_cells':
      const listObj = getListById(action.id);
      return { title: listObj.title, content: getSearchedCells(action.id, action.searchValue) }
    case 'show_searched_today_cells':
      return { title: 'Today', content: getSearchedDueDateCells(getTodayTasks(), action.searchValue)}
    case 'show_searched_this_week_cells':
      return { title: 'This Week', content: getSearchedDueDateCells(getThisWeekTasks(), action.searchValue)}
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
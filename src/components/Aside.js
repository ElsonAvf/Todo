import React from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiCalendarToday, mdiCalendarWeek, mdiViewList } from '@mdi/js';

import AsideList from './AsideList';

import { useThemeContext } from './contexts/ThemeContext.js';
import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useDispatchListIdContext } from './contexts/ListIdContext.js';
import { useDispatchShowListContext } from './contexts/ShowListContext.js';
import { useDispatchDisplayContext } from './contexts/DisplayContext.js';
import { useDispatchTypeOfDisplayContext } from './contexts/TypeOfDisplayContext.js';

import { getAllLists } from './../model/listStorageHandler.js';

import './../assets/css/Aside.css';

export default function Aside({ toggleAside }) {
  const dispatchMainContent = useDispatchMainContentContext();
  const dispatchListId = useDispatchListIdContext();
  const dispatchDisplay = useDispatchDisplayContext();
  const dispatchShowList = useDispatchShowListContext();
  const dispatchTypeOfDisplay = useDispatchTypeOfDisplayContext();
  const theme = useThemeContext();
  const groups = getAllLists();
  
  function displayLists() {
    dispatchShowList(true);
    dispatchListId(null);
    dispatchDisplay({ type: 'lists' })
    dispatchTypeOfDisplay('lists');
    dispatchMainContent({ type: 'show_lists'});
  };
  function displayTodayTasks() {
    dispatchShowList(false);
    dispatchDisplay({ type: 'due_date_cells' })
    dispatchListId(null);
    dispatchMainContent({ type: 'show_today_tasks'});
    dispatchTypeOfDisplay('today')
  }
  function displayThisWeekTasks() {
    dispatchShowList(false);
    dispatchDisplay({ type: 'due_date_cells'})
    dispatchListId(null);
    dispatchMainContent({ type: 'show_this_week_tasks'})
    dispatchTypeOfDisplay('this_week')
  }
       
   const styles = {
     backgroundColor: theme ? '#1A386C' : '#0D1C36',
     color: theme ? 'white' : 'black',
   }
  return (
    <aside style={styles}>
      <button id='close' onClick={toggleAside}><Icon path={mdiClose} size={1} color={'white'} /></button>
      <button id='today-button' type='button' onClick={displayTodayTasks}>
        <Icon path={mdiCalendarToday} size={1} color={'white'} />
        Today
      </button>
      <button id='this-week-button' type='button' onClick={displayThisWeekTasks}>
        <Icon path={mdiCalendarWeek} size={1} color={'white'} />
        This Week
      </button>
      <button
        onClick={displayLists}
        id='list-button'
        type='button'
      >
        <Icon path={mdiViewList} size={1} color='white' />
        Lists
      </button>
      <ul>
        {groups.map(group =>
          <AsideList
            key={group.id}
            listId={group.id}
            title={group.title}
           />
          )
        }
      </ul>
    </aside>
  );
};
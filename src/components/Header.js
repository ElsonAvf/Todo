import React from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiMagnify } from '@mdi/js'

import { useThemeContext, useDispatchThemeContext  } from './contexts/ThemeContext.js';
import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useListIdContext } from './contexts/ListIdContext.js';
import { useTypeOfDisplayContext } from './contexts/TypeOfDisplayContext.js';

import './../assets/css/Header.css';

import darkModeSvg from './../assets/icons/dark_mode.svg';
import lightModeSvg from './../assets/icons/light_mode.svg';

export default function Header({ toggleMode, toggleAside }) {
  const theme = useThemeContext();
  const listId = useListIdContext();
  const typeOfDisplay = useTypeOfDisplayContext();
  const dispatchTheme = useDispatchThemeContext();
  const dispatchMainContent = useDispatchMainContentContext();
  const [search, setSearch] = React.useState('')
  
  React.useEffect(() => {
    if (typeOfDisplay === 'lists') {
      dispatchMainContent({ type: 'show_searched_lists', searchValue: search })
    } else if (typeOfDisplay === 'cells') {
      dispatchMainContent({ type: 'show_searched_cells', searchValue: search, id: listId})
    } else if (typeOfDisplay === 'today') {
      dispatchMainContent({ type: 'show_searched_today_cells', searchValue: search})
    } else if (typeOfDisplay === 'this_week') {
      dispatchMainContent({ type: 'show_searched_this_week_cells', searchValue: search})
    }
  }, [search])
  function handleChange(e) {
    setSearch(e.target.value)
  }
  
  let colorTheme = theme ? 'white' : '#0d1c36';
  let labelStyle = {
    backgroundColor: theme ? '#222222' : 'white',
    border: theme ? '1px solid white': '1px solid #0D1C36',
  }
  let searchInputStyle = { color: theme ? 'white' : 'black' }
  let background = {
    backgroundColor: theme ? '#121212' : 'ghostwhite',
  }
  return (
    <header style={background}>
      <h1 style={{color: colorTheme}} id='logo'>Todo</h1>
      <nav>
        <button onClick={toggleAside} id='menu-bar' type='button' >
          <Icon path={mdiMenu} size={1} color={colorTheme} />
        </button>
        <label style={labelStyle}>
          <Icon path={mdiMagnify} size={1} color={colorTheme} />
          <input type='search' value={search} style={searchInputStyle} onChange={handleChange}/>
        </label>
          <button onClick={dispatchTheme} type='button' id='theme-icon'>
          <img src={theme ? lightModeSvg : darkModeSvg}/>
        </button>
      </nav>
    </header>
  );
};
import React from 'react';

import { useThemeContext, useDispatchThemeContext  } from './contexts/ThemeContext.js';
import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { useListIdContext } from './contexts/ListIdContext.js';

import './../assets/css/Header.css';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js'
import darkModeSvg from './../assets/icons/dark_mode.svg';
import lightModeSvg from './../assets/icons/light_mode.svg';

export default function Header({ toggleMode, toggleAside }) {
  const theme = useThemeContext();
  const listId = useListIdContext();
  const dispatchTheme = useDispatchThemeContext();
  const dispatchMainContent = useDispatchMainContentContext();
  const [search, setSearch] = React.useState('')
  
  React.useEffect(() => {
    dispatchMainContent({type: 'show_searched_lists', searchValue: search})
  }, [search])
  function handleChange(e) {
    setSearch(e.target.value)
  }
  
  let colorTheme = theme ? 'white' : '#0d1c36';
  let searchInputStyle = {
    backgroundColor: theme ? '#222222' : 'white',
    color: theme ? 'rgba(255,255,255,.6)' : 'black',
    border: theme ? '1px solid white': '1px solid #0D1C36',
  }
  return (
    <header>
      <h1 style={{color: colorTheme}} id='logo'>Todo</h1>
      <button onClick={toggleAside} id='menu-bar' type='button' >
        <Icon path={mdiMenu} size={1} color={colorTheme} />
      </button>
      <input style={searchInputStyle} type='search' value={search} onChange={handleChange}/>
      <button onClick={dispatchTheme} type='button' id='theme-icon'>
        <img src={theme ? lightModeSvg : darkModeSvg}/>
      </button>
    </header>
  );
};
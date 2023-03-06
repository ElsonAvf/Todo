import React from 'react';

import './../assets/css/Header.css';

import darkModeSvg from './../assets/icons/dark_mode.svg';
import lightModeSvg from './../assets/icons/light_mode.svg';

export default function Header({darkMode, toggleMode, toggleAside}) {
  let colorTheme = darkMode ? 'white' : '#0d1c36';
  let searchInputStyle = {
    backgroundColor: darkMode ? '#222222' : 'white',
    color: darkMode ? 'rgba(255,255,255,.6)' : 'black',
    border: darkMode ? '1px solid white': '1px solid #0D1C36',
  }
  return (
    <header>
      <h1 style={{color: colorTheme}} id='logo'>Todo</h1>
      <button onClick={toggleAside} id='menu-bar' type='button' >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={colorTheme}>
          <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
      <input style={searchInputStyle} type='search' />
      <button onClick={toggleMode} type='button' id='theme-icon'>
        <img src={darkMode ? lightModeSvg : darkModeSvg}/>
      </button>
    </header>
  );
};
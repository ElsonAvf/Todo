import darkMode from './../../assets/icons/dark_mode.svg';
import lightMode from './../../assets/icons/light_mode.svg';

const toggleButton = document.querySelector('#toggle-theme-button');
const themeIcon = document.querySelector('#theme-icon');
const menuIcon = document.querySelector('#menu-bar > svg');
const root = document.documentElement;

const toggleTheme = () => {
  if (toggleButton.classList.contains('light-mode')) {
    toggleButton.classList.remove('light-mode');
    toggleButton.classList.add('dark-mode');
    
    themeIcon.src = lightMode;
    menuIcon.style.fill = '#ffffff';
    
    root.style.setProperty('--body-bg-color', '#121212');
    root.style.setProperty('--2nd-elevation-color', '#222222');
    root.style.setProperty('--3rd-elevation-color', '#333333');
    root.style.setProperty('--primary-color', '#0d4ed8');
    root.style.setProperty('--headings', 'white');
    root.style.setProperty('--high-emphasis-text', 'rgba(255,255,255,.87)');
    root.style.setProperty('--medium-emphasis-text', 'rgba(255,255,255,.6)');
    root.style.setProperty('--border', 'none');
    root.style.setProperty('--shadow', '5px 5px #222222');
    
  } else {
    toggleButton.classList.remove('dark-mode');
    toggleButton.classList.add('light-mode');
    
    themeIcon.src = darkMode;
    menuIcon.style.fill = '#0d1c36';
    
    root.style.setProperty('--body-bg-color', '#ffffff');
    root.style.setProperty('--2nd-elevation-color', '#ffffff');
    root.style.setProperty('--3rd-elevation-color', '#ffffff')
    root.style.setProperty('--primary-color', '#0d1c36');
    root.style.setProperty('--headings', '#0d1c36');
    root.style.setProperty('--high-emphasis-text', '#000000');
    root.style.setProperty('--medium-emphasis-text', '#000000');
    root.style.setProperty('--border', '1px solid black');
    root.style.setProperty('--shadow', '5px 5px #0d1c36');
  };
};

toggleButton.addEventListener('click', toggleTheme);

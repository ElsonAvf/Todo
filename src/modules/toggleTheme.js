import darkMode from './../assets/icons/dark_mode.svg';
import lightMode from './../assets/icons/light_mode.svg';

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
    root.style.setProperty('--primary-color', '#0d4ed8');
    root.style.setProperty('--headings', 'white');
    root.style.setProperty('--medium-emphasis-text', 'rgba(255,255,255,.60)')
    
  } else {
    toggleButton.classList.remove('dark-mode');
    toggleButton.classList.add('light-mode');
    
    themeIcon.src = darkMode;
    menuIcon.style.fill = '#0d1c36';
    
    root.style.setProperty('--body-bg-color', '#ffffff');
    root.style.setProperty('--primary-color', '#0d1c36');
    root.style.setProperty('--headings', '#0d1c36');
    root.style.setProperty('--medium-emphasis-text', '#000000')
  };
};

toggleButton.addEventListener('click', toggleTheme);

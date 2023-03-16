import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import {ThemeProvider} from './components/contexts/ThemeContext.js';
import {MainContentProvider} from './components/contexts/MainContentContext.js';
//CSS
import './assets/css/normalize.css';
import './assets/css/style.css';
//JAVASCRIPT
const root = createRoot(document.getElementById('root'));
root.render(
  <MainContentProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </MainContentProvider>
);
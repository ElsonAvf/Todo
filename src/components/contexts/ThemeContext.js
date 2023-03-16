import React from 'react';

const ThemeContext = React.createContext(false);
const DispatchThemeContext = React.createContext(null);

export function useThemeContext() {
  return React.useContext(ThemeContext)
};
export function useDispatchThemeContext() {
  return React.useContext(DispatchThemeContext)
};
export function reducer(state, actions) {
  //false === light mode  true === dark mode
  return !state;
};
export function ThemeProvider({ children }) {
  const [theme, dispatchTheme] = React.useReducer(reducer, false)
  return (
    <ThemeContext.Provider value={theme}>
      <DispatchThemeContext.Provider value={dispatchTheme}>
        { children }
      </DispatchThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
import React from 'react';

const DisplayFormContext = React.createContext(null);
const DispatchToggleFormContext = React.createContext(null);

export function useDisplayFormContext() {
  return React.useContext(DisplayFormContext);
}
export function useDispatchToggleFormContext() {
  return React.useContext(DispatchToggleFormContext);
}

function reducer(state, action) {
  return !state
}

export function ToggleFormProvider({ children }) {
  const [displayForm, dispatchToggleForm] = React.useReducer(reducer, false)
  return (
    <DisplayFormContext.Provider value={displayForm}>
      <DispatchToggleFormContext.Provider value={dispatchToggleForm}>
        { children }
      </DispatchToggleFormContext.Provider>
    </DisplayFormContext.Provider>
  );
};
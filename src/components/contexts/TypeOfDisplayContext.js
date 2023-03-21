import React from 'react';

const TypeOfDisplayContext = React.createContext(null);
const DispatchTypeOfDisplayContext = React.createContext(null);

export function useTypeOfDisplayContext() {
  return React.useContext(TypeOfDisplayContext);
}
export function useDispatchTypeOfDisplayContext() {
  return React.useContext(DispatchTypeOfDisplayContext);
}

function reducer(state, action) {
  return action;
}

export function TypeOfDisplayProvider({ children }) {
  const [typeOfDisplay, dispatchTypeOfDisplay] = React.useReducer(reducer, 'lists');
  return (
    <TypeOfDisplayContext.Provider value={typeOfDisplay}>
      <DispatchTypeOfDisplayContext.Provider value={dispatchTypeOfDisplay}>
        { children }
      </DispatchTypeOfDisplayContext.Provider>
    </TypeOfDisplayContext.Provider>
  )
}
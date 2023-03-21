import React from 'react';

const TypeOfSubmitContext = React.createContext(null);
const DispatchTypeOfSubmitContext = React.createContext(null);

export function useTypeOfSubmitContext() {
  return React.useContext(TypeOfSubmitContext);
}
export function useDispatchTypeOfSubmitContext() {
  return React.useContext(DispatchTypeOfSubmitContext);
}

function reducer(state, action) {
  return action.type;
}

export function TypeOfSubmitProvider({ children }) {
  const [typeOfSubmit, dispatchTypeOfSubmit] = React.useReducer(reducer, null);
  return (
    <TypeOfSubmitContext.Provider value={typeOfSubmit}>
      <DispatchTypeOfSubmitContext.Provider value={dispatchTypeOfSubmit}>
        { children }
      </DispatchTypeOfSubmitContext.Provider>
    </TypeOfSubmitContext.Provider>
  )
}
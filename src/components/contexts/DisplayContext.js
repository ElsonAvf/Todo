import React from 'react';

import ListContent from './../ListContent';
import CellContent from './../CellContent';
import DueDateContent from './../DueDateContent';


const DisplayContext = React.createContext(null);
const DispatchDisplayContext = React.createContext(null);

export function useDisplayContext() {
  return React.useContext(DisplayContext);
}
export function useDispatchDisplayContext() {
  return React.useContext(DispatchDisplayContext);
}

function reducer(state, action) {
  switch(action.type) {
    case 'lists':
      return <ListContent />
    case 'cells':
      return <CellContent />
    case 'due_date_cells':
      return <DueDateContent />
  }
}

export function DisplayProvider({ children }) {
  const [display, dispatchDisplay] = React.useReducer(reducer, <ListContent />)
  return (
    <DisplayContext.Provider value={display}>
      <DispatchDisplayContext.Provider value={dispatchDisplay}>
        { children }
      </DispatchDisplayContext.Provider>
    </DisplayContext.Provider>
  );
};
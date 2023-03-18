import React from 'react';

const ListIdContext = React.createContext(null);
const DispatchListIdContext = React.createContext(null);

export function useListIdContext() {
  return React.useContext(ListIdContext);
};
export function useDispatchListIdContext() {
  return React.useContext(DispatchListIdContext);
};

function reducer(state, action) {
  return action
}

export function ListIdProvider({ children }) {
  const [listId, dispatchListIď] = React.useReducer(reducer, null);
  return (
    <ListIdContext.Provider value={listId}>
      <DispatchListIdContext.Provider value={dispatchListIď}>
        { children }
      </DispatchListIdContext.Provider>
    </ListIdContext.Provider>
  );
} ;
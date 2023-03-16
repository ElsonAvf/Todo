import React from 'react';

const ShowListContext = React.createContext(null);
const DispatchShowListContext = React.createContext(null);

export function useShowListContext() {
  return React.useContext(ShowListContext);
};
export function useDispatchShowListContext() {
  return React.useContext(DispatchShowListContext);
};

function reducer(state, action) {
  return action
}

export function ShowListProvider({ children }) {
  const [showList, dipatchShowList] = React.useReducer(reducer, true);
  
  return (
    <ShowListContext.Provider value={showList}>
      <DispatchShowListContext.Provider value={dipatchShowList}>
        { children }
      </DispatchShowListContext.Provider>
    </ShowListContext.Provider>
  );
};
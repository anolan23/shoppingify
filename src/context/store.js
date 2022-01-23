import { createContext, useContext, useReducer } from 'react';

import reducers from '../reducers/index';

const StoreContext = createContext({});

export default function StoreProvider({ children }) {
  const INITIAL_STATE = {
    item: {},
    activeList: {
      items: [],
    },
    lists: [],
  };

  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);

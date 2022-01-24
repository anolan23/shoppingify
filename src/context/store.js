import { createContext, useContext, useReducer, useMemo } from 'react';

import reducers from '../reducers/index';

const StoreContext = createContext({});

export default function StoreProvider({ children }) {
  const INITIAL_STATE = {
    items: [],
    item: {},
    list: {
      items: [],
    },
    lists: [],
    sidebar: 'list',
  };

  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);

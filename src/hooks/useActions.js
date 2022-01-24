import axios from 'axios';
import { useStore } from '../context/store';

const fetchItems = (dispatch) => async () => {
  try {
    const response = await axios.get('/api/items');
    dispatch({ type: 'FETCH_ITEMS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

const setItems = (dispatch) => (items) => {
  dispatch({ type: 'SET_ITEMS', payload: items });
};

const setItem = (dispatch) => (item) => {
  dispatch({ type: 'SET_ITEM', payload: item });
};

const addItem = (dispatch) => (item) => {
  dispatch({ type: 'ADD_ITEM_TO_LIST', payload: item });
};

const createItem = (dispatch) => (item) => {
  dispatch({ type: 'CREATE_ITEM', payload: item });
};

const setMode = (dispatch) => (mode) => {
  const modes = ['edit', 'add', 'item', 'complete'];
  if (!modes.includes(mode)) return;
  dispatch({ type: 'SET_MODE', payload: mode });
};

export default function useActions() {
  const [state, dispatch] = useStore();

  return {
    setItem: setItem(dispatch),
    setItems: setItems(dispatch),
    setMode: setMode(dispatch),
    fetchItems: fetchItems(dispatch),
    addItem: addItem(dispatch),
    createItem: createItem(dispatch),
  };
}

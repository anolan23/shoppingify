import axios from 'axios';
import { useStore } from '../context/store';

const setShowCancelListPopup = (dispatch) => async (show) => {
  dispatch({ type: 'SET_SHOW_CANCEL_LIST_POPUP', payload: show });
};

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

const toggleItem = (state, dispatch) => (itemId) => {
  const { list } = state;
  const newItems = list.items.map((item) => {
    if (item.id !== itemId) return item;
    if (!item.checked) return { ...item, checked: true };
    return { ...item, checked: false };
  });
  dispatch({ type: 'TOGGLE_ITEM', payload: newItems });
};

const setList = (dispatch) => (list) => {
  dispatch({ type: 'SET_LIST', payload: list });
};

const addItem = (dispatch) => (item) => {
  dispatch({ type: 'ADD_ITEM_TO_LIST', payload: item });
};

const removeItem = (state, dispatch) => (itemId) => {
  const { list } = state;
  const newItems = list.items.filter((item) => item.id !== itemId);
  dispatch({ type: 'REMOVE_ITEM_FROM_LIST', payload: newItems });
};

const createItem = (dispatch) => (item) => {
  dispatch({ type: 'CREATE_ITEM', payload: item });
};

const setMode = (dispatch) => (mode) => {
  const modes = ['edit', 'create', 'item', 'check'];
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
    setList: setList(dispatch),
    removeItem: removeItem(state, dispatch),
    toggleItem: toggleItem(state, dispatch),
    setShowCancelListPopup: setShowCancelListPopup(dispatch),
  };
}

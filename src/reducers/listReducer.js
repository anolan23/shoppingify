export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: action.payload };
    case 'CREATE_ITEM':
    case 'ADD_ITEM_TO_LIST':
      const newItems = [
        ...state.list.items,
        { ...action.payload, checked: false, qty: 1 },
      ];
      return {
        ...state,
        list: { ...state.list, items: newItems },
      };
    case 'REMOVE_ITEM_FROM_LIST':
      return { ...state, list: { ...state.list, items: action.payload } };
    case 'TOGGLE_ITEM':
      return { ...state, list: { ...state.list, items: action.payload } };
    case 'INCREASE_QTY':
      return { ...state, list: { ...state.list, items: action.payload } };
    case 'CANCEL_LIST':
      return { ...state, list: { title: 'Shopping list', items: [] } };
    case 'COMPLETE_LIST':
      return { ...state, list: { title: 'Shopping list', items: [] } };
    case 'DELETE_ITEM':
      return state;
    default:
      return state;
  }
}

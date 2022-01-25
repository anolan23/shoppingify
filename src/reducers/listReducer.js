export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: action.payload };
    case 'CREATE_ITEM':
    case 'ADD_ITEM_TO_LIST':
      const newItems = [
        ...state.list.items,
        { ...action.payload, checked: false },
      ];
      return {
        ...state,
        list: { ...state.list, items: newItems },
      };
    case 'REMOVE_ITEM_FROM_LIST':
      return { ...state, list: { ...state.list, items: action.payload } };
    case 'TOGGLE_ITEM':
      return { ...state, list: { ...state.list, items: action.payload } };
    case 'DELETE_ITEM':
      return state;
    default:
      return state;
  }
}

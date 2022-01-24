export default function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_ITEM':
      const created = [...state.list.items, action.payload];
      return { ...state, list: { ...state.list, items: created } };
    case 'ADD_ITEM_TO_LIST':
      const newItems = [...state.list.items, action.payload];
      return { ...state, list: { ...state.list, items: newItems } };
    case 'DELETE_ITEM':
      return state;
    default:
      return state;
  }
}

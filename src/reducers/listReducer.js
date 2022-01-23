export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItems = [...state.list.items, action.payload];
      return { ...state, list: { ...state.list, items: newItems } };
    case 'DELETE_ITEM':
      return state;
    default:
      return state;
  }
}

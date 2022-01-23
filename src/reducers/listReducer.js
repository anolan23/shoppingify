export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      const newItems = [...state.activeList.items, action.payload];
      return { ...state, activeList: { ...state.activeList, items: newItems } };
    case 'DELETE_FROM_LIST':
      return state;
    default:
      return state;
  }
}

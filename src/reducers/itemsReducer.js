export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'FETCH_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

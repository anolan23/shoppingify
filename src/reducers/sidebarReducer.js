export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, sidebar: 'item' };
    case 'ADD_ITEM':
      return { ...state, sidebar: 'list' };
    case 'SET_MODE':
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
}

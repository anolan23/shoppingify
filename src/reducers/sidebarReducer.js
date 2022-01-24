export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, sidebar: 'item' };
    case 'CREATE_ITEM':
      return { ...state, sidebar: 'edit' };
    case 'ADD_ITEM_TO_LIST':
      return { ...state, sidebar: 'edit' };
    case 'SET_MODE':
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
}

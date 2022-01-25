export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, mode: 'item' };
    case 'CREATE_ITEM':
      return { ...state, mode: 'edit' };
    case 'ADD_ITEM_TO_LIST':
      return { ...state, mode: 'edit' };
    case 'COMPLETE_LIST':
      return { ...state, mode: 'edit' };
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

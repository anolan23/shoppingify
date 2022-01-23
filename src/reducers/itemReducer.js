export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, item: action.payload };
    default:
      return state;
  }
}

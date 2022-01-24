export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

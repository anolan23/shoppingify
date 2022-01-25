export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_SHOW_CANCEL_LIST_POPUP':
      return { ...state, showCancelListPopup: action.payload };
    default:
      return state;
  }
}

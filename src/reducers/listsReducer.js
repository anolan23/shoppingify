export default function reducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_LIST':
      return { ...state, lists: [...state.lists, action.payload] };
    default:
      return state;
  }
}

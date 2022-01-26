export default function reducer(state, action) {
  switch (action.type) {
    case 'CANCEL_LIST':
    case 'COMPLETE_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, timestamp: Date.now() }],
      };
    default:
      return state;
  }
}

import itemReducer from './itemReducer';
import listReducer from './listReducer';
import listsReducer from './listsReducer';

function combineReducers(...reducers) {
  return (state, action) =>
    reducers.reduce((newState, reducer) => reducer(newState, action), state);
}

export default combineReducers(itemReducer, listReducer, listsReducer);

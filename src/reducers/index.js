import itemReducer from './itemReducer';
import listReducer from './listReducer';
import listsReducer from './listsReducer';
import sidebarReducer from './sidebarReducer';
import categoriesReducer from './itemsReducer';

function combineReducers(...reducers) {
  return (state, action) =>
    reducers.reduce((newState, reducer) => reducer(newState, action), state);
}

export default combineReducers(
  categoriesReducer,
  itemReducer,
  listReducer,
  listsReducer,
  sidebarReducer
);

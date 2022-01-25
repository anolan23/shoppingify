import itemReducer from './itemReducer';
import listReducer from './listReducer';
import listsReducer from './listsReducer';
import modeReducer from './modeReducer';
import categoriesReducer from './itemsReducer';
import popupReducer from './popupReducer';
import storeReducer from './storeReducer';

function combineReducers(...reducers) {
  return (state, action) =>
    reducers.reduce((newState, reducer) => reducer(newState, action), state);
}

export default combineReducers(
  categoriesReducer,
  itemReducer,
  listReducer,
  listsReducer,
  modeReducer,
  popupReducer,
  storeReducer
);

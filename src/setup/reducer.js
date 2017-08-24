import { combineReducers } from 'redux-immutable';
import viewReducer from 'reducers';
import popupReducer from 'reducers/popupReducer';

export default function createReducer() {
  return combineReducers({
    setting: viewReducer,
    popupSetting: popupReducer,
  });
}

import { combineReducers } from 'redux-immutable';
import viewReducer from 'reducers';

export default function createReducer() {
  return combineReducers({
    viewSetting: viewReducer,
  });
}

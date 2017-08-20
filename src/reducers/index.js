import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  MENU_DISABLE_SETTING,
  MENU_VISIBLE_SETTING,
} from '../constants';

const initialState = fromJS({
  menuViewState: false,
});

export default handleActions({
  [MENU_DISABLE_SETTING]: state =>
    state.set('menuViewState', true),
  [MENU_VISIBLE_SETTING]: state =>
    state.set('menuViewState', false),

}, initialState);

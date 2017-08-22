import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  MENU_DISABLE_SETTING,
  MENU_VISIBLE_SETTING,
  ACTIVE_PLAY,
  INACTIVE_PLAY,
} from '../constants';

const initialState = fromJS({
  menuViewState: false,
  playerState: false,
});

export default handleActions({
  [MENU_DISABLE_SETTING]: state =>
    state.set('menuViewState', true),
  [MENU_VISIBLE_SETTING]: state =>
    state.set('menuViewState', false),
  [ACTIVE_PLAY]: state =>
    state.set('playerState', true),
  [INACTIVE_PLAY]: state =>
    state.set('playerState', false),

}, initialState);

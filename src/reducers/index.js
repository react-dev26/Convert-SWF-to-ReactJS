import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  MENU_DISABLE_SETTING,
  MENU_VISIBLE_SETTING,
  ACTIVE_PLAY,
  INACTIVE_PLAY,
  CURRENT_ITEM,
  SET_DATA,
} from '../constants';

const initialState = fromJS({
  menuViewState: false,
  playerState: false,
  selectedItem: 1,
  data: [],
});
const maxSliderCounter = 90;
const minSlideCounter = 1;
export default handleActions({
  [MENU_DISABLE_SETTING]: state =>
    state.set('menuViewState', true),
  [MENU_VISIBLE_SETTING]: state =>
    state.set('menuViewState', false),
  [ACTIVE_PLAY]: state =>
    state.set('playerState', true),
  [INACTIVE_PLAY]: state =>
    state.set('playerState', false),
  [CURRENT_ITEM]: (state, action) => {
    if (action.payload > maxSliderCounter) {
      return state.set('selectedItem', minSlideCounter);
    }
    else if (action.payload < minSlideCounter) {
      return state.set('selectedItem', minSlideCounter);
    }
    else {
      return state.set('selectedItem', action.payload);
    }
  },
  [SET_DATA]: (state, action) =>
    state.set('data', fromJS(action.payload)),
}, initialState);

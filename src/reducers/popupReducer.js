import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  POPDOWN_STATE,
  POPUP_STATE,
  VOLUME_HIDDEN,
  VOLUME_SHOW
} from '../constants';

const initialState = fromJS({
  popupState: false,
  volumeState: false,
});

export default handleActions({
  [POPUP_STATE]: state =>
    state.set('popupState', true),
  [POPDOWN_STATE]: state =>
    state.set('popupState', false),
  [VOLUME_SHOW]: state =>
    state.set('volumeState', true),
  [VOLUME_HIDDEN]: state =>
    state.set('volumeState', false)
}, initialState);

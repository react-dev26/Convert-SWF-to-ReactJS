import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  POPDOWN_STATE,
  POPUP_STATE,
} from '../constants';

const initialState = fromJS({
  popupState: false,
});

export default handleActions({
  [POPUP_STATE]: state =>
    state.set('popupState', true),
  [POPDOWN_STATE]: state =>
    state.set('popupState', false),
}, initialState);

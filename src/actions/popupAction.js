import { createAction } from 'redux-actions';
import {
  POPUP_STATE,
  POPDOWN_STATE,
} from '../constants';

export const handlePopUp = createAction(
  POPUP_STATE,
);
export const handlePopDown = createAction(
  POPDOWN_STATE,
);

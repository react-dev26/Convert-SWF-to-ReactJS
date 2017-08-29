import { createAction } from 'redux-actions';
import {
  MENU_DISABLE_SETTING,
  MENU_VISIBLE_SETTING,
  ACTIVE_PLAY,
  INACTIVE_PLAY,
  CURRENT_ITEM,
  PRE_ITEM,
  LOAD_DATA,
  SET_DATA,
} from '../constants';

export const handleMenuDisableState = createAction(
  MENU_DISABLE_SETTING,
);

export const handleMenuVisibleState = createAction(
  MENU_VISIBLE_SETTING,
);

export const handlePlay = createAction(
  ACTIVE_PLAY,
);

export const handleStop = createAction(
  INACTIVE_PLAY,
);

export const handleSelectItemPlayer = createAction(
  CURRENT_ITEM,
  index => index,
);

export const setProduct = createAction(
  SET_DATA,
);

export const loadData = createAction(
  LOAD_DATA,
);

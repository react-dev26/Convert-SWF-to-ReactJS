import { createAction } from 'redux-actions';
import {
  MENU_DISABLE_SETTING,
  MENU_VISIBLE_SETTING,
} from '../constants';

export const handleMenuDisableState = createAction(
  MENU_DISABLE_SETTING,
);

export const handleMenuVisibleState = createAction(
  MENU_VISIBLE_SETTING,
);

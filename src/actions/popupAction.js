import { createAction } from 'redux-actions';
import {
  POPUP_STATE,
  POPDOWN_STATE,
  VOLUME_SHOW,
  VOLUME_HIDDEN
} from '../constants';

export const handlePopUp = createAction(
  POPUP_STATE,
);
export const handlePopDown = createAction(
  POPDOWN_STATE,
);

export const handleVolumeWidgetShow = createAction(
  VOLUME_SHOW,
);

export const handleVolumeWidgetHidden = createAction(
  VOLUME_HIDDEN,
);

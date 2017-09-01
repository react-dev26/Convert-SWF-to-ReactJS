import { createSelector } from 'reselect';

const popupSettingSelector = state => state.get('popupSetting');
const currentPopStateSelector = createSelector([popupSettingSelector], popupSetting => popupSetting.get('popupState'));
const currentVolumeSelector = createSelector([popupSettingSelector], popupSetting => popupSetting.get('volumeState'));
export {
  popupSettingSelector,
  currentPopStateSelector,
  currentVolumeSelector,
};

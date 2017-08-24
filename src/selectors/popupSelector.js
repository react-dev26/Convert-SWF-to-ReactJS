import { createSelector } from 'reselect';

const popupSettingSelector = state => state.get('popupSetting');
const currentPopStateSelector = createSelector([popupSettingSelector], popupSetting => popupSetting.get('popupState'));

export {
  popupSettingSelector,
  currentPopStateSelector,
};

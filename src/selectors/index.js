import { createSelector } from 'reselect';

const settingSelector = state => state.get('viewSetting');
const currentMenuVisibleSettingSelector = createSelector([settingSelector], viewSetting => viewSetting.get('menuViewState'));

export {
  settingSelector,
  currentMenuVisibleSettingSelector,
};

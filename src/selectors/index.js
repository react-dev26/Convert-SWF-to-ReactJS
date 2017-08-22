import { createSelector } from 'reselect';

const settingSelector = state => state.get('setting');
const currentMenuVisibleSettingSelector = createSelector([settingSelector], setting => setting.get('menuViewState'));
const currentPlayerSettingSelector = createSelector([settingSelector], setting => setting.get('playerState'));
export {
  settingSelector,
  currentMenuVisibleSettingSelector,
  currentPlayerSettingSelector,
};

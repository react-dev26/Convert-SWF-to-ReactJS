import { createSelector } from 'reselect';

const settingSelector = state => state.get('setting');
const currentMenuVisibleSettingSelector = createSelector([settingSelector], setting => setting.get('menuViewState'));
const currentPlayerSettingSelector = createSelector([settingSelector], setting => setting.get('playerState'));
const currentItemSelector = createSelector([settingSelector], setting => setting.get('selectedItem'));
const dataSelector = createSelector([settingSelector], setting => setting.get('data'));
export {
  settingSelector,
  currentMenuVisibleSettingSelector,
  currentPlayerSettingSelector,
  currentItemSelector,
  dataSelector,
};

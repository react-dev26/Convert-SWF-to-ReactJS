import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import OutlineContent from './OutlineContent';
import NotesContent from './NotesContent';
import SearchContent from './SearchContent';
import ProgressBar from './ProgressBar';
import styles from './styles';

function Options({ menuState, getProductList, setItemId, currentItem }) {
  return (
    <div style={menuState ? styles.disable : styles.container}>
      <h4>Statement of Finanical Position</h4>
      <div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Outline</Tab>
              <Tab>Notes</Tab>
              <Tab>Search</Tab>
            </TabList>
            <TabPanel>
              <OutlineContent getProductList={getProductList} setItemId={setItemId}/>
            </TabPanel>
            <TabPanel>
              <NotesContent currentItem={currentItem}/>
            </TabPanel>
            <TabPanel>
              <SearchContent setItemId={setItemId}/>
            </TabPanel>
          </Tabs>
        </div>
        <div style={styles.progress}>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
Options.PropTypes = {
  menuState: PropTypes.bool,
  getProductList: PropTypes.array,
  setItemId: PropTypes.func,
  currentItem: PropTypes.number,
};
Options.defaultProps = {
  menuState: null,
  getProductList: null,
  setItemId: () => {},
  currentItem: null,
};
export default Options;

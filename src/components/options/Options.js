import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import OutlineContent from './OutlineContent';
import NotesContent from './NotesContent';
import SearchContent from './SearchContent';
import styles from './styles';

function Options() {
  return (
    <div style={styles.container}>
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
              <OutlineContent />
            </TabPanel>
            <TabPanel>
              <NotesContent />
            </TabPanel>
            <TabPanel>
              <SearchContent />
            </TabPanel>
          </Tabs>
        </div>
        <div>
        content
        </div>
        <div>
        progress
        </div>
      </div>
    </div>
  );
}

export default Options;

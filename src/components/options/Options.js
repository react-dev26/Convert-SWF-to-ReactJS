import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './styles';

function Options() {
  return (
    <div style={styles.container}>
      <h3>Statement of Finanical Position</h3>
      <div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Outline</Tab>
              <Tab>Notes</Tab>
              <Tab>Search</Tab>
            </TabList>
            <TabPanel>
              <h2>Content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Content 3</h2>
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

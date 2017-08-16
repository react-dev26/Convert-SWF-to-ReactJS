import React from 'react';

import styles from './styles';

function OutlineContent() {
  return (
    <div id="notes" style={styles.containers}>
      <ul style={styles.titleContainer}>
        <li style={styles.title}>Slide Title</li>
      </ul>
      <ul id="noteBody" style={styles.notesBody}>
        <li style={{paddingRight: 128}}>Statement of<br /> Financial Position</li>
        <p style={{textAlign: 'left'}}>Current Assets</p>
        <li style={styles.contact}>@Copyright 2017 <span style={{fontStyle: 'italic'}}>nonprofit-cpa.com</span> AllRights Reserved</li>
      </ul>
    </div>
  );
}

export default OutlineContent;

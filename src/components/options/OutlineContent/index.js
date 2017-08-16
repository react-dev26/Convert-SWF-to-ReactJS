import React from 'react';

import styles from './styles';

function OutlineContent() {
  return (
    <div style={styles.containers}>
      <ul style={styles.titleContainer}>
        <li style={styles.title}>Slide Title</li>
        <li style={styles.title}>Duration</li>
      </ul>
      <ul style={styles.itemContainer}>
        <li>testing</li>
        <li>testing</li>
      </ul>
    </div>
  );
}

export default OutlineContent;

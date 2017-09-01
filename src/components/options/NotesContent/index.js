import React from 'react';

import Contents from './Contents';
import { description } from 'data/description';
import styles from './styles';

function NotesContent() {
  console.log('data', description)
  return (
    <div id="notes" style={styles.containers}>
      <ul style={styles.titleContainer}>
        <li style={styles.title}>Slide Title</li>
      </ul>
      {
        description.map(item =>
          <Contents key={item.id} description={item.content} />
        )
      }
    </div>
  );
}

export default NotesContent;

import React, { PropTypes } from 'react';

import Contents from './Contents';
import { description } from 'data/description';
import styles from './styles';

function NotesContent({ currentItem }) {
  const content = description[currentItem - 1];
  console.log('data', description[currentItem - 1].content)
  return (
    <div id="notes" style={styles.containers}>
      <ul style={styles.titleContainer}>
        <li style={styles.title}>Slide Title</li>
      </ul>
       <Contents key={description[currentItem - 1].id} description={description[currentItem - 1].content} />
    </div>
  );
}
NotesContent.PropTypes = {
  currentItem: PropTypes.number,
};
NotesContent.defaultProps = {
  currentItem: null,
};
export default NotesContent;

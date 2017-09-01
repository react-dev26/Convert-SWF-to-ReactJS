import React, { PropTypes } from 'react';
import styles from './styles';

function Contents({ description}) {
  return (
    <ul id="noteBody" style={styles.notesBody}>
      {description}
      <li style={styles.contact}>@Copyright 2017 <span style={{fontStyle: 'italic'}}>nonprofit-cpa.com</span> AllRights Reserved</li>
    </ul>
  );
}

Contents.PropTypes = {
  description: PropTypes.node,
};
Contents.defaultProps ={
  description: null,
};

export default Contents;

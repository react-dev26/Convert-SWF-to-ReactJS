import React, { PropTypes } from 'react';
import styles from './styles';

function PopUp({handlePopDown}) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span>Attachments</span>
        <div onTouchTap={handlePopDown}>
          <i className="material-icons" style={{fontSize: 12, cursor: 'pointer'}}>clear</i>
        </div>
      </div>
      <ul style={styles.titleContainer}>
        <li style={styles.text}>File Name</li>
        <li style={styles.text}>Size</li>
      </ul>
    </div>
  );
}
PopUp.PropTypes = {
  handlePopDown: PropTypes.func,
};
export default PopUp;

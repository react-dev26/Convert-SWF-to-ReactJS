import React from 'react';

import zoom from 'styles/images/zoom.png';
import styles from './styles';

function PptPlayer() {
  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
      </div>
      <div style={styles.playerContainer}>
        <div style={styles.optionBtn}>
          <div className="playIcon">
            <button>
              <i className="material-icons">stop</i>
            </button>
          </div>
          <div style={styles.PNBtnContainer}>
            <button style={styles.btn}>
              <i style={styles.skip} className="material-icons">skip_previous</i>
            </button>
            <button style={{...styles.btn, ...styles.btn.next}}>
              <i style={styles.skip} className="material-icons">skip_next</i>
            </button>
          </div>
          <div style={styles.slide}>
            <span style={styles.span}>Slide</span>
            <span style={styles.span}>2 / 75</span>
            <span style={styles.span}>Stopped</span>
          </div>
          <div className="playRightIconContainer">
            <span>time frame</span>
            <div className="volumeIcon">
              <button>
                <i className="material-icons">volume_up</i>
              </button>
            </div>
            <button className="attachFile">
              <i className="material-icons">attach_file</i>
            </button>
            <button className="zoomInOut">
              <img src={zoom} alt="zoom" width="20px"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PptPlayer;

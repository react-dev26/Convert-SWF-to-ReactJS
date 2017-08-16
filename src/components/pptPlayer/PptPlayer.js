import React from 'react';

import styles from './styles';

function PptPlayer() {
  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
      </div>
      <div style={styles.playerContainer}>
        <div style={styles.optionBtn}>
          <button style={styles.playerBtn}>
          play
          </button>
          <div style={styles.PNBtnContainer}>
            <button style={styles.btn}>
            pre
            </button>
            <button style={styles.btn}>
            next
            </button>
          </div>
          <div style={styles.slide}>
            <span style={styles.span}>Slide</span>
            <span style={styles.span}>2 / 75</span>
            <span style={styles.span}>Stopped</span>
          </div>
          <div style={{marginLeft: 150}}>
            <span>time frame</span>
            <button style={styles.audio}>
            audio
            </button>
            <button style={styles.updateBtn}>
            att
            </button>
            <button>
            zM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PptPlayer;

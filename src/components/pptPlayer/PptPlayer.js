import React, { PropTypes } from 'react';
import zoom from 'styles/images/zoom.png';
import styles from './styles';

function PptPlayer({ menuState, handleMenuVisibleState, handleMenuDisableState }) {

  const getPlayContainerStyle = index =>
    <div style={index?styles.positionClose:styles.position}>
    {
      index ?
        <div style={styles.playerContainerClose}>
          <div style={styles.optionBtnClose}>
            <div className="playIcon customPlay">
              <button>
                <i className="material-icons">stop</i>
              </button>
            </div>
            <div style={styles.PNBtnContainerClose}>
              <button style={styles.btn}>
                <i style={styles.skip} className="material-icons">skip_previous</i>
              </button>
              <button style={{...styles.btn, ...styles.btn.next}}>
                <i style={styles.skip} className="material-icons">skip_next</i>
              </button>
            </div>
            <div style={styles.playRightIconContainer}>
              <div className="volumeIconClose">
                <button>
                  <i className="material-icons">volume_up</i>
                </button>
              </div>
              <div className="volumeIconClose span">
                <button className="zoomInOut" onTouchTap={handleMenuVisibleState}>
                  <img src={zoom} alt="zoom" width="15px"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      :
        <div style={styles.playerContainerOpen}>
          <div style={styles.optionBtnOpen}>
            <div className="playIcon">
              <button>
                <i className="material-icons">stop</i>
              </button>
            </div>
            <div style={styles.PNBtnContainerOpen}>
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
              <button className="attachFile" onTouchTap={handleMenuVisibleState}>
                <i className="material-icons">attach_file</i>
              </button>
              <button className="zoomInOut" onTouchTap={handleMenuDisableState}>
                <img src={zoom} alt="zoom" width="20px"/>
              </button>
            </div>
          </div>
        </div>
    }
    </div>;
  const getPlayContainer = (
      menuState ? getPlayContainerStyle(true) : getPlayContainerStyle(false)
  )
  console.log('test', menuState);
  return (
    <div style={menuState? styles.containerClose : styles.containerOpen}>
      <div style={menuState? styles.videoWrapperClose : styles.videoWrapperOpen}>
      </div>
      {getPlayContainer}
    </div>
  );
}
PptPlayer.PropTypes = {
  menuState: PropTypes.bool,
  handleMenuVisibleState: PropTypes.func,
  handleMenuDisableState: PropTypes.func,
};

export default PptPlayer;

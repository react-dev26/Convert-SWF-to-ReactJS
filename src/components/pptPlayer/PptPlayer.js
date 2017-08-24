import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player';

import zoom from 'styles/images/zoom.png';
import styles from './styles';

function PptPlayer(
  { menuState,
    handleMenuVisibleState,
    handleMenuDisableState,
    playerState,
    handlePlay,
    handleStop,
    currentItem,
    handleNextPlayer,
    handlePrePlayer,
    handlePopDown,
    handlePopUp,
    currentPopState,
  })
{
  const getPlayContainerStyle = index =>
    <div style={index?styles.positionClose:styles.position}>
    {
      index ?
        <div style={styles.playerContainerClose}>
          <div style={styles.optionBtnClose}>
            <div className="playIcon customPlay">
              <button onTouchTap={playerState ? handleStop : handlePlay}>
                {
                  playerState ? <i className="material-icons">stop</i>
                  : <i className="material-icons">play_arrow</i>
                }
              </button>
            </div>
            <div style={styles.PNBtnContainerClose}>
              <button style={styles.btn} onTouchTap={() => {
                handlePrePlayer(currentItem - 1);
              }}>
                <i style={styles.skip} className="material-icons">skip_previous</i>
              </button>
              <button style={{...styles.btn, ...styles.btn.next}} onTouchTap={() => {
                handleNextPlayer(currentItem + 1);
              }}>
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
              <button onTouchTap={playerState ? handleStop : handlePlay}>
                {
                  playerState ? <i className="material-icons">stop</i>
                  : <i className="material-icons">play_arrow</i>
                }
              </button>
            </div>
            <div style={styles.PNBtnContainerOpen}>
              <button style={styles.btn} onTouchTap={() => {
                handlePrePlayer(currentItem - 1);
              }}>
                <i style={styles.skip} className="material-icons">skip_previous</i>
              </button>
              <button style={{...styles.btn, ...styles.btn.next}} onTouchTap={() => {
                handleNextPlayer(currentItem + 1);
              }}>
                <i style={styles.skip} className="material-icons">skip_next</i>
              </button>
            </div>
            <div style={styles.slide}>
              <span style={styles.span}>Slide</span>
              <span style={styles.span}>{currentItem} / 90</span>
              {
                playerState ? <span style={styles.span}>Playing</span> : <span style={styles.span}>Stopped</span>
              }
            </div>
            <div className="playRightIconContainer">
              <span>time frame</span>
              <div className="volumeIcon">
                <button>
                  <i className="material-icons">volume_up</i>
                </button>
              </div>
              <button className="attachFile" onTouchTap={currentPopState ? handlePopDown : handlePopUp}>
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
  return (
    <div style={menuState? styles.containerClose : styles.containerOpen}>
      {
        playerState ? <ReactPlayer url='data/s.mp4' playing width='inherit' height='inherit'/>
        : <ReactPlayer url='data/s.mp4' width='inherit' height='inherit'/>
      }

      {getPlayContainer}
    </div>
  );
}
PptPlayer.PropTypes = {
  menuState: PropTypes.bool,
  playerState: PropTypes.bool,
  currentItem: PropTypes.number,
  handlePlay: PropTypes.func,
  handleStop: PropTypes.func,
  handleMenuVisibleState: PropTypes.func,
  handleMenuDisableState: PropTypes.func,
  handleNextPlayer: PropTypes.func,
  handlePrePlayer: PropTypes.func,
  handlePopUp: PropTypes.func,
  handlePopDown: PropTypes.func,
  currentPopState: PropTypes.bool,
};

export default PptPlayer;

import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player';
import ImmutablePropTypes from 'react-immutable-proptypes';

import zoom from 'styles/images/zoom.png';
import styles from './styles';

class PptPlayer extends Component {
  static PropTypes = {
    menuState: PropTypes.bool,
    playerState: PropTypes.bool,
    currentItem: PropTypes.number,
    handlePlay: PropTypes.func,
    handleStop: PropTypes.func,
    handleMenuVisibleState: PropTypes.func,
    handleMenuDisableState: PropTypes.func,
    handleSelectItemPlayer: PropTypes.func,
    handlePopUp: PropTypes.func,
    handlePopDown: PropTypes.func,
    currentPopState: PropTypes.bool,
    data: ImmutablePropTypes.map,
  }
  render() {
    const {
      menuState,
      playerState,
      currentItem,
      handlePlay,
      handleStop,
      handleMenuVisibleState,
      handleMenuDisableState,
      handleSelectItemPlayer,
      handlePopUp,
      handlePopDown,
      currentPopState,
      data
    } = this.props;
    const selectedContent = data.getIn(['contents', (currentItem-1)]);
    const url = selectedContent && selectedContent.get('url');
    const count = data.get('contents') && data.get('contents').count();
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
                  handleSelectItemPlayer(currentItem - 1);
                }}>
                  <i style={styles.skip} className="material-icons">skip_previous</i>
                </button>
                <button style={{...styles.btn, ...styles.btn.next}} onTouchTap={() => {
                  handleSelectItemPlayer(currentItem + 1);
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
                  handleSelectItemPlayer(currentItem - 1);
                }}>
                  <i style={styles.skip} className="material-icons">skip_previous</i>
                </button>
                <button style={{...styles.btn, ...styles.btn.next}} onTouchTap={() => {
                  handleSelectItemPlayer(currentItem + 1);
                }}>
                  <i style={styles.skip} className="material-icons">skip_next</i>
                </button>
              </div>
              <div style={styles.slide}>
                <span style={styles.span}>Slide</span>
                <span style={styles.span}>{currentItem} / {count}</span>
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
      <div className="player-content" style={menuState? styles.containerClose : styles.containerOpen}>
        {
          playerState ? <ReactPlayer url={url} playing width='951px' height='713px' style={{background: '#000'}}/>
          : <ReactPlayer url={url} width='951px' height='713px' style={{background: '#000'}}/>
        }

        {getPlayContainer}
      </div>
    );
  }
}

export default PptPlayer;

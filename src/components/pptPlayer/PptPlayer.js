import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player';

import Volume from './Volume';
import PopUp from './PopUp';
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
    data: PropTypes.array,
    handleVolumeWidgetHidden: PropTypes.func,
    handleVolumeWidgetShow: PropTypes.func,
    currentVolumeState: PropTypes.bool,
  }
  setProductItem = index => {
    for (var i = 0; i < this.props.data.length; i++) {
      document.getElementById(i+1).style.background = 'inherit';
    }
    const selectedItem = document.getElementById(index);
    selectedItem.style.background = '#777';
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
      data,
      handleVolumeWidgetShow,
      handleVolumeWidgetHidden,
      currentVolumeState,
    } = this.props;
    const getUrl = data.map(index => index.url);
    const count = data.length;
    const url = getUrl[currentItem-1];
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
                  this.setProductItem(currentItem - 1);
                }}>
                  <i style={styles.skip} className="material-icons">skip_previous</i>
                </button>
                <button style={{...styles.btn, ...styles.btn.next}} onTouchTap={() => {
                  handleSelectItemPlayer(currentItem + 1);
                  this.setItemId(currentItem + 1);
                }}>
                  <i style={styles.skip} className="material-icons">skip_next</i>
                </button>
              </div>
              <div style={styles.playRightIconContainer}>
                <div className="volumeIconClose">
                  <button onTouchTap={ currentVolumeState ? handleVolumeWidgetHidden : handleVolumeWidgetShow}>
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
                  this.setProductItem(currentItem - 1);
                }}>
                  <i style={styles.skip} className="material-icons">skip_previous</i>
                </button>
                <button style={{...styles.btn, ...styles.btn.next}} onTouchTap={() => {
                  handleSelectItemPlayer(currentItem + 1);
                  this.setProductItem(currentItem + 1);
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
                  <button onTouchTap={ currentVolumeState ? handleVolumeWidgetHidden : handleVolumeWidgetShow}>
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
    console.log('vol', currentVolumeState);
    return (
      <div className="player-content" style={menuState? styles.containerClose : styles.containerOpen}>
        {
          playerState ? <ReactPlayer url={url} playing width='951px' height='713px' style={{background: '#000'}}/>
          : <ReactPlayer url={url} width='951px' height='713px' style={{background: '#000'}}/>
        }
        {
          currentPopState? <PopUp handlePopDown={handlePopDown}/>
          : <div></div>
        }
        {
          currentVolumeState ? <Volume />
          : <div></div>
        }
        {getPlayContainer}
      </div>
    );
  }
}

export default PptPlayer;

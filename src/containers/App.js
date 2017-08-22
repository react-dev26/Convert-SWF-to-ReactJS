import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { handleMenuDisableState, handleMenuVisibleState, handlePlay, handleStop } from 'actions';
import { currentMenuVisibleSettingSelector, currentPlayerSettingSelector } from 'selectors';
import Options from 'components/options/Options';
import PptPlayer from 'components/pptPlayer/PptPlayer';
import styles from './styles';

const mapStateToProps = state => ({
  currentMenuState: currentMenuVisibleSettingSelector(state),
  currentPlayerState: currentPlayerSettingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  handleMenuVisibleState: () => dispatch(handleMenuVisibleState()),
  handleMenuDisableState: () => dispatch(handleMenuDisableState()),
  handlePlay: () => dispatch(handlePlay()),
  handleStop: () => dispatch(handleStop()),
})
class App extends Component {

static PropTypes = {
  currentMenuState: PropTypes.bool,
  currentPlayerState: PropTypes.bool,
  handleMenuVisibleState: PropTypes.func,
  handleMenuDisableState: PropTypes.func,
  handlePlay: PropTypes.func,
  handleStop: PropTypes.func,
}

static defaultProps = {
  currentMenuState: null,
  currentPlayerState: null,
  handleMenuDisableState: () =>{},
  handleMenuVisibleState: () =>{},
  handlePlay: () =>{},
  handleStop: () =>{},
}
  render() {
    return (
      <div className="wrapper" style={this.props.currentMenuState? styles.wrapperOpen : styles.wrapperClose}>
        <PptPlayer menuState={this.props.currentMenuState} handleMenuVisibleState={this.props.handleMenuVisibleState} handleMenuDisableState={this.props.handleMenuDisableState} playerState={this.props.currentPlayerState} handlePlay={this.props.handlePlay} handleStop={this.props.handleStop}/>
        <Options menuState={this.props.currentMenuState}/>
        <div className="mainBtn" style={this.props.currentMenuState? styles.mainBtnClose:styles.mainBtn}>
          <button>Back</button>
          <button>Menu</button>
        </div>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);

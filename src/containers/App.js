import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { handleMenuDisableState, handleMenuVisibleState } from 'actions';
import { currentMenuVisibleSettingSelector } from 'selectors';
import Options from 'components/options/Options';
import PptPlayer from 'components/pptPlayer/PptPlayer';
import styles from './styles';

const mapStateToProps = state => ({
  currentMenuState: currentMenuVisibleSettingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  handleMenuVisibleState: () => dispatch(handleMenuVisibleState()),
  handleMenuDisableState: () => dispatch(handleMenuDisableState()),
})
class App extends Component {

static PropTypes = {
  currentMenuState: PropTypes.bool,
  handleMenuVisibleState: PropTypes.func,
  handleMenuDisableState: PropTypes.func,
}

static defaultProps = {
  currentMenuState: null,
  handleMenuDisableState: () =>{},
  handleMenuVisibleState: () =>{},
}
  render() {
    console.log(this.props.currentMenuState);
    return (
      <div className="wrapper" style={this.props.currentMenuState? styles.wrapperOpen : styles.wrapperClose}>
        <PptPlayer menuState={this.props.currentMenuState} handleMenuVisibleState={this.props.handleMenuVisibleState} handleMenuDisableState={this.props.handleMenuDisableState}/>
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

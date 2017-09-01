import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { handleMenuDisableState, handleMenuVisibleState, handlePlay, handleStop, handleSelectItemPlayer, loadData } from 'actions';
import { handlePopUp, handlePopDown } from 'actions/popupAction';
import { currentMenuVisibleSettingSelector, currentPlayerSettingSelector, currentItemSelector, dataSelector } from 'selectors';
import { currentPopStateSelector } from 'selectors/popupSelector';
import Options from 'components/options/Options';
import PptPlayer from 'components/pptPlayer/PptPlayer';
import styles from './styles';

const mapStateToProps = state => ({
  currentItem: currentItemSelector(state),
  currentMenuState: currentMenuVisibleSettingSelector(state),
  currentPlayerState: currentPlayerSettingSelector(state),
  currentPopState: currentPopStateSelector(state),
  data: dataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  handleMenuVisibleState: () => dispatch(handleMenuVisibleState()),
  handleMenuDisableState: () => dispatch(handleMenuDisableState()),
  handlePlay: () => dispatch(handlePlay()),
  handleStop: () => dispatch(handleStop()),
  handleSelectItemPlayer: index => dispatch(handleSelectItemPlayer(index)),
  handlePopDown: () => dispatch(handlePopDown()),
  handlePopUp: () => dispatch(handlePopUp()),
  loadData: () => dispatch(loadData()),
})



class App extends Component {

static PropTypes = {
  currentMenuState: PropTypes.bool,
  currentPlayerState: PropTypes.bool,
  currentItem: PropTypes.number,
  currentPopState: PropTypes.bool,
  data: PropTypes.list,
  handleMenuVisibleState: PropTypes.func,
  handleMenuDisableState: PropTypes.func,
  handlePlay: PropTypes.func,
  handleStop: PropTypes.func,
  handleSelectItemPlayer: PropTypes.func,
  handlePopUp: PropTypes.func,
  handlePopDown: PropTypes.func,
  loadData: PropTypes.func,

}

static defaultProps = {
  currentMenuState: null,
  currentPlayerState: null,
  currentPopState: null,
  handleMenuDisableState: () =>{},
  handleMenuVisibleState: () =>{},
  handlePlay: () =>{},
  handleStop: () =>{},
  handleSelectItemPlayer: () =>{},
  handlePopUp: () =>{},
  handlePopDown: () =>{},
}
componentDidMount() {
  this.props.loadData();
}
setItemId = index => {
  this.props.handleSelectItemPlayer(index);
  for (var i = 0; i < this.props.data.length; i++) {
    document.getElementById(i+1).style.background = 'inherit';
  }
  const selectedItem = document.getElementById(index);
  selectedItem.style.background = '#777';
}
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper" style={this.props.currentMenuState? styles.wrapperOpen : styles.wrapperClose}>
        <PptPlayer
          menuState={this.props.currentMenuState}
          handleMenuVisibleState={this.props.handleMenuVisibleState}
          handleMenuDisableState={this.props.handleMenuDisableState}
          playerState={this.props.currentPlayerState}
          handlePlay={this.props.handlePlay}
          handleStop={this.props.handleStop}
          currentItem={this.props.currentItem}
          handleSelectItemPlayer={this.props.handleSelectItemPlayer}
          currentPopState={this.props.currentPopState}
          handlePopUp={this.props.handlePopUp}
          handlePopDown={this.props.handlePopDown}
          data={data}
        />
        <Options menuState={this.props.currentMenuState} currentItem={this.props.currentItem} setItemId={this.setItemId} getProductList={data} handleSelectItemPlayer={this.props.handleSelectItemPlayer}/>
        <div className="mainBtn" style={this.props.currentMenuState? styles.mainBtnClose:styles.mainBtn}>
          <button>Back</button>
          <button>Menu</button>
        </div>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);

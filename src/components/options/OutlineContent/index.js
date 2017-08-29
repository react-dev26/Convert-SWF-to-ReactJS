import React, { Component, PropTypes } from 'react';

import ProductList from './ProductList';
import styles from './styles';

class OutlineContent extends Component {
  static PropTypes = {
    getProductList: PropTypes.array,
    handleSelectItemPlayer: PropTypes.func,
  }
  static defaultProps = {
    getProductList: null,
    handleSelectItemPlayer: () => {},
  }

  constructor(props) {
    super(props);
  }

  setItemId = index => {
    this.props.handleSelectItemPlayer(index)
    for (var i = 0; i < this.props.getProductList.length; i++) {
      document.getElementById(i+1).style.background = 'inherit';
    }
    const selectedItem = document.getElementById(index);
    selectedItem.style.background = '#777';
  }
  render() {
    const { getProductList } = this.props;
    return (
      <div style={styles.containers}>
        <ul style={styles.titleContainer}>
          <li style={styles.title}>Slide Title</li>
          <li style={styles.title}>Duration</li>
        </ul>

        <ul id="productListBody" style={styles.itemContainer}>
        {
          getProductList.map(item =>
            <ProductList id={item.id} key={item.id} content={item.title} onClickHandler={this.setItemId}/>)
        }
        </ul>
      </div>
    );
  }
}

export default OutlineContent;

import React, { Component, PropTypes } from 'react';

import ProductList from './ProductList';
import styles from './styles';

class OutlineContent extends Component {
  static PropTypes = {
    getProductList: PropTypes.array,
    setItemId: PropTypes.func,
  }
  static defaultProps = {
    getProductList: null,
    setItemId: () => {},
  }

  constructor(props) {
    super(props);
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
            <ProductList id={item.id} key={item.id} content={item.title} onClickHandler={this.props.setItemId}/>)
        }
        </ul>
      </div>
    );
  }
}

export default OutlineContent;

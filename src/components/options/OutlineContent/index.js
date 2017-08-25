import React, { PropTypes } from 'react';

import ProductList from './ProductList';
import styles from './styles';

function OutlineContent({ getProductList }) {
  console.log('content', getProductList);
  return (
    <div style={styles.containers}>
      <ul style={styles.titleContainer}>
        <li style={styles.title}>Slide Title</li>
        <li style={styles.title}>Duration</li>
      </ul>

      <ul id="productListBody" style={styles.itemContainer}>
      {
        getProductList.map(item =>
          <ProductList key={item} content={item} />)
      }
      </ul>
    </div>
  );
}
OutlineContent.PropTypes = {
  getProductList: PropTypes.array,
};
OutlineContent.defaultProps = {
  getProductList: null
}
export default OutlineContent;

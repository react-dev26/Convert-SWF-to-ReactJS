import React, { PropTypes } from 'react';

import styles from './styles';

function ProductList({ content }) {
  return (
    <div className="product-container" style={styles.container}>
      <i className="material-icons">play_arrow</i>
      <li style={{marginRight: 60}}>{content}</li>
      <li>00:00</li>
    </div>
  );
}
ProductList.PropTypes = {
  content: PropTypes.string,
};

export default ProductList;

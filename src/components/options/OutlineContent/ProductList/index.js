import React, { PropTypes } from 'react';

import styles from './styles';

function ProductList({ id, content }) {
  return (
    <div id={id} className="product-container" style={styles.container}>
      <i className="material-icons">play_arrow</i>
      <li style={{marginRight: 54}}>{content}</li>
      <li>00:00</li>
    </div>
  );
}
ProductList.PropTypes = {
  content: PropTypes.string,
  id: PropTypes.number,
};

export default ProductList;

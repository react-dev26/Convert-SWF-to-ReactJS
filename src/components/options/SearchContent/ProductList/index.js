import React, { PropTypes } from 'react';

import styles from './styles';

function ProductList({ id, content, filter, onClickHandler }) {
  return (
    <div className="product-container" style={filter ? styles.searchFilterContainer : {display: 'none'}} id={id} onClick={() => onClickHandler(id)}>
      <i className="material-icons">play_arrow</i>
      <div style={{marginRight: 54}}>{content}</div>
      <li>00:00</li>
    </div>
  );
}
ProductList.PropTypes = {
  filter: PropTypes.bool,
  content: PropTypes.string,
  id: PropTypes.number,
  onClickHandler: PropTypes.func,
};

export default ProductList;

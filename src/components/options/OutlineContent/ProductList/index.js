import React, { PropTypes } from 'react';

import styles from './styles';

const action = (index) => {
  console.log("id",index)
}
function ProductList({ id, content, onClickHandler }) {

  return (
    <div id={id} className="product-container" style={styles.container} onClick={() => onClickHandler(id)} >
      <i className="material-icons">play_arrow</i>
      <li style={{marginRight: 54}}>{content}</li>
      <li>00:00</li>
    </div>
  );
}
ProductList.PropTypes = {
  content: PropTypes.string,
  id: PropTypes.number,
  onClickHandler: PropTypes.func,
};

export default ProductList;

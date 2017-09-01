import React, { Component, PropTypes } from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import data from 'data';
import ProductList from './ProductList';
import styles from './styles';

const KEYS_TO_FILTERS = ['title', 'id'];

class OutlineContent extends Component {
  constructor() {
    super();
    this.state = { searchTerm: '', filter: false};
    this.searchUpdated = this.searchUpdated.bind(this);
  }
  static PropTypes = {
    setItemId: PropTypes.func,
  }
  static defaultProps = {
    setItemId: () => {},
  }
  searchUpdated(term) {
   this.setState({
     searchTerm: term,
     filter: true,
   });
  }

  render() {
    const filterProduct = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div style={styles.containers}>
        <ul style={styles.titleContainer}>
          <li style={styles.title}>Search for text:</li>
        </ul>
        <div id="filtering">
          <div className="searchBox">
            <SearchInput className='search-input' onChange={this.searchUpdated} />
            <button ><i className="material-icons" >search</i></button>
          </div>
          <ul style={styles.titleContainer}>
            <li style={styles.title}>Slide Title</li>
            <li style={styles.title}>Duration</li>
          </ul>
          <div id="searchResultContent" style={styles.searchListContainer}>
            {
              filterProduct.map(item =>
                <ProductList id={item.id} content={item.title} filter={this.state.filter} key={item.id} onClickHandler={this.props.setItemId} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default OutlineContent;

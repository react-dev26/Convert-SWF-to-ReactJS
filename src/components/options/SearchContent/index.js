import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import data from 'data';
import styles from './styles';

const KEYS_TO_FILTERS = ['title', 'id'];

class OutlineContent extends Component {
  constructor() {
    super();
    this.state = { searchTerm: '', filter: false};
    this.searchUpdated = this.searchUpdated.bind(this);
  }
  searchUpdated(term) {
   this.setState({
     searchTerm: term,
     filter: true,
   });
  }
  render() {
    const filterProduct = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    console.log(this.state.filter);

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
            {filterProduct.map(item => {
              return (
                <div className="product-container" style={(this.state.filter) ? styles.searchFilterContainer : {display: 'none'}} key={item.id}>
                  <i className="material-icons">play_arrow</i>
                  <div style={{marginRight: 54}}>{item.title}</div>
                  <li>00:00</li>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OutlineContent;

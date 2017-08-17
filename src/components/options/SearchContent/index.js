import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import data from './filterTestingData';
import styles from './styles';

const KEYS_TO_FILTERS = ['product.name', 'id'];

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
          {filterProduct.map(item => {
            return (
              <div className='mail' style={(this.state.filter) ? {display: 'block'} : {display: 'none'}} key={item.id}>
                <div className='from'>{item.product.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default OutlineContent;

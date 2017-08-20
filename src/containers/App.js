import React, { Component } from 'react';

import Options from 'components/options/Options';
import PptPlayer from 'components/pptPlayer/PptPlayer';
import styles from './styles';

class App extends Component {

  render() {
    return (
      <div style={styles.wrapper}>
        <PptPlayer/>
        <Options />
      </div>
    );
  }
}

export default (App);

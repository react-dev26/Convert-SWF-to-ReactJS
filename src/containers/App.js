import React, { PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

import Options from 'components/options/Options';
import PptPlayer from 'components/pptPlayer/PptPlayer';
import styles from './styles';

class App extends React.Component {


  render() {

    return (
      <div>
        <div style={styles.wrapper}>
          <PptPlayer />
          <Options />
        </div>
      </div>
    );
  }
}

export default App;

import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Options from 'components/options/Options';
import PptPlayer from 'components/pptPlayer/PptPlayer';
import styles from './styles';

injectTapEventPlugin();

class App extends React.Component {


  render() {

    return (
      <MuiThemeProvider>
      <div>
        <div style={styles.wrapper}>
          <PptPlayer />
          <Options />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

import Options from 'components/Options';
import PptPlayer from 'components/PptPlayer';

class App extends React.Component {


  render() {

    return (
      <div>

        <PptPlayer />
        <Options />
      </div>
    );
  }
}

export default App;

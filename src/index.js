import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from 'setup/store';
import 'styles/main.css';

import App from 'containers/App';

injectTapEventPlugin();
const initialState = fromJS({});
const store = configureStore(initialState);

function renderApp(Component) {
  render(
    <AppContainer>
      <MuiThemeProvider>
        <Provider store={store}>
          <Component />
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderApp(App);

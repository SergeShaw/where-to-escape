import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import CssBaseline from '@material-ui/core/CssBaseline';

import { store, history, persistor } from './configureStore';

import Routing from './routing';

const App = () =>
  <CssBaseline>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routing />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </CssBaseline>;

export default App;

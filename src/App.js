import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, history, persistor } from './configureStore';

import Routing from './routing';

const App = () =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routing />
      </ConnectedRouter>
    </PersistGate>
  </Provider>;

export default App;

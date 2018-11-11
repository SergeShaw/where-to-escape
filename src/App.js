import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from './configureStore';

import Routing from './routing';

const App = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routing />
    </ConnectedRouter>
  </Provider>;

export default App;

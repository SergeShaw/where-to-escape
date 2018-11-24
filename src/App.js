import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { Route, Switch } from 'react-router' // react-router v4
import CssBaseline from '@material-ui/core/CssBaseline';

import Question from './containers/Question/Question';
import Start from './containers/Start';
import { store, history, persistor } from './configureStore';
import Result from './containers/result/Result';

const App = () =>
  <CssBaseline>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/question/:id" component={Question} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </CssBaseline>;

export default App;

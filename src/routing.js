import React from 'react';
import { Route, Switch } from 'react-router' // react-router v4

const Routing = () =>
  <Switch>
    <Route exact path="/" render={() => (<div>Match</div>)} />
    <Route render={() => (<div>Miss</div>)} />
  </Switch>

export default Routing;

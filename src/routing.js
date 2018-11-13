import React from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import Question from './containers/Question';
import Start from './containers/Start';

const Routing = () =>
  <Switch>
    <Route exact path="/" component={Start} />
    <Route exact path="/1" component={Question} />
    <Route render={() => (<div>Miss</div>)} />
  </Switch>

export default Routing;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadData } from './data/ducks';
import Question from './containers/Question';
import Start from './containers/Start';
import RadioQuestion from './containers/RadioQuestion';

class Routing extends Component {
  componentDidMount() {
    this.props.actions.loadData();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/1" render={() =>
          <RadioQuestion
            title="Хочешь, чтобы было тепло или это не важно?"
            options={[
              { text: "Хочу, чтобы было очень жарко" },
              { text: "Мне не важно" },
              { text: "Мне нравится когда холодно" },
              { text: "Люблю умеренный климат" },
            ]}
          />
        } />
        <Route exact path="/2" component={Question} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({ loadData }, dispatch)
  })
)(Routing);
